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
    Focus,
    Search,
    Compass,
    Eye,
    Grid,
    Target,
    Boxes,
    Target as TargetIcon,
    Waves,
    Network,
    MousePointer2,
    MoveDiagonal,
    Shrink,
    Expand,
    Wind,
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

export function RegionSegmentationTechniques() {
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
                <p className="leading-relaxed border-l-4 border-cyan-500 pl-4 italic bg-cyan-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Region-Based Methodology</span>
                    Instead of searching for boundaries (discontinuities), region-based methods build segments directly from clusters of pixels that satisfy a <span className="text-cyan-400 font-bold">similarity criterion</span>.
                    This approach ensures a complete partition where ogni pixel belongs to a connected, homogeneous region.
                </p>
            </motion.div>

            {/* 1. Region Growing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-cyan-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <TargetIcon size={16} className="text-cyan-400" />
                    1) Region Growing (Bottom-Up)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <TargetIcon className="absolute -right-6 -top-6 text-white/5 rotate-12 transition-transform group-hover:rotate-0" size={120} />
                    <p className="text-xs text-zinc-500 leading-relaxed italic pr-12">
                        Builds regions by starting from <span className="text-cyan-400 font-bold underline decoration-cyan-500/30">Seeds</span> and expanding to neighbors that share intensity/color similarity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { step: "Init", desc: "Choose seeds (Manual/Auto)", icon: MousePointer2 },
                            { step: "Expand", desc: "Check homogeneity rule", icon: Expand },
                            { step: "Terminate", desc: "Stop at boundaries", icon: Activity }
                        ].map((s, i) => (
                            <div key={i} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                                <div className="p-2 rounded bg-zinc-900 text-cyan-400"><s.icon size={14} /></div>
                                <div className="text-[10px]"><span className="font-bold text-zinc-300 block uppercase">{s.step}</span>{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 2. Split & Merge */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-cyan-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Boxes size={16} className="text-cyan-400" />
                    2) Region Splitting & Merging
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-violet-400">
                            <Shrink size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Splitting (Quadtree)</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">
                            Starts with the whole image; splits into 4 quadrants if variance is too high. Repeat recursively.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <MoveDiagonal size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Merging (Adjacency)</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">
                            Joins adjacent quadrants if they satisfy a similarity predicate (e.g., small difference in means).
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Watershed */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-cyan-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Waves size={16} className="text-cyan-400" />
                    3) Watershed Algorithm
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Waves size={80} className="text-blue-400" />
                    </div>
                    <p className="text-xs text-zinc-500 italic">
                        Treats image intensity as a <span className="text-blue-400 font-bold underline underline-offset-4 decoration-blue-500/30">Topographic Surface</span>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-[10px]">
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                            <span className="text-zinc-400 font-bold block mb-1 uppercase tracking-tighter">Surface Concept</span>
                            High Intensity = Ridges <br /> Low Intensity = Valleys (Basins)
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                            <span className="text-zinc-400 font-bold block mb-1 uppercase tracking-tighter">Dams/Watersheds</span>
                            Where "floods" from different minima meet, dams are constructed to form boundaries.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Clustering & Superpixels */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-cyan-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Network size={16} className="text-cyan-400" />
                    4) Clustering and Superpixels
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Grid size={16} /> <h5 className="text-[10px] font-bold uppercase tracking-widest">K-Means Clustering</h5>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic font-medium leading-relaxed">
                            Treats pixels as points in feature space (RGB/Intensity) and partitions them into <InlineMath math="k" /> nearest clusters.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2 text-pink-400">
                            <Network size={16} /> <h5 className="text-[10px] font-bold uppercase tracking-widest">SLIC Superpixels</h5>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic font-medium leading-relaxed">
                            Clusters in 5D space (Color + X,Y). Output sections are "atomic" segments that follow object boundaries naturally.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 5. Interactive & Iterative */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-cyan-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-cyan-400" />
                    5) Interactive and Iterative Methods
                </h4>
                <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-6 items-center group">
                        <div className="p-4 rounded-full bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all shrink-0">
                            <MousePointer2 size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xs font-bold text-white uppercase tracking-widest">GrabCut (Graph-Based)</h5>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Combines Graph-Cuts and GMMs. Requires a user bounding box and provides high-quality foreground extraction.
                            </p>
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-6 items-center group">
                        <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                            <Wind size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xs font-bold text-white uppercase tracking-widest">Active Contours (Snakes)</h5>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Curve-evolving methods that minimize energy functionals until valid boundaries are matched. Morphological versions are faster binary alternatives.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Target size={80} className="text-cyan-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-cyan-400 uppercase tracking-widest text-xs">Garden Mapping Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic">
                    <div className="space-y-4">
                        <p><span className="text-zinc-300 font-bold uppercase tracking-tighter">Edge-based:</span> Walk around looking ONLY for borders where grass changes to mulch.</p>
                        <p><span className="text-cyan-400 font-bold uppercase tracking-tighter">Region-based:</span> Pick one piece of mulch (seed) and keep collecting similar mulch until the entire mulch region is found.</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 text-center font-medium shadow-2xl">
                        <p className="text-zinc-600">"You find the whole garden bed without ever explicitly tracing the boundary line at the start."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-cyan-500/20 pb-2">
                    <Table size={16} className="text-cyan-400" />
                    Region-Based Technique Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Main Idea</th>
                                <th className="p-4 font-bold">Strength</th>
                                <th className="p-4 font-bold">Main Limitation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "Region Growing", i: "Expand from seeds", s: "Connected, intuitive", l: "Seed/threshold sensitivity" },
                                { m: "Split & Merge", i: "Quadtree refinement", s: "Handles complex scenes", l: "Parameter/predicate heavy" },
                                { m: "Watershed", i: "Flood topography", s: "Object separation", l: "Over-segmentation risk" },
                                { m: "K-means", i: "Clustering (feature space)", s: "Unsupervised, fast", l: "No spatial continuity" },
                                { m: "SLIC", i: "5D Superpixels", s: "Boundary-aware grid", l: "Fixed k constraint" },
                                { m: "GrabCut", i: "Graph-cut + GMM", s: "Top-tier FG extraction", l: "User input required" },
                                { m: "Snakes", i: "Curve evolution", s: "Smooth contours", l: "Noise sensitivity" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-cyan-500/5 transition-colors">
                                    <td className="p-4 font-bold text-cyan-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 italic text-zinc-500">{row.i}</td>
                                    <td className="p-4 text-emerald-900/60 font-medium">{row.s}</td>
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
                    src="/rbst.png"
                    alt="Region-Based Segmentation Pipeline"
                />
            </motion.div>

        </motion.div>
    );
}

