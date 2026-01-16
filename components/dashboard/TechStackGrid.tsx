import { cn } from "@/lib/utils";

const STACK = [
    { name: "PYTHON 3.12", style: "border-emerald-500/20 text-emerald-500/80" },
    { name: "PANDAS", style: "border-zinc-800 text-zinc-500" },
    { name: "SELENIUM", style: "border-zinc-800 text-zinc-500" },
    { name: "DOCKER", style: "border-dashed border-zinc-700 text-zinc-400" },
    { name: "NEXT.JS 14", style: "border-zinc-800 text-zinc-500" },
    { name: "TYPESCRIPT", style: "border-zinc-800 text-zinc-500" },
    { name: "POSTGRESQL", style: "border-zinc-800 text-zinc-500" },
    { name: "BASH", style: "border-dashed border-zinc-700 text-zinc-400" },
];

export function TechStackGrid() {
    return (
        <div className="mt-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-600 tracking-widest">
                <span className="w-1 h-px bg-zinc-800"></span>
                OPERATIONAL_STACK
            </div>
            <div className="flex flex-wrap gap-2">
                {STACK.map((tech) => (
                    <span
                        key={tech.name}
                        className={cn(
                            "text-[10px] font-mono px-3 py-1.5 rounded border bg-zinc-950/50 backdrop-blur-sm",
                            tech.style
                        )}
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
