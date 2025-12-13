import { Link } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Waitlist } from "@clerk/clerk-react";

export function WaitlistPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0B0F19] font-display text-white antialiased selection:bg-primary selection:text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex flex-1 justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-4">
                    <div className="flex w-full max-w-[1100px] flex-1 flex-col">
                        {/* Floating Glass Navbar */}
                        <header className="flex items-center justify-between whitespace-nowrap rounded-xl p-2.5 glass-panel border border-white/5 bg-[#131b2c]/60 backdrop-blur-xl mb-6 sm:mb-8">
                            <div className="flex items-center gap-3 pl-2">
                                <SeryncLogo iconClassName="size-5 text-primary" textClassName="text-lg font-bold" />
                            </div>
                            <div className="flex items-center justify-end gap-4">
                                <div className="hidden items-center gap-4 md:flex text-sm font-medium text-gray-400">
                                    <span className="w-px h-4 bg-white/10" />
                                    <Link to="/login" className="hover:text-white transition-colors">Log In</Link>
                                </div>
                                <Link to="/signup">
                                    <Button className="bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg h-8 px-3 text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                        Get Access
                                    </Button>
                                </Link>
                            </div>
                        </header>

                        {/* Main Content Card */}
                        <main className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-[700px] border border-white/5 bg-[#131b2c]/40 backdrop-blur-sm rounded-2xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-2xl">
                                {/* Gradient Badge */}
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">Waitlist Open</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3">
                                    The Marketplace for <br className="hidden sm:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">AI Agents</span>
                                </h1>

                                <p className="text-gray-400 text-base sm:text-lg font-light mb-6 max-w-xl mx-auto leading-relaxed">
                                    Serync is the only platform that turns your local agent code into a{" "}
                                    <strong className="text-white font-medium">standardized agent workflow</strong> with a single push.
                                </p>

                                <div className="w-full max-w-sm mx-auto mb-6 flex justify-center">
                                    <Waitlist />
                                </div>

                                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                    Awaited by developers shipping autonomous agents.
                                </p>
                            </div>
                        </main>

                        <footer className="pt-4 pb-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2">
                            <p>© {currentYear} Serync Inc. All rights reserved.</p>
                            <div className="flex gap-4">
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
