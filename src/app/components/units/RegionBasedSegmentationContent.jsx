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
    TreeDeciduous,
    Waves,
    Network,
    MousePointer2,
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

export function RegionBasedSegmentationContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Region-Based Segmentation</span>
                    A mid-level processing method that partitions an image into connected regions using similarity criteria (intensity, color, or texture).
                    Unlike edge-based methods, it directly groups <span className="text-emerald-400 font-bold">homogeneous pixels</span> to form objects.
                </p>
            </motion.div>

            {/* Core Criteria */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <Layers className="absolute -right-4 -top-4 text-white/5 group-hover:rotate-12 transition-transform" size={100} />
                    <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                        <Target size={14} className="text-emerald-400" /> Success Criteria
                    </h5>
                    <ul className="space-y-2 text-[10px] text-zinc-500 italic">
                        <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> <span className="font-bold text-zinc-300">Complete:</span> Every pixel assigned to a region.</li>
                        <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> <span className="font-bold text-zinc-300">Connected:</span> Each region is a contiguous set.</li>
                        <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> <span className="font-bold text-zinc-300">Homogeneous:</span> Satifies a similarity predicate.</li>
                    </ul>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <Activity className="absolute -right-4 -top-4 text-white/5 group-hover:-rotate-12 transition-transform" size={100} />
                    <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                        <BarChart size={14} className="text-indigo-400" /> Homogeneity Stats
                    </h5>
                    <ul className="space-y-2 text-[10px] text-zinc-500 italic">
                        <li><span className="text-zinc-300 font-bold">Mean:</span> Average brightness/color level</li>
                        <li><span className="text-zinc-300 font-bold">Std Dev:</span> Contrast and texture consistency</li>
                        <li className="text-[9px] text-zinc-600">Note: Two regions can have same mean but different textures (Std Dev).</li>
                    </ul>
                </div>
            </motion.div>

            {/* 1. Region Growing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <TargetIcon size={16} className="text-emerald-500" />
                    1) Region Growing (Bottom-Up)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                            <BlockMath math="|I - \mu_{region}| < T" />
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Starting from <span className="text-emerald-400 font-bold underline decoration-emerald-500/30 font-serif">Seed Points</span>, neighbors are added if they satisfy the similarity predicate <InlineMath math="T" />.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {[
                            { t: "Init", d: "Choose seeds", i: TargetIcon },
                            { t: "Expand", d: "Add similar pixels", i: Maximize },
                            { t: "Stop", d: "Predicate fails", i: Activity }
                        ].map((step, i) => (
                            <div key={i} className="space-y-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50">
                                <step.i size={14} className="mx-auto text-zinc-600" />
                                <div className="text-[10px] font-bold text-white uppercase tracking-tighter">{step.t}</div>
                                <div className="text-[8px] text-zinc-600 italic px-1">{step.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 2. Split & Merge */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Boxes size={16} className="text-emerald-500" />
                    2) Region Splitting & Merging
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Grid size={40} className="text-violet-400" />
                        </div>
                        <h5 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Splitting (Top-Down)</h5>
                        <p className="text-[10px] text-zinc-500 italic pr-8">
                            Recursively divides non-homogeneous regions into 4 quadrants using a <span className="text-zinc-300 font-bold">Quadtree</span> structure.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Boxes size={40} className="text-emerald-400" />
                        </div>
                        <h5 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Merging (Global-Up)</h5>
                        <p className="text-[10px] text-zinc-500 italic pr-8">
                            Combines adjacent quadrants if their similarity (e.g., mean difference) is within a manual threshold.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3 & 4. Specialized Algorithms */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-emerald-500" />
                    3) Watershed & Advanced Methods
                </h4>
                <div className="space-y-4">
                    {/* Watershed */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-6 items-center group">
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                            <Waves size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xs font-bold text-white uppercase tracking-widest">Watershed Algorithm</h5>
                                <span className="text-[8px] bg-blue-500/20 text-blue-400 px-2 rounded font-bold">Topographic</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Floods intensity "valleys" (minima) to form catchment basins. Floods meeting at "ridges" form watershed lines (boundaries).
                            </p>
                        </div>
                    </div>

                    {/* GrabCut */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-6 items-center group">
                        <div className="p-4 rounded-full bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all shrink-0">
                            <MousePointer2 size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xs font-bold text-white uppercase tracking-widest">GrabCut (Graph-Based)</h5>
                                <span className="text-[8px] bg-rose-500/20 text-rose-400 px-2 rounded font-bold">Interactive</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Uses GMMs and Graph Cuts (Min-Cut/Max-Flow) for foreground extraction, often from a user-drawn bounding box.
                            </p>
                        </div>
                    </div>

                    {/* SLIC */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-6 items-center group">
                        <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                            <Network size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xs font-bold text-white uppercase tracking-widest">SLIC Superpixels</h5>
                                <span className="text-[8px] bg-cyan-500/20 text-cyan-400 px-2 rounded font-bold">Clustering</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Clusters pixels in 5D space (Color + X,Y) to create meaningful, perceptually uniform regions for simplified scene analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <TreeDeciduous size={80} className="text-emerald-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-emerald-400 uppercase tracking-widest text-xs">The Forest Surveyor Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic">
                    <p>While an <span className="text-zinc-300 font-bold">Edge-based</span> surveyor tries to find the exact crack in the soil where materials change...</p>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600">"A <span className="text-emerald-400 font-bold font-serif underline decoration-emerald-500/30">Region-based</span> surveyor picks a pine tree (seed) and keeps grouping neighbors until they reach an oak. That 'forest' becomes one region."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-emerald-500/20 pb-2">
                    <Table size={16} className="text-emerald-500" />
                    Region-Based Technique Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Main Idea</th>
                                <th className="p-4 font-bold">Strength</th>
                                <th className="p-4 font-bold">Common Issue</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "Region Growing", i: "Expand from seeds", s: "Intuitive, connected", r: "Seed choice dependency" },
                                { m: "Split & Merge", i: "Quadtree refinement", s: "Handles clutter", r: "Parameter tuning" },
                                { m: "Watershed", i: "flooding topography", s: "Separates objects", r: "Over-segmentation" },
                                { m: "GrabCut", i: "Graph Cuts + GMM", s: "Strong foreground", r: "Needs user input" },
                                { m: "SLIC", i: "5D Clustering", s: "Simplifies pixels", r: "Fixed superpixel count" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors">
                                    <td className="p-4 font-bold text-emerald-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 italic text-zinc-500">{row.i}</td>
                                    <td className="p-4 text-emerald-900/60 font-medium">{row.s}</td>
                                    <td className="p-4 text-rose-900/60 font-medium">{row.r}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/rbs.png"
                    alt="Region-Based Segmentation Pipeline"
                />
            </motion.div>

        </motion.div>
    );
}

function BarChart({ size, className }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 20V10" />
            <path d="M18 20V4" />
            <path d="M6 20v-4" />
        </svg>
    )
}
