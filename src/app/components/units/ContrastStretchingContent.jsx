'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Maximize2,
    Table,
    Sun,
    Layers,
    Info,
    ArrowRight,
    Calculator,
    Target,
    Activity,
    CheckCircle2,
    Settings,
    Focus,
    ArrowLeftRight,
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

export function ContrastStretchingContent() {
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
                    Contrast stretching is a point-wise intensity transformation used to improve visibility by expanding the range of gray levels to utilize the full available dynamic range.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Expand Range</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Memory-less</span>
                </div>
            </motion.div>

            {/* 1) Why Low Contrast? */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Info size={16} className="text-rose-500" />
                    1) Roots of Low Contrast
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Poor Illumination", desc: "Dim environments during acquisition result in compressed dark tones.", icon: Sun, color: "rose" },
                        { title: "Sensor Limits", desc: "Hardware constraints that cannot capture the full depth of a scene.", icon: Focus, color: "zinc" },
                        { title: "Camera Settings", desc: "Sub-optimal aperture or exposure settings during capture.", icon: Settings, color: "orange" }
                    ].map((cause, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm group">
                            <div className={`p-2 rounded-xl bg-${cause.color}-500/10 text-${cause.color}-500 mb-3 group-hover:scale-110 transition-transform`}>
                                <cause.icon size={18} />
                            </div>
                            <h6 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{cause.title}</h6>
                            <p className="text-[11px] text-zinc-500 leading-relaxed italic">{cause.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2) Mechanics Section */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs font-mono">
                    <Calculator size={16} className="text-indigo-500" />
                    2) Piecewise Linear Mapping Mechanics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-950 p-8 rounded-[3rem] shadow-2xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                        <ArrowLeftRight size={150} className="text-white" />
                    </div>
                    <div className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold font-mono">Control Points</p>
                            <div className="flex gap-4">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
                                    <InlineMath math="(r_1, s_1)" />
                                </div>
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
                                    <InlineMath math="(r_2, s_2)" />
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-[11px] text-zinc-400">
                                <span className="p-1 rounded bg-rose-500 text-white font-mono shrink-0 mt-0.5">r {'<'} r_1</span>
                                <span className="italic leading-relaxed">Pushed <span className="text-rose-400 font-bold">darker</span> (toward black).</span>
                            </li>
                            <li className="flex gap-3 items-start text-[11px] text-zinc-400">
                                <span className="p-1 rounded bg-indigo-500 text-white font-mono shrink-0 mt-0.5">r_1 {'<'} r {'<'} r_2</span>
                                <span className="italic leading-relaxed"><span className="text-indigo-400 font-bold underline decoration-indigo-500/30 underline-offset-4">Stretched</span> to increase contrast.</span>
                            </li>
                            <li className="flex gap-3 items-start text-[11px] text-zinc-400">
                                <span className="p-1 rounded bg-emerald-500 text-white font-mono shrink-0 mt-0.5">r {'>'} r_2</span>
                                <span className="italic leading-relaxed">Pushed <span className="text-emerald-400 font-bold">brighter</span> (toward white).</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm space-y-3">
                        <h6 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500" /> Rule for Realism
                        </h6>
                        <p className="text-[11px] text-zinc-300 leading-relaxed italic border-l-2 border-emerald-500/30 pl-4">
                            To avoid visual artifacts or tone flipping, we enforce order preservation: <br />
                            <span className="font-mono text-white mt-2 block"><InlineMath math="r_1 \leq r_2" /> and <InlineMath math="s_1 \leq s_2" /></span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Special Cases Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs font-mono">
                    <Layers size={16} className="text-zinc-400" />
                    3) Special Cases & Variations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                                <ArrowLeftRight size={18} />
                            </div>
                            <span className="font-bold text-sm">Thresholding</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-orange-500/30 pl-3">
                            The extreme case where <InlineMath math="r_1 = r_2" />. Produces a <span className="font-bold">Binary (B/W)</span> image.
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                                <Maximize2 size={18} />
                            </div>
                            <span className="font-bold text-sm">Min-Max Scaling</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed italic border-l-2 border-emerald-500/30 pl-3">
                            Automatically maps <InlineMath math="[r_{min}, r_{max}]" /> to <InlineMath math="[0, L-1]" />, often with <span className="font-bold italic">clipping</span> to ignore outliers.
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <div className="p-1.5 px-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 font-mono text-[10px] italic">
                        r_1 = s_1, r_2 = s_2 \u2192 Identity Map (No Change)
                    </div>
                </div>
            </motion.div>

            {/* Analogy: Accordion */}
            <motion.div variants={itemVariants} className="p-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <ArrowLeftRight size={200} className="text-white" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl shrink-0 group-hover:rotate-6 transition-transform">
                        <Layers size={50} className="text-white" />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h5 className="text-3xl font-bold tracking-tighter text-white">The Folded Accordion</h5>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] italic">Visualizing Contrast Expansion</p>
                        </div>
                        <p className="text-sm text-balance text-white/90 leading-relaxed italic max-w-xl">
                            A low-contrast image is like an accordion squeezed tightly\u2014its pleats (intensity levels) are crowded together. Contrast stretching is like <span className="text-white font-bold underline decoration-white/30 underline-offset-8">pulling it open</span> to full length: the pleats spread out, making differences visible.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Comparison Note Tools */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-zinc-900 text-white shrink-0">
                        <Zap size={18} />
                    </div>
                    <div className="space-y-2">
                        <h6 className="font-bold text-xs">Manual vs Automatic</h6>
                        <p className="text-[10px] text-zinc-500 leading-relaxed italic">
                            Stretching often requires manual selection of <InlineMath math="(r,s)" /> points. <span className="font-bold text-rose-500">Histogram Equalization</span> (our next topic) is more automatic!
                        </p>
                    </div>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                        <Activity size={18} />
                    </div>
                    <div className="space-y-2">
                        <h6 className="font-bold text-xs uppercase tracking-tighter text-zinc-400">Python Ecosystem</h6>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono">Pillow .point()</div>
                            <div className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono">scikit-image .exposure</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Summary: Contrast Transformation Profile
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                    <table className="w-full text-left text-xs border-collapse">
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { label: "Goal", value: "Expand intensity range to improve visibility of details" },
                                { label: "Method", value: "Piecewise linear mapping with control points" },
                                { label: "Special Case", value: "Thresholding (Produces binary B/W image)" },
                                { label: "Auto Variant", value: "Min-max scaling with clipping" },
                                { label: "Logic", value: "Each output pixel depends only on itself (Memory-less)" }
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                    <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-50/50 dark:bg-zinc-800/30 border-r border-zinc-100 dark:border-zinc-800 w-1/4">{row.label}</td>
                                    <td className="p-4 text-zinc-500 italic">{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-indigo-500" />
                    Contrast Stretching Visualization: Linear Expansion of Gray Levels
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/contstr.png"
                        alt="Visualization of contrast stretching using control points to expand the dynamic range of an image."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
