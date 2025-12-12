import { Link } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";

export function LandingPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-white antialiased">
            <div className="absolute inset-0 z-0 bg-background-dark">
                <div className="absolute -top-1/4 left-1/4 size-96 animate-pulse rounded-full bg-primary/20 blur-3xl filter"></div>
                <div className="absolute -bottom-1/4 right-1/4 size-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl filter [animation-delay:2s]"></div>
                <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-500/10 blur-3xl filter [animation-delay:4s]"></div>
            </div>
            <div className="relative z-20 flex min-h-screen flex-col">
                <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
                    <div className="flex w-full max-w-[960px] flex-1 flex-col">
                        <header className="flex items-center justify-between whitespace-nowrap rounded-xl p-3 glass-panel">
                            <SeryncLogo iconClassName="size-6" />
                            <div className="flex flex-1 items-center justify-end gap-6 sm:gap-8">
                                <div className="hidden items-center gap-9 md:flex">
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
                        <main className="flex flex-1 flex-col">
                            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center sm:gap-8">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                                        The Open Marketplace for AI Agents
                                    </h1>
                                    <h2 className="text-white/80 text-base font-normal leading-normal sm:text-lg">
                                        A platform for users to post, share, and monetize AI agents.
                                    </h2>
                                </div>
                                <Link to="/signup">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Get Started for Free</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-10 py-10 @container">
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] sm:text-3xl">A New Paradigm for AI</h2>
                                    <p className="text-white/70 text-base font-normal leading-normal max-w-[720px]">
                                        Discover the core features that make Serync the leading platform for AI agent innovation and monetization.
                                    </p>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0">
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl p-5 glass-card">
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>memory</span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-bold leading-tight">System Agnostic IR</h3>
                                            <p className="text-text-muted-dark text-sm font-normal leading-normal">Convert agents to an Intermediate Representation compatible with any system.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl p-5 glass-card">
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>account_tree</span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-bold leading-tight">Canonical DAG Deduplication</h3>
                                            <p className="text-text-muted-dark text-sm font-normal leading-normal">Optimize and streamline agent structures with advanced deduplication.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl p-5 glass-card">
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>shield</span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-bold leading-tight">Secure &amp; Spam-Free</h3>
                                            <p className="text-text-muted-dark text-sm font-normal leading-normal">Enjoy a platform built with security and integrity at its core.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl p-5 glass-card">
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>fork_right</span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-bold leading-tight">Fork Agents, Like GitHub</h3>
                                            <p className="text-text-muted-dark text-sm font-normal leading-normal">Collaborate and innovate by forking and building upon existing agents.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl p-5 glass-card">
                                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>monetization_on</span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-white text-lg font-bold leading-tight">Monetize Your Creations</h3>
                                            <p className="text-text-muted-dark text-sm font-normal leading-normal">Earn revenue from your unique AI agent templates and creations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container mt-auto">
                            <div className="flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
                                <Link className="text-text-muted-dark hover:text-white text-base font-normal leading-normal min-w-40 transition-colors" to="/about">About</Link>
                                <Link className="text-text-muted-dark hover:text-white text-base font-normal leading-normal min-w-40 transition-colors" to="/contact">Contact</Link>
                                <Link className="text-text-muted-dark hover:text-white text-base font-normal leading-normal min-w-40 transition-colors" to="/terms">Terms of Service</Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a className="text-text-muted-dark hover:text-white transition-colors" href="#">
                                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 9.7C23.3 22 18 22 12.3 22c-5.7 0-11-4.7-11-10.3 0-4.8 1.7-8.3 3.3-9.7-1.3-1.3-2-3.4-2-3.4s.7 2.1 2 3.4c1.4-1.4 3.2-2.4 5.2-2.4 2 0 3.8 1 5.2 2.4z"></path></svg>
                                </a>
                                <a className="text-text-muted-dark hover:text-white transition-colors" href="#">
                                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a className="text-text-muted-dark hover:text-white transition-colors" href="#">
                                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                            </div>
                            <p className="text-text-muted-dark text-sm font-normal leading-normal">© {currentYear} Serync. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
