'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Boxes,
    Zap,
    Target,
    Shapes,
    Scaling,
    Expand,
    Shrink,
    Layers,
    ArrowRightLeft,
    MoveRight,
    Circle,
    Square,
    Minus,
    Plus,
    Hammer,
    Table,
    CheckCircle2
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function MorphologicalProcessingOverview() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 0. Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-rose-500/10 rounded-lg">
                        <Boxes className="text-rose-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 italic">
                        Morphological Image Processing
                    </h3>
                </div>
                <p className="leading-relaxed text-base italic text-zinc-600 dark:text-zinc-400 border-l-4 border-rose-500/30 pl-4 bg-rose-50/50 dark:bg-rose-950/10 py-3 rounded-r-xl">
                    Morphological image processing is a group of non-linear operations used to analyze and manipulate images based on <strong>shape</strong>. It helps extract meaningful structures while removing irrelevant details.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                        <Target className="text-rose-500 shrink-0 mt-1" size={18} />
                        <div>
                            <strong className="block text-zinc-900 dark:text-zinc-100">Main Goal</strong>
                            <p className="text-xs">Simplify image content while preserving important shape information.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                        <Shapes className="text-rose-500 shrink-0 mt-1" size={18} />
                        <div>
                            <strong className="block text-zinc-900 dark:text-zinc-100">Mathematical Basis</strong>
                            <p className="text-xs">Set theory (pixels treated as sets of coordinates), especially for binary images.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/morip.png"
                    alt="Morphological Processing Overview"
                    caption="The foundational concepts and operations of Morphological Image Processing."
                />
            </motion.div>

            {/* 1. Structuring Element */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Target className="text-rose-500" /> 1. Core Mechanism: The Structuring Element (SE)
                </h4>
                <p className="leading-relaxed">
                    Morphology uses a <strong>structuring element (SE)</strong>—a small template or probe that slides across the image to check how it "hits" or "fits" the local neighborhood.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="space-y-2 text-center">
                        <div className="flex justify-center gap-1 mb-2">
                            <Square className="text-rose-500" size={16} /><Square className="text-rose-500" size={16} /><Square className="text-rose-500" size={16} />
                        </div>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs">Shapes</strong>
                        <p className="text-[11px] text-zinc-500">Square, Circle, Line, Cross, etc.</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <div className="flex justify-center gap-1 mb-2">
                            <Scaling className="text-rose-500" size={20} />
                        </div>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs">Size</strong>
                        <p className="text-[11px] text-zinc-500">Small for fine detail, large for global structure.</p>
                    </div>
                    <div className="space-y-2 text-center">
                        <div className="flex justify-center gap-1 mb-2">
                            <ArrowRightLeft className="text-rose-500 rotate-45" size={20} />
                        </div>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs">Orientation</strong>
                        <p className="text-[11px] text-zinc-500">Directional template for specific effects.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Basic Operations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Basic Morphological Operations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30 group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                                <Shrink size={20} />
                            </div>
                            <h5 className="font-bold text-blue-900 dark:text-blue-300 text-base">Erosion</h5>
                        </div>
                        <ul className="space-y-2 text-xs">
                            <li className="flex gap-2"><strong>Effect:</strong> Shrinks/thins foreground objects.</li>
                            <li className="flex gap-2"><strong>How:</strong> Removes pixels from boundaries.</li>
                            <li className="flex gap-2"><strong>Use:</strong> Eliminates small protrusions/noise.</li>
                        </ul>
                    </div>
                    <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-emerald-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                                <Expand size={20} />
                            </div>
                            <h5 className="font-bold text-emerald-900 dark:text-emerald-300 text-base">Dilation</h5>
                        </div>
                        <ul className="space-y-2 text-xs">
                            <li className="flex gap-2"><strong>Effect:</strong> Expands/thickens foreground objects.</li>
                            <li className="flex gap-2"><strong>How:</strong> Adds pixels to boundaries.</li>
                            <li className="flex gap-2"><strong>Use:</strong> Bridges gaps and fills holes.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 3. Combined Operations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Combined (Compound) Operations
                </h4>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Opening (Erosion → Dilation)</h5>
                            <p className="text-xs text-zinc-500 mb-3">Removes small objects and smooths contours without changing overall size.</p>
                            <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-zinc-800 p-2 rounded-lg">
                                <span className="text-blue-500 italic">Shrink</span> <MoveRight size={14} /> <span className="text-emerald-500 italic">Expand</span>
                            </div>
                        </div>
                        <div className="flex-1 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Closing (Dilation → Erosion)</h5>
                            <p className="text-xs text-zinc-500 mb-3">Fills small holes and closes narrow breaks while preserving object size.</p>
                            <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-zinc-800 p-2 rounded-lg">
                                <span className="text-emerald-500 italic">Expand</span> <MoveRight size={14} /> <span className="text-blue-500 italic">Shrink</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Advanced Tools */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Advanced Morphological Tools
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {[
                        { title: "Hit-or-Miss", desc: "Detects exact matching shapes/patterns.", icon: <CheckCircle2 size={16} /> },
                        { title: "Skeletonizing", desc: "Reduces to 1-pixel-wide medial axis.", icon: <Layers size={16} /> },
                        { title: "Top-Hat", desc: "Extracts small bright/dark details.", icon: <Zap size={16} /> },
                        { title: "Grayscale", desc: "Extends logic to pixel intensity (min/max).", icon: <Boxes size={16} /> }
                    ].map((tool, idx) => (
                        <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/50 transition-colors">
                            <div className="text-rose-500 mb-2">{tool.icon}</div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">{tool.title}</strong>
                            <p className="text-[11px] text-zinc-500 leading-tight">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogies */}
            <motion.div variants={itemVariants} className="p-8 pb-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-3xl border border-amber-100 dark:border-amber-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Hammer size={80} className="text-amber-900 dark:text-amber-100" />
                </div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100 text-lg mb-4 flex items-center gap-2">
                    <Hammer className="text-amber-600" /> Analogy: Woodworking
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
                            <strong className="text-amber-800 dark:text-amber-200 text-xs">Erosion (Sandpaper)</strong>
                        </div>
                        <p className="text-xs text-amber-700/80 dark:text-amber-400/80 italic">"Removes splinters and outer layers."</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-4 bg-amber-400 rounded-lg"></div>
                            <strong className="text-amber-800 dark:text-amber-200 text-xs">Dilation (Filler/Varnish)</strong>
                        </div>
                        <p className="text-xs text-amber-700/80 dark:text-amber-400/80 italic">"Fills cracks and thickens edges."</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Minus size={12} className="text-amber-400" /><Plus size={12} className="text-amber-400" />
                            </div>
                            <strong className="text-amber-800 dark:text-amber-200 text-xs">Opening (Sand → Varnish)</strong>
                        </div>
                        <p className="text-xs text-amber-700/80 dark:text-amber-400/80 italic">"Smooths shape, removes splinters."</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Plus size={12} className="text-amber-400" /><Minus size={12} className="text-amber-400" />
                            </div>
                            <strong className="text-amber-800 dark:text-amber-200 text-xs">Closing (Fill → Sand)</strong>
                        </div>
                        <p className="text-xs text-amber-700/80 dark:text-amber-400/80 italic">"Closes gaps and leaves solid surface."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2">
                    <Table className="text-rose-500" size={20} />
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Summary of Operations</h4>
                </div>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-900">
                            <tr>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Operation</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Conceptual Definition</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Main Effect</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Common Use</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { op: "Erosion", def: "Shrink using SE", effect: "Thins objects", use: "Remove noise, separate objects" },
                                { op: "Dilation", def: "Expand using SE", effect: "Thickens objects", use: "Bridge breaks, fill holes" },
                                { op: "Opening", def: "Erosion → Dilation", effect: "Smooths contours", use: "Clean speckle noise" },
                                { op: "Closing", def: "Dilation → Erosion", effect: "Closes gaps", use: "Connect components" },
                                { op: "Skeletonizing", def: "Medial axis reduction", effect: "1-pixel structure", use: "Shape representation" },
                                { op: "Top-Hat", def: "Diff with Open/Close", effect: "Feature extraction", use: "Enhance small details" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                                    <td className="px-4 py-3 font-bold text-zinc-900 dark:text-zinc-100">{row.op}</td>
                                    <td className="px-4 py-3 text-zinc-500">{row.def}</td>
                                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.effect}</td>
                                    <td className="px-4 py-3 text-zinc-500 italic">{row.use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default MorphologicalProcessingOverview;
