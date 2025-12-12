import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonEditor } from "@/components/submit-agent/JsonEditor";
import { MOCK_AGENT_DETAILS } from "@/lib/mocks/agent-data";
import {
    Play,
    GitFork,
    Share2,
    ArrowLeft,
    Star,
    TrendingUp,
    Calendar,
    Code,
    Activity,
    Shield
} from "lucide-react";

export function AgentDetailsPage() {
    const { agentId } = useParams();
    // In a real app, fetch data based on agentId
    console.log("Details for:", agentId);
    const agent = MOCK_AGENT_DETAILS;
    const [activeTab, setActiveTab] = useState<'overview' | 'editor'>('overview');

    return (
        <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Header / Nav */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200/80 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-6 md:px-10 lg:px-20 py-4 backdrop-blur-sm">
                <Link to="/marketplace" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Marketplace</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="bg-transparent border-white/10 hover:bg-white/5 gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-500 gap-2 shadow-lg shadow-blue-900/20">
                        <Play className="w-4 h-4 fill-current" /> Run Agent
                    </Button>
                </div>
            </header>

            <main className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
                {/* Agent Header Info */}
                <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                        <div className="flex gap-6">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-xl shadow-black/20">
                                <span className="text-4xl font-bold text-white">{agent.name[0]}</span>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{agent.name}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                                            {agent.author.avatar}
                                        </div>
                                        <span className="text-white/80">{agent.author.username}</span>
                                    </div>
                                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {agent.rating}</span>
                                    <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> {agent.runs} runs</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated {agent.updatedAt}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="secondary" className="gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white">
                                <GitFork className="w-4 h-4" /> Fork Template
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-white/10 mb-8">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'overview' ? 'text-white' : 'text-muted-foreground hover:text-white/80'}`}
                        >
                            Overview
                            {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full" />}
                        </button>
                        <button
                            onClick={() => setActiveTab('editor')}
                            className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'editor' ? 'text-white' : 'text-muted-foreground hover:text-white/80'}`}
                        >
                            Flow Design (IR)
                            {activeTab === 'editor' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full" />}
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="animate-in fade-in zoom-in-95 duration-300">
                    {activeTab === 'overview' ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <section>
                                    <h3 className="text-xl font-semibold text-white mb-4">About this Agent</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {agent.description}
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-semibold text-white mb-4">Capabilities</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: <Activity className="w-5 h-5 text-blue-400" />, title: "Real-time Processing", desc: "Processes events as they happen via Webhook." },
                                            { icon: <Shield className="w-5 h-5 text-green-400" />, title: "Secure Execution", desc: "Sandboxed environment with strict permission controls." },
                                            { icon: <Code className="w-5 h-5 text-purple-400" />, title: "custom Data Enrichment", desc: "Connects to external APIs like Clearbit." },
                                            { icon: <Star className="w-5 h-5 text-yellow-400" />, title: "AI Powered", desc: "Utilizes GPT-4 for intelligent scoring." },
                                        ].map((item, i) => (
                                            <GlassCard key={i} className="p-4 flex gap-4 items-start bg-white/5 border-white/5">
                                                <div className="mt-1">{item.icon}</div>
                                                <div>
                                                    <h4 className="font-medium text-white">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                                </div>
                                            </GlassCard>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <GlassCard className="p-6 space-y-4">
                                    <h3 className="font-semibold text-white">Agent Specs</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Category</span>
                                            <span className="text-white">{agent.category}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Version</span>
                                            <span className="text-white font-mono">{agent.flow.version.displayName}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">License</span>
                                            <span className="text-white">MIT</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Pricing</span>
                                            <span className="text-green-400 font-medium">{agent.price}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                                        View Documentation
                                    </Button>
                                </GlassCard>

                                <GlassCard className="p-6">
                                    <h3 className="font-semibold text-white mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Marketing", "Lead Gen", "Automation", "GPT-4", "Clearbit"].map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20">
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>
                        </div>
                    ) : (
                        <div className="h-[600px] w-full animate-in fade-in slide-in-from-right-4 duration-300">
                            <GlassCard className="h-full flex flex-col p-0 overflow-hidden border-white/10">
                                <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Code className="w-4 h-4 text-yellow-400" />
                                        <span className="font-mono text-sm text-white/80">flow.json</span>
                                    </div>
                                    <Badge variant="outline" className="text-xs border-green-500/30 text-green-400 bg-green-500/10">Read Only Mode</Badge>
                                </div>
                                <div className="flex-1 relative">
                                    <JsonEditor
                                        value={JSON.stringify(agent.flow, null, 2)}
                                        onChange={() => { }}
                                        className="h-full w-full"
                                        readOnly={true}
                                    />
                                </div>
                            </GlassCard>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
