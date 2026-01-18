'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Layers,
    Target,
    Activity,
    Info,
    CheckCircle2,
    Zap,
    Table,
    ArrowRightLeft,
    Settings,
    ShieldAlert,
    Layout,
    ArrowRight,
    Search,
    Satellite,
    Cpu
} from 'lucide-react';
import ZoomableImage from '../ZoomableImage';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    }
};

export function HistogramMatchingContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-blue-500 pl-4 italic bg-blue-50 dark:bg-blue-900/10 py-3 rounded-r-xl font-medium">
                    Histogram matching (or histogram specification) transforms an image so that its intensity distribution matches a chosen target histogram—often derived from a reference template.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Template Based</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Controlled Contrast</span>
                </div>
            </motion.div>

            {/* 1) Purpose and Applications */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-blue-500" />
                    1) Purpose & Real-World Utility
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 font-bold uppercase tracking-tighter text-[10px]">Case A</div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Image Consistency</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            Essential for <span className="text-zinc-900 dark:text-zinc-100 font-bold">Satellite Imagery</span> where photos of the same location taken at different times or by different sensors must be normalized for side-by-side comparison.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 font-bold uppercase tracking-tighter text-[10px]">Case B</div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Refined Enhancement</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            Used when standard Histogram Equalization (HE) produces a <span className="text-zinc-900 dark:text-zinc-100 font-bold">"washed-out"</span> look. Matching allows you to impose a more natural or realistic distribution.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Transformation Procedure */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layout size={16} className="text-zinc-400" />
                    2) Discrete Transformation Steps
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { step: "Equalize Input", desc: "Compute the input histogram and map intensities to equalized values (s).", icon: Activity },
                        { step: "Define Target", desc: "Compute the CDF of the specified target histogram, G(z).", icon: Target },
                        { step: "Inverse Map", desc: "For each 's', find target intensity 'z' such that G(z) is closest to s.", icon: ArrowRightLeft }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-3 group hover:border-blue-500/30 transition-all">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-400">0{i + 1}</span>
                                <item.icon size={14} className="text-blue-500 opacity-50" />
                            </div>
                            <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{item.step}</h6>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3) Mathematical Logic */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Settings size={16} className="text-blue-500" />
                    3) The Mathematical Pipeline
                </h4>
                <div className="p-8 bg-zinc-950 rounded-[3rem] shadow-2xl space-y-8">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-4">
                            <p className="text-xs text-zinc-400 italic leading-relaxed">
                                The matching transform is essentially equalizing the input and then "unequalizing" it using the inverse of the target mapping.
                            </p>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md flex justify-center">
                                <BlockMath math="z = G^{-1}[T(r)]" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 border-l border-white/5 pl-10 hidden md:block">
                            <div className="space-y-2">
                                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Logic Breakdown</span>
                                <ul className="space-y-3 text-[11px] text-zinc-500 font-mono">
                                    <li><span className="text-white">T(r)</span>: Input Equalization</li>
                                    <li><span className="text-white">G(z)</span>: Target Equalization</li>
                                    <li><span className="text-white">G^{-1}</span>: Inverse Target Map</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Deck of Cards */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Layers size={200} className="text-white" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl shrink-0 group-hover:rotate-6 transition-transform">
                        <Layers size={50} className="text-white" />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-3xl font-bold tracking-tighter text-white">The Specific Deck</h5>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] italic">Visualizing Specification</p>
                        </div>
                        <p className="text-sm text-balance text-white/90 leading-relaxed italic max-w-xl">
                            Equalization is like spreading card suits <span className="text-white font-bold underline decoration-white/30 underline-offset-8">identically</span> so they occur equally often. Matching is rearranging your deck so it matches an <span className="text-white font-bold">ideal deck pattern</span> exactly—even if that pattern is unusual.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Python Workflow */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Cpu size={16} className="text-zinc-400" />
                    4) Implementation & Workflow
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-zinc-900 text-white shrink-0">
                            <Cpu size={18} />
                        </div>
                        <div className="space-y-2 text-[11px] text-zinc-500 leading-relaxed italic">
                            <h6 className="font-bold text-zinc-900 dark:text-zinc-100 text-xs NOT-ITALIC">Numpy approach</h6>
                            <p>Typically uses <span className="font-mono text-[10px] bg-white dark:bg-zinc-800 p-1 window-rounded border border-zinc-200 dark:border-zinc-700 font-bold text-indigo-400">numpy.interp</span> to find the closest mapping between input CDF and reference CDF.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 shrink-0">
                            <ShieldAlert size={18} />
                        </div>
                        <div className="space-y-1 text-[11px] text-zinc-500 italic">
                            <h6 className="font-bold text-zinc-900 dark:text-zinc-100 text-xs NOT-ITALIC">RGB Caution</h6>
                            <p>Matching per channel (R, G, B) can shift colors. Often better to perform matching in the <span className="text-zinc-900 dark:text-zinc-100 font-bold">L*a*b* or HSV</span> luminance channels.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-blue-500" />
                    Matching vs. Equalization
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[600px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Technique</th>
                                <th className="p-4 font-bold">Target Histogram</th>
                                <th className="p-4 font-bold">Best Use Case</th>
                                <th className="p-4 font-bold">Core Concept</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors text-zinc-900 dark:text-zinc-100 font-medium">
                                <td className="p-4 NOT-ITALIC">Equalization</td>
                                <td className="p-4 uppercase text-[10px]">Uniform (Flat)</td>
                                <td className="p-4">Automated broad contrast</td>
                                <td className="p-4 font-mono font-normal">CDF Mapping</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-blue-500 NOT-ITALIC">Matching</td>
                                <td className="p-4 uppercase text-[10px] text-blue-400">Specified / Reference</td>
                                <td className="p-4">Consistency (Satellite/Temp)</td>
                                <td className="p-4 font-mono font-normal text-indigo-400">z = G⁻¹[T(r)]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-blue-500" />
                    Histogram Matching: Bridging Distributions for Structural Consistency
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/hstm.png"
                        alt="Visualization of histogram matching where an input image is transformed to have the same intensity distribution as a target template image using inverse cumulative distribution functions."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
