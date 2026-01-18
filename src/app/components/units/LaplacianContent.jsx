'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Target,
    Activity,
    Grid3X3,
    AlertTriangle,
    Layers,
    Waves,
    Info,
    Move3d,
    Zap,
    Table,
    ZoomIn,
    FileText
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

export function LaplacianContent() {
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
                <p className="leading-relaxed border-l-4 border-rose-500 pl-4 italic bg-rose-50 dark:bg-rose-900/10 py-3 rounded-r-xl font-medium">
                    The <span className="font-bold text-zinc-900 dark:text-zinc-100">Laplacian</span> is the simplest isotropic (rotation-invariant) second-order derivative operator. Unlike the gradient vector, it is a <span className="font-bold text-rose-600 dark:text-rose-400">scalar</span> that highlights rapid intensity changes in any direction.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Isotropic</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">2nd Derivative</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Detail Enhancement</span>
                </div>
            </motion.div>

            {/* 1) Foundations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-zinc-400" />
                    1) Mathematical Foundation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                <Waves size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Continuous Form</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            Sum of second-order partial derivatives in orthogonal directions.
                        </p>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex justify-center">
                            <InlineMath math="\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}" />
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                                <Grid3X3 size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Discrete Approximation</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            Finite difference calculating divergence from neighbors.
                        </p>
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex justify-center text-[10px]">
                            <BlockMath math="\nabla^2 f \approx f(x+1,y) + f(x-1,y) + f(x,y+1) + f(x,y-1) - 4f(x,y)" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Kernels & Sharpening */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-amber-500" />
                    2) Kernels & Image Sharpening
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Kernels */}
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1 p-4 bg-zinc-900 dark:bg-black rounded-2xl border border-zinc-800 text-center space-y-2">
                                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Standard (4-N)</span>
                                <div className="grid grid-cols-3 gap-1 text-xs font-mono font-bold text-zinc-300 w-fit mx-auto">
                                    <span>0</span><span>1</span><span>0</span>
                                    <span>1</span><span className="text-rose-500">-4</span><span>1</span>
                                    <span>0</span><span>1</span><span>0</span>
                                </div>
                            </div>
                            <div className="flex-1 p-4 bg-zinc-900 dark:bg-black rounded-2xl border border-zinc-800 text-center space-y-2">
                                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Enhanced (8-N)</span>
                                <div className="grid grid-cols-3 gap-1 text-xs font-mono font-bold text-zinc-300 w-fit mx-auto">
                                    <span>1</span><span>1</span><span>1</span>
                                    <span>1</span><span className="text-rose-500">-8</span><span>1</span>
                                    <span>1</span><span>1</span><span>1</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic px-2">
                            Kernels sum to <span className="font-bold text-zinc-900 dark:text-zinc-100">zero</span>, ensuring 0 response in constant regions.
                        </p>
                    </div>

                    {/* Sharpening Logic */}
                    <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-800 space-y-4">
                        <h6 className="font-bold text-xs text-amber-900 dark:text-amber-100 uppercase tracking-tight">Sharpening Equation</h6>
                        <p className="text-[11px] text-amber-800/70 dark:text-amber-200/70 leading-relaxed">
                            Since constant areas vanish, we add the Laplacian response back to the original to boost details.
                            (Subtract if center is negative).
                        </p>
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-200 dark:border-amber-800/50 shadow-sm flex justify-center font-bold text-zinc-700 dark:text-zinc-300">
                            <InlineMath math="g(x,y) = f(x,y) - \nabla^2 f(x,y)" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Characteristics & LoG */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-rose-500" />
                    3) Key Characteristics & Limitations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex gap-4">
                        <div className="shrink-0 p-2 bg-purple-500/10 rounded-lg text-purple-600">
                            <Move3d size={20} />
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Zero-Crossings</h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed">
                                Second derivatives create a positive-to-negative flip at edges. The <span className="font-bold">zero-crossing</span> point pinpoints the exact edge center.
                            </p>
                        </div>
                    </div>
                    <div className="p-5 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-800 flex gap-4">
                        <div className="shrink-0 p-2 bg-rose-500/10 rounded-lg text-rose-600">
                            <AlertTriangle size={20} />
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-bold text-xs text-rose-900 dark:text-rose-100">Noise Sensitivity</h6>
                            <p className="text-[11px] text-rose-700/70 dark:text-rose-300/70 leading-relaxed">
                                Major drawback. Amplifies noise significantly. Solution: <span className="font-bold">LoG (Laplacian of Gaussian)</span> - smooth first, then differentiate.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Crumpled Paper */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <FileText size={200} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h5 className="text-3xl font-bold tracking-tighter text-white italic">The Crumpled Paper</h5>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Tactile Sensing</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/10 text-white border border-white/10 shrink-0">
                                    <Activity size={18} />
                                </div>
                                <h6 className="text-sm font-bold text-zinc-100">Gradient (Slope)</h6>
                            </div>
                            <p className="text-[11px] text-indigo-200 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                                Like your hand feeling the general <span className="text-white font-bold">steepness</span> of a fold. It tells you there is a slope.
                            </p>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/20 shrink-0">
                                    <Zap size={18} />
                                </div>
                                <h6 className="text-sm font-bold text-zinc-100">Laplacian (Point)</h6>
                            </div>
                            <p className="text-[11px] text-rose-200 leading-relaxed italic border-l-2 border-rose-500/30 pl-4">
                                Like your fingertip <span className="text-white font-bold">"catching"</span> on sharp creases or corners. It reacts violently to sudden changes, ignoring smooth curves.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Comparison */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-zinc-400" />
                    Gradient vs Laplacian
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Aspect</th>
                                <th className="p-4 font-bold">Gradient (1st Order)</th>
                                <th className="p-4 font-bold">Laplacian (2nd Order)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Output Type</td>
                                <td className="p-4">Vector (Strength + Direction)</td>
                                <td className="p-4 text-rose-500">Scalar (Strength only)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Directionality</td>
                                <td className="p-4">Anisotropic (Orientation dependent)</td>
                                <td className="p-4 text-emerald-500">Isotropic (Rotation invariant)</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Main Use</td>
                                <td className="p-4">Edge Detection (Sobel, Canny)</td>
                                <td className="p-4">Sharpening, Point Detection, LoG</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-rose-500" />
                    Visualizing Laplacian Sharpening
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/laplacian.png"
                        alt="Visualization of Laplacian sharpening showing the original image, Laplacian of Gaussian response, and the final sharpened result."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
