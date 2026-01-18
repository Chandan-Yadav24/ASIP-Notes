'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    CircleDot,
    Binary,
    Zap,
    ArrowUpRight,
    Compass,
    Table,
    Info,
    Maximize2,
    MousePointer2,
    GitCommitVertical
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

export function DotProductCorrelationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) Simplified Formula in DSP */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-900/10 dark:to-zinc-900 border-l-4 border-emerald-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                        <Zap size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">1) Why Correlation simplifies in DSP</h4>
                </div>
                <p className="leading-relaxed">
                    In Statistics, the Pearson coefficient <InlineMath math="\rho" /> looks complex. But in Signal Processing, we often <span className="text-emerald-600 dark:text-emerald-400 font-semibold italic">preprocess signals</span> so they are:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Unbiased (Zero-mean)</span>
                        <BlockMath math="\bar{x} = 0, \bar{y} = 0" />
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Normalized (Unit Std Dev)</span>
                        <BlockMath math={`s_x = 1, s_y = 1`} />
                    </div>
                </div>

                <div className="mt-4 p-4 bg-zinc-900 dark:bg-black rounded-xl border border-zinc-800 shadow-inner group">
                    <p className="text-[10px] text-zinc-500 uppercase font-mono mb-2 text-center">Correlation becomes a sum of products</p>
                    <div className="flex justify-center py-2 group-hover:scale-105 transition-transform">
                        <BlockMath math="\rho \propto \sum_{i=1}^n x_i y_i" />
                    </div>
                </div>
            </motion.div>

            {/* 2) Vector Representation */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <GitCommitVertical size={18} className="text-zinc-400" />
                    2) Vector Representation (Signals as Vectors)
                </h4>

                <div className="card space-y-4">
                    <p>Treat signals as vectors in <InlineMath math="n" />-dimensional space:</p>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 flex justify-center">
                        <BlockMath math="\mathbf{x} = [x_1, x_2, \dots, x_n]^T, \quad \mathbf{y} = [y_1, y_2, \dots, y_n]^T" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-500 border border-indigo-100 dark:border-indigo-800 shrink-0">
                            <CircleDot size={20} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100 uppercase">The Dot Product</span>
                            <p className="text-xs text-zinc-500">
                                Their dot product is the similarity score: <InlineMath math="\mathbf{x} \cdot \mathbf{y} = \mathbf{x}^T \mathbf{y} = \sum x_i y_i" />.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-2 border border-zinc-100 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/50">
                            <span className="text-[10px] font-bold text-emerald-500 uppercase block">Large Positive</span>
                            <p className="text-[10px] text-zinc-500">Very Similar</p>
                        </div>
                        <div className="p-2 border border-zinc-100 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/50">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase block">Near Zero</span>
                            <p className="text-[10px] text-zinc-500">Not Similar</p>
                        </div>
                        <div className="p-2 border border-zinc-100 dark:border-zinc-800 rounded bg-zinc-50/50 dark:bg-zinc-900/50">
                            <span className="text-[10px] font-bold text-rose-500 uppercase block">Large Negative</span>
                            <p className="text-[10px] text-zinc-500">Inverted Match</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Geometric Interpretation */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Compass size={18} className="text-zinc-400" />
                    3) Geometric Interpretation (Angle & Cosine)
                </h4>
                <div className="card space-y-4">
                    <p>For normalized vectors, the dot product equals the <span className="font-bold text-indigo-500 uppercase tracking-widest text-[11px]">Cosine</span> of the angle between them:</p>
                    <div className="bg-zinc-900 p-4 rounded-xl flex justify-center shadow-inner">
                        <BlockMath math="\mathbf{x} \cdot \mathbf{y} = \cos(\theta)" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
                        <div className="flex flex-col items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700">
                            <InlineMath math="\theta = 0^\circ \implies 1" />
                            <span className="text-[10px] text-emerald-500 font-bold">PERFECT MATCH</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700">
                            <InlineMath math="\theta = 90^\circ \implies 0" />
                            <span className="text-[10px] text-zinc-500 font-bold uppercase">Orthogonal</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700">
                            <InlineMath math="\theta = 180^\circ \implies -1" />
                            <span className="text-[10px] text-rose-500 font-bold">OPPOSITE</span>
                        </div>
                    </div>
                    <div className="p-3 bg-blue-50/30 dark:bg-blue-900/10 border-l-4 border-blue-400 rounded-r-lg">
                        <p className="text-[11px] text-blue-800 dark:text-blue-400 italic font-medium leading-relaxed">
                            <span className="font-bold not-italic font-mono mr-1">?</span> Why sine-wave correlation forms a cosine curve: Alignment changes smoothly with phase offset, mapping directly to the cosine relationship.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Connection to Autocorrelation */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    4) Connection to Autocorrelation
                </h4>
                <div className="card-sm space-y-2">
                    <p className="text-xs text-zinc-500">In this view, autocorrelation is literally <strong>"how much the signal overlaps with itself after a shift."</strong></p>
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded flex justify-center">
                        <BlockMath math="R_{xx}[k] = \mathbf{x} \cdot \mathbf{x}_{shifted}(k)" />
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Arrows in space */}
            <motion.div variants={itemVariants} className="card bg-zinc-900 text-zinc-100 border-none relative overflow-hidden group p-6">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                    <ArrowUpRight size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-emerald-500/10 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-500/20 shrink-0">
                        <ArrowUpRight size={32} className="text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-emerald-500 underline-offset-8">The Arrows in Space Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Imagine each signal as an arrow in high-dimensional space. Correlation-as-dot-product is just a clean way to measure that <span className="text-emerald-400 font-bold uppercase italic">Overlap</span>.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-2">
                            <li className="flex items-center gap-2 text-[11px] text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Same Direction → Big Overlap
                            </li>
                            <li className="flex items-center gap-2 text-[11px] text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                                Perpendicular → No Overlap
                            </li>
                            <li className="flex items-center gap-2 text-[11px] text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                Opposite → Negative Overlap
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2 overflow-hidden border border-zinc-200 dark:border-zinc-800 p-0 shadow-lg">
                <div className="p-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2">
                    <Table size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Summary table</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Idea</th>
                                <th className="px-3 py-2 text-left font-bold text-emerald-500">Math Form</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Interpretation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Dot Product</td>
                                <td className="px-3 py-2 font-mono">x ⋅ y = ∑ x_i y_i</td>
                                <td className="px-3 py-2">Basic similarity score (overlap)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Simplification</td>
                                <td className="px-3 py-2 font-mono">mean-0, std-1 ⇒ ρ ≈ x⋅y</td>
                                <td className="px-3 py-2">Correlation becomes “sum of products”</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Angle Meaning</td>
                                <td className="px-3 py-2 text-indigo-500 font-bold font-mono">x⋅y = cos θ</td>
                                <td className="px-3 py-2 italic whitespace-nowrap">1: Same | 0: Orthogonal | -1: Opposite</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Autocorrelation</td>
                                <td className="px-3 py-2 font-mono">Rxx[k] = x ⋅ x_shifted(k)</td>
                                <td className="px-3 py-2 font-medium">Similarity with delayed self</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm border border-zinc-300 dark:border-zinc-800">
                    <Info size={12} /> Geometric overlap and vector alignment
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-2xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                    <ZoomableImage
                        src="/dotp.png"
                        alt="Geometric representation of correlation as an inner product and angle between vectors"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
