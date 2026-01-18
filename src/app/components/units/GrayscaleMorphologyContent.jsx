'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Sun,
    Moon,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    TrendingUp,
    TrendingDown,
    Contrast,
    Spline,
    Sparkles,
    Filter
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function GrayscaleMorphologyContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Overview */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Contrast className="text-indigo-500" /> 1. Overview: Beyond Binary
                </h4>
                <p className="leading-relaxed">
                    Grayscale morphology extends basic operations to intensity images (0–255). Instead of turning pixels on/off, it modifies their <strong>intensities</strong> based on local minimum and maximum operations over a neighborhood.
                </p>
                <div className="bg-indigo-50/50 dark:bg-indigo-950/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <TrendingDown className="text-rose-500" size={18} />
                        <span className="text-xs"><strong>Min Operations:</strong> Erosion logic applied to intensity.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                        <TrendingUp className="text-emerald-500" size={18} />
                        <span className="text-xs"><strong>Max Operations:</strong> Dilation logic applied to intensity.</span>
                    </div>
                </div>
            </motion.div>

            {/* 2. Basic Operations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Core Grayscale Operations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Erosion */}
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-rose-500 font-bold italic">
                            <TrendingDown size={18} /> Erosion (f ⊖ b)
                        </div>
                        <BlockMath math="(f \ominus b)(x,y) = \min_{(s,t) \in b} f(x+s, y+t)" />
                        <ul className="text-[10px] space-y-1 text-zinc-500">
                            <li>• Darkens bright regions</li>
                            <li>• Shrinks bright objects / peaks</li>
                            <li>• Removes small bright spots</li>
                        </ul>
                    </div>
                    {/* Dilation */}
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-500 font-bold italic">
                            <TrendingUp size={18} /> Dilation (f ⊕ b)
                        </div>
                        <BlockMath math="(f \oplus b)(x,y) = \max_{(s,t) \in b} f(x-s, y-t)" />
                        <ul className="text-[10px] space-y-1 text-zinc-500">
                            <li>• Brightens image regions</li>
                            <li>• Expands bright objects</li>
                            <li>• Fills small dark gaps / valleys</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/gyop.png"
                    alt="Grayscale Morphological Operations"
                    caption="Visual impact of min-max filtering on grayscale intensity surfaces."
                />
            </motion.div>

            {/* 3. Opening & Closing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Smoothing: Opening & Closing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 p-5 bg-amber-50/30 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                        <h5 className="font-bold text-xs flex items-center gap-2 text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                            <Sparkles size={14} /> Opening (f ∘ b)
                        </h5>
                        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg border border-amber-50">
                            <BlockMath math="f \circ b = (f \ominus b) \oplus b" />
                        </div>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                            Removes small bright details (peaks) while preserving large, smooth bright structures. Essential for <strong>noise reduction</strong>.
                        </p>
                    </div>
                    <div className="space-y-3 p-5 bg-blue-50/30 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                        <h5 className="font-bold text-xs flex items-center gap-2 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                            <Filter size={14} /> Closing (f • b)
                        </h5>
                        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg border border-blue-50">
                            <BlockMath math="f \bullet b = (f \oplus b) \ominus b" />
                        </div>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                            Fills small dark holes (valleys) and connects nearby bright regions. Critical for <strong>restoration</strong> and boundary smoothing.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4. Advanced Transformations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Advanced Transformations
                </h4>
                <div className="space-y-4">
                    {/* Gradient */}
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Activity className="text-rose-500" size={20} />
                                <h5 className="font-bold text-sm">Morphological Gradient</h5>
                            </div>
                            <div className="px-3 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-bold rounded-full uppercase tracking-widest">Edge Detection</div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center mb-4">
                            <BlockMath math="\text{Gradient}(f) = (f \oplus b) - (f \ominus b)" />
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed italic text-center">
                            Calculates the local "jump" in intensity. It emphasizes boundaries by subtracting the shrunken version from the expanded version.
                        </p>
                    </div>

                    {/* Top-Hat */}
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-amber-500" size={20} />
                                <h5 className="font-bold text-sm">Grayscale Top-Hat</h5>
                            </div>
                            <div className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-full uppercase tracking-widest">Correction</div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center mb-4">
                            <BlockMath math="\text{TopHat}(f) = f - (f \circ b)" />
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed italic text-center">
                            Isolates small bright details by subtracting the opened background. Perfect for <strong>non-uniform illumination correction</strong>.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-indigo-50/50 to-slate-50/50 dark:from-indigo-950/20 dark:to-slate-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-indigo-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Summary Table: Grayscale Morphology</strong>
                    <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800 mt-2">
                        <table className="w-full text-[10px] text-left border-collapse bg-white dark:bg-zinc-900">
                            <thead>
                                <tr className="bg-zinc-50 dark:bg-zinc-800">
                                    <th className="px-3 py-2 font-bold border-b border-zinc-100 dark:border-zinc-700">Operation</th>
                                    <th className="px-3 py-2 font-bold border-b border-zinc-100 dark:border-zinc-700">Logic</th>
                                    <th className="px-3 py-2 font-bold border-b border-zinc-100 dark:border-zinc-700">Main Use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                <tr>
                                    <td className="px-3 py-2 font-bold text-rose-500 italic">Erosion</td>
                                    <td className="px-3 py-2 font-mono">min neighborhood</td>
                                    <td className="px-3 py-2 italic text-zinc-500">Darken/Shrink bright peaks</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 font-bold text-emerald-500 italic">Dilation</td>
                                    <td className="px-3 py-2 font-mono">max neighborhood</td>
                                    <td className="px-3 py-2 italic text-zinc-500">Brighten/Expand bright peaks</td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2 font-bold text-amber-500 italic">Gradient</td>
                                    <td className="px-3 py-2 font-mono font-bold">Dilation - Erosion</td>
                                    <td className="px-3 py-2 italic text-zinc-500 text-rose-400">Edge/Contour detection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default GrayscaleMorphologyContent;
