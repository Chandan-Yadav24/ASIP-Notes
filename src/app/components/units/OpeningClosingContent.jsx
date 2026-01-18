'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    RotateCcw,
    Eraser,
    Brush,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    ArrowDown,
    Activity,
    Eye,
    Hammer,
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

export function OpeningContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Idea & Formula */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Brush className="text-blue-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        Opening Operation (<InlineMath math="A \circ B" />)
                    </h3>
                </div>
                <p className="leading-relaxed">
                    Opening is like a <strong>"smart eraser"</strong>. It removes small bright objects and noise while preserving the shape of larger objects.
                </p>
                <div className="p-6 bg-blue-50/50 dark:bg-blue-950/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner border border-blue-50 dark:border-blue-900/20">
                        <BlockMath math="A \circ B = (A \ominus B) \oplus B" />
                    </div>
                    <div className="hidden md:block text-blue-300"><MoveRight size={32} /></div>
                    <div className="flex-1 space-y-2 text-xs font-mono">
                        <div className="flex items-center gap-2 text-rose-500">
                            <span className="w-4 h-4 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">1</span>
                            <strong>Erosion:</strong> Shrinks objects, deletes small noise.
                        </div>
                        <div className="flex items-center gap-2 text-emerald-500">
                            <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">2</span>
                            <strong>Dilation:</strong> Grows remaining parts back to size.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/opcol.png"
                    alt="Opening and Closing Visualization"
                    caption="Opening (top) removes protrusions; Closing (bottom) fills gaps."
                />
            </motion.div>

            {/* 2. What it does */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                        <Target className="text-blue-500" size={18} /> Overall Effect
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <li>• Removes small objects/noise in the foreground.</li>
                        <li>• Eliminates thin "tails" and narrow attachments.</li>
                        <li>• Preserves larger shapes with slightly smoothed contours.</li>
                    </ul>
                </div>
                <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                        <Brush className="text-amber-600" size={18} /> Analogy: Brushing
                    </h4>
                    <p className="text-xs text-amber-800/80 dark:text-amber-300/80 italic leading-relaxed">
                        "Think of brushing dust off a block. The brush (SE) wipes away small particles (noise) but leaves the big block (main object) there."
                    </p>
                </div>
            </motion.div>

            {/* 3. When to use */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    When to Use Opening
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { title: "Noise Reduction", desc: "Remove small white specks in binary images." },
                        { title: "Object Separation", desc: "Remove thin peaks/tails between objects." },
                        { title: "Preprocessing", desc: "Clean images before measurement or segmentation." }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <strong className="block text-blue-600 dark:text-blue-400 text-xs mb-1 font-bold">{item.title}</strong>
                            <p className="text-[11px] text-zinc-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Comparison Peek */}
            <motion.div variants={itemVariants} className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-xs">
                    <ArrowRightLeft size={14} className="text-blue-500" /> Key Comparison
                </div>
                <div className="grid grid-cols-2 gap-4 text-[10px]">
                    <div>
                        <span className="text-blue-500 font-bold uppercase block mb-1 text-[9px]">Opening</span>
                        <p>Erosion → Dilation. Targets <strong>small bright noise</strong> to remove them.</p>
                    </div>
                    <div>
                        <span className="text-emerald-500 font-bold uppercase block mb-1 text-[9px]">Closing</span>
                        <p>Dilation → Erosion. Targets <strong>small dark holes</strong> to fill them.</p>
                    </div>
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-blue-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary: Opening</strong>
                    <p className="leading-relaxed text-xs italic">
                        <strong>Opening (<InlineMath math="A \circ B" />)</strong> is erosion followed by dilation. It removes small protrusions and noise while keeping larger shapes. Formula: <InlineMath math="A \circ B = (A \ominus B) \oplus B" />.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function ClosingContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Idea & Formula */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <Eraser className="text-emerald-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        Closing Operation (<InlineMath math="A \bullet B" />)
                    </h3>
                </div>
                <p className="leading-relaxed">
                    Closing is the <strong>"smart filler"</strong>. It fills small dark holes and bridges narrow gaps while preserving object size.
                </p>
                <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-inner border border-emerald-50 dark:border-emerald-900/20">
                        <BlockMath math="A \bullet B = (A \oplus B) \ominus B" />
                    </div>
                    <div className="hidden md:block text-emerald-300"><MoveRight size={32} /></div>
                    <div className="flex-1 space-y-2 text-xs font-mono">
                        <div className="flex items-center gap-2 text-emerald-500">
                            <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">1</span>
                            <strong>Dilation:</strong> Grows objects, fills holes/gaps.
                        </div>
                        <div className="flex items-center gap-2 text-rose-500">
                            <span className="w-4 h-4 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">2</span>
                            <strong>Erosion:</strong> Shrinks outer size back to original.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/opcol.png"
                    alt="Opening and Closing Visualization"
                    caption="Closing (bottom) fills gaps and internal holes."
                />
            </motion.div>

            {/* 2. What it does */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                        <Target className="text-emerald-500" size={18} /> Overall Effect
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <li>• Fills small holes in objects (dark spots in white).</li>
                        <li>• Closes narrow breaks and bridging small gaps.</li>
                        <li>• Keeps larger overall shape and size of objects.</li>
                    </ul>
                </div>
                <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                        <Hammer className="text-amber-600" size={18} /> Analogy: Putty
                    </h4>
                    <p className="text-xs text-amber-800/80 dark:text-amber-300/80 italic leading-relaxed">
                        "First, you fill cracks with putty (dilation). Then you smooth the surface (erosion) to bring it back to its neat shape."
                    </p>
                </div>
            </motion.div>

            {/* 3. When to use */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    When to Use Closing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { title: "Repair Objects", desc: "Fill small dark holes inside large foreground regions." },
                        { title: "Connect Breaks", desc: "Join fragmented objects like split lines or fonts." },
                        { title: "Smooth Boundaries", desc: "Improve segmentation by creating solid objects." }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <strong className="block text-emerald-600 dark:text-emerald-400 text-xs mb-1 font-bold">{item.title}</strong>
                            <p className="text-[11px] text-zinc-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Comparison Table (Detailed) */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-amber-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    Comparing Opening & Closing
                </h4>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg">
                    <table className="w-full text-[11px] text-left border-collapse">
                        <thead className="bg-zinc-100 dark:bg-zinc-900 font-bold text-zinc-900 dark:text-zinc-100">
                            <tr>
                                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">Feature</th>
                                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 text-blue-600 dark:text-blue-400 font-bold italic">Opening (A ○ B)</th>
                                <th className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 font-bold italic">Closing (A • B)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { f: "Sequence", o: "Erosion then Dilation", c: "Dilation then Erosion" },
                                { f: "Main Goal", o: "Remove small bright noise", c: "Fill small dark holes/gaps" },
                                { f: "Boundary Effect", o: "Smooths outer contours", c: "Smooths inner gaps" },
                                { f: "Analogy", o: "Brushing dust off", c: "Filling wall cracks" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors">
                                    <td className="px-4 py-3 font-bold bg-zinc-50/50 dark:bg-zinc-900/20">{row.f}</td>
                                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.o}</td>
                                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.c}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-emerald-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary: Closing</strong>
                    <p className="leading-relaxed text-xs italic">
                        <strong>Closing (<InlineMath math="A \bullet B" />)</strong> is dilation followed by erosion. It repairs internal holes and bridges narrow gaps. Formula: <InlineMath math="A \bullet B = (A \oplus B) \ominus B" />.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
