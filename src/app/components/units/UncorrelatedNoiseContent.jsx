'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Dices,
    BarChart3,
    Activity,
    TrendingUp,
    Ear,
    Eye,
    Sigma,
    ScatterChart,
    Link2Off,
    Ticket
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

export function UncorrelatedNoiseContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What is "uncorrelated noise" */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2 relative z-10">
                    <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <Link2Off size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">1) What “uncorrelated noise” means</h4>
                </div>
                <p className="relative z-10">
                    <span className="font-semibold">Uncorrelated noise</span> is noise where each sample is independent of the others.
                </p>
                <ul className="list-disc ml-5 space-y-1 relative z-10 text-zinc-600 dark:text-zinc-400">
                    <li>Knowing one value (sample) tells you <span className="font-bold text-rose-500">nothing</span> about the next value.</li>
                    <li>There is no pattern, no “memory,” and no predictable trend from one sample to the next.</li>
                </ul>
                <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 pointer-events-none">
                    <Dices size={100} />
                </div>
            </motion.div>

            {/* 2) Two main types (by distribution) */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    2) Two main types (by distribution)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* A) UU Noise */}
                    <div className="card space-y-2 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800/30">
                        <div className="flex items-center gap-2 mb-1 text-blue-600 dark:text-blue-400">
                            <BarChart3 size={18} />
                            <span className="font-bold text-sm">A) Uncorrelated Uniform (UU)</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Samples are drawn from a <span className="font-semibold">uniform distribution</span>.
                        </p>
                        <ul className="list-disc ml-4 space-y-1 text-xs text-zinc-500">
                            <li>Meaning: every value within a chosen range is equally likely.</li>
                            <li>It’s one of the simplest types of noise to generate.</li>
                        </ul>
                    </div>

                    {/* B) UG Noise */}
                    <div className="card space-y-2 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800/30">
                        <div className="flex items-center gap-2 mb-1 text-purple-600 dark:text-purple-400">
                            <Sigma size={18} />
                            <span className="font-bold text-sm">B) Uncorrelated Gaussian (UG)</span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Samples are drawn from a <span className="font-semibold">Gaussian (normal) distribution</span> (bell curve).
                        </p>
                        <ul className="list-disc ml-4 space-y-1 text-xs text-zinc-500">
                            <li>Most values cluster near the mean.</li>
                            <li>Common rule: ~99% of values lie within <InlineMath math="\mu \pm 3\sigma" />.</li>
                            <li>Often referred to as <span className="font-semibold">white noise</span> in DSP.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 3) Key characteristics */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    3) Key characteristics
                </h4>

                <div className="space-y-3">
                    {/* A) Freq Domain */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                        <div className="shrink-0 mt-1 text-zinc-500"><Activity size={18} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs mb-1">A) Frequency-domain behavior ("White" property)</span>
                            <p className="text-xs text-zinc-500">
                                The spectrum has approximately <span className="font-semibold">equal average power at all frequencies</span>.
                                <br />
                                Like white light (all colors mixed) → hence "white noise."
                            </p>
                        </div>
                    </div>

                    {/* B) CLT */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                        <div className="shrink-0 mt-1 text-zinc-500"><TrendingUp size={18} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs mb-1">B) Central Limit Theorem (CLT) connection</span>
                            <p className="text-xs text-zinc-500">
                                When many random processes combine, the result tends to look Gaussian.
                                <br />
                                Many real-world "random" noises end up being Gaussian because they are sums of many small effects.
                            </p>
                        </div>
                    </div>

                    {/* C) Serial Correlation */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                        <div className="shrink-0 mt-1 text-zinc-500"><ScatterChart size={18} /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs mb-1">C) Serial correlation test</span>
                            <p className="text-xs text-zinc-500 mb-1">
                                Measures similarity between a sample and the next one.
                            </p>
                            <ul className="list-disc ml-4 space-y-0.5 text-xs text-zinc-500">
                                <li><span className="font-semibold text-green-600 dark:text-green-400">Uncorrelated noise:</span> correlation ≈ 0 (no relation).</li>
                                <li><span className="font-semibold text-rose-600 dark:text-rose-400">Correlated (e.g. Brownian):</span> correlation ≈ 1 (strong dependence).</li>
                            </ul>
                        </div>
                    </div>

                    {/* D) Covariance */}
                    <div className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                        <div className="shrink-0 mt-1 text-zinc-500"><InlineMath math="\ne" /></div>
                        <div>
                            <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-xs mb-1">D) Covariance view (Math)</span>
                            <p className="text-xs text-zinc-500">
                                Generally, if variables are uncorrelated: <InlineMath math="Cov(X, Y) = 0" />.
                                <br />
                                For noise, it means samples don't vary together predictably.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4) Looks and Sounds */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card space-y-2 text-center">
                    <div className="flex justify-center text-zinc-400 mb-1"><Ear size={24} /></div>
                    <span className="block font-bold text-sm">Sound (Audio)</span>
                    <p className="text-xs text-zinc-500">
                        Sounds like static hiss (radio between stations).
                    </p>
                </div>
                <div className="card space-y-2 text-center">
                    <div className="flex justify-center text-zinc-400 mb-1"><Eye size={24} /></div>
                    <span className="block font-bold text-sm">Waveform (Visual)</span>
                    <p className="text-xs text-zinc-500">
                        Looks random and jagged ("hairy"). No repeating patterns.
                    </p>
                </div>
            </motion.div>

            {/* 5) Analogy */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                    5) Analogy: The Lottery Machine
                </h4>
                <div className="card flex items-start gap-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10">
                    <div className="p-2 bg-white dark:bg-black/20 rounded-full shadow-sm text-orange-500 mt-1">
                        <Ticket size={24} />
                    </div>
                    <div className="text-xs space-y-1.5">
                        <p>
                            Imagine drawing a ball, recording the number, then <span className="font-semibold">putting it back</span>.
                        </p>
                        <ul className="list-disc ml-4 space-y-0.5 text-zinc-600 dark:text-zinc-400">
                            <li>Each draw is <span className="font-semibold">independent</span>. Last number tells you nothing about the next.</li>
                            <li><span className="font-semibold">Uniform:</span> All numbers equally likely.</li>
                            <li><span className="font-semibold">Gaussian:</span> Middle numbers more likely (if balls were weighted/arranged that way).</li>
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
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Item</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Meaning</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">What to remember</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Uncorrelated noise</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Samples are independent</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">No memory; cannot predict next sample</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">UU noise</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Uniform distribution</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">All values in range equally likely</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">UG noise</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Gaussian distribution</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Values near mean; 99% in <InlineMath math="\mu \pm 3\sigma" /></td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">"White" property</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Flat spectrum</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Equal power at all frequences</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Serial correlation</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Adjacent sample relation</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Uncorrelated ≈ 0; Brownian ≈ 1</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Covariance</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="Cov=0" /></td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Lack of linear dependence</td>
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
                        src="/uncn.png" // replace with your actual file in /public
                        alt="Visualization of uncorrelated noise characteristics"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
