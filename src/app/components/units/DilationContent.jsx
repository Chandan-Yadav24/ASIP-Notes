'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Expand,
    Zap,
    Target,
    Layers,
    Plus,
    CheckCircle2,
    Binary,
    Activity,
    Eye,
    MoveRight,
    ArrowRightLeft,
    TrendingUp,
    Grid
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

export function DilationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Intuition */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eye className="text-emerald-500" /> 1. Intuition: What Does Dilation Do?
                </h4>
                <p className="leading-relaxed">
                    While erosion shrinks, <strong>dilation expands</strong>. Visualize a structuring element (SE) sliding over the image: <span className="text-emerald-600 dark:text-emerald-400 font-bold">"If the SE touches even one white pixel, the center pixel becomes white."</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                        <TrendingUp className="text-emerald-500 mx-auto mb-2" size={20} />
                        <strong className="block text-emerald-900 dark:text-emerald-300 text-xs mb-1">Growth</strong>
                        <p className="text-[10px] text-zinc-500">Objects grow outward, thickening boundaries.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                        <Plus className="text-emerald-500 mx-auto mb-2" size={20} />
                        <strong className="block text-emerald-900 dark:text-emerald-300 text-xs mb-1">Gap Filling</strong>
                        <p className="text-[10px] text-zinc-500">Bridges thin breaks and closes small gaps.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                        <Grid className="text-emerald-500 mx-auto mb-2" size={20} />
                        <strong className="block text-emerald-900 dark:text-emerald-300 text-xs mb-1">Hole Filling</strong>
                        <p className="text-[10px] text-zinc-500">Small dark holes inside objects are filled in.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Formal Mechanism */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Binary className="text-emerald-500" /> 2. Formal Mechanism (Binary Dilation)
                </h4>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <p className="text-xs">
                        Let <InlineMath math="A" /> be the set of foreground pixels and <InlineMath math="B" /> be the structuring element. Dilation uses the reflection <InlineMath math="\hat{B}" /> of the SE:
                    </p>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center shadow-inner">
                        <BlockMath math="A \oplus B = \{z \mid (\hat{B})_z \cap A \neq \emptyset\}" />
                        <p className="text-[10px] text-zinc-500 mt-2 italic">"Center pixel <InlineMath math="z" /> becomes white if the reflected SE shifted to <InlineMath math="z" /> overlaps even one white pixel in <InlineMath math="A" />."</p>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/dila.png"
                    alt="Dilation Operation Visualization"
                    caption="Dilation expanding an object and filling gaps using a structuring element."
                />
            </motion.div>

            {/* 3. Effects and Properties */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Effects and Properties
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                        <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 text-sm">Main Effects</h5>
                        <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                <span><strong>Increases Size:</strong> Boundaries move outward by the reach of <InlineMath math="B" />.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                <span><strong>Reduces Holes:</strong> Dark holes are filled as the region expands inward.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                <span><strong>Connects Objects:</strong> Bridges narrow gaps to merge fragmented parts.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-2xl">
                        <h5 className="font-bold text-emerald-900 dark:text-emerald-200 mb-3 text-sm flex items-center gap-2">
                            <ArrowRightLeft size={16} /> Duality with Erosion
                        </h5>
                        <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed mb-4 italic">
                            Dilation of foreground is equivalent to the complement of erosion of the background.
                        </p>
                        <div className="bg-white/60 dark:bg-zinc-900/50 p-3 rounded-lg text-center">
                            <InlineMath math="A \oplus B = ((A^c \ominus \hat{B}))^c" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Applications of Dilation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <strong className="block text-emerald-600 dark:text-emerald-400 mb-1 font-bold">Thickening & Edges</strong>
                        <p className="text-zinc-500 leading-tight">Strengthens weak/broken edges and thickens thin markings like handwriting.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <strong className="block text-emerald-600 dark:text-emerald-400 mb-1 font-bold">Bridging Fragmented Parts</strong>
                        <p className="text-zinc-500 leading-tight">Connects broken characters in OCR or vessels in medical imaging.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <strong className="block text-emerald-600 dark:text-emerald-400 mb-1 font-bold">Noise Reduction</strong>
                        <p className="text-zinc-500 leading-tight">Fills small dark spots (0s) inside white objects to repair background noise.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <strong className="block text-emerald-600 dark:text-emerald-400 mb-1 font-bold">Compound Ops</strong>
                        <p className="text-zinc-500 leading-tight">The "expand" step in both <strong>Opening</strong> and <strong>Closing</strong>.</p>
                    </div>
                </div>
            </motion.div>

            {/* 5. Grayscale Dilation */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Activity className="text-emerald-500" /> 5. Grayscale Dilation
                </h4>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="flex-1 space-y-3">
                        <p className="text-xs">
                            In grayscale, the dilated value is the <strong>maximum intensity</strong> in the neighborhood.
                        </p>
                        <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg text-center shadow-sm">
                            <span className="font-mono text-sm font-bold text-emerald-600">Max Filter Concept</span>
                        </div>
                    </div>
                    <div className="flex-1 text-[11px] space-y-2 text-zinc-500">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span>Bright regions <strong>expand</strong>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span>Small dark spots are filled.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span>Used for contrast enhancement and peak emphasis.</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-emerald-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        <strong>Dilation</strong> is a fundamental morphological operation that expands foreground objects. For a binary image <InlineMath math="A" /> and SE <InlineMath math="B" />, <InlineMath math="A \oplus B = \{z \mid (\hat{B})_z \cap A \neq \emptyset\}" />. It thickens boundaries, fills holes, and bridges gaps. It is the mathematical dual of erosion. In grayscale, it acts as a <strong>max filter</strong>, expanding bright regions and filling dark valleys.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default DilationContent;
