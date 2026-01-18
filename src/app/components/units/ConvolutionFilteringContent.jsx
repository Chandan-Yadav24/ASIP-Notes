'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Combine,
    ArrowRightLeft,
    Zap,
    Layers,
    Table,
    Info,
    Box,
    Filter,
    Cpu,
    Sparkles,
    RefreshCw,
    SearchCode,
    RotateCcw
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

export function ConvolutionFilteringContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) The Convolution Theorem (core idea) */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-900/10 dark:to-zinc-900 border-l-4 border-emerald-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                        <Combine size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">The Convolution Theorem</h4>
                </div>
                <p className="leading-relaxed">
                    Convolution in the spatial domain becomes <span className="font-bold text-emerald-600 dark:text-emerald-400 italic">element-wise multiplication</span> in the frequency domain. This is the bedrock of spectral filtering.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col items-center">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase mb-2">Spatial Domain</span>
                        <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded font-mono text-zinc-900 dark:text-zinc-100">
                            f(x,y) * h(x,y)
                        </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col items-center">
                        <span className="text-[10px] font-bold text-emerald-500 uppercase mb-2">Frequency Domain</span>
                        <div className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            F(u,v) · H(u,v)
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Frequency-domain filtering process */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Zap size={18} className="text-zinc-400" />
                    2) Frequency-domain filtering process
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                        { title: "Padding", desc: "Add zeros to avoid wraparound (circular convolution) errors.", icon: Box, color: "zinc" },
                        { title: "Transform", desc: "Convert padded data to frequency domain via FFT.", icon: RefreshCw, color: "blue" },
                        { title: "Centering", desc: "Shift DC (low-freq) component to the center.", icon: ArrowRightLeft, color: "purple" },
                        { title: "Multiply", desc: "Scale by filter transfer function H(u,v).", icon: Layers, color: "emerald" },
                        { title: "Inverse", desc: "Apply IDFT to return to spatial domain pixels.", icon: RotateCcw, color: "amber" }
                    ].map((step, idx) => (
                        <div key={idx} className="card-sm space-y-2 relative border-t-2 border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center p-3">
                            <div className={`p-2 rounded-full bg-${step.color}-500/10 text-${step.color}-500 mb-1`}>
                                <step.icon size={16} />
                            </div>
                            <span className="font-bold text-[10px] uppercase tracking-tighter">{step.title}</span>
                            <p className="text-[10px] text-zinc-500 leading-tight">{step.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-inner mt-2">
                    <BlockMath math="G(u,v) = H(u,v) \cdot F(u,v)" />
                </div>
            </motion.div>

            {/* 3) Advantages */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Cpu size={18} className="text-zinc-400" />
                    3) Advantages of frequency-domain filtering
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card space-y-2 border-l-4 border-indigo-500 bg-indigo-50/10 dark:bg-indigo-900/5">
                        <span className="font-bold text-xs text-indigo-600 uppercase italic">Efficiency</span>
                        <p className="text-xs italic leading-relaxed">For large filters, FFT-based filtering is <span className="font-bold">significantly faster</span> than direct spatial convolution.</p>
                    </div>
                    <div className="card space-y-2 border-l-4 border-emerald-500 bg-emerald-50/10 dark:bg-emerald-900/5">
                        <span className="font-bold text-xs text-emerald-600 uppercase italic">Intuition</span>
                        <p className="text-xs italic leading-relaxed">Frequencies map well to structure: <span className="font-bold">Low</span> = background/shading, <span className="font-bold">High</span> = edges/noise.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Common types of frequency-domain filters */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Filter size={18} className="text-zinc-400" />
                    4) Common types of frequency-domain filters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                    {[
                        { title: "Low-Pass (LPF)", effect: "Smoothing & Noise Reduction", desc: "Reduces high frequencies. Ideal, Butterworth, Gaussian.", color: "blue" },
                        { title: "High-Pass (HPF)", effect: "Sharpening & Edge Enhancement", desc: "Reduces low frequencies. Ideal, Butterworth, Gaussian.", color: "rose" },
                        { title: "Selective Filters", effect: "Notch / Band-pass / Band-reject", desc: "Removes specific spikes (e.g., periodic noise).", color: "purple" },
                        { title: "Restoration Filters", effect: "Deblurring (Inverse / Wiener)", desc: "Undoes blur using a degradation model.", color: "amber" }
                    ].map((filter, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border-l-2 border-${filter.color}-500 bg-white dark:bg-zinc-900 shadow-sm space-y-2 group hover:scale-[1.01] transition-transform`}>
                            <div className="flex justify-between items-start">
                                <span className={`font-bold text-[10px] uppercase text-${filter.color}-600`}>{filter.title}</span>
                                <Sparkles size={12} className={`text-${filter.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </div>
                            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{filter.effect}</p>
                            <p className="text-[11px] text-zinc-500 italic leading-relaxed">{filter.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy: Colored Sands and Prism */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-zinc-950 to-emerald-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <SearchCode size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Sparkles size={32} className="text-emerald-300" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-emerald-500 underline-offset-8">The Colored Sands Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Separating ingredients is easier when they are sorted by size:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Mixed Bucket</span>
                                <p className="text-[11px] text-zinc-300 italic">Spatial domain: removing tiny grains (noise) is hard while everything is mixed.</p>
                            </div>
                            <div className="space-y-2 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">The Magic Prism</span>
                                <p className="text-[11px] text-zinc-100 leading-relaxed">
                                    <span className="font-bold italic text-emerald-400">Fourier Transform:</span> Separates grains by size. Remove the bad sizes, then mix back into a clean bucket.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2 overflow-hidden border border-zinc-200 dark:border-zinc-800 p-0 shadow-lg">
                <div className="p-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2">
                    <Table size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Spatial vs Frequency Comparison</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Topic</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500 whitespace-nowrap">Spatial / Time Domain</th>
                                <th className="px-3 py-2 text-left font-bold text-emerald-500 uppercase tracking-widest">Frequency Domain</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Operation</td>
                                <td className="px-3 py-2">Convolution (slide/filter kernel)</td>
                                <td className="px-3 py-2 font-bold text-emerald-500">Element-wise Multiplication</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Efficiency</td>
                                <td className="px-3 py-2 whitespace-nowrap font-mono italic">O(MN · KL)</td>
                                <td className="px-3 py-2 font-bold text-emerald-500 font-mono italic">O(MN log MN)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Best For</td>
                                <td className="px-3 py-2">Small kernels, simple ops</td>
                                <td className="px-3 py-2">Large kernels, complex shaping</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-emerald-50/5 text-emerald-700 dark:text-emerald-400">
                                <td className="px-3 py-2 font-bold whitespace-nowrap">Noise Control</td>
                                <td className="px-3 py-2 font-semibold">General filtering</td>
                                <td className="px-3 py-2 font-bold">Notch filtering (Periodic spikes)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Convolution Theorem Visualization and Frequency-Domain Masks
                    <SearchCode size={10} className="text-zinc-300 ml-1" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/cfdf.png"
                        alt="Visualization of the Convolution Theorem: Spatial convolution vs frequency multiplication and filtering results."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
