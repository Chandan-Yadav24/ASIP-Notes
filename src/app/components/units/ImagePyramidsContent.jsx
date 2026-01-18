'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Layers,
    ArrowDown,
    Minus,
    CheckCircle2,
    Zap,
    Triangle,
    Shapes,
    MoveRight
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

// --- 3.3.0 IMAGE PYRAMIDS OVERVIEW ---
export function ImagePyramidsOverview() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* Intro */}
            <div className="space-y-4">
                <p className="leading-relaxed text-base">
                    <strong>Image pyramids</strong> represent an image at <span className="text-indigo-600 dark:text-indigo-400 font-bold">multiple resolutions</span> simultaneously. Instead of working only on the full-resolution image, you create a stack (a "pyramid") of images, each one smaller and smoother than the previous. This is essential for <strong>multi-scale analysis</strong>.
                </p>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <ZoomableImage
                        src="/imgpr.png"
                        alt="Image Pyramid Concept"
                        caption="An image pyramid: each level is a downsampled, smoother version of the previous."
                    />
                </div>
            </div>

            {/* 1. Gaussian Pyramid */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Triangle className="w-5 h-5 text-blue-500" /> 1. Gaussian Pyramid
                </h4>
                <p className="leading-relaxed">
                    A sequence of images where each level is a <strong>smoothed + downsampled</strong> version of the previous. Shows how the image looks at increasingly coarser resolutions.
                </p>
                <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                    <h5 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-3">Construction Steps</h5>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-center text-xs">
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-blue-600">1. Gaussian Blur</span>
                            <span className="text-zinc-500">Smooth with <InlineMath math="G_\sigma" /></span>
                        </div>
                        <MoveRight className="text-blue-300 hidden md:block" size={20} />
                        <ArrowDown className="text-blue-300 md:hidden" size={20} />
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-blue-600">2. Downsample</span>
                            <span className="text-zinc-500">Keep every 2nd pixel</span>
                        </div>
                        <MoveRight className="text-blue-300 hidden md:block" size={20} />
                        <ArrowDown className="text-blue-300 md:hidden" size={20} />
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-blue-600">3. Repeat</span>
                            <span className="text-zinc-500">Until top of pyramid</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded text-center">Image Blending</div>
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded text-center">Texture Analysis</div>
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded text-center">Scale-Invariant Detection</div>
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded text-center">Coarse-to-Fine Processing</div>
                </div>
            </div>

            {/* 2. Laplacian Pyramid */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-500" /> 2. Laplacian Pyramid
                </h4>
                <p className="leading-relaxed">
                    Captures the <strong>details (high-frequency info)</strong> lost when going from one Gaussian level to the next. Think of it as a "detail pyramid."
                </p>
                <div className="p-5 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                    <h5 className="font-bold text-purple-900 dark:text-purple-300 text-sm mb-3">Construction (from Gaussian)</h5>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-center text-xs">
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-purple-600">1. Upsample <InlineMath math="G_{i+1}" /></span>
                            <span className="text-zinc-500">Back to size of <InlineMath math="G_i" /></span>
                        </div>
                        <MoveRight className="text-purple-300 hidden md:block" size={20} />
                        <ArrowDown className="text-purple-300 md:hidden" size={20} />
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-purple-600">2. Subtract</span>
                            <span className="text-zinc-500"><InlineMath math="L_i = G_i - \uparrow G_{i+1}" /></span>
                        </div>
                        <MoveRight className="text-purple-300 hidden md:block" size={20} />
                        <ArrowDown className="text-purple-300 md:hidden" size={20} />
                        <div className="flex flex-col items-center gap-1 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                            <span className="font-bold text-purple-600">3. Details!</span>
                            <span className="text-zinc-500">What was lost</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 text-center">
                        <strong className="block text-purple-800 dark:text-purple-300">Image Compression</strong>
                        <span className="text-zinc-500">Details compress well</span>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 text-center">
                        <strong className="block text-purple-800 dark:text-purple-300">Multi-band Blending</strong>
                        <span className="text-zinc-500">Smooth image joins</span>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 text-center">
                        <strong className="block text-purple-800 dark:text-purple-300">Edge Manipulation</strong>
                        <span className="text-zinc-500">Enhance/suppress scales</span>
                    </div>
                </div>
            </div>

            {/* 3. Morphological Pyramid */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Shapes className="w-5 h-5 text-emerald-500" /> 3. Morphological Pyramid
                </h4>
                <p className="leading-relaxed">
                    Uses <strong>morphological operations</strong> (erosion, dilation) instead of linear filters. Focuses on <span className="text-emerald-600 dark:text-emerald-400 font-bold">shapes and structures</span>, not just intensity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                        <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Image Segmentation</strong>
                        <span className="text-emerald-700/70 dark:text-emerald-400/70">Separate objects at multiple scales.</span>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                        <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Shape Analysis</strong>
                        <span className="text-emerald-700/70 dark:text-emerald-400/70">How shapes change with scale.</span>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                        <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Feature Extraction</strong>
                        <span className="text-emerald-700/70 dark:text-emerald-400/70">Skeletons, boundaries stable across scales.</span>
                    </div>
                </div>
            </div>

            {/* 4. Why Important */}
            <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                <h4 className="font-bold text-amber-900 dark:text-amber-200 text-base mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Why Image Pyramids Are Important
                </h4>
                <ul className="space-y-2 text-xs text-amber-800/90 dark:text-amber-300/90">
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Objects can appear small, medium, or large in the same image.</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Detect small details at fine scales, large structures at coarse scales.</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Efficiently process images (fewer pixels at higher levels).</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" /> Bridge from low-level filtering to high-level recognition.</li>
                </ul>
            </div>

            {/* Summary Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                    <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                            <th className="p-3 text-left font-bold border-b border-zinc-200 dark:border-zinc-700">Pyramid Type</th>
                            <th className="p-3 text-left font-bold border-b border-zinc-200 dark:border-zinc-700">What It Stores</th>
                            <th className="p-3 text-left font-bold border-b border-zinc-200 dark:border-zinc-700">Key Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-100 dark:border-zinc-800">
                            <td className="p-3 font-medium text-blue-700 dark:text-blue-400">Gaussian</td>
                            <td className="p-3">Smoothed, downsampled images</td>
                            <td className="p-3">Multi-scale representation</td>
                        </tr>
                        <tr className="border-b border-zinc-100 dark:border-zinc-800">
                            <td className="p-3 font-medium text-purple-700 dark:text-purple-400">Laplacian</td>
                            <td className="p-3">Details/edges between scales</td>
                            <td className="p-3">Compression, Blending</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium text-emerald-700 dark:text-emerald-400">Morphological</td>
                            <td className="p-3">Shape/structure at scales</td>
                            <td className="p-3">Segmentation, Shape analysis</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}

// --- 3.3.1 GAUSSIAN PYRAMID (DETAILED) ---
export function GaussianPyramidContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Intuition */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. Intuition: What Is a Gaussian Pyramid?
                </h4>
                <p className="leading-relaxed">
                    Imagine you take a photo and then: <strong>blur it slightly and shrink it</strong> → Level 1. Blur and shrink again → Level 2. Repeat... If you stack all these versions from largest to smallest, you get a <span className="text-blue-600 dark:text-blue-400 font-bold">pyramid of images</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-center">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-md"></div>
                        <strong className="block text-blue-800 dark:text-blue-300">Bottom (Level 0)</strong>
                        <span className="text-zinc-500">Full resolution, detailed</span>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg shadow-md blur-[1px]"></div>
                        <strong className="block text-blue-800 dark:text-blue-300">Middle Levels</strong>
                        <span className="text-zinc-500">Medium resolution</span>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                        <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg shadow-md blur-[2px]"></div>
                        <strong className="block text-blue-800 dark:text-blue-300">Top</strong>
                        <span className="text-zinc-500">Tiny, smooth, global structure</span>
                    </div>
                </div>
            </div>

            {/* 2. Construction */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Step-by-Step Construction
                </h4>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl border border-blue-200 dark:border-blue-800/30">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center text-xs">
                        <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <span className="text-2xl font-bold text-blue-600">G₀</span>
                            <span className="font-bold text-zinc-700 dark:text-zinc-300">Original Image</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <MoveRight className="text-blue-400 hidden md:block" size={28} />
                            <ArrowDown className="text-blue-400 md:hidden" size={28} />
                            <span className="text-[10px] text-blue-500 font-bold">Blur + ↓2</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <span className="text-xl font-bold text-blue-500">G₁</span>
                            <span className="font-bold text-zinc-600 dark:text-zinc-400">Half Size</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <MoveRight className="text-blue-400 hidden md:block" size={28} />
                            <ArrowDown className="text-blue-400 md:hidden" size={28} />
                            <span className="text-[10px] text-blue-500 font-bold">Blur + ↓2</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <span className="text-lg font-bold text-blue-400">G₂</span>
                            <span className="font-bold text-zinc-500">Quarter Size</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-blue-300 text-xl">...</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
                            <span className="text-sm font-bold text-blue-300">Gₙ</span>
                            <span className="font-bold text-zinc-400 text-[10px]">Tiny</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                    <span className="font-mono text-sm"><InlineMath math="G_{i+1} = \text{Downsample}(G_i * G_\sigma)" /></span>
                </div>
            </div>

            {/* 3. Why Gaussian? */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Why Gaussian Smoothing Before Downsampling?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-800/30">
                        <h5 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2">❌ Without Blurring</h5>
                        <p className="text-xs text-red-800/80 dark:text-red-300/80">
                            High frequencies <strong>alias</strong> into wrong patterns. Creates artifacts and incorrect structures.
                        </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30">
                        <h5 className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">✓ With Gaussian Blur</h5>
                        <p className="text-xs text-green-800/80 dark:text-green-300/80">
                            Attenuates high frequencies, making the image <strong>"safe" to downsample</strong>. Produces clean, meaningful low-res versions.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Visualization */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Visualization
                </h4>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
                    <ZoomableImage
                        src="/gauspr.png"
                        alt="Gaussian Pyramid Visualization"
                        caption="A Gaussian Pyramid: each level is blurred and downsampled from the previous."
                    />
                </div>
            </div>

            {/* 5. Properties */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    5. Properties & Advantages
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Zap size={18} className="text-indigo-500 mb-2" />
                        <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Efficient & Compact</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Each level has 1/4 the pixels. Total is ~1.33x original.</span>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Layers size={18} className="text-indigo-500 mb-2" />
                        <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Multi-Scale Processing</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Analyze at coarse level first, refine at finer levels.</span>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <Triangle size={18} className="text-indigo-500 mb-2" />
                        <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Basis for Laplacian</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Laplacian pyramid = differences between Gaussian levels.</span>
                    </div>
                </div>
            </div>

            {/* 6. Applications */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-blue-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    6. Applications
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="p-3 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30 text-center shadow-sm">
                        <strong className="block text-sky-800 dark:text-sky-300">Image Blending</strong>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30 text-center shadow-sm">
                        <strong className="block text-sky-800 dark:text-sky-300">Texture Analysis</strong>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30 text-center shadow-sm">
                        <strong className="block text-sky-800 dark:text-sky-300">SIFT Features</strong>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-lg border border-sky-100 dark:border-sky-800/30 text-center shadow-sm">
                        <strong className="block text-sky-800 dark:text-sky-300">Coarse-to-Fine Search</strong>
                    </div>
                </div>
            </div>

            {/* 7. Exam Summary */}
            <div className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-blue-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        A <strong>Gaussian Pyramid</strong> is a multi-scale representation where each level is obtained by <strong>Gaussian smoothing + subsampling</strong>. Starting from the original, this process is repeated iteratively, producing progressively lower-resolution images. It provides an efficient framework for multi-scale processing (blending, texture, features) and is the foundation for <strong>Laplacian pyramids</strong>.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
