'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    CloudRain,
    Waves,
    Zap,
    CircleDot,
    Maximize2,
    Info,
    Table,
    Sparkles,
    Search,
    CheckCircle2,
    AlertTriangle,
    Scissors
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

export function LowPassFilteringContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Introduction */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-zinc-900 border-l-4 border-blue-400">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Waves size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight text-xs text-blue-600 dark:text-blue-400">Smoothing via LPFs</h4>
                </div>
                <p className="leading-relaxed italic">
                    Smoothing is a fundamental technique used to <span className="font-bold underline decoration-blue-500/30">attenuate high-frequency components</span> (edges, noise, fine detail) while allowing low frequencies (smooth areas) to pass undisturbed.
                </p>
            </motion.div>

            {/* Principal Types of LPF */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <CircleDot size={18} className="text-zinc-400" />
                    Principal Types of Low-Pass Frequency Filters
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Ideal */}
                    <div className="card-sm border-t-2 border-rose-500 bg-rose-50/10 dark:bg-rose-900/5 space-y-2 group hover:scale-[1.02] transition-transform">
                        <span className="font-bold text-[10px] text-rose-600 uppercase">Ideal LPF (ILPF)</span>
                        <p className="text-[11px] leading-tight font-semibold italic">Sharpest transition, high artifacts.</p>
                        <p className="text-[10px] text-zinc-500 leading-relaxed">Cuts off all frequencies outside radius <InlineMath math="D_0" />. Produces significant <span className="text-rose-500 font-bold italic underline">ringing artifacts</span> (Gibbs phenomenon).</p>
                    </div>
                    {/* Gaussian */}
                    <div className="card-sm border-t-2 border-emerald-500 bg-emerald-50/10 dark:bg-emerald-900/5 space-y-2 group hover:scale-[1.02] transition-transform">
                        <span className="font-bold text-[10px] text-emerald-600 uppercase">Gaussian LPF (GLPF)</span>
                        <p className="text-[11px] leading-tight font-semibold italic">Smooth transition, zero ringing.</p>
                        <p className="text-[10px] text-zinc-500 leading-relaxed">Widely preferred for <span className="text-emerald-500 font-bold uppercase tracking-tighter">sensitive data</span> (like medical imaging) because it never produces ghosts.</p>
                    </div>
                    {/* Butterworth */}
                    <div className="card-sm border-t-2 border-amber-500 bg-amber-50/10 dark:bg-amber-900/5 space-y-2 group hover:scale-[1.02] transition-transform">
                        <span className="font-bold text-[10px] text-amber-600 uppercase">Butterworth LPF (BLPF)</span>
                        <p className="text-[11px] leading-tight font-semibold italic">Customizable compromise.</p>
                        <p className="text-[10px] text-zinc-500 leading-relaxed">Filter order <InlineMath math="n" /> controls sharpness: high orders act like Ideal, low orders act like Gaussian.</p>
                    </div>
                </div>
            </motion.div>

            {/* Implementation Methods */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Search size={18} className="text-zinc-400" />
                    Implementation Methods
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <span className="font-bold text-xs text-zinc-500 uppercase flex items-center gap-2 tracking-widest">
                            <Maximize2 size={14} /> Spatial Domain
                        </span>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Convolving with a neighborhood <span className="font-bold italic">window/kernel</span>. Examples: Box filter (averaging) or weighted average.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 text-zinc-100 border-none space-y-2">
                        <span className="font-bold text-xs text-blue-400 uppercase flex items-center gap-2 tracking-widest">
                            <Zap size={14} /> Frequency Domain
                        </span>
                        <p className="text-xs text-zinc-400 italic">Compute DFT <InlineMath math="\rightarrow" /> Multiply spectrum <InlineMath math="\rightarrow" /> Apply Inverse DFT. Efficient for large kernels.</p>
                    </div>
                </div>
            </motion.div>

            {/* Practical Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-zinc-400" />
                    Practical Applications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { title: "Noise Reduction", desc: "Suppresses sharp intensity transitions.", icon: AlertTriangle },
                        { title: "Feature Repair", desc: "Joins broken paths in low-res text.", icon: Scissors },
                        { title: "Cosmetics", desc: "Softens fine lines and skin blemishes.", icon: Sparkles },
                        { title: "Acoustics", desc: "Removes bright sounds for muffled quality.", icon: Waves }
                    ].map((app, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-3 bg-white dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-700 rounded-xl shadow-sm space-y-2 group hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 group-hover:text-blue-500 transition-colors shadow-inner">
                                <app.icon size={16} />
                            </div>
                            <span className="font-bold text-[10px] text-zinc-900 dark:text-zinc-200 uppercase tracking-tighter">{app.title}</span>
                            <p className="text-[10px] text-zinc-500 leading-tight italic">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy: Topographic Erosion */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-zinc-900 to-blue-950 text-zinc-100 border-none relative overflow-hidden group p-6 shadow-2xl">
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <CloudRain size={120} />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 shrink-0">
                        <CloudRain size={32} className="text-blue-300" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-bold text-xl tracking-tight text-white italic underline decoration-blue-500 underline-offset-8">The Gentle Rain Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                            Imagine an image as a <span className="font-bold text-white italic underline">topographic map</span> where intensity represents elevation:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">The Jagged Peaks</span>
                                <p className="text-[11px] text-zinc-300 italic">High-frequency noise/edges form sharp, jagged summits.</p>
                            </div>
                            <div className="space-y-2 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest block mb-1">Gradual Erosion</span>
                                <p className="text-[11px] text-zinc-100 leading-relaxed">
                                    Lowpass filtering is like <span className="font-bold italic text-blue-400">gentle rain</span> that wears down sharp summits until the landscape becomes a soft, rolling hill.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-blue-500" />
                    Filter Profiles: Comparison of Ideal, Gaussian, and Butterworth LPFs
                    <Sparkles size={10} className="text-zinc-300 ml-1" />
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/smlf.png"
                        alt="Frequency response and spatial domain ringing artifacts comparison for LPF types."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
