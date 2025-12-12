
import { Link } from "react-router-dom";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    alternativeActionText?: string;
    alternativeActionLink?: string;
    alternativeActionLabel?: string;
}

export function AuthLayout({
    children,
    title,
    subtitle,
    alternativeActionText,
    alternativeActionLink,
    alternativeActionLabel,
}: AuthLayoutProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-white antialiased flex flex-col items-center justify-center p-4">
            <div className="absolute inset-0 z-0 bg-background-dark">
                <div className="absolute -top-1/4 left-1/4 size-96 animate-pulse rounded-full bg-primary/20 blur-3xl filter"></div>
                <div className="absolute -bottom-1/4 right-1/4 size-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl filter [animation-delay:2s]"></div>
            </div>

            <div className="absolute top-8 left-8 z-50">
                <Link to="/" className="flex items-center gap-3 text-white">
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
                </Link>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="glass-panel w-full rounded-xl p-8 backdrop-blur-3xl bg-[#111827]/40 border-white/10">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white">{title}</h1>
                        <p className="text-sm text-white/60 mt-2">{subtitle}</p>
                    </div>
                    {children}
                </div>

                {alternativeActionText && alternativeActionLink && (
                    <div className="text-center mt-6 text-sm text-white/60">
                        {alternativeActionText}{" "}
                        <Link
                            to={alternativeActionLink}
                            className="text-primary hover:text-white font-medium transition-colors"
                        >
                            {alternativeActionLabel}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
