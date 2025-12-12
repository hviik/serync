import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SeryncLogo } from "@/components/SeryncLogo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-[#0B0F19] pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
                    <div>
                        <Link to="/" className="inline-block mb-4">
                            <SeryncLogo iconClassName="size-6" textClassName="text-xl" />
                        </Link>
                    </div>

                    {/* ... (middle content remains same) ... */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm">About</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="mailto:hello@serync.io" className="hover:text-white transition-colors">hello@serync.io</a></li>
                            <li><Link to="/support" className="hover:text-white transition-colors">Support Center</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm">Terms of Service</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/terms" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    </div>
                    <p>&copy; {currentYear} Serync. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
