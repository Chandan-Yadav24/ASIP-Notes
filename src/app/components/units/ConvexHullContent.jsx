'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Shapes,
    Zap,
    Target,
    Layers,
    CheckCircle2,
    MoveRight,
    Activity,
    Eye,
    Pentagon,
    Table,
    Search,
    Network,
    MousePointer2
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function ConvexHullContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Intuition */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-cyan-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Eye className="text-cyan-500" /> 1. Definition & Intuition
                </h4>
                <p className="leading-relaxed">
                    The <strong>Convex Hull</strong> of an object is the smallest convex shape that completely encloses all of its pixels. It "fills in" all inward dents to create a perfectly convex boundary.
                </p>
                <div className="bg-cyan-50/50 dark:bg-cyan-950/10 p-6 rounded-2xl border border-cyan-100 dark:border-cyan-900/30 flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Zap className="text-cyan-600 dark:text-cyan-400" size={24} />
                    </div>
                    <div>
                        <strong className="block text-cyan-900 dark:text-cyan-100 text-xs mb-1">Rubber Band Analogy</strong>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 italic">
                            Imagine the object's pixels as nails in a board. If you stretch a rubber band around them and let it tighten, the resulting shape is the convex hull.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Visual Aid */}
            <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <ZoomableImage
                    src="/convexhull.png"
                    alt="Convex Hull Computation"
                    caption="Visualizing the convex hull enclosing a set of scattered points."
                />
            </motion.div>

            {/* 2. Computation Steps */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-cyan-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100">
                    2. Steps for Computing the Convex Hull
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-cyan-500 uppercase block mb-2">Step 01</span>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs mb-1">Preprocessing</strong>
                        <p className="text-[10px] text-zinc-500">Thresholding and noise removal to isolate the object.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-cyan-500 uppercase block mb-2">Step 02</span>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs mb-1">Point Collection</strong>
                        <p className="text-[10px] text-zinc-500">Extracting coordinates of all boundary or edge pixels.</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-cyan-500 uppercase block mb-2">Step 03</span>
                        <strong className="block text-zinc-900 dark:text-zinc-100 text-xs mb-1">Algorithm</strong>
                        <p className="text-[10px] text-zinc-500">Applying a geometric algorithm (Graham, Jarvis, etc.) to form the polygon.</p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Algorithms Comparison */}
            <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2">
                    <Table className="text-cyan-500" size={20} />
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Convex Hull Algorithms</h4>
                </div>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-[11px] text-left border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-900">
                            <tr>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Algorithm</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Core Idea</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Complexity</th>
                                <th className="px-4 py-3 font-bold border-b border-zinc-200 dark:border-zinc-800">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { name: "Graham Scan", idea: "Polar angle sorting + Turn check", comp: "O(n log n)", best: "Large point sets" },
                                { name: "Jarvis's March", idea: "Repeated counter-clockwise wrapping", comp: "O(nh)", best: "Small sets / few hull points" },
                                { name: "QuickHull", idea: "Divide & Conquer (Find farthest points)", comp: "Avg: O(n log n)", best: "Practical general use" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-cyan-50/30 dark:hover:bg-cyan-950/20 transition-colors">
                                    <td className="px-4 py-3 font-bold text-cyan-600 dark:text-cyan-400">{row.name}</td>
                                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 italic">{row.idea}</td>
                                    <td className="px-4 py-3 font-mono text-zinc-500">{row.comp}</td>
                                    <td className="px-4 py-3 text-zinc-500">{row.best}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* 4. Numerical Example */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold border-l-4 border-cyan-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <MousePointer2 className="text-cyan-500" /> 4. Worked Example
                </h4>
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h5 className="font-bold text-xs uppercase text-zinc-400">Input Data</h5>
                        <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs font-mono mb-2">Input Points:</p>
                            <div className="flex flex-wrap gap-2 text-[10px]">
                                {['(1,2)', '(3,5)', '(6,4)', '(7,2)', '(4,1)', '(2,1)'].map((p, i) => (
                                    <span key={i} className={`px-2 py-1 rounded ${p === '(4,1)' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600' : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600'}`}>
                                        {p} {p === '(4,1)' && '(Inner)'}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">
                            Point (4,1) is enclosed by the others and will be discarded by all algorithms.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold text-xs uppercase text-zinc-400">Resulting Hull</h5>
                        <div className="p-4 bg-cyan-500 text-white rounded-xl shadow-lg shadow-cyan-500/20">
                            <div className="flex items-center gap-3 mb-2">
                                <Pentagon size={20} />
                                <strong className="text-sm">Hull Vertices (Ordered)</strong>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span>(1,2)</span> <MoveRight size={12} />
                                <span>(2,1)</span> <MoveRight size={12} />
                                <span>(7,2)</span> <MoveRight size={12} />
                                <span>(6,4)</span> <MoveRight size={12} />
                                <span>(3,5)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5. Applications */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold border-l-4 border-cyan-500 pl-3 text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Target className="text-cyan-500" /> 5. Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {[
                        { title: "Solidity", desc: "Object Area / Hull Area. High solidity = circular/compact objects.", icon: <Activity size={16} /> },
                        { title: "Classification", desc: "Identify cells, leaves, or characters based on convex degree.", icon: <Search size={16} /> },
                        { title: "Localization", desc: "Roughly enclose and simplify complex boundaries.", icon: <Network size={16} /> },
                        { title: "Shape Analysis", desc: "Distinguish convex vs. concave features in pathology.", icon: <Shapes size={16} /> }
                    ].map((app, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-colors">
                            <div className="text-cyan-500 mb-2">{app.icon}</div>
                            <strong className="block text-zinc-900 dark:text-zinc-100 mb-1">{app.title}</strong>
                            <p className="text-[10px] text-zinc-500 leading-tight">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Exam Summary */}
            <motion.div variants={itemVariants} className="flex gap-4 items-start p-5 rounded-xl bg-gradient-to-r from-slate-100 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-sm shadow-lg">
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-cyan-500" />
                <div>
                    <strong className="block mb-2 text-slate-900 dark:text-slate-100 text-base">Quick Summary: Convex Hull</strong>
                    <p className="leading-relaxed text-xs italic">
                        The <strong>Convex Hull</strong> is the smallest convex polygon enclosing all object pixels. It is computed via algorithms like Graham Scan (O(n log n)), Jarvis's March (Gift Wrapping), or QuickHull. Major applications include shape analysis via <strong>Solidity</strong>, object classification, and boundary simplification. Solid objects have high solidity (close to 1), while irregular shapes have lower values.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ConvexHullContent;
