'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Activity,
    BarChart3,
    TrendingUp,
    Zap,
    MousePointer2,
    Droplets,
    FunctionSquare,
    ChevronRight
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

export function IntegratedSpectrumContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) Why we use an integrated spectrum */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-zinc-900">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <Activity size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">1) Why we use an integrated spectrum</h4>
                </div>
                <p>
                    When you look at the power spectrum of a noise signal, it often looks <span className="font-semibold text-rose-500">messy and jagged</span> because noise is random.
                </p>
                <p>
                    An <span className="font-semibold">integrated spectrum</span> is used to make the overall trend clearer, especially when studying uncorrelated noise (like UU noise).
                </p>
            </motion.div>

            {/* 2) Definition */}
            <motion.div variants={itemVariants} className="card space-y-3">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Zap size={18} className="text-amber-500" />
                    2) Definition (what it is)
                </h4>
                <p>
                    An integrated spectrum is a function of frequency <InlineMath math="f" /> that shows:
                </p>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700 text-center font-semibold italic">
                    The cumulative (running total) power from low frequencies up to frequency <InlineMath math="f" />.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="p-2 border border-blue-100 dark:border-blue-900/30 rounded bg-blue-50/30 dark:bg-blue-900/10">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Standard Power Spectrum</span>
                        <p className="text-xs">“How much power is at this exact frequency?”</p>
                    </div>
                    <div className="p-2 border border-green-100 dark:border-green-900/30 rounded bg-green-50/30 dark:bg-green-900/10">
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Integrated Spectrum</span>
                        <p className="text-xs">“How much total power has accumulated up to this frequency?”</p>
                    </div>
                </div>
                <p className="text-xs text-zinc-500 italic mt-1">
                    This “running total” naturally smooths out the randomness and reveals how energy is distributed across the frequency range.
                </p>
            </motion.div>

            {/* 3) How it’s computed */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    3) How it’s computed (steps)
                </h4>

                <div className="relative pl-8 space-y-4">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold border border-zinc-200 dark:border-zinc-700">1</div>
                        <div className="card space-y-1">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">Compute power at each frequency</span>
                            <p className="text-xs text-zinc-500">Start from the spectrum’s power values (often magnitude-squared).</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold border border-zinc-200 dark:border-zinc-700">2</div>
                        <div className="card space-y-2">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">Cumulative summation</span>
                            <p className="text-xs text-zinc-500">Add power values progressively from the lowest frequency upward:</p>
                            <div className="bg-zinc-900 dark:bg-black rounded p-2 overflow-x-auto">
                                <BlockMath math="cs[k] = \sum_{i=0}^{k} power[i]" />
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                                <ChevronRight size={14} /> np.cumsum(...)
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold border border-zinc-200 dark:border-zinc-700">3</div>
                        <div className="card space-y-2">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">Normalization (scale to 0 → 1)</span>
                            <p className="text-xs text-zinc-500">Divide by the final cumulative value so the last point becomes 1:</p>
                            <div className="bg-zinc-900 dark:bg-black rounded p-2 overflow-x-auto">
                                <BlockMath math="cs_{norm}[k] = \frac{cs[k]}{cs[last]}" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) thinkdsp implementation */}
            <motion.div variants={itemVariants} className="card border-l-4 border-indigo-500 bg-indigo-50/20 dark:bg-indigo-900/10 space-y-2">
                <div className="flex items-center gap-2 mb-1">
                    <FunctionSquare size={16} className="text-indigo-500" />
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">thinkdsp Implementation</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    Spectrum.make_integrated_spectrum()
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Returns an <span className="font-mono">IntegratedSpectrum</span> object containing normalized <span className="font-mono">cs</span> (cumulative sum) and <span className="font-mono">fs</span> (frequencies).
                </p>
            </motion.div>

            {/* 5) Interpretation */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    5) How to interpret the integrated spectrum
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-2 border-t-4 border-green-500">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Identifying White Noise</span>
                        <p className="text-xs text-zinc-500">
                            Since power is evenly spread, the cumulative total increases at a steady rate.
                        </p>
                        <p className="text-xs font-bold text-green-600 dark:text-green-400">
                            Result: Approximately a straight line.
                        </p>
                    </div>
                    <div className="card space-y-2 border-t-4 border-rose-500">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Colored / Non-white Noise</span>
                        <p className="text-xs text-zinc-500">
                            Energy is concentrated in certain bands (e.g., low freqs in Brownian noise).
                        </p>
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
                            Result: Bent or curved line.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 6) Analogy */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-none">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-white dark:bg-black/20 rounded-lg text-blue-500 shadow-sm shrink-0">
                        <Droplets size={24} />
                    </div>
                    <div className="space-y-1">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100 block">Rain Gauge Analogy</span>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            <span className="font-semibold italic">Power Spectrum</span> is like measuring rainfall minute-by-minute: it looks jagged because rainfall varies randomly.
                        </p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                            <span className="font-semibold italic">Integrated Spectrum</span> is like a rain gauge collecting total rainfall over time: the total rises smoothly.
                        </p>
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Item</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Meaning</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">What it tells you</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium italic">Power spectrum</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Power at each frequency</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-rose-500">Often jagged/noisy for random signals</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-semibold">Integrated spectrum</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Cumulative power up to <InlineMath math="f" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium text-green-600 dark:text-green-400">Smooth view of distribution</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Cumulative sum</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Running total of power</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Reveals overall trend</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Normalization</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Scale so output ends at 1</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Makes plots comparable</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Straight line</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Cumulative power grows evenly</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Indicates white noise</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Curved result</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Uneven frequency contribution</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Indicates colored noise</td>
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
                        src="/isp.png" // replace with your actual file in /public
                        alt="Visualization of integrated spectrum"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
