'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Grid3X3,
    ArrowRight,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';
import { InlineMath } from 'react-katex';
import ZoomableImage from '../ZoomableImage';

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

// Helper for Matrix Grid
const KernelGrid = ({ data, label, highlightColor = "blue" }) => (
    <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider font-mono">{label}</span>
        <div className={`grid ${data.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-inner`}>
            {data.flat().map((val, i) => (
                <div
                    key={i}
                    className={`
                        w-8 h-8 rounded flex items-center justify-center text-xs font-bold font-mono transition-all
                        ${val === 0
                            ? 'bg-white dark:bg-zinc-900/50 text-zinc-300'
                            : val > 0
                                ? `bg-${highlightColor}-500 text-white shadow-sm`
                                : `bg-${highlightColor}-600 text-white shadow-sm`
                        }
                    `}
                >
                    {val}
                </div>
            ))}
        </div>
    </div>
);

// --- 3.2.1 SOBEL ---
export function SobelContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. What it does */}
            <div className="space-y-4">
                <h4 className="font-ex border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. What the Sobel Operator Does
                </h4>
                <p className="leading-relaxed">
                    The Sobel operator is an edge detection method that calculates the approximate <strong>gradient</strong> of image intensity. It finds boundaries where brightness changes rapidly, which typically correspond to object outlines. Mathematically, it approximates the first derivative in both <span className="text-blue-600 dark:text-blue-400 font-bold">Horizontal (X)</span> and <span className="text-emerald-600 dark:text-emerald-400 font-bold">Vertical (Y)</span> directions.
                </p>
            </div>

            {/* 2. Mechanism & Kernels */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. How it Works
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                    It uses two 3x3 convolution kernels. Notice the center row/column is weighted by <strong>2</strong> to provide smoothing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <KernelGrid
                        label="Gx (Vertical Edges)"
                        data={[[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]}
                        highlightColor="blue"
                    />
                    <KernelGrid
                        label="Gy (Horizontal Edges)"
                        data={[[-1, -2, -1], [0, 0, 0], [1, 2, 1]]}
                        highlightColor="emerald"
                    />
                </div>
            </div>

            {/* 2.2 Math */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-4">
                <h5 className="font-bold text-slate-900 dark:text-slate-200 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    Gradient Magnitude & Direction
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <span className="text-xs uppercase font-bold text-slate-400">Magnitude (Strength)</span>
                        <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg custom-math text-center text-lg">
                            <InlineMath math="G = \sqrt{G_x^2 + G_y^2}" />
                        </div>
                        <p className="text-[10px] text-slate-500">
                            Or approx: <InlineMath math="|G_x| + |G_y|" />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs uppercase font-bold text-slate-400">Orientation (Angle)</span>
                        <div className="p-3 bg-white dark:bg-zinc-950 rounded-lg custom-math text-center text-lg">
                            <InlineMath math="\theta = \arctan(G_y / G_x)" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30">
                    <h5 className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">Computational Efficiency</h5>
                    <p className="text-xs text-green-800/80 dark:text-green-300/80">
                        Uses small, fixed 3x3 kernels. Fast implementation suitable for real-time systems.
                    </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-800/30">
                    <h5 className="font-bold text-purple-900 dark:text-purple-300 text-sm mb-2">Built-in Smoothing</h5>
                    <p className="text-xs text-purple-800/80 dark:text-purple-300/80">
                        The `[1, 2, 1]` weights act like a Gaussian smooth, making it less sensitive to noise than pure differences.
                    </p>
                </div>
            </div>

            {/* 4. Visualization & Applications */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Applications & Visualization
                </h4>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <ZoomableImage
                        src="/sobel.png"
                        alt="Sobel Edge Detection Example"
                        caption="Sobel Filter producing an Edge Map from an input image."
                    />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <li className="flex gap-2 items-center p-2 bg-zinc-50 dark:bg-zinc-800 rounded">
                        <ArrowRight size={12} /> Feature Extraction
                    </li>
                    <li className="flex gap-2 items-center p-2 bg-zinc-50 dark:bg-zinc-800 rounded">
                        <ArrowRight size={12} /> Image Segmentation
                    </li>
                    <li className="flex gap-2 items-center p-2 bg-zinc-50 dark:bg-zinc-800 rounded">
                        <ArrowRight size={12} /> Pre-processing (Detection)
                    </li>
                </ul>
            </div>

            {/* 5. Summary */}
            <div className="flex gap-4 items-start p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 text-amber-900 dark:text-amber-200 text-sm">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <p>
                    <strong>Summary:</strong> Sobel is fast, simple, and effective. It combines smoothing with differentiation to detect edges robustly, making it a standard "first step" in computer vision.
                </p>
            </div>
        </motion.div>
    );
}

// --- 3.2.2 PREWITT ---
// --- 3.2.2 PREWITT ---
export function PrewittContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. What it does */}
            <div className="space-y-4">
                <h4 className="font-ex border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. What the Prewitt Operator Does
                </h4>
                <p className="leading-relaxed">
                    The Prewitt operator is a discrete differentiation operator, similar to Sobel, used to compute an approximation of the gradient of the image intensity function. It detects Vertical and Horizontal edges by calculating the difference between corresponding pixel intensities.
                </p>
            </div>

            {/* 2. Mechanism & Kernels */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Mechanism & Kernels
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Unlike Sobel, the Prewitt operator uses <strong>simple averaging</strong> (weights of 1) rather than weighted averaging (1-2-1). This makes it computationally slightly cheaper but implies less smoothing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <KernelGrid
                        label="Gx (Vertical)"
                        data={[[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]]}
                        highlightColor="emerald"
                    />
                    <KernelGrid
                        label="Gy (Horizontal)"
                        data={[[-1, -1, -1], [0, 0, 0], [1, 1, 1]]}
                        highlightColor="emerald"
                    />
                </div>
            </div>

            {/* 3. Comparisons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                    <h5 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-2">Simplicity</h5>
                    <p className="text-xs text-blue-800/80 dark:text-blue-300/80">
                        Uses uniform weights [1, 1, 1], treating all neighbors equally.
                    </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800/30">
                    <h5 className="font-bold text-orange-900 dark:text-orange-300 text-sm mb-2">Noise Sensitivity</h5>
                    <p className="text-xs text-orange-800/80 dark:text-orange-300/80">
                        Slightly more sensitive to noise than Sobel because it lacks the central-pixel weighting that approximates a Gaussian smooth.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// --- 3.2.3 ROBERTS ---
export function RobertsContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. What it does */}
            <div className="space-y-4">
                <h4 className="font-ex border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. What the Roberts Operator Does
                </h4>
                <p className="leading-relaxed">
                    The Roberts Cross operator is one of the oldest and simplest edge detectors. It approximates the gradient of an image through discrete differentiation, achieved by computing the sum of the squares of the differences between <strong>diagonally adjacent</strong> pixels.
                </p>
            </div>

            {/* 2. Mechanism & Kernels */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-rose-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Mechanism & Kernels
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                    It uses very small <strong>2x2</strong> convolution kernels designed to respond maximally to edges running at 45° to the pixel grid.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <KernelGrid
                        label="Gx (+45°)"
                        data={[[1, 0], [0, -1]]}
                        highlightColor="rose"
                    />
                    <KernelGrid
                        label="Gy (-45°)"
                        data={[[0, 1], [-1, 0]]}
                        highlightColor="rose"
                    />
                </div>
            </div>

            {/* 3. Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30">
                    <h5 className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">Simplicity & Speed</h5>
                    <p className="text-xs text-green-800/80 dark:text-green-300/80">
                        Only 2x2. Extremely fast to compute, historically useful when computing power was very limited.
                    </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-800/30">
                    <h5 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2">High Noise Sensitivity</h5>
                    <p className="text-xs text-red-800/80 dark:text-red-300/80">
                        <strong>Critical Limitation:</strong> Due to the small kernel size and lack of averaging, it is extremely sensitive to noise. Rarely used in modern applications.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
