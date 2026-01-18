'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Box,
    Binary,
    Activity,
    Camera,
    Cpu,
    Monitor,
    Database,
    Terminal,
    Brain,
    Layout,
    Compass,
    Pencil,
    Ruler,
    Info,
    CheckCircle2,
    Table,
    CpuIcon,
    HardDrive
} from 'lucide-react';
import ZoomableImage from '../ZoomableImage';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
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

export function ImageToolsContent() {
    const libraries = [
        { name: "NumPy", desc: "Core for matrix data storage/manipulation (ndarrays).", color: "blue", icon: Binary },
        { name: "SciPy", desc: "Scientific computation; enhancement via ndimage.", color: "indigo", icon: Activity },
        { name: "scikit-image", desc: "Complex DIP algorithms (Feature detection, filters).", color: "emerald", icon: Layout },
        { name: "Pillow (PIL)", desc: "Standard for basic file I/O, resizing, rotation.", color: "rose", icon: Camera },
        { name: "OpenCV", desc: "Real-time, high-perf analysis and computer vision.", color: "amber", icon: Monitor },
        { name: "Matplotlib", desc: "Visualization/display of images and histograms.", color: "purple", icon: Layout },
        { name: "scikit-learn", desc: "Classical machine learning classification/clustering.", color: "orange", icon: Brain },
        { name: "SimpleITK", desc: "Domain-specific: Medical image segmentation (MRI).", color: "blue", icon: HeartIcon }
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-50 dark:bg-zinc-800/50 py-3 rounded-r-xl">
                    Python provides a rich ecosystem of libraries designed to handle every stage of the pipeline, from basic acquisition to advanced deep learning.
                </p>
            </motion.div>

            {/* 1. Core Python Libraries */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Terminal size={16} className="text-amber-500" />
                    1. Core Python Ecosystem
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {libraries.map((lib, idx) => (
                        <div key={idx} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/30 transition-all group shadow-sm hover:shadow-md">
                            <div className={`p-2 w-10 h-10 rounded-xl bg-${lib.color}-500/10 text-${lib.color}-500 mb-3 group-hover:bg-${lib.color}-500 group-hover:text-white transition-colors`}>
                                <lib.icon size={24} />
                            </div>
                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{lib.name}</h5>
                            <p className="text-[10px] text-zinc-500 leading-tight italic">{lib.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Deep Learning Frameworks */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card space-y-4 bg-indigo-50/20 dark:bg-zinc-900/40 border-indigo-500/10">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Brain size={16} className="text-indigo-500" />
                        2. Deep Learning Frameworks
                    </h4>
                    <div className="space-y-3">
                        <div className="flex gap-4 p-3 bg-white dark:bg-zinc-800 rounded-xl border border-indigo-500/20">
                            <div className="shrink-0"><CheckCircle2 size={16} className="text-indigo-500 mt-1" /></div>
                            <div>
                                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">TensorFlow & Keras</p>
                                <p className="text-[10px] text-zinc-500">Standard for training CNNs (e.g., VGG-16, ResNet).</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-3 bg-white dark:bg-zinc-800 rounded-xl border border-indigo-500/20">
                            <div className="shrink-0"><CheckCircle2 size={16} className="text-indigo-500 mt-1" /></div>
                            <div>
                                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">DeepLab & YOLO</p>
                                <p className="text-[10px] text-zinc-500">Semantic segmentation and real-time object detection.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Hardware & ENV */}
                <div className="card space-y-4 bg-emerald-50/20 dark:bg-zinc-900/40 border-emerald-500/10">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <CpuIcon size={16} className="text-emerald-500" />
                        3. Hardware & Environment
                    </h4>
                    <ul className="space-y-2 text-[11px] text-zinc-600 dark:text-zinc-400 font-mono">
                        <li className="flex items-center gap-2 group cursor-help" title="Essential for matrix acceleration">
                            <Cpu size={14} className="group-hover:text-emerald-500 transition-colors" />
                            <span>GPUs: Matrix Acceleration</span>
                        </li>
                        <li className="flex items-center gap-2 group cursor-help" title="Parallel processing units">
                            <Binary size={14} className="group-hover:text-emerald-500 transition-colors" />
                            <span>ALUs: Primitive Operations</span>
                        </li>
                        <li className="flex items-center gap-2 group cursor-help" title="Web-based IDE">
                            <Terminal size={14} className="group-hover:text-emerald-500 transition-colors" />
                            <span>Jupyter: Interactive Coding</span>
                        </li>
                        <li className="flex items-center gap-2 group cursor-help" title="Env management">
                            <Box size={14} className="group-hover:text-emerald-500 transition-colors" />
                            <span>Anaconda: Package Manager</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Analogy: Architect's Studio */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-indigo-500/5 to-transparent border-indigo-500/10 p-8 relative overflow-hidden group shadow-2xl">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                    <Compass size={200} />
                </div>
                <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                            <Layout size={24} />
                        </div>
                        <h5 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 tracking-tight">The Architect's Studio</h5>
                    </div>
                    <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed italic max-w-2xl">
                        Think of image processing tools like an architect’s studio. Every library has a specialized seat at the table:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { role: "The Desk", lib: "NumPy", desc: "Where all blueprints (data) are laid out.", icon: Table },
                            { role: "Pencils/Rulers", lib: "PIL & skimage", desc: "Used to sketch shapes and refine edges.", icon: Pencil },
                            { role: "Drafting Machine", lib: "OpenCV", desc: "For fast, complex, automated designs.", icon: Cpu },
                            { role: "Consultants", lib: "DL Frameworks", desc: "Predicting best results based on data.", icon: Brain }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:border-indigo-500/30 transition-colors">
                                <div className="p-2 h-fit rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">{item.role}</p>
                                    <p className="text-[10px] font-bold text-indigo-600">{item.lib}</p>
                                    <p className="text-[10px] text-zinc-500 italic mt-1 leading-tight">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-amber-500" />
                    The Python Image Processing Ecosystem
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/itools.png"
                        alt="A map of the image processing ecosystem in Python, highlighting libraries for storage, filter, analysis, and visualization."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

// Simple Heart Icon for Medical (SimpleITK)
function HeartIcon({ size }) {
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}
