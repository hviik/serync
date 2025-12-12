import { Link } from "react-router-dom";
import { Code, Globe, ShieldCheck, Download, GitFork, DollarSign } from "lucide-react";

export function CoreFeaturesPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-white antialiased">
            <div className="absolute inset-0 z-0 bg-background-dark">
                <div className="absolute -top-1/4 left-1/4 size-96 animate-pulse rounded-full bg-primary/20 blur-3xl filter"></div>
                <div className="absolute -bottom-1/4 right-1/4 size-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl filter [animation-delay:2s]"></div>
                <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-500/10 blur-3xl filter [animation-delay:4s]"></div>
            </div>

            {/* Header */}
            <div className="relative z-20 flex flex-col min-h-screen">
                <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
                    <div className="flex w-full max-w-[960px] flex-1 flex-col">
                        <header className="flex items-center justify-between whitespace-nowrap rounded-xl p-3 glass-panel mb-10">
                            <div className="flex items-center gap-4 text-white">
                                <div className="size-6">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6_319)">
                                            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Serync</h2>
                            </div>
                            <div className="flex flex-1 items-center justify-end gap-6 sm:gap-8">
                                <div className="hidden items-center gap-9 md:flex">
                                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/">Home</Link>
                                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/marketplace">Explore Agents</Link>
                                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/pricing">Pricing</Link>
                                </div>
                                <Link to="/login">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Sign In</span>
                                    </button>
                                </Link>
                            </div>
                        </header>

                        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                                Core Technology
                            </h1>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Serync isn't just a marketplace; it's a fundamental shift in how AI agents are built, shared, and deployed.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                            {[
                                {
                                    icon: <Code className="h-8 w-8 text-blue-400" />,
                                    title: "Your Agents, Your Code",
                                    desc: "Post the code of your own AI agents directly to the platform. Serync is built to be the home for your intelligence.",
                                },
                                {
                                    icon: <Globe className="h-8 w-8 text-purple-400" />,
                                    title: "Beyond Platform Walls",
                                    desc: "We convert your agent's code into a 'System Agnostic Intermediate Representation (IR)'. Run your agents anywhere, untethered.",
                                },
                                {
                                    icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
                                    title: "Trust & Security",
                                    desc: "Unique 'Canonical DAG Deduplication' ensures every agent is genuine, eliminating spam and verifying integrity.",
                                },
                                {
                                    icon: <Download className="h-8 w-8 text-yellow-400" />,
                                    title: "Use, Host, Take It",
                                    desc: "Full control: Use agents on Serync, let us host them, or download the IR to deploy on your own infrastructure.",
                                },
                                {
                                    icon: <GitFork className="h-8 w-8 text-pink-400" />,
                                    title: "Innovate Together",
                                    desc: "Fork like GitHub. Take community agents, modify them, and create your own unique versions.",
                                },
                                {
                                    icon: <DollarSign className="h-8 w-8 text-teal-400" />,
                                    title: "Earn from Brilliance",
                                    desc: "Original owners earn royalties when their agent templates are used on Serync's paid compute infrastructure.",
                                },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-1 flex-col gap-4 rounded-xl p-6 glass-card border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="p-3 rounded-lg bg-white/5 w-fit">
                                        {feature.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-xl font-bold leading-tight">{feature.title}</h3>
                                        <p className="text-white/60 text-sm font-normal leading-normal">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-white/10 mt-auto">
                            <p className="text-white/50 text-sm font-normal leading-normal">© 2024 Serync. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
