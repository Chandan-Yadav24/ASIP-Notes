'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Table,
    Grid3X3,
    ArrowRightLeft,
    Minus,
    Plus,
    Database,
    Palette,
    Info,
    ArrowRight,
    Calculator,
    Layers,
    Cpu,
    Target,
    Activity,
    Box,
    Maximize,
    Eye,
    CheckCircle2,
    Sun
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

export function IntensityTransformationsContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) Intro: Spatial vs Frequency Domain */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-rose-500 pl-4 italic bg-rose-50 dark:bg-rose-900/10 py-3 rounded-r-xl">
                    When we modify intensity values directly in the spatial domain (the image itself), we are performing intensity transformations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Target size={80} />
                        </div>
                        <h5 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-2">
                            <Target size={18} className="text-rose-500" />
                            Spatial Domain
                        </h5>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">
                            Operations done <span className="text-zinc-900 dark:text-zinc-200 font-bold italic underline decoration-rose-500/30">directly on pixels</span>. Simple, fast, and works pixel-by-pixel.
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Activity size={80} />
                        </div>
                        <h5 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-2">
                            <Activity size={18} className="text-indigo-500" />
                            Frequency Domain
                        </h5>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">
                            Operates on the <span className="text-zinc-900 dark:text-zinc-200 font-bold italic underline decoration-indigo-500/30">Fourier Transform</span> of the image. Best for noise removal and compression.
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-mono">
                        <Info size={12} className="text-rose-500" />
                        Why Spatial Domain?
                    </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                            <CheckCircle2 size={14} className="text-emerald-500" /> Easy to apply
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                            <CheckCircle2 size={14} className="text-emerald-500" /> Computationally cheap
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                            <CheckCircle2 size={14} className="text-emerald-500" /> Pixel-by-pixel
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Transformation Basics Formula */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Calculator size={18} className="text-zinc-400" />
                    2) Image Transformation Basics
                </h4>
                <div className="p-6 bg-zinc-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Calculator size={100} />
                    </div>
                    <div className="space-y-6 relative z-10">
                        <BlockMath math="g(x,y) = T[f(x,y)]" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-4">
                            <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-bold">In-Out Representation</p>
                                <ul className="text-xs space-y-1 text-zinc-300">
                                    <li><span className="font-bold text-rose-400 font-mono">f(x,y):</span> Input (Original)</li>
                                    <li><span className="font-bold text-indigo-400 font-mono">g(x,y):</span> Output (Processed)</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Operation Logic</p>
                                <p className="text-xs text-zinc-300 italic">
                                    At every pixel location <InlineMath math="(x,y)" />, we apply rule <span className="font-bold font-mono">T</span> to determine the new intensity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Neighborhood Concept */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Grid3X3 size={18} className="text-zinc-400" />
                    3) Neighborhood Concept & Spatial Filtering
                </h4>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                        <p className="leading-relaxed">
                            Spatial filtering uses a <span className="font-bold text-rose-600 dark:text-rose-400 italic">neighborhood</span> — a small group of pixels (e.g., 3\u00D73) around the target pixel.
                        </p>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                            <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">How It Works</h6>
                            <div className="space-y-2 text-xs">
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-md bg-rose-500 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">1</div>
                                    <p>Start from top-left, move across horizontally and vertically.</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-md bg-rose-500 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">2</div>
                                    <p>Apply rule <span className="font-bold italic">T</span> on the neighborhood window.</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-md bg-rose-500 text-white flex items-center justify-center shrink-0 font-bold text-[10px]">3</div>
                                    <p>Handle borders by <span className="font-bold underline decoration-rose-500/20">Padding</span> (adding black pixels) or ignoring edges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 flex items-center justify-center">
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl group">
                            <div className="grid grid-cols-3 gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl relative">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className={`w-8 h-8 md:w-10 md:h-10 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] uppercase font-bold transition-all duration-500 ${i === 4 ? 'bg-rose-500 text-white shadow-lg' : 'bg-white dark:bg-zinc-900 text-zinc-400'}`}>
                                        {String.fromCharCode(97 + i)}
                                    </div>
                                ))}
                                <div className="absolute inset-0 ring-2 ring-rose-500/50 rounded-xl animate-pulse -z-0" />
                            </div>
                            <span className="text-[9px] text-zinc-400 mt-2 block text-center font-bold italic">3\u00D73 Neighborhood (Kernel)</span>
                        </div>
                    </div>
                </div>
                <div className="card space-y-3 bg-indigo-50/20 dark:bg-indigo-900/5 border-indigo-500/20">
                    <h6 className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} /> Purpose of Filtering
                    </h6>
                    <div className="flex flex-wrap gap-2 text-[10px]">
                        {["Smoothing", "Sharpening", "Edge Detection", "Noise Removal"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm font-bold text-zinc-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 4) Point Processing Mathematical View */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Maximize size={18} className="text-zinc-400" />
                    4) Point Processing: Mathematical View
                </h4>
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        If the neighborhood size is <span className="font-bold underline">1\u00D71</span> (single pixel), the transformation only depends on the intensity value <InlineMath math="r" />.
                    </p>
                    <div className="p-6 py-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-inner flex flex-col items-center gap-6 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-8 bg-white dark:bg-zinc-800 rounded-full shadow-2xl border-4 border-rose-500/10 flex items-center justify-center relative ring-1 ring-zinc-200 dark:ring-zinc-700"
                        >
                            <div className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
                                <InlineMath math="s = T(r)" />
                            </div>
                        </motion.div>
                        <div className="flex flex-wrap items-center justify-center gap-10">
                            <div className="text-center group/item transition-transform hover:-translate-y-1">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-2">Input Intensity</span>
                                <div className="p-2 px-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 font-mono text-xl shadow-sm text-rose-500 group-hover/item:shadow-lg transition-all">
                                    <InlineMath math="r" />
                                </div>
                            </div>
                            <div className="text-center group/item transition-transform hover:-translate-y-1">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-2">Output Intensity</span>
                                <div className="p-2 px-6 bg-indigo-500 text-white rounded-2xl shadow-xl shadow-indigo-500/20 font-mono text-xl group-hover/item:scale-110 transition-all">
                                    <InlineMath math="s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5) Table: Common Intensity Transformations */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-rose-500" />
                    Quick Reference: Intensity Functions
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                            <tr>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Function Type</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Mathematical Model</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Visual Effect</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { type: "Negative", formula: "s = L - 1 - r", effect: "Inverts brightness" },
                                { type: "Logarithmic", formula: "s = c \\cdot \\log(1 + r)", effect: "Expands dark regions" },
                                { type: "Gamma", formula: "s = c \\cdot r^\\gamma", effect: "Non-linear contrast" },
                                { type: "Thresholding", formula: "s = \\begin{cases} 0 & r < T \\\\ 1 & r \\geq T \\end{cases}", effect: "Binary (B/W)" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group">
                                    <td className="p-4 font-bold text-rose-500 border-r border-zinc-100 dark:border-zinc-800">{row.type}</td>
                                    <td className="p-4 font-mono text-zinc-800 dark:text-zinc-200"><InlineMath math={row.formula} /></td>
                                    <td className="p-4 text-zinc-500 italic p group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{row.effect}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Implementation using LUTs */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Calculator size={18} className="text-zinc-400" />
                    Look-Up Tables (LUTs): Efficiency
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-sm bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <Table size={20} className="text-indigo-500" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-xs uppercase tracking-tight">Precompute Once</p>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">The values of T(r) are computed for all 256 intensities (for 8-bit) and stored in memory.</p>
                        </div>
                    </div>
                    <div className="card-sm bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <Zap size={20} className="text-rose-500" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-xs uppercase tracking-tight">Apply Instantly $O(1)$</p>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">Each pixel's intensity acts as an <span className="font-bold underline">index</span> into the table, saving CPU cycles.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Color-by-numbers grid */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-rose-500/10 to-transparent dark:from-rose-500/5 dark:to-transparent border-none ring-1 ring-rose-500/20 p-8 relative overflow-hidden group">

                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 transition-transform duration-700 rotate-12">
                    <Palette size={150} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                    <div className="p-4 bg-rose-500 rounded-3xl shadow-xl shadow-rose-500/20 text-white shrink-0 group-hover:bg-rose-600 transition-colors">
                        <Palette size={40} />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="font-bold text-2xl tracking-tight text-zinc-900 dark:text-zinc-100 italic underline decoration-rose-500 underline-offset-8 decoration-2">The Color-by-Numbers Rule</h5>
                            <p className="text-sm text-rose-600 dark:text-rose-400 font-bold uppercase tracking-widest text-[10px] mt-2">Point Processing Analogy</p>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl italic">
                            Imagine a grid of numbers where you follow a single rule: <span className="font-bold italic text-zinc-900 dark:text-zinc-100">"Every box labeled 5 becomes 8."</span> This is Point Processing at its core.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-rose-500/10">
                            <div className="flex items-start gap-3">
                                <Box size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                <p className="text-[11px]"><span className="font-bold">Independance:</span> Result only depends on the current box's value.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Box size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                <p className="text-[11px]"><span className="font-bold">Global State:</span> Modifying every box transforms the entire artistic output.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-rose-500" />
                    Conceptual Overview: Domains and Filtering Processes
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/intfb.png"
                        alt="Visualization of Spatial Domain vs Frequency Domain operations and the neighborhood-based spatial filtering process."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
