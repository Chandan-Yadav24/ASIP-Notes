'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Focus,
    Fingerprint,
    Target,
    Zap,
    ArrowRight,
    Search,
    Info,
    Check,
    Table,
    Activity,
    Compass,
    Eye,
    ShieldCheck,
    Layers
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

export function FeatureDetectorVsDescriptor() {
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
                    Feature extraction is the bridge between raw pixels and semantic understanding.
                    It is typically divided into two sequential steps: locating the features and then describing them.
                </p>
                <div className="flex items-center justify-center gap-4 py-4">
                    <div className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold uppercase text-xs">Detection</div>
                    <ArrowRight className="text-zinc-600" size={16} />
                    <div className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 font-bold uppercase text-xs">Description</div>
                </div>
            </motion.div>

            {/* 1. Detectors */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-indigo-500" />
                    1) Feature Detectors (Find "Where")
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-sm text-zinc-400">
                            Detectors locate distinctive points or regions, commonly called <span className="text-indigo-400 font-bold underline">keypoints</span> or <span className="text-indigo-400 font-bold underline">interest points</span>.
                        </p>
                        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl space-y-3">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <Search size={14} /> What they detect
                            </div>
                            <ul className="text-xs space-y-2">
                                {['Corners: Sharp intensity variations', 'Edges: Boundary lines', 'Blobs: Uniform standout regions'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                            <div className="text-[10px] font-bold text-indigo-400 uppercase mb-3 px-1">Examples & Output</div>
                            <div className="space-y-2">
                                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                                    <div className="text-xs font-bold text-white mb-1">Harris Corner Detector</div>
                                    <p className="text-[10px] text-zinc-500 italic">Identifies stable corners via intensity variation.</p>
                                </div>
                                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                                    <div className="text-xs font-bold text-white mb-1">Blob Detectors (LoG)</div>
                                    <p className="text-[10px] text-zinc-500 italic">Uses Laplacian of Gaussian to find region-like spots.</p>
                                </div>
                            </div>
                            <div className="mt-4 p-2 bg-indigo-500/20 rounded border border-indigo-500/30 text-center">
                                <span className="text-[9px] font-bold text-indigo-200 uppercase">Output: Coordinates / Locations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Descriptors */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-violet-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Fingerprint size={16} className="text-violet-500" />
                    2) Feature Descriptors (Describe "What")
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-3xl bg-violet-500/5 border border-violet-500/10 space-y-4">
                        <div className="text-[10px] font-bold text-violet-400 uppercase">Appearance Decoding</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Once keypoints are found, descriptors compute a numerical description of each keypoint's neighborhood,
                            converting local appearance into a <span className="text-violet-400 font-bold underline tracking-widest">compact feature vector</span>.
                        </p>
                        <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                            <div className="text-[9px] text-zinc-600 uppercase font-bold">Desired Robustness</div>
                            <div className="flex flex-wrap gap-1.5">
                                {['Scale', 'Rotation', 'Translation', 'Illumination', 'Viewpoint'].map((r, i) => (
                                    <span key={i} className="px-2 py-0.5 rounded bg-violet-500/10 text-[9px] text-violet-300 font-mono">+{r}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                <Activity size={60} className="text-violet-400" />
                            </div>
                            <div className="text-xs font-bold text-zinc-200 uppercase">Applications</div>
                            <ul className="text-[11px] text-zinc-500 space-y-2 relative z-10">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-violet-500 transition-all group-hover:rotate-45" /> Image Alignment / Registration</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-violet-500 transition-all group-hover:rotate-45" /> Object Recognition</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-violet-500 transition-all group-hover:rotate-45" /> 3D Reconstruction</li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Output: Feature Vectors (Numbers)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Combined Frameworks */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-3xl p-6 relative overflow-hidden">
                <Compass className="absolute -right-4 -bottom-4 text-white/5 rotate-12" size={140} />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Layers size={18} className="text-indigo-400" />
                    <h5 className="font-black text-white uppercase tracking-widest text-xs">Combined Frameworks (End-to-End)</h5>
                </div>
                <p className="text-xs text-zinc-400 mb-6 relative z-10 max-w-xl">
                    Some sophisticated algorithms perform both detection and description internally,
                    creating a complete pipeline for identifying and representing features.
                </p>
                <div className="grid grid-cols-2 gap-4 relative z-10 max-w-md">
                    <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-sm">
                        <div className="text-xs font-black text-white uppercase mb-1">SIFT</div>
                        <p className="text-[10px] text-zinc-500 mb-2">Scale-Invariant Feature Transform</p>
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-indigo-500" />
                            <span className="w-2 h-2 rounded-full bg-violet-500" />
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-sm">
                        <div className="text-xs font-black text-white uppercase mb-1">ORB</div>
                        <p className="text-[10px] text-zinc-500 mb-2">Oriented FAST and Rotated BRIEF</p>
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-indigo-500" />
                            <span className="w-2 h-2 rounded-full bg-violet-500" />
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
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Investigator Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex-none flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <Eye size={20} />
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-zinc-200 uppercase">Detection</div>
                                <p className="text-[11px] text-zinc-500">Spotting a unique landmark on a face (mole, sharp chin) → tells you <span className="text-indigo-400 underline italic">where to look</span>.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/40 flex-none flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs font-bold text-zinc-200 uppercase">Description</div>
                                <p className="text-[11px] text-zinc-500">Recording measurable details (shape, pattern, size) → tells you <span className="text-violet-400 underline italic">what it is</span> for future recognition.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 italic">
                        <p className="text-xs text-zinc-500 leading-relaxed text-center">
                            "Without a detector, we don't know where to look. Without a descriptor, we don't know what we're looking at."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Key Differences Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">Main Job / Question</th>
                                <th className="p-4 font-bold">Output</th>
                                <th className="p-4 font-bold">Examples</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            <tr className="hover:bg-indigo-500/5 transition-colors">
                                <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">Feature Detector</td>
                                <td className="p-4 italic">Find distinctive locations ("Where?")</td>
                                <td className="p-4 text-xs font-mono text-white">Coordinates / Maps</td>
                                <td className="p-4 text-[10px]">Harris, LoG / DoG, FAST</td>
                            </tr>
                            <tr className="hover:bg-indigo-500/5 transition-colors">
                                <td className="p-4 font-bold text-violet-400 uppercase tracking-tighter">Feature Descriptor</td>
                                <td className="p-4 italic">Encode local appearance ("What?")</td>
                                <td className="p-4 text-xs font-mono text-white">Feature Vectors</td>
                                <td className="p-4 text-[10px]">HOG, BRIEF, SIFT Descr.</td>
                            </tr>
                            <tr className="hover:bg-indigo-500/5 transition-colors">
                                <td className="p-4 font-bold text-emerald-400 uppercase tracking-tighter">Combined System</td>
                                <td className="p-4 italic">Detect + Describe Pipeline</td>
                                <td className="p-4 text-xs font-mono text-white">Keypoints + Vectors</td>
                                <td className="p-4 text-[10px]">SIFT, ORB, SURF</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/fdvd.png"
                    alt="Feature Detectors vs Descriptors"
                />
            </motion.div>

        </motion.div>
    );
}
