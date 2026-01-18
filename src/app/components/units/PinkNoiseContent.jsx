'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Waves,
    Binary,
    Zap,
    TrendingDown,
    Coffee,
    BarChart3,
    Activity,
    Box,
    History
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

export function PinkNoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What pink noise is */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-pink-50/50 to-white dark:from-pink-900/10 dark:to-zinc-900 border-l-4 border-pink-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                        <Waves size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">1) What pink noise is</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold text-pink-600 dark:text-pink-400">Pink noise</span> is a random signal whose energy is stronger at low frequencies than at high frequencies.
                </p>
                <ul className="list-disc ml-5 space-y-1 relative z-10 text-zinc-600 dark:text-zinc-400 text-xs">
                    <li>Power decreases as frequency increases (unlike white noise which is flat).</li>
                    <li>Described as “more natural” because it balances energy across <span className="font-bold underline text-zinc-800 dark:text-zinc-200">octaves</span>.</li>
                </ul>
            </motion.div>

            {/* 2) Mathematical definition */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    2) Mathematical definition: The <InlineMath math="\beta" /> Law
                </h4>
                <div className="card space-y-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                        <BlockMath math="P(f) = \frac{K}{f^\beta}" />
                        <div className="flex gap-4 text-[10px] text-zinc-400 mt-2 italic">
                            <span><InlineMath math="P(f)" />: Power</span>
                            <span><InlineMath math="K" />: Level</span>
                            <span><InlineMath math="\beta" />: Spectral Exponent</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-2 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700 text-center">
                            <span className="font-bold text-xs"><InlineMath math="\beta = 0" /></span>
                            <p className="text-[10px] text-zinc-500 mt-1">White Noise (Flat)</p>
                        </div>
                        <div className="p-2 bg-pink-50/50 dark:bg-pink-900/10 rounded border border-pink-200 dark:border-pink-800/50 text-center ring-1 ring-pink-500/20">
                            <span className="font-bold text-xs"><InlineMath math="\beta = 1" /></span>
                            <p className="text-[10px] text-pink-600 dark:text-pink-400 mt-1 font-bold">Pink Noise (Classics)</p>
                        </div>
                        <div className="p-2 bg-zinc-50 dark:bg-zinc-800/30 rounded border border-zinc-200 dark:border-zinc-700 text-center">
                            <span className="font-bold text-xs"><InlineMath math="\beta = 2" /></span>
                            <p className="text-[10px] text-zinc-500 mt-1">Brownian (Red)</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-zinc-500 italic text-center">Values of <InlineMath math="0 < \beta < 2" /> are generally called "pink-ish" or colored noise.</p>
                </div>
            </motion.div>

            {/* 3) Characteristics and Correlation */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <History size={18} className="text-zinc-400" />
                    3) Characteristics & Correlation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-2 group">
                        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                            <Activity size={16} className="text-pink-500 group-hover:rotate-12 transition-transform" />
                            <span className="font-bold text-xs uppercase">Waveform Appearance</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Pink noise wanders up and down with noticeable <span className="font-semibold text-zinc-800 dark:text-zinc-200">smoothness</span>.
                            <br />
                            Sits between the "spiky" jaggedness of white noise and the "drifty" wandering of Brownian noise.
                        </p>
                    </div>

                    <div className="card space-y-2">
                        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                            <TrendingDown size={16} className="text-indigo-500" />
                            <span className="font-bold text-xs uppercase">Serial Correlation</span>
                        </div>
                        <p className="text-xs text-zinc-500 mb-1 italic px-1">How related are neighbors?</p>
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                                <span>White</span> <span className="font-mono">≈ 0</span>
                            </div>
                            <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-pink-500" style={{ width: '85.1%' }}></div>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="font-bold text-pink-500 font-mono">Pink (β=1)</span> <span className="font-bold text-pink-500 font-mono">≈ 0.851</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-3 bg-indigo-50/10 dark:bg-indigo-900/5 flex items-start gap-3">
                    <Box size={20} className="text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold text-xs text-zinc-800 dark:text-zinc-200 block">Long-range dependence</span>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            As <InlineMath math="\beta" /> increases toward 2 (e.g., 1.7), the signal shows <span className="font-semibold">memory</span>. Each value is influenced by many earlier values, not just the previous one.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Generation in thinkdsp */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Zap size={18} className="text-zinc-400" />
                    4) How pink noise is generated (<span className="font-mono text-xs">thinkdsp</span>)
                </h4>
                <div className="card bg-zinc-900 dark:bg-black/40 border border-zinc-800 overflow-hidden p-0">
                    <div className="p-2 border-b border-zinc-800 bg-zinc-800/50 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] text-zinc-400 ml-2 font-mono">pink_noise_gen.py</span>
                    </div>
                    <div className="p-4 space-y-3 font-mono text-[11px]">
                        <div className="flex gap-3">
                            <span className="text-zinc-500">1.</span>
                            <span className="text-zinc-300">Generate <span className="text-pink-400">white-noise</span> wave</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-zinc-500">2.</span>
                            <span className="text-zinc-300">Apply <span className="text-indigo-400">1/f^{`{\\beta/2}`}</span> amplitude filter</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-zinc-500">3.</span>
                            <span className="text-zinc-300">Inverse Transform (back to Wave)</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-zinc-500">4.</span>
                            <span className="text-zinc-300">Unbias (mean → 0) & <span className="text-emerald-400">Normalize</span></span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5) Analogy */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Coffee size={100} className="text-orange-900 dark:text-white" />
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-xl shadow-lg border border-orange-200 dark:border-orange-900 mt-1">
                        <Coffee size={28} className="text-orange-500" />
                    </div>
                    <div className="space-y-1">
                        <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100 italic">The Busy Café Analogy</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-10 mt-2">
                            <div className="space-y-1 border-l-2 border-zinc-200 pl-3">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase">White Noise (Rain)</span>
                                <p className="text-xs text-zinc-500 italic">Sharp hiss, constant high-frequency spray.</p>
                            </div>
                            <div className="space-y-1 border-l-2 border-pink-300 pl-3">
                                <span className="text-[10px] font-bold text-pink-400 uppercase">Pink Noise (Café)</span>
                                <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                                    Natural mix of <span className="text-orange-600">murmur (low)</span> and <span className="text-pink-600">clinks (high)</span>.
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Feature</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">White (β=0)</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Pink (β≈1)</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Brown (β=2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-[10px] text-zinc-500">Power Law</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="P(f) = K" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-semibold text-pink-600"><InlineMath math="\propto 1/f" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\propto 1/f^2" /></td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Low-Freq Energy</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-rose-300">Low</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Moderate</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-indigo-500 font-bold">Very Strong</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Time-domain</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Jagged/Spiky</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Wandering</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Random Walk</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium italic">Correlation</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">~0</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">~0.851</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-bold tracking-widest text-emerald-500">~1.0</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Sound</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 italic">Hiss</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-orange-600 font-medium italic">Natural/Murmur</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 italic font-mono">Deep Rumble</td>
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
                        src="/pinkn.png" // replace with your actual file in /public
                        alt="Visualization of Pink noise waveform and spectrum"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
