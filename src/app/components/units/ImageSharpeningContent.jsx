'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    Activity,
    Info,
    CheckCircle2,
    Table,
    Settings,
    ShieldAlert,
    Layout,
    ArrowRight,
    Search,
    Edit3,
    Maximize,
    Minimize,
    Focus,
    Pipette,
    Grid3X3,
    Target,
    Cpu,
    Compass
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

export function ImageSharpeningContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-50 dark:bg-amber-900/10 py-3 rounded-r-xl font-medium">
                    Image sharpening enhances fine detail and makes edges/features more visible. While smoothing is like integration (reducing changes), sharpening is like differentiation (emphasizing discontinuities).
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Detail Enhancement</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Derivative Based</span>
                </div>
            </motion.div>

            {/* 1) Spatial-Domain Sharpening */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-amber-500" />
                    1) Spatial-Domain Sharpening (Derivatives)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Gradients */}
                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                                <Activity size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">First-Order (Gradients)</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            Responds strongly to the <span className="text-zinc-900 dark:text-zinc-100 font-bold">rate of change</span> in intensity.
                        </p>
                        <ul className="space-y-2 text-[10px] text-zinc-500 font-medium">
                            <li className="flex items-center gap-2"><ArrowRight size={10} className="text-blue-500" /> Roberts Cross-Gradient</li>
                            <li className="flex items-center gap-2"><ArrowRight size={10} className="text-blue-500" /> Sobel Operator</li>
                        </ul>
                    </div>

                    {/* Laplacian */}
                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                                <Focus size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Second-Order (Laplacian)</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            An <span className="text-zinc-900 dark:text-zinc-100 font-bold">isotropic</span> operator that highlights discontinuities regardless of edge direction.
                        </p>
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex justify-center">
                            <InlineMath math="g(x,y) = f(x,y) + c[\nabla^2 f(x,y)]" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Unsharp Masking */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layout size={16} className="text-zinc-400" />
                    2) Unsharp Masking & High-Boost
                </h4>
                <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "Blur Original", desc: "Reduce noise and create a smooth version (f_blur).", icon: Minimize },
                            { step: "Generate Mask", desc: "Subtract blurred version from original (f - f_blur).", icon: Search },
                            { step: "Add Back", desc: "Combine original with weighted mask for sharper edges.", icon: Maximize }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-zinc-400">Step {i + 1}</span>
                                    <item.icon size={12} className="text-amber-500" />
                                </div>
                                <h6 className="font-bold text-[11px] text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{item.step}</h6>
                                <p className="text-[10px] text-zinc-500 leading-relaxed italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="p-4 bg-zinc-900 text-white rounded-2xl border border-white/5 flex-1 w-full flex justify-center shadow-lg">
                                <InlineMath math="g = f + k(f - f_{blur})" />
                            </div>
                            <div className="flex-1 space-y-2 text-[10px] text-zinc-500 max-w-sm">
                                <p><span className="text-zinc-900 dark:text-zinc-100 font-bold">k = 1</span>: Standard Unsharp Masking</p>
                                <p><span className="text-zinc-900 dark:text-zinc-100 font-bold">k &gt; 1</span>: High-Boost Filtering (Stronger details)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Frequency Domain */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Cpu size={16} className="text-indigo-500" />
                    3) Frequency-Domain Sharpening
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Ideal HPF", desc: "Abrupt cutoff; preserves high frequencies but causes ringing.", color: "rose" },
                        { title: "Gaussian HPF", desc: "Smooth transition; preferred for natural results without artifacts.", color: "emerald" },
                        { title: "Butterworth HPF", desc: "Controllable order; balance between sharpness and artifacts.", color: "blue" }
                    ].map((card, i) => (
                        <div key={i} className="p-5 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2 group transition-all hover:scale-[1.02]">
                            <h6 className={`font-bold text-[10px] uppercase tracking-widest text-${card.color}-500`}>{card.title}</h6>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">{card.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-indigo-500 text-white">
                        <Compass size={18} />
                    </div>
                    <div className="space-y-1">
                        <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 uppercase">High-Frequency Emphasis</h6>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Standard High-Pass Filters often darken the image. <span className="text-zinc-900 dark:text-zinc-100 font-bold">HPF + Offset</span> allows sharpening while preserving the overall brightness and tonality.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Pencil Sketch */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <Edit3 size={200} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl shrink-0 group-hover:-rotate-6 transition-transform">
                        <Edit3 size={50} className="text-white" />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-3xl font-bold tracking-tighter text-white uppercase italic">The Pencil Trace</h5>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] italic">Visualizing Sharpening</p>
                        </div>
                        <p className="text-sm text-balance text-white/90 leading-relaxed italic max-w-xl">
                            Smoothing is like rubbing a pencil sketch with a <span className="text-white font-bold underline decoration-white/30 underline-offset-8">soft cloth</span>. Sharpening is using a <span className="text-white font-bold">fine dark pencil</span> to trace existing lines—it doesn’t add new content, it just makes the boundaries stand out more clearly.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Python Integration */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Settings size={16} className="text-zinc-400" />
                    4) Python Implementation Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-zinc-900 text-white shrink-0">
                            <Cpu size={18} />
                        </div>
                        <div className="space-y-2 text-[11px] text-zinc-500 leading-relaxed italic font-mono">
                            <h6 className="font-bold text-zinc-900 dark:text-zinc-100 text-xs NOT-ITALIC font-sans uppercase tracking-widest">skimage.filters</h6>
                            <p>.laplace() - Spatial sharpening</p>
                            <p>.unsharp_mask() - Controllable mask</p>
                        </div>
                    </div>
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-zinc-900 text-white shrink-0">
                            <Settings size={18} />
                        </div>
                        <div className="space-y-2 text-[11px] text-zinc-500 leading-relaxed italic font-mono">
                            <h6 className="font-bold text-zinc-900 dark:text-zinc-100 text-xs NOT-ITALIC font-sans uppercase tracking-widest">scipy.ndimage</h6>
                            <p>.gaussian_filter() - For masks</p>
                            <p>.convolve() - For custom kernels</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-amber-500" />
                    Sharpening Methods Comparison
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Domain</th>
                                <th className="p-4 font-bold">Main Idea</th>
                                <th className="p-4 font-bold">Typical Effect</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Laplacian</td>
                                <td className="p-4 uppercase text-[10px]">Spatial</td>
                                <td className="p-4">2nd Derivative</td>
                                <td className="p-4">Strong detail emphasis (isotropic)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Unsharp Masking</td>
                                <td className="p-4 uppercase text-[10px]">Spatial</td>
                                <td className="p-4">Original - Blurred</td>
                                <td className="p-4">Controllable general sharpening</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">High-Pass Filter</td>
                                <td className="p-4 uppercase text-[10px]">Frequency</td>
                                <td className="p-4">Suppress LFs, Keep HFs</td>
                                <td className="p-4">Sharpen edges, may darken image</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-amber-500" />
                    Image Sharpening: Gradient vs. Laplacian Edge Visualization
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/siid.png"
                        alt="Visualization of image sharpening comparing gradient-based edge detection and Laplacian-based isotropic detail enhancement."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
