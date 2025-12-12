import { Link } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";
import { Filter, Search, Sparkles, TrendingUp, Star, Clock } from "lucide-react";

export function MarketplacePage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#0B0F19] font-display text-white overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* TopNavBar */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#0B0F19]/80 px-4 sm:px-6 md:px-10 lg:px-20 py-4 backdrop-blur-md">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-white hover:opacity-80 transition-opacity">
                        <SeryncLogo iconClassName="size-8" textClassName="text-xl" />
                    </Link>
                </div>
                <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    <nav className="flex items-center gap-8">
                        <Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" to="/marketplace">Explore</Link>
                        <Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" to="/dashboard/agents">My Agents</Link>
                        <Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" to="/pricing">Pricing</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-3">
                        <Link to="/login">
                            <button className="h-9 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium border border-white/5 transition-colors">
                                Sign In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 md:p-8 z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* SideNavBar / Filter Panel */}
                    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <div className="flex items-center justify-between lg:hidden mb-4">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button className="p-2 bg-white/5 rounded-lg"><Filter className="w-5 h-5" /></button>
                            </div>

                            <div className="hidden lg:flex flex-col gap-4">
                                <h1 className="text-2xl font-bold tracking-tight">Discover</h1>
                                <div className="flex flex-col gap-1">
                                    <NavItem active icon={<Sparkles className="w-5 h-5" />} label="All Agents" />
                                    <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Trending" />
                                    <NavItem icon={<Clock className="w-5 h-5" />} label="Newest" />
                                    <NavItem icon={<Star className="w-5 h-5" />} label="Top Rated" />
                                </div>
                            </div>

                            {/* Filters Group */}
                            <div className="border-t border-white/10 pt-6 flex flex-col gap-8">
                                {/* Categories */}
                                <div>
                                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4 px-2">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Productivity", "Development", "Marketing", "Data", "Design", "Utilities"].map(cat => (
                                            <button key={cat} className="h-8 px-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium transition-colors">
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing Model */}
                                <div>
                                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4 px-2">Pricing</h3>
                                    <div className="flex flex-col gap-3 px-2">
                                        {["All", "Free", "Subscription", "One-time"].map((price, i) => (
                                            <label key={price} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${i === 0 ? "border-blue-500" : "border-white/30 group-hover:border-white/50"}`}>
                                                    {i === 0 && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                                </div>
                                                <span className="text-sm text-white/80 group-hover:text-white transition-colors">{price}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to="/dashboard/submit-agent" className="mt-4">
                                <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-[1.02]">
                                    Submit Agent
                                </button>
                            </Link>
                        </div>
                    </aside>

                    {/* Agent Grid Area */}
                    <div className="flex-1">
                        {/* Search Header */}
                        <div className="flex flex-col gap-6 mb-10">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight mb-2">Explore Agents</h1>
                                <p className="text-white/60 text-lg">Find the perfect AI agent to automate your workflow.</p>
                            </div>

                            {/* Improved Search Bar */}
                            <div className="relative group w-full max-w-3xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    className="w-full h-14 pl-12 pr-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.07] transition-all text-base"
                                    placeholder="Search agents, workflows, or creators..."
                                />
                                <div className="absolute inset-y-0 right-2 flex items-center">
                                    <kbd className="hidden sm:inline-flex h-8 items-center gap-1 rounded border border-white/10 bg-white/5 px-2 font-mono text-xs font-medium text-white/50">
                                        ⌘ K
                                    </kbd>
                                </div>
                            </div>
                        </div>

                        {/* Grid Container */}
                        <div className="min-h-[400px]">
                            {/* Empty State for Production */}
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                    <Search className="w-10 h-10 text-white/20" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">No agents found</h3>
                                <p className="text-white/50 max-w-md mx-auto mb-8">
                                    The marketplace is currently being populated. Be the first to deploy an agent to the Serync network.
                                </p>
                                <Link to="/dashboard/submit-agent">
                                    <button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-900/20">
                                        Deploy Your First Agent
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${active ? "bg-blue-600/10 text-blue-400" : "hover:bg-white/5 text-white/70 hover:text-white"}`}>
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
}
