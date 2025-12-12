import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

export function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupFormValues) => {
        setIsLoading(true);
        console.log("Signup data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <AuthLayout
            title="Create an Account"
            subtitle="Join the network and start deploying agents"
            alternativeActionText="Already have an account?"
            alternativeActionLink="/login"
            alternativeActionLabel="Log in"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        placeholder="AgentSmith"
                        className="glass-input"
                        {...register("username")}
                    />
                    {errors.username && (
                        <p className="text-sm text-red-400">{errors.username.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="glass-input"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-400">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        className="glass-input"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-400">{errors.password.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        className="glass-input"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <p className="text-sm text-red-400">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </Button>
            </form>
        </AuthLayout>
    );
}
