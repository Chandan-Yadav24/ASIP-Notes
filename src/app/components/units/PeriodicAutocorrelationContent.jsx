'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Repeat,
    Activity,
    Zap,
    Target,
    Mic2,
    Table,
    Info,
    TrendingUp,
    Waves,
    RefreshCw,
    Binary
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

export function PeriodicAutocorrelationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What happens when signal is periodic */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-zinc-900 border-l-4 border-indigo-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <RefreshCw size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">1) Periodic Signals & Autocorrelation</h4>
                </div>
                <p className="leading-relaxed">
                    If a signal repeats every <InlineMath math="T_0" /> seconds or every <InlineMath math="P" /> samples, then its <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">autocorrelation also shows that repetition</span>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <Binary size={12} /> Discrete-time
                        </span>
                        <BlockMath math="x[n] = x[n+P]" />
                        <p className="text-[10px] text-zinc-500 italic px-1">Strong peaks at lags: <InlineMath math="k = 0, \pm P, \pm 2P, \dots" /></p>
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase flex items-center gap-1">
                            <Waves size={12} /> Continuous-time
                        </span>
                        <BlockMath math="x(t) = x(t+T_0)" />
                        <p className="text-[10px] text-zinc-500 italic px-1">Peaks at: <InlineMath math="\tau = 0, \pm T_0, \pm 2T_0, \dots" /></p>
                    </div>
                </div>

                <div className="p-2 bg-indigo-50/30 dark:bg-indigo-900/10 rounded border border-indigo-100 dark:border-indigo-800 text-[11px] text-indigo-800 dark:text-indigo-400 flex items-center gap-2">
                    <Info size={14} />
                    <p><span className="font-bold uppercase tracking-widest text-[10px]">Intuition:</span> Shifting by exactly one period lines the signal up with itself, creating a similarity spike.</p>
                </div>
            </motion.div>

            {/* 2) Shape and key properties */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Zap size={18} className="text-zinc-400" />
                    2) Shape and Key Properties
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="card space-y-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Maximum at zero</span>
                        <p className="text-xs">Highest at <span className="font-mono text-indigo-500 font-bold underline">lag 0</span> because the signal matches itself perfectly.</p>
                    </div>
                    <div className="card space-y-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Repeating Peaks</span>
                        <p className="text-xs">The correlation peaks repeat consistently at every <span className="italic font-semibold">multiple of the period</span>.</p>
                    </div>
                    <div className="card space-y-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Waveform Shape</span>
                        <p className="text-xs italic text-zinc-500">Sines give smooth cosines; complex waves give sharper, structured spikes.</p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Why it's useful */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Target size={18} className="text-zinc-400" />
                    3) Why it's useful (Pitch Estimation)
                </h4>

                <div className="card bg-zinc-900 border-none p-5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                        <Mic2 size={100} />
                    </div>
                    <div className="space-y-4 relative z-10">
                        <p className="text-zinc-300 text-xs">
                            Autocorrelation is a gold-standard tool for finding the period <span className="text-white font-bold underline decoration-indigo-500 underline-offset-4">even when the waveform is complex</span>.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700 space-y-3">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Discrete-time Pitch</span>
                                <div className="flex justify-center">
                                    <BlockMath math="f_0 = \frac{F_s}{P}" />
                                </div>
                                <p className="text-[10px] text-zinc-500 text-center italic">Fs = Sampling rate, P = Lag of first strong peak</p>
                            </div>
                            <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700 space-y-3">
                                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Continuous-time Pitch</span>
                                <div className="flex justify-center">
                                    <BlockMath math="f_0 = \frac{1}{T_0}" />
                                </div>
                                <p className="text-[10px] text-zinc-500 text-center italic">T0 = Primary peak delay (seconds)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/10 text-[11px] text-zinc-400">
                            <div className="p-1.5 bg-zinc-800 rounded-md text-emerald-400 border border-emerald-400/20 shadow-sm">
                                <Target size={14} />
                            </div>
                            <p>To use: compute auto-corr, <span className="font-bold text-white underline">ignore lag 0</span>, and the next strong peak is your <span className="italic font-semibold text-emerald-400">estimated period</span>.</p>
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
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Periodic Signal Type</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Period</th>
                                <th className="px-3 py-2 text-left font-bold text-indigo-500">Peaks at Lags</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Main Use</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Discrete-time x[n]</td>
                                <td className="px-3 py-2 italic font-medium text-emerald-600">P samples</td>
                                <td className="px-3 py-2 font-mono">0, ±P, ±2P, ...</td>
                                <td className="px-3 py-2 text-zinc-500">Pitch estimation <InlineMath math="f_0 = F_s/P" /></td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Continuous-time x(t)</td>
                                <td className="px-3 py-2 italic font-medium text-blue-600">T0 seconds</td>
                                <td className="px-3 py-2 font-mono">0, ±T0, ±2T0, ...</td>
                                <td className="px-3 py-2 text-zinc-500">Pitch estimation <InlineMath math="f_0 = 1/T_0" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm border border-zinc-300 dark:border-zinc-800">
                    <Info size={12} /> Inspect the periodic spikes in autocorrelation
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-2xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                    <ZoomableImage
                        src="/p_autocorr.png"
                        alt="Visualization of Autocorrelation for periodic signals showing repeating peaks at multiples of the period"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
