"use client";

import { ArrowUpRight, Database, Code, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const CASES = [
    {
        id: "ALPHA",
        title: "INTELLIGENCE_SCRAPER",
        desc: "Zero-dependency Python engine for high-velocity data extraction.",
        stats: ["<500ms LATENCY", "100% RELIABILITY"],
        icon: Database,
        status: "DEPLOYED",
        statusColor: "text-emerald-500",
    },
    {
        id: "BETA",
        title: "DATA_SURGEON",
        desc: "Automated Excel/CSV sanitization protocol for messy datasets.",
        stats: ["10k ROWS/SEC", "AUTO-FORMATTING"],
        icon: Code,
        status: "IN_DEV",
        statusColor: "text-yellow-500",
    },
    {
        id: "GAMMA",
        title: "API_SENTINEL",
        desc: "Real-time Discord/Telegram monitoring bot with custom triggers.",
        stats: ["24/7 UPTIME", "WEBHOOK READY"],
        icon: Lock,
        status: "PLANNED",
        statusColor: "text-zinc-500",
    }
];

export function CaseStudyGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASES.map((mission) => (
                <div
                    key={mission.id}
                    className="group relative border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all rounded-lg p-5 cursor-pointer overflow-hidden"
                >
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-md text-emerald-500 group-hover:text-emerald-400">
                            <mission.icon className="w-5 h-5" />
                        </div>
                        <div className={cn("text-xs font-mono font-bold tracking-wider", mission.statusColor)}>
                            [{mission.status}]
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-mono text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                        CASE_{mission.id} // {mission.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                        {mission.desc}
                    </p>

                    {/* Stats Footer */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {mission.stats.map((stat, i) => (
                            <span key={i} className="text-[10px] font-mono bg-zinc-950 border border-zinc-800 px-2 py-1 rounded text-zinc-500">
                                {stat}
                            </span>
                        ))}
                    </div>

                    {/* Action Icon */}
                    <ArrowUpRight className="absolute bottom-4 right-4 w-5 h-5 text-zinc-700 group-hover:text-emerald-500 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
            ))}
        </div>
    );
}
