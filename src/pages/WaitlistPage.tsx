import { Link } from "react-router-dom";
import { useState } from "react";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Waitlist } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const clerkAppearance = {
    baseTheme: dark,
    variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "transparent",
        colorInputBackground: "rgba(255, 255, 255, 0.05)",
        colorInputText: "#ffffff",
        colorText: "#ffffff",
        colorTextSecondary: "#6b7280",
        borderRadius: "0.75rem",
        fontSize: "0.95rem",
    },
    elements: {
        // Remove all container styling from Clerk
        rootBox: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !overflow-visible flex justify-center w-auto",
        card: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !overflow-visible w-auto",

        // Final: no width forcing, perfect center alignment
        form: "flex flex-row items-center justify-center gap-3 !p-0 !m-0 w-auto !overflow-visible",

        // Critical fix: remove flex-1 expansion that caused left-shift
        formFieldRow: "flex-none !p-0 !m-0 !overflow-visible",

        // Input: locked size, perfect height, clean visuals
        formFieldInput:
            "!bg-[#131b2c] !border !border-white/10 !text-white placeholder:text-gray-500 " +
            "!h-[52px] !rounded-xl !px-4 !text-base !leading-none w-[260px] transition-all duration-200 " +
            "!m-0 !overflow-visible !shadow-none !outline-none",

        // Button: same height, no clipping, no overflow
        formButtonPrimary:
            "!bg-blue-600 hover:!bg-blue-500 !text-white !font-semibold " +
            "!h-[52px] !px-8 !text-base !rounded-xl !leading-none " +
            "!overflow-visible !whitespace-nowrap !min-w-0 !m-0",

        // Remove all extra UI from Clerk
        formFieldLabel: "!hidden",
        header: "!hidden",
        footer: "!hidden",
        dividerRow: "!hidden",
        socialButtons: "!hidden",
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

            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px] animate-pulse-slow" />
                <div className="absolute top-[35%] -right-[5%] w-[35%] h-[35%] rounded-full bg-blue-500/8 blur-[80px] animate-pulse-medium" />
                <div className="absolute bottom-[5%] left-[20%] w-[30%] h-[25%] rounded-full bg-indigo-600/8 blur-[80px] animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/2 w-[40%] h-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[140px] animate-pulse-glow" />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
                <div className="flex flex-1 justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-4">
                    <div className="flex w-full max-w-[1100px] flex-1 flex-col">

                        {/* Navbar */}
                        <header className="flex items-center justify-between whitespace-nowrap rounded-xl p-2.5 glass-panel border border-white/5 bg-[#131b2c]/60 backdrop-blur-xl mb-6">
                            <div className="flex items-center gap-3 pl-2">
                                <SeryncLogo iconClassName="size-5 text-primary" textClassName="text-lg font-bold" />
                            </div>

                            <div className="flex items-center justify-end gap-4">
                                <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
                                    <span className="w-px h-4 bg-white/10" />
                                    <Link to="/login" className="hover:text-white">Log In</Link>
                                </div>
                                <Button
                                    onClick={handleGetAccess}
                                    className="bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg h-8 px-3 text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                >
                                    Get Access
                                </Button>
                            </div>
                        </header>

                        {/* Main Section */}
                        <main className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-[850px] border border-white/5 bg-[#131b2c]/40 backdrop-blur-sm rounded-2xl p-10 text-center relative overflow-hidden shadow-2xl">

                                {/* Floating center glow */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 rounded-full bg-blue-500/15 blur-[80px] animate-pulse-glow" />
                                </div>

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                                        Waitlist Open
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-5xl font-bold tracking-tight mb-3">
                                    The Marketplace for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">
                                        AI Agents
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                                    Serync is the only platform that turns your local agent code into a{" "}
                                    <strong className="text-white font-medium">standardized agent workflow</strong> with a single push.
                                </p>

                                {/* WAITLIST FORM */}
                                <div
                                    className={`flex justify-center mb-6 transition-all duration-700 ${isHighlighted ? "shadow-[0_0_40px_rgba(59,130,246,0.4)]" : ""
                                        }`}
                                >
                                    <Waitlist appearance={clerkAppearance} />
                                </div>

                                <p className="text-sm text-gray-500">
                                    Awaited by developers shipping autonomous agents.
                                </p>
                            </div>
                        </main>

                        {/* Footer */}
                        <footer className="pt-4 pb-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2">
                            <p>© {currentYear} Serync Inc. All rights reserved.</p>
                            <div className="flex gap-4">
                                <Link to="/privacy" className="hover:text-white">Privacy</Link>
                                <Link to="/terms" className="hover:text-white">Terms</Link>
                                <a href="#" className="hover:text-white">X</a>
                            </div>
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
}
