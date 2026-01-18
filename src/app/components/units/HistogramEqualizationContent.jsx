'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Maximize2,
    Calculator,
    Activity,
    Info,
    CheckCircle2,
    Zap,
    Table,
    Users,
    Settings,
    ShieldAlert,
    Layout,
    ArrowRight,
    Search,
    Layers
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

export function HistogramEqualizationContent() {
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
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-indigo-900/10 py-3 rounded-r-xl font-medium">
                    Histogram equalization is a non-linear, point-wise operation that automatically improves image contrast by redistributing pixel intensities toward a nearly uniform distribution.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Automated Contrast</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">CDF Mapping</span>
                </div>
            </motion.div>

            {/* 1) Mathematical Foundation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Calculator size={16} className="text-indigo-500" />
                    1) Mathematical Foundations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] text-zinc-500 italic">
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <h6 className="font-bold text-xs NOT-ITALIC text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.15em]">A) Histogram Normalization</h6>
                        <p>For an image of size <InlineMath math="M \times N" />, we treat the histogram as a probability estimate:</p>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl flex justify-center">
                            <BlockMath math="p(r_k) = \frac{n_k}{MN}" />
                        </div>
                        <p>Where <InlineMath math="n_k" /> is the count for intensity <InlineMath math="r_k" />.</p>
                    </div>

                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <h6 className="font-bold text-xs NOT-ITALIC text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.15em]">B) Discrete Formulation</h6>
                        <p>For <InlineMath math="L" /> gray levels (e.g., 256), the new intensity level <InlineMath math="s_k" /> is:</p>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl flex justify-center">
                            <BlockMath math="s_k = T(r_k) = (L-1) \sum_{j=0}^{k} p_r(r_j)" />
                        </div>
                        <p>The transformation depends on the <span className="text-indigo-500 font-bold">Cumulative Distribution Function (CDF)</span>.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Characteristics & Effects */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-emerald-500" />
                    2) Core Characteristics & Side Effects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { title: "Automatic", desc: "No manual thresholds required; mapping is purely data-driven.", icon: Zap, color: "amber" },
                        { title: "Monotonic", desc: "Prevents intensity reversals and maintains relative brightness order.", icon: Activity, color: "indigo" },
                        { title: "Artifacts", desc: "Can create intensity gaps or merge sparse levels, losing subtle textures.", icon: ShieldAlert, color: "rose" },
                        { title: "Non-Linear", desc: "Changes appearance in ways that may not be 'physically consistent'.", icon: Info, color: "emerald" }
                    ].map((card, i) => (
                        <div key={i} className="p-5 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2 group transition-all hover:scale-[1.02]">
                            <div className={`p-2 rounded-xl bg-${card.color}-500/10 text-${card.color}-500 w-fit group-hover:scale-110 transition-transform`}>
                                <card.icon size={16} />
                            </div>
                            <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{card.title}</h6>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3) Global vs Adaptive */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Settings size={16} className="text-zinc-400" />
                    3) Variants & Implementation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                <Maximize2 size={18} />
                            </div>
                            <h5 className="font-bold text-sm uppercase tracking-tight">Global HE</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                            Uses the entire image histogram. Excellent for overall visibility but can wash out small, local contrast details in extreme shadows or highlights.
                        </p>
                        <div className="pt-2">
                            <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-indigo-400">exposure.equalize_hist()</span>
                        </div>
                    </div>

                    <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                                <Search size={18} />
                            </div>
                            <h5 className="font-bold text-sm uppercase tracking-tight">Adaptive (CLAHE)</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-emerald-500/30 pl-4">
                            Operates on small local blocks. Reveals hidden detail in dark corners without affecting bright areas, though it may amplify noise without clipping.
                        </p>
                        <div className="pt-2">
                            <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-emerald-400">exposure.equalize_adapthist()</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Crowded Room */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Users size={200} className="text-white" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl shrink-0 group-hover:scale-105 transition-transform">
                        <Users size={50} className="text-white" />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-3xl font-bold tracking-tighter text-white">The Crowded Room</h5>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] italic">Visualizing Distribution</p>
                        </div>
                        <p className="text-sm text-balance text-white/90 leading-relaxed italic max-w-xl">
                            A low-contrast image is like <span className="text-white font-bold underline decoration-white/30 underline-offset-8">everyone huddling in one dark corner</span> of a room. Histogram equalization organizes everyone to spread out evenly across the whole room, making individuals much easier to see.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Global vs. Adaptive Comparison
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[600px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Item</th>
                                <th className="p-4 font-bold">Global HE</th>
                                <th className="p-4 font-bold">Adaptive (Local) HE</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Scope</td>
                                <td className="p-4 text-zinc-500">Entire image histogram</td>
                                <td className="p-4 text-zinc-500">Local neighborhoods/blocks</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Main Benefit</td>
                                <td className="p-4 text-zinc-500">Automated overall contrast</td>
                                <td className="p-4 text-zinc-500">Enhances small/local details</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Main Risk</td>
                                <td className="p-4 text-zinc-500">Creates intensity gaps</td>
                                <td className="p-4 text-zinc-500">Noise amplification in smooth areas</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Skimage Tool</td>
                                <td className="p-4 text-mono font-mono text-indigo-500">equalize_hist()</td>
                                <td className="p-4 text-mono font-mono text-emerald-500">equalize_adapthist()</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-indigo-500" />
                    Histogram Equalization: CDF-based Contrast Expansion
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/hequ.png"
                        alt="Visualization of histogram equalization showing the transformation of a narrow input histogram into a spread-out output distribution using the Cumulative Distribution Function."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
