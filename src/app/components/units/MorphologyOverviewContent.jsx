'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Scan,
    Grid3X3,
    Minimize2,
    Maximize2,
    Layers,
    ArrowRight,
    Circle,
    Square,
    Cross,
    Minus,
    Combine,
    Filter,
    Table,
    Info,
    Check
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

// Helper for 3x3 Grid
const GridDisplay = ({ data, label, highlightColor = "blue" }) => (
    <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">{label}</span>
        <div className="grid grid-cols-3 gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
            {data.flat().map((val, i) => (
                <div
                    key={i}
                    className={`
                        w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold transition-all
                        ${val === 1
                            ? `bg-${highlightColor}-500 text-white shadow-sm`
                            : 'bg-white dark:bg-zinc-900 text-zinc-300'
                        }
                    `}
                >
                    {val}
                </div>
            ))}
        </div>
    </div>
);

// Helper for 5x5 Grid (Visualizing Erosion/Dilation)
const ImageGrid = ({ data, label, activeColor = "zinc" }) => (
    <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider font-mono">{label}</span>
        <div className="grid grid-cols-5 gap-0.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            {data.flat().map((val, i) => (
                <div
                    key={i}
                    className={`
                        w-4 h-4 text-[0px]
                        ${val === 1
                            ? `bg-${activeColor}-500 shadow-sm`
                            : 'bg-white dark:bg-zinc-950/50'
                        }
                    `}
                />
            ))}
        </div>
    </div>
);


