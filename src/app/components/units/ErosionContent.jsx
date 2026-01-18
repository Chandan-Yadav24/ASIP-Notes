'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Shrink,
    Zap,
    Target,
    Layers,
    Minus,
    CheckCircle2,
    Binary,
    Activity,
    Eye,
    MoveRight,
    ArrowDown,
    Scaling,
    ArrowRightLeft
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

export function ErosionContent() {
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
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eye className="text-blue-500" /> 1. Intuition: What Is Erosion?
                </h4>
                <p className="leading-relaxed">
                    Think of a white object on a black background. Erosion asks: <span className="text-blue-600 dark:text-blue-400 font-bold">"If I slide a structuring element over this object, where does it fit completely inside?"</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50/50 dark:bg-blue-950/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <strong className="block text-blue-900 dark:text-blue-300 mb-1">Fitting Rule</strong>
                        <p className="text-xs text-zinc-500">
                            Where the SE fits completely → <strong>Keep White</strong>. <br />
                            Where it overlaps background → <strong>Turn Black</strong>.
                        </p>
                    </div>
                    <div className="p-4 bg-blue-50/50 dark:bg-blue-950/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <strong className="block text-blue-900 dark:text-blue-300 mb-1">Resulting Effect</strong>
                        <p className="text-xs text-zinc-500">
                            Objects <strong>shrink/thin</strong>. Small details and thin connections disappear.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Binary Erosion */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Binary className="text-blue-500" /> 2. Binary Erosion – Mechanism
                </h4>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <p className="text-xs">
                        Let <InlineMath math="A" /> be the foreground pixels and <InlineMath math="B" /> be the structuring element (SE). We center <InlineMath math="B" /> at each pixel position <InlineMath math="z" />.
                    </p>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center shadow-inner">
                        <BlockMath math="A \ominus B = \{z \mid B_z \subseteq A\}" />
                        <p className="text-[10px] text-zinc-500 mt-2 italic">"Center pixel is 1 only if the entire SE lies inside the foreground."</p>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/erosion.png"
                    alt="Erosion Operation Visualization"
                    caption="Erosion shrinking an object using a structuring element."
                />
            </motion.div>

            {/* 3. Effects and Uses */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Visual Effect and Uses
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Zap className="text-indigo-500 mb-2" size={18} />
                        <strong className="block text-indigo-900 dark:text-indigo-300 text-xs mb-1">Noise Reduction</strong>
                        <p className="text-[11px] text-zinc-500">Wipes out small white specks (noise) smaller than the SE.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Scaling size={18} className="text-indigo-500 mb-2" />
                        <strong className="block text-indigo-900 dark:text-indigo-300 text-xs mb-1">Object Separation</strong>
                        <p className="text-[11px] text-zinc-500">Breaks narrow "bridges" between touching objects.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Target className="text-indigo-500 mb-2" size={18} />
                        <strong className="block text-indigo-900 dark:text-indigo-300 text-xs mb-1">Boundary Extraction</strong>
                        <p className="text-[11px] text-zinc-500">Leaves only the outline: <InlineMath math="Boundary(A) = A - (A \ominus B)" /></p>
                    </div>
                </div>
            </motion.div>

            {/* 4. Grayscale Erosion */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Activity className="text-blue-500" /> 4. Grayscale Erosion
                </h4>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="flex-1 space-y-3">
                        <p className="text-xs">
                            The eroded value is the <strong>minimum intensity</strong> in the neighborhood defined by the SE.
                        </p>
                        <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg text-center shadow-sm">
                            <span className="font-mono text-sm font-bold text-blue-600">Min Filter Concept</span>
                        </div>
                    </div>
                    <div className="flex-1 text-[11px] space-y-2 text-zinc-500">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span>Pushes intensities <strong>downward (darker)</strong>.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span>Thins bright regions.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span>Removes small bright peaks/spots.</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5. Duality */}
            <motion.div variants={itemVariants} className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800/30">
                <h5 className="font-bold text-blue-900 dark:text-blue-200 text-sm mb-3 flex items-center gap-2">
                    <ArrowRightLeft size={18} /> Duality with Dilation
                </h5>
                <p className="text-xs leading-relaxed text-blue-800/80 dark:text-blue-300/80 italic">
                    "Erosion and dilation are mirror images of each other with respect to complement and reflection."
                </p>
                <div className="mt-3 bg-white/60 dark:bg-zinc-900/50 p-3 rounded-lg text-center">
                    <InlineMath math="A \ominus B = ((A^c) \oplus \hat{B})^c" />
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-blue-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        <strong>Erosion</strong> shrinks objects using a structuring element <InlineMath math="B" />. In binary images, <InlineMath math="A \ominus B = \{z \mid B_z \subseteq A\}" />, meaning the SE must fit completely within the foreground. It's used for noise reduction, object separation, and boundary extraction. In grayscale, it act as a <strong>min filter</strong>, darkening the image and thinning bright regions. It is the mathematical dual of dilation.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ErosionContent;
