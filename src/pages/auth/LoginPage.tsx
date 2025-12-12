import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        // Simulate API call
        console.log("Login data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        // In a real app, redirect here
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Enter your credentials to access your agent dashboard"
            alternativeActionText="Don't have an account?"
            alternativeActionLink="/signup"
            alternativeActionLabel="Sign up"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary">Forgot password?</a>
                    </div>
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

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        "Sign In"
                    )}
                </Button>
            </form>
        </AuthLayout>
    );
}
