'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    Layers,
    MoveRight,
    Zap,
    MinusCircle,
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

// --- 3.2.5 LAPLACIAN OF GAUSSIAN (LoG) ---
export function LoGContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. What & Why */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. What LoG Is & Why We Use It
                </h4>
                <p className="leading-relaxed">
                    The <strong>Laplacian of Gaussian (LoG)</strong> combines <span className="text-blue-600 dark:text-blue-400 font-bold">Gaussian smoothing</span> (to reduce noise) with the <span className="text-purple-600 dark:text-purple-400 font-bold">Laplacian</span> (2nd derivative) to detect rapid intensity changes. Instead of two separate steps, we convolve with one kernel: <InlineMath math="\nabla^2 G_\sigma" />.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border border-indigo-100 dark:border-indigo-800/30 text-center">
                        <strong className="block mb-1 text-indigo-900 dark:text-indigo-300">Detect Edges & Blobs</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Isotropic (no preferred direction)</span>
                    </div>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border border-indigo-100 dark:border-indigo-800/30 text-center">
                        <strong className="block mb-1 text-indigo-900 dark:text-indigo-300">Less Noise Sensitive</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Than plain Laplacian</span>
                    </div>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border border-indigo-100 dark:border-indigo-800/30 text-center">
                        <strong className="block mb-1 text-indigo-900 dark:text-indigo-300">Multi-Scale Analysis</strong>
                        <span className="text-indigo-700/70 dark:text-indigo-400/70">Vary σ to detect different sizes</span>
                    </div>
                </div>
            </div>

            {/* 2. Mechanism */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Mechanism: How LoG Works
                </h4>
                <div className="flex flex-col md:flex-row items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 font-bold text-xs uppercase">Gaussian (<InlineMath math="G_\sigma" />)</span>
                        <span className="text-[10px] text-zinc-400">Reduce Noise & Set Scale</span>
                    </div>
                    <MoveRight className="text-zinc-300" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 font-bold text-xs uppercase">Laplacian (<InlineMath math="\nabla^2" />)</span>
                        <span className="text-[10px] text-zinc-400">2nd Derivative (Edges)</span>
                    </div>
                    <MoveRight className="text-zinc-300" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase">Zero-Crossings</span>
                        <span className="text-[10px] text-zinc-400">Locate Edges</span>
                    </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-xs text-slate-500 block mb-2">Combined Operation:</span>
                    <span className="font-mono text-sm"><InlineMath math="\text{LoG output} = I * (\nabla^2 G_\sigma)" /></span>
                </div>
            </div>

            {/* 3. Zero Crossings */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Edge Detection by Zero Crossings
                </h4>
                <p className="leading-relaxed">
                    This is the core of the <strong>Marr–Hildreth edge detector</strong>. At sharp transitions, the 2nd derivative changes sign (passes through zero). These <span className="font-bold text-blue-600 dark:text-blue-400">zero crossings</span> mark the edge locations.
                </p>
                <ol className="list-decimal list-inside text-xs space-y-1 pl-2 text-zinc-600 dark:text-zinc-400">
                    <li>Smooth image with Gaussian (implicitly part of LoG).</li>
                    <li>Apply Laplacian (convolve with LoG kernel).</li>
                    <li>Find zero crossings: pixels where sign changes between neighbors.</li>
                </ol>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Result: Thin, ~1-pixel wide edges.</p>
            </div>

            {/* 4. Mexican Hat */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Shape: "Mexican Hat" Operator
                </h4>
                <p className="leading-relaxed">
                    If you plot the LoG kernel in 3D, it has a central bump surrounded by an opposite-sign ring — resembling a <strong>Mexican hat</strong>.
                </p>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <ZoomableImage
                        src="/log.png"
                        alt="Laplacian of Gaussian (Mexican Hat) Visualization"
                        caption="The LoG kernel's 'Mexican Hat' shape. Zero crossings occur at the sign-change boundary."
                    />
                </div>
            </div>

            {/* 5. Applications */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-indigo-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    5. Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
                        <strong className="block text-green-900 dark:text-green-300">General Edge Detection</strong>
                        <span className="text-green-700/70 dark:text-green-400/70">Isotropic, Marr–Hildreth method.</span>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
                        <strong className="block text-green-900 dark:text-green-300">Blob Detection</strong>
                        <span className="text-green-700/70 dark:text-green-400/70">Detects bright/dark spots of a specific size (σ).</span>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
                        <strong className="block text-green-900 dark:text-green-300">Scale-Space Analysis</strong>
                        <span className="text-green-700/70 dark:text-green-400/70">Vary σ: small → fine details, large → coarse structures.</span>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
                        <strong className="block text-green-900 dark:text-green-300">Feature Enhancement</strong>
                        <span className="text-green-700/70 dark:text-green-400/70">Preprocessing for segmentation.</span>
                    </div>
                </div>
            </div>

            {/* 6. Limitations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800/30">
                    <h5 className="font-bold text-orange-900 dark:text-orange-300 text-sm mb-2">Parameter Sensitivity</h5>
                    <p className="text-xs text-orange-800/80 dark:text-orange-300/80">
                        Results depend on σ and threshold. Poor choices → missing/false edges.
                    </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800/30">
                    <h5 className="font-bold text-orange-900 dark:text-orange-300 text-sm mb-2">Computationally Heavier</h5>
                    <p className="text-xs text-orange-800/80 dark:text-orange-300/80">
                        True LoG is more expensive than Sobel/Prewitt. DoG is a faster approximation.
                    </p>
                </div>
            </div>

            {/* 7. Exam Summary */}
            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-slate-500" />
                <div>
                    <strong className="block mb-1 text-slate-900 dark:text-slate-100">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        The LoG filter combines Gaussian smoothing with the Laplacian second derivative. It's implemented by convolving with a single <InlineMath math="\nabla^2 G" /> kernel (the "Mexican Hat"). Edges are detected by finding <strong>zero crossings</strong>. LoG is used in the Marr–Hildreth detector for edge and blob detection. Since it can be expensive, it's often approximated by <strong>Difference of Gaussians (DoG)</strong>.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// --- 3.2.6 DIFFERENCE OF GAUSSIANS (DoG) ---
export function DoGContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Core Idea */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    1. Core Idea of DoG
                </h4>
                <p className="leading-relaxed italic text-zinc-600 dark:text-zinc-400 bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                    "Blur the image twice with two different Gaussians, then <strong>subtract</strong> them to highlight structures of a certain size."
                </p>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                    <span className="font-mono text-sm"><InlineMath math="D(x,y,\sigma) = G(x,y,k\sigma) - G(x,y,\sigma)" /></span>
                    <p className="text-xs text-slate-500 mt-2">where <InlineMath math="k > 1" /> (e.g., 1.6). This subtraction acts as a <strong>band-pass filter</strong>.</p>
                </div>
            </div>

            {/* 2. Relationship to LoG */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Relationship to LoG
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <h5 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-2">DoG ≈ LoG</h5>
                        <p className="text-xs text-indigo-800/80 dark:text-indigo-300/80">
                            When <InlineMath math="k \approx 1.6" />, DoG is a very good approximation of <InlineMath math="\nabla^2 G_\sigma" />.
                        </p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                        <h5 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-2">Why Prefer DoG?</h5>
                        <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                            <strong>Faster</strong>, <strong>simpler</strong>, and produces similar zero-crossing patterns as LoG.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. Mechanism Visual */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Operational Mechanism
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-items-center bg-gradient-to-r from-purple-50 via-zinc-50 to-purple-50 dark:from-purple-900/10 dark:via-zinc-900/50 dark:to-purple-900/10 p-8 rounded-2xl border border-purple-200 dark:border-purple-800/30">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-500 shadow-lg flex items-center justify-center text-2xl font-bold text-zinc-600 dark:text-zinc-300">I</div>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Original</span>
                    </div>

                    <MoveRight className="text-purple-300 dark:text-purple-600" size={28} />

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-800 dark:to-blue-600 shadow-lg blur-[2px] flex items-center justify-center">
                            <span className="text-white font-bold text-xs">σ</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Blur (Small σ)</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <MinusCircle size={32} className="text-rose-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Subtract</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600 shadow-lg blur-[6px] flex items-center justify-center">
                            <span className="text-white font-bold text-xs">kσ</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Blur (Large kσ)</span>
                    </div>
                </div>
                <p className="text-xs text-center text-zinc-500">Result: <strong>D(x,y,σ)</strong> — Highlights edges and blobs with size between σ and kσ.</p>
            </div>

            {/* 4. Band-Pass Filter */}
            <div className="p-5 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800/30 rounded-2xl">
                <h5 className="font-bold text-purple-900 dark:text-purple-200 text-sm mb-3 flex items-center gap-2">
                    <Activity size={18} /> Band-Pass Filter Behavior
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/60 dark:bg-zinc-900/50 rounded-lg text-center">
                        <span className="text-red-600 dark:text-red-400 font-bold block mb-1">❌ Low Frequencies</span>
                        <span className="text-zinc-500">Removed (both blurs share)</span>
                    </div>
                    <div className="p-3 bg-white/60 dark:bg-zinc-900/50 rounded-lg text-center">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">✓ Mid Frequencies</span>
                        <span className="text-zinc-500">Enhanced (edges/blobs)</span>
                    </div>
                    <div className="p-3 bg-white/60 dark:bg-zinc-900/50 rounded-lg text-center">
                        <span className="text-red-600 dark:text-red-400 font-bold block mb-1">❌ High Frequencies</span>
                        <span className="text-zinc-500">Suppressed (noise)</span>
                    </div>
                </div>
            </div>

            {/* 5. Visualization */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    4. Visualization
                </h4>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
                    <ZoomableImage
                        src="/dog.png"
                        alt="Difference of Gaussians (DoG) Visualization"
                        caption="DoG output shows enhanced edges and blob-like structures by subtracting two Gaussian-blurred images."
                    />
                </div>
            </div>

            {/* 6. Applications */}
            <div className="space-y-4">
                <h4 className="font-bold border-l-4 border-purple-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    5. Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-xl border border-amber-100 dark:border-amber-800/30 shadow-sm hover:shadow-md transition-shadow">
                        <Layers size={20} className="text-amber-600 dark:text-amber-400 mb-2" />
                        <strong className="block text-amber-900 dark:text-amber-300">Edge Enhancement</strong>
                        <span className="text-amber-700/70 dark:text-amber-400/70">Highlights contours and details.</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-xl border border-sky-100 dark:border-sky-800/30 shadow-sm hover:shadow-md transition-shadow">
                        <Zap size={20} className="text-sky-600 dark:text-sky-400 mb-2" />
                        <strong className="block text-sky-900 dark:text-sky-300">Scale-Space Analysis</strong>
                        <span className="text-sky-700/70 dark:text-sky-400/70">Vary σ for multi-scale features.</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 rounded-xl border border-rose-100 dark:border-rose-800/30 shadow-sm hover:shadow-md transition-shadow">
                        <Activity size={20} className="text-rose-600 dark:text-rose-400 mb-2" />
                        <strong className="block text-rose-900 dark:text-rose-300">SIFT Keypoints</strong>
                        <span className="text-rose-700/70 dark:text-rose-400/70">Core of blob/keypoint detection.</span>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm hover:shadow-md transition-shadow">
                        <Layers size={20} className="text-emerald-600 dark:text-emerald-400 mb-2" />
                        <strong className="block text-emerald-900 dark:text-emerald-300">Feature Extraction</strong>
                        <span className="text-emerald-700/70 dark:text-emerald-400/70">Preprocessing for recognition.</span>
                    </div>
                </div>
            </div>

            {/* 7. Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30">
                    <h5 className="font-bold text-green-900 dark:text-green-300 text-sm mb-3 flex items-center gap-2">
                        <CheckCircle2 size={16} /> Advantages
                    </h5>
                    <ul className="space-y-2 text-xs text-green-800/80 dark:text-green-300/80">
                        <li className="flex gap-2"><span className="text-green-500">•</span> Computationally efficient (2 blurs + 1 subtract)</li>
                        <li className="flex gap-2"><span className="text-green-500">•</span> Good approximation to LoG</li>
                        <li className="flex gap-2"><span className="text-green-500">•</span> Naturally multi-scale</li>
                        <li className="flex gap-2"><span className="text-green-500">•</span> Core of SIFT algorithm</li>
                    </ul>
                </div>
                <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800/30">
                    <h5 className="font-bold text-orange-900 dark:text-orange-300 text-sm mb-3 flex items-center gap-2">
                        <MinusCircle size={16} /> Limitations
                    </h5>
                    <ul className="space-y-2 text-xs text-orange-800/80 dark:text-orange-300/80">
                        <li className="flex gap-2"><span className="text-orange-500">•</span> Sensitive to σ and k choices</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span> Noise at small σ values</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span> No built-in edge thinning (unlike Canny)</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span> Often needs post-processing</li>
                    </ul>
                </div>
            </div>

            {/* 8. Exam Summary */}
            <div className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-purple-50 dark:from-slate-900 dark:to-purple-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-purple-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        The <strong>Difference of Gaussians (DoG)</strong> approximates the LoG by subtracting two Gaussian-blurred images: <InlineMath math="D = G_{k\sigma} - G_\sigma" />. It acts as a <strong>band-pass filter</strong>, enhancing structures between the two scales. DoG is faster than LoG and is the core of <strong>SIFT</strong> for blob/keypoint detection. However, it requires careful parameter selection and often needs additional post-processing for clean edges.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
