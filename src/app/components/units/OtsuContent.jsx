'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Maximize,
    Zap,
    Binary,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Focus,
    Eye,
    Grid,
    Target,
    BarChart3,
    TrendingUp,
    ListChecks,
    Users,
    AlertCircle,
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

export function OtsuContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Otsu's Global Thresholding</span>
                    A classic variance-based technique for automatic global binarization. It intelligently chooses one threshold that best separates the foreground (objects) from the background.
                </p>
            </motion.div>

            {/* 1. Principle of Optimality */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-violet-500" />
                    1) Principle of Optimality (Main Idea)
                </h4>
                <div className="space-y-4">
                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                        Otsu searches for the optimal threshold <InlineMath math="k^*" /> that makes the two classes as <span className="text-violet-400 font-bold underline underline-offset-4 decoration-violet-500/30">separable</span> as possible.
                    </p>
                    <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-violet-500/30 inline-block">
                            <span className="text-[10px] text-zinc-500 uppercase block mb-2 font-bold tracking-tighter">Objective Function</span>
                            <BlockMath math="k^* = \arg \max_{k} \sigma_B^2(k)" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-[10px] text-zinc-500 font-medium italic">
                            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                                <span className="text-zinc-300 font-bold block mb-1 uppercase tracking-widest text-[8px] text-violet-400">Between-Class Variance</span>
                                Maximizing <InlineMath math="\sigma_B^2(k)" /> pushes the means of BG and FG as far apart as possible.
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                                <span className="text-zinc-300 font-bold block mb-1 uppercase tracking-widest text-[8px] text-violet-400">Within-Class Variance</span>
                                Equivalent to minimizing <InlineMath math="\sigma_W^2(k)" />, making each class internally tight.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Algorithm Steps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <ListChecks size={16} className="text-violet-500" />
                    2) Algorithm Workflow (Clear Sequence)
                </h4>
                <div className="space-y-3">
                    {[
                        { step: "01", title: "Histogram Calculation", desc: "Compute the normalized histogram (probability of each intensity level)." },
                        { step: "02", title: "Cumulative Weighting", desc: "Compute probability of class 1 (P1(k)) up to threshold k.", math: "P_1(k) = \sum_{i=0}^k p_i" },
                        { step: "03", title: "Mean Calculation", desc: "Compute running mean m(k) and global mean mg of the entire image.", math: "m(k) = \sum_{i=0}^k i \cdot p_i" },
                        { step: "04", title: "Variance Sweep", desc: "Evaluate between-class variance σB²(k) for every possible k from 0-255." },
                        { step: "05", title: "Optimal Selection", desc: "Identify the index k* where σB²(k) reaches its maximum peak." }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/30 transition-all group overflow-hidden relative">
                            <div className="text-2xl font-black text-white/5 absolute -right-2 top-0 group-hover:scale-110 transition-transform">#{s.step}</div>
                            <div className="p-2 rounded-lg bg-zinc-800 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all shrink-0">
                                <TrendingUp size={16} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-[11px] font-bold text-white uppercase tracking-tighter">{s.title}</div>
                                <p className="text-[10px] text-zinc-500 leading-relaxed italic pr-10">{s.desc}</p>
                                {s.math && (
                                    <div className="bg-zinc-950 p-2 rounded-lg border border-zinc-800/50 inline-block font-mono text-[9px] text-violet-400">
                                        <InlineMath math={s.math} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. Capabilities & Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-violet-500" />
                    3) Capabilities & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">What Works Well</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Bimodal Histograms:</span> Clear peaks separated by a deep valley.</li>
                            <li><span className="text-zinc-300 font-bold">Auto-Pilot:</span> No manual tuning or parameter tweaking.</li>
                            <li><span className="text-zinc-300 font-bold">Robustness:</span> Reliable when object-to-background contrast is high.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Where it Fails</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Unimodal Shapes:</span> Lack of distinct intensity clusters.</li>
                            <li><span className="text-zinc-300 font-bold">Heavy Overlap:</span> Background/Foreground intensities mix heavily.</li>
                            <li><span className="text-zinc-300 font-bold">Non-Uniform Illumination:</span> Lighting gradients shift the "global" truth.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 4. Extensions (Multi-level) */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-violet-500" />
                    4) Multi-Level Extensions
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <Grid size={120} className="absolute -right-12 -bottom-12 text-white/5 rotate-12 transition-transform group-hover:rotate-0" />
                    <p className="text-xs text-zinc-400 leading-relaxed italic">
                        Otsu’s method can be generalized to find <span className="text-violet-400 font-bold underline underline-offset-4 decoration-violet-500/30">K classes</span> by searching for multiple thresholds.
                    </p>
                    <div className="flex gap-4 items-center">
                        <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[10px]">
                            <span className="text-zinc-300 font-bold block mb-1 uppercase tracking-tighter">Use Case</span>
                            Images with Water, Ice, and Shadow (3+ levels)
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-violet-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Users size={80} className="text-violet-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-violet-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-violet-400 uppercase tracking-widest text-xs">Heights in a Room Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500 italic">
                        <p>Imagine separating people into <span className="text-white font-bold underline decoration-violet-500/30">"short" and "tall"</span> with a single height cutoff.</p>
                        <p>Otsu tests every possible height and picks the one that makes both groups most <span className="text-violet-400 font-bold">consistently distinct</span>.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600 italic">"The goal is ensuring the 'short' group is consistently short, and the 'tall' group is consistently tall, maximizing the gap between them."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-violet-500/20 pb-2">
                    <Table size={16} className="text-violet-500" />
                    Otsu Summary Blueprint
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Metric</th>
                                <th className="p-4 font-bold">Definition / Scope</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "Type", d: "Automatic Global Thresholding" },
                                { m: "Mathematical Goal", d: "Maximize σB² (Between-class variance)" },
                                { m: "Peak Condition", d: "Bimodal Histogram (Clear peaks/valleys)" },
                                { m: "Strengths", d: "No parameters, fully automated automation" },
                                { m: "Weaknesses", d: "Poor performance on heavy noise or unimodal data" },
                                { m: "Extensions", d: "Multi-Threshold Otsu for K > 2 classes" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-violet-500/5 transition-colors">
                                    <td className="p-4 font-bold text-violet-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.d}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/otsu.png"
                    alt="Otsu's Automatic Global Thresholding"
                />
            </motion.div>

        </motion.div>
    );
}
