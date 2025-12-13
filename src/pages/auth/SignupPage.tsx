import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const clerkAppearance = {
    baseTheme: dark,
    variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#131b2c",
        colorInputBackground: "rgba(255, 255, 255, 0.05)",
        colorInputText: "#ffffff",
        colorText: "#ffffff",
        colorTextSecondary: "#9ca3af",
        borderRadius: "0.5rem",
    },
    elements: {
        formButtonPrimary:
            "bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] font-semibold",
        card: "bg-[#131b2c]/80 border border-white/5 backdrop-blur-xl shadow-2xl",
        headerTitle: "text-white",
        headerSubtitle: "text-gray-400",
        formFieldInput:
            "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50",
        formFieldLabel: "text-gray-300",
        footerActionLink: "text-blue-400 hover:text-blue-300",
        dividerLine: "bg-white/10",
        dividerText: "text-gray-500",
    },
};

export function SignupPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0F19] px-4">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-600/8 blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[35%] -right-[5%] w-[35%] h-[35%] rounded-full bg-blue-500/6 blur-[100px] animate-pulse-medium" />
            </div>

            <div className="relative z-10">
                <SignUp
                    appearance={clerkAppearance}
                    routing="path"
                    path="/signup"
                    signInUrl="/login"
                    fallbackRedirectUrl="/dashboard"
                />
            </div>
        </div>
    );
}
