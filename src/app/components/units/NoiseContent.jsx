'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Zap,
    TrendingDown,
    Activity,
    Grip,
    Waves,
    Ear,
    Eye,
    ScatterChart,
    BarChart3,
    Signal,
    Radio,
    Sliders
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
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

export function NoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* Intro */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2 relative z-10">
                    <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <Zap size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Noise in Signal Processing</h4>
                </div>
                <p className="relative z-10">
                    In signal processing, <span className="font-semibold">noise</span> means unwanted and unknown changes added to a signal during capturing, storage, transmission, or conversion.
                </p>
                <p className="relative z-10 text-xs text-zinc-500">
                    Unlike periodic signals (predictable repeating structure), noise is <span className="font-semibold">random</span> and often spreads across many frequencies.
                </p>
                <div className="absolute -top-4 -right-4 p-4 opacity-5 dark:opacity-10 pointer-events-none rotate-12">
                    <ScatterChart size={120} />
                </div>
            </motion.div>

            {/* 2) Three main properties */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    2) Three main properties used to describe noise
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* A) Distribution */}
                    <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                            <BarChart3 size={16} />
                            <span className="font-bold text-xs uppercase tracking-wide">A) Distribution</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                            Value behavior: what values can it take?
                        </p>
                        <ul className="list-disc ml-3 space-y-0.5 text-[10px] text-zinc-500">
                            <li><span className="font-semibold">Gaussian:</span> bell-shaped (near 0 most likely)</li>
                            <li><span className="font-semibold">Uniform:</span> all equal</li>
                        </ul>
                    </div>

                    {/* B) Correlation */}
                    <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <div className="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400">
                            <Activity size={16} />
                            <span className="font-bold text-xs uppercase tracking-wide">B) Correlation</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                            Time dependence: related to neighbors?
                        </p>
                        <ul className="list-disc ml-3 space-y-0.5 text-[10px] text-zinc-500">
                            <li><span className="font-semibold">Uncorrelated:</span> independent (no memory)</li>
                            <li><span className="font-semibold">Correlated:</span> depends on previous values</li>
                        </ul>
                    </div>

                    {/* C) Power vs Freq */}
                    <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400">
                            <Signal size={16} />
                            <span className="font-bold text-xs uppercase tracking-wide">C) Spectral Shape</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                            Energy distribution across frequencies.
                        </p>
                        <p className="text-[10px] text-zinc-500">
                            Makes noise "sound" or "look" different.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Common types of noise */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    3) Common types of noise
                </h4>
                <div className="space-y-3">
                    {/* White Noise */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/20 rounded-lg">
                        <div className="shrink-0 mt-1 text-zinc-400"><Waves size={18} strokeWidth={1.5} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs">White noise</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Equal power at all frequencies. Flat spectrum. Sounds like a steady “hiss.”
                            </p>
                        </div>
                    </div>

                    {/* Brownian Noise */}
                    <div className="flex gap-3 p-3 bg-rose-50 dark:bg-rose-900/10 rounded-lg">
                        <div className="shrink-0 mt-1 text-rose-400"><TrendingDown size={18} strokeWidth={1.5} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs">Brownian (Red) noise</span>
                            <p className="text-xs text-zinc-500 mt-0.5 mb-1">
                                Correlated random walk. Power <InlineMath math="\propto 1/f^2" />.
                            </p>
                            <span className="text-[10px] bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded">Deep rumble</span>
                        </div>
                    </div>

                    {/* Pink Noise */}
                    <div className="flex gap-3 p-3 bg-pink-50 dark:bg-pink-900/10 rounded-lg">
                        <div className="shrink-0 mt-1 text-pink-400"><Activity size={18} strokeWidth={1.5} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs">Pink noise</span>
                            <p className="text-xs text-zinc-500 mt-0.5 mb-1">
                                Between white and red. Power <InlineMath math="\propto 1/f^\beta" /> (usually <InlineMath math="\beta \approx 1" />).
                            </p>
                            <span className="text-[10px] bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded">Natural balance</span>
                        </div>
                    </div>

                    {/* Impulse Noise */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/20 rounded-lg">
                        <div className="shrink-0 mt-1 text-zinc-400"><Grip size={18} strokeWidth={1.5} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs">Impulse (Salt-and-pepper) noise</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Sudden extreme spikes (random black/white dots in images). Sharp, isolated peaks.
                            </p>
                        </div>
                    </div>

                    {/* Periodic Noise */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/20 rounded-lg">
                        <div className="shrink-0 mt-1 text-zinc-400"><Zap size={18} strokeWidth={1.5} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs">Periodic noise</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Repeating interference. Spikes at specific frequencies in the spectrum.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) Noise in image processing */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    4) Noise in image processing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card space-y-2">
                        <div className="flex items-center gap-2 mb-1 text-zinc-800 dark:text-zinc-200">
                            <Eye size={16} />
                            <span className="font-bold text-xs">Estimating noise</span>
                        </div>
                        <p className="text-xs text-zinc-500">
                            Examine small, flat background patches. Variation inside that patch is mostly noise.
                        </p>
                    </div>
                    <div className="card space-y-2">
                        <div className="flex items-center gap-2 mb-1 text-zinc-800 dark:text-zinc-200">
                            <Sliders size={16} />
                            <span className="font-bold text-xs">Reducing (Filtering)</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-500">
                            <li>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Linear (Blur):</span> Averaging neighbors. Reduces noise but blurs edges.
                            </li>
                            <li>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Median (Non-linear):</span> Replaces pixel with median. Great for salt-and-pepper. Preserves edges.
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 5) Analogy */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    5) Analogy: radio static
                </h4>
                <div className="card flex items-center gap-4 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/50">
                    <div className="p-2 bg-white dark:bg-black/20 rounded-full shadow-sm">
                        <Radio size={24} className="text-zinc-400" />
                    </div>
                    <div className="text-xs space-y-1">
                        <p><span className="font-semibold">True Signal:</span> Someone speaking (the message).</p>
                        <p><span className="font-semibold">Noise:</span> The unwanted static mixed in.</p>
                        <p className="text-zinc-500 italic">Filtering is like tuning/cleaning the audio so the voice becomes clearer.</p>
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Noise Type</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Main Idea</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Power vs Freq</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Appearance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">White</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Equal power @ all freqs</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Flat</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">"Hiss"</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Brownian (Red)</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Random walk</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\propto 1/f^2" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Deep rumble</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Pink</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">In-between</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\propto 1/f" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Natural noise</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Impulse</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Random extreme spikes</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">-</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Salt & Pepper</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at the end */}
            <motion.div variants={itemVariants} className="mt-4 flex justify-center">
                <div
                    className="overflow-hidden rounded-xl"
                    style={{
                        border: "2px solid var(--border-strong)",
                        background: "var(--surface)",
                    }}
                >
                    <Image
                        src="/noise.png" // replace with your actual file in /public
                        alt="Visualization of noise types"
                        width={800}
                        height={400}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
