'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Target,
    Zap,
    Fingerprint,
    Compass,
    Activity,
    Binary,
    Layers,
    Waves,
    Scan,
    Table,
    Info,
    Check,
    ArrowRight,
    Search,
    Maximize,
    Boxes,
    Focus,
    Eye
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

export function ExtractingFeaturesContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Feature Extraction (Mid-Level Image Processing)</span>
                    A key stage often following segmentation. Its goal is to convert raw pixel data into useful
                    <span className="text-indigo-400 font-bold"> numerical information</span> used for recognition, matching, classification, and measurement.
                </p>
            </motion.div>

            {/* 1. Detectors vs Descriptors */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Focus size={16} className="text-indigo-500" />
                    1) Feature Detectors vs Feature Descriptors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={80} />
                        </div>
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Target size={18} />
                            <span className="font-bold text-sm uppercase">Feature Detectors (Find "Where")</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed relative z-10">
                            Algorithms that locate distinctive points or regions (keypoints / interest points) likely to be repeatable across different views.
                        </p>
                        <ul className="text-[10px] text-zinc-500 space-y-1 pt-2">
                            <li>• <span className="text-zinc-400">Corners:</span> Sharp intensity changes</li>
                            <li>• <span className="text-zinc-400">Edges:</span> Linear boundaries</li>
                            <li>• <span className="text-zinc-400">Blobs:</span> Region-like spots</li>
                        </ul>
                    </div>
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Fingerprint size={80} />
                        </div>
                        <div className="flex items-center gap-2 text-violet-400">
                            <Fingerprint size={18} />
                            <span className="font-bold text-sm uppercase">Feature Descriptors (Describe "What")</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed relative z-10">
                            Converts the local neighborhood of a keypoint into a compact numeric vector robust to environmental changes.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Scale', 'Rotation', 'Illumination', 'Noise'].map((t, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] text-violet-400 italic">Invariant to {t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Common Techniques */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    2) Common Feature Extraction Techniques
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">Harris Corner Detector</span>
                            <span className="text-[9px] px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded uppercase">Detector</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Uses eigenvalues of the structure tensor to classify regions as flat, edge, or corner.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">HOG</span>
                            <span className="text-[9px] px-2 py-0.5 bg-violet-500/20 text-violet-300 rounded uppercase">Descriptor</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Histogram of Oriented Gradients counts distributions of gradient directions. Key for pedestrian detection.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">Blob Detectors (LoG / DoG)</span>
                            <span className="text-[9px] px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded uppercase">Detector</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Laplacian of Gaussian (LoG) and its fast approximation, Difference of Gaussian (DoG), locate spot-like features.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">SIFT</span>
                            <span className="text-[9px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded uppercase">Combined</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Scale-Invariant Feature Transform produces features robust to viewpoint changes and illumination.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">Haar-like Features</span>
                            <span className="text-[9px] px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded uppercase">Fast Features</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Rectangle-based intensity differences. Extremly fast with integral images. Foundation of Viola-Jones face detection.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase">MSER</span>
                            <span className="text-[9px] px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded uppercase">Detector</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Maximally Stable Extremal Regions find regions stable across thresholds. Robust to affine distortions.</p>
                    </div>
                </div>
            </motion.div>

            {/* 3. PCA */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    3) PCA for Feature Extraction
                </h4>
                <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1 space-y-2">
                            <p className="text-xs text-zinc-400">
                                PCA is used to extract dominant patterns by reducing the dimensionality of the dataset while
                                capturing maximum variance.
                            </p>
                            <div className="pt-2">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Visual Example: Eigenfaces</span>
                                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-[10px] text-zinc-500 italic font-mono">
                                    Face ≈ w1*PC1 + w2*PC2 + ... + wn*PCn
                                    <br />
                                    (Represent complex face data using just few weights)
                                </div>
                            </div>
                        </div>
                        <div className="md:w-32 flex-none grid grid-cols-2 gap-2 opacity-40">
                            {[1, 1, 1, 1].map((_, i) => <div key={i} className="aspect-square bg-indigo-500/20 rounded-md border border-indigo-500/40" />)}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. Boundary vs Region */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Compass size={16} className="text-indigo-500" />
                    4) Boundary vs Region Descriptors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h5 className="text-[11px] font-bold text-indigo-400 uppercase flex items-center gap-2">
                            Boundary Descriptors <span className="text-zinc-600 text-[9px]">(Outline)</span>
                        </h5>
                        <div className="p-4 rounded-xl bg-zinc-900 border border-indigo-500/10 space-y-3">
                            <p className="text-[10px] text-zinc-500">Focus on the shape of the outline (length, curvature, tortuosity).</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 rounded font-bold uppercase italic">Chain Codes</span>
                                <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 rounded font-bold uppercase italic">Fourier Descriptors</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-[11px] font-bold text-violet-400 uppercase flex items-center gap-2">
                            Region Descriptors <span className="text-zinc-600 text-[9px]">(Area)</span>
                        </h5>
                        <div className="p-4 rounded-xl bg-zinc-900 border border-violet-500/10">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                {['Area', 'Perimeter', 'Compactness', 'Circularity', 'Eccentricity', 'Texture'].map((prop, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[10px] text-zinc-500">
                                        <Check size={10} className="text-violet-500" /> {prop}
                                    </div>
                                ))}
                            </div>
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
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Analogy: Landmarks in a Photo</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-xs font-bold text-zinc-300 uppercase">Detection</div>
                            <p className="text-xs text-zinc-500 mt-1">Your eyes pick distinctive points like a <span className="text-white">sharp tip</span> or a <span className="text-white">circular window</span>.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex-none flex items-center justify-center text-xs font-bold text-zinc-300 uppercase">Description</div>
                            <p className="text-xs text-zinc-500 mt-1">You record detailed "snapshots" of those points: <span className="text-white">angles, edge patterns, color gradients</span>.</p>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed italic border-l-2 border-indigo-500/20 pl-4">
                        Comparing these snapshots lets you recognize the landmark even if the photo is rotated, scaled, or captured in different lighting.
                    </p>
                </div>
            </motion.div>

            {/* Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Extraction Framework Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">What it does</th>
                                <th className="p-4 font-bold">Examples</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { comp: "Feature Detection", goal: "Finds keypoints/regions (Where)", ex: "Harris, LoG/DoG/DoH, MSER" },
                                { comp: "Feature Description", goal: "Encodes local neighborhood (What)", ex: "HOG, SIFT Descriptor" },
                                { comp: "Combined", goal: "Detect + Describe", ex: "SIFT (Full Pipeline)" },
                                { comp: "Fast Detection Features", goal: "Fast region comparisons", ex: "Haar-like (Viola-Jones)" },
                                { comp: "Dimensionality Reduction", goal: "Compress into key patterns", ex: "PCA → Eigenfaces" },
                                { comp: "Boundary Descriptors", goal: "Describe outlines", ex: "Chain codes, Fourier Descriptors" },
                                { comp: "Region Descriptors", goal: "Describe area + shape + texture", ex: "Area, Compactness, Solidity" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.comp}</td>
                                    <td className="p-4 italic">{row.goal}</td>
                                    <td className="p-4 text-zinc-500 font-mono text-[10px]">{row.ex}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/eifd.png"
                    alt="Extracting Image Features and Descriptors"
                />
            </motion.div>

        </motion.div>
    );
}
