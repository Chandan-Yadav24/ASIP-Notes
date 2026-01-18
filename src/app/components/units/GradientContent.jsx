'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    TrendingUp,
    Compass,
    Activity,
    Grid3X3,
    ShieldAlert,
    Map,
    Eye,
    Info,
    ArrowUpRight,
    Move,
    Mountain,
    Navigation,
    Layers,
    Table
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

export function GradientContent() {
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
                <p className="leading-relaxed border-l-4 border-blue-500 pl-4 italic bg-blue-50 dark:bg-blue-900/10 py-3 rounded-r-xl font-medium">
                    A <span className="font-bold text-zinc-900 dark:text-zinc-100">gradient</span> is a two-dimensional vector that points in the direction of the greatest rate of change in intensity. While derivatives detect the presence of edges, the gradient vector gives us both the edge's strength and its orientation.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Vector Calculus</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Edge Detection</span>
                </div>
            </motion.div>

            {/* 1) Magnitude and Direction */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Compass size={16} className="text-blue-500" />
                    1) Gradient Magnitude & Direction
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Magnitude */}
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                                <Activity size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Magnitude (Edge Strength)</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            The "Gradient Image". Measures how strong the edge is. High magnitude = Sharp transition.
                        </p>
                        <div className="space-y-3">
                            <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 flex justify-center shadow-sm">
                                <InlineMath math="M(x, y) = \sqrt{g_x^2 + g_y^2}" />
                            </div>
                            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-center text-[10px] text-zinc-500 font-mono">
                                Approx: <InlineMath math="|g_x| + |g_y|" />
                            </div>
                        </div>
                    </div>

                    {/* Direction */}
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                                <Compass size={18} />
                            </div>
                            <h6 className="font-bold text-xs uppercase tracking-tight">Direction (Orientation)</h6>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                            The angle of richest ascent. Note that the edge itself runs <span className="font-bold text-zinc-900 dark:text-zinc-100 underline decoration-emerald-500/30">perpendicular</span> to this gradient vector.
                        </p>
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 flex justify-center shadow-sm">
                            <InlineMath math="\alpha(x, y) = \tan^{-1}(g_y / g_x)" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2) Operators & Kernels */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid3X3 size={16} className="text-zinc-400" />
                    2) Discrete Operators (Kernels)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Roberts Cross", desc: "2x2 diagonal difference. Simple, fast, but highly noise sensitive.", color: "rose" },
                        { title: "Prewitt", desc: "3x3 mask using opposite sides. Better than Roberts but less robust than Sobel.", color: "amber" },
                        { title: "Sobel Operator", desc: "3x3 mask with center-weighting. Smoothes perpendicular to derivative. Standard choice.", color: "emerald" },
                        { title: "Kirsch Compass", desc: "8 directional kernels (N, NW, W...) to find max edge magnitude in any compass direction.", color: "indigo", colSpan: "md:col-span-3" }
                    ].map((item, i) => (
                        <div key={i} className={`p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2 group transition-all hover:border-${item.color}-500/30 ${item.colSpan || ''}`}>
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                                <h6 className="font-bold text-[11px] text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{item.title}</h6>
                            </div>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic pl-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3) Advanced Applications */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    3) Built on Gradients: Advanced Apps
                </h4>
                <div className="grid grid-cols-1 gap-4">
                    <div className="p-5 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800/30 flex gap-4">
                        <div className="shrink-0 p-2 bg-white dark:bg-indigo-950 rounded-lg border border-indigo-100 dark:border-indigo-800 text-indigo-500">
                            <Eye size={20} />
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-bold text-xs text-indigo-900 dark:text-indigo-100">Canny Edge Detection</h6>
                            <p className="text-[11px] text-indigo-800/70 dark:text-indigo-300/70 leading-relaxed">
                                The "Gold Standard". Uses gradients + <span className="font-bold">Non-Maximum Suppression</span> (thinning) + <span className="font-bold">Hysteresis Thresholding</span> (linking weak & strong edges).
                            </p>
                        </div>
                    </div>
                    <div className="p-5 bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex gap-4">
                        <div className="shrink-0 p-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500">
                            <TrendingUp size={20} />
                        </div>
                        <div className="space-y-1">
                            <h6 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">HOG (Histogram of Oriented Gradients)</h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed">
                                Divides image into cells and histograms orientations. Crucial for <span className="font-bold text-zinc-700 dark:text-zinc-300">Pedestrian & Object Detection</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) Noise Sensitivity */}
            <motion.div variants={itemVariants} className="p-4 rounded-2xl bg-rose-50 border border-rose-100 dark:bg-rose-900/10 dark:border-rose-900/30 flex items-start gap-4">
                <ShieldAlert className="text-rose-500 shrink-0 mt-1" size={18} />
                <div className="space-y-1">
                    <h6 className="font-bold text-xs text-rose-700 dark:text-rose-300 uppercase tracking-wide">Critical: Noise Amplification</h6>
                    <p className="text-[11px] text-rose-600/80 dark:text-rose-400/80 leading-relaxed">
                        Differentiation is a <span className="font-bold">High-Pass</span> operation, meaning it aggressively amplifies noise.
                        Gradient computation is almost always preceded by <span className="font-bold text-rose-700 dark:text-rose-300">Gaussian Smoothing</span> to dampen high-frequency noise first.
                    </p>
                </div>
            </motion.div>


            {/* Analogy: Hiking */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                    <Mountain size={200} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h5 className="text-3xl font-bold tracking-tighter text-white italic">Hiking in the Dark</h5>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Visualizing the Vector</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/20 shrink-0">
                                    <Navigation size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-200">The Compass (Direction)</h6>
                                    <p className="text-[10px] text-blue-400 font-mono uppercase">Points to Steepest Climb</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-blue-500/20 pl-6">
                                Even if you can't see the peak, the gradient vector is your compass pointing exactly uphill. Walking <span className="text-white font-bold">perpendicular</span> to it means you're walking along the ridge (the edge).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 shrink-0">
                                    <TrendingUp size={18} />
                                </div>
                                <div className="space-y-1">
                                    <h6 className="text-sm font-bold text-zinc-200">Steepness (Magnitude)</h6>
                                    <p className="text-[10px] text-emerald-400 font-mono uppercase">Cliff vs. Slope</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic border-l-2 border-emerald-500/20 pl-6">
                                Tells you how hard the climb is. High magnitude = <span className="text-white font-bold">Cliff Edge</span>. Low magnitude = Gentle Plain.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-zinc-400" />
                    Gradient Components Summary
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">Math / Symbol</th>
                                <th className="p-4 font-bold">Physical Meaning</th>
                                <th className="p-4 font-bold">Common Use</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Partial Derivatives</td>
                                <td className="p-4 font-mono text-[10px] text-blue-500">g_x, g_y</td>
                                <td className="p-4">Change in X and Y axes</td>
                                <td className="p-4">Building blocks</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Magnitude</td>
                                <td className="p-4 font-mono text-[10px] text-emerald-500">M(x,y)</td>
                                <td className="p-4">Edge Strength (Steepness)</td>
                                <td className="p-4">Edge strength maps</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 text-zinc-900 dark:text-zinc-100 font-bold NOT-ITALIC">Direction</td>
                                <td className="p-4 font-mono text-[10px] text-purple-500">α(x,y)</td>
                                <td className="p-4">Orientation (Perpendicular to edge)</td>
                                <td className="p-4">Canny, HOG</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-blue-500" />
                    Gradient Visualization
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/graid.png"
                        alt="Visualization of Gradient Magnitude and Direction calculation using Sobel kernels."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
