import { GlassCard } from "@/components/GlassCard";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export function ActiveAgentsList() {
    const agents: { id: number; name: string; status: string; uptime: string; usage: string }[] = [];

    return (
        <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">My Agents</h3>
                <Button variant="outline" size="sm" className="bg-transparent border-white/10 hover:bg-white/5">
                    View All
                </Button>
            </div>

            <div className="space-y-4">
                {/* Empty State */}
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                        <MoreHorizontal className="w-6 h-6 text-white/20" />
                    </div>
                    <p className="text-white/60 font-medium mb-1">No agents active</p>
                    <p className="text-white/40 text-sm">Deploy an agent to see real-time stats.</p>
                </div>
                {agents.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                        No agents deployed yet.
                    </div>
                )}
            </div>
        </GlassCard>
    );
}
