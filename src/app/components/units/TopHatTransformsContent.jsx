'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Sun,
    Moon,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    Activity,
    Eye,
    Sparkles,
    Focus,
    Combine,
    Highlighter
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

export function WhiteTopHatContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Basic Idea */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                        <Sun className="text-amber-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        White Top-Hat Transform
                    </h3>
                </div>
                <p className="leading-relaxed">
                    The White Top-Hat Transform is used to extract <strong>small bright details</strong> from an image by comparing the original image with its opened version.
                </p>
                <div className="p-6 bg-amber-50/50 dark:bg-amber-950/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner border border-amber-50 dark:border-amber-900/20">
                        <BlockMath math="T_w(A) = A - (A \circ B)" />
                    </div>
                    <div className="hidden md:block text-zinc-300 dark:text-zinc-700"><MoveRight size={32} /></div>
                    <div className="flex-1 space-y-2 text-xs">
                        <p className="text-amber-700 dark:text-amber-300 font-medium">Opening removes bright spots.</p>
                        <p className="text-zinc-500 leading-relaxed italic">"Original minus Opening equals only the bright bits that opening erased."</p>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/wbtp.png"
                    alt="Top-Hat Transformation Visualization"
                    caption="White and Black Top-Hat transforms extracting bright and dark peaks respectively."
                />
            </motion.div>

            {/* highlights & use cases */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Sparkles className="text-amber-500" size={18} /> What it Extracts
                    </h4>
                    <ul className="space-y-2 text-[11px] list-disc list-inside text-zinc-500">
                        <li>Small bright spots / noise</li>
                        <li>Thin bright lines / textures</li>
                        <li>Details smaller than the Structuring Element</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Target className="text-amber-500" size={18} /> Use Cases
                    </h4>
                    <ul className="space-y-2 text-[11px] list-disc list-inside text-zinc-500">
                        <li>Medical microcalcification detection</li>
                        <li>Surface defect inspection (bright specks)</li>
                        <li>Texture enhancement and normalization</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function BlackTopHatContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Basic Idea */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                        <Moon className="text-indigo-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        Black Top-Hat Transform
                    </h3>
                </div>
                <p className="leading-relaxed">
                    The Black Top-Hat Transform (or Bottom-Hat) extracts <strong>small dark details</strong> by comparing the closed version of an image with the original.
                </p>
                <div className="p-6 bg-indigo-50/50 dark:bg-indigo-950/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner border border-indigo-50 dark:border-indigo-900/20">
                        <BlockMath math="T_b(A) = (A \bullet B) - A" />
                    </div>
                    <div className="hidden md:block text-zinc-300 dark:text-zinc-700"><MoveRight size={32} /></div>
                    <div className="flex-1 space-y-2 text-xs">
                        <p className="text-indigo-700 dark:text-indigo-300 font-medium">Closing fills in dark holes.</p>
                        <p className="text-zinc-500 leading-relaxed italic">"Closed image minus Original equals only the dark gaps that closing filled."</p>
                    </div>
                </div>
            </motion.div>

            {/* highlights & use cases */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Focus className="text-indigo-500" size={18} /> What it Extracts
                    </h4>
                    <ul className="space-y-2 text-[11px] list-disc list-inside text-zinc-500">
                        <li>Small dark pits / valleys</li>
                        <li>Thin dark lines / cracks</li>
                        <li>Shadows or minima smaller than the SE</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Highlighter className="text-indigo-500" size={18} /> Use Cases
                    </h4>
                    <ul className="space-y-2 text-[11px] list-disc list-inside text-zinc-500">
                        <li>Pore detection in material science</li>
                        <li>Cracks or dark defect detection</li>
                        <li>Text isolation from darkish/noisy backgrounds</li>
                    </ul>
                </div>
            </motion.div>

            {/* Combined Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                    <Combine className="text-zinc-400" size={18} />
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Comparison Summary</h4>
                </div>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-[11px] text-left border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-900">
                            <tr>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Transformation</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800 text-center">Operation</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Primary Goal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic">
                            <tr>
                                <td className="px-4 py-3 font-medium text-amber-600">White Top-Hat</td>
                                <td className="px-4 py-3 font-mono text-center">A - (A ∘ B)</td>
                                <td className="px-4 py-3">Highlight bright spots/peaks</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium text-indigo-600">Black Top-Hat</td>
                                <td className="px-4 py-3 font-mono text-center">(A • B) - A</td>
                                <td className="px-4 py-3">Highlight dark spots/valleys</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Exam Style Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-slate-800 dark:text-slate-300 text-sm shadow-sm">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-emerald-500" />
                <p className="leading-relaxed text-xs">
                    Top-Hat transformations are powerful for <strong>background subtraction</strong> and <strong>detail enhancement</strong>. They isolate features based on their size (relative to the Structuring Element) and contrast (bright vs. dark), making them essential for non-uniform illumination correction and small feature identification.
                </p>
            </motion.div>
        </motion.div>
    );
}
