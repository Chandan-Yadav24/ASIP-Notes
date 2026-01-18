'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Plus,
    Calculator,
    Info,
    CheckCircle2,
    Eye,
    Maximize,
    Minus,
    Activity,
    Sun,
    Database,
    Table
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

export function LogTransformContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-indigo-900/10 py-3 rounded-r-xl">
                    The log transform is a basic point-wise intensity transformation used to enhance images by strategically redistributing the dynamic range of pixel values.
                </p>
                <p className="text-xs text-zinc-500 italic">
                    It is a memory-less operation, meaning each output pixel depends only on the corresponding input pixel (not its neighbors).
                </p>
            </motion.div>

            {/* Mathematical Definition */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900 text-white rounded-3xl relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Calculator size={80} />
                    </div>
                    <h6 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Mathematical Definition</h6>
                    <BlockMath math="s = c \log(1 + r)" />
                    <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-[11px] text-zinc-400">
                        <p><span className="text-indigo-400 font-bold">r:</span> Input pixel intensity (assumed $r \geq 0$)</p>
                        <p><span className="text-indigo-400 font-bold">s:</span> Output pixel intensity</p>
                        <p><span className="text-indigo-400 font-bold">c:</span> Scaling constant to fit range (e.g., 0\u2013255)</p>
                    </div>
                </div>

                <div className="p-6 bg-indigo-50 dark:bg-zinc-900 rounded-3xl border border-indigo-100 dark:border-zinc-800 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500 text-white">
                            <Info size={16} />
                        </div>
                        <h6 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Why use $(1 + r)$?</h6>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-[11px] leading-relaxed italic">
                            <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                            <span>Digital pixel values can be exactly <span className="font-bold">0</span>.</span>
                        </li>
                        <li className="flex gap-2 text-[11px] leading-relaxed italic text-zinc-500">
                            <CheckCircle2 size={14} className="text-rose-500 shrink-0 mt-0.5" />
                            <span>$\log(0)$ is <span className="font-bold text-rose-600">undefined</span> (approaches $-\infty$).</span>
                        </li>
                        <li className="flex gap-2 text-[11px] leading-relaxed font-bold text-indigo-600 dark:text-indigo-400">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>Adding 1 ensures the log is always calculated on a positive value.</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Visual Impact */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 font-mono">
                    <Eye size={14} /> Visual Impact: The Log Curve Shape
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                                <Maximize size={18} />
                            </div>
                            <span className="font-bold text-sm">Expansion of Dark Values</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-emerald-500/30 pl-3">
                            A small range of low intensities (dark pixels) is stretched into a larger output range. Details in dark regions become more visible.
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                                <Minus size={18} />
                            </div>
                            <span className="font-bold text-sm">Compression of Bright Values</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-orange-500/30 pl-3">
                            A large range of high intensities (bright pixels) is squeezed into a smaller output range, preventing highlight saturation.
                        </p>
                    </div>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-500 italic text-center">
                    Note: This is the opposite of an inverse-log transform, which expands brights and compresses darks.
                </div>
            </motion.div>

            {/* Key Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Activity size={16} className="text-indigo-500" />
                    Key Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { title: "Fourier Spectra", desc: "Magnitude spectra can range from 0 to 10^6. Log transform makes smaller spectral details visible.", icon: Activity, color: "indigo" },
                        { title: "Low-Light", desc: "Useful when an image has faint hidden structures in large dark areas.", icon: Sun, color: "amber" },
                        { title: "Medical Scans", desc: "Highlights subtle tissue detail where structures appear in mostly dark segments.", icon: Database, color: "emerald" }
                    ].map((app, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 group hover:border-indigo-500/30 transition-all">
                            <div className={`p-2 w-fit rounded-lg bg-${app.color}-500/10 text-${app.color}-500 mb-3`}>
                                <app.icon size={16} />
                            </div>
                            <h6 className="font-bold text-[11px] mb-1">{app.title}</h6>
                            <p className="text-[10px] text-zinc-500 leading-tight italic">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy: Sunglasses */}
            <motion.div variants={itemVariants} className="p-8 bg-zinc-950 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-[30deg] transition-transform duration-1000 translate-x-1/4 -translate-y-1/4">
                    <Sun size={200} className="text-white" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] shadow-xl text-white shrink-0 group-hover:scale-105 transition-transform duration-500">
                        <Activity size={40} />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-2xl font-bold tracking-tighter text-white">Sunglasses for a Bright Sunset</h5>
                            <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">The Dynamic Range Analogy</p>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed italic max-w-lg">
                            Imagine a sunset so bright that everything else looks like a dark silhouette. The log transform act like <span className="text-white font-bold underline decoration-indigo-500 underline-offset-4">smart sunglasses</span>\u2014they reduce the glare (compress brights) while also opening up details in the shadows (expand darks).
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-2 font-mono">
                    <Table size={14} className="text-indigo-500" /> Log Transform Profile
                </h6>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[11px]">
                    <table className="w-full text-left border-collapse">
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { aspect: "Type", effect: "Point-wise (Memory-less) intensity transform" },
                                { aspect: "Formula", effect: <InlineMath math="s = c \log(1 + r)" /> },
                                { aspect: "Dark Pixels", effect: "Expanded (details become clearer)" },
                                { aspect: "Bright Pixels", effect: "Compressed (prevents saturation dominance)" },
                                { aspect: "Best Use", effect: "Spectrum visualization, dark-region enhancement" },
                                { aspect: "Implementation", effect: "Often via LUT (e.g., 256 entries for 8-bit)" },
                                { aspect: "Limitation", effect: "Fixed curve shape (Gamma gives more control)" }
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                    <td className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 w-1/4">{row.aspect}</td>
                                    <td className="p-3 text-zinc-500 italic">{row.effect}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Practical Note: LUT */}
            <motion.div variants={itemVariants} className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
                <h6 className="font-bold text-xs mb-2">Practical Implementation (LUT)</h6>
                <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                    Because log curves are computationally expensive, they are typically implemented using a <span className="font-bold text-zinc-900 dark:text-zinc-100 italic">Lookup Table (LUT)</span>. For 8-bit images, we precompute 256 entries so each pixel replacement is $O(1)$.
                </p>
            </motion.div>

            {/* Visualization */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 pt-4">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Log Transformation: Dark Range Expansion & Fourier Spectra Enhancement
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/logtrans.png"
                        alt="Visualization of the log transformation curve and its effect on enhancing dark image details while compressing bright ones."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
