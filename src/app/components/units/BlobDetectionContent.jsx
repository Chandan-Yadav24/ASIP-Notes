'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Waves,
    Zap,
    Activity,
    Maximize,
    Circle,
    Target,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Focus,
    Cpu,
    Compass,
    Eye,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

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

export function BlobDetectionContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Blob Detection</span>
                    Techniques used to find regions (blobs) that differ noticeably from their surroundings.
                    A blob is a connected region where pixels share similar properties like intensity or texture.
                </p>
            </motion.div>

            {/* 1. Primary Algorithms */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    1) Primary Blob Detection Algorithms
                </h4>

                <div className="space-y-4">
                    {/* A. LoG */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                            <Activity size={60} className="text-indigo-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold">A</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Laplacian of Gaussian (LoG)</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed italic">
                            Smooths image with Gaussian to reduce noise, then applies Laplacian to highlight circular structures.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Scale space</div>
                                <p className="text-[10px] text-zinc-400">Filters across different <InlineMath math="\sigma" /> widths.</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase mb-1">3D Extrema</div>
                                <p className="text-[10px] text-zinc-400">Search X, Y, and scale <InlineMath math="\sigma" />.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-[10px]">
                            <span className="text-emerald-400 font-bold">PRO: Most Accurate</span>
                            <span className="text-rose-400 font-bold">CON: Slowest Computation</span>
                        </div>
                    </div>

                    {/* B. DoG */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:-rotate-12 transition-transform">
                            <Waves size={60} className="text-violet-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold">B</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Difference of Gaussian (DoG)</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Subtracts two Gaussian-blurred versions (more blurred vs less blurred).
                            Acts like a band-pass filter at specific scales.
                        </p>
                        <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-center font-mono text-[10px] text-violet-400">
                            DoG ≈ (Scale 1) - (Scale 2) = Fast LoG Approx.
                        </div>
                        <div className="flex gap-4 text-[10px]">
                            <span className="text-emerald-400 font-bold">PRO: Faster than LoG</span>
                            <span className="text-rose-400 font-bold">CON: Slightly less accurate</span>
                        </div>
                    </div>

                    {/* C. DoH */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform text-cyan-400">
                            <Cpu size={60} />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">C</span>
                            <h5 className="text-sm font-bold text-white uppercase tracking-tight">Determinant of Hessian (DoH)</h5>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Uses the determinant of the Hessian matrix (2nd order derivatives).
                            Speed is independent of blob size, making it highly scalable.
                        </p>
                        <div className="grid grid-cols-2 gap-3 text-[10px] text-zinc-500 italic uppercase tracking-tighter">
                            <div className="flex items-center gap-2"><Check size={10} className="text-cyan-500" /> Bright on Dark</div>
                            <div className="flex items-center gap-2"><Check size={10} className="text-cyan-500" /> Dark on Bright</div>
                        </div>
                        <div className="flex gap-4 text-[10px]">
                            <span className="text-emerald-400 font-bold">PRO: Fastest of three</span>
                            <span className="text-rose-400 font-bold">CON: Weaker on tiny blobs</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Characteristics */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-indigo-500" />
                    2) Blob Characteristics & Descriptors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-3xl space-y-4">
                        <h5 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                            <Maximize size={14} /> Geometric Properties
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-500 italic font-medium">
                            {['Area', 'Perimeter', 'Centroid', 'Bounding Box', 'Convexity', 'Solidity'].map((p, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-zinc-700" /> {p}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-3xl space-y-4">
                        <h5 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                            <Circle size={14} /> Structural / Shape
                        </h5>
                        <div className="grid grid-cols-1 gap-2 text-[11px] text-zinc-500">
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                                <span>Orientation</span>
                                <span className="text-zinc-600">Major axis angle</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                                <span>Circularity</span>
                                <span className="text-zinc-600">Roundness metric</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                                <span>Eccentricity</span>
                                <span className="text-zinc-600">Elongation ratio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Uses */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Focus size={16} className="text-indigo-500" />
                    3) Why Blob Detection is Useful
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Matching", desc: "Compare regions across images", icon: Search },
                        { title: "Tracking", desc: "Estimate speed/direction", icon: Activity },
                        { title: "Segmentation", desc: "Divide by intensity/texture", icon: Compass },
                        { title: "Anomaly", desc: "Detect cells/medical issues", icon: Eye }
                    ].map((u, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 group hover:border-indigo-500/30 transition-colors">
                            <u.icon size={20} className="text-indigo-400 mb-1 group-hover:scale-110 transition-transform" />
                            <div className="text-[11px] font-bold text-white uppercase">{u.title}</div>
                            <p className="text-[9px] text-zinc-600 italic leading-tight">{u.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Telescope Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500">
                        <p>Stars are like <span className="text-white font-bold italic">blobs</span>: bright points against a dark background.</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <div className="w-6 h-6 rounded bg-zinc-800 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-300 uppercase">LoG</div>
                                <p>A careful lens that precisely finds each star's center and <span className="text-zinc-300">exact size</span>.</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="w-6 h-6 rounded bg-zinc-800 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-300 uppercase">DoH</div>
                                <p>A fast scanner that counts light sources quickly, but might overlook the <span className="text-zinc-300">tiniest specks</span>.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 italic text-zinc-500 text-center">
                        "Thresholding only notices bright stars; Blob detection measures their cosmic signature."
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Algorithm Comparison
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Method</th>
                                <th className="p-4 font-bold">Key Idea</th>
                                <th className="p-4 font-bold">Speed</th>
                                <th className="p-4 font-bold">Accuracy</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { m: "LoG", idea: "Gaussian smoothing + Laplacian", s: "Slow", a: "High" },
                                { m: "DoG", idea: "Difference of two blurs", s: "Med/Fast", a: "Medium" },
                                { m: "DoH", idea: "Hessian determinant extrema", s: "Fast", a: "Medium" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.m}</td>
                                    <td className="p-4 italic">{row.idea}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${row.s === 'Fast' ? 'bg-emerald-500/10 text-emerald-400' : row.s === 'Slow' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                            {row.s}
                                        </span>
                                    </td>
                                    <td className="p-4 text-zinc-500">{row.a}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/blobd.png"
                    alt="Blob Detection Techniques"
                />
            </motion.div>

        </motion.div>
    );
}
