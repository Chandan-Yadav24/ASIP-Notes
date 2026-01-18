'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Compass,
    Waves,
    Target,
    Zap,
    Box,
    Layers,
    Binary,
    Activity,
    Scan,
    Table,
    Info,
    Check,
    ArrowRight,
    Search,
    Maximize,
    Boxes,
    Focus,
    Eye,
    Spline,
    Circle,
    Layout,
    Fingerprint
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';

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

export function BoundaryFeatureDescriptionContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Boundary Processing & Description</span>
                    After segmentation, mid-level processing focuses on finding, improving, and representing region borders
                    to compute attributes used for analysis and recognition.
                </p>
            </motion.div>

            {/* 1. Boundary Processing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Compass size={16} className="text-indigo-500" />
                    1) Boundary Processing
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-bold text-indigo-400 uppercase flex items-center gap-2">
                            <Maximize size={14} /> Enhancement
                        </div>
                        <p className="text-[10px] text-zinc-500">Makes transitions clearer using gradient operators (Sobel, Prewitt).</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-bold text-violet-400 uppercase flex items-center gap-2">
                            <Target size={14} /> Detection
                        </div>
                        <p className="text-[10px] text-zinc-500">Locates true pixels while reducing noise (Canny edge detector).</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-xs font-bold text-cyan-400 uppercase flex items-center gap-2">
                            <Layers size={14} /> Representation
                        </div>
                        <p className="text-[10px] text-zinc-500">Converts raw pixels into efficient, compact encodings.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase">Boundary Following</div>
                            <p className="text-[11px] text-zinc-400">Moore Tracing: Examines 8-neighborhood clockwise to output an ordered sequence.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase">Chain Codes (Freeman)</div>
                            <p className="text-[11px] text-zinc-400">Represent boundary as steps in 4 or 8 directions. Slope Chain Codes (SCCs) are more robust to rotation.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <Spline size={14} className="text-indigo-500" /> Polygonal Approx.
                            </div>
                            <p className="text-[11px] text-zinc-400">Minimum-Perimeter Polygon (MPP): Like a rubber band shrinking around the shape's shell.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase">Signatures</div>
                            <p className="text-[11px] text-zinc-400">1D representation (e.g., centroid-to-boundary distance vs angle).</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Feature Descriptors */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Fingerprint size={16} className="text-violet-500" />
                    2) Feature Descriptors
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Boundary Descriptors */}
                    <div className="p-6 rounded-3xl bg-zinc-900 border border-indigo-500/20 space-y-5">
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Compass size={18} />
                            <span className="font-bold text-xs uppercase tracking-widest">Boundary Descriptors (Outline)</span>
                        </div>
                        <div className="space-y-4">
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200">Length & Diameter</div>
                                <p className="text-[10px] text-zinc-500 italic">Pixel count vs maximum distance between points.</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200">Shape Numbers</div>
                                <p className="text-[10px] text-zinc-500 italic">Derived from chain codes; independent of start point.</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200">Fourier Descriptors</div>
                                <p className="text-[10px] text-zinc-500 italic">DFT of sequence; low-freq captures overall shape.</p>
                            </div>
                        </div>
                    </div>

                    {/* Region Descriptors */}
                    <div className="p-6 rounded-3xl bg-zinc-900 border border-violet-500/20 space-y-5">
                        <div className="flex items-center gap-2 text-violet-400">
                            <Circle size={18} />
                            <span className="font-bold text-xs uppercase tracking-widest">Region Descriptors (Area)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200 uppercase">Metrics</div>
                                <p className="text-[9px] text-zinc-500">Area, Perimeter, Compactness, Circularity</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200 uppercase">Eccentricity</div>
                                <p className="text-[9px] text-zinc-500">Major/Minor axis ratio of equivalent ellipse</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200 uppercase">Topological</div>
                                <p className="text-[9px] text-zinc-500">Euler Number (Objects - Holes)</p>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                <div className="text-[10px] font-bold text-zinc-200 uppercase">Texture</div>
                                <p className="text-[9px] text-zinc-500">Mean, Variance (Statistical) or Fourier (Spectral)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Point-based point */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-xs font-bold text-white uppercase tracking-tighter">Advanced Point-based Descriptors</div>
                        <Activity size={16} className="text-indigo-500" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { name: 'SIFT', desc: 'Gradient-based, Scale/Rotation Invariant' },
                            { name: 'ORB', desc: 'Binary descriptors for efficient matching' },
                            { name: 'HOG', desc: 'Pedestrian/Object detection (Gradient histogram)' }
                        ].map((d, i) => (
                            <div key={i} className="flex-1 min-w-[120px] p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                                <div className="text-[11px] font-bold text-indigo-400">{d.name}</div>
                                <div className="text-[9px] text-zinc-500 italic mt-1">{d.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Jigsaw Puzzle Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-400">EDGE</div>
                            <p className="text-xs text-zinc-500 mt-1">
                                <span className="text-zinc-200 font-bold">Boundary Processing:</span> Tracing the jagged edge to get the piece outline.
                            </p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-[10px] font-bold text-zinc-400">NOTE</div>
                            <p className="text-xs text-zinc-500 mt-1">
                                <span className="text-zinc-200 font-bold">Feature Descriptors:</span> Writing measurable notes (length, bumps, texture) to find a match.
                            </p>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed italic border-l-2 border-indigo-500/20 pl-4">
                        With these notes, you can quickly find a piece's match without physically testing it against every other piece in the box.
                    </p>
                </div>
            </motion.div>

            {/* Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Boundary & Descriptor Framework
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Stage</th>
                                <th className="p-4 font-bold">Goal</th>
                                <th className="p-4 font-bold">Outputs</th>
                                <th className="p-4 font-bold">Example Methods</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { stage: "Enhancement", goal: "Clearer Borders", out: "Increased Contrast", methods: "Sobel, Prewitt" },
                                { stage: "Detection", goal: "Locate Pixels", out: "Boundary Map", methods: "Canny" },
                                { stage: "Representation", goal: "Compact Encoding", out: "Chain Codes / Points", methods: "Moore, Signatures" },
                                { stage: "Boundary Desc.", goal: "Quantify Outline", out: "Shape Vector", methods: "Fourier, Shape Numbers" },
                                { stage: "Region Desc.", goal: "Quantify Area", out: "Feature Vector", methods: "Eccentricity, Euler #" },
                                { stage: "Point Desc.", goal: "Robust Matching", out: "Keypoints + Desc", methods: "SIFT, ORB, HOG" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.stage}</td>
                                    <td className="p-4 italic">{row.goal}</td>
                                    <td className="p-4 text-zinc-500">{row.out}</td>
                                    <td className="p-4 text-zinc-500 font-mono text-[10px]">{row.methods}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/bpafd.png"
                    alt="Boundary Processing and Feature Description"
                />
            </motion.div>

        </motion.div>
    );
}
