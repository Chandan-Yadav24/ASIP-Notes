'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Target,
    Zap,
    Activity,
    Maximize,
    Box,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Focus,
    Cpu,
    Shield,
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

export function HarrisCornerContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Harris Corner Detector (1988)</span>
                    A cornerstone of computer vision for finding <span className="text-indigo-400 font-bold">interest points</span>.
                    A corner is a point where intensity changes significantly in all directions, unlike an edge which changes mainly in one.
                </p>
            </motion.div>

            {/* 1. Mathematical Foundation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-indigo-500" />
                    1) Mathematical Foundation
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                            <Search size={14} /> Window-Shift Intuition
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Harris measures how much a patch changes when shifted by <InlineMath math="(x, y)" />.
                            Large changes in <span className="text-indigo-400 font-bold italic">all directions</span> indicate a corner.
                        </p>
                        <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-center">
                            <span className="text-[10px] text-zinc-400 font-mono italic">"Shift magnifying glass in any direction → major change"</span>
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                        <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                            <Box size={14} /> Structure Tensor (Harris Matrix)
                        </div>
                        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-center overflow-x-auto">
                            <BlockMath math="M = \sum_{w(s,t)} \begin{bmatrix} f_x^2 & f_x f_y \\ f_x f_y & f_y^2 \end{bmatrix}" />
                        </div>
                        <ul className="text-[10px] text-zinc-500 space-y-1">
                            <li>• <InlineMath math="f_x, f_y" />: Gradients in X and Y directions (Sobel)</li>
                            <li>• <InlineMath math="w(s,t)" />: Weighting function (Gaussian/Box)</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 2. Corner Response Function R */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    2) Corner Response Function (R)
                </h4>
                <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 space-y-6">
                    <p className="text-xs text-zinc-400">To avoid direct eigenvalue computation, Harris proposed:</p>
                    <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 flex justify-center shadow-inner">
                        <BlockMath math="R = \det(M) - k(\text{tr}(M))^2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-[10px]">
                        <div className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
                            <span className="text-indigo-400 font-bold uppercase">det(M) = </span> <InlineMath math="\lambda_1 \lambda_2" />
                        </div>
                        <div className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
                            <span className="text-violet-400 font-bold uppercase">tr(M) = </span> <InlineMath math="\lambda_1 + \lambda_2" />
                        </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 flex justify-between italic">
                        <span>k: Empirical constant (0.04 - 0.06)</span>
                        <span className="text-indigo-400 font-bold">λ: Eigenvalues</span>
                    </div>
                </div>

                {/* Interpreting R */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                    {[
                        { title: "Corner", r: "R > 0 (Large)", desc: "λ1, λ2 both large", color: "text-emerald-400", bg: "bg-emerald-500/5" },
                        { title: "Edge", r: "R < 0 (Large)", desc: "One λ large, one small", color: "text-rose-400", bg: "bg-rose-500/5" },
                        { title: "Flat", r: "|R| Small", desc: "Both λ small", color: "text-zinc-500", bg: "bg-zinc-800/10" }
                    ].map((card, i) => (
                        <div key={i} className={`p-4 rounded-xl border border-zinc-800 ${card.bg} space-y-2 flex flex-col items-center text-center`}>
                            <div className={`text-xs font-black uppercase tracking-widest ${card.color}`}>{card.title}</div>
                            <div className="text-[11px] font-mono text-white">{card.r}</div>
                            <p className="text-[9px] text-zinc-600 uppercase tracking-tighter">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. Algorithm Steps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    3) Algorithm Workflow
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {[
                        { step: "Gradients", icon: Activity, desc: "Compute fx and fy using Sobel" },
                        { step: "Tensor", icon: Focus, desc: "Build matrix M with weighting" },
                        { step: "Response", icon: Zap, iconColor: "text-yellow-500", desc: "Calculate R at each pixel" },
                        { step: "Selection", icon: Target, desc: "Threshold & Non-max suppress" }
                    ].map((s, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center space-y-2 group">
                            <div className={`p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors ${s.iconColor || "text-indigo-400"}`}>
                                <s.icon size={16} />
                            </div>
                            <div className="text-[10px] font-bold text-zinc-200 uppercase">{s.step}</div>
                            <p className="text-[9px] text-zinc-500 italic leading-tight">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 4. Properties & Apps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Maximize size={16} className="text-indigo-500" />
                    4) Properties & Applications
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <Shield size={14} className="text-indigo-400" /> Invariance Properties
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg">
                                    <span className="text-[10px] text-zinc-400">Rotation Invariant</span>
                                    <Check size={12} className="text-emerald-500" />
                                </div>
                                <div className="flex items-center justify-between p-2 bg-rose-500/5 rounded-lg border border-rose-500/10">
                                    <span className="text-[10px] text-rose-300">Scale Sensitive</span>
                                    <span className="text-[9px] text-rose-500 font-bold italic">CAUTION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                            <Cpu size={60} />
                        </div>
                        <div className="text-[10px] font-bold text-zinc-200 uppercase">Computer Vision Tasks</div>
                        <ul className="text-[11px] text-zinc-500 space-y-1 relative z-10">
                            <li>• Image Matching / Registration</li>
                            <li>• Object Recognition</li>
                            <li>• 3D Reconstruction</li>
                            <li>• Autonomous Navigation</li>
                        </ul>
                        <div className="mt-4 pt-3 border-t border-zinc-800">
                            <span className="text-[9px] font-mono text-zinc-600">cv2.cornerHarris | skimage.feature.corner_harris</span>
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
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Sliding Magnifying Glass Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-400">FLAT</div>
                            <p className="text-xs text-zinc-500 mt-1">Shifting the glass over a flat wall barely changes the view.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-400">EDGE</div>
                            <p className="text-xs text-zinc-500 mt-1">Shifting along the line changes little; across it changes a lot.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-400">CORNER</div>
                            <p className="text-xs text-zinc-500 mt-1">Shifting in <span className="text-white font-bold">any direction</span> changes the view strongly.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 italic">
                        <p className="text-xs text-zinc-500 text-center leading-relaxed">
                            "Corners are the anchors of an image—stable, unique, and easy to find from any angle."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Interpretation Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Region Type</th>
                                <th className="p-4 font-bold">Eigen Pattern</th>
                                <th className="p-4 font-bold">Response R</th>
                                <th className="p-4 font-bold">Meaning</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { type: "Flat Region", pattern: "λ1 ≈ 0, λ2 ≈ 0", r: "Small |R|", mean: "No change in any direction" },
                                { type: "Edge", pattern: "One large, one small", r: "Large Negative", mean: "Change mainly in one direction" },
                                { type: "Corner", pattern: "Both Large", r: "Large Positive", mean: "Change in all directions" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.type}</td>
                                    <td className="p-4 font-mono text-[10px]">{row.pattern}</td>
                                    <td className="p-4 text-white font-black italic">{row.r}</td>
                                    <td className="p-4 text-zinc-500 italic">{row.mean}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8 text-center">
                <ZoomableImage
                    src="/hcd.png"
                    alt="Harris Corner Detector"
                />
            </motion.div>

        </motion.div>
    );
}
