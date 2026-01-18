'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Scan,
    Cpu,
    Layers,
    Box,
    Binary,
    Activity,
    Info,
    ArrowRight,
    Monitor,
    Database,
    Search,
    Brain
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

export function ImageFundamentalsContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What an image is */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Scan size={18} className="text-zinc-400" />
                    1) The 2D Signal Model
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                        <p className="leading-relaxed">
                            An image can be modeled as a <span className="font-bold text-indigo-600 dark:text-indigo-400 italic">2D function</span>, where light intensity is mapped to spatial coordinates:
                        </p>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex justify-center shadow-inner">
                            <BlockMath math="f(x, y)" />
                        </div>
                        <ul className="space-y-2 text-xs">
                            <li className="flex gap-2">
                                <span className="font-bold text-indigo-500 font-mono">x, y:</span>
                                <span>Spatial coordinates (horizontal and vertical position).</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-indigo-500 font-mono">f(x, y):</span>
                                <span>The <span className="font-semibold italic underline decoration-indigo-500/30">intensity</span> (gray level) at that specific location.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card bg-zinc-950 text-white p-6 space-y-4 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                            <Binary size={100} />
                        </div>
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest border-l-2 border-indigo-400 pl-2">Digital Image Matrix</span>
                        <p className="text-[11px] text-zinc-400 leading-relaxed italic">
                            On a computer, this continuous function is sampled into a <span className="text-white font-bold">Matrix</span> of numerical values.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <div className="p-2 bg-white/5 rounded border border-white/10 flex flex-col items-center gap-1">
                                <span className="text-[9px] text-zinc-500">Grayscale</span>
                                <span className="text-xs font-mono font-bold">2D Array</span>
                            </div>
                            <div className="p-2 bg-white/5 rounded border border-white/10 flex flex-col items-center gap-1">
                                <span className="text-[9px] text-zinc-500">Color (RGB)</span>
                                <span className="text-xs font-mono font-bold">3D Array</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-zinc-500 text-right">"A pixel is just a number in a grid."</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Levels of processing */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Layers size={18} className="text-zinc-400" />
                    2) Three Levels of Image Processing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            level: "A) Low-Level",
                            sub: "Input: Image \u2192 Output: Image",
                            focus: "Basic Improvement",
                            examples: ["Noise Reduction", "Contrast Enhancement", "Smoothing/Sharpening"],
                            color: "blue",
                            icon: Activity
                        },
                        {
                            level: "B) Mid-Level",
                            sub: "Input: Image \u2192 Output: Attributes",
                            focus: "Feature Extraction",
                            examples: ["Edge Detection", "Contour Finding", "Object Segmentation"],
                            color: "purple",
                            icon: Search
                        },
                        {
                            level: "C) High-Level",
                            sub: "Input: Symbols \u2192 Output: Decisions",
                            focus: "Scene Understanding",
                            examples: ["Object Recognition", "Human-like Vision Tasks", "Decision Making"],
                            color: "emerald",
                            icon: Brain
                        }
                    ].map((item, idx) => (
                        <div key={idx} className={`card-sm space-y-3 border-t-4 border-${item.color}-500 hover:scale-[1.02] transition-transform`}>
                            <div className="flex justify-between items-start">
                                <span className={`font-bold text-[10px] uppercase text-${item.color}-600 tracking-tighter`}>{item.level}</span>
                                <item.icon size={16} className={`text-${item.color}-400`} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{item.focus}</p>
                                <p className="text-[10px] text-zinc-400 italic font-mono">{item.sub}</p>
                            </div>
                            <ul className="space-y-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                {item.examples.map((ex, i) => (
                                    <li key={i} className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                                        <div className={`w-1 h-1 rounded-full bg-${item.color}-400`} />
                                        {ex}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3) Typical Pipeline */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Cpu size={18} className="text-zinc-400" />
                    3) Typical Image Processing Pipeline
                </h4>
                <div className="relative pt-6 pb-2">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
                        {[
                            { icon: Scan, label: "Acquisition", color: "indigo" },
                            { icon: Database, label: "Loading", color: "blue" },
                            { icon: Activity, label: "Pre-processing", color: "rose" },
                            { icon: ScissorsIcon, label: "Segmentation", color: "amber" },
                            { icon: Search, label: "Extraction", color: "purple" },
                            { icon: Brain, label: "Interpretation", color: "emerald" }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group">
                                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-${step.color}-500/20 group-hover:border-${step.color}-500 flex items-center justify-center text-${step.color}-500 shadow-lg group-hover:shadow-${step.color}-500/10 transition-all duration-300 relative`}>
                                    <step.icon size={20} />
                                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-${step.color}-500 text-white flex items-center justify-center text-[8px] font-bold shadow-sm`}>
                                        {idx + 1}
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 text-center transition-colors uppercase tracking-tight">
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-xl border border-zinc-200 dark:border-zinc-700/50 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 text-zinc-400">
                        <Info size={16} />
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                        The pipeline represents the <span className="font-bold underline decoration-zinc-500/30 text-zinc-900 dark:text-zinc-200">journey of visual data</span>: starting from raw pixels (Acquisition) and concluding with actionable knowledge (Interpretation).
                    </p>
                </div>
            </motion.div>

            {/* Tools and Libraries (Placeholder as mentioned in topics) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-sm space-y-3 bg-blue-50/20 dark:bg-zinc-900 border-blue-500/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Box size={16} className="text-blue-500" />
                        <span className="font-bold text-[10px] text-blue-600 uppercase tracking-widest">Core Libraries</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 bg-white dark:bg-zinc-800/40 rounded border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            <p className="font-bold">OpenCV</p>
                            <p className="text-zinc-500">Real-time Vision</p>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-800/40 rounded border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            <p className="font-bold">Scikit-Image</p>
                            <p className="text-zinc-500">SciPy-based algorithms</p>
                        </div>
                    </div>
                </div>
                <div className="card-sm space-y-3 bg-emerald-50/20 dark:bg-zinc-900 border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Monitor size={16} className="text-emerald-500" />
                        <span className="font-bold text-[10px] text-emerald-600 uppercase tracking-widest">Image Types</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px]">
                        {["Binary", "Grayscale", "Indexed", "TrueColor (RGB)"].map((type, i) => (
                            <span key={i} className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold uppercase tracking-tighter">
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-indigo-500" />
                    Digital Image Fundamentals and Processing Pipeline
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/ippt.png"
                        alt="Visualization of image processing fundamentals: sampling, quantization, and the processing pipeline."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}

// Simple Scissors Icon for Segmentation (Lucide doesn't have a perfect multi-part segmentation icon)
function ScissorsIcon({ size }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
    )
}
