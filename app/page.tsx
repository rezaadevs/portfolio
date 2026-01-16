import { CommandHeader } from "@/components/dashboard/CommandHeader";
import { SentinelTerminal } from "@/components/dashboard/SentinelTerminal";
import { CaseStudyGrid } from "@/components/dashboard/CaseStudyGrid";
import { TechStackGrid } from "@/components/dashboard/TechStackGrid";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col pt-14">
      <CommandHeader />

      <main className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:overflow-hidden lg:max-h-[calc(100dvh-3.5rem)]">

        {/* LEFT COLUMN: Mission & Arsenal (Scrollable) */}
        <div className="lg:col-span-8 flex flex-col gap-8 lg:overflow-y-auto pr-2 scrollbar-hide pb-[150px]">

          {/* Hero Section */}
          <section className="space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE_FOR_HIRE
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
              High-Performance <br />
              <span className="text-zinc-500">Automation Systems.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              We don't just sell scripts; we build <span className="text-emerald-400 font-mono">Enterprise Integration Systems</span>.
              Specializing in custom Python scraping solutions, data pipelines, and API architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.fiverr.com/rezaa_dev"
                target="_blank"
                className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-md font-bold text-sm hover:bg-emerald-400 transition-colors"
              >
                START_PROJECT <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:rezaa.dev@proton.me"
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-md font-bold text-sm hover:border-zinc-700 hover:text-white transition-colors"
              >
                VIEW_SERVICES <Mail className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Arsenal Grid */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 tracking-widest">
              <span className="w-2 h-2 bg-zinc-800 rotate-45"></span>
              ENGINEERING_CASE_STUDIES
              <span className="flex-1 h-px bg-zinc-900"></span>
            </div>
            <CaseStudyGrid />

            {/* New Tech Stack Section */}
            <TechStackGrid />
          </section>

        </div>

        {/* RIGHT COLUMN: Sentinel Terminal (Sticky Desktop) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-0 h-[450px] self-start">
          <SentinelTerminal />
        </div>

      </main>
    </div>
  );
}
