'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Grid,
    Layers,
    Zap,
    ArrowRight,
    Table,
    Info,
    Boxes,
    Check,
    Search,
    Maximize,
    Network,
    GitBranch,
    BarChart,
    Divide,
    Merge,
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

export function RegionSplittingContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Region Splitting</span>
                    A top-down segmentation method that divides an image into smaller parts by repeatedly subdividing regions that are not "uniform enough" according to a chosen homogeneity criterion.
                </p>
            </motion.div>

            {/* 1. Core Idea & Predicate */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Search size={16} className="text-indigo-500" />
                    1) The Homogeneity Predicate Q(R)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <Grid size={100} className="absolute -right-4 -top-4 text-white/5 group-hover:rotate-12 transition-transform" />
                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                        The predicate <InlineMath math="Q(R)" /> is a logical test that checks if a region is sufficiently uniform based on:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] font-bold text-zinc-400">
                        <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                            <BarChart size={14} className="text-indigo-400" /> Mean Intensity
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                            <Layers size={14} className="text-indigo-400" /> Texture Patterns
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                            <Zap size={14} className="text-indigo-400" /> Variance / Std Dev
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Standard Procedure */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <GitBranch size={16} className="text-indigo-500" />
                    2) Quadtree Splitting Procedure
                </h4>
                <div className="relative space-y-3">
                    {[
                        { step: "01", title: "Full Image Start", desc: "Begin with the entire image as the root node of the quadtree." },
                        { step: "02", title: "Evaluate Predicate", desc: "Check Q(R). If FALSE, the region is not homogeneous enough." },
                        { step: "03", title: "Subdivide (Split)", desc: "Split the failed region into 4 equal disjoint quadrants." },
                        { step: "04", title: "Recursive Descent", desc: "Apply the test to each new quadrant until Q(R) becomes TRUE everywhere." }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-indigo-400 font-bold border border-zinc-800 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
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

            {/* 3. Mathematical Criterion */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <BarChart size={16} className="text-indigo-500" />
                    3) Variance-Based Splitting Rule
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                    <div className="bg-zinc-900/50 p-5 rounded-2xl border border-indigo-500/30 inline-block font-mono">
                        <span className="text-[10px] text-zinc-500 uppercase block mb-2 font-bold tracking-tighter">Split Predicate</span>
                        <BlockMath math="\sigma_R > T_{split}" />
                    </div>
                    <p className="text-[10px] text-zinc-500 italic">
                        Where <InlineMath math="\sigma_R" /> is the region's standard deviation and <InlineMath math="T_{split}" /> is the user-defined threshold for "clutter".
                    </p>
                </div>
            </motion.div>

            {/* 4. Why Merge? */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Merge size={16} className="text-indigo-500" />
                    4) The Need for Merging (Hybrid Stage)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2 text-rose-400">
                            <Divide size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Problem: Over-splitting</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                            Rigid quadtree structures can split a single large object into multiple small adjacent homogeneous blocks that should be unified.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <Merge size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Solution: Merge Stage</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                            Merge <InlineMath math="R_j" /> and <InlineMath math="R_k" /> if their union obeys the predicate: <InlineMath math="Q(R_j \cup R_k) = TRUE" />.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Use Case */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                    <Network size={80} className="text-indigo-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Scientific Use Case</h5>
                </div>
                <div className="text-xs text-zinc-500 italic space-y-4 leading-relaxed pr-20">
                    <p>
                        In <span className="text-white font-bold">Scientific Imagery (e.g., Supernova Analysis)</span>, split-and-merge is used to separate dense core regions from sparse cosmic dust backgrounds based on standard deviation thresholds.
                    </p>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Region Splitting Blueprint
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Element</th>
                                <th className="p-4 font-bold">Logic / Implementation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { e: "Method Type", l: "Top-Down (Image → Quadtree quadrants)" },
                                { e: "Predicate Q(R)", l: "Rule to test homogeneity (Variance/Texture)" },
                                { e: "Common Goal", l: "Split until every region is uniform" },
                                { e: "Merging Phase", l: "Corrects unnecessary quadtree splits" },
                                { e: "Ideal For", l: "Cluttered scenes, varying textures" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.e}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.l}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/regions.png"
                    alt="Region Splitting Quadtree Process"
                />
            </motion.div>

        </motion.div>
    );
}
