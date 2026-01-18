'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
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
    Anchor,
    Box,
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

export function HoughCircleContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Hough Transform for Circles</span>
                    A robust extension of line detection designed to find circular shapes even with noisy, broken, or partially occluded edges.
                    It operates across a complex <span className="text-indigo-400 font-bold">3D parameter space</span>.
                </p>
            </motion.div>

            {/* 1. Circle Model */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    1) The 3D Parameter Model
                </h4>
                <div className="space-y-4">
                    <p className="text-xs text-zinc-500">
                        A circle is defined by its center <InlineMath math="(a,b)" /> and radius <InlineMath math="r" />.
                        The standard equation is:
                    </p>
                    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-3xl text-center space-y-4">
                        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-indigo-500/30 inline-block font-mono text-indigo-400 text-sm">
                            <BlockMath math="(x-a)^2 + (y-b)^2 = r^2" />
                        </div>
                        <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-[10px] text-zinc-400 italic">
                            <span className="text-indigo-400 font-bold block mb-1 uppercase tracking-widest">3D Accumulator Array</span>
                            A(a, b, r) represents the "Hough Space", making circle detection significantly more computation-heavy than lines.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Mapping and Voting */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid size={16} className="text-indigo-500" />
                    2) Mapping and Voting Logic
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <Target className="absolute -right-4 -top-4 text-white/5 group-hover:scale-110 transition-transform" size={100} />
                        <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <Focus size={14} className="text-indigo-400" /> Point → Multiple Circles
                        </h5>
                        <p className="text-xs text-zinc-500 leading-relaxed italic">
                            An edge pixel <InlineMath math="(x,y)" /> could belong to many circles with different centers <InlineMath math="(a,b)" /> and radii <InlineMath math="r" />.
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <Anchor className="absolute -right-4 -top-4 text-white/5 group-hover:-rotate-12 transition-transform" size={100} />
                        <h5 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <Layers size={14} className="text-violet-400" /> Voting Scheme
                        </h5>
                        <p className="text-xs text-zinc-500 leading-relaxed italic">
                            Each edge point "votes" for all valid <InlineMath math="(a,b,r)" /> combinations that could pass through it.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Detection Process */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Maximize size={16} className="text-indigo-500" />
                    3) Detection Pipeline (Step-by-Step)
                </h4>
                <div className="space-y-4">
                    {[
                        { step: "Step 1: Edge Detection", desc: "Run Canny to extract strong candidate pixels, reducing the voting population.", icon: Search },
                        { step: "Step 2: Define Radius Range", desc: "Fix 'r' or define [r_min, r_max] to significantly prune the 3D Search Space.", icon: Box },
                        { step: "Step 3: 3D Voting", desc: "For each pixel and radius, compute potential centers and increment A(a, b, r).", icon: Grid },
                        { step: "Step 4: Peak Detection", desc: "Search for local maxima in the 3D array; high values indicate likely circles.", icon: Compass },
                        { step: "Step 5: Extract Circles", desc: "Draw/mark circles using the highest voting (a, b, r) parameters.", icon: Eye }
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

            {/* 4. Practical Considerations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    4) Practical & Cost Considerations
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20">The Cost Barrier</span>
                        <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">
                            A 3D accumulator increases memory usage and computation time exponentially compared to the 2D Line Hough array.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20">Speed Optimization</span>
                        <ul className="text-[10px] space-y-2 text-zinc-500">
                            <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> Restrict radius range (r_min, r_max)</li>
                            <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> Use gradient direction to limit center candidates</li>
                            <li className="flex gap-2"><Check size={12} className="text-emerald-500" /> Downsample image or edge map</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Anchor size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Ropes around a Pond Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500 italic">
                        <p>Imagine people standing on the edge of a <span className="text-white font-bold underline decoration-indigo-500/30">hidden circular pond</span>. Each person has a rope (radius).</p>
                        <p>If they each draw all possible circles using their rope length, the place where the <span className="text-indigo-400 font-bold">most circles overlap</span> is the true center.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600 italic">"Even if parts of the pond edge are missing or blocked, the strongest overlap reveals the true center of the circle."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Circle vs Line Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Property</th>
                                <th className="p-4 font-bold">Line Hough</th>
                                <th className="p-4 font-bold">Circle Hough</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { p: "Shape Parameters", l: "(ρ, θ)", c: "(a, b, r)" },
                                { p: "Accumulator Array", l: "2D Array", c: "3D Array" },
                                { p: "Robustness", l: "Noisy/Broken Edges", c: "Occluded/Noisy Edges" },
                                { p: "Compute Burden", l: "Moderate", c: "High (Memory + Time)" },
                                { p: "Main Optimization", l: "Limit angle/peaks", l2: "Limit radius range", c: "Limit radius range, use gradients" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.p}</td>
                                    <td className="p-4 font-mono text-[10px] text-zinc-500">{row.l}</td>
                                    <td className="p-4 italic font-mono text-[10px] text-zinc-300">{row.c || row.l2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/htdc.png"
                    alt="Hough Transform for Circle Detection"
                />
            </motion.div>

        </motion.div>
    );
}
