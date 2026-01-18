'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    BarChart3,
    Database,
    Activity,
    Maximize2,
    Layers,
    Info,
    ArrowRight,
    CheckCircle2,
    Zap,
    Target,
    Layout,
    Lightbulb,
    FileText,
    ShieldAlert,
    Cpu,
    MousePointer2,
    Table,
    Calculator,
    Compass,
    Settings,
    Coins
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

export function HistogramProcessingContent() {
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
                <p className="leading-relaxed border-l-4 border-emerald-500 pl-4 italic bg-emerald-50 dark:bg-emerald-900/10 py-3 rounded-r-xl font-medium">
                    Histogram processing is a fundamental set of spatial domain techniques that change an image's appearance by manipulating how its pixel intensities are distributed.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Spatial Domain</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Statistical Analysis</span>
                </div>
            </motion.div>

            {/* 1) What is a Histogram? */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <BarChart3 size={16} className="text-emerald-500" />
                    1) The Basic Concept
                </h4>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                        <BarChart3 size={120} />
                    </div>
                    <div className="space-y-4 relative z-10">
                        <p className="leading-relaxed italic text-zinc-500 border-l-2 border-emerald-500 pl-4">
                            A histogram is a graphical representation of the distribution of pixel intensities. For a grayscale image, it shows how many pixels exist at each brightness level (usually 0 for black to 255 for white).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                { title: "Histogram Stretching", desc: "Expands the range of intensities to use the full spectrum.", icon: Activity, color: "rose" },
                                { title: "Histogram Matching", desc: "Adjusts one image's histogram to match another's for normalization.", icon: Database, color: "blue" }
                            ].map((tech, i) => (
                                <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 space-y-2 group/card">
                                    <div className={`p-1.5 rounded-lg bg-${tech.color}-500/10 text-${tech.color}-500 w-fit group-hover/card:rotate-6 transition-transform`}>
                                        <tech.icon size={14} />
                                    </div>
                                    <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{tech.title}</h6>
                                    <p className="text-[10px] text-zinc-400 leading-relaxed italic">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Thresholding Histogram Synergy */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-amber-500" />
                    2) Thresholding Histogram Processing
                </h4>
                <div className="p-8 bg-zinc-950 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                        <Target size={150} className="text-white" />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <div>
                            <h5 className="text-xl font-bold text-white tracking-tight mb-2 italic">Optimizing Segmentation</h5>
                            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed italic">
                                This refers to using the image's histogram as a primary tool to perform or optimize thresholding operations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h6 className="text-[10px] uppercase tracking-widest font-bold text-amber-500 flex items-center gap-2">
                                    <BarChart3 size={12} /> Histogram Analysis
                                </h6>
                                <div className="p-5 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm space-y-3">
                                    <p className="text-[11px] text-zinc-300 italic leading-relaxed">
                                        Histograms reveal <span className="text-white font-bold underline decoration-amber-500/30 underline-offset-4">Peaks and Valleys</span>.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-[10px] text-zinc-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                                            <span><span className="text-zinc-300 font-bold">Peaks</span>: Represent common intensities (e.g., Background vs. Objects).</span>
                                        </li>
                                        <li className="flex gap-2 text-[10px] text-zinc-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0" />
                                            <span><span className="text-zinc-300 font-bold">Valleys</span>: Suggest natural threshold points for separation.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h6 className="text-[10px] uppercase tracking-widest font-bold text-emerald-500 flex items-center gap-2">
                                    <Layout size={12} /> Standard Workflow
                                </h6>
                                <div className="space-y-2">
                                    {[
                                        "Compute Image Histogram",
                                        "Apply processing (Equalization) to clear overlap",
                                        "Select Optimal T manually or via Otsu",
                                        "Binarize to extract foreground objects"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 text-[10px] text-zinc-400 group/step">
                                            <span className="w-5 h-5 rounded-lg bg-zinc-800 flex items-center justify-center font-mono text-zinc-500 group-hover/step:bg-emerald-500 group-hover/step:text-white transition-colors">{i + 1}</span>
                                            <span className="group-hover/step:text-zinc-200 transition-colors">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Practical Use Case */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                <FileText size={20} />
                            </div>
                            <h5 className="font-bold text-sm uppercase tracking-tight">The Handwritten Note</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                            In textured scans, intensities often overlap. Histogram equalization spreads these out, allowing thresholding to "pop" the text in white against a clean black background.
                        </p>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-indigo-400 uppercase tracking-widest italic font-bold">OpenCV</span>
                        <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-emerald-400 uppercase tracking-widest italic font-bold">MATLAB</span>
                    </div>
                </div>

                <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-zinc-400">
                        <ShieldAlert size={16} className="text-rose-500" /> Key Limitations
                    </div>
                    <ul className="space-y-3 text-[11px] text-zinc-500 italic">
                        <li className="flex gap-3"><CheckCircle2 size={14} className="text-rose-500 shrink-0 mt-0.5" /> <span>Works best with clear intensity separations.</span></li>
                        <li className="flex gap-3"><CheckCircle2 size={14} className="text-rose-500 shrink-0 mt-0.5" /> <span>Heavily noisy images need advanced ML-based segmentation.</span></li>
                        <li className="flex gap-3"><CheckCircle2 size={14} className="text-rose-500 shrink-0 mt-0.5" /> <span>Over-thresholding can result in permanent loss of critical detail.</span></li>
                    </ul>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-emerald-500" />
                    Histogram Processing Overview: Analyzing Intensity Distributions
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/hstgp.png"
                        alt="High-level overview of histogram processing techniques facilitating image enhancement and segmentation."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

