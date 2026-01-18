'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Scissors,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    Activity,
    Eye,
    Spline,
    Share2,
    Microscope,
    GitCommit
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

export function SkeletonizationContent() {
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
                <h4 className="font-bold border-l-4 border-amber-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eye className="text-amber-500" /> 1. Intuition: The "Peeling" Process
                </h4>
                <p className="leading-relaxed">
                    Skeletonizing (or thinning) reduces thick objects to a <strong>one-pixel wide "stick-figure"</strong> representation. It captures the essential topology while discarding bulk.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-amber-50/50 dark:bg-amber-950/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                    <div className="space-y-2">
                        <h5 className="font-bold text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2">
                            <Scissors size={14} /> The Concept
                        </h5>
                        <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 leading-relaxed italic">
                            Imagine "peeling off" layers of pixels from the boundary inwards, equally from all sides. You stop only when removing another pixel would <strong>break</strong> the object or change its structure.
                        </p>
                    </div>
                    <div className="bg-white/60 dark:bg-zinc-800/40 p-4 rounded-xl border border-amber-50 dark:border-amber-900/20">
                        <ul className="space-y-2 text-[10px]">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" />
                                <span>Preserves <strong>Topology</strong> (Connectivity)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" />
                                <span>Medial Axis Representation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" />
                                <span>Minimal thickness (1-pixel wide)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/skel.png"
                    alt="Skeletonization Process"
                    caption="Thinning an object to its central axial structure while preserving connectivity."
                />
            </motion.div>

            {/* 2. Skeletonizing vs Erosion */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-amber-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Skeletonizing vs. Simple Erosion
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 group hover:border-rose-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                            <Layers className="text-rose-500" size={18} />
                            <h5 className="font-bold text-sm">Simple Erosion</h5>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Blindly shrinks objects. Can cause small objects to <strong>disappear</strong> or single objects to <strong>break apart</strong> into multiple fragments.
                        </p>
                    </div>
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 group hover:border-emerald-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                            <Activity className="text-emerald-500" size={18} />
                            <h5 className="font-bold text-sm">Skeletonization</h5>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Carefully removes boundary pixels <strong>only if</strong> they aren't critical for maintaining the object's connectivity or branch structure.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Why is it useful? */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-amber-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Why Skeletonizing is Useful
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                        <Target className="text-amber-500 mb-2" size={16} />
                        <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">Object Recognition</strong>
                        <p className="text-[11px] text-zinc-500">Encodes core structure of characters, symbols, or handwriting.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                        <Spline className="text-amber-500 mb-2" size={16} />
                        <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">Shape Analysis</strong>
                        <p className="text-[11px] text-zinc-500">Measure lengths of fibers, detect junctions, and analyze form.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                        <Microscope className="text-amber-500 mb-2" size={16} />
                        <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">Medical Imaging</strong>
                        <p className="text-[11px] text-zinc-500">Extract centerlines of blood vessels, neurons, or airways.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4. Mathematical Foundation */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-amber-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <GitCommit className="text-amber-500" /> 4. Mathematical Concept
                </h4>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <p className="text-xs leading-relaxed">
                        Skeletonization can be viewed as the union of "center parts" that remain during successive erosions:
                    </p>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center shadow-inner">
                        <BlockMath math="S(A) = \bigcup_{k=0}^K S_k(A)" />
                        <p className="text-[10px] text-zinc-500 mt-2 italic">Where <InlineMath math="S_k(A) = (A \ominus kB) - (A \ominus kB) \circ B" /> represents the pixels lost at step k.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px]">
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                            <Share2 className="text-amber-500 shrink-0" size={16} />
                            <span><strong>Iterative Erasion:</strong> Slowly shrinking the set <InlineMath math="A" />.</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-lg">
                            <Target className="text-amber-500 shrink-0" size={16} />
                            <span><strong>Residuals:</strong> Capturing points equidistant from boundaries.</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-amber-50 dark:from-slate-900 dark:to-amber-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-amber-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary: Skeletonization</strong>
                    <p className="leading-relaxed text-xs">
                        <strong>Skeletonization</strong> (Thinning) reduces objects to a 1-pixel wide axial structure while preserving their topology and connectivity. Unlike erosion, it ensures branches and junctions remain intact. It is widely used in OCR, shape analysis, and medical centerline extraction.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SkeletonizationContent;
