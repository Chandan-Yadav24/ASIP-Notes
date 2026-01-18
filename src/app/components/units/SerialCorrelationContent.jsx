'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    History,
    Binary,
    Activity,
    TrendingUp,
    Zap,
    Footprints,
    Table,
    ArrowRight,
    Info
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

export function SerialCorrelationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What serial correlation means */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-zinc-900 border-l-4 border-indigo-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <History size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">1) What serial correlation means</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Serial correlation</span> (also known as discrete-time autocorrelation) measures how similar a signal is to a <span className="font-semibold italic">shifted (delayed) version of itself</span>.
                </p>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <p className="text-xs">It focuses on the relationship between a sample and a later sample:</p>
                    <ul className="mt-2 space-y-1 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            x[n] vs x[n+1] (lag = 1)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            x[n] vs x[n+k] (lag = k)
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* 2) How it is computed */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    2) How it is computed (mechanics)
                </h4>

                <div className="relative pl-6 space-y-4">
                    <div className="absolute left-[11px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800"></div>

                    {[
                        { title: "Original Signal", desc: "Take the original wave samples.", icon: <Activity size={12} /> },
                        { title: "Delayed Copy", desc: "Shift the signal by a chosen lag.", icon: <History size={12} /> },
                        { title: "Correlation", desc: "Compute rho between copies.", icon: <Zap size={12} /> }
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 z-10">
                                {step.icon}
                            </div>
                            <div className="card-sm">
                                <span className="font-bold text-[10px] uppercase text-zinc-400">{i + 1}. {step.title}</span>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card bg-zinc-900 border-none p-4 mt-2">
                    <div className="flex flex-col items-center">
                        <BlockMath math="-1 \le \rho \le +1" />
                        <div className="grid grid-cols-3 gap-8 mt-4 w-full text-center">
                            <div className="space-y-1">
                                <span className="text-rose-400 font-bold block">+1</span>
                                <span className="text-[10px] text-zinc-500 uppercase">Moves Together</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-zinc-400 font-bold block">0</span>
                                <span className="text-[10px] text-zinc-500 uppercase">No Relation</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-blue-400 font-bold block">-1</span>
                                <span className="text-[10px] text-zinc-500 uppercase">Moves Opposite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Noise Comparison */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <TrendingUp size={18} className="text-zinc-400" />
                    3) Comparison between Noise Types
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="card border-t-2 border-zinc-200">
                        <span className="font-bold text-xs uppercase text-zinc-500">Uncorrelated</span>
                        <div className="text-lg font-mono font-bold my-1 text-zinc-900 dark:text-zinc-100">≈ 0</div>
                        <p className="text-[10px] text-zinc-500 italic">Example: 0.006. Independent samples.</p>
                    </div>
                    <div className="card border-t-2 border-pink-400 ring-1 ring-pink-500/10 bg-pink-50/5">
                        <span className="font-bold text-xs uppercase text-pink-500">Pink Noise</span>
                        <div className="text-lg font-mono font-bold my-1 text-pink-600 dark:text-pink-400">≈ 0.851</div>
                        <p className="text-[10px] text-zinc-500 italic">Intermediate dependency.</p>
                    </div>
                    <div className="card border-t-2 border-emerald-400 bg-emerald-50/5">
                        <span className="font-bold text-xs uppercase text-emerald-500">Brownian</span>
                        <div className="text-lg font-mono font-bold my-1 text-emerald-600 dark:text-emerald-400">{'>'} 0.999</div>
                        <p className="text-[10px] text-zinc-500 italic">Extremely high correlation.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Significance */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    4) Why serial correlation matters
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card p-3 flex gap-3 group">
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                            <Activity size={18} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Predictability</span>
                            <p className="text-xs text-zinc-500">High correlation means neighbors are similar; current state predicts future state.</p>
                        </div>
                    </div>
                    <div className="card p-3 flex gap-3 group">
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                            <TrendingUp size={18} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Long-range dependence</span>
                            <p className="text-xs text-zinc-500">When correlation stays strong at large lags, systems have deep internal memory.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 card p-3 flex gap-3 group bg-emerald-50/10 border-emerald-500/20">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded text-emerald-600">
                            <Zap size={18} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100 uppercase">Pitch Estimation</span>
                            <p className="text-xs text-zinc-500">In periodic signals, autocorrelation is the gold standard for finding repetitions and fundamental frequency (pitch).</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="card bg-zinc-900 text-zinc-100 border-none relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Footprints size={120} />
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 mt-1">
                        <Footprints size={28} className="text-blue-400" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-lg tracking-tight text-white italic">The Walking Path Analogy</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pr-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                                    <ArrowRight size={10} /> Uncorrelated
                                </div>
                                <p className="text-xs text-zinc-500 italic">Teleporting randomly each second. Current spot tells nothing of the next.</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 font-bold text-[10px] text-emerald-400 uppercase">
                                    <ArrowRight size={10} /> Serially Correlated
                                </div>
                                <p className="text-xs text-zinc-300 leading-relaxed">
                                    Like <span className="text-emerald-400 font-semibold underline decoration-emerald-800 underline-offset-4 decoration-2">Walking</span>—your next position depends tightly on where you stand now.
                                </p>
                            </div>
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
                            <tr className="bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Signal Type</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Dependency</th>
                                <th className="px-3 py-2 text-right font-bold text-indigo-500">Lag=1 Rho</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Observation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-medium">Uncorrelated Noise</td>
                                <td className="px-3 py-2 italic">Independent samples</td>
                                <td className="px-3 py-2 text-right font-mono">~0</td>
                                <td className="px-3 py-2 text-zinc-500">Jagged, zero memory</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-medium">Pink Noise (β=1)</td>
                                <td className="px-3 py-2 italic">Some dependence</td>
                                <td className="px-3 py-2 text-right font-mono text-pink-500">~0.851</td>
                                <td className="px-3 py-2 text-zinc-500">Wandering, moderate memory</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-medium">Brownian Noise</td>
                                <td className="px-3 py-2 italic font-semibold">Strong dependence</td>
                                <td className="px-3 py-2 text-right font-mono text-emerald-500 font-bold">{'>'}0.999</td>
                                <td className="px-3 py-2 text-zinc-500">Smooth random walk</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-medium">Periodic Signal</td>
                                <td className="px-3 py-2 italic">Repeats with period</td>
                                <td className="px-3 py-2 text-right font-mono text-zinc-400">Peaks near T</td>
                                <td className="px-3 py-2 text-zinc-500 font-medium">Pitch / period detection</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} /> Click image to zoom & inspect
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-xl overflow-hidden">
                    <ZoomableImage
                        src="/serial.png"
                        alt="Visualization of serial correlation and noise dependency"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
