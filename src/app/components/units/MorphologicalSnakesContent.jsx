'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Maximize,
    Zap,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Wind,
    Eye,
    MousePointer2,
    Magnet,
    Move,
    Image as ImageIcon,
    Scaling,
    BoxSelect
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

export function MorphologicalSnakesContent() {
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
                <p className="leading-relaxed border-l-4 border-emerald-500 pl-4 italic bg-emerald-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Morphological Snakes</span>
                    A computationally efficient variation of active contours that evolves the curve using <span className="text-emerald-400 font-bold">morphological operations</span> (dilation and erosion) instead of solving complex PDEs.
                </p>
            </motion.div>

            {/* 1. Advantages */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-emerald-500" />
                    1) Advantages over Traditional Snakes
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { t: "Computational Efficiency", d: "Faster evolution on binary arrays vs. expensive floating-point PDE solvers." },
                        { t: "Numerical Stability", d: "Morphological ops are inherently stable, avoiding the instability of finite difference schemes." },
                        { t: "Versatility", d: "Robustly handles variable contrast, noise, and complex irregular boundaries." }
                    ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-all">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">{item.t}</span>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Main Types */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-emerald-500" />
                    2) Two Main Variants
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <BoxSelect className="absolute right-4 top-4 text-zinc-800 opacity-20" size={60} />
                        <div>
                            <h5 className="text-white font-bold text-xs uppercase mb-1">MorphACWE</h5>
                            <span className="text-[10px] text-zinc-500 font-mono block mb-3">(Active Contours Without Edges)</span>
                            <div className="space-y-2">
                                <div className="flex gap-2 items-start">
                                    <Check size={12} className="text-emerald-500 mt-0.5" />
                                    <p className="text-[10px] text-zinc-400">Uses <span className="text-zinc-200">Region Statistics</span> (mean intensity).</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Check size={12} className="text-emerald-500 mt-0.5" />
                                    <p className="text-[10px] text-zinc-400">Works with <span className="text-zinc-200">weak/unclear boundaries</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <Scaling className="absolute right-4 top-4 text-zinc-800 opacity-20" size={60} />
                        <div>
                            <h5 className="text-white font-bold text-xs uppercase mb-1">MorphGAC</h5>
                            <span className="text-[10px] text-zinc-500 font-mono block mb-3">(Geodesic Active Contours)</span>
                            <div className="space-y-2">
                                <div className="flex gap-2 items-start">
                                    <Check size={12} className="text-emerald-500 mt-0.5" />
                                    <p className="text-[10px] text-zinc-400">Uses <span className="text-zinc-200">Edge Gradients</span>.</p>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Check size={12} className="text-emerald-500 mt-0.5" />
                                    <p className="text-[10px] text-zinc-400">Best when contours are <span className="text-zinc-200">visible</span> (even if noisy).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Energy & Process */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-emerald-500" />
                    3) Energy Formulation
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 text-center space-y-6">
                    <div className="bg-zinc-950 p-4 rounded-2xl border border-emerald-500/30 inline-block">
                        <BlockMath math="E = E_{internal} + \alpha E_{external} + \beta E_{morphological}" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-zinc-500 italic max-w-lg mx-auto">
                        <div className="p-2 border border-zinc-800 rounded bg-zinc-950">
                            <span className="block text-zinc-300 font-bold">Internal</span>
                            Smoothness
                        </div>
                        <div className="p-2 border border-zinc-800 rounded bg-zinc-950">
                            <span className="block text-zinc-300 font-bold">External</span>
                            Features/Edges
                        </div>
                        <div className="p-2 border border-zinc-800 rounded bg-zinc-950">
                            <span className="block text-zinc-300 font-bold">Morphological</span>
                            Shape Evolution
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Wind size={80} className="text-emerald-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-emerald-400 uppercase tracking-widest text-xs">Vacuum-Sealing Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic leading-relaxed">
                    <div className="space-y-4">
                        <p><span className="text-emerald-600 font-bold">Traditional Snakes:</span> Stretching a rubber band carefully around a lumpy sweater.</p>
                        <p><span className="text-emerald-400 font-bold">Morphological Snakes:</span> <span className="underline decoration-emerald-500/30">Vacuum Sealing</span>. The bag shrinks and conforms to the sweater instantly using pressure (dilation/erosion forces), fitting irregular shapes effortlessly.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                        <Scaling size={48} className="text-white/20" />
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-emerald-500/20 pb-2">
                    <Table size={16} className="text-emerald-500" />
                    Method Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Best For...</th>
                                <th className="p-4 font-bold">Requires Edges?</th>
                                <th className="p-4 font-bold">Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "MorphACWE", b: "Inside vs Outside Intensity Diff", r: "No", k: "Works on weak/unclear boundaries" },
                                { m: "MorphGAC", b: "Visible Contours (even noisy)", r: "Yes", k: "Strong contour-based tracking" },
                                { m: "General Morph Snakes", b: "Irregular shapes + Noise", r: "Depends", k: "Faster & More Stable than PDEs" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors">
                                    <td className="p-4 font-bold text-emerald-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.b}</td>
                                    <td className="p-4 text-zinc-600 font-medium">{row.r}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.k}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/morsnk.png"
                    alt="Morphological Snakes Evolution"
                />
            </motion.div>

        </motion.div>
    );
}
