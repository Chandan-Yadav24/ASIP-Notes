'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Zap,
    Binary,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Maximize,
    Activity,
    Eye,
    Sun,
    User,
    Grid,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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

export function ThresholdingContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Thresholding Techniques</span>
                    A fundamental segmentation method that converts grayscale images into binary images.
                    It partitions an image into regions by separating foreground objects from the background using intensity cutoffs.
                </p>
            </motion.div>

            {/* 1. Global Thresholding */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Maximize size={16} className="text-indigo-500" />
                    1) Basic Global Thresholding
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Fixed Global */}
                    <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                            <Binary size={60} className="text-indigo-400" />
                        </div>
                        <h5 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                            <Check size={14} /> Fixed Global
                        </h5>
                        <p className="text-xs text-zinc-400 italic">Uses a single threshold <InlineMath math="T" /> for the entire image.</p>
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 font-mono text-[10px] text-zinc-500">
                            If <InlineMath math="I(x,y) > T" /> → 1 (FG) <br />
                            Else → 0 (BG)
                        </div>
                    </div>

                    {/* Iterative Global */}
                    <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                            <Activity size={60} className="text-violet-400" />
                        </div>
                        <h5 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                            <Activity size={14} /> Iterative Selection
                        </h5>
                        <p className="text-xs text-zinc-400 italic">Automatically estimates <InlineMath math="T" /> based on group means.</p>
                        <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[9px] font-mono text-zinc-500">
                            T = (m1 + m2) / 2
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Adaptive/Variable */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Sun size={16} className="text-indigo-500" />
                    2) Variable / Adaptive Thresholding
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <p className="text-xs text-zinc-400 leading-relaxed italic">
                        Global thresholding fails under <span className="text-rose-400 font-bold italic">uneven illumination</span>.
                        Adaptive thresholding changes <InlineMath math="T(x,y)" /> based on local neighborhood statistics.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-4">
                            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                <Grid size={16} />
                            </div>
                            <div className="text-[10px] text-zinc-500">
                                <span className="font-bold text-zinc-200 block uppercase">Local Mean</span>
                                Compensates for brightness shifts
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-4">
                            <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
                                <Activity size={16} />
                            </div>
                            <div className="text-[10px] text-zinc-500">
                                <span className="font-bold text-zinc-200 block uppercase">Moving Average</span>
                                Compensates for document spot shading
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Multi-threshold & Hysteresis */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    3) Multi-thresholding & Hysteresis
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
                    <div className="space-y-4">
                        <h5 className="font-bold text-white uppercase tracking-tighter flex items-center gap-2">
                            <Check size={12} className="text-indigo-500" /> Multiple Thresholds
                        </h5>
                        <p className="text-zinc-500 italic">
                            Used when an image contains more than two classes (e.g., Background, Shadow, Object).
                            Otsu can be generalized to find multiple cutoff values.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold text-white uppercase tracking-tighter flex items-center gap-2">
                            <Check size={12} className="text-violet-500" /> Hysteresis (Canny)
                        </h5>
                        <p className="text-zinc-500 italic">
                            Uses <span className="text-white font-bold">Thigh</span> and <span className="text-white font-bold">Tlow</span>.
                            Weak points are kept only if they are connected to strong points.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4. Performance Improvements */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    4) Performance Optimization
                </h4>
                <ul className="space-y-3">
                    {[
                        { t: "Pre-Smoothing", d: "Apply Gaussian filtering to reduce noise spikes for a cleaner histogram.", i: Check },
                        { t: "Edge Enhancement", d: "Focus histogram computation on pixels near edges to stabilize peaks.", i: Check },
                        { t: "Dithering/Halftoning", d: "Add small random noise to reduce artificial contouring artifacts.", i: Check }
                    ].map((step, i) => (
                        <li key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 items-center">
                            <step.i size={16} className="text-indigo-500 shrink-0" />
                            <div>
                                <span className="text-xs font-bold text-white uppercase mr-2">{step.t}:</span>
                                <span className="text-[10px] text-zinc-500 italic">{step.d}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <User size={80} className="text-indigo-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">The Party Judge Analogy</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-[10px]">
                    <div className="space-y-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-indigo-400 font-bold uppercase block mb-1">Global Judge</span>
                        <p className="text-zinc-600 italic">Picks one gray cutoff at the door. Fails if some hallways are darker than others.</p>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-violet-400 font-bold uppercase block mb-1">Otsu Judge</span>
                        <p className="text-zinc-600 italic">Studies the group histogram and picks the cutoff that best separates "dark" vs "bright" outfits.</p>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-cyan-400 font-bold uppercase block mb-1">Adaptive Judge</span>
                        <p className="text-zinc-600 italic">Walks around with a torch, using a different cutoff depending on local lighting.</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Thresholding Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Type</th>
                                <th className="p-4 font-bold">Best For</th>
                                <th className="p-4 font-bold">Limitation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "Fixed Global", t: "Single T", b: "Uniform lighting", l: "Uneven illumination" },
                                { m: "Iterative Global", t: "Single Auto T", b: "Simple scenes", l: "Global lighting bias" },
                                { m: "Otsu", t: "Histogram Auto T", b: "Bimodal histograms", l: "Overlapping classes" },
                                { m: "Adaptive", t: "T(x,y) local", b: "Variable lighting", l: "Computation load" },
                                { m: "Hysteresis", t: "Dual T (H/L)", b: "Edge linking", l: "Edge-centric only" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 italic">{row.t}</td>
                                    <td className="p-4 text-zinc-500">{row.b}</td>
                                    <td className="p-4 text-rose-900/60 font-medium">{row.l}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/ithresholding .png"
                    alt="Thresholding Techniques"
                />
            </motion.div>

        </motion.div>
    );
}
