'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Boxes,
    Merge,
    Zap,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Network,
    Stethoscope,
    Globe2,
    Activity,
    Map,
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

export function RegionMergingContent() {
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
                <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Region Merging</span>
                    A segmentation technique that combines adjacent pixels or regions into larger areas when they meet a similarity criterion. It typically serves as the second stage of <span className="text-amber-400 font-bold underline decoration-amber-500/30">Split-and-Merge</span> segmentation.
                </p>
            </motion.div>

            {/* 1. Merging Process */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-amber-500" />
                    1) The Merging Process (Bottom-Up)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        {
                            title: "Initial Regions",
                            desc: "Start with an over-segmented set (from quadtree splitting or superpixels).",
                            icon: Boxes
                        },
                        {
                            title: "Adjacency Check",
                            desc: "Examine neighboring region pairs for similarity using a predicate.",
                            icon: Search
                        },
                        {
                            title: "Consolidation",
                            desc: "Merge pairs that satisfy the similarity rule into a single region.",
                            icon: Merge
                        },
                        {
                            title: "Iterative Repeat",
                            desc: "Continue until no further adjacent regions satisfy the merging rule.",
                            icon: Activity
                        }
                    ].map((s, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <s.icon size={40} className="text-amber-400" />
                            </div>
                            <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter">{s.title}</h5>
                            <p className="text-[10px] text-zinc-500 italic pr-8">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Similarity Criteria */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Check size={16} className="text-amber-500" />
                    2) Similarity Criteria & Predicates
                </h4>
                <div className="space-y-4">
                    {/* A. Mean Intensity */}
                    <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="flex gap-4 items-center mb-2">
                            <div className="p-2 rounded-lg bg-zinc-900 text-amber-400 border border-zinc-800"><Activity size={16} /></div>
                            <h5 className="text-[11px] font-bold text-white uppercase tracking-widest">Mean Intensity Difference</h5>
                        </div>
                        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-amber-500/30 inline-block text-center mx-auto">
                            <BlockMath math="|\mu_1 - \mu_2| < T_{merge}" />
                        </div>
                        <p className="text-[10px] text-zinc-500 italic text-center">
                            Where <InlineMath math="\mu_1, \mu_2" /> are average intensities and <InlineMath math="T_{merge}" /> is the similarity threshold.
                        </p>
                    </div>

                    {/* RAG */}
                    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-indigo-400 mb-2">
                            <Network size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Region Adjacency Graph (RAG)</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Treats each region as a node and adjacency as an edge. Edges weights based on color distance are updated iteratively as nodes are merged.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Strengths & Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-amber-500" />
                    3) Advantages & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">Advantages</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Geometry-Neutral:</span> Excellent for highly irregular shapes.</li>
                            <li><span className="text-zinc-300 font-bold">Refinement Tool:</span> Perfect for correcting quadtree over-splitting.</li>
                            <li><span className="text-zinc-300 font-bold">Clutter Robust:</span> Handles complex, textured backgrounds well.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Limitations</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Scale Issues:</span> Under-segmentation can occur with high thresholds.</li>
                            <li><span className="text-zinc-300 font-bold">Computation:</span> Can be heavy for large images with many fragments.</li>
                            <li><span className="text-zinc-300 font-bold">Tuning:</span> Output is highly sensitive to the Merge Threshold.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Map size={80} className="text-amber-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-amber-400 uppercase tracking-widest text-xs">Villages into Provinces Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic leading-relaxed">
                    <p>Start with many small <span className="text-zinc-300 font-bold underline decoration-amber-500/30">Villages</span> (tiny fragments).</p>
                    <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 text-center font-medium shadow-2xl relative">
                        <p className="text-zinc-600">"If neighbors share the same language/economy <span className="text-amber-400 font-bold">(similarity criterion)</span>, merge them into a <span className="text-amber-400 font-bold underline decoration-amber-500/30">Province</span> until no adjacent areas are similar."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2">
                    <Table size={16} className="text-amber-500" />
                    Region Merging Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Aspect</th>
                                <th className="p-4 font-bold">Technical Meaning</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { a: "Primary Goal", m: "Combine adjacent regions into larger homogeneous sets" },
                                { a: "Mechanism", m: "Similarity predicate (Mean, RAG nodes)" },
                                { a: "Standard Workflow", m: "Refinement after Quadtree splitting" },
                                { a: "Key Strength", l: "Handles irregular shapes & cluttered backgrounds" },
                                { a: "Risk Factor", l: "Under-segmentation if thresholds are too loose" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-amber-500/5 transition-colors">
                                    <td className="p-4 font-bold text-amber-400 uppercase tracking-tighter">{row.a}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.m}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/regionm.png"
                    alt="Region Merging Adjacency Process"
                />
            </motion.div>

        </motion.div>
    );
}

