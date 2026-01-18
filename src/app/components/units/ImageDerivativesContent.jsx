'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
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
    Compass,
    TrendingUp,
    Waves,
    Zap
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

export function ImageDerivativesContent() {
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
                    Derivatives are the mathematical engines of edge detection. If smoothing is integration (reducing change), sharpening and edge detection are differentiation (emphasizing change).
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Edge Detection</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Gradient Vector</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Laplacian</span>
                </div>
            </motion.div>

            {/* 1) First-Order Derivatives: The Gradient */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <TrendingUp size={16} className="text-blue-500" />
                    1) First-Order Derivatives: The Gradient
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                            <h6 className="font-bold text-xs uppercase tracking-tight flex items-center gap-2">
                                <Compass size={14} className="text-blue-500" /> Gradient Vector
                            </h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                                A 2D vector pointing in the direction of maximum intensity increase.
                            </p>
                            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex justify-center">
                                <InlineMath math="\nabla f = [g_x, g_y]^T" />
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                            <h6 className="font-bold text-xs uppercase tracking-tight flex items-center gap-2">
                                <Activity size={14} className="text-emerald-500" /> Gradient Magnitude
                            </h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                                Represents edge strength. Large magnitude = strong edge.
                            </p>
                            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700 flex justify-center">
                                <InlineMath math="M(x,y) = \sqrt{g_x^2 + g_y^2}" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 h-full">
                            <h6 className="font-bold text-xs uppercase tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">Digital Approximations</h6>
                            <ul className="space-y-4">
                                <li className="space-y-1">
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-blue-600 dark:text-blue-400">
                                        <Grid3X3 size={12} /> Roberts & Prewitt
                                    </div>
                                    <p className="text-[10px] text-zinc-500 italic pl-5">
                                        Basic difference kernels. Simple but sensitive to noise.
                                    </p>
                                </li>
                                <li className="space-y-1">
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                        <Grid3X3 size={12} /> Sobel Operator
                                    </div>
                                    <p className="text-[10px] text-zinc-500 italic pl-5">
                                        Widely used because it incorporates <span className="font-bold text-zinc-900 dark:text-zinc-100">smoothing</span>, making it more robust against noise.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Second-Order: Laplacian */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-rose-500" />
                    2) Second-Order Derivatives: The Laplacian
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 p-8 bg-zinc-900 text-white rounded-[2.5rem] space-y-6 relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <Target size={200} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                                    <BlockMath math="\nabla^2 f" />
                                </div>
                                <div className="space-y-1">
                                    <h5 className="font-bold text-lg">The Laplacian</h5>
                                    <p className="text-white/60 text-xs font-mono uppercase tracking-widest">Isotropic Scalar Operator</p>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed max-w-lg">
                                Unlike the gradient (vector), the Laplacian is a scalar. It produces <span className="text-white font-bold">zero-crossings</span> which determine the exact center of thick edges, offering finer detail detection.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-rose-50 dark:bg-rose-900/10 rounded-3xl border border-rose-100 dark:border-rose-800 space-y-3">
                        <div className="flex items-start gap-3">
                            <ShieldAlert size={18} className="text-rose-500 shrink-0 mt-1" />
                            <h6 className="font-bold text-xs text-rose-700 dark:text-rose-400 uppercase tracking-tight">Noise Sensitivity</h6>
                        </div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 italic leading-relaxed">
                            Double differentiation amplifies high-frequency noise aggressively.
                        </p>
                        <div className="mt-2 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-rose-100 dark:border-rose-900/50 shadow-sm">
                            <span className="text-[10px] font-bold text-rose-500 block mb-1 uppercase">Solution: LoG</span>
                            <span className="text-[10px] text-zinc-500">Laplacian of Gaussian: Smooth first, then differentiate.</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Analyzing Transitions */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Waves size={16} className="text-zinc-400" />
                    3) Analyzing Signal Transitions
                </h4>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { type: "Constant Area", g1: "0", g2: "0", color: "zinc" },
                        { type: "Intensity Ramp", g1: "Non-Zero (Constant)", g2: "Non-Zero at ends", color: "blue" },
                        { type: "Step Edge", g1: "Non-Zero @ Edge", g2: "Non-Zero @ Edge", color: "emerald" },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-2 text-center">
                            <div className={`text-[10px] font-bold uppercase tracking-widest text-${item.color}-500 mb-2`}>{item.type}</div>
                            <div className="space-y-1">
                                <div className="text-[10px] text-zinc-400">1st Derivative</div>
                                <div className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">{item.g1}</div>
                            </div>
                            <div className="w-8 h-[1px] bg-zinc-200 dark:bg-zinc-700 mx-auto my-2" />
                            <div className="space-y-1">
                                <div className="text-[10px] text-zinc-400">2nd Derivative</div>
                                <div className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">{item.g2}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy: Staircase */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <TrendingUp size={200} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h5 className="text-3xl font-bold tracking-tighter text-white italic">Feeling the Staircase</h5>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Differentiation in the Dark</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/20 shrink-0">
                                    <Activity size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-200">1st Derivative (Gradient)</h6>
                                    <p className="text-[10px] text-blue-400 font-mono uppercase">Hand Velocity</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-blue-500/20 pl-6">
                                Like your hand moving up a slope. As long as you are climbing the ramp, your vertical speed is non-zero. It detects the <span className="text-zinc-200 font-bold">presence of change</span>.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/20 shrink-0">
                                    <Zap size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-200">2nd Derivative (Laplacian)</h6>
                                    <p className="text-[10px] text-rose-400 font-mono uppercase">Sudden Jolt</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-rose-500/20 pl-6">
                                Like the jolt you feel when the slope starts or ends. It doesn't capture the climb itself, but <span className="text-zinc-200 font-bold">reacts violently</span> to the change in slope (the edges).
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-emerald-500" />
                    Derivative Comparison
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Concept</th>
                                <th className="p-4 font-bold">Type</th>
                                <th className="p-4 font-bold">What it highlights</th>
                                <th className="p-4 font-bold">Sensitivity to Noise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Gradient (Vector)</td>
                                <td className="p-4 uppercase text-[10px]">1st Order (Vector)</td>
                                <td className="p-4">Edge strength + Direction</td>
                                <td className="p-4 text-amber-500">High</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Gradient Magnitude</td>
                                <td className="p-4 uppercase text-[10px]">1st Order (Scalar)</td>
                                <td className="p-4">Overall Edge Strength</td>
                                <td className="p-4 text-amber-500">High</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Laplacian</td>
                                <td className="p-4 uppercase text-[10px]">2nd Order (Scalar)</td>
                                <td className="p-4">Fine detail, Zero-crossings</td>
                                <td className="p-4 text-rose-500 font-bold">Very High</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-emerald-500 font-bold NOT-ITALIC">LoG (Combined)</td>
                                <td className="p-4 uppercase text-[10px]">Hybrid</td>
                                <td className="p-4">Robust Edge Detection</td>
                                <td className="p-4 text-emerald-500 font-bold">Reduced</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-emerald-500" />
                    Visualizing Derivatives: Original vs Gradient Magnitude vs Laplacian
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/imgderi.png"
                        alt="Visualization comparing original image with its first-order gradient magnitude and second-order Laplacian derivatives."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
