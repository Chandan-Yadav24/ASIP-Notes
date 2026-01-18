'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Table,
    Sun,
    Layers,
    Info,
    ArrowRight,
    Calculator,
    Cpu,
    Target,
    Activity,
    Box,
    Maximize,
    Eye,
    CheckCircle2,
    Monitor,
    Lightbulb,
    ArrowDown,
    ArrowUp,
    Minus,
    Plus
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

export function PowerLawTransformContent() {
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
                <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-50 dark:bg-amber-900/10 py-3 rounded-r-xl font-medium">
                    Power-law transformations (often called gamma transformations) are versatile mappings used to enhance images and correct device-related brightness distortions.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Spatial Domain</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Memory-less (Point-wise)</span>
                </div>
            </motion.div>

            {/* 1) Mathematical Form */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Calculator size={16} className="text-amber-500" />
                    1) Mathematical Form
                </h4>
                <div className="p-8 bg-zinc-900 text-white rounded-[2.5rem] relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                        <Calculator size={120} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-inner">
                            <BlockMath math="s = c \cdot r^\gamma" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-white/10 pt-6">
                            {[
                                { label: "r", desc: "Input Intensity", color: "text-amber-400" },
                                { label: "s", desc: "Output Intensity", color: "text-blue-400" },
                                { label: "c > 0", desc: "Scaling Constant", color: "text-zinc-400" },
                                { label: "\u03B3 > 0", desc: "Gamma Exponent", color: "text-rose-400 font-bold" }
                            ].map((item, i) => (
                                <div key={i} className="text-center space-y-1">
                                    <span className={`font-mono text-lg font-bold ${item.color}`}>{item.label}</span>
                                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Role of Gamma Exponent */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-rose-500" />
                    2) The Role of the Gamma Exponent (\u03B3)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Fractional Gamma */}
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:scale-125 transition-transform duration-500">
                            <ArrowUp size={32} />
                        </div>
                        <h6 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
                            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500"><Maximize size={14} /></span>
                            \u03B3 {'<'} 1 (Fractional)
                        </h6>
                        <ul className="space-y-2 text-[11px] text-zinc-500 italic leading-relaxed font-bold">
                            <li className="flex gap-2"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Expands dark values</li>
                            <li className="flex gap-2"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Brightens image</li>
                            <li className="flex gap-2 text-emerald-600 dark:text-emerald-400"><Info size={12} className="shrink-0 mt-0.5" /> Similar to Log Transform</li>
                        </ul>
                    </div>

                    {/* Large Gamma */}
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-4 right-4 text-rose-500/20 group-hover:scale-125 transition-transform duration-500">
                            <ArrowDown size={32} />
                        </div>
                        <h6 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
                            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500"><Monitor size={14} /></span>
                            \u03B3 {'>'} 1 (Large)
                        </h6>
                        <ul className="space-y-2 text-[11px] text-zinc-500 italic leading-relaxed font-bold">
                            <li className="flex gap-2"><CheckCircle2 size={12} className="text-rose-500 shrink-0 mt-0.5" /> Compresses dark values</li>
                            <li className="flex gap-2"><CheckCircle2 size={12} className="text-rose-500 shrink-0 mt-0.5" /> Darkens image overall</li>
                            <li className="flex gap-2 text-rose-600 dark:text-rose-400"><Info size={12} className="shrink-0 mt-0.5" /> Emphasizes highlights</li>
                        </ul>
                    </div>

                    {/* Identity Transform */}
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-inner group flex flex-col justify-center">
                        <h6 className="font-bold text-zinc-400 flex items-center gap-2 mb-2 italic">
                            Identity Transform
                        </h6>
                        <div className="text-center space-y-2">
                            <div className="p-1.5 px-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 font-mono text-xs w-fit mx-auto">
                                c=1, \u03B3=1 \u2192 s=r
                            </div>
                            <p className="text-[10px] text-zinc-400 italic">Output = Input (No change)</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Gamma Correction */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-xl">
                    <div className="shrink-0 p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 group">
                        <Monitor size={48} className="text-indigo-500 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">3) Gamma Correction (Calibration)</h4>
                        <p className="text-[11px] leading-relaxed text-zinc-500 italic">
                            Many display devices (CRT, LCD) do not respond linearly. They naturally follow a power-law response, typically with a gamma of <span className="font-bold text-zinc-900 dark:text-zinc-100 underline decoration-indigo-500/30 underline-offset-4">~2.2</span>. Empty correction makes images look too dark.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="p-4 py-2 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-500/20 font-mono text-sm">
                                <InlineMath math="s = r^{1/\gamma_{device}}" />
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 bg-white dark:bg-zinc-900 px-4 py-1.5 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700">
                                <Zap size={12} className="text-yellow-500" />
                                "Pre-correction" for Display Linearity
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) General Contrast Manipulation */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-zinc-400" />
                    4) Enhancement Strategies
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-sm bg-emerald-50/20 dark:bg-emerald-900/5 border-emerald-500/10">
                        <div className="flex items-center gap-3 mb-2 font-bold text-xs text-emerald-600 dark:text-emerald-400">
                            <Sun size={14} /> Underexposed Images
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Use <span className="font-bold">\u03B3 {'<'} 1</span> to brighten dark regions and reveal detail in washed-out shadows.
                        </p>
                    </div>
                    <div className="card-sm bg-rose-50/20 dark:bg-rose-900/5 border-rose-500/10">
                        <div className="flex items-center gap-3 mb-2 font-bold text-xs text-rose-600 dark:text-rose-400">
                            <Activity size={14} /> Washed-out Images
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Use <span className="font-bold">\u03B3 {'>'} 1</span> to darken high-intensity glare and make bright structures stand out.
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-2xl border border-indigo-200/50 dark:border-indigo-800/50 flex items-start gap-4">
                    <div className="p-2 bg-indigo-500 rounded-lg text-white">
                        <Info size={16} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300">Why Gammas win over Logs</p>
                        <p className="text-[10px] text-zinc-500 italic italic">
                            While Log transforms have a <span className="underline">fixed curve shape</span>, Power-laws offer a whole <span className="font-bold">family of curves</span>, providing precise control over contrast shaping.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Non-linear Dimmer */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute -left-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700 rotate-12">
                    <Lightbulb size={240} className="text-white" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl shrink-0">
                        <Lightbulb size={60} className="text-white animate-pulse" />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-3xl font-bold tracking-tighter text-white">The Non-linear Dimmer Switch</h5>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] italic">Mental Model for Compensation</p>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed italic max-w-xl">
                            Imagine a slider that doesn't increase light linearly. Moving it to <span className="font-bold text-white">50%</span> still leaves the room dark (low values compressed). Gamma correction is like <span className="underline decoration-white/30 underline-offset-8">recalibrating the switch</span> so physical slider positions match visual expectations.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-amber-500" />
                    Summary: Power-law Dynamics
                </h4>
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                            <tr>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">\u03B3 Value</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Dark Pixels</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Bright Pixels</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Result</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            <tr className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                <td className="p-4 font-bold text-emerald-500">\u03B3 {'<'} 1</td>
                                <td className="p-4 text-zinc-500 italic">Expanded</td>
                                <td className="p-4 text-zinc-500 italic">Compressed</td>
                                <td className="p-4 text-zinc-900 dark:text-zinc-200 font-bold italic font-mono">Brighter (+Shadow detail)</td>
                            </tr>
                            <tr className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                <td className="p-4 font-bold text-zinc-400">\u03B3 = 1</td>
                                <td className="p-4 text-zinc-400 italic">No change</td>
                                <td className="p-4 text-zinc-400 italic">No change</td>
                                <td className="p-4 text-zinc-400 italic font-mono">Identity Map</td>
                            </tr>
                            <tr className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                <td className="p-4 font-bold text-rose-500">\u03B3 {'>'} 1</td>
                                <td className="p-4 text-zinc-500 italic">Compressed</td>
                                <td className="p-4 text-zinc-500 italic">Expanded</td>
                                <td className="p-4 text-zinc-900 dark:text-zinc-200 font-bold italic font-mono">Darker (+Highlights)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-amber-500" />
                    Gamma Transform Curves: A Family of Response Curves
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/powlt.png"
                        alt="A visualization of the family of power-law transformation curves for various gamma values, showing how they manipulate brightness and contrast non-linearly."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
