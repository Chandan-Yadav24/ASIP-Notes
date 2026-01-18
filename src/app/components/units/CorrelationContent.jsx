'use client';

import React from 'react';
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { motion } from "framer-motion";
import {
    Link2,
    Binary,
    Activity,
    Repeat,
    ArrowRightLeft,
    Dot,
    LayoutTemplate,
    Layers,
    Search,
    CheckCircle2,
    Table,
    Zap,
    MousePointer2
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

export function CorrelationContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300"
        >

            {/* 1) What correlation means */}
            <motion.div variants={itemVariants} className="card space-y-3 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-zinc-900 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Link2 size={18} />
                    </div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">1) What correlation means</h4>
                </div>
                <p className="leading-relaxed">
                    <span className="font-semibold">Correlation</span> is a mathematical measure of how strongly two variables or signals <span className="text-blue-600 dark:text-blue-400 font-medium italic">change together</span>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-xs">If two signals are <span className="font-bold">highly correlated</span>, knowing one gives information about the other.</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-black/20 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-xs">Measures <span className="font-bold underline decoration-blue-500/30 underline-offset-4">similarity</span> and the linear relationship between signals.</p>
                    </div>
                </div>
            </motion.div>

            {/* 2) Pearson correlation coefficient ρ */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Binary size={18} className="text-zinc-400" />
                    2) Pearson correlation coefficient <InlineMath math="\rho" />
                </h4>
                <div className="card space-y-4">
                    <p>The most common measure of correlation, written as <InlineMath math="\rho" />. It always falls within:</p>
                    <div className="flex justify-center p-4 bg-zinc-900 rounded-xl relative overflow-hidden">
                        <BlockMath math="-1 \le \rho \le +1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-2 bg-green-50/50 dark:bg-green-900/10 rounded border border-green-200 dark:border-green-800/50">
                            <span className="font-bold text-green-600 dark:text-green-400 uppercase tracking-tighter text-[10px]">Positive (ρ {">"} 0)</span>
                            <p className="mt-1">Both go up together.</p>
                        </div>
                        <div className="p-2 bg-rose-50/50 dark:bg-rose-900/10 rounded border border-rose-200 dark:border-rose-800/50">
                            <span className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-tighter text-[10px]">Negative (ρ {"<"} 0)</span>
                            <p className="mt-1">One goes up, other goes down.</p>
                        </div>
                        <div className="p-2 bg-zinc-100/50 dark:bg-zinc-800/20 rounded border border-zinc-200 dark:border-zinc-700">
                            <span className="font-bold text-zinc-500 uppercase tracking-tighter text-[10px]">Near Zero (ρ ≈ 0)</span>
                            <p className="mt-1">Weak or no linear relationship.</p>
                        </div>
                    </div>

                    <div className="p-3 bg-amber-50/20 dark:bg-amber-900/10 border-l-4 border-amber-400 rounded-r-lg">
                        <p className="text-xs italic text-zinc-600 dark:text-zinc-400">
                            <span className="font-bold text-amber-600 dark:text-amber-400 not-italic">Note:</span> Independent signals always have <InlineMath math="\rho = 0" />, but <InlineMath math="\rho = 0" /> doesn't always guarantee independence (non-linear ties might exist).
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3) Correlation in signal processing */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <Activity size={18} className="text-zinc-400" />
                    3) Correlation in signal processing
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card space-y-2 border-t-2 border-blue-400">
                        <div className="flex items-center gap-2 mb-1">
                            <Zap size={14} className="text-blue-500" />
                            <span className="font-bold text-xs uppercase">Serial Correlation</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Measures relationship with the <span className="font-semibold underline decoration-blue-200 underline-offset-2">next sample</span>.
                        </p>
                        <ul className="text-[10px] space-y-1 text-zinc-400 list-disc ml-4">
                            <li>Uncorrelated Noise: ≈ 0</li>
                            <li>Brownian Noise: ≈ 1 (has memory)</li>
                        </ul>
                    </div>

                    <div className="card space-y-2 border-t-2 border-indigo-400">
                        <div className="flex items-center gap-2 mb-1">
                            <Repeat size={14} className="text-indigo-500" />
                            <span className="font-bold text-xs uppercase">Autocorrelation</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Signal vs <span className="font-semibold italic underline decoration-indigo-200 underline-offset-2">delayed copy</span> of itself.
                        </p>
                        <p className="text-[10px] text-zinc-400 italic">Used for finding periodicity and pitch estimation.</p>
                    </div>

                    <div className="card space-y-2 border-t-2 border-pink-400">
                        <div className="flex items-center gap-2 mb-1">
                            <ArrowRightLeft size={14} className="text-pink-500" />
                            <span className="font-bold text-xs uppercase">Cross-correlation</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Compares two <span className="font-semibold italic underline decoration-pink-200 underline-offset-2">different signals</span> at various shifts.
                        </p>
                        <p className="text-[10px] text-zinc-400 italic">Used for sync, delay estimation, and pattern matching.</p>
                    </div>

                    <div className="card space-y-2 border-t-2 border-emerald-400 bg-emerald-50/5 dark:bg-emerald-900/5">
                        <div className="flex items-center gap-2 mb-1">
                            <Dot size={18} className="text-emerald-500" />
                            <span className="font-bold text-xs uppercase">Dot Product Connection</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            If signals are unbiased (mean 0) and normalized, correlation is the <span className="font-bold text-emerald-600/80 uppercase tracking-widest text-[10px]">Inner Product</span>.
                        </p>
                        <p className="text-[10px] text-zinc-400 italic">High dot product = High similarity.</p>
                    </div>
                </div>
            </motion.div>

            {/* 4) Correlation in image processing */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <LayoutTemplate size={18} className="text-zinc-400" />
                    4) Correlation in image processing
                </h4>
                <div className="card bg-zinc-50 dark:bg-zinc-800/20 p-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                        <Search size={80} />
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 mt-1">
                            <Search size={24} className="text-indigo-500" />
                        </div>
                        <div className="space-y-2">
                            <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Template Matching</span>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Sliding a small matrix (<span className="font-semibold italic underline decoration-indigo-200 underline-offset-2">kernel/template</span>) across an image to find the best match score at every position.
                            </p>
                            <div className="bg-zinc-100 dark:bg-zinc-900 p-2 rounded text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 inline-block">
                                Highest Score = Best Match
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5) Correlation vs convolution */}
            <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1 flex items-center gap-2">
                    <ArrowRightLeft size={18} className="text-zinc-400" />
                    5) Correlation vs Convolution
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card space-y-2 bg-zinc-900 text-zinc-100 border-none">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Correlation</span>
                        <p className="text-xs leading-relaxed">Kernel is applied <span className="font-bold text-white uppercase italic">as-is</span>. No flipping.</p>
                    </div>
                    <div className="card space-y-2 bg-zinc-900 text-zinc-100 border-none">
                        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Convolution</span>
                        <p className="text-xs leading-relaxed">Kernel is <span className="font-bold text-white uppercase italic">flipped (180°)</span> before sliding.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-emerald-50/30 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 rounded-lg text-[10px] text-emerald-800 dark:text-emerald-400">
                    <CheckCircle2 size={14} />
                    If the kernel is <span className="font-bold">Symmetric</span>, flipping doesn't change it, and Correlation = Convolution.
                </div>
            </motion.div>

            {/* Analogy: the translucent overlay */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-r from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent pointer-events-none"></div>
                <div className="flex items-start gap-4 p-2 relative z-10">
                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 mt-1">
                        <Layers size={28} className="text-blue-500" />
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">The Translucent Overlay Analogy</span>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                            Imagine sliding a transparent template over a big picture. At each position, you measure <span className="font-semibold text-blue-600 dark:text-blue-400 not-italic">"how well does it line up?"</span>
                        </p>
                        <p className="text-[11px] text-zinc-500 mt-1">The score is the correlation value; the highest score marks the spot where the template fits best.</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="card space-y-2">
                <div className="flex items-center gap-2 mb-1">
                    <Table size={16} className="text-zinc-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-xs">Summary table</span>
                </div>
                <div className="overflow-x-auto text-[10px]">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-left font-semibold">Concept</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-left font-semibold">Comparison</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-left font-semibold text-blue-500">Observation</th>
                                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-left font-semibold">Common Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold">Pearson ρ</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 whitespace-nowrap">Two variables/signals</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5">Strength + Direction (-1 to +1)</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic">General relationship</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold">Serial Corr</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5">Sample vs Next sample</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-emerald-600 font-medium">Reveals "memory" / dependence</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic">Randomness detection</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold">Autocorr</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5">Signal vs Delayed self</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-indigo-600 font-medium whitespace-nowrap">Periodicity / Repetition</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic">Pitch detection</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold whitespace-nowrap">Cross-corr</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 whitespace-nowrap">Two diff. signals w/ shift</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-blue-600 font-medium">Best alignment / time delay</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic">Sync, detection</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold">Image Corr</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5">Template vs region</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5">Match score at each position</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic">Template matching</td>
                            </tr>
                            <tr>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 font-bold whitespace-nowrap italic">Conv. vs Corr.</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 whitespace-nowrap">Kernel usage rule</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-rose-600 font-medium">Convolution flips the kernel</td>
                                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-zinc-500 italic underline decoration-zinc-200">Filtering (LTI systems)</td>
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
                        src="/correlation.png" // replace with your actual file in /public
                        alt="Visualization of correlation concepts in time and space"
                        width={1200}
                        height={600}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
