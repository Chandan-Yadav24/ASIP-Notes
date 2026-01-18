'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Activity,
    GitMerge,
    GitBranch,
    Box,
    Music,
    Play,
    FunctionSquare,
    Settings,
    Waves,
    ListTree,
    FileDigit,
    BarChart3
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

export function SignalObjectsContent() {
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
                    <div className="p-1.5 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                        <Activity size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Signal objects</h4>
                </div>
                <p className="relative z-10">
                    In <span className="font-mono">thinkdsp.py</span>, a <span className="font-semibold">Signal object</span> is a Python representation of a mathematical function (a “rule” for generating a signal).
                </p>
                <p className="relative z-10">
                    Even though the math idea of a signal can exist for all time <InlineMath math="t \in (-\infty, +\infty)" />, the object lets you evaluate it at specific time points and then process it digitally.
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 pointer-events-none">
                    <FunctionSquare size={100} />
                </div>
            </motion.div>

            {/* 1) What a Signal object is */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    1) What a Signal object is
                </h4>
                <div className="card space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-lg border border-zinc-100 dark:border-zinc-800">
                        <div className="text-center shrink-0">
                            <span className="block font-bold text-lg text-rose-500">Signal</span>
                            <span className="text-[10px] uppercase text-zinc-400">Formula</span>
                        </div>
                        <span className="text-zinc-400">≠</span>
                        <div className="text-center shrink-0">
                            <span className="block font-bold text-lg text-blue-500">Wave</span>
                            <span className="text-[10px] uppercase text-zinc-400">Samples</span>
                        </div>
                        <div className="text-xs text-zinc-500 border-l border-zinc-200 dark:border-zinc-700 pl-3 ml-2">
                            Signal objects are “the formula,” not the samples.
                        </div>
                    </div>
                    <p className="mt-2">It becomes useful in DSP when you:</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs">
                        <li>Choose a set of time values</li>
                        <li>Compute the signal’s values at those times <span className="text-zinc-400">(sampling)</span></li>
                        <li>Store the result as sampled data (a <span className="font-mono text-rose-600 dark:text-rose-400">Wave</span>)</li>
                    </ul>
                </div>
            </motion.div>

            {/* 2) Signal class hierarchy */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    2) Signal class hierarchy (how thinkdsp organizes signals)
                </h4>
                <div className="grid grid-cols-1 gap-3">
                    {/* Parent */}
                    <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 relative">
                        <div className="absolute top-3 right-3 text-zinc-300 dark:text-zinc-700">
                            <ListTree size={20} />
                        </div>
                        <span className="font-mono font-bold text-rose-600 dark:text-rose-400 block mb-1">A) Signal (parent/base)</span>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            The main base class for all signal types. Provides common features like <span className="font-mono">make_wave</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-zinc-100 dark:border-zinc-800">
                        {/* B) Sinusoid */}
                        <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/20">
                            <div className="flex items-center gap-2 mb-1">
                                <Waves size={16} className="text-blue-500" />
                                <span className="font-bold text-zinc-800 dark:text-zinc-200">B) Sinusoid</span>
                            </div>
                            <p className="text-xs text-zinc-500">
                                Represents sinusoidal signals (sine/cosine). Subclass of Signal.
                            </p>
                        </div>

                        {/* C) SumSignal */}
                        <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/20">
                            <div className="flex items-center gap-2 mb-1">
                                <GitMerge size={16} className="text-purple-500" />
                                <span className="font-bold text-zinc-800 dark:text-zinc-200">C) SumSignal</span>
                            </div>
                            <p className="text-xs text-zinc-500">
                                Result of adding signals (<span className="font-mono">s1 + s2</span>). Represents combined signal.
                            </p>
                        </div>

                        {/* D) Noise */}
                        <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/20 col-span-1 sm:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                                <Activity size={16} className="text-orange-500" />
                                <span className="font-bold text-zinc-800 dark:text-zinc-200">D) Noise subclasses</span>
                            </div>
                            <p className="text-xs text-zinc-500 mb-2">
                                Inherit from <span className="font-mono">_Noise</span> → <span className="font-mono">Signal</span>.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Uncorrelated Uniform", "Brownian", "Pink", "Gaussian"].map(n => (
                                    <span key={n} className="px-2 py-1 bg-white dark:bg-black/30 border border-zinc-200 dark:border-zinc-700 rounded text-[10px] text-zinc-500">
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3) Key methods */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    3) Key methods and parameters
                </h4>
                <div className="space-y-2">
                    <div className="flex gap-3 items-start p-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="mt-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500">
                            <Settings size={14} />
                        </div>
                        <div>
                            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 text-xs">__init__(freq, amp, offset)</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Constructor. Sets parameters like frequency (Hz), amplitude (strength), and phase offset (radians).
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start p-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="mt-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500">
                            <FunctionSquare size={14} />
                        </div>
                        <div>
                            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 text-xs">evaluate(times)</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Implemented by child classes. Computes signal value at given times (e.g., <InlineMath math="A \cos(2\pi f t + \phi)" />).
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start p-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="mt-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500">
                            <Box size={14} />
                        </div>
                        <div>
                            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 text-xs text-rose-600 dark:text-rose-400">make_wave(...)</span>
                            <p className="text-xs text-zinc-500 mt-0.5">
                                Core method. Evaluates signal at discrete points and returns a <span className="font-mono">Wave</span> object with NumPy arrays.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) Relationship */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    4) Relationship with Wave and Spectrum
                </h4>
                <div className="card text-center py-4 bg-gradient-to-r from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-900/20">
                    <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-rose-500">Signal</span>
                            <span className="text-[10px] text-zinc-400">Formula</span>
                        </div>
                        <span className="text-zinc-300">→</span>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-blue-500">Wave</span>
                            <span className="text-[10px] text-zinc-400">Samples</span>
                        </div>
                        <span className="text-zinc-300">→</span>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-purple-500">Spectrum</span>
                            <span className="text-[10px] text-zinc-400">Frequencies</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5) Analogy */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    5) Analogy (musical score)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="card flex flex-col items-center text-center p-4 hover:scale-[1.02] transition-transform">
                        <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-full mb-3 text-rose-500">
                            <Music size={24} />
                        </div>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">Signal object</span>
                        <span className="text-xs text-zinc-500">The Musical Score</span>
                        <p className="text-[10px] text-zinc-400 mt-2">Describes the music in theory</p>
                    </div>
                    <div className="card flex flex-col items-center text-center p-4 hover:scale-[1.02] transition-transform">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-3 text-blue-500">
                            <Play size={24} />
                        </div>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">Wave object</span>
                        <span className="text-xs text-zinc-500">The Performance</span>
                        <p className="text-[10px] text-zinc-400 mt-2">"Playing" the score to get samples</p>
                    </div>
                    <div className="card flex flex-col items-center text-center p-4 hover:scale-[1.02] transition-transform">
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-3 text-purple-500">
                            <GitBranch size={24} />
                        </div>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">SumSignal</span>
                        <span className="text-xs text-zinc-500">The Duet</span>
                        <p className="text-[10px] text-zinc-400 mt-2">Combining scores (s1 + s2)</p>
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">What it represents</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-rose-600 dark:text-rose-400">Signal</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Base class for math signals</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Shared behavior (<span className="font-mono">make_wave</span>)</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono">Sinusoid</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sine/cosine-type signal</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Pure tone (freq, amp, offset)</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono">SumSignal</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sum of two signals</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Code: <span className="font-mono">signal1 + signal2</span></td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono">__init__</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sets parameters</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">freq (Hz), amp, offset (rad)</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono">evaluate</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Computes values at times</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Produces amplitudes</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-blue-600 dark:text-blue-400">make_wave</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Samples signal into a Wave</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Formula → Arrays</td>
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
                        src="/sobj.png" // replace with your actual file in /public
                        alt="Visualization of signal objects structure"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
