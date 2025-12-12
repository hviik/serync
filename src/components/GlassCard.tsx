import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/5 hover:border-white/20 hover:shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
