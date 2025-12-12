import { useState } from "react";
import { SeryncLogo } from "@/components/SeryncLogo";

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
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
            <div className="relative flex min-h-screen flex-col">
                <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#101622]/80 px-6 py-4 backdrop-blur-md md:px-10">
                    <div className="flex items-center gap-4 text-white">
                        <SeryncLogo iconClassName="size-8" textClassName="text-xl font-bold leading-tight tracking-tight" />
                    </div>
                    <div className="flex gap-3">
                        <button className="hidden sm:flex cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary/20 hover:bg-primary/30 border border-primary/20 text-white text-sm font-bold transition-all">
                            <span>Login</span>
                        </button>
                        <button aria-label="Twitter" className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5">
                            <span className="material-symbols-outlined text-[20px]">public</span>
                        </button>
                        <button aria-label="Discord" className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5">
                            <span className="material-symbols-outlined text-[20px]">forum</span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 relative flex items-center justify-center w-full min-h-screen pt-20">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-30" alt="Abstract dark network mesh background with blue glowing nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCycm8M6XR8XXLkPx64FlKf86Ym_BmMIumedxqF5aG8kZpVpm77y0e3EwCjIms0leen5aFKF7WP17PGlBszDl0V2Uuh2-9IbxSIWS0Bic0TR39W9-UT54R5hESFegNv3kRHAoyj22uQHBfSVmh7zuR9WHXv_5ZywcOCO92qc96IZEJRq8wLssE_wcVUeByR3gQqRbjlm0HpQWR93ya8GO_EcXcMguvESsnal77CJoR3rMc1j-aCy-6hlZ5OHpUF8CLvAp650ObnJnc" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#101622] via-[#101622]/80 to-[#101622]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                    </div>
                    <div className="relative z-10 w-full max-w-[960px] px-4 py-12 md:px-6">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#192233]/40 p-6 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16 ring-1 ring-white/5">
                                <div className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-300 md:text-sm">
                                    <span className="mr-2 flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span className="text-white/90">Early Access Open</span>
                                </div>
                                <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                                    The Marketplace for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">AI Agents</span>
                                </h1>
                                <p className="mx-auto mb-10 max-w-xl text-base font-light leading-relaxed text-slate-300 md:text-lg">
                                    Post, share, and monetize your custom AI workflows. Stop building in silos—start earning on the only platform designed for agent creators.
                                </p>
                                <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
                                    <div className="relative flex-1">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input
                                            className="block w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-slate-400 backdrop-blur-sm transition-all focus:border-primary focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm h-12"
                                            placeholder="name@example.com"
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button className="flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(19,91,236,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#192233]" type="submit">
                                        Join the Waitlist
                                    </button>
                                </form>
                                <p className="mt-4 text-xs text-slate-500">
                                    Join 2,000+ creators waiting to launch. No spam, ever.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="relative z-10 w-full border-t border-white/5 bg-[#101622]/90 py-8 backdrop-blur text-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center gap-4 text-sm text-slate-500 md:flex-row md:justify-between">
                            <p>© {currentYear} Serync. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
