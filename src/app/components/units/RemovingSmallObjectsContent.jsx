'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Trash2,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    Activity,
    Eye,
    Filter,
    Binary,
    Boxes,
    Eraser
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

export function RemovingSmallObjectsContent() {
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
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Trash2 className="text-rose-500" /> 1. Overview: Cleaning Imagery
                </h4>
                <p className="leading-relaxed">
                    Removing small objects is a fundamental cleanup step. It deletes irrelevant tiny blobs—like noise, specks, or small dots—while keeping the significant foreground shapes intact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                        <Binary className="text-rose-500 shrink-0" size={18} />
                        <div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 text-xs">Binary Context</strong>
                            <p className="text-[10px] text-zinc-500">Operation usually targets connected components of "1"s (foreground) against a "0" (background).</p>
                        </div>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                        <Boxes className="text-rose-500 shrink-0" size={18} />
                        <div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 text-xs">Structuring Element</strong>
                            <p className="text-[10px] text-zinc-500">Determines the "probe" size. Anything smaller than the SE's reach can be eliminated.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Erosion Analogy */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eraser className="text-rose-500" /> 2. The Core Idea: Sandpaper Erosion
                </h4>
                <div className="p-6 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                    <p className="text-[11px] text-rose-900 dark:text-rose-200 leading-relaxed italic mb-4">
                        "Erosion is like rubbing the image with sandpaper. Large objects become slightly thinner but remain. Very small objects get worn down entirely until they disappear."
                    </p>
                    <div className="flex items-center gap-4 text-xs font-mono">
                        <div className="flex-1 bg-white/60 dark:bg-zinc-800/40 p-3 rounded-lg text-center">
                            <span className="text-zinc-400">Small Object</span> <MoveRight size={14} className="inline mx-2" /> <span className="text-rose-500 font-bold italic">Gone</span>
                        </div>
                        <div className="flex-1 bg-white/60 dark:bg-zinc-800/40 p-3 rounded-lg text-center">
                            <span className="text-zinc-400">Big Object</span> <MoveRight size={14} className="inline mx-2" /> <span className="text-emerald-500 font-bold italic">Thinner</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/rsobj.png"
                    alt="Removing Small Objects Optimization"
                    caption="Filtering out noise and small fragments using morphological constraints."
                />
            </motion.div>

            {/* 3. Approaches */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Approaches to Removal
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-3">
                            <Filter className="text-blue-500" size={18} />
                            <h5 className="font-bold text-sm">A. Size-Based Removal</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 mb-4 opacity-80 uppercase tracking-tighter font-bold">Area Opening logic</p>
                        <ul className="space-y-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-2"><strong>1.</strong> Label connected components (IDs).</li>
                            <li className="flex gap-2"><strong>2.</strong> Count pixels per component.</li>
                            <li className="flex gap-2"><strong>3.</strong> If <InlineMath math="\text{size} < \text{threshold}" /> → Set to 0.</li>
                        </ul>
                    </div>
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-3">
                            <Layers className="text-emerald-500" size={18} />
                            <h5 className="font-bold text-sm">B. Erosion-Based Masking</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 mb-4 opacity-80 uppercase tracking-tighter font-bold">Morphological logic</p>
                        <ul className="space-y-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-2"><strong>1.</strong> Erode original image (small blobs die).</li>
                            <li className="flex gap-2"><strong>2.</strong> Use eroded remnants as a "seed".</li>
                            <li className="flex gap-2"><strong>3.</strong> Reconstruct only the large objects.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 4. Why Use It? */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Target className="text-rose-500" /> 4. Applications & Use Cases
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        { title: "Speckle Noise", desc: "Removing isolated hot pixels or salt-and-pepper artifacts." },
                        { title: "Segmentation", desc: "Cleaning up fragment leaks around main object boundaries." },
                        { title: "Preprocessing", desc: "Isolating meaningful shapes before measuring area/perimeter." },
                        { title: "OCR", desc: "Eliminating tiny ink splatters that might confuse character recognition." }
                    ].map((use, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                            <strong className="block text-zinc-900 dark:text-zinc-100 text-xs mb-1">{use.title}</strong>
                            <p className="text-[10px] text-zinc-500 leading-tight">{use.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-rose-50 dark:from-slate-900 dark:to-rose-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-rose-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary</strong>
                    <p className="leading-relaxed text-xs">
                        Removing small objects cleans binary images by filtering out insignificant foreground blobs. This is achieved either through <strong>Size-Based Filtering</strong> (connected component labeling + pixel thresholding) or <strong>Morphological Opening</strong> (erosion followed by reconstruction). It is essential for noise reduction and preparing images for precise structural measurement.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default RemovingSmallObjectsContent;
