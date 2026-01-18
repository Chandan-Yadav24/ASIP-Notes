'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Maximize,
    Zap,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Wind,
    Eye,
    MousePointer2,
    Network,
    Cpu,
    Brain,
    Grid,
    Target,
    Users,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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

export function AdvancedSegmentationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-rose-500 pl-4 italic bg-rose-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Advanced Segmentation</span>
                    Moves beyond simple pixel-level operations into mid-level and high-level scene understanding. The goal is to isolate meaningful objects or regions for deep semantic analysis by integrating geometric, probabilistic, and deep learning models.
                </p>
            </motion.div>

            {/* 1. Active Contours (Snakes) */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-rose-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Eye size={16} className="text-rose-500" />
                    1) Active Contours (Snakes)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                    <Wind size={80} className="absolute -right-4 -top-4 text-white/5 group-hover:rotate-12 transition-transform" />
                    <p className="text-xs text-zinc-500 italic pr-12">
                        Deformable curves (splines) that iteratively move to fit image features (edges/lines) by minimizing an energy functional.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { t: "Internal Energy", d: "Ensures smoothness and regular shape; prevents jagged edges.", c: "text-blue-400" },
                            { t: "External Energy", d: "Pulls the curve toward image features like strong gradients.", c: "text-rose-400" },
                            { t: "Constraint Forces", d: "Optional user guidance to push/pull contours manually.", c: "text-amber-400" }
                        ].map((force, i) => (
                            <div key={i} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${force.c}`}>{force.t}</span>
                                <p className="text-[9px] text-zinc-500 font-medium leading-relaxed">{force.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 2. Morphological Snakes */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-rose-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-rose-500" />
                    2) Morphological Snakes (Faster Variants)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
                    <div className="flex gap-4 items-center mb-2">
                        <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400 border border-rose-500/20 italic text-[10px]">
                            Replaces PDEs with morphological dilation/erosion for stability and speed.
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest">MorphGAC</h5>
                            <p className="text-[10px] text-zinc-500 italic">Geodesic Active Contours: Best for visible but noisy/cluttered boundaries.</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest">MorphACWE</h5>
                            <p className="text-[10px] text-zinc-500 italic">Without Edges: Works based on regional intensity differences; perfect for weak boundaries.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. GrabCut Algorithm */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-rose-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs" id="grabcut">
                    <MousePointer2 size={16} className="text-rose-500" />
                    3) GrabCut (Interactive Foreground Extraction)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 relative overflow-hidden group">
                    <Target className="absolute -right-8 -bottom-8 text-white/5 opacity-20" size={120} />
                    <p className="text-xs text-zinc-500 italic pr-12 leading-relaxed">
                        Extracts foreground objects using graph cuts and Gaussian Mixture Models (GMMs).
                    </p>
                    <div className="space-y-3 relative z-10">
                        <div className="flex gap-4 items-center p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                            <div className="p-2 rounded bg-rose-500/20 text-rose-400 font-bold text-[8px]">USER INPUT</div>
                            <p className="text-[10px] text-zinc-400 font-medium italic">Rough bounding box or scribbles to mark FG/BG cues.</p>
                        </div>
                        <div className="flex gap-4 items-center p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                            <div className="p-2 rounded bg-blue-500/20 text-blue-400 font-bold text-[8px]">GMM MODEL</div>
                            <p className="text-[10px] text-zinc-400 font-medium italic">Models color distributions as Gaussian mixtures for both classes.</p>
                        </div>
                        <div className="flex gap-4 items-center p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                            <div className="p-2 rounded bg-indigo-500/20 text-indigo-400 font-bold text-[8px]">OPTIMIZATION</div>
                            <p className="text-[10px] text-zinc-400 font-medium italic">Minimally identifies Max-Flow / Min-Cut to separate regions iteratively.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Graph-Based & Superpixels */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-rose-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid size={16} className="text-rose-500" />
                    4) Graph-Based & Superpixel Segmentation
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { t: "Felzenszwalb", i: Network, d: "Efficient graph-based segmentation using edge weights and components." },
                        { t: "SLIC", i: Target, d: "Fast superpixel clustering in 5D space (Color + X,Y coordinates)." },
                        { t: "QuickShift", i: Activity, d: "Non-parametric mode-seeking clustering for hierarchical scaling." }
                    ].map((item, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 hover:translate-y-[-4px] transition-transform shadow-xl">
                            <item.i size={20} className="text-rose-400" />
                            <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter">{item.t}</h5>
                            <p className="text-[9px] text-zinc-500 italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 5. Deep Semantic Segmentation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-rose-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Brain size={16} className="text-rose-500" />
                    5) Deep Semantic Segmentation (DeepLab v3+)
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6">
                    <p className="text-xs text-zinc-500 italic leading-relaxed">
                        Assigns a specific class label to <span className="text-rose-400 font-bold underline decoration-rose-500/30">EVERY pixel</span> (road, person, car, etc.) using a DeepLab v3+ FCN-style framework.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                            <span className="text-white font-bold text-[10px] uppercase">Atrous Convolutions</span>
                            <p className="text-[9px] text-zinc-500">Expands receptive fields without resolution loss (dilated convs).</p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                            <span className="text-white font-bold text-[10px] uppercase">ASPP Module</span>
                            <p className="text-[9px] text-zinc-500">Atrous Spatial Pyramid Pooling captures objects at multiple scales.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-center">
                        <p className="text-[10px] text-rose-300 font-bold uppercase tracking-widest">Encoder-Decoder Structure</p>
                        <p className="text-[9px] text-zinc-500 italic mt-1">Refines boundary details and sharpens pixel-level labeling outputs.</p>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-rose-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Users size={80} className="text-rose-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-rose-400 uppercase tracking-widest text-xs">Crowd Photo Analogy</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-[10px] text-zinc-500 italic leading-relaxed">
                    <div className="space-y-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50">
                        <p className="text-rose-400 font-bold uppercase tracking-tighter">Active Contours</p>
                        <p>Like a string that tightens around a person's outline.</p>
                    </div>
                    <div className="space-y-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50">
                        <p className="text-rose-400 font-bold uppercase tracking-tighter">GrabCut</p>
                        <p>Like drawing a rough box and letting the PC cut precisely.</p>
                    </div>
                    <div className="space-y-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50">
                        <p className="text-rose-400 font-bold uppercase tracking-tighter">Deep Semantic</p>
                        <p>Like an expert labeling every pixel instantly ("hat", "shoulder").</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-rose-500/20 pb-2">
                    <Table size={16} className="text-rose-500" />
                    Advanced Algorithm Benchmark
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Main Idea</th>
                                <th className="p-4 font-bold">Best For...</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "Snakes", i: "Energy-minimizing curve", b: "Smooth object boundaries" },
                                { m: "Morph Snakes", i: "Dilation/Erosion evolution", b: "Noisy/Weak edges" },
                                { m: "GrabCut", i: "GMM + Min-Cut optimization", b: "Foreground extraction" },
                                { m: "Superpixels", i: "Boundary-aware grouping", b: "Preprocessing / Tracking" },
                                { m: "DeepLab v3+", i: "CNN Pixel Labeling", b: "Complex scene semantic classes" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-rose-500/5 transition-colors">
                                    <td className="p-4 font-bold text-rose-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 italic text-zinc-500 font-medium">{row.i}</td>
                                    <td className="p-4 text-zinc-600 italic font-medium">{row.b}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/advalgo.png"
                    alt="Advanced Segmentation Pipeline Overview"
                />
            </motion.div>

        </motion.div>
    );
}

