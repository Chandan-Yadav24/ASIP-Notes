'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Crosshair,
    Target,
    Zap,
    Layers,
    CheckCircle2,
    MoveRight,
    Search,
    Fingerprint,
    Boxes,
    ScanLine,
    Grid3X3,
    Eye
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

export function HitOrMissContent() {
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
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eye className="text-indigo-500" /> 1. Intuition: What Does Hit-or-Miss Do?
                </h4>
                <p className="leading-relaxed">
                    The Hit-or-Miss Transformation (HMT) is a <strong>pattern detector</strong>. Unlike simple erosion or dilation, it looks for an <em>exact configuration</em> of pixels by checking both the foreground and the surrounding background.
                </p>
                <div className="bg-indigo-50/50 dark:bg-indigo-950/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                    <p className="text-xs italic text-indigo-900 dark:text-indigo-300">
                        "Does this part of the image match the foreground pattern I want (<strong>hit</strong>)? And at the same time, does it match the background pattern I need around it (<strong>miss</strong>)?"
                    </p>
                </div>
            </motion.div>

            {/* 2. Formal Definition */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Fingerprint className="text-indigo-500" /> 2. Formal Definition
                </h4>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <p className="text-xs">
                        HMT uses a composite structuring element <InlineMath math="B = (C, D)" />, where <InlineMath math="C" /> is the foreground pattern and <InlineMath math="D" /> is the background pattern.
                    </p>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center shadow-inner">
                        <BlockMath math="\text{HoM}(A, B) = (A \ominus C) \cap (A^c \ominus D)" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                        <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                            <strong className="text-indigo-600 block mb-1">A ⊖ C (Hit)</strong>
                            Positions where the foreground pattern fits perfectly.
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                            <strong className="text-rose-600 block mb-1">Aᶜ ⊖ D (Miss)</strong>
                            Positions where the background pattern fits the complement of A.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/hmt.png"
                    alt="Hit-or-Miss Transformation Visualization"
                    caption="HMT detecting exact pixel configurations using dual-matching logic."
                />
            </motion.div>

            {/* 3. Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Target className="text-indigo-500" /> 3. What Is It Used For?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                        { title: "Shape Detection", desc: "Find specific shapes like corners, crosses, or disks.", icon: <Boxes size={14} /> },
                        { title: "Feature Extraction", desc: "Extract patterns as low-level features for recognition.", icon: <Fingerprint size={14} /> },
                        { title: "Line Endpoints", desc: "Detect ends of lines, junctions, or isolated pixels.", icon: <ScanLine size={14} /> },
                        { title: "Pattern Rec", desc: "Building block for complex shape recognition algorithms.", icon: <Search size={14} /> }
                    ].map((app, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500/50 transition-colors">
                            <div className="text-indigo-500 mb-2">{app.icon}</div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">{app.title}</strong>
                            <p className="text-[11px] text-zinc-500">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 4. Example Transformation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Grid3X3 className="text-indigo-500" /> 4. Step-by-Step Example
                </h4>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        <div className="space-y-4">
                            <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                                <h5 className="font-bold text-xs mb-3 text-zinc-400 uppercase tracking-wider">Input Image A</h5>
                                <div className="font-mono text-center space-y-1">
                                    <div className="flex justify-center gap-2"><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span><span className="w-8 h-8 rounded bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">1</span><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span></div>
                                    <div className="flex justify-center gap-2"><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span><span className="w-8 h-8 rounded bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">1</span><span className="w-8 h-8 rounded bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">1</span></div>
                                    <div className="flex justify-center gap-2"><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span><span className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">0</span></div>
                                </div>
                                <p className="text-[10px] text-zinc-500 mt-4 text-center">Objective: Detect a vertical line of length 2.</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                                <h5 className="font-bold text-xs mb-2 text-indigo-600 uppercase">Detection Logic</h5>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                                    "We slide a vertical template. If positions (row 1, col 2) and (row 2, col 2) are both 1, and the surrounding doesn't violate our 'miss' conditions..."
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-indigo-500 text-white shadow-xl shadow-indigo-500/20">
                                <h5 className="font-bold text-xs mb-1 uppercase opacity-80">The Result</h5>
                                <p className="text-[11px] leading-relaxed">
                                    A single "1" is output at the starting position of the detected pattern. All other pixels become "0".
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-indigo-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        The <strong>Hit-or-Miss Transformation</strong> detects specific pixel configurations by intersecting two erosions: one for the foreground pattern (hit) and one for the background complement (miss). It is formally defined as <InlineMath math="(A \ominus C) \cap (A^c \ominus D)" />. It is the primary tool for shape detection, feature extraction, and identifying critical points like endpoints or junctions in thinning algorithms.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default HitOrMissContent;
