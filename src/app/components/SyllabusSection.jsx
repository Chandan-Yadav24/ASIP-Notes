'use client';

import Link from "next/link";
import { getCompactSyllabus } from "../data/syllabus";
import { BookOpen, ChevronRight, Layers, FileText, Hash } from 'lucide-react';
import { motion } from "framer-motion";

export default function SyllabusSection() {
  const compactSyllabus = getCompactSyllabus();

  return (
    <section className="space-y-8 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20">
          <BookOpen size={20} />
        </div>
        <h2 className="text-2xl font-black text-zinc-100 tracking-tight">
          Course Index
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {compactSyllabus.map((module, idx) => (
          <div
            key={module.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-1 transition-all hover:border-violet-500/30 hover:bg-zinc-900/60"
          >
            {/* Header */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-950 p-6 border-b border-zinc-800/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${idx === 0 ? 'bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20' : 'bg-fuchsia-500/10 text-fuchsia-400 ring-1 ring-fuchsia-500/20'}`}>
                    <Hash size={10} /> {module.code}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-zinc-100 leading-snug">
                    {module.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="flex-1 p-6 space-y-8">
              {module.units.map((unit) => (
                <div key={unit.id} className="space-y-3">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 pl-1">
                    <Layers size={14} className={idx === 0 ? "text-indigo-500" : "text-fuchsia-500"} />
                    {unit.number}: <span className="text-zinc-300">{unit.title}</span>
                  </h4>

                  <div className="grid gap-2">
                    {unit.sections.map((section, sectionIndex) => (
                      <Link
                        href={`/modules/${module.id}/${unit.id}`}
                        key={sectionIndex}
                        className="group/item flex items-center justify-between p-3 rounded-xl border border-zinc-800/50 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-400 group-hover/item:bg-zinc-700 group-hover/item:text-zinc-200 transition-colors">
                            {section.number}
                          </span>
                          <span className="text-xs font-medium text-zinc-400 group-hover/item:text-zinc-200 transition-colors">
                            {section.title}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[9px] font-bold text-zinc-500 uppercase tracking-wider">
                          {section.topicCount} topics
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="p-2 mt-auto">
              <Link
                href={`/modules/${module.id}`}
                className={`flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-bold uppercase tracking-widest transition-all ${idx === 0
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40'
                  : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-900/20 hover:shadow-fuchsia-900/40'
                  }`}
              >
                Explore {module.code} <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}