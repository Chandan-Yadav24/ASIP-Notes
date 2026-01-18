'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Scan,
    Fingerprint,
    Binary,
    Network,
    Zap,
    Cpu,
    Target,
    Waves,
    Layout,
    Table,
    Info,
    Check,
    ArrowRight,
    Search,
    Brain,
    Scissors,
    Shield,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';

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

export function AdvancedImageProcessingOverview() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-zinc-300"
        >
            {/* Header Text */}
            <motion.div variants={itemVariants} className="space-y-6">
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    Advanced image processing goes beyond low-level operations (image → image) into mid-level and high-level tasks.
                    The primary goal is to <span className="text-indigo-400 font-bold">extract attributes</span> (edges, corners, regions, objects)
                    and <span className="text-cyan-400 font-bold">interpret/understand the scene</span>.
                </p>
            </motion.div>

            {/* 1. Feature Detection & Description */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 dark:text-zinc-200 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Fingerprint size={16} className="text-indigo-500" />
                    1) Feature Detection and Description
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Target size={18} />
                            <span className="font-bold text-sm uppercase">Feature Detection</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Finding distinctive points or regions such as corners, blobs, and keypoints.
                            It answers: <span className="italic text-zinc-400 font-medium">"Where are the important parts?"</span>
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-violet-400">
                            <Zap size={18} />
                            <span className="font-bold text-sm uppercase">Feature Description</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Computing numeric descriptors that remain stable under scale, rotation, and lighting changes.
                            It answers: <span className="italic text-zinc-400 font-medium">"What do these parts look like?"</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { name: "Harris Corner", detail: "Intensity change analysis (Eigenvalues)" },
                        { name: "Blob Detectors", detail: "LoG, DoG, DoH spot detection" },
                        { name: "HOG", detail: "Gradient direction distributions" },
                        { name: "SIFT", detail: "Robust matching across viewpoints" },
                        { name: "Haar-like", detail: "Fast rectangular intensity sums" }
                    ].map((m, i) => (
                        <div key={i} className="px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-center">
                            <div className="text-[10px] font-bold text-zinc-200 uppercase">{m.name}</div>
                            <div className="text-[9px] text-zinc-500 mt-0.5">{m.detail}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. PCA */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    2) Principal Component Analysis (PCA)
                </h4>
                <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 space-y-4">
                    <p className="text-sm text-zinc-400">
                        A statistical method for <span className="text-indigo-400 font-bold underline">dimensionality reduction</span> and extracting informative patterns.
                    </p>
                    <div className="flex items-center gap-6 justify-center py-4">
                        <div className="text-center space-y-2">
                            <ImageIcon size={32} className="text-zinc-600 mx-auto" />
                            <div className="text-[10px] text-zinc-500">Raw Data</div>
                        </div>
                        <ArrowRight className="text-indigo-500/50" size={20} />
                        <div className="text-center space-y-2">
                            <Binary size={34} className="text-indigo-400 mx-auto" />
                            <div className="text-[10px] text-white font-bold">Principal Components</div>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/50">
                        <div className="text-xs text-indigo-300 font-bold mb-1">Image Processing Use-Case: Eigenfaces</div>
                        <p className="text-[11px] text-zinc-500 italic">
                            Any human face can be approximated as a linear combination of its principal components (Eigenfaces), significantly reducing storage needs for recognition systems.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Advanced Segmentation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Network size={16} className="text-indigo-500" />
                    3) Advanced Image Segmentation
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                <Search size={16} />
                                <span className="text-xs font-bold uppercase">Hough Transform</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed text-sm">
                                Detects geometric shapes (lines, circles) by mapping edge pixels into a parameter space and using a voting mechanism.
                            </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-2 text-indigo-400 mb-2">
                                <Waves size={16} />
                                <span className="text-xs font-bold uppercase">Morphological Watershed</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed text-sm">
                                Treats image like a topographic surface. boundaries form along "watershed lines" as sources flood the basins.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-2 text-violet-400 mb-2">
                                <Layout size={16} />
                                <span className="text-xs font-bold uppercase">Otsu's Method</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed text-sm">
                                Automatic global threshold selection that maximizes between-class variance (best for bimodal histograms).
                            </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center gap-2 text-rose-400 mb-2">
                                <Scissors size={16} />
                                <span className="text-xs font-bold uppercase">Snakes & GrabCut</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed text-sm">
                                Energy-minimizing iterative methods. Snakes deform curves to boundaries; GrabCut uses graph-cuts for foreground extraction.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Deep Learning */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Brain size={16} className="text-indigo-500" />
                    4) Deep Learning and CNNs
                </h4>
                <div className="relative p-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 overflow-hidden">
                    <Cpu className="absolute -right-4 -top-4 text-white/5" size={120} />
                    <p className="text-sm text-zinc-400 mb-6 relative z-10">
                        Modern advanced processing learns features automatically from raw pixels using Convolutional Neural Networks (CNNs).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-white uppercase tracking-widest">Architectures</div>
                            <ul className="text-xs space-y-1 text-zinc-500">
                                <li>• VGG-16: Simple stacked layers</li>
                                <li>• ResNet: Residual shortcut connections</li>
                                <li>• InceptionNet: Parallel multi-size filters</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-white uppercase tracking-widest">End-to-End Systems</div>
                            <ul className="text-xs space-y-1 text-zinc-500">
                                <li>• YOLO: Real-time object detection</li>
                                <li>• DeepLab: Semantic segmentation</li>
                                <li>• Neural Style Transfer: Content + Style blending</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5. Restoration Tasks */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Shield size={16} className="text-indigo-500" />
                    5) Specialized Geometric and Restoration Tasks
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Seam Carving", desc: "Content-aware resizing by removing low-energy paths." },
                        { title: "Poisson Editing", desc: "Seamless cloning and blending of objects across backgrounds." },
                        { title: "Inpainting", desc: "Automatic filling of missing or damaged image regions." }
                    ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                            <div className="text-xs font-bold text-zinc-200">{item.title}</div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">The Detective Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        If basic image processing is like adjusting <span className="text-zinc-200">brightness/contrast</span>,
                        advanced image processing is like a <span className="text-white font-bold underline decoration-indigo-500">detective</span> analyzing a scene:
                    </p>
                    <ul className="space-y-2">
                        {[
                            { label: "Landmarks", val: "Feature Detection" },
                            { label: "Patterns", val: "PCA" },
                            { label: "Separation", val: "Segmentation" },
                            { label: "Experience", val: "Deep Learning" }
                        ].map((a, i) => (
                            <li key={i} className="flex items-center gap-3 text-[11px] text-zinc-400">
                                <Check size={12} className="text-indigo-500" />
                                <span className="font-bold text-zinc-200 w-16">{a.label}</span>
                                <ArrowRight size={10} className="text-zinc-700" />
                                <span>{a.val}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Summary of Advanced Operations
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Category</th>
                                <th className="p-4 font-bold">Goal</th>
                                <th className="p-4 font-bold">Example Methods</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {[
                                { cat: "Feature Detection", goal: "Find distinctive points", methods: "Harris, LoG/DoG/DoH, HOG, SIFT, Haar" },
                                { cat: "PCA", goal: "Reduce dimensionality", methods: "Eigenfaces" },
                                { cat: "Segmentation", goal: "Split into objects/regions", methods: "Hough, Otsu, Watershed, Snakes, GrabCut" },
                                { cat: "Deep Learning", goal: "Automated feature learning", methods: "VGG, ResNet, Inception, YOLO, DeepLab" },
                                { cat: "Specialized Tasks", goal: "Resizing, restoration", methods: "Seam carving, Poisson editing, inpainting" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400">{row.cat}</td>
                                    <td className="p-4 text-zinc-300 italic">{row.goal}</td>
                                    <td className="p-4 text-zinc-500 font-mono text-[10px]">{row.methods}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Summary Image at the Very Last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/adviop.png"
                    alt="Advanced Image Processing Operations"
                />
            </motion.div>
        </motion.div>
    );
}
