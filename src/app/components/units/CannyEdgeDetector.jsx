'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Activity,
    ArrowDown,
    Filter,
    Layers,
    Binary,
    Link,
    CheckCircle2,
    Target,
    Zap,
    ShieldCheck
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
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    }
};

const StepCard = ({ number, title, icon: Icon, color, children }) => (
    <motion.div
        variants={itemVariants}
        className={`relative pl-8 pb-12 border-l-2 border-${color}-200 dark:border-${color}-900 last:border-l-0 last:pb-0`}
    >
        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${color}-500 ring-4 ring-white dark:ring-zinc-950 flex items-center justify-center`}>
            {/* Dot */}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <div className={`p-2 rounded-lg bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`}>
                    <Icon size={18} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
                    <span className="text-zinc-400 font-mono mr-2 text-sm">Step {number}</span>{title}
                </h4>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-3">
                {children}
            </div>
        </div>
    </motion.div>
);

export function CannyEdgeDetector() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Goals */}
            <div className="space-y-4">
                <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                    <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Goals & Motivation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100">1. Good Detection</span>
                            <span className="text-xs text-zinc-500">Maximize true positives, minimize false noise edges.</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100">2. Good Localization</span>
                            <span className="text-xs text-zinc-500">Edges should be close to true physical boundaries.</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100">3. Single Response</span>
                            <span className="text-xs text-zinc-500">One edge = one thin line. No thick/multiple responses.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Steps Pipeline */}
            <div className="mt-8 ml-2">
                <h3 className="font-bold text-lg mb-6 text-zinc-900 dark:text-zinc-100">The 5-Stage Canny Pipeline</h3>

                <StepCard number="1" title="Gaussian Smoothing" icon={Filter} color="blue">
                    <p>The input image is first blurred with a Gaussian filter (<InlineMath math="G_\sigma" />) to remove noise.</p>
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded border border-zinc-200 dark:border-zinc-800 text-center font-mono text-xs text-zinc-500">
                        <InlineMath math="I_{smooth} = I * G_\sigma" />
                    </div>
                </StepCard>

                <StepCard number="2" title="Gradient Computation" icon={Activity} color="indigo">
                    <p>Compute intensity gradients <InlineMath math="G_x, G_y" /> (often via Sobel). Calculate Strength (<InlineMath math="M" />) and Direction (<InlineMath math="\theta" />).</p>
                    <div className="flex gap-4 justify-center text-xs">
                        <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Magnitude <InlineMath math="M = \sqrt{G_x^2 + G_y^2}" /></span>
                        <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Angle <InlineMath math="\theta = \arctan(G_y/G_x)" /></span>
                    </div>
                </StepCard>

                <StepCard number="3" title="Non-Maximum Suppression (NMS)" icon={ArrowDown} color="purple">
                    <p><strong>Edge Thinning:</strong> Checks if a pixel is the local maximum along its gradient direction.</p>
                    <ul className="list-disc list-inside text-xs pl-2 space-y-1">
                        <li>If it is a local peak → Keep it.</li>
                        <li>If neighbors are stronger → Suppress it (set to 0).</li>
                    </ul>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-xs mt-2">Result: Thin, 1-pixel wide edges.</p>
                </StepCard>

                <StepCard number="4" title="Double Thresholding" icon={Binary} color="pink">
                    <p>Classifies pixels into 3 categories using High (<InlineMath math="T_H" />) and Low (<InlineMath math="T_L" />) thresholds:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-center mt-2">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 p-2 rounded">
                            Strong (<InlineMath math="M \ge T_H" />)
                        </div>
                        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 p-2 rounded">
                            Weak (<InlineMath math="T_L \le M < T_H" />)
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-800 p-2 rounded">
                            Non-Edge (<InlineMath math="M < T_L" />)
                        </div>
                    </div>
                </StepCard>

                <StepCard number="5" title="Edge Tracking by Hysteresis" icon={Link} color="emerald">
                    <p>Finalizes the edges by linking:</p>
                    <ul className="list-disc list-inside text-xs pl-2 space-y-1">
                        <li><strong>Keep</strong> Weak edges only if they connect to Strong edges.</li>
                        <li><strong>Discard</strong> isolated Weak edges (likely noise).</li>
                    </ul>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-xs mt-2">Ensures continuity while rejecting noise.</p>
                </StepCard>
            </div>

            {/* 3. Strengths & Visualization */}
            <div className="space-y-6">
                <h4 className="font-bold border-l-4 border-emerald-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    3. Strengths & Visualization
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h5 className="font-bold flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100">
                            <ShieldCheck className="text-emerald-500" size={18} /> Noise Robustness
                        </h5>
                        <p className="text-xs text-zinc-500">Gaussian smoothing + Hysteresis makes it much cleaner than raw Sobel.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h5 className="font-bold flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100">
                            <Zap className="text-amber-500" size={18} /> Best-in-Class
                        </h5>
                        <p className="text-xs text-zinc-500">Commonly used as the "Gold Standard" or reference algorithm in CV.</p>
                    </div>
                </div>

                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <ZoomableImage
                        src="/canny.png"
                        alt="Canny Edge Detection Output"
                        caption="Canny produces thin, continuous edges with very low noise."
                    />
                </div>
            </div>

            {/* 4. Exam Summary */}
            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-slate-500" />
                <div>
                    <strong className="block mb-1 text-slate-900 dark:text-slate-100">Exam-Style Summary</strong>
                    <p className="leading-relaxed text-xs">
                        The Canny edge detector is an optimal multi-stage algorithm consisting of:
                        (1) <strong>Google Smoothing</strong> to suppress noise,
                        (2) <strong>Gradient Computation</strong> for strength/direction,
                        (3) <strong>Non-Maximum Suppression</strong> for thinning,
                        (4) <strong>Double Thresholding</strong> for classification, and
                        (5) <strong>Hysteresis</strong> to link weak edges to strong ones. It provides robust, thin, and well-localized edges.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
