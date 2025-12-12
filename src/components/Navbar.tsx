import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export function Navbar() {
    return (
        <div className="flex justify-center pt-6 px-4 fixed top-0 w-full z-50">
            <nav className="w-full max-w-6xl flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#0f1523]/80 backdrop-blur-lg shadow-2xl">
                <Link to="/" className="flex items-center space-x-2">
                    {/* Using Ghost icon as a placeholder logo similar to the 'S' logo in image */}
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Ghost className="w-5 h-5 text-black fill-black" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Serync</span>
                </Link>

                <div className="ml-auto flex items-center space-x-8">
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
                        <Link to="/marketplace" className="hover:text-white transition-colors">Explore Agents</Link>
                        <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    </div>

                    <Link to="/login">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold shadow-lg shadow-blue-500/20">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
