
import { Link } from "react-router-dom";

export function TermsOfServicePage() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative flex min-h-screen w-full bg-[#0B0F19] font-display text-white overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* SideNavBar */}
            <aside className="sticky top-0 h-screen w-64 flex-shrink-0 flex-col gap-4 border-r border-white/5 bg-[#0B0F19]/50 p-4 hidden lg:flex z-20 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="size-8 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_319)">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg font-bold leading-normal">Serync</h1>
                    </Link>
                </div>

                <nav className="flex flex-col gap-2 mt-8">
                    <button onClick={() => scrollToSection('introduction')} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-left transition-colors hover:bg-white/10">
                        <span className="text-blue-400">01</span>
                        <p className="text-white text-sm font-medium leading-normal">Introduction</p>
                    </button>
                    {["User Accounts", "AI Agent Policy", "Monetization & Payments", "Platform Rights", "Termination", "Contact Information"].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-').replace('&', ''))}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-left transition-colors"
                        >
                            <span className="text-white/40 text-sm">{String(i + 2).padStart(2, '0')}</span>
                            <p className="text-white/80 text-sm font-medium leading-normal hover:text-white transition-colors">{item}</p>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-12 z-10 overflow-y-auto">
                <div className="max-w-4xl mx-auto pb-20">
                    <header className="flex flex-wrap justify-between items-start gap-4 mb-16">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Terms of Service</h1>
                            <p className="text-white/60 text-base font-normal leading-normal">Last Updated: October 26, 2023</p>
                        </div>
                    </header>

                    <div className="space-y-12">
                        <section id="introduction" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">01.</span> Introduction
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>Welcome to Serync. These Terms of Service ("Terms") govern your access to and use of the Serync website, services, and applications (collectively, the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms and our Privacy Policy.</p>
                                <p>Serync is a decentralized AI agent marketplace that allows users to deploy, discover, and monetize autonomous agents. Our platform utilizes a unique "Canonical DAG Deduplication" system to ensure agent integrity.</p>
                            </div>
                        </section>

                        <section id="user-accounts" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">02.</span> User Accounts
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>To access most features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                                <ul className="list-disc pl-5 space-y-2 text-white/70">
                                    <li>You are responsible for safeguarding your password and for all activities that occur under your account.</li>
                                    <li>You must immediately notify us of any unauthorized use of your account.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="ai-agent-policy" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">03.</span> AI Agent Policy
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>Agents deployed to Serync must adhere to our ethical guidelines. Users retain ownership of the code they submit, but grant Serync a license to host and execute the code as part of the Platform services.</p>
                                <p>Malicious agents, spam, or agents designed to harm others are strictly prohibited and will be removed immediately.</p>
                            </div>
                        </section>

                        <section id="monetization-payments" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">04.</span> Monetization & Payments
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>Creators can earn royalties when their agent templates are used. Serync handles the billing and distribution of funds. A platform fee is deducted from each transaction to support infrastructure costs.</p>
                            </div>
                        </section>

                        {/* Placeholder for other sections to demonstrate structure */}
                        <section id="platform-rights" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">05.</span> Platform Rights
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>Serync reserves the right to modify or discontinue the Service at any time (including by limiting or discontinuing certain features of the Service), temporarily or permanently, without notice to you.</p>
                            </div>
                        </section>

                        <section id="termination" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">06.</span> Termination
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                            </div>
                        </section>

                        <section id="contact-information" className="scroll-mt-24">
                            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                                <span className="text-blue-400">07.</span> Contact Information
                            </h2>
                            <div className="glass-panel p-8 rounded-xl space-y-4 text-white/80 leading-relaxed">
                                <p>If you have any questions about these Terms, please contact us at legal@serync.io.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
