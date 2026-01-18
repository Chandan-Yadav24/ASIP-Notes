'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    ArrowRightLeft,
    Binary,
    Zap,
    Layers,
    RotateCcw,
    Table,
    Info,
    ArrowRight,
    Maximize2,
    RefreshCw,
    Cpu,
    Milk
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

export function DFTContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) Intro: What the DFT does */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/10 dark:to-zinc-900 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        <Zap size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">The Discrete Fourier Transform</h4>
                </div>
                <p className="leading-relaxed">
                    The DFT converts a discrete signal from the <span className="font-semibold text-purple-600 dark:text-purple-400 italic">spatial/spatial domain</span> into the frequency domain. It decomposes any signal into magnitude and phase for each frequency bin.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <Layers size={12} /> Spectral Decomposition
                        </span>
                        <p className="text-xs">Signals are written as a linear combination of sinusoids at different frequencies.</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <ArrowRightLeft size={12} /> Complex Core
                        </span>
                        <p className="text-xs">The DFT output is a set of complex numbers describing the signal's spectrum.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) The DFT transform pair */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    1) The DFT transform pair (forward + inverse)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-3 bg-zinc-950 text-white border-zinc-800">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Forward DFT</span>
                            <span className="p-1 rounded bg-purple-500/10 text-purple-400"><ArrowRight size={14} /></span>
                        </div>
                        <BlockMath math="F(u) = \sum_{x=0}^{M-1} f(x) e^{-j2\pi ux/M}" />
                        <p className="text-[10px] text-zinc-500 text-center italic">Computes F(u) from f(x)</p>
                    </div>
                    <div className="card space-y-3 bg-zinc-950 text-white border-zinc-800">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Inverse DFT (IDFT)</span>
                            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400"><RotateCcw size={14} /></span>
                        </div>
                        <BlockMath math="f(x) = \frac{1}{M} \sum_{u=0}^{M-1} F(u) e^{j2\pi ux/M}" />
                        <p className="text-[10px] text-zinc-500 text-center italic">Recovers f(x) from F(u)</p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Key Properties */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <RefreshCw size={18} className="text-zinc-400" />
                    2) Key properties of the DFT
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="card bg-zinc-50 dark:bg-zinc-800/20 space-y-2 border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Periodicity</span>
                        <p className="text-xs">DFT representation is periodic with period <InlineMath math="M" />, assuming the finite block repeats.</p>
                    </div>
                    <div className="card bg-zinc-50 dark:bg-zinc-800/20 space-y-2 border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">2D Separability</span>
                        <p className="text-xs">2D DFT = row-wise DFTs then column-wise DFTs. Crucial for efficient image processing.</p>
                    </div>
                    <div className="card bg-zinc-50 dark:bg-zinc-800/20 space-y-2 border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase text-rose-500">Frequency Meanings</span>
                        <p className="text-xs italic text-zinc-500">Low: Smooth backgrounds. High: Edges, detail, and noise.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Layers size={18} className="text-zinc-400" />
                    3) Applications in Image Processing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card border-dashed border-2 border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xs uppercase text-indigo-500">Frequency Filtering Workflow</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-3 p-2 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg">
                                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500 text-white text-[10px]">1</span>
                                <p>Compute 2D DFT of the image.</p>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg">
                                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500 text-white text-[10px]">2</span>
                                <p>Multiply by filter mask (LPF / HPF).</p>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg">
                                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-500 text-white text-[10px]">3</span>
                                <p>Apply IDFT to return to spatial domain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="card-sm bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-l-2 border-emerald-500 space-y-1">
                            <span className="font-bold text-[10px] text-emerald-600 uppercase">Convolution Theorem</span>
                            <p className="text-xs italic">Convolution in space ↔ Multiplication in frequency.</p>
                        </div>
                        <div className="card-sm bg-gradient-to-r from-amber-500/10 to-rose-500/10 border-l-2 border-amber-500 space-y-1">
                            <span className="font-bold text-[10px] text-amber-600 uppercase">Image Compression</span>
                            <p className="text-xs text-zinc-500">Keep significant low-freq coefficients, discard small ones.</p>
                        </div>
                        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-3">
                            <Cpu size={24} className="text-purple-400" />
                            <div>
                                <span className="text-[10px] font-bold text-purple-400 uppercase block tracking-wider">The FFT Advantage</span>
                                <p className="text-[11px] text-zinc-400 font-mono italic">O(MN log₂ MN)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Smoothie */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-indigo-900 to-purple-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Milk size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Milk size={32} className="text-purple-300" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-purple-500 underline-offset-8">The Smoothie Analogy</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Forward DFT</span>
                                <p className="text-[11px] text-zinc-300 italic">Analyzing the smoothie to find its "frequency ingredients" (amount of each).</p>
                            </div>
                            <div className="space-y-2 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">Inverse DFT / Filtering</span>
                                <p className="text-[11px] text-zinc-100 leading-relaxed">
                                    Adjusting ingredient amounts before <span className="font-bold text-emerald-400">blending</span> back into a fresh, modified smoothie.
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
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">DFT Snapshot</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Topic</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Meaning</th>
                                <th className="px-3 py-2 text-left font-bold text-purple-500 uppercase tracking-widest">Key Point</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Forward DFT</td>
                                <td className="px-3 py-2">Compute F(u) from f(x)</td>
                                <td className="px-3 py-2 italic">Decomposes into sinusoidal components</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">IDFT</td>
                                <td className="px-3 py-2 whitespace-nowrap">Recover f(x) from F(u)</td>
                                <td className="px-3 py-2 font-bold text-emerald-500">Reversible Transform</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">2D Separability</td>
                                <td className="px-3 py-2 whitespace-nowrap">2D DFT = Row then Col DFTs</td>
                                <td className="px-3 py-2 italic">Computationally efficient for images</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-purple-50/5">
                                <td className="px-3 py-2 font-bold text-purple-600 dark:text-purple-400">Filtering</td>
                                <td className="px-3 py-2 font-semibold italic">Multiplication in freq domain</td>
                                <td className="px-3 py-2 font-mono">Convolution ↔ Multiplication</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Interactive Frequency Decomposition and DFT Analysis
                    <RefreshCw size={10} className="text-zinc-300 ml-1" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/dft.png"
                        alt="Visualization of the Discrete Fourier Transform: Magnitude/Phase spectrum and periodicity."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
