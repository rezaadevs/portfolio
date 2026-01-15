"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const INITIAL_LOGS = [
    "[SENTINEL]: SYSTEM_INIT_COMPLETE",
    "[SENTINEL]: MONITORING_PORT: 3000",
    "[SENTINEL]: SECURE_Handshake: VERIFIED",
    "[SENTINEL]: WAITING_FOR_OPERATOR_COMMAND..."
];

export function SentinelTerminal() {
    const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    // Simulate random "heartbeat" logs
    useEffect(() => {
        const interval = setInterval(() => {
            const heartbeats = [
                "[SENTINEL]: HEARTBEAT_PING: OK",
                "[SENTINEL]: SCANNING_NETWORK...",
                "[SENTINEL]: TRAFFIC_NORMAL",
                "[SENTINEL]: UPDATING_ENCRYPTION_KEYS",
                "[SENTINEL]: RESOURCE_CHECK: OPTIMAL"
            ];
            const randomLog = heartbeats[Math.floor(Math.random() * heartbeats.length)];
            setLogs(prev => [...prev.slice(-15), `${randomLog}`]); // Keep last 15 logs
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border border-zinc-800 bg-zinc-950/50 backdrop-blur rounded-lg w-full h-full flex flex-col font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/50">
                <span className="text-zinc-400">SENTINEL_LOGS</span>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></div>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex-1 p-3 overflow-y-auto space-y-1 scrollbar-hide"
            >
                {logs.map((log, i) => (
                    <div key={i} className="text-zinc-500 hover:text-emerald-400 transition-colors cursor-default">
                        <span className="text-zinc-700 mr-2">{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
                        {log}
                    </div>
                ))}
                <div className="animate-pulse text-emerald-500">_</div>
            </div>
        </div>
    );
}
