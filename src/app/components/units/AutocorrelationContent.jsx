'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Repeat,
    History,
    Zap,
    Activity,
    Binary,
    Mic2,
    Waves,
    Table,
    CheckCircle2,
    Info,
    Layers,
    Search
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

export function AutocorrelationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) Definition */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/10 dark:to-zinc-900 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        <Repeat size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">1) Definition</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">Autocorrelation</span> measures how similar a signal is to a <span className="font-semibold italic">delayed copy of itself</span> as the delay changes.
                </p>
                <div className="flex flex-wrap gap-3">
                    <div className="px-3 py-1.5 bg-white dark:bg-black/20 rounded-full border border-zinc-100 dark:border-zinc-800 shadow-sm text-[11px] flex items-center gap-2">
                        <History size={14} className="text-purple-500" />
                        Delay is called <span className="font-bold">lag</span>
                    </div>
                    <div className="px-3 py-1.5 bg-white dark:bg-black/20 rounded-full border border-zinc-100 dark:border-zinc-800 shadow-sm text-[11px] flex items-center gap-2">
                        <Zap size={14} className="text-amber-500" />
                        Often referred to as <span className="font-bold">serial correlation</span> in discrete-time
                    </div>
                </div>
            </motion.div>

            {/* 2) Key characteristics */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Activity size={18} className="text-zinc-400" />
                    2) Key characteristics & How it works
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* A) Computation */}
                    <div className="card space-y-3 border-t-2 border-zinc-200 bg-zinc-50/30 dark:bg-zinc-800/20">
                        <span className="font-bold text-xs uppercase text-zinc-500 flex items-center gap-2">
                            <Layers size={14} /> Computation Idea
                        </span>
                        <ol className="text-xs space-y-2 list-decimal list-inside text-zinc-600 dark:text-zinc-400">
                            <li>Take original signal.</li>
                            <li>Shift (delay) by integer samples = <span className="text-purple-500 font-mono">lag</span>.</li>
                            <li>Compute correlation between versions.</li>
                            <li className="list-none italic text-[10px] mt-1 text-zinc-500">Repeat for many lag values to see similarity changes.</li>
                        </ol>
                    </div>

                    {/* B) Dot Product */}
                    <div className="card space-y-3 border-t-2 border-emerald-400 bg-emerald-50/5">
                        <span className="font-bold text-xs uppercase text-emerald-500 flex items-center gap-2">
                            <Zap size={14} /> Dot Product Connection
                        </span>
                        <p className="text-xs">If the signal is <span className="font-semibold">unbiased</span> (mean 0) and <span className="font-semibold">normalized</span> (std 1):</p>
                        <div className="bg-zinc-900 px-3 py-2 rounded shadow-inner text-center">
                            <span className="text-emerald-400 italic text-[11px]">autocorrelation ≈ dot product between signal and shifted copy</span>
                        </div>
                    </div>
                </div>

                {/* C) Output */}
                <div className="card p-4 bg-zinc-900 text-zinc-100 border-none relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                        <Search size={60} />
                    </div>
                    <span className="font-bold text-xs text-blue-400 uppercase tracking-widest mb-2 block">Output of Autocorrelation Function</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ul className="text-xs space-y-1 text-zinc-400 list-disc ml-4">
                            <li>Array of <span className="text-white">lags</span></li>
                            <li>Array of <span className="text-white">correlation coefficients</span></li>
                        </ul>
                        <div className="flex items-center justify-center p-2 bg-zinc-800 rounded border border-zinc-700 font-mono text-indigo-400 text-[10px]">
                            Curve: Correlation vs Lag
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Mic2 size={18} className="text-zinc-400" />
                    3) Applications in signal analysis
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-3 border-l-4 border-indigo-500 p-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-500">
                                <Waves size={20} />
                            </div>
                            <span className="font-bold text-sm tracking-tight">Pitch Estimation</span>
                        </div>
                        <p className="text-xs text-zinc-500">Autocorrelation gives a highly precise indication of the <span className="font-bold text-zinc-900 dark:text-zinc-100 italic">Period</span>.</p>
                        <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded flex items-center justify-center">
                            <BlockMath math="\text{lag} = \text{period} \implies \text{Big Spike!}" />
                        </div>
                    </div>

                    <div className="card space-y-3 border-l-4 border-rose-400 p-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg text-rose-500">
                                <Binary size={20} />
                            </div>
                            <span className="font-bold text-sm tracking-tight">Identifying Noise Types</span>
                        </div>
                        <ul className="text-xs space-y-2">
                            <li className="flex gap-2">
                                <span className="text-zinc-400 font-mono">•</span>
                                <div>
                                    <span className="font-bold text-zinc-800 dark:text-zinc-200">Uncorrelated noise:</span>
                                    <p className="text-zinc-500">Drops to zero quickly after lag 0.</p>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-rose-400 font-mono">•</span>
                                <div>
                                    <span className="font-bold text-zinc-800 dark:text-zinc-200">Pink noise:</span>
                                    <p className="text-zinc-500 italic">Persistent correlation at longer lags (Long-range dependence).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: the musical echo */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-indigo-900 to-zinc-900 text-zinc-100 border-none relative overflow-hidden group p-6">
                <div className="absolute -right-6 -top-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Mic2 size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Waves size={32} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white decoration-blue-500 underline underline-offset-8">The Musical Echo Analogy</span>
                        <p className="text-xs text-zinc-300 leading-relaxed max-w-xl">
                            Imagine singing a steady repeating note in a canyon. A listener records your voice and plays it back while you keep singing.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase">The Lag</span>
                                <p className="text-[11px] text-zinc-400 italic">They shift when the recording starts.</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-blue-400 uppercase">The Spike</span>
                                <p className="text-[11px] text-zinc-200 font-medium">When it lines up perfectly with your singing, the match spikes!</p>
                            </div>
                        </div>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] text-zinc-400">
                            <CheckCircle2 size={12} className="text-emerald-400" /> That lag reveals the exact length of the repeating loop: the <span className="text-white font-bold">period</span>.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2 overflow-hidden border border-zinc-200 dark:border-zinc-800 p-0">
                <div className="p-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2">
                    <Table size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Summary table</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Item</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Meaning</th>
                                <th className="px-3 py-2 text-left font-bold text-indigo-500">Why it matters</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Autocorrelation</td>
                                <td className="px-3 py-2">Similarity between a signal and its delayed copy</td>
                                <td className="px-3 py-2">Detects repetition and structure</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Lag</td>
                                <td className="px-3 py-2">The amount of delay (shift) applied</td>
                                <td className="px-3 py-2 italic whitespace-nowrap">Controls scale of testing</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Dot product view</td>
                                <td className="px-3 py-2">For mean-0, std-1 signals, autocorrelation ≈ dot product</td>
                                <td className="px-3 py-2">Interpretation as “overlap”</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-bold text-blue-600 dark:text-blue-400">Pitch estimation</td>
                                <td className="px-3 py-2">Spike at lag equal to period</td>
                                <td className="px-3 py-2 font-semibold text-zinc-900 dark:text-zinc-100">Precise fundamental frequency</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Noise identification</td>
                                <td className="px-3 py-2">How fast correlation drops</td>
                                <td className="px-3 py-2">Drops fast for white noise; persisted for pink</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} /> Click to zoom & see lags vs autocorrelation
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-xl overflow-hidden">
                    <ZoomableImage
                        src="/autocorr.png"
                        alt="Visualization of autocorrelation spikes at the period of a periodic signal"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
