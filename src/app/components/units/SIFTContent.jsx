'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Maximize,
    RotateCcw,
    Target,
    Fingerprint,
    Zap,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Focus,
    Cpu,
    Shield,
    Eye,
    Grid,
    Binary,
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

export function SIFTContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Scale-Invariant Feature Transform (SIFT)</span>
                    A cornerstone of computer vision (David Lowe, 1999) used to detect and describe local features that are
                    <span className="text-indigo-400 font-bold"> invariant to scale, rotation</span>, and robust to illumination changes.
                </p>
            </motion.div>

            {/* 1. Workflow Stages */}
            <motion.div variants={itemVariants} className="space-y-8">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    1) The 4-Stage SIFT Workflow
                </h4>

                <div className="grid grid-cols-1 gap-6">
                    {/* Stage 1 */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                            <Maximize size={80} className="text-indigo-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-indigo-500 text-white text-[10px] font-black tracking-tighter">01</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Scale-Space Extrema Detection</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed italic">
                            Identifying candidate keypoints that persist across different image sizes (scales).
                        </p>
                        <ul className="text-[11px] space-y-2 text-zinc-500">
                            <li className="flex items-start gap-2">• <span className="text-zinc-300 font-medium">Gaussian Pyramid:</span> Repeatedly smoothing and downsampling.</li>
                            <li className="flex items-start gap-2">• <span className="text-zinc-300 font-medium">DoG (Difference of Gaussians):</span> Highlight structures by subtracting adjacent scales.</li>
                            <li className="flex items-start gap-2">• <span className="text-zinc-300 font-medium">3D Local Extrema:</span> Compare points in a <InlineMath math="3 \times 3 \times 3" /> region across space and scale.</li>
                        </ul>
                    </div>

                    {/* Stage 2 */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                            <Target size={80} className="text-violet-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-violet-500 text-white text-[10px] font-black tracking-tighter">02</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Keypoint Localization</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Refining positions to achieve sub-pixel accuracy and filtering out unstable noise.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-3 bg-zinc-950 rounded-xl border border-rose-500/10">
                                <span className="text-[10px] text-rose-400 font-bold uppercase block mb-1">Reject</span>
                                <p className="text-[10px] text-zinc-600">Low-contrast points</p>
                                <p className="text-[10px] text-zinc-600">Edge responses</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-emerald-500/10">
                                <span className="text-[10px] text-emerald-400 font-bold uppercase block mb-1">Keep</span>
                                <p className="text-[10px] text-zinc-600">Stable, distinctive corners</p>
                                <p className="text-[10px] text-zinc-600">Sub-pixel centers</p>
                            </div>
                        </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:-rotate-45 transition-transform">
                            <RotateCcw size={80} className="text-cyan-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-cyan-500 text-white text-[10px] font-black tracking-tighter">03</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Orientation Assignment</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed italic">
                            Assigning a dominant direction to make the feature <span className="text-cyan-400 font-medium">rotation invariant</span>.
                        </p>
                        <p className="text-[10px] text-zinc-500">
                            Builds a local orientation histogram of gradients around the keypoint. The peak(s) determine the keypoint's orientation.
                        </p>
                    </div>

                    {/* Stage 4 */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-95 transition-transform">
                            <Fingerprint size={80} className="text-emerald-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black tracking-tighter">04</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Descriptor Generation</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Encoding a unique numeric "fingerprint" for matching.
                        </p>
                        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex justify-between items-center text-center">
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-white">4 × 4</div>
                                <div className="text-[9px] text-zinc-600 uppercase font-bold">Subregions</div>
                            </div>
                            <span className="text-zinc-800">×</span>
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-white">8 Bins</div>
                                <div className="text-[9px] text-zinc-600 uppercase font-bold">Orientation</div>
                            </div>
                            <ArrowRight size={14} className="text-emerald-500" />
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-emerald-400 tracking-widest">128-D</div>
                                <div className="text-[9px] text-zinc-600 uppercase font-bold">Vector</div>
                            </div>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">Normalization ensures robustness to contrast and illumination.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Keypoint Matching */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Search size={16} className="text-indigo-500" />
                    2) Keypoint Matching & Ratio Test
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Nearest Neighbor</span>
                        <p className="text-xs text-zinc-400 leading-relaxed italic">
                            Matching is performed by finding the descriptor with the minimum <span className="text-white font-medium underline decoration-indigo-500/30">Euclidean distance</span> in the 128-D feature space.
                        </p>
                    </div>
                    <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
                        <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block">Lowe's Ratio Test</span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                            If d1/d2 {">"} 0.8: REJECT MATCH
                        </p>
                        <p className="text-[10px] text-zinc-500">
                            Matches are only accepted if the best match is significantly closer than the second-best, eliminating ambiguous background noise.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Strengths and Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    4) Capabilities and Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs font-medium">
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block mb-2 underline underline-offset-8 decoration-emerald-500/20">Strengths</span>
                        <ul className="space-y-2 text-zinc-400 italic">
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> Powerful scale & rotation invariance</li>
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> Highly distinctive feature descriptors</li>
                            <li className="flex gap-2"><Check size={14} className="text-emerald-500" /> Works exceptionally in cluttered scenes</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-3">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block mb-2 underline underline-offset-8 decoration-rose-500/20">Limitations</span>
                        <ul className="space-y-2 text-zinc-400 italic">
                            <li className="flex gap-2"><ArrowRight size={14} className="text-rose-500" /> Computationally expensive</li>
                            <li className="flex gap-2"><ArrowRight size={14} className="text-rose-500" /> Struggles with non-rigid deformations</li>
                            <li className="flex gap-2"><ArrowRight size={14} className="text-rose-500" /> Patent protected for many years</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Mosaic Tile Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-500 italic leading-relaxed">
                        "Imagine finding a specific patterned tile in a massive mosaic by checking it from different distances and marking exactly which way the pattern points."
                    </div>
                    <ul className="space-y-3 text-zinc-500">
                        <li className="flex items-center gap-2"><Check size={12} className="text-indigo-500" /> <span className="font-bold text-zinc-200">Scale-space:</span> Checking from different distances.</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-indigo-500" /> <span className="font-bold text-zinc-200">Orientation:</span> Marking the pattern's direction.</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-indigo-500" /> <span className="font-bold text-zinc-200">128-D Vector:</span> The tile's unique fingerprint.</li>
                    </ul>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    SIFT Stage Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Stage</th>
                                <th className="p-4 font-bold">Function</th>
                                <th className="p-4 font-bold">Output</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { stage: "Scale-space Extrema", func: "Find candidates across scales (DoG)", out: "Candidates (Location + Scale)" },
                                { stage: "Keypoint Localization", func: "Refine position & filter noise", out: "Stable Keypoints (Sub-pixel)" },
                                { stage: "Orientation", func: "Assign dominant direction", out: "Rotation-invariant keypoints" },
                                { stage: "Descriptor Generation", func: "Build 128-D gradient summary", out: "128-D Feature Vector" },
                                { stage: "Matching + Ratio Test", func: "Find correspondences", out: "Reliable image matches" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400">{row.stage}</td>
                                    <td className="p-4 italic">{row.func}</td>
                                    <td className="p-4 text-zinc-500 font-mono text-[10px]">{row.out}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/sift.png"
                    alt="Scale-Invariant Feature Transform (SIFT)"
                />
            </motion.div>

        </motion.div>
    );
}
