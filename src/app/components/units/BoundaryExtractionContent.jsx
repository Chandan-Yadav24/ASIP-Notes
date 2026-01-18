'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Scan,
    MinusCircle,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    Activity,
    Eye,
    Fingerprint,
    Boxes,
    Maximize2
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

export function BoundaryExtractionContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Introduction */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Scan className="text-emerald-500" /> 1. Overview: Contour Extraction
                </h4>
                <p className="leading-relaxed">
                    Boundary extraction is a morphological process that identifies the <strong>outline (contour)</strong> of objects in a binary image by comparing the original shape to its slightly eroded version.
                </p>
                <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                    <p className="text-xs italic text-emerald-900 dark:text-emerald-300">
                        "The pixels that were present in the original but disappeared after erosion are exactly the boundary pixels."
                    </p>
                </div>
            </motion.div>

            {/* 2. Mechanism & Formula */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Layers className="text-emerald-500" /> 2. Process & Formula
                </h4>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center shadow-inner">
                        <BlockMath math="\beta(A) = A - (A \ominus B)" />
                        <p className="text-[10px] text-zinc-400 mt-2 font-mono">Boundary = Original - Eroded</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs">
                        <div className="flex-1 p-3 bg-white dark:bg-zinc-800 rounded-lg text-center border border-zinc-100 dark:border-zinc-700">
                            <strong className="block mb-1">Erode Original</strong>
                            <p className="text-zinc-500">Shrink object by 1 layer using SE <InlineMath math="B" />.</p>
                        </div>
                        <div className="text-emerald-500 italic font-bold tracking-tighter"><MinusCircle size={20} /></div>
                        <div className="flex-1 p-3 bg-white dark:bg-zinc-800 rounded-lg text-center border border-zinc-100 dark:border-zinc-700">
                            <strong className="block mb-1">Subtract</strong>
                            <p className="text-zinc-500">Remove interior core from original shape.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/extb.png"
                    alt="Boundary Extraction Visualization"
                    caption="Extraction of 1-pixel thick boundaries through morphological subtraction."
                />
            </motion.div>

            {/* 3. Step-by-Step Logic */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Activity className="text-emerald-500" /> 3. How it Works (3×3 SE)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                            <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-[10px] text-white">1</div>
                            Interior Decision
                        </div>
                        <p className="text-zinc-500 leading-relaxed">
                            If <InlineMath math="Original = 1" /> AND <InlineMath math="Eroded = 1" />: This is an <strong>interior</strong> pixel. Result becomes <strong>0</strong>.
                        </p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                            <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-[10px] text-white">2</div>
                            Boundary Decision
                        </div>
                        <p className="text-zinc-500 leading-relaxed">
                            If <InlineMath math="Original = 1" /> AND <InlineMath math="Eroded = 0" />: This is a <strong>boundary</strong> pixel. Result remains <strong>1</strong>.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4. Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Target className="text-emerald-500" /> 4. Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                        { title: "Shape Analysis", desc: "Extracting contours for perimeter and corner detection.", icon: <Fingerprint size={16} /> },
                        { title: "Segmentation", desc: "Isolating boundaries between touching objects.", icon: <Maximize2 size={16} /> },
                        { title: "Feature Extraction", desc: "Using outlines as descriptors for object recognition.", icon: <Scan size={16} /> }
                    ].map((app, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
                            <div className="text-emerald-500 mb-2">{app.icon}</div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 mb-1 text-xs">{app.title}</strong>
                            <p className="text-[10px] text-zinc-500 leading-tight">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-emerald-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary: Boundary Extraction</strong>
                    <p className="leading-relaxed text-xs italic">
                        The <strong>Boundary</strong> of a binary image <InlineMath math="A" /> is extracted by subtracting its eroded version from the original: <InlineMath math="A - (A \ominus B)" />. This operation isolates the outermost layer of foreground pixels, resulting in a thin contour. It is essential for shape analysis, perimeter calculation, and identifying key geometric features like corners or junctions.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default BoundaryExtractionContent;
