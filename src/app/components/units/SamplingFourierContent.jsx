'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Activity,
    Repeat,
    AlertTriangle,
    Binary,
    Maximize2,
    Info,
    Table,
    Clock,
    Waves,
    Lightbulb,
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

export function SamplingFourierContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Big Idea */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-zinc-900 border-l-4 border-indigo-500 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <Lightbulb size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">The Big Idea</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-indigo-500 uppercase">Sampling</span>
                        <p className="text-xs">Converts a <span className="italic">continuous-time</span> signal into <span className="font-bold">discrete samples</span> for computer storage.</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-emerald-500 uppercase">Fourier Transforms</span>
                        <p className="text-xs">Convert signal from time domain to <span className="font-bold">frequency domain</span> (the spectrum).</p>
                    </div>
                </div>
            </motion.div>

            {/* 1) Mathematical model of sampling */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    1) Mathematical model of sampling
                </h4>
                <div className="card space-y-3">
                    <p>Digital processing requires multiplying <InlineMath math="f(t)" /> by an <span className="text-indigo-500 font-bold uppercase tracking-tighter italic">Impulse Train</span>:</p>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 flex justify-center">
                        <BlockMath math="t = 0, \Delta T, 2\Delta T, 3\Delta T, \dots" />
                    </div>
                    <div className="p-3 bg-indigo-50/30 dark:bg-indigo-900/10 rounded border border-indigo-100 dark:border-indigo-800 text-[11px] text-indigo-800 dark:text-indigo-400 flex items-center gap-2">
                        <Info size={14} />
                        <p><span className="font-bold uppercase tracking-widest text-[10px]">What happens:</span> You "pick out" values of the signal at specific instants, creating a sequence of numbers.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Fourier transform of sampled functions */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Waves size={18} className="text-zinc-400" />
                    2) Fourier transform of sampled functions
                </h4>
                <div className="card-sm bg-zinc-950 text-zinc-100 border-none p-5 space-y-3">
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        By the <span className="text-white font-bold">Convolution Theorem</span>, the Fourier transform of a sampled signal creates an <span className="text-emerald-400 font-bold italic">infinite periodic repetition</span> of the original spectrum.
                    </p>
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                        <AlertTriangle size={18} className="text-amber-500 shrink-0" />
                        <p className="text-[11px] text-zinc-300">This periodic nature explains why sampling rate <span className="italic">directly</span> dictates frequency content stability.</p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Over-sampling vs Under-sampling */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-zinc-400" />
                    3) Sampling Rate & Aliasing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card space-y-2 border-l-4 border-emerald-500 group hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors">
                        <span className="font-bold text-xs text-emerald-600 uppercase">Over-Sampling</span>
                        <p className="text-xs">If <InlineMath math="F_s" /> is high, spectral copies are <span className="text-emerald-700 dark:text-emerald-400 font-bold">well-separated</span>. The original signal can be recovered perfectly.</p>
                    </div>
                    <div className="card space-y-2 border-l-4 border-rose-500 group hover:bg-rose-50/30 dark:hover:bg-rose-900/10 transition-colors">
                        <span className="font-bold text-xs text-rose-600 uppercase">Under-Sampling (Aliasing)</span>
                        <p className="text-xs">If <InlineMath math="F_s" /> is low, copies <span className="text-rose-700 dark:text-rose-400 font-bold">overlap</span>. Information is lost; "false" frequencies appear.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4 & 5) Resolution and Range */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Activity size={18} className="text-zinc-400" />
                    4 & 5) Record Length vs Frequency Resolution
                </h4>
                <div className="card bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-indigo-500" />
                                <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Frequency Resolution</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-black/40 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-inner">
                                <p className="text-[11px] leading-relaxed">
                                    Depends on <strong>Total Duration</strong>.
                                    <br />
                                    <span className="text-indigo-500 font-bold">Longer record</span> <InlineMath math="\rightarrow" /> finer spacing (better detail).
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-amber-500" />
                                <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Frequency Range</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-black/40 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-inner">
                                <p className="text-[11px] leading-relaxed">
                                    Depends on <strong>Sampling Interval</strong> <InlineMath math="\Delta T" />.
                                    <br />
                                    <span className="text-amber-500 font-bold">Higher rate</span> <InlineMath math="\rightarrow" /> larger representable bandwidth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Strobe Light */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-zinc-900 to-indigo-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Repeat size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Activity size={32} className="text-amber-400" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-amber-500 underline-offset-8">The Strobe Light Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Imagine observing a spinning fan in a dark room:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Fast Strobe</span>
                                <p className="text-[11px] text-zinc-300 italic">High sampling rate allows you to correctly perceive speed & direction.</p>
                            </div>
                            <div className="p-2.5 bg-amber-500/10 rounded-lg border border-amber-500/10">
                                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-1">Slow Strobe</span>
                                <p className="text-[11px] text-zinc-100">
                                    <span className="font-bold">Aliasing:</span> The fan might appear to move backward or stand still.
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
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Concept</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">What it does</th>
                                <th className="px-3 py-2 text-left font-bold text-indigo-500">Key Dependency</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Sampling</td>
                                <td className="px-3 py-2">Converts <InlineMath math="f(t)" /> to discrete samples</td>
                                <td className="px-3 py-2 font-mono italic text-indigo-500 underline decoration-indigo-200 underline-offset-2">F_s = 1/\Delta T</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">FT of Sampled Func</td>
                                <td className="px-3 py-2 whitespace-normal">Creates periodic copies of spectrum</td>
                                <td className="px-3 py-2 whitespace-nowrap italic">Copy spacing = <InlineMath math="F_s" /></td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Frequency Resolution</td>
                                <td className="px-3 py-2">Smallest frequency gap visible</td>
                                <td className="px-3 py-2 font-semibold text-emerald-600 italic">Total Record Duration</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap text-blue-600 dark:text-blue-400">Frequency Range</td>
                                <td className="px-3 py-2">Highest representable freq</td>
                                <td className="px-3 py-2 font-mono">Sampling Rate <InlineMath math="F_s" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Visualizing impulse trains and spectral duplication
                    <ArrowRight size={10} className="text-zinc-300" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/sdft.png"
                        alt="Visualization of the Sampling and Fourier Transform process: Impulse trains and periodic spectral copies."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
