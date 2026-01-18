'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Maximize,
    Zap,
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
    ScanSearch,
    Puzzle,
    Unlink,
    Link as LinkIcon,
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

export function EdgeBasedSegmentationContent() {
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
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Edge-Based Segmentation</span>
                    Partitions an image by identifying <span className="text-indigo-400 font-bold">object boundaries</span>—locations where intensity, color, or texture change abruptly.
                    These contours typically represent depth discontinuities, orientation changes, or material boundaries.
                </p>
            </motion.div>

            {/* 1. Main Stages */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-indigo-500" />
                    Main Stages of Edge-Based Segmentation
                </h4>

                <div className="space-y-4">
                    {/* Stage 1 */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-all">
                            <Activity size={60} className="text-indigo-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold">01</span>
                            <h5 className="text-xs font-bold text-white uppercase tracking-widest">Edge Detection</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed pr-10">
                            Uses derivative-based operators (Sobel, Prewitt, Canny) to compute gradient magnitude and find strong local changes.
                        </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-all">
                            <ScanSearch size={60} className="text-violet-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-400 text-[10px] font-bold">02</span>
                            <h5 className="text-xs font-bold text-white uppercase tracking-widest">Thresholding</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed pr-10">
                            Apply a threshold to the gradient map: strong changes become edge pixels, while weak responses are discarded to form a binary edge map.
                        </p>
                    </div>

                    {/* Stage 3 */}
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-all">
                            <LinkIcon size={60} className="text-emerald-400" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">03</span>
                            <h5 className="text-xs font-bold text-white uppercase tracking-widest">Linking & Refinement</h5>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed pr-10">
                            Reconnects broken or noisy edges using techniques like <span className="text-zinc-300 font-bold">Hough Transform</span> or morphological operations (dilation/closing).
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 2. Strengths and Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    Strengths and Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">Strengths</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Structural Insight:</span> Provides a compact outline of the scene.</li>
                            <li><span className="text-zinc-300 font-bold">Boundary Precision:</span> Excellent for high-contrast object detection.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Limitations</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Noise Sensitivity:</span> Sharp noise spikes can be mistaken for edges.</li>
                            <li><span className="text-zinc-300 font-bold">Fragmentation:</span> Often results in incomplete, "leaky" boundaries.</li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-center">
                    <p className="text-[10px] text-orange-400/80 font-medium italic">
                        <Info size={12} className="inline mr-2 mb-0.5" />
                        Practical Note: Usually combined with <span className="text-orange-400 underline font-bold">region-based methods</span> to ensure both boundary accuracy and internal consistency.
                    </p>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Puzzle size={80} className="text-indigo-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">The Glued Jigsaw Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic">
                    <p>Imagine a giant jigsaw puzzle glued together and painted entirely green. You can't separate pieces by color or texture.</p>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600">"You feel for the <span className="text-indigo-400 font-bold underline decoration-indigo-500/30 font-serif">cracks</span> between pieces. Edge-based segmentation finds these 'digital cracks' (sharp intensity shifts) to locate objects."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Edge-Based Segmentation Pipeline
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Step</th>
                                <th className="p-4 font-bold">Action</th>
                                <th className="p-4 font-bold">Output</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { s: "1. Edge Detection", a: "Gradient calculation (Sobel/Canny)", o: "Edge Strength Map" },
                                { s: "2. Thresholding", a: "Discard weak responses", o: "Binary Edge Map" },
                                { s: "3. Linking/Refinement", a: "Hough/Morphology connections", o: "Continuous Boundaries" },
                                { s: "4. Combination", a: "Add region-based techniques", o: "Full Segmentation" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 uppercase tracking-tighter">{row.s}</td>
                                    <td className="p-4 italic">{row.a}</td>
                                    <td className="p-4 text-zinc-500 font-medium">{row.o}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/ebs.png"
                    alt="Edge-Based Segmentation Stages"
                />
            </motion.div>

        </motion.div>
    );
}
