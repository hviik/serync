import { StatCard } from "@/components/dashboard/StatCard";
import { ActiveAgentsList } from "@/components/dashboard/ActiveAgentsList";
import { Activity, CreditCard, HardDrive, Users } from "lucide-react";

export function AgentDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your agent ecosystem</p>
            </div>

            {/* Stats Grid */}
            {/* Stats Grid - Empty State for New User */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Earnings"
                    value="$0.00"
                    change="No active payout"
                    trend="neutral"
                    icon={<CreditCard className="w-6 h-6 text-white/40" />}
                />
                <StatCard
                    title="Active Agents"
                    value="0"
                    change="Deploy your first agent"
                    trend="neutral"
                    icon={<HardDrive className="w-6 h-6 text-white/40" />}
                />
                <StatCard
                    title="Total Requests"
                    value="0"
                    change="No activity yet"
                    trend="neutral"
                    icon={<Activity className="w-6 h-6 text-white/40" />}
                />
                <StatCard
                    title="Templates Forked"
                    value="0"
                    change="No forks yet"
                    trend="neutral"
                    icon={<Users className="w-6 h-6 text-white/40" />}
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ActiveAgentsList />
                </div>
                <div className="space-y-8">
                    {/* Quick Actions / Recent Activity placeholder */}
                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
                                + Deploy New Agent
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
                                Browse Marketplace
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
