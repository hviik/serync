import { Link } from "react-router-dom";
import { useState } from "react";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Waitlist } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

// Custom Clerk theme to match our dark UI - inline form style
const clerkAppearance = {
    baseTheme: dark,
    variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "transparent",
        colorInputBackground: "rgba(255, 255, 255, 0.05)",
        colorInputText: "#ffffff",
        colorText: "#ffffff",
        colorTextSecondary: "#6b7280",
        borderRadius: "9999px",
        fontSize: "0.95rem",
    },
    elements: {
        rootBox: "w-full max-w-xl overflow-visible",
        card: "bg-transparent shadow-none p-0 gap-2 overflow-visible",
        form: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full overflow-visible",
        formFieldRow: "flex-1 min-w-0 overflow-visible",
        formFieldInput:
            "bg-[#1a2332] border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-0 h-12 rounded-full px-5 text-sm w-full",
        formButtonPrimary:
            "bg-blue-600 hover:bg-blue-500 text-white font-semibold h-12 px-5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] whitespace-nowrap text-sm",
        formFieldLabel: "hidden",
        header: "hidden",
        footer: "hidden",
        dividerRow: "hidden",
        socialButtons: "hidden",
        footerActionLink: "text-blue-400 hover:text-blue-300",
    },
};

export function WaitlistPage() {
    const currentYear = new Date().getFullYear();
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleGetAccess = () => {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 1500);
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0B0F19] font-display text-white antialiased selection:bg-primary selection:text-white">
            {/* Animated Background Glow Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Top-left blue orb - slow pulse */}
                <div className="absolute -top-[15%] -left-[5%] w-[40%] sm:w-[35%] h-[40%] sm:h-[35%] rounded-full bg-blue-600/10 blur-[100px] sm:blur-[120px] animate-pulse-slow" />

                {/* Center-right blue orb - medium pulse */}
                <div className="absolute top-[35%] -right-[5%] w-[35%] sm:w-[30%] h-[35%] sm:h-[30%] rounded-full bg-blue-500/8 blur-[80px] sm:blur-[100px] animate-pulse-medium" />

                {/* Bottom-center purple orb - slow pulse */}
                <div className="absolute bottom-[5%] left-[20%] w-[30%] sm:w-[25%] h-[25%] sm:h-[20%] rounded-full bg-indigo-600/8 blur-[80px] sm:blur-[100px] animate-pulse-slow" />

                {/* Floating accent orb behind card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[40%] h-[40%] sm:h-[35%] rounded-full bg-blue-500/8 blur-[100px] sm:blur-[140px] animate-pulse-glow" />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
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
                                <Button
                                    onClick={handleGetAccess}
                                    className="bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg h-8 px-3 text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                >
                                    Get Access
                                </Button>
                            </div>
                        </header>

                        {/* Main Content Card */}
                        <main className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-[600px] lg:max-w-[750px] xl:max-w-[850px] border border-white/5 bg-[#131b2c]/40 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl">
                                {/* Centered pulsating star/glow effect */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-blue-500/15 blur-[60px] sm:blur-[80px] animate-pulse-glow" />
                                </div>
                                {/* Gradient Badge */}
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5">
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

                                <div
                                    className={`w-full max-w-sm lg:max-w-md mx-auto mb-6 flex justify-center transition-all duration-700 ease-in-out ${isHighlighted ? 'shadow-[0_0_40px_rgba(59,130,246,0.4)]' : ''}`}
                                >
                                    <Waitlist appearance={clerkAppearance} />
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
