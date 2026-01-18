'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Maximize,
    Zap,
    Binary,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Focus,
    Search,
    Compass,
    Eye,
    Grid,
    Target,
    Map,
    Flame,
    Share2,
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
}

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    }
}

export function HoughLineContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Hough Transform</span>
                    A robust method for detecting <span className="text-indigo-400 font-bold">geometric shapes</span> (lines/circles) in images.
                    It is highly resilient to broken edges, noise, and partial occlusions.
                </p>
            </motion.div>

            {/* 1. Normal Form Representation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    1) The Normal Representation
                </h4>
                <div className="space-y-4">
                    <p className="text-xs text-zinc-500">
                        Instead of <InlineMath math="y = mx + c" /> (which fails for vertical lines where <InlineMath math="m \to \infty" />),
                        Hough uses the <span className="text-indigo-400 font-bold underline decoration-indigo-500/30">Normal Form</span>:
                    </p>
                    <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-indigo-500/30 inline-block font-mono text-indigo-400 text-sm">
                            <BlockMath math="x\cos\theta + y\sin\theta = \rho" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-[10px] text-zinc-500 font-medium italic">
                            <div className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-800">
                                <span className="text-zinc-300 font-bold block mb-1">ρ (Rho)</span>
                                Perpendicular distance from origin
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-800">
                                <span className="text-zinc-300 font-bold block mb-1">θ (Theta)</span>
                                Angle of the perpendicular normal
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Parameter Space & Mapping */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid size={16} className="text-indigo-500" />
                    2) Parameter Space (Hough Space)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <Share2 className="absolute -right-4 -top-4 text-white/5 group-hover:rotate-12 transition-transform" size={100} />
                        <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <Activity size={14} className="text-indigo-400" /> Point → Curve Mapping
                        </h5>
                        <p className="text-xs text-zinc-500 leading-relaxed italic">
                            A single edge point <InlineMath math="(x,y)" /> in image space corresponds to a <span className="text-zinc-300 font-bold">sinusoidal curve</span> in <InlineMath math="(\rho, \theta)" /> space.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <Target className="absolute -right-4 -top-4 text-white/5 group-hover:-rotate-12 transition-transform" size={100} />
                        <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <Layers size={14} className="text-violet-400" /> Intersections → Lines
                        </h5>
                        <p className="text-xs text-zinc-500 leading-relaxed italic">
                            If many points lie on the same line, their Hough curves will <span className="text-zinc-300 font-bold underline">intersect at the same point</span> <InlineMath math="(\rho, \theta)" />.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Voting Procedure */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Maximize size={16} className="text-indigo-500" />
                    3) Voting Steps (Implementation)
                </h4>
                <div className="space-y-4">
                    {[
                        { step: "01. Preprocessing", desc: "Apply edge detection (e.g., Canny) to extract strong candidate pixels.", icon: Search },
                        { step: "02. Voting Phase", desc: "For each pixel, calculate all possible (ρ, θ) through it and increment the Accumulator Array.", icon: Share2 },
                        { step: "03. Peak Detection", desc: "Search for local maxima in the accumulator array; peaks represent detected lines.", icon: Compass }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/20 transition-all group">
                            <div className="p-2 rounded-lg bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <s.icon size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white uppercase mb-1">{s.step}</div>
                                <p className="text-[11px] text-zinc-500 leading-relaxed italic">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 4. Capabilities & Applications */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    4) Capabilities and Applications
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block mb-2 underline underline-offset-8 decoration-emerald-500/20">Why it's Powerful</span>
                        <ul className="space-y-2 text-zinc-400 italic">
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> <span className="font-bold text-zinc-200">Global Method:</span> Scans whole edge map at once.</li>
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> <span className="font-bold text-zinc-200">Edge Linking:</span> Reconnects broken segments.</li>
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> <span className="font-bold text-zinc-200">Robust:</span> Ignores noise/gaps in geometry.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 space-y-3">
                        <span className="text-indigo-400 font-bold uppercase tracking-widest block mb-2 underline underline-offset-8 decoration-indigo-500/20">Industrial Use</span>
                        <ul className="space-y-2 text-zinc-400 italic">
                            <li className="flex gap-2 animate-pulse">• Airport Runways detection</li>
                            <li className="flex gap-2 animate-pulse">• Road Lane Line recognition</li>
                            <li className="flex gap-2 animate-pulse">• High-speed Industrial QC</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Flame size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Torches in a Dark Field Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500 italic">
                        <p>Imagine people holding torches in a field. You want to know if they <span className="text-white font-bold underline decoration-indigo-500/30">line up perfectly</span>:</p>
                        <p>Each person "votes" for every straight line they could possible belong to.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600 italic">"In the control tower (accumulator), if many votes pile up for the same line coordinates, we know a real line exists—even if some torches are hidden by fog."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Hough Line Framework Summary
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
                                { c: "Normal Form", m: "x·cosθ + y·sinθ = ρ", w: "Uniformly handles vertical lines" },
                                { c: "Hough Space", m: "(ρ, θ) coordinates", w: "Peak finding identifies shapes" },
                                { c: "Point Mapping", m: "1 Point → 1 Curve", w: "Captures line possibilities" },
                                { c: "Peak detection", m: "Accumulator local maxima", w: "Validates geometric evidence" },
                                { c: "Resilience", m: "Ignores gaps/noise", w: "Works where local methods fail" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.c}</td>
                                    <td className="p-4 italic font-mono text-zinc-300">{row.m}</td>
                                    <td className="p-4 text-zinc-500">{row.w}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/hought.png"
                    alt="Hough Transform for Line Detection"
                />
            </motion.div>

        </motion.div>
    );
}
