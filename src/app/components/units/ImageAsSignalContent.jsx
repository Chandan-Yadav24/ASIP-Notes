'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Image as ImageIcon,
    Grid3X3,
    Box,
    Layers,
    Move,
    Mountain,
    Table,
    Info,
    Monitor,
    Activity,
    Maximize2
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
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    }
};

export function ImageAsSignalContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Introduction */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-zinc-900 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <ImageIcon size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs">Images as 2D Signals</h4>
                </div>
                <p className="leading-relaxed">
                    Conceptually, an image is a signal that varies over <span className="font-semibold text-blue-600 dark:text-blue-400">two-dimensional space</span> (not over time). Mathematically, it is modeled as:
                </p>
                <div className="flex justify-center py-2 bg-white/40 dark:bg-black/20 rounded-lg border border-white dark:border-zinc-800">
                    <BlockMath math="f(x, y)" />
                </div>
                <p className="text-xs italic text-zinc-500 text-center">where <InlineMath math="x" /> and <InlineMath math="y" /> are spatial coordinates.</p>
            </motion.div>

            {/* 1) Spatial-domain representation */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Move size={18} className="text-zinc-400" />
                    1) Spatial-domain representation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-sm space-y-2 border-t-2 border-zinc-200">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Intensity (Amplitude)</span>
                        <p className="text-xs">The value of <InlineMath math="f(x,y)" /> at a location is the <span className="font-semibold">intensity or gray level</span>.</p>
                    </div>
                    <div className="card-sm space-y-2 border-t-2 border-blue-400">
                        <span className="font-bold text-[10px] uppercase text-blue-400 italic">Digital Image</span>
                        <p className="text-xs">A discrete grid where both coordinates and intensities are finite/finite-precision.</p>
                    </div>
                </div>

                <div className="card bg-zinc-950 text-zinc-100 border-none p-5 space-y-4">
                    <span className="font-bold text-xs text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <Grid3X3 size={14} /> Matrix structure in computers
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-bold text-zinc-400">GRAYSCALE</span>
                                <span className="text-[9px] font-mono text-blue-400">2D Array</span>
                            </div>
                            <p className="text-[11px] text-zinc-500">Shape: <span className="text-zinc-200 font-mono italic">height × width</span></p>
                            <p className="text-[11px] text-zinc-500">Each entry is a <span className="text-zinc-200">pixel</span> (picture element).</p>
                        </div>
                        <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-bold text-zinc-400">COLOR (RGB)</span>
                                <span className="text-[9px] font-mono text-emerald-400">3D Array</span>
                            </div>
                            <p className="text-[11px] text-zinc-500">Shape: <span className="text-zinc-200 font-mono italic">height × width × 3</span></p>
                            <p className="text-[11px] text-zinc-500">Stores Red, Green, and Blue channel values.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Frequency-domain representation */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Monitor size={18} className="text-zinc-400" />
                    2) Frequency-domain representation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="card space-y-2">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Decomposition</span>
                        <p className="text-xs">Represent signals as sums of sines/cosines (Fourier methods).</p>
                    </div>
                    <div className="card space-y-2 bg-indigo-50/5 dark:bg-indigo-900/5 border-l-2 border-indigo-400">
                        <span className="font-bold text-[10px] uppercase text-indigo-500">The Shift</span>
                        <p className="text-xs">Fourier Transform converts <span className="font-bold underline underline-offset-4 decoration-indigo-800">Spatial</span> (pixels) to <span className="font-bold underline underline-offset-4 decoration-indigo-800">Frequency</span> (components).</p>
                    </div>
                    <div className="card space-y-2">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Vector View</span>
                        <p className="text-xs">RGB pixels are vectors: <InlineMath math="(r, g, b)" />. Higher dimensions for multispectral.</p>
                    </div>
                </div>

                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200 dark:border-zinc-700 space-y-3">
                    <span className="font-bold text-xs text-zinc-800 dark:text-zinc-300 flex items-center gap-2">
                        <Activity size={14} className="text-rose-500" /> Frequency Meanings in Images
                    </span>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm group hover:scale-[1.02] transition-transform">
                            <span className="font-bold text-[10px] text-emerald-500 uppercase italic">Low Frequencies</span>
                            <p className="text-xs mt-1">Slow intensity changes: smooth backgrounds, gradual shading.</p>
                        </div>
                        <div className="flex-1 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm group hover:scale-[1.02] transition-transform">
                            <span className="font-bold text-[10px] text-rose-500 uppercase italic">High Frequencies</span>
                            <p className="text-xs mt-1">Rapid changes: edges, fine details, and often noise.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: topographical map */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-zinc-900 to-indigo-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Mountain size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Mountain size={32} className="text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-emerald-500 underline-offset-8">The Topographic Map Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Think of an image like a landscape:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Coordinates</span>
                                <p className="text-[11px] text-zinc-300 italic"><InlineMath math="x" /> and <InlineMath math="y" /> tell you <span className="text-emerald-400">where</span> you are.</p>
                            </div>
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-1">Elevation</span>
                                <p className="text-[11px] text-zinc-200">
                                    <InlineMath math="f(x,y)" /> is like altitude, forming a landscape of light & dark.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2 overflow-hidden border border-zinc-200 dark:border-zinc-800 p-0 shadow-lg">
                <div className="p-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2">
                    <Table size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Summary table</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Representation</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">What it looks like</th>
                                <th className="px-3 py-2 text-left font-bold text-blue-500">Key Idea</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Typical Use</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Spatial Domain</td>
                                <td className="px-3 py-2 italic font-mono"><InlineMath math="f(x,y)" /> / Pixel Grid</td>
                                <td className="px-3 py-2">Intensity at each location</td>
                                <td className="px-3 py-2 italic">Viewing, direct pixel operations</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Digital Array</td>
                                <td className="px-3 py-2 font-mono">2D (Gray) or 3D (RGB)</td>
                                <td className="px-3 py-2">Pixels stored as numbers</td>
                                <td className="px-3 py-2 italic">Computation and storage</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-blue-50/5">
                                <td className="px-3 py-2 font-bold text-blue-600 dark:text-blue-500 whitespace-nowrap">Frequency Domain</td>
                                <td className="px-3 py-2">Fourier Transform</td>
                                <td className="px-3 py-2 font-semibold">Image as frequency components</td>
                                <td className="px-3 py-2 italic">Filtering, compression, analysis</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Vector per pixel</td>
                                <td className="px-3 py-2 font-mono"><InlineMath math="(r,g,b)" /> vectors</td>
                                <td className="px-3 py-2">Each pixel stores multiple values</td>
                                <td className="px-3 py-2 italic">Color/multispectral processing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-blue-500" />
                    Visualizing pixel arrays and 2D spatial functions
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/img_sig.png"
                        alt="Representation of digital images as spatial signal matrices and RGB vector arrays"
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
