'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Maximize,
    MousePointer2,
    Scissors,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    RefreshCw,
    BoxSelect,
    Image as ImageIcon,
    Target,
    PenTool
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

export function GrabCutContent() {
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
                <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">GrabCut Algorithm</span>
                    A powerful, iterative semi-automatic method for separating foreground objects from the background. It combines <span className="text-amber-400 font-bold">Gaussian Mixture Models (GMMs)</span> and <span className="text-amber-400 font-bold">Graph Cuts</span> to find the optimal segmentation.
                </p>
            </motion.div>

            {/* 1. Core Mechanism */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-amber-500" />
                    1) Core Mechanism
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* A & B */}
                    <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 group">
                            <div className="flex items-center gap-2 text-amber-400 mb-1">
                                <MousePointer2 size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">A. User Initialization</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                The user provides a guide (Bounding Box or Scribbles) to give the algorithm a starting hint of FG vs. BG.
                            </p>
                        </div>
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 group">
                            <div className="flex items-center gap-2 text-rose-400 mb-1">
                                <Target size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">B. GMM Modeling</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Two GMMs are built (one for FG, one for BG). Parameters are learned via the <span className="text-zinc-300 font-bold">EM Algorithm</span>.
                            </p>
                        </div>
                    </div>

                    {/* C & D */}
                    <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 group">
                            <div className="flex items-center gap-2 text-blue-400 mb-1">
                                <Maximize size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">C. Graph Cut (Min-Cut)</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Minimizes energy based on data (likelihood) and smoothness (boundary penalty) terms. Separates graph via Max-Flow/Min-Cut.
                            </p>
                        </div>
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 group">
                            <div className="flex items-center gap-2 text-emerald-400 mb-1">
                                <RefreshCw size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">D. Iterative Refinement</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                                Repeats modeling and cutting until the result stabilizes.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. OpenCV Usage */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <BoxSelect size={16} className="text-amber-500" />
                    2) Practical Usage
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 font-mono text-xs">
                    <div className="flex items-center gap-2 text-amber-500 mb-2">
                        <PenTool size={16} /> <span className="font-bold">cv2.grabCut() Modes</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                            <span className="text-amber-400 font-bold block mb-1">cv2.GC_INIT_WITH_RECT</span>
                            <p className="text-zinc-500 italic">Fast start using a simple bounding box.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                            <span className="text-amber-400 font-bold block mb-1">cv2.GC_INIT_WITH_MASK</span>
                            <p className="text-zinc-500 italic">Precise refinement using labels: Sure/Probable FG/BG.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Strengths & Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-amber-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-amber-500" />
                    3) Strengths & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">Strengths</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li>Accurate boundaries for <span className="text-zinc-300 font-bold">complex shapes</span>.</li>
                            <li>Minimal user input required ("One Box").</li>
                            <li>Superior to simple thresholding mechanisms.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-3">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Limitations</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li>Sensitive to initial <span className="text-zinc-300 font-bold">bounding box</span> quality.</li>
                            <li>Struggles with <span className="text-zinc-300 font-bold">low contrast</span> or similar FG/BG colors.</li>
                            <li>Can be computationally slower than basic methods.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Scissors size={80} className="text-amber-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-amber-400 uppercase tracking-widest text-xs">Smart Scissors Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic leading-relaxed">
                    <p>Cutting a person from a magazine. Start with a rough rectangle cut.</p>
                    <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 text-center font-medium relative shadow-xl">
                        <p className="text-zinc-600">
                            "The scissors learn the person's colors vs background. If they cut wrong, you add a small <span className="text-amber-400 font-bold">scribble</span> correction, and they try again until perfect."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-amber-500/20 pb-2">
                    <Table size={16} className="text-amber-500" />
                    GrabCut Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Component</th>
                                <th className="p-4 font-bold">Role</th>
                                <th className="p-4 font-bold">Effect</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { c: "User Input", r: "Rough FG/BG Hint", e: "Initial Bounding Box / Scribbles" },
                                { c: "GMMs", r: "Color Modeling", e: "Probability of FG vs BG" },
                                { c: "EM Algorithm", r: "Parameter Learning", e: "Optimizes GMM accuracy" },
                                { c: "Graph Cut", r: "Segmentation Optimization", e: "Best boundary via Min-Cut" },
                                { c: "Iteration", r: "Refinement Loop", e: "Improves result until stable" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-amber-500/5 transition-colors">
                                    <td className="p-4 font-bold text-amber-400 uppercase tracking-tighter">{row.c}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.r}</td>
                                    <td className="p-4 text-zinc-600 font-medium">{row.e}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/grab.png"
                    alt="GrabCut Foreground Extraction Process"
                />
            </motion.div>

        </motion.div>
    );
}

