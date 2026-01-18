'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Maximize2,
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
    Eye,
    Maximize,
    Minimize,
    Focus,
    Pipette,
    Grid3X3,
    MousePointer2
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

export function LinearNonLinearSmoothingContent() {
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
                    Smoothing is a critical pre-processing step used to reduce noise and remove irrelevant fine details before tasks like segmentation and object extraction.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Noise Reduction</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Spatial Filtering</span>
                </div>
            </motion.div>

            {/* 1) Linear Smoothing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid3X3 size={16} className="text-blue-500" />
                    1) Linear Smoothing (Convolution Based)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Box Filter */}
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Maximize2 size={18} />
                            </div>
                            <h5 className="font-bold text-sm">Box / Average Filter</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Replaces each pixel with a simple average of its neighbors.
                            <span className="block mt-2 font-bold text-zinc-400 uppercase tracking-tighter text-[9px]">Fast, but blurs edges heavily.</span>
                        </p>
                    </div>

                    {/* Weighted Average */}
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <Pipette size={18} />
                            </div>
                            <h5 className="font-bold text-sm">Weighted Average</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Assigns higher weights to central pixels.
                            <span className="block mt-2 font-bold text-zinc-400 uppercase tracking-tighter text-[9px]">Slightly better detail preservation than Box filters.</span>
                        </p>
                    </div>

                    {/* Gaussian Filter */}
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Focus size={18} />
                            </div>
                            <h5 className="font-bold text-sm">Gaussian Filter</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Uses a Gaussian curve for weights.
                            <span className="block mt-2 font-bold text-zinc-400 uppercase tracking-tighter text-[9px]">Isotropic, separable, and natural-looking blur.</span>
                        </p>
                    </div>
                </div>

                <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl space-y-2">
                    <h6 className="text-[10px] font-bold text-blue-600 uppercase flex items-center gap-2">
                        <Info size={14} /> Low-Pass Filtering
                    </h6>
                    <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                        Linear smoothing behaves as a <span className="font-bold text-zinc-900 dark:text-zinc-100">Low-Pass Filter</span>: it reduces high-frequency content (noise, edges) while preserving low-frequency content (homogeneous regions).
                    </p>
                </div>
            </motion.div>

            {/* 2) Non-Linear Smoothing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-rose-500" />
                    2) Non-Linear Smoothing (Order-Statistics)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-zinc-900 text-white rounded-[2.5rem] space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <Search size={150} />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-2xl w-fit border border-white/10">
                                <Maximize size={18} className="text-rose-400" />
                                <h5 className="font-bold text-sm uppercase tracking-widest text-white">Median Filter</h5>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic">
                                Replaces the center pixel with the <span className="text-white font-bold underline decoration-rose-500/30 underline-offset-4">median value</span> of sorted neighbors.
                            </p>
                            <ul className="space-y-2 text-[10px] text-zinc-500">
                                <li className="flex gap-2 items-center"><CheckCircle2 size={12} className="text-emerald-500" /> Best for Impulse (Salt-and-Pepper) noise</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 size={12} className="text-emerald-500" /> Preserves edges much better than averaging</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 space-y-6">
                        <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                            <Layout size={14} className="text-amber-500" /> Specialized Ordered Filters
                        </h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase">Max / Min Filters</p>
                                <p className="text-[11px] text-zinc-500 italic">Useful for expanding bright spots (Max) or shrinking them (Min).</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase">Alpha-Trimmed Mean</p>
                                <p className="text-[11px] text-zinc-500 italic">A hybrid that removes outliers before averaging. Handles mixed noise.</p>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase">Bilateral Filter</span>
                                <span className="text-[10px] text-zinc-500 italic italic">Edge-aware smoothing via intensity similarity.</span>
                            </div>
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                                <Eye size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Crowd Photo */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <Users size={200} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h5 className="text-3xl font-bold tracking-tighter text-white italic">The Crowd Photo</h5>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Linear vs Non-Linear Comparison</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/5 text-white border border-white/10 shrink-0">
                                    <Layout size={18} />
                                </div>
                                <h6 className="text-sm font-bold text-zinc-200">Linear: Frosted Glass</h6>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-white/10 pl-6">
                                Viewing the photo through frosted glass. Noisy pixels are less obvious, but <span className="text-zinc-300 font-bold underline decoration-white/20 underline-offset-4">outlines of people's faces</span> are also blurred into a hazy mess.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                                    <MousePointer2 size={18} />
                                </div>
                                <h6 className="text-sm font-bold text-zinc-200">Non-Linear: Smart Editor</h6>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-emerald-500/20 pl-6">
                                A smart editor who checks each group of people and replaces an <span className="text-emerald-400 font-bold underline decoration-emerald-500/20 underline-offset-4">"outlier" pixel</span> with the most common one in that cluster. Noise is removed while the person's outline remains sharp.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-6 text-[11px]">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Table size={16} className="text-zinc-400" />
                    Smoothing Comparison Matrix
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-widest text-[9px]">
                                <th className="p-4">Filter Type</th>
                                <th className="p-4">How it works</th>
                                <th className="p-4">Best For</th>
                                <th className="p-4">Trade-off</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-200 font-bold NOT-ITALIC">Gaussian (Linear)</td>
                                <td className="p-4">Weighted average / Convolution</td>
                                <td className="p-4">General noise, natural blur</td>
                                <td className="p-4">Blurs sharp edges heavily</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-rose-500 dark:text-rose-400 font-bold NOT-ITALIC">Median (Non-Linear)</td>
                                <td className="p-4">Order ranking (Median value)</td>
                                <td className="p-4 text-rose-500/70">Salt-and-pepper noise</td>
                                <td className="p-4">Computationally heavier</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-amber-500 dark:text-amber-400 font-bold NOT-ITALIC">Bilateral (Order)</td>
                                <td className="p-4">Intensity + Distance weighting</td>
                                <td className="p-4 text-amber-500/70">Edge-preserving denoise</td>
                                <td className="p-4">Requires high computation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-blue-500" />
                    Smoothing Comparison: Linear Blur vs. Non-Linear Edge Preservation
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/lnlsi.png"
                        alt="Visualization comparing linear smoothing (Gaussian) showing edge blurring, against non-linear smoothing (Median) showing salt-and-pepper noise removal with preserved edges."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
