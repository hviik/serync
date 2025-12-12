import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
    icon: React.ReactNode;
    className?: string;
}

export function StatCard({ title, value, change, trend, icon, className }: StatCardProps) {
    return (
        <GlassCard className={cn("p-6 flex items-start justify-between", className)}>
            <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
                {change && (
                    <p className={cn("text-xs mt-1 font-medium", {
                        "text-green-400": trend === "up",
                        "text-red-400": trend === "down",
                        "text-zinc-400": trend === "neutral"
                    })}>
                        {change}
                    </p>
                )}
            </div>
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                {icon}
            </div>
        </GlassCard>
    );
}
