'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Layers,
    Zap,
    Activity,
    Maximize,
    Box,
    Target,
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

export function HOGContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Histogram of Oriented Gradients (HOG)</span>
                    A powerful feature descriptor that represents objects by summarizing the distribution of edge (gradient) directions
                    in local regions. It is the gold standard for <span className="text-indigo-400 font-bold">pedestrian detection</span> and structured object recognition.
                </p>
            </motion.div>

            {/* 1. Core Idea */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Focus size={16} className="text-indigo-500" />
                    1) The core idea
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-indigo-400 mb-1">
                            <Activity size={16} />
                            <span className="text-[10px] font-bold uppercase">Edge Patterns</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">Objects are defined by their characteristic edge directions.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-violet-400 mb-1">
                            <Grid size={16} />
                            <span className="text-[10px] font-bold uppercase">Local Histograms</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">Grouping directions into small cells captures local structure.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-cyan-400 mb-1">
                            <Shield size={16} />
                            <span className="text-[10px] font-bold uppercase">Normalization</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic">Reduces sensitivity to lighting and contrast variations.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Algorithm Workflow */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Binary size={16} className="text-indigo-500" />
                    2) HOG Algorithm Pipeline
                </h4>
                <div className="space-y-4">
                    {[
                        { step: "1. Gradient Calculation", desc: "Compute fx and fy (Sobel). Find magnitude and orientation for every pixel.", icon: Activity },
                        { step: "2. Orientation Binning", desc: "Divide image into cells (e.g., 8x8). Assign each pixel to an orientation bin.", icon: Grid },
                        { step: "3. Histogram Formation", desc: "Build per-cell histograms weighted by gradient magnitude.", icon: Table },
                        { step: "4. Block Normalization", desc: "Group cells into overlapping blocks (e.g., 2x2 cells). Normalize to combat lighting.", icon: Maximize },
                        { step: "5. Descriptor Formation", desc: "Concatenate all block histograms into a single long feature vector.", icon: Layers }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition-all group">
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

            {/* 3. Machine Learning Pipeline */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Cpu size={16} className="text-indigo-500" />
                    3) HOG with Machine Learning (SVM)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 space-y-4">
                        <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                            <Target size={14} /> Training Phase
                        </div>
                        <p className="text-xs text-zinc-400">
                            Feed HOG features of positive (objects) and negative (background) images into an <span className="text-indigo-400 font-bold underline">SVM classifier</span> to find the optional decision boundary.
                        </p>
                    </div>
                    <div className="p-5 rounded-3xl bg-violet-500/5 border border-violet-500/10 space-y-4">
                        <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
                            <Search size={14} /> Detection Phase
                        </div>
                        <ul className="text-xs space-y-2 text-zinc-500">
                            <li className="flex items-center gap-2"><ArrowRight size={10} className="text-violet-500" /> Sliding Window approach</li>
                            <li className="flex items-center gap-2"><ArrowRight size={10} className="text-violet-500" /> Scale Pyramid for size variance</li>
                            <li className="flex items-center gap-2"><ArrowRight size={10} className="text-violet-500" /> Non-Maximum Suppression (NMS)</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 4. Capabilities & Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    4) Capabilities and Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-[11px]">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block mb-2">Strengths</span>
                        <div className="space-y-1 text-zinc-400 italic">
                            <p>• Robust to illumination/contrast</p>
                            <p>• Simple and efficient implementation</p>
                            <p>• Excels at structured pedestrian detection</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 space-y-2">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block mb-2">Limitations</span>
                        <div className="space-y-1 text-zinc-400 italic">
                            <p>• Struggles with large pose variations</p>
                            <p>• Weaker on complex textures</p>
                            <p>• Views/deep learning outperfoms it today</p>
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
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">Frosted Windows Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500 italic">
                        <p>Imagine viewing a building through many small <span className="text-white font-bold underline decoration-indigo-500/50">frosted windows</span>:</p>
                        <p>You can't see fine details, but you can record the <span className="text-zinc-300 underline">direction of strong lines</span> (vertical, horizontal, diagonal).</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-500 text-center space-y-2 leading-relaxed">
                        <p>"By combining these local direction summaries into a 'directional map', you can recognize the building's structure regardless of lighting."</p>
                        <span className="text-[10px] text-zinc-700 font-bold uppercase">— This is exactly what HOG does.</span>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    HOG Descriptor Framework
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">Function</th>
                                <th className="p-4 font-bold">Key Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { comp: "Gradients", func: "Compute magnitude & orientation", val: "Captures shape/structure" },
                                { comp: "Cells", func: "Divide into small regions", val: "Preserve local patterns" },
                                { comp: "Histograms", func: "Count orientations per cell", val: "Encodes local edge layout" },
                                { comp: "Normalization", func: "Normalize cell groups (blocks)", val: "Robustness to light/contrast" },
                                { comp: "SVM Classifier", func: "Object vs Non-object separator", val: "Final decision boundary" },
                                { comp: "Scale Pyramid", func: "Detect at multiple sizes", val: "Scale invariance (manual)" },
                                { comp: "NMS", func: "Merge overlapping windows", val: "Clean final detection" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.comp}</td>
                                    <td className="p-4 italic">{row.func}</td>
                                    <td className="p-4 text-zinc-500">{row.val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/hog.png"
                    alt="Histogram of Oriented Gradients (HOG)"
                />
            </motion.div>

        </motion.div>
    );
}
