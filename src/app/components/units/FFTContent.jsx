'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Cpu,
    Binary,
    Layers,
    Library,
    Table,
    Info,
    Sparkles,
    ArrowRightLeft,
    ArrowRight,
    Calculator,
    Activity
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

export function FFTContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Introduction */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-zinc-900 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <Zap size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">The Fast Fourier Transform (FFT)</h4>
                </div>
                <p className="leading-relaxed">
                    The FFT is an <span className="font-bold text-indigo-600 dark:text-indigo-400 italic">efficient algorithm</span> for computing the Discrete Fourier Transform (DFT). In image processing, it's the standard engine for shifting between spatial and spectral domains.
                </p>
            </motion.div>

            {/* 1) Computational Efficiency */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Calculator size={18} className="text-zinc-400" />
                    1) Why FFT Matters: Efficiency
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card space-y-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Brute-force DFT</span>
                        <div className="flex items-baseline gap-2">
                            <BlockMath math="(MN)^2" />
                        </div>
                    </div>
                    <div className="card space-y-2 border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10">
                        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">FFT (Divide & Conquer)</span>
                        <div className="flex items-baseline gap-2">
                            <BlockMath math="MN \log_2(MN)" />
                        </div>
                    </div>
                </div>

                {/* Example Box */}
                <div className="p-4 bg-zinc-900 text-zinc-100 rounded-2xl border border-zinc-800 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                        <Cpu size={64} />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                        <div className="space-y-1">
                            <span className="text-[10px] text-zinc-500 uppercase">Input Image</span>
                            <p className="text-lg font-bold tracking-tight">2048 × 2048</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-rose-500 font-bold uppercase mb-1">Direct DFT</span>
                            <p className="text-xs italic text-rose-400/80">≈ 1 Trillion Operations</p>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/10 ring-1 ring-emerald-500/30">
                            <span className="text-[10px] text-emerald-400 font-bold uppercase mb-1">FFT Engine</span>
                            <p className="text-xs font-bold text-emerald-300 italic tracking-tighter">≈ 92 Million Operations</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Mechanics: successive-doubling */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    2) Mechanics: Successive-Doubling
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">1</div>
                            <span className="text-xs font-bold uppercase tracking-tight">Divide & Conquer</span>
                        </div>
                        <p className="text-xs leading-relaxed italic">Instead of one large transform, FFT breaks the problem into smaller tasks and combines them recursively.</p>
                    </div>
                    <div className="space-y-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">2</div>
                            <span className="text-xs font-bold uppercase tracking-tight">Even/Odd Splitting</span>
                        </div>
                        <p className="text-xs leading-relaxed italic">Splits sequence into even-indexed and odd-indexed samples until reaching base 2-point transforms.</p>
                    </div>
                </div>
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800/40 rounded-lg flex items-center gap-3 border border-zinc-200 dark:border-zinc-700">
                    <Info size={16} className="text-zinc-400 shrink-0" />
                    <p className="text-[10px] text-zinc-500">
                        Requires the number of samples <InlineMath math="M" /> to be a power of two (<InlineMath math="M = 2^k" />) for standard Cooley-Tukey implementations.
                    </p>
                </div>
            </motion.div>

            {/* 3) FFT for images (2D application) */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Layers size={18} className="text-zinc-400" />
                    3) 2D FFT Application
                </h4>
                <div className="flex flex-col sm:flex-row items-center gap-4 py-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Row-Wise</span>
                        <div className="p-2 px-4 bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 rounded-lg font-mono text-[10px] border border-indigo-200 dark:border-indigo-800 shadow-sm">
                            FFT(all rows)
                        </div>
                    </div>
                    <ArrowRight className="text-zinc-300 rotate-90 sm:rotate-0" size={24} />
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Column-Wise</span>
                        <div className="p-2 px-4 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 rounded-lg font-mono text-[10px] border border-emerald-200 dark:border-emerald-800 shadow-sm">
                            FFT(all columns)
                        </div>
                    </div>
                </div>
                <p className="text-xs text-center text-zinc-500 italic mt-2">"Wait, it's all separable? Always has been."</p>
            </motion.div>

            {/* 4) Filtering Logic */}
            <motion.div variants={itemVariants} className="space-y-3 p-4 bg-gradient-to-br from-indigo-950 to-zinc-950 rounded-2xl text-zinc-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Activity size={80} />
                </div>
                <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2 bg-white/10 rounded-lg text-indigo-400">
                        <Cpu size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-tight text-white uppercase italic underline decoration-indigo-500 underline-offset-4">Foundation of Digital Filtering</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 relative z-10 max-w-lg leading-relaxed italic">
                    FFT is the engine of frequency filtering. While small kernels (<InlineMath math="< 7 \times 7" />) are fast in the spatial domain, large operations <span className="text-white font-bold">require FFT</span> for practical performance.
                </p>
            </motion.div>

            {/* Analogy: Sorting a Huge Library */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-indigo-900/20 to-zinc-50 dark:from-indigo-950/20 dark:to-zinc-900 border-none relative overflow-hidden group p-6 shadow-sm ring-1 ring-indigo-500/10">
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                    <Library size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-indigo-500 dark:bg-indigo-600 rounded-2xl shadow-xl border border-indigo-400 shrink-0 text-white">
                        <Library size={32} />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 italic underline decoration-indigo-500 underline-offset-8">The Library Sorting Analogy</span>
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-xl">
                            Sorting millions of books requires a smarter approach than simple linear comparisons:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Brute Force</span>
                                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 italic">Comparing every book with every other book. Possible, but <span className="text-rose-500 font-bold">too slow</span>.</p>
                            </div>
                            <div className="space-y-2 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-sm">
                                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest block mb-1">FFT Strategy</span>
                                <p className="text-[11px] text-zinc-900 dark:text-zinc-100 leading-relaxed">
                                    Librarians split the books into smaller piles (Even/Odd shelves). <span className="font-bold italic text-indigo-600 dark:text-indigo-400 underline decoration-indigo-500/30">Divide and conquer</span> takes a fraction of the time.
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
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">FFT vs Brute-force DFT</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Feature</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500 whitespace-nowrap">Brute-Force DFT</th>
                                <th className="px-3 py-2 text-left font-bold text-indigo-500 uppercase tracking-widest">FFT Engine</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Algorithmic Base</td>
                                <td className="px-3 py-2">Direct matrix-vector multiplication</td>
                                <td className="px-3 py-2 font-bold text-indigo-500">Divide-and-conquer (Even/Odd)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Complexity</td>
                                <td className="px-3 py-2 font-mono"><InlineMath math="O((MN)^2)" /></td>
                                <td className="px-3 py-2 font-bold text-indigo-500 font-mono"><InlineMath math="O(MN \log MN)" /></td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Image Computing</td>
                                <td className="px-3 py-2">Heavy direct 2D computation</td>
                                <td className="px-3 py-2 italic">Separable: Row FFTs + Column FFTs</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-indigo-50/10 dark:bg-indigo-900/10">
                                <td className="px-3 py-2 font-bold text-indigo-600 dark:text-indigo-400">Standard Use</td>
                                <td className="px-3 py-2">Pedagogical / Theory only</td>
                                <td className="px-3 py-2 font-bold">Universal: JPEG, MRI, Wireless, etc.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-indigo-500" />
                    Recursive Successive-Doubling Framework for FFT Computation
                    <Sparkles size={10} className="text-zinc-300 ml-1" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/fft.png"
                        alt="Visualization of the FFT recursive structure: butterfly diagrams, divide and conquer splits, and 2D separability."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