export function MorphologyOverviewContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. What is Morphology? */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-indigo-900/10 py-3 rounded-r-xl font-medium">
                    Morphological operations are all about <span className="font-bold text-indigo-700 dark:text-indigo-300">shape</span>. By sliding a "probe" called a <span className="font-bold">Structuring Element (SE)</span> over the image, we can analyze or modify shapes based on how they interact with this probe.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Shape Analysis</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Binary Images</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Set Theory</span>
                </div>
            </motion.div>

            {/* 2. Structuring Element (SE) */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Grid3X3 size={16} className="text-zinc-400" />
                    2) The Tool: Structuring Element (SE)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Square size={14} />
                            <span className="font-bold text-xs uppercase">Square (3x3)</span>
                        </div>
                        <GridDisplay
                            label="Matrix"
                            data={[[1, 1, 1], [1, 1, 1], [1, 1, 1]]}
                            highlightColor="indigo"
                        />
                        <p className="text-[10px] text-center text-zinc-400">Standard choice tailored for rectangular shapes.</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Combine size={14} className="rotate-45" />
                            <span className="font-bold text-xs uppercase">Cross</span>
                        </div>
                        <GridDisplay
                            label="Matrix"
                            data={[[0, 1, 0], [1, 1, 1], [0, 1, 0]]}
                            highlightColor="indigo"
                        />
                        <p className="text-[10px] text-center text-zinc-400">Approximation of a disk; smoother results.</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Minus size={14} className="rotate-90" />
                            <span className="font-bold text-xs uppercase">Line</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                            {[1, 1, 1].map((v, i) => <div key={i} className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white text-[10px] font-bold">1</div>)}
                        </div>
                        <p className="text-[10px] text-center text-zinc-400">Detects vertical features only.</p>
                    </div>
                </div>
            </motion.div>

            {/* 3. Basic Operations: Erosion & Dilation */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Minimize2 size={16} className="text-zinc-400" />
                    3) Basic Operations
                </h4>

                {/* Erosion */}
                <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                            <Minimize2 size={20} />
                            <h5 className="font-bold text-lg">Erosion</h5>
                        </div>
                        <p className="text-xs text-rose-800/70 dark:text-rose-300/70 leading-relaxed">
                            <span className="font-bold">Shrinks objects.</span> Checks if the SE <span className="underline">completely fits</span> inside the shape. If not, the pixel is removed.
                        </p>
                        <ul className="space-y-1 text-[10px] text-rose-700/60 dark:text-rose-400/60 list-disc list-inside">
                            <li>Removes small noise</li>
                            <li>Separates touching objects</li>
                            <li>Thins boundaries</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-800/30">
                        <ImageGrid
                            label="Before"
                            data={[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]}
                            activeColor="zinc"
                        />
                        <ArrowRight size={16} className="text-zinc-300" />
                        <ImageGrid
                            label="After (Erosion)"
                            data={[[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]]}
                            activeColor="rose"
                        />
                    </div>
                </div>

                {/* Dilation */}
                <div className="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                            <Maximize2 size={20} />
                            <h5 className="font-bold text-lg">Dilation</h5>
                        </div>
                        <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
                            <span className="font-bold">Grows objects.</span> Checks if the SE <span className="underline">touches</span> any part of the shape. If yes, the pixel is added.
                        </p>
                        <ul className="space-y-1 text-[10px] text-emerald-700/60 dark:text-emerald-400/60 list-disc list-inside">
                            <li>Fills holes and gaps</li>
                            <li>Connects broken edges</li>
                            <li>Thickens boundaries</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                        <ImageGrid
                            label="Before"
                            data={[[0, 0, 0, 0, 0], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], [0, 0, 0, 0, 0]]}
                            activeColor="zinc"
                        />
                        <ArrowRight size={16} className="text-zinc-300" />
                        <ImageGrid
                            label="After (Dilation)"
                            data={[[0, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 1, 1, 1, 1], [0, 1, 1, 1, 1]]}
                            activeColor="emerald"
                        />
                    </div>
                </div>
            </motion.div>

            {/* 4. Combining: Opening vs Closing */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Combine size={16} className="text-zinc-400" />
                    4) Combining Operations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Opening */}
                    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h6 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Opening
                                </h6>
                                <span className="text-[10px] font-mono text-zinc-400">Erosion → Dilation</span>
                            </div>
                            <Filter size={16} className="text-blue-500 opacity-50" />
                        </div>

                        <div className="flex items-center gap-2 text-[10px] justify-center bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded-lg border border-zinc-100 dark:border-zinc-700 text-zinc-500 font-mono">
                            <span className="px-2 py-1 bg-white dark:bg-zinc-800 shadow-sm rounded">Shrink</span>
                            <ArrowRight size={12} />
                            <span className="px-2 py-1 bg-white dark:bg-zinc-800 shadow-sm rounded">Grow Back</span>
                        </div>

                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            Removes small objects (noise) while keeping main shapes intact. Cleans "salt" noise.
                        </p>
                    </div>

                    {/* Closing */}
                    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h6 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Closing
                                </h6>
                                <span className="text-[10px] font-mono text-zinc-400">Dilation → Erosion</span>
                            </div>
                            <Filter size={16} className="text-amber-500 opacity-50" />
                        </div>

                        <div className="flex items-center gap-2 text-[10px] justify-center bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded-lg border border-zinc-100 dark:border-zinc-700 text-zinc-500 font-mono">
                            <span className="px-2 py-1 bg-white dark:bg-zinc-800 shadow-sm rounded">Fill Gaps</span>
                            <ArrowRight size={12} />
                            <span className="px-2 py-1 bg-white dark:bg-zinc-800 shadow-sm rounded">Restore Size</span>
                        </div>

                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            Fills small holes and gaps while keeping separation. Cleans "pepper" noise.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-zinc-400" />
                    Quick Summary in One View
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/50">
                            <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 uppercase tracking-tighter">
                                <th className="p-4 font-bold">Technique</th>
                                <th className="p-4 font-bold">Action / Goal</th>
                                <th className="p-4 font-bold">Key Application</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 italic text-zinc-500">
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC flex items-center gap-2"><Minimize2 size={12} className="text-rose-500" /> Erosion</td>
                                <td className="p-4">Shrink objects</td>
                                <td className="p-4">Remove small noise, thin objects</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC flex items-center gap-2"><Maximize2 size={12} className="text-emerald-500" /> Dilation</td>
                                <td className="p-4">Grow objects</td>
                                <td className="p-4">Fill holes, connect gaps</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC flex items-center gap-2"><Layers size={12} className="text-blue-500" /> Opening</td>
                                <td className="p-4">Erode then Dilate</td>
                                <td className="p-4">Preserve big objects, remove small debris</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC flex items-center gap-2"><Combine size={12} className="text-amber-500" /> Closing</td>
                                <td className="p-4">Dilate then Erode</td>
                                <td className="p-4">Fill internal holes, smooth contours</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors bg-zinc-50/30 dark:bg-zinc-900/30">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Edge Detectors</td>
                                <td className="p-4">Find intensity changes</td>
                                <td className="p-4">Sobel, Canny, Prewitt</td>
                            </tr>
                            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors bg-zinc-50/30 dark:bg-zinc-900/30">
                                <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 NOT-ITALIC">Top-Hats</td>
                                <td className="p-4">Compare image to Opening/Closing</td>
                                <td className="p-4">Highlight small bright/dark details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    );
}
