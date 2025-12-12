import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface JsonEditorProps {
    value: string;
    onChange: (value: string, isValid: boolean) => void;
    className?: string;
    readOnly?: boolean;
}

export function JsonEditor({ value, onChange, className, readOnly = false }: JsonEditorProps) {
    const [error, setError] = useState<string | null>(null);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validateJson(value);
    }, [value]);

    const validateJson = (jsonString: string) => {
        if (!jsonString.trim()) {
            setError(null);
            setIsValid(false);
            onChange(jsonString, false);
            return;
        }

        try {
            const parsed = JSON.parse(jsonString);
            // Basic structural check (very loose for now)
            if (typeof parsed !== 'object' || parsed === null) {
                throw new Error("Input must be a JSON object");
            }

            setError(null);
            setIsValid(true);
            onChange(jsonString, true);
        } catch (e) {
            setError((e as Error).message);
            setIsValid(false);
            onChange(jsonString, false);
        }
    };

    return (
        <div className={cn("space-y-2", className)}>
            <div className="flex items-center justify-between">
                <Label>Flow JSON</Label>
                {value && (
                    <span className={cn("text-xs flex items-center", isValid ? "text-green-400" : "text-red-400")}>
                        {isValid ? (
                            <><CheckCircle2 className="w-3 h-3 mr-1" /> Valid JSON</>
                        ) : (
                            <><AlertCircle className="w-3 h-3 mr-1" /> Invalid JSON</>
                        )}
                    </span>
                )}
            </div>
            <Textarea
                value={value}
                onChange={(e) => !readOnly && onChange(e.target.value, isValid)}
                placeholder='Paste your Activepieces Flow JSON here...'
                className={cn(
                    "font-mono text-xs min-h-[400px] glass-input resize-y",
                    error && "border-red-500/50 focus:border-red-500",
                    readOnly && "opacity-80 cursor-default bg-white/5"
                )}
                spellCheck={false}
                readOnly={readOnly}
            />
            {error && (
                <p className="text-xs text-red-400 font-medium">{error}</p>
            )}
            {!readOnly && (
                <p className="text-xs text-muted-foreground">
                    Paste the full JSON export of your Activepieces workflow.
                </p>
            )}
        </div>
    );
}
