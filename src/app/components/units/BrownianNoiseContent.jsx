'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Footprints,
    TrendingDown,
    Activity,
    Waves,
    Compass,
    Zap,
    BarChart3,
    ListTree,
    Beer
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
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

export function BrownianNoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What is Brownian noise */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-orange-50/50 to-white dark:from-orange-900/10 dark:to-zinc-900 border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                        <Footprints size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">1) What Brownian noise is</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold">Brownian noise</span> (also called brown noise or red noise) is a noise signal where each new value depends strongly on the previous one.
                </p>
                <div className="p-3 bg-white dark:bg-black/20 rounded shadow-sm border border-zinc-200 dark:border-zinc-800 italic text-center">
                    <span className="font-mono text-zinc-800 dark:text-zinc-200">new value = previous value + random step</span>
                </div>
                <p className="text-xs text-zinc-500">
                    Because it builds up by adding random steps over time, it behaves like a <span className="font-semibold">random walk</span>. Named after Brownian motion (random movement of particles in fluids).
                </p>
            </motion.div>

            {/* 2) Statistical characteristics */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Compass size={18} className="text-zinc-400" />
                    2) Statistical characteristics
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-2 bg-zinc-50 dark:bg-zinc-800/30">
                        <span className="font-bold text-zinc-800 dark:text-zinc-200 text-xs block uppercase">A) Correlation & Memory</span>
                        <p className="text-xs">
                            Unlike white noise, Brownian noise has <span className="font-semibold">memory</span>. It's highly correlated.
                        </p>
                        <ul className="text-[11px] space-y-1 text-zinc-600 dark:text-zinc-400 list-disc ml-4">
                            <li>High values tend to stay high; low values stay low.</li>
                            <li>Waveform looks like a <span className="italic">drifting path</span> rather than jagged symbols.</li>
                        </ul>
                    </div>
                    <div className="card space-y-2 bg-zinc-50 dark:bg-zinc-800/30">
                        <span className="font-bold text-zinc-800 dark:text-zinc-200 text-xs block uppercase">B) Serial Correlation</span>
                        <p className="text-xs">
                            Checks similarity between consecutive samples.
                        </p>
                        <div className="flex items-center justify-center p-2 bg-zinc-900 rounded font-mono text-xs text-green-400">
                            Correlation ≈ 1 (often {'>'} 0.999)
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Spectral properties */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Waves size={18} className="text-zinc-400" />
                    3) Spectral properties (Power laws)
                </h4>

                <div className="card space-y-3 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:scale-125 transition-transform duration-700">
                        <TrendingDown size={120} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 border-r border-zinc-200 dark:border-zinc-800 pr-4">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">A) Power–frequency relationship</span>
                            <p className="text-xs text-zinc-500">Power decreases with frequency exponentially:</p>
                            <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded text-center my-2">
                                <BlockMath math="P(f) = \frac{K}{f^2}" />
                            </div>
                            <p className="text-[10px] italic">When frequency doubles, power drops by <InlineMath math="2^2 = 4" />.</p>
                        </div>
                        <div className="space-y-2">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">B) Why it’s called “red”</span>
                            <ul className="text-xs space-y-1.5 list-disc ml-4 text-zinc-500">
                                <li>Low frequencies carry <span className="font-bold underline">most</span> of the energy.</li>
                                <li>Analogy to Light: Red is near the low-frequency end of the visible spectrum.</li>
                                <li>Slope on log-log plot is <span className="font-semibold">-2</span>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-zinc-500 italic">
                        <Activity size={14} />
                        Sounds deep or rumbling because higher frequencies are nearly invisible/inaudible.
                    </div>
                </div>
            </motion.div>

            {/* 4) Code Generation */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    4) How it's generated in code (<span className="font-mono text-xs">thinkdsp</span> style)
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 card space-y-1 bg-zinc-50 dark:bg-zinc-800/30 border-t-2 border-zinc-300">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Step 1</span>
                        <p className="text-xs">Generate white noise steps.</p>
                    </div>
                    <div className="flex items-center justify-center text-zinc-300 hidden sm:flex">
                        <ChevronRight size={20} />
                    </div>
                    <div className="flex-1 card space-y-1 bg-zinc-50 dark:bg-zinc-800/30 border-t-2 border-zinc-300">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Step 2</span>
                        <div className="text-xs font-mono text-blue-500">np.cumsum(steps)</div>
                        <p className="text-[10px]">Creates the random walk accumulation.</p>
                    </div>
                    <div className="flex items-center justify-center text-zinc-300 hidden sm:flex">
                        <ChevronRight size={20} />
                    </div>
                    <div className="flex-1 card space-y-1 bg-zinc-50 dark:bg-zinc-800/30 border-t-2 border-zinc-300">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">Step 3</span>
                        <p className="text-xs">Unbias (center) & Normalize.</p>
                    </div>
                </div>
            </motion.div>

            {/* 5) Analogy */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-black dark:to-zinc-900 text-zinc-100 border-none relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Beer size={100} />
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 mt-1">
                        <Beer size={28} className="text-blue-400" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-lg tracking-tight">The Drunken Hiker Analogy</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-10">
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-white/50 uppercase">White Noise</span>
                                <p className="text-xs text-zinc-400 leading-relaxed italic">
                                    Teleporting to a completely random location EVERY second. Zero connection to previous spot.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-orange-400/50 uppercase">Brownian Noise</span>
                                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                                    A hiker who can only move by <span className="text-orange-400">small random steps</span>. Where you are depends on where you just were.
                                </p>
                            </div>
                        </div>
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Aspect</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Meaning</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Observation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium italic">Core rule</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="x[n] = x[n-1] + \text{step}[n]" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Has memory; smooth wandering</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Correlation</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Highly correlated</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Consecutive samples are similar</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Serial correlation</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Near 1 ({'>'} 0.999)</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Ultra-strong dependence</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Power vs Frequency</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="P(f) = K / f^2" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-rose-500 font-semibold">Low freqs dominate heavily</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sound / Feel</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Deep, rumbling</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Darker than white noise</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Code Gen</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono">np.cumsum</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Accumulating white-noise steps</td>
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
                        src="/brown.png" // replace with your actual file in /public
                        alt="Visualization of Brownian noise waveform and spectrum"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}

function ChevronRight({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
