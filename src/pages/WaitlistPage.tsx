import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Waitlist } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

// Confetti Particle Component
interface ConfettiParticle {
    id: number;
    x: number;
    color: string;
    delay: number;
    duration: number;
    rotation: number;
    size: number;
}

function Confetti({ active }: { active: boolean }) {
    const [particles, setParticles] = useState<ConfettiParticle[]>([]);

    useEffect(() => {
        if (active) {
            const colors = [
                '#3b82f6', '#60a5fa', '#93c5fd', // Blues
                '#8b5cf6', '#a78bfa', // Purples
                '#22c55e', '#4ade80', // Greens
                '#f59e0b', '#fbbf24', // Golds
                '#ec4899', '#f472b6', // Pinks
                '#ffffff', // White
            ];

            const newParticles: ConfettiParticle[] = [];
            for (let i = 0; i < 60; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    delay: Math.random() * 0.5,
                    duration: 2 + Math.random() * 2,
                    rotation: Math.random() * 360,
                    size: 6 + Math.random() * 8,
                });
            }
            setParticles(newParticles);

            // Clean up after animation
            const timer = setTimeout(() => setParticles([]), 4000);
            return () => clearTimeout(timer);
        }
    }, [active]);

    if (!active || particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute animate-confetti"
                    style={{
                        left: `${particle.x}%`,
                        top: '-20px',
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        transform: `rotate(${particle.rotation}deg)`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        boxShadow: `0 0 6px ${particle.color}`,
                    }}
                />
            ))}
        </div>
    );
}

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
        // REMOVE ALL WRAPPER SPACING / RADIUS / HEIGHT
        formField: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !rounded-none !overflow-visible",
        formButtonContainer: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !rounded-none !overflow-visible",

        // Completely remove Clerk-injected extra wrapper (this fixes the clipping)
        formFieldInputShowPasswordButton: "!hidden",

        // Your existing overrides (keep them)
        rootBox: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !overflow-visible flex justify-center w-auto",
        card: "!p-0 !m-0 !border-0 !shadow-none !bg-transparent !overflow-visible w-auto",
        form: "flex flex-col sm:flex-row items-center justify-center gap-3 !p-0 !m-0 w-auto !overflow-visible",
        formFieldRow: "flex-none !p-0 !m-0 !overflow-visible w-full sm:w-auto",

        formFieldInput:
            "!bg-[#131b2c] !border !border-white/10 !text-white placeholder:text-gray-500 " +
            "!h-[48px] !rounded-xl !px-4 !text-base !leading-none w-full sm:w-[360px] " +
            "!m-0 !overflow-visible !shadow-none !outline-none",

        formFieldInputWrapper:
            "!p-0 !m-0 !border-0 !shadow-none !bg-transparent " +
            "!rounded-none !overflow-visible !h-auto !w-auto !leading-none w-full sm:w-auto",

        formButton:
            "!p-0 !m-0 !border-0 !shadow-none !bg-transparent " +
            "!rounded-none !overflow-visible !h-auto !w-auto !leading-none w-full sm:w-auto",

        formButtonPrimary:
            "!bg-blue-600 hover:!bg-blue-500 !text-white !font-semibold " +
            "!h-[48px] !px-6 !text-base !rounded-xl !leading-none " +
            "!overflow-visible !whitespace-nowrap w-full sm:!min-w-0 sm:w-auto !m-0",

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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const hasSeenForm = useRef(false);

    const handleGetAccess = () => {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 1500);
    };

    // Track form submission and trigger success state
    useEffect(() => {
        let pollInterval: ReturnType<typeof setInterval> | null = null;

        const setPlaceholder = () => {
            const input = document.querySelector('#waitlist-wrapper input[type="email"]') as HTMLInputElement;
            if (input) {
                input.setAttribute('placeholder', 'socket@tcp.com');
                hasSeenForm.current = true;
            }
        };

        const checkFormRemoved = () => {
            const wrapper = document.getElementById('waitlist-wrapper');
            if (!wrapper) return false;

            const input = wrapper.querySelector('input[type="email"]');
            const button = wrapper.querySelector('.cl-formButtonPrimary');

            // Form is gone if we previously saw it AND now input/button are missing
            return hasSeenForm.current && !input && !button;
        };

        const triggerSuccess = () => {
            if (!isSubmitted) {
                console.log('[Waitlist] Success detected - triggering confetti!');
                setIsSubmitted(true);
                setShowConfetti(true);
                if (pollInterval) {
                    clearInterval(pollInterval);
                    pollInterval = null;
                }
            }
        };

        const handleButtonClick = () => {
            console.log('[Waitlist] Submit button clicked');

            // Start polling to detect when form is removed
            pollInterval = setInterval(() => {
                if (checkFormRemoved()) {
                    console.log('[Waitlist] Form removed after submission');
                    triggerSuccess();
                }
            }, 100);

            // Stop polling after 10 seconds (timeout)
            setTimeout(() => {
                if (pollInterval) {
                    clearInterval(pollInterval);
                    pollInterval = null;
                }
            }, 10000);
        };

        // Also add MutationObserver as backup for "already on waitlist" text
        const observer = new MutationObserver(() => {
            setPlaceholder();

            // Check for Clerk's built-in success/already registered messages
            const wrapper = document.getElementById('waitlist-wrapper');
            if (!wrapper) return;

            const text = wrapper.textContent?.toLowerCase() || '';
            const hasSuccessMessage =
                text.includes('already on the waitlist') ||
                text.includes('you\'re already on') ||
                text.includes('you have been added') ||
                text.includes('on the waitlist');

            // If we see success text OR form removed, trigger success
            if ((hasSuccessMessage || checkFormRemoved()) && !isSubmitted) {
                triggerSuccess();
            }

            // Attach click listener to button (re-attach on DOM changes)
            const submitBtn = wrapper.querySelector('.cl-formButtonPrimary');
            if (submitBtn && !submitBtn.hasAttribute('data-listener-attached')) {
                submitBtn.setAttribute('data-listener-attached', 'true');
                submitBtn.addEventListener('click', handleButtonClick);
            }
        });

        // Initial setup
        setPlaceholder();

        // Attach observer
        const wrapper = document.getElementById('waitlist-wrapper');
        if (wrapper) {
            observer.observe(wrapper, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true
            });

            // Initial button listener attachment
            const submitBtn = wrapper.querySelector('.cl-formButtonPrimary');
            if (submitBtn && !submitBtn.hasAttribute('data-listener-attached')) {
                submitBtn.setAttribute('data-listener-attached', 'true');
                submitBtn.addEventListener('click', handleButtonClick);
            }
        }

        return () => {
            observer.disconnect();
            if (pollInterval) clearInterval(pollInterval);
        };
    }, [isSubmitted]);

    return (
        <div className="relative min-h-screen w-full bg-[#0B0F19] font-display text-white antialiased selection:bg-primary selection:text-white">

            {/* Confetti Effect */}
            <Confetti active={showConfetti} />

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
                                <div className="w-full flex justify-center mb-8">
                                    <div
                                        id="waitlist-wrapper"
                                        className={`inline-flex flex-col sm:flex-row items-center justify-center rounded-xl transition-all duration-700 w-full sm:w-auto p-1.5 ${isHighlighted
                                            ? "shadow-[0_0_60px_rgba(59,130,246,0.5)] bg-blue-500/5 ring-1 ring-blue-500/20"
                                            : ""
                                            }`}
                                    >
                                        {isSubmitted ? (
                                            <div className="flex flex-col items-center justify-center py-6 px-8 animate-in fade-in zoom-in duration-500">
                                                {/* Animated Checkmark */}
                                                <div className="relative mb-4">
                                                    <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse" />
                                                    <div className="relative rounded-full bg-gradient-to-br from-green-400 to-green-600 p-4 shadow-lg shadow-green-500/30">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-check-draw">
                                                            <path d="M20 6 9 17l-5-5" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Success Text */}
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    🎉 You're on the list!
                                                </h3>
                                                <p className="text-gray-400 text-base mb-3">
                                                    We'll reach out when it's your turn.
                                                </p>
                                                <p className="text-blue-400/80 text-sm">
                                                    Get ready to build something amazing.
                                                </p>
                                            </div>
                                        ) : (
                                            <Waitlist
                                                appearance={clerkAppearance}
                                            />
                                        )}
                                    </div>
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
