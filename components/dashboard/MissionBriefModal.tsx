"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code, FileJson, FileText, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MissionBriefModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseData: {
        id: string;
        title: string;
        description: string;
        codeSnippet?: string;
        payloadSample?: string;
        stats: string[];
        role: string;
    } | null;
}

export function MissionBriefModal({ isOpen, onClose, caseData }: MissionBriefModalProps) {
    const [activeTab, setActiveTab] = useState<"BRIEF" | "CODE" | "PAYLOAD">("BRIEF");

    if (!isOpen || !caseData) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] md:h-[600px] bg-zinc-950 border border-zinc-800 shadow-2xl z-[70] flex flex-col overflow-hidden md:rounded-lg"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                        CLASSIFIED // {caseData.id}
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-500">
                                        {caseData.role}
                                    </span>
                                </div>
                                <h2 className="text-lg font-bold text-zinc-100 tracking-tight">
                                    {caseData.title}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-zinc-800 rounded text-zinc-400 hover:text-red-400 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-zinc-800 bg-zinc-950">
                            {[
                                { id: "BRIEF", icon: FileText, label: "MISSION_BRIEF" },
                                { id: "CODE", icon: Code, label: "LOGIC_ENGINE" },
                                { id: "PAYLOAD", icon: FileJson, label: "DATA_SAMPLE" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold border-r border-zinc-800 transition-colors",
                                        activeTab === tab.id
                                            ? "bg-zinc-900 text-emerald-400 border-b-2 border-b-emerald-500"
                                            : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                                    )}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto bg-zinc-950 p-6 scrollbar-hide">

                            {/* BRIEF TAB */}
                            {activeTab === "BRIEF" && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                                            OBJECTIVE_OVERVIEW
                                        </h3>
                                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                                            {caseData.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {caseData.stats.map((stat, i) => (
                                            <div key={i} className="bg-zinc-900/50 p-4 rounded border border-zinc-800">
                                                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span className="text-[10px] font-mono">VERIFIED_METRIC</span>
                                                </div>
                                                <div className="font-mono font-bold text-zinc-100">{stat}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CODE TAB */}
                            {activeTab === "CODE" && (
                                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono text-zinc-500">SOURCE: engine.py</span>
                                        <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-mono">PYTHON 3.10</span>
                                    </div>
                                    <pre className="font-mono text-xs md:text-sm bg-zinc-900/50 p-4 rounded border border-zinc-800 overflow-x-auto text-zinc-300 shadow-inner">
                                        <code>{caseData.codeSnippet || "// NO_SOURCE_AVAILABLE"}</code>
                                    </pre>
                                </div>
                            )}

                            {/* PAYLOAD TAB */}
                            {activeTab === "PAYLOAD" && (
                                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono text-zinc-500">OUTPUT: refined_data.json</span>
                                        <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-mono">JSON</span>
                                    </div>
                                    <pre className="font-mono text-xs md:text-sm bg-zinc-900/50 p-4 rounded border border-zinc-800 overflow-x-auto text-emerald-400/80 shadow-inner">
                                        <code>{caseData.payloadSample || "// NO_PAYLOAD_AVAILABLE"}</code>
                                    </pre>
                                </div>
                            )}

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
