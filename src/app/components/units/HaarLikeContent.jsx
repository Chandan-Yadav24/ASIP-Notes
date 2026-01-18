'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Scan,
    Zap,
    Activity,
    Maximize,
    Layout,
    Target,
    ArrowRight,
    Table,
    Info,
    Check,
    Focus,
    Cpu,
    Shield,
    Eye,
    Grid,
    Binary,
    Layers,
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

export function HaarLikeContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1 text-xs">Viola–Jones Classifier</span>
                    Simple rectangular features used to detect local patterns of light and dark.
                    They powered the first practical <span className="text-indigo-400 font-bold underline decoration-indigo-500/30">real-time face detection</span> systems.
                </p>
            </motion.div>

            {/* 1. Mechanism */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid size={16} className="text-indigo-500" />
                    1) The Sum-Difference Mechanism
                </h4>
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-3xl space-y-4 text-center">
                    <p className="text-xs text-zinc-400 italic">
                        A Haar-like feature consists of adjacent black and white rectangles.
                        The value is the <span className="text-white font-bold">difference between the sums</span> of intensities.
                    </p>
                    <div className="bg-zinc-900/50 p-4 rounded-2xl border border-indigo-500/10 inline-block font-mono text-indigo-400 text-sm">
                        <InlineMath math="FeatureValue = \sum(White) - \sum(Black)" />
                    </div>
                </div>
            </motion.div>

            {/* 2. Fast Computation: Integral Image */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    2) Fast Computation: Integral Image
                </h4>
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group transition-all hover:border-indigo-500/30">
                    <Binary className="absolute -right-4 -top-4 text-white/5 group-hover:rotate-12 transition-transform" size={100} />
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 relative z-10">
                        Viola-Jones uses a <span className="text-indigo-400 font-bold">Summed-Area Table</span> (Integral Image) to compute rectangle sums in <span className="italic text-white">constant time O(1)</span> regardless of size.
                    </p>
                    <div className="flex gap-4 text-[10px] items-center relative z-10">
                        <div className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 font-black">CONSTANT TIME</div>
                        <ArrowRight size={14} className="text-zinc-700" />
                        <span className="text-zinc-500 italic">Enables real-time scanning of thousands of windows.</span>
                    </div>
                </div>
            </motion.div>

            {/* 3. Common Types */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layout size={16} className="text-indigo-500" />
                    3) Common Feature Layouts
                </h4>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: "Edge Features", desc: "Detects transitions from light to dark.", icon: Activity },
                        { title: "Line Features", desc: "Identifies bright/dark streaks (nose bridge).", icon: Layers },
                        { title: "Point Features", desc: "Captures 3-rect intensity changes.", icon: Target },
                        { title: "Diagonal Features", desc: "Four-rect checkerboard-like patterns.", icon: Maximize }
                    ].map((f, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                            <div className="flex items-center gap-2 text-indigo-400 mb-2">
                                <f.icon size={14} />
                                <span className="text-[10px] font-bold uppercase">{f.title}</span>
                            </div>
                            <p className="text-[10px] text-zinc-600 leading-tight italic">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 4. Face Detection Role */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Eye size={16} className="text-indigo-500" />
                    4) Role in Face Detection
                </h4>
                <div className="space-y-4">
                    <div className="p-5 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-3">
                            <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                <Cpu size={14} /> AdaBoost Selection
                            </div>
                            <p className="text-xs text-zinc-400">
                                Single Haar features are <span className="italic">weak classifiers</span>. AdaBoost selects the most informative few thousands out of 160k+ possibilities.
                            </p>
                        </div>
                        <div className="text-[10px] text-zinc-500 space-y-1 border-l border-zinc-800 pl-4 py-2 italic font-medium">
                            <div>• Eyes are darker than cheeks</div>
                            <div>• Nose bridge is brighter than sides</div>
                        </div>
                    </div>

                    <div className="p-5 rounded-3xl bg-violet-500/5 border border-violet-500/10 space-y-4">
                        <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                            <Shield size={14} /> The Classifier Cascade
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            A chain of detectors. Early stages reject non-faces <span className="text-violet-400 font-bold">instantly</span>,
                            reserving detailed (expensive) computation for promising sub-windows only.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Sliding Stencils Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <p className="text-zinc-500 italic leading-relaxed">
                        "Imagine using thousands of simple cut-out <span className="text-white font-bold underline decoration-indigo-500/30">stencils</span> over a photo.
                        A stencil with dark eye-sockets and a light nose-hole is a 'Haar-feature' for a face."
                    </p>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                        <p className="text-zinc-600">The <strong>Cascade</strong> is like throwing away papers that don't even have a face-shaped stencil match in the first 0.1 seconds.</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Haar Feature Framework
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">Role</th>
                                <th className="p-4 font-bold">Key Benefit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { c: "Haar Feature", r: "Rectangle sum difference", b: "Simple intensity pattern encoding" },
                                { c: "Integral Image", r: "Sum-area table caching", b: "Constant time O(1) sums" },
                                { c: "Feature Types", r: "Edge/Line/3-rect/4-rect", b: "Captures structural variety" },
                                { c: "AdaBoost", r: "Weak feature ensemble", b: "High accuracy from simple stems" },
                                { c: "Cascade", r: "Serial rejection chain", b: "Drastic speed boost for video" },
                                { c: "Stencils", r: "Mental Model", b: "Easy intuitive understanding" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.c}</td>
                                    <td className="p-4 italic">{row.r}</td>
                                    <td className="p-4 text-zinc-500">{row.b}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/haar.png"
                    alt="Haar-like Features (Viola-Jones)"
                />
            </motion.div>

        </motion.div>
    );
}
