import { CommandHeader } from "@/components/dashboard/CommandHeader";
import { SentinelTerminal } from "@/components/dashboard/SentinelTerminal";
import { CaseStudyGrid } from "@/components/dashboard/CaseStudyGrid";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-14">
      <CommandHeader />

      <main className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden max-h-[calc(100vh-3.5rem)]">

        {/* LEFT COLUMN: Mission & Arsenal (Scrollable) */}
        <div className="lg:col-span-8 flex flex-col gap-8 overflow-y-auto pr-2 scrollbar-hide pb-20">

          {/* Hero Section */}
          <section className="space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE_FOR_DEPLOYMENT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
              High-Precision <br />
              <span className="text-zinc-500">Python Automation Protocols.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              We don't sell scripts; we deploy <span className="text-emerald-400 font-mono">Sovereign Engines</span>.
              Specializing in zero-dependency web extraction, automated data surgery, and API integration.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.fiverr.com/rezaa_dev"
                target="_blank"
                className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-md font-bold text-sm hover:bg-emerald-400 transition-colors"
              >
                INITIATE_HEIST <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:rezaa.dev@proton.me"
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-md font-bold text-sm hover:border-zinc-700 hover:text-white transition-colors"
              >
                SECURE_LINE <Mail className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Arsenal Grid */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-500 tracking-widest">
              <span className="w-2 h-2 bg-zinc-800 rotate-45"></span>
              DEPLOYED_ARSENAL
              <span className="flex-1 h-px bg-zinc-900"></span>
            </div>
            <CaseStudyGrid />
          </section>

        </div>

        {/* RIGHT COLUMN: Sentinel Terminal (Sticky Desktop) */}
        <div className="hidden lg:block lg:col-span-4 h-full sticky top-0">
          <SentinelTerminal />
        </div>

      </main>
    </div>
  );
}
