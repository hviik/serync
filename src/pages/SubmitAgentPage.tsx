import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JsonEditor } from "@/components/submit-agent/JsonEditor";
import { ArrowLeft, ArrowRight, Check, FileJson, Loader2, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SubmitAgentPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        version: "1.0.0",
        flowJson: "",
    });
    const [isJsonValid, setIsJsonValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate submission
        console.log("Submitting Agent:", formData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        navigate("/dashboard/agents"); // Redirect to agents list
    };

    const isStep1Valid = formData.name.length > 2 && formData.description.length > 10;
    const isStep2Valid = isJsonValid && formData.flowJson.length > 0;

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Submit New Agent</h1>
                <p className="text-muted-foreground">Deploy your Activepieces workflow to the Serync network.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8 px-4">
                <StepIndicator number={1} title="Metadata" currentStep={step} />
                <div className={`flex-1 h-px mx-4 ${step > 1 ? "bg-primary" : "bg-white/10"}`} />
                <StepIndicator number={2} title="Workflow Code" currentStep={step} />
                <div className={`flex-1 h-px mx-4 ${step > 2 ? "bg-primary" : "bg-white/10"}`} />
                <StepIndicator number={3} title="Review" currentStep={step} />
            </div>

            <GlassCard className="p-8 min-h-[500px] flex flex-col">
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-400" /> Agent Details
                        </h2>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Agent Name</Label>
                                <Input
                                    id="name"
                                    placeholder="e.g., Email Sentiment Analyzer"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="glass-input"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="version">Version</Label>
                                <Input
                                    id="version"
                                    placeholder="1.0.0"
                                    value={formData.version}
                                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                                    className="glass-input font-mono w-32"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="What does this agent do?"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="glass-input min-h-[150px]"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 flex-1 flex flex-col">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <FileJson className="w-5 h-5 text-yellow-400" /> Intermediate Representation (IR)
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            We use the Activepieces Flow format as our primary IR.
                        </p>

                        <div className="flex-1">
                            <JsonEditor
                                value={formData.flowJson}
                                onChange={(val, valid) => {
                                    setFormData({ ...formData, flowJson: val });
                                    setIsJsonValid(valid);
                                }}
                                className="h-full"
                            />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-xl font-semibold">Review Submission</h2>

                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <span className="text-muted-foreground">Name:</span>
                                    <span className="col-span-2 font-medium">{formData.name}</span>

                                    <span className="text-muted-foreground">Version:</span>
                                    <span className="col-span-2 font-medium">{formData.version}</span>

                                    <span className="text-muted-foreground">Description:</span>
                                    <span className="col-span-2 text-muted-foreground">{formData.description}</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground">IR Payload Size:</span>
                                    <span className="text-sm font-mono">{formData.flowJson.length} bytes</span>
                                </div>
                                {isJsonValid ? (
                                    <div className="flex items-center text-green-400 text-sm">
                                        <Check className="w-4 h-4 mr-2" /> Valid Flow Structure Detected
                                    </div>
                                ) : (
                                    <div className="flex items-center text-red-400 text-sm">
                                        <Loader2 className="w-4 h-4 mr-2" /> Validation Pending
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="border-t border-white/5 pt-6 mt-auto flex justify-between">
                    <Button
                        variant="ghost"
                        onClick={handleBack}
                        disabled={step === 1 || isSubmitting}
                        className="hover:bg-white/10"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    {step < 3 ? (
                        <Button
                            onClick={handleNext}
                            disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                            className="bg-white text-black hover:bg-zinc-200"
                        >
                            Next <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-purple-600 hover:bg-purple-700 text-white min-w-[150px]"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                            ) : (
                                "Submit Agent"
                            )}
                        </Button>
                    )}
                </div>
            </GlassCard>
        </div>
    );
}

function StepIndicator({ number, title, currentStep }: { number: number, title: string, currentStep: number }) {
    const isActive = currentStep >= number;
    const isCurrent = currentStep === number;

    return (
        <div className={`flex flex-col items-center gap-2 ${isActive ? "text-white" : "text-muted-foreground"}`}>
            <div className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                ${isCurrent ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                ${isActive && !isCurrent ? "bg-green-500 text-black" : ""}
                ${!isActive ? "bg-white/10 border border-white/10" : ""}
            `}>
                {isActive && !isCurrent ? <Check className="w-4 h-4" /> : number}
            </div>
            <span className="text-xs font-medium">{title}</span>
        </div>
    );
}
