'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Sigma,
    BarChart3,
    Eye,
    Zap,
    Cpu,
    Target,
    Sliders,
    Box,
    AreaChart
} from 'lucide-react';

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

export function GaussianNoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What Gaussian noise is */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-zinc-900 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <AreaChart size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">1) What Gaussian noise is</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Gaussian noise</span> is random noise whose values follow a <span className="font-semibold italic underline decoration-blue-200">Gaussian (normal) distribution</span>, also called the bell curve.
                </p>
                <p>Widely used because it matches many real sensor sources and has clean mathematical properties.</p>
            </motion.div>

            {/* 2) Statistical properties */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Sigma size={18} className="text-zinc-400" />
                    2) Statistical properties & PDF
                </h4>

                <div className="card space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700">
                            <span className="font-bold text-xs uppercase flex items-center gap-2">
                                <Sliders size={14} className="text-blue-500" />
                                The Parameters
                            </span>
                            <ul className="text-xs space-y-1 mt-1">
                                <li><InlineMath math="\mu" /> (Mean): The average center value.</li>
                                <li><InlineMath math="\sigma^2" /> (Variance): How spread out the values are.</li>
                                <li className="text-[10px] text-zinc-500 italic mt-1">Bigger <InlineMath math="\sigma" /> → wider spread → stronger noise.</li>
                            </ul>
                        </div>
                        <div className="space-y-2 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700">
                            <span className="font-bold text-xs uppercase flex items-center gap-2">
                                <Box size={14} className="text-purple-500" />
                                The "Bell" Spread
                            </span>
                            <ul className="text-xs space-y-1 mt-1">
                                <li>~95% of values lie in <InlineMath math="\mu \pm 2\sigma" /></li>
                                <li>~99% of values lie in <InlineMath math="\mu \pm 3\sigma" /></li>
                                <li className="text-[10px] text-zinc-500 mt-1">Values near center are most likely.</li>
                            </ul>
                        </div>
                    </div>

                    {/* PDF Formula */}
                    <div className="p-4 bg-zinc-900 dark:bg-black rounded-xl border border-zinc-800 shadow-inner group">
                        <span className="text-[10px] text-zinc-500 uppercase font-mono mb-2 block text-center">Probability Density Function (PDF)</span>
                        <div className="flex justify-center py-2 group-hover:scale-105 transition-transform">
                            <BlockMath math="p(z) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(z-\mu)^2}{2\sigma^2}\right)" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Gaussian noise in images */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Eye size={18} className="text-zinc-400" />
                    3) How Gaussian noise appears in images
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="card space-y-2 border-t-2 border-zinc-200">
                        <span className="font-bold text-xs text-zinc-800 dark:text-zinc-100">Visual</span>
                        <p className="text-[11px] text-zinc-500 italic">Fine grain or speckled texture. Small random variations everywhere, NO isolated black/white dots.</p>
                    </div>
                    <div className="card space-y-2 border-t-2 border-zinc-200">
                        <span className="font-bold text-xs text-zinc-800 dark:text-zinc-100">Causes</span>
                        <p className="text-[11px] text-zinc-500 italic">Electronic circuit noise, high temperature sensor noise, low light capture conditions.</p>
                    </div>
                    <div className="card space-y-2 border-t-2 border-rose-300">
                        <span className="font-bold text-xs text-rose-600 dark:text-rose-400">Edge Danger</span>
                        <p className="text-[11px] text-zinc-500 italic">Derivatives amplify noise! Can create false edges or hide real features/details.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Frequency properties */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Zap size={18} className="text-zinc-400" />
                    4) Frequency and spectral properties
                </h4>
                <div className="space-y-3">
                    <div className="card bg-zinc-50 dark:bg-zinc-800/20 shadow-sm border-none p-3 flex gap-3">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-emerald-500 border border-zinc-100 dark:border-zinc-700 shrink-0">
                            <Sigma size={18} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">“White” when uncorrelated</span>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Uncorrelated Gaussian noise is called <span className="font-semibold italic">White Gaussian Noise (WGN)</span> because it has a flat average power spectrum.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-zinc-50 dark:bg-zinc-800/20 shadow-sm border-none p-3 flex gap-3">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-indigo-500 border border-zinc-100 dark:border-zinc-700 shrink-0">
                            <Cpu size={18} />
                        </div>
                        <div>
                            <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Fourier spectrum behavior</span>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Spectrum values remain Gaussian-like. Real and imaginary parts behave like uncorrelated Gaussian variables.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5) Reduction methods */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Sliders size={18} className="text-zinc-400" />
                    5) How to reduce Gaussian noise (filtering)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="card space-y-2 border-l-4 border-amber-400">
                        <span className="font-bold uppercase tracking-widest text-[10px]">A) Linear smoothing</span>
                        <p className="text-zinc-500">Box (mean) or Gaussian blur. Averaging nearby pixels reduces variation.</p>
                        <p className="font-bold text-rose-500 italic">Tradeoff: Blurs edges/details.</p>
                    </div>
                    <div className="card space-y-2 border-l-4 border-emerald-400">
                        <span className="font-bold uppercase tracking-widest text-[10px]">B) Adaptive filtering</span>
                        <p className="text-zinc-500">Uses local statistics. Strong smoothing on flat areas, weak on edges.</p>
                        <p className="font-bold text-emerald-600 italic">Preserves features while cleaning noise.</p>
                    </div>
                </div>
            </motion.div>

            {/* 6) Analogy */}
            <motion.div variants={itemVariants} className="card bg-zinc-900 text-zinc-100 border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-[360deg] transition-transform duration-[4000ms] pointer-events-none">
                    <Target size={120} />
                </div>
                <div className="flex items-start gap-4 p-2">
                    <div className="p-3 bg-zinc-800 rounded-full text-rose-500 border border-rose-500/30 shrink-0 mt-1">
                        <Target size={28} />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-lg tracking-tight decoration-rose-500 underline underline-offset-4">The Crowded Dartboard Analogy</span>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Imagine a skilled dart player aiming at the bullseye many times.
                        </p>
                        <ul className="text-[11px] space-y-1 text-zinc-400 list-disc ml-4">
                            <li>Darts landing near center = Mean <InlineMath math="\mu" />.</li>
                            <li>Fewer land farther away = forming the <span className="font-bold text-white uppercase italic">Bell shape</span>.</li>
                            <li>In images, it's like each true pixel being perturbed by these "dart throws," creating a grainy cloud.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2">
                <div className="flex items-center gap-2 mb-1">
                    <BarChart3 size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Summary table</span>
                </div>
                <div className="overflow-x-auto text-xs">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Topic</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Gaussian noise meaning</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Key point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Definition</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 italic">Normal (bell-curve) distribution</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-semibold text-blue-500 whitespace-nowrap">Very common imaging model</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Parameters</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\mu, \sigma^2 / \sigma" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\sigma" /> controls noise strength</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Spread</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">~95% at <InlineMath math="\pm 2\sigma" />, ~99% at <InlineMath math="\pm 3\sigma" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 italic">Cluster near center</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Image appearance</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Grainy/Speckled texture</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-zinc-500 uppercase text-[9px]">Small everywhere</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium italic">WGN</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Uncorrelated Gaussian</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-emerald-600 font-bold tracking-tight">Flat average power</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Reduction</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Smoothing & Adaptive filters</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-rose-500 font-semibold">Blur vs Sharper edges</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at the end */}
            <motion.div variants={itemVariants} className="mt-4 flex justify-center">
                <div
                    className="overflow-hidden rounded-xl w-full"
                    style={{
                        border: "2px solid var(--border-strong)",
                        background: "var(--surface)",
                    }}
                >
                    <Image
                        src="/gsn.png" // replace with your actual file in /public
                        alt="Visualization of Gaussian noise distribution and image effect"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
