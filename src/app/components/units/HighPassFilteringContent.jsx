'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Activity,
    Layers,
    Combine,
    Table,
    Info,
    Pencil,
    PenTool,
    Sparkles,
    Filter,
    Maximize2,
    Code2
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

export function HighPassFilteringContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Introduction */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-rose-50/50 to-white dark:from-rose-900/10 dark:to-zinc-900 border-l-4 border-rose-400 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                        <Filter size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs text-rose-600 dark:text-rose-400">Sharpening via HPFs</h4>
                </div>
                <p className="leading-relaxed italic">
                    High-pass filters (HPFs) are used to <span className="font-bold underline decoration-rose-500/30 text-rose-600 dark:text-rose-400">sharpen images</span> by emphasizing fine details and rapid intensity changes while suppressing global, slowly-varying information.
                </p>
            </motion.div>

            {/* 1) What an HPF does */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2 text-xs">
                    <Activity size={18} className="text-zinc-400" />
                    1) Frequency Meaning in Images
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card-sm bg-zinc-50 dark:bg-zinc-900/50 space-y-2 border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Low Frequencies</span>
                        <p className="text-xs italic leading-tight">Background, gradual shading, and smooth regions.</p>
                    </div>
                    <div className="card-sm bg-rose-50/20 dark:bg-rose-500/5 space-y-2 border-rose-200 dark:border-rose-800/50">
                        <span className="text-[10px] font-bold text-rose-500 uppercase flex items-center gap-1">
                            <Zap size={12} /> High Frequencies
                        </span>
                        <p className="text-xs font-semibold leading-tight">Edges, fine detail, and often random noise.</p>
                    </div>
                </div>

                <div className="p-4 bg-zinc-950 text-white rounded-2xl space-y-3 shadow-xl">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <Combine size={14} /> HPF from LPF Relationship
                    </span>
                    <div className="flex flex-col sm:flex-row items-center justify-around py-3 gap-4 border-y border-white/5 bg-white/5 rounded-xl">
                        <div className="text-center space-y-2">
                            <span className="text-[9px] text-zinc-500 font-mono">Frequency Domain</span>
                            <BlockMath math="H_{HP}(u,v) = 1 - H_{LP}(u,v)" />
                        </div>
                        <div className="h-px sm:h-8 w-16 sm:w-px bg-white/10" />
                        <div className="text-center space-y-2">
                            <span className="text-[9px] text-zinc-500 font-mono">Spatial Domain (Kernel)</span>
                            <p className="text-[11px] italic font-serif">HPF ≈ unit impulse - Blur kernel</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-zinc-400 text-center italic">"Subtract the blur, keep the detail."</p>
                </div>
            </motion.div>

            {/* Principal sharpening techniques */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2 text-xs">
                    <PenTool size={18} className="text-zinc-400" />
                    2) Principal Sharpening Techniques
                </h4>

                <div className="space-y-4">
                    {/* Laplacian */}
                    <div className="card-sm border-l-4 border-indigo-500 space-y-2 py-4">
                        <div className="flex justify-between items-center mb-1 px-1">
                            <span className="font-bold text-[10px] text-indigo-600 uppercase tracking-tighter">A) Laplacian Sharpening</span>
                            <span className="p-1 rounded bg-indigo-50 dark:bg-zinc-800 text-[9px] font-mono">2nd-order Derivative</span>
                        </div>
                        <p className="text-xs px-1 leading-relaxed">Highlights intensity discontinuities (edges) and suppresses smooth regions. Since it's isotropic, it's rotation-invariant.</p>
                        <div className="bg-zinc-50 dark:bg-black/20 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800/50 flex justify-center mt-2 group hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                            <BlockMath math="f_{sharp} = f_{orig} + \nabla^2 f" />
                        </div>
                    </div>

                    {/* Unsharp Masking */}
                    <div className="card-sm border-l-4 border-rose-500 space-y-3 py-4">
                        <div className="flex justify-between items-center mb-1 px-1">
                            <span className="font-bold text-[10px] text-rose-600 uppercase tracking-tighter">B) Unsharp Masking & High-boost</span>
                            <span className="p-1 rounded bg-rose-50 dark:bg-zinc-800 text-[9px] font-mono italic">
                                <InlineMath math="f_{orig} + k(f_{mask})" />
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-1">
                            <div className="p-2 bg-zinc-50 dark:bg-zinc-800/40 rounded flex flex-col items-center text-center gap-1">
                                <span className="text-[9px] font-bold text-zinc-400">STEP 1</span>
                                <p className="text-[10px] leading-tight">Blur the image <br /><InlineMath math="f_{blur}" /></p>
                            </div>
                            <div className="p-2 bg-zinc-50 dark:bg-zinc-800/40 rounded flex flex-col items-center text-center gap-1">
                                <span className="text-[9px] font-bold text-zinc-400">STEP 2</span>
                                <p className="text-[10px] leading-tight font-semibold italic text-rose-500">Mask = <InlineMath math="f_{orig} - f_{blur}" /></p>
                            </div>
                            <div className="p-2 bg-zinc-50 dark:bg-zinc-800/40 rounded flex flex-col items-center text-center gap-1">
                                <span className="text-[9px] font-bold text-rose-500">STEP 3</span>
                                <p className="text-[10px] leading-tight italic">Sum: <InlineMath math="f_{sharp}=f_{orig}+k(mask)" /></p>
                            </div>
                        </div>
                        <p className="text-[10px] text-zinc-500 px-1 border-t border-zinc-100 dark:border-zinc-800 pt-2 italic">
                            <span className="font-bold uppercase text-amber-500">High-boost:</span> When <InlineMath math="k > 1" />, we amplify the detail mask even more.
                        </p>
                    </div>
                </div>

                {/* High-frequency Emphasis */}
                <div className="flex items-center gap-4 card bg-amber-50/20 dark:bg-amber-900/5 border-amber-200 dark:border-amber-800/40 p-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
                        <Maximize2 size={16} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-tight text-amber-600">High-frequency Emphasis</p>
                        <p className="text-[11px] leading-relaxed">Adds a constant offset to preserve overall brightness (DC component), preventing the "darkened" look typical of pure HPFs.</p>
                    </div>
                </div>
            </motion.div>

            {/* Practical implementation in Python */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2 text-xs">
                    <Code2 size={18} className="text-zinc-400" />
                    Practical Python Implementation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="card space-y-2 font-mono">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase font-sans">Scikit-image</span>
                        <div className="text-[10px] text-zinc-500 space-y-0.5">
                            <p>filters.laplace</p>
                            <p>filters.unsharp_mask</p>
                        </div>
                    </div>
                    <div className="card space-y-2 font-mono">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase font-sans">PIL (Pillow)</span>
                        <div className="text-[10px] text-zinc-500 space-y-0.5">
                            <p>ImageFilter.SHARPEN</p>
                            <p>ImageFilter.EDGE_ENHANCE</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 font-mono text-[10px] text-zinc-500">
                    <span className="font-bold text-zinc-400 font-sans block mb-1 uppercase tracking-tight">Manual (SciPy)</span>
                    blurred = scipy.ndimage.gaussian_filter(img, sigma=2)
                    <br />
                    sharpened = img + k * (img - blurred)
                </div>
            </motion.div>

            {/* Analogy: Tracing a pencil drawing */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-zinc-900 to-rose-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Pencil size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <Pencil size={32} className="text-rose-400" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-rose-500 underline-offset-8">The Pencil Tracing Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Imagine a faint pencil drawing that looks blurry:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Broad Shading</span>
                                <p className="text-[11px] text-zinc-300 italic">Broad regions of gray represent low-frequency background area.</p>
                            </div>
                            <div className="space-y-2 p-3 bg-rose-500/10 rounded-xl border border-rose-500/20">
                                <span className="text-[10px] font-bold text-rose-300 uppercase tracking-widest block mb-1">Dark Marker Tracing</span>
                                <p className="text-[11px] text-zinc-100 leading-relaxed">
                                    <span className="font-bold italic text-rose-400">High-pass Filtering</span> is like tracing only the edges & lines with a dark pen, making the structure <span className="text-rose-400 font-bold">"POP"</span>.
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
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Sharpening methods</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-100 dark:bg-zinc-800">
                                <th className="px-3 py-2 text-left font-bold text-zinc-500">Method</th>
                                <th className="px-3 py-2 text-left font-bold text-zinc-500 whitespace-nowrap">Main Idea</th>
                                <th className="px-3 py-2 text-left font-bold text-rose-500 uppercase tracking-widest">Typical Issue</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Ideal HPF</td>
                                <td className="px-3 py-2 italic font-mono uppercase tracking-tighter text-[9px]">1 - ILPF</td>
                                <td className="px-3 py-2 italic">Strong Ringing artifacts</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100">Laplacian</td>
                                <td className="px-3 py-2">2nd Derivative + Orig</td>
                                <td className="px-3 py-2 italic">Can significantly boost noise</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors bg-rose-50/5">
                                <td className="px-3 py-2 font-bold text-rose-600 dark:text-rose-400">Unsharp Mask</td>
                                <td className="px-3 py-2 font-semibold">Orig + k(Detail Mask)</td>
                                <td className="px-3 py-2 italic">Halos if k is too high</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <td className="px-3 py-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">High-freq Emphasis</td>
                                <td className="px-3 py-2">HPF + Constant Offset</td>
                                <td className="px-3 py-2 font-bold text-emerald-500">Preserves overall brightness</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-rose-500" />
                    Visual Comparison: Raw HPF Spectrum vs Laplacian & Unsharp Masking
                    <Sparkles size={10} className="text-zinc-300 ml-1" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/shpf.png"
                        alt="Visualization of HPF profiles and sharpening results using Laplacian and unsharp masking methods."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
