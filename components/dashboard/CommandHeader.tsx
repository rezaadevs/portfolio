"use client";

import { Activity, Terminal, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md h-14 flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-3">
                <div className="bg-zinc-900 p-1.5 rounded-md border border-zinc-800">
                    <Terminal className="text-emerald-500 w-4 h-4" />
                </div>
                <span className="font-bold tracking-widest text-sm text-zinc-100">
                    REZAA_DEV <span className="text-zinc-500">//</span> AUTOMATION
                </span>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded text-xs font-medium text-emerald-400">
                    <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    OPERATIONAL
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3" /> LATENCY: 12ms
                </span>
                <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> SECURE
                </span>
            </div>
        </header>
    );
}
