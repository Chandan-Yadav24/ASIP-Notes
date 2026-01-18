'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Binary,
    Zap,
    Target,
    Activity,
    Maximize,
    Box,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Cpu,
    Network,
    Minimize2,
    Search,
    Brain,
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

export function PCAContent() {
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
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1 text-xs tracking-widest">Statistical Feature Extraction</span>
                    Principal Component Analysis (PCA) is a mathematical powerhouse used to reduce
                    <span className="text-indigo-400 font-bold"> dimensionality</span> while preserving maximum signal variance.
                    It transforms complex, redundant data into a compact set of uncorrelated "Principal Components."
                </p>
            </motion.div>

            {/* 1. Core Concepts */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Brain size={16} className="text-indigo-500" />
                    1) Core Concepts & Mechanics
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                            <Network size={14} /> The Eigen System
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed italic border-l border-zinc-700 pl-3">
                            PCA is based on the eigendecomposition of the covariance matrix.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                    <ArrowRight size={14} />
                                </div>
                                <div className="text-[11px]">
                                    <span className="text-zinc-200 font-bold">Eigenvectors:</span> Define the principal axes (directions).
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                                    <Activity size={14} />
                                </div>
                                <div className="text-[11px]">
                                    <span className="text-zinc-200 font-bold">Eigenvalues:</span> Quantify variance in each direction.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase">Orthogonality</span>
                                <Check size={12} className="text-emerald-500" />
                            </div>
                            <p className="text-[10px] text-zinc-600 italic">Components are mathematically uncorrelated, removing all redundancy.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase">Variance Maximization</span>
                                <Maximize size={12} className="text-indigo-500" />
                            </div>
                            <p className="text-[10px] text-zinc-600 italic">PC1 captures the absolute most variance; PC2 the next most, and so on.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Algorithm Steps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    2) The PCA Algorithm Pipeline
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {[
                        { step: "Standardize", desc: "Mean subtraction & scaling", icon: Minimize2 },
                        { step: "Covariance", desc: "Map variable relationships", icon: Network },
                        { step: "Eigen Calc", desc: "Compute spectrum & vector", icon: Cpu },
                        { step: "Filter", desc: "Sort and select top K", icon: Search },
                        { step: "Project", desc: "Map to low-dim space", icon: Layers }
                    ].map((s, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-2 group transition-all hover:bg-zinc-800/50">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-2 text-indigo-400 group-hover:scale-110 transition-transform">
                                <s.icon size={16} />
                            </div>
                            <div className="text-[10px] font-black text-white uppercase tracking-tighter">{s.step}</div>
                            <p className="text-[9px] text-zinc-500 leading-tight italic">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. Image Processing Apps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <ImageIcon size={16} className="text-indigo-500" />
                    3) Applications in Image Processing
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4 hover:border-indigo-500/30 transition-all group">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <Brain size={20} />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-white uppercase">Eigenfaces</h5>
                                <p className="text-[10px] text-zinc-500 tracking-tight">Facial Recognition & Compression</p>
                            </div>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-indigo-500/20 pl-4">
                            Images are treated as long vectors. PCA extracts "Eigenfaces" (principal directions of variation).
                            Any face is then approximated as a linear combination of these basis faces.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-4 items-start">
                            <Box className="text-violet-500 flex-none" size={18} />
                            <div className="space-y-1">
                                <h6 className="text-xs font-bold text-zinc-200">Compression & Denoising</h6>
                                <p className="text-[10px] text-zinc-500">By keeping only components with large eigenvalues, we store less data while filtering out low-variance noise.</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-4 items-start">
                            <Layers className="text-cyan-500 flex-none" size={18} />
                            <div className="space-y-1">
                                <h6 className="text-xs font-bold text-zinc-200">Multispectral Imaging</h6>
                                <p className="text-[10px] text-zinc-500">Transforms highly correlated bands (satellite/medical) into uncorrelated, informative components.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Tree Photography Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Imagine taking hundreds of photos of a tall, thin tree from every angle.
                            Most are redundant. PCA acts as a curator that finds:
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-0.5 rounded bg-zinc-800 text-[9px] font-bold text-indigo-400">PC1</div>
                                <span className="text-[10px] text-zinc-400">The angle showing the most variation (height & structure).</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-0.5 rounded bg-zinc-800 text-[9px] font-bold text-violet-400">PC2</div>
                                <span className="text-[10px] text-zinc-400">An independent angle showing secondary details (branching).</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 italic">
                        <p className="text-xs text-zinc-500 text-center">
                            "With just a few key angles, you can describe the whole tree accurately without storing the entire album."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    PCA Framework Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Concept</th>
                                <th className="p-4 font-bold">Meaning</th>
                                <th className="p-4 font-bold">Why it matters</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { concept: "Principal Components", mean: "New Axes/Features", impact: "Replace many variables with few informative ones" },
                                { concept: "Orthogonality", mean: "Uncorrelated Components", impact: "Removes all data redundancy" },
                                { concept: "Eigenvectors", mean: "Directions of Max Variance", impact: "Defines the new principal axes" },
                                { concept: "Eigenvalues", mean: "Variance Captured", impact: "Used to select Top-K components" },
                                { concept: "Projection", mean: "PC Space Coordinate Map", impact: "Results in the reduced-dim dataset" },
                                { concept: "Eigenfaces", mean: "Face-specific Basis", impact: "Enables efficient facial recognition" },
                                { concept: "Filter Rule", mean: "Keep High-Variance", impact: "Preserves structure while removing noise" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.concept}</td>
                                    <td className="p-4 italic">{row.mean}</td>
                                    <td className="p-4 text-zinc-500">{row.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/pca.png"
                    alt="Principal Component Analysis"
                />
            </motion.div>

        </motion.div>
    );
}
