import { useState } from "react";
import { Link } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistPage() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Waitlist signup:", email);
        alert("Thanks for joining the waitlist!");
        setEmail("");
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0F19] font-display text-white antialiased selection:bg-primary selection:text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
                <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
                    <div className="flex w-full max-w-[1200px] flex-1 flex-col">
                        {/* Floating Glass Navbar */}
                        <header className="flex items-center justify-between whitespace-nowrap rounded-xl p-3 glass-panel border border-white/5 bg-[#131b2c]/60 backdrop-blur-xl mb-12 sm:mb-20">
                            <div className="flex items-center gap-4 pl-2">
                                <SeryncLogo iconClassName="size-6 text-primary" textClassName="text-xl font-bold" />
                            </div>
                            <div className="flex items-center justify-end gap-6">
                                <div className="hidden items-center gap-6 md:flex text-sm font-medium text-gray-400">
                                    <span className="w-px h-4 bg-white/10 mx-2" />
                                    <Link to="/login" className="hover:text-white transition-colors">Log In</Link>
                                </div>
                                <Link to="/signup">
                                    <Button className="bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg h-9 px-4 text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                        Get Access
                                    </Button>
                                </Link>
                            </div>
                        </header>

                        {/* Main Content Card */}
                        <main className="flex-1 flex flex-col items-center justify-center -mt-10">
                            <div className="w-full max-w-[800px] border border-white/5 bg-[#131b2c]/40 backdrop-blur-sm rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                                {/* Gradient Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">Waitlist Open</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                                    The Marketplace for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">AI Agents</span>
                                </h1>

                                <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Serync is the only platform that turns your local agent code into a <br className="hidden md:block" />
                                    <strong className="text-white font-medium">standardized agent workflow</strong> with a single push.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8">
                                    <div className="relative flex-1">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        </div>
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="dev@example.com"
                                            className="h-12 pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-500/50 rounded-lg text-base"
                                        />
                                    </div>
                                    <Button type="submit" className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                                        Join Waitlist &rarr;
                                    </Button>
                                </form>

                                <p className="text-sm text-gray-500 font-medium">
                                    Awaited by developers shipping autonomous agents.
                                </p>
                            </div>
                        </main>

                        <footer className="mt-auto pt-10 pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                            <p>© {currentYear} Serync Inc. All rights reserved.</p>
                            <div className="flex gap-6 mt-4 md:mt-0">
                                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                                <a href="#" className="hover:text-white transition-colors">X</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
