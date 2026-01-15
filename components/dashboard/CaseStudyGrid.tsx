"use client";

import { useState } from "react";
import { ArrowUpRight, Database, Code, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { MissionBriefModal } from "./MissionBriefModal";

const CASES = [
    {
        id: "ALPHA",
        title: "ENTERPRISE DATA EXTRACTION ENGINE",
        description: "Zero-dependency Python engine for high-velocity data extraction.",
        role: "DATA_ENGINEERING",
        stats: ["<500ms LATENCY", "100% RELIABILITY"],
        icon: Database,
        status: "DEPLOYED",
        statusColor: "text-emerald-500",
        codeSnippet: `import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By

class IntelligenceScraper:
    def __init__(self, target_url):
        self.target = target_url
        self.options = webdriver.ChromeOptions()
        self.options.add_argument("--headless=new")
        self.options.add_argument("--disable-blink-features=AutomationControlled")
        
    def bypass_gate(self):
        """Simulate organic human latency to evade bot-detection."""
        delay = random.uniform(1.5, 4.2)
        print(f"[SENTINEL] Masking signature... waiting {delay:.2f}s")
        time.sleep(delay)

    def extract_payload(self):
        driver = webdriver.Chrome(options=self.options)
        driver.get(self.target)
        self.bypass_gate()
        
        # Surgical data extraction
        payload = []
        elements = driver.find_elements(By.CSS_SELECTOR, ".data-node")
        
        for el in elements:
            payload.append({
                "timestamp": time.time(),
                "signal": el.find_element(By.TAG_NAME, "h3").text,
                "integrity": "VERIFIED"
            })
            
        driver.quit()
        return payload`,
        payloadSample: `[
  {
    "id": "NODE_4921",
    "timestamp": 1736859210,
    "source": "Global_Market_Index",
    "value": 4522.10,
    "sentiment": "BULLISH",
    "integrity_check": "PASS"
  },
  {
    "id": "NODE_4922",
    "timestamp": 1736859215,
    "source": "Commodity_Futures",
    "value": 98.45,
    "sentiment": "NEUTRAL",
    "integrity_check": "PASS"
  }
]`
    },
    {
        id: "BETA",
        title: "AUTOMATED DATA CLEANING PIPELINE",
        description: "Automated Excel/CSV sanitization protocol for messy datasets.",
        role: "DATA_SCIENCE",
        stats: ["10k ROWS/SEC", "AUTO-FORMATTING"],
        icon: Code,
        status: "IN_DEV",
        statusColor: "text-yellow-500",
        codeSnippet: `import pandas as pd
import numpy as np

def surgical_clean(file_path):
    # Ingest the raw slop
    df = pd.read_csv(file_path)
    
    # 1. Eliminate duplicates based on Signal ID
    df.drop_duplicates(subset=['signal_id'], keep='last', inplace=True)
    
    # 2. Fix missing values with interpolation
    df['price'] = df['price'].interpolate(method='linear')
    
    # 3. Standardize timestamps to ISO-8601
    df['timestamp'] = pd.to_datetime(df['timestamp']).dt.strftime('%Y-%m-%dT%H:%M:%SZ')
    
    # 4. Filter out "Low Confidence" noise
    df = df[df['confidence_score'] > 0.85]
    
    return df

# STATUS: PIPELINE OPTIMIZED. 6,000 ROWS CLEANED IN 0.4s.`,
        payloadSample: `[REPORT]: DATA_SURGERY_COMPLETE

> BEFORE_STATE:
  - Rows: 15,000
  - Duplicates: DETECTED
  - Timestamps: BROKEN / MIXED
  - Integrity: LOW

> AFTER_STATE:
  - Rows: 12,400 (Unique)
  - Timestamps: ISO-8601 STANDARDIZED
  - Format: SQL_READY

> VELOCITY:
  - Time: 0.8s
  - Throughput: 15.5k rows/sec`
    },
    {
        id: "GAMMA",
        title: "REAL-TIME API MONITOR",
        description: "Real-time Discord/Telegram monitoring bot with custom triggers.",
        role: "BACKEND_OPS",
        stats: ["24/7 UPTIME", "WEBHOOK READY"],
        icon: Lock,
        status: "PLANNED",
        statusColor: "text-zinc-500",
        codeSnippet: `// CLASSIFIED: AWAITING_DEPLOYMENT`,
        payloadSample: `// SYSTEM: WAITING_FOR_DATA_STREAM...`
    }
];

export function CaseStudyGrid() {
    const [selectedCase, setSelectedCase] = useState<typeof CASES[0] | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CASES.map((mission) => (
                    <div
                        key={mission.id}
                        onClick={() => setSelectedCase(mission)}
                        className="group relative border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all rounded-lg p-5 cursor-pointer overflow-hidden active:scale-[0.98]"
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
                            CASE_{mission.id} // <br />
                            <span className="text-sm font-normal text-zinc-400 group-hover:text-emerald-400/80">{mission.title}</span>
                        </h3>
                        <p className="text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-2">
                            {mission.description}
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

            <MissionBriefModal
                isOpen={!!selectedCase}
                onClose={() => setSelectedCase(null)}
                caseData={selectedCase}
            />
        </>
    );
}
