import { Link } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white antialiased">
            <div className="absolute top-0 left-0 -z-10 h-[500px] w-full bg-gradient-to-br from-primary/20 via-background-dark to-background-dark"></div>
            <div className="absolute top-0 right-0 -z-10 h-full w-full">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute left-1/4 top-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
            </div>
            {/* Top Navigation Bar */}
            <header className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 lg:px-10">
                <div className="flex items-center gap-4">
                    <SeryncLogo iconClassName="size-6" textClassName="text-xl" />
                </div>
                <nav className="hidden items-center gap-9 md:flex">
                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/">Home</Link>
                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/marketplace">Agents</Link>
                    <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" to="/pricing">Pricing</Link>
                    <Link className="text-white text-sm font-medium leading-normal" to="/contact">Contact Us</Link>
                </nav>
                <div className="hidden items-center gap-2 md:flex">
                    <Link to="/login">
                        <Button variant="ghost" className="bg-[#232f48] hover:bg-[#324467] text-white">
                            Log In
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </header>
            {/* Main Content */}
            <main className="container mx-auto px-6 py-16 lg:px-10 lg:py-24">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl lg:text-6xl">Contact Our Team</h1>
                    <p className="text-[#92a4c9] text-base font-normal leading-normal mt-4 md:text-lg">
                        Have a question, feedback, or a partnership idea? We'd love to hear from you. Fill out the form below or reach out to us directly.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
                    <div className="lg:col-span-3">
                        <div className="glass-panel w-full rounded-xl p-6 md:p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-base font-medium leading-normal">Your Name</span>
                                        <Input
                                            placeholder="Enter your name"
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white text-base font-medium leading-normal">Your Email</span>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-white text-base font-medium leading-normal">Subject</span>
                                    <div className="relative">
                                        <select className="flex h-14 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                                            <option className="bg-[#0B0F19]">Select a subject</option>
                                            <option value="general" className="bg-[#0B0F19]">General Inquiry</option>
                                            <option value="support" className="bg-[#0B0F19]">Technical Support</option>
                                            <option value="partnership" className="bg-[#0B0F19]">Partnership</option>
                                            <option value="feedback" className="bg-[#0B0F19]">Feedback</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-white text-base font-medium leading-normal">Your Message</span>
                                    <Textarea
                                        placeholder="Enter your message here..."
                                        className="min-h-36 resize-none bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50 p-4 text-base"
                                    />
                                </label>
                                <div>
                                    <Button type="submit" className="w-full h-12 text-base font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="glass-panel flex h-full flex-col justify-between rounded-xl p-6 md:p-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Other Ways to Connect</h3>
                                <p className="text-[#92a4c9] mt-2">Find us on other platforms or drop us an email directly.</p>
                                <div className="mt-8 space-y-6">
                                    <a className="flex items-center gap-4 group" href="mailto:support@serync.ai">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#192233] border border-[#324467] group-hover:bg-primary/20 group-hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined text-[#92a4c9] group-hover:text-white transition-colors">mail</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">Email Us</p>
                                            <p className="text-sm text-[#92a4c9] group-hover:text-white/90 transition-colors">support@serync.ai</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="container mx-auto mt-16 border-t border-white/10 px-6 py-8 lg:px-10">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-white/60">© {currentYear} Serync. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link className="text-sm text-white/60 hover:text-white transition-colors" to="/terms">Terms of Service</Link>
                        <Link className="text-sm text-white/60 hover:text-white transition-colors" to="/terms">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
