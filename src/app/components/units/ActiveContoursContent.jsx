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

export function ActiveContoursContent() {
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
                <p className="leading-relaxed border-l-4 border-violet-500 pl-4 italic bg-violet-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Active Contours (Snakes)</span>
                    Curve-evolving algorithms used for image segmentation and object tracking. The goal is to iteratively deform an initial contour until it aligns with the boundary of a target object by minimizing an energy function.
                </p>
            </motion.div>

            {/* 1. Energy Functional */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-violet-500" />
                    1) The Energy Functional <InlineMath math="E" />
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 group">
                        <div className="flex items-center gap-2 text-blue-400">
                            <Activity size={18} /> <span className="text-xs font-bold uppercase tracking-widest">Internal Energy</span> <InlineMath math="E_{internal}" />
                        </div>
                        <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                            Enforces <span className="text-zinc-300 font-bold">smoothness & regularity</span>. Prevents the contour from becoming jagged or unstable. Related to curvature and elasticity.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 group">
                        <div className="flex items-center gap-2 text-rose-400">
                            <Magnet size={18} /> <span className="text-xs font-bold uppercase tracking-widest">External Energy</span> <InlineMath math="E_{external}" />
                        </div>
                        <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                            Pulls the curve toward <span className="text-zinc-300 font-bold">image features</span> like edges, lines, and high-contrast boundaries. Derived from image gradients.
                        </p>
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
                    <p className="text-[10px] text-violet-300 font-medium">
                        <span className="font-bold uppercase tracking-widest">Balancing Parameter <InlineMath math="\alpha" />:</span> Weights the trade-off between smoothness (Internal) and feature attraction (External).
                    </p>
                </div>
            </motion.div>

            {/* 2. Process */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-violet-500" />
                    2) Algorithmic Workflow
                </h4>
                <div className="relative space-y-3">
                    {[
                        { step: "01", title: "Initialization", desc: "Place initial curve near target. Must have enough points to model detail." },
                        { step: "02", title: "Energy Definition", desc: "Define E based on curve shape + image forces." },
                        { step: "03", title: "Evolution", desc: "Iteratively update points to reduce E (e.g., Gradient Descent)." },
                        { step: "04", title: "Convergence", desc: "Stop when energy stabilizes or max iterations reached." }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/30 transition-all group">
                            <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-violet-400 font-bold border border-zinc-800 group-hover:bg-violet-500 group-hover:text-white transition-all shrink-0 text-[10px]">
                                {s.step}
                            </div>
                            <div>
                                <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter mb-1">{s.title}</h5>
                                <p className="text-[10px] text-zinc-500 italic pr-6">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. Pros/Cons */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Maximize size={16} className="text-violet-500" />
                    3) Capabilities & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">Advantages</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li>Handles <span className="text-zinc-300 font-bold">irregular shapes</span> well.</li>
                            <li>Robust to <span className="text-zinc-300 font-bold">noise</span> (if tuned).</li>
                            <li>Supports <span className="text-zinc-300 font-bold">user guidance</span> (interactive).</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Limitations</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li>Struggles with <span className="text-zinc-300 font-bold">concave</span> boundaries.</li>
                            <li>Sensitive to <span className="text-zinc-300 font-bold">initial placement</span>.</li>
                            <li>Computationally <span className="text-zinc-300 font-bold">expensive</span>.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 4. Morphological Snakes */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Wind size={16} className="text-violet-500" />
                    4) Variant: Morphological Snakes
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
                    <p className="text-[10px] text-zinc-500 italic mb-4">
                        A faster, more stable variant that evolves contours using morphological operators (dilation/erosion) on binary arrays, avoiding complex PDE solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                            <h5 className="text-[10px] font-bold text-violet-400 uppercase mb-2">MorphGAC</h5>
                            <p className="text-[9px] text-zinc-500">Geodesic Active Contours. Best when contours/edges are visible.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                            <h5 className="text-[10px] font-bold text-violet-400 uppercase mb-2">MorphACWE</h5>
                            <p className="text-[9px] text-zinc-500">All Contours Without Edges. Works on region stats (mean intensity diffs).</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-violet-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Move size={80} className="text-violet-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-violet-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-violet-400 uppercase tracking-widest text-xs">Rubber Band on a Star</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic leading-relaxed">
                    <div className="space-y-2">
                        <p><span className="text-blue-400 font-bold">Elastic Tension:</span> Rubber band trying to be a smooth circle (Internal).</p>
                        <p><span className="text-rose-400 font-bold">Star Points:</span> Edges pulling the band into points (External).</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 text-center font-medium shadow-2xl relative">
                        <p className="text-zinc-600">"The algorithm lets the band snap and settle until it fits the star's shape exactly."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-violet-500/20 pb-2">
                    <Table size={16} className="text-violet-500" />
                    Snakes Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component / Method</th>
                                <th className="p-4 font-bold">Role / Strength</th>
                                <th className="p-4 font-bold">Weakness</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { c: "Internal Energy", r: "Smoothness & Regularity", w: "Can over-smooth detail" },
                                { c: "External Energy", r: "Boundary Attraction", w: "Needs good gradients" },
                                { c: "Traditional Snakes", r: "Precise minimization", w: "Computationally heavy" },
                                { c: "MorphGAC", r: "Fast (Morphological)", w: "Depends on edge visibility" },
                                { c: "MorphACWE", r: "Region-based (No edges)", w: "Fails if regions overlap" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-violet-500/5 transition-colors">
                                    <td className="p-4 font-bold text-violet-400 uppercase tracking-tighter">{row.c}</td>
                                    <td className="p-4 text-emerald-900/60 font-medium">{row.r}</td>
                                    <td className="p-4 text-rose-900/60 font-medium">{row.w}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/actcorn.png"
                    alt="Active Contours Evolution Process"
                />
            </motion.div>

        </motion.div>
    );
}
