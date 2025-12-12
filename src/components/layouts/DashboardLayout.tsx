import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SeryncLogo } from "@/components/SeryncLogo";

import {
    LayoutDashboard,
    Box,
    Settings,
    LogOut,
    DollarSign,
    Menu,
    X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const navItems = [
        { name: "Overview", path: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "My Agents", path: "/dashboard/agents", icon: <Box className="w-5 h-5" /> },
        { name: "Submit Agent", path: "/dashboard/submit-agent", icon: <Box className="w-5 h-5" /> },
        { name: "Earnings", path: "/dashboard/earnings", icon: <DollarSign className="w-5 h-5" /> },
        { name: "Settings", path: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 bg-black/40 backdrop-blur-xl border-r border-white/10`}
            >
                <div className="h-full flex flex-col">


                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <Link to="/" className="block">
                            <SeryncLogo iconClassName="size-6" textClassName="text-xl" />
                        </Link>
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                                <div
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                        ? "bg-white/10 text-white font-medium"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-white/5">
                        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/10">
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-16 border-b border-white/5 bg-background/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30">
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="w-5 h-5" />
                    </Button>

                    <div className="flex items-center ml-auto space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                                U
                            </div>
                            <span className="text-sm font-medium hidden sm:block">User</span>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-auto p-6 md:p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
