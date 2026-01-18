'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    ShieldAlert,
    TrendingUp,
    Waves,
    Zap,
    Wind,
    EyeOff,
    Filter,
    Table,
    Info,
    AlertTriangle,
    CheckCircle2
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

export function EffectOfNoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-rose-500 pl-4 italic bg-rose-50 dark:bg-rose-900/10 py-3 rounded-r-xl font-medium">
                    Derivatives act like <span className="font-bold text-zinc-900 dark:text-zinc-100">high-pass filters</span>. Since noise often appears as rapid, random intensity fluctuations, gradient operators unintentionally amplify these small variations into large false edges.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">High-Pass Nature</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Noise Amplification</span>
                </div>
            </motion.div>

            {/* 1) Why Derivatives Amplify Noise */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Waves size={16} className="text-zinc-400" />
                    1) The Frequency Problem
                </h4>
                <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-8">
                    <div className="space-y-4 flex-1">
                        <div className="space-y-2">
                            <h6 className="font-bold text-xs uppercase tracking-tight">Proportional Response</h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                                A derivative operator has a frequency response proportional to <span className="font-bold text-zinc-900 dark:text-zinc-100">jω</span>. As frequency increases, the response grows linearly.
                            </p>
                        </div>
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex flex-col items-center gap-2 text-[10px]">
                            <span className="font-mono text-zinc-400 uppercase tracking-widest">Result</span>
                            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-700" />
                            <div className="w-full flex justify-between px-4">
                                <span className="text-zinc-500">Low Freq (Smooth) <span className="text-rose-500">↓ Suppressed</span></span>
                                <span className="text-zinc-900 dark:text-zinc-100 font-bold">High Freq (Noise) <span className="text-emerald-500">↑ Boosted</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Specific Effects */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <AlertTriangle size={16} className="text-amber-500" />
                    2) Specific Effects of Noise
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "Sensitivity to High Frequencies", desc: "Even small random pixel changes can produce large derivative values.", icon: Zap, color: "rose" },
                        { title: "Feature Masking", desc: "Noise peaks compete with true edge peaks, making real edges hard to distinguish.", icon: EyeOff, color: "zinc" },
                        { title: "False (Spurious) Edges", desc: "System mistakenly labels sharp noise transitions as structural edges.", icon: ShieldAlert, color: "amber" },
                        { title: "Artificially Increased Magnitude", desc: "Makes image look 'edge-heavy' even if true edges are weak.", icon: TrendingUp, color: "blue" },
                    ].map((item, i) => (
                        <div key={i} className={`p-5 bg-${item.color}-50 dark:bg-${item.color}-900/10 rounded-3xl border border-${item.color}-100 dark:border-${item.color}-800/30 space-y-2`}>
                            <div className="flex items-center gap-2">
                                <item.icon size={14} className={`text-${item.color}-500`} />
                                <h6 className={`font-bold text-[11px] text-${item.color}-700 dark:text-${item.color}-300 uppercase tracking-widest`}>{item.title}</h6>
                            </div>
                            <p className={`text-[10px] text-${item.color}-600/80 dark:text-${item.color}-400/80 leading-relaxed italic pl-6`}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3) Mitigation */}
            <motion.div variants={itemVariants} className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/30 flex items-start gap-6">
                <div className="p-3 bg-white dark:bg-emerald-950 rounded-2xl text-emerald-500 shadow-sm shrink-0">
                    <Filter size={24} />
                </div>
                <div className="space-y-2">
                    <h6 className="font-bold text-sm text-emerald-800 dark:text-emerald-200 uppercase tracking-wide">Standard Solution: Pre-Smoothing</h6>
                    <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 leading-relaxed max-w-2xl">
                        Gradient computation is almost always preceded by smoothing (typically a <span className="font-bold underline">Gaussian Blur</span>). This suppresses high-frequency random fluctuations first, allowing the derivative to respond only to meaningful structural edges.
                    </p>
                </div>
            </motion.div>


            {/* Analogy: Storm */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <Wind size={200} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h5 className="text-3xl font-bold tracking-tighter text-white italic">Path in a Storm</h5>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Signal vs Noise</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/10 text-white border border-white/10 shrink-0">
                                    <Wind size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-100">Storm-Blown Grass (Noise)</h6>
                                    <p className="text-[10px] text-zinc-400 font-mono uppercase">Local Jitter</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-300 leading-relaxed italic border-l-2 border-white/20 pl-6">
                                If you focus on every tiny movement, the storm hides the path. Random local motion overwhelms the true direction.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 shrink-0">
                                    <EyeOff size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-100">"Squinting" (Smoothing)</h6>
                                    <p className="text-[10px] text-emerald-300 font-mono uppercase">Global Structure</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-300 leading-relaxed italic border-l-2 border-emerald-500/30 pl-6">
                                You step back or squint to ignore the jitter. Smoothing blurs out the grass movement so you can reveal the <span className="text-white font-bold">real path</span> underneath.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-zinc-400" />
                    Noise Effect Summary
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Phenomenon</th>
                                <th className="p-4 font-bold">Mechanism</th>
                                <th className="p-4 font-bold">Result</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">High-Frequency Amplification</td>
                                <td className="p-4">Response proportional to ω</td>
                                <td className="p-4 text-rose-500">Noise gets boosted</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Edge Peaks Masked</td>
                                <td className="p-4">Noise peaks compete with edge peaks</td>
                                <td className="p-4 text-amber-500">Unclear edges</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">False Edges</td>
                                <td className="p-4">Noise looks like transition</td>
                                <td className="p-4 text-rose-500">Spurious detection</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400 NOT-ITALIC">Mitigation</td>
                                <td className="p-4">Gaussian Low-Pass Filter</td>
                                <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Reliable Detection</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-rose-500" />
                    Visualizing Noise Amplification
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/effectofn.png"
                        alt="Visualization demonstrating how gradient operators amplify noise and the effectiveness of pre-smoothing."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
