'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    ArrowRightLeft,
    Workflow,
    Zap,
    Settings2,
    RotateCcw,
    Table,
    Info,
    Layers,
    Container,
    ChefHat,
    ArrowRight
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

export function FrequencyDomainOverviewContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What they are */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-900/10 dark:to-zinc-900 border-l-4 border-amber-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                        <ArrowRightLeft size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">1) What they are</h4>
                </div>
                <p className="leading-relaxed">
                    Frequency-domain operations mean you modify a signal by working on its <span className="font-semibold text-amber-600 dark:text-amber-400 italic">spectrum</span> (its frequency components) instead of directly changing values in time or space.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <Layers size={12} /> Spectral Decomposition
                        </span>
                        <p className="text-xs">Any signal can be represented as a sum of sinusoids at different frequencies.</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <Zap size={12} /> Frequency Insight
                        </span>
                        <p className="text-xs">The frequency domain shows <span className="italic">which</span> frequencies are present and how strong they are.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Standard Workflow */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Workflow size={18} className="text-zinc-400" />
                    2) The standard workflow (3 main steps)
                </h4>

                <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-500 via-indigo-500 to-emerald-500 hidden md:block"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-4 items-start relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 border-4 border-white dark:border-zinc-900 shadow-lg">
                            <Zap size={24} />
                        </div>
                        <div className="card-sm flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-xs uppercase text-amber-600">Step 1: Transform</span>
                                <span className="text-[10px] bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full text-amber-700 dark:text-amber-400 font-mono italic">Time → Freq</span>
                            </div>
                            <p className="text-xs">Convert signal/image from time domain to frequency domain using <span className="font-bold">DFT (computed via FFT)</span>.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-4 items-start relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shrink-0 border-4 border-white dark:border-zinc-900 shadow-lg">
                            <Settings2 size={24} />
                        </div>
                        <div className="card-sm flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-xs uppercase text-indigo-600">Step 2: Process</span>
                                <span className="text-[10px] bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full text-indigo-700 dark:text-indigo-400 font-mono italic">Modify Spectrum</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded border border-zinc-100 dark:border-zinc-700">
                                    <span className="font-bold text-[9px] text-zinc-400 block uppercase">Low-pass Filter</span>
                                    <p className="text-[10px] text-zinc-500">Reduces high frequencies → smoothing / noise reduction.</p>
                                </div>
                                <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded border border-zinc-100 dark:border-zinc-700">
                                    <span className="font-bold text-[9px] text-zinc-400 block uppercase">High-pass Filter</span>
                                    <p className="text-[10px] text-zinc-500">Reduces low frequencies → sharpening / edges.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-4 items-start relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-white dark:border-zinc-900 shadow-lg">
                            <RotateCcw size={24} />
                        </div>
                        <div className="card-sm flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-xs uppercase text-emerald-600">Step 3: Inverse Transform</span>
                                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full text-emerald-700 dark:text-emerald-400 font-mono italic">Freq → Time</span>
                            </div>
                            <p className="text-xs">Apply Inverse Fourier Transform to convert the modified spectrum back into a signal or image.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Why this works well: Convolution Theorem */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Container size={18} className="text-zinc-400" />
                    3) Why this works: The Convolution Theorem
                </h4>
                <div className="card bg-zinc-900 text-zinc-100 border-none p-5 space-y-4">
                    <div className="flex flex-col items-center gap-4 py-2 border-b border-white/5">
                        <div className="flex items-center gap-12 text-zinc-400">
                            <div className="text-center italic">Time / Space</div>
                            <div></div>
                            <div className="text-center italic text-indigo-400">Frequency</div>
                        </div>
                        <div className="flex items-center gap-6 sm:gap-12">
                            <div className="text-lg font-mono font-bold text-white p-2">Convolution</div>
                            <div className="flex flex-col items-center">
                                <ArrowRightLeft size={24} className="text-indigo-400" />
                                <span className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">Dual</span>
                            </div>
                            <div className="text-lg font-mono font-bold text-white p-2">Multiplication</div>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        Heavy operations like <span className="text-white font-semibold">convolution</span> (filtering) become simple <span className="text-emerald-400 font-bold italic underline decoration-emerald-800 underline-offset-4">element-wise multiplication</span> in the frequency domain. This is vastly more efficient for large data using the FFT.
                    </p>
                </div>
            </motion.div>

            {/* Analogy: Gourmet Soup */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-indigo-900 to-zinc-900 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <ChefHat size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <ChefHat size={32} className="text-amber-400" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-amber-500 underline-offset-8">The Gourmet Soup Analogy</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">In Time/Space Domain</span>
                                <p className="text-[11px] text-zinc-300 italic">The soup is already mixed; changing it is messy and indirect.</p>
                            </div>
                            <div className="space-y-2 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">In Frequency Domain</span>
                                <p className="text-[11px] text-zinc-100 leading-relaxed">
                                    You separate the soup into <span className="font-bold text-amber-400">ingredients</span> (components), adjust them precisely (more herbs, less salt), then mix back.
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
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Summary table</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500 uppercase tracking-tighter">Part</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500 uppercase tracking-tighter">What happens</th>
                                <th className="px-3 py-2 text-left font-bold text-indigo-500 uppercase tracking-tighter">Tools / Examples</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Transform</td>
                                <td className="px-3 py-2">Convert signal → spectrum</td>
                                <td className="px-3 py-2 font-mono">DFT, FFT</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Process</td>
                                <td className="px-3 py-2">Modify frequency components</td>
                                <td className="px-3 py-2 italic font-medium">Low-pass (smooth), High-pass (sharpen)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Inverse transform</td>
                                <td className="px-3 py-2">Convert spectrum → signal</td>
                                <td className="px-3 py-2 font-mono">IDFT, IFFT</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-amber-50/5">
                                <td className="px-3 py-2 font-bold text-amber-600 dark:text-amber-500 whitespace-nowrap">Key principle</td>
                                <td className="px-3 py-2 font-semibold">Convolution ↔ multiplication</td>
                                <td className="px-3 py-2 text-zinc-500">Convolution theorem</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-emerald-50/5">
                                <td className="px-3 py-2 font-bold text-emerald-600 dark:text-emerald-500 whitespace-nowrap">Main benefit</td>
                                <td className="px-3 py-2 font-semibold italic text-emerald-700 line">Faster filtering for large data</td>
                                <td className="px-3 py-2 text-zinc-500">FFT-based processing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Visualizing the 3-step frequency domain workflow
                    <ArrowRight size={10} className="text-zinc-300" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/freq_domain.png"
                        alt="Visualization of the Frequency-Domain standard workflow: Transform, Process, and Inverse Transform"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
