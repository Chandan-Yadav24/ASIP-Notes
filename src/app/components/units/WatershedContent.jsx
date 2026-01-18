'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Waves,
    Mountain,
    Droplets,
    ArrowRight,
    Table,
    Info,
    Check,
    AlertTriangle,
    MapPin,
    Layers,
    Activity,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';

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

export function WatershedContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-zinc-300"
        >
            {/* Intro Header */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-blue-500 pl-4 italic bg-blue-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Watershed Algorithm</span>
                    A morphological segmentation method that treats a grayscale image as a <span className="text-blue-400 font-bold">topographic surface</span>. It is particularly powerful for separating touching or overlapping objects like cells, grains, or coins.
                </p>
            </motion.div>

            {/* 1. Core Concepts */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-blue-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Mountain size={16} className="text-blue-500" />
                    1) Core Concepts: The Topographic Metaphor
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                        <Waves size={80} className="absolute -right-4 -top-4 text-blue-500/10 group-hover:rotate-6 transition-transform" />
                        <div className="flex items-center gap-2">
                            <span className="p-2 rounded bg-blue-500/20 text-blue-400"><Mountain size={14} /></span>
                            <span className="text-xs font-bold text-white uppercase">Intensity Map</span>
                        </div>
                        <ul className="space-y-2 text-[11px] text-zinc-500 italic pl-2">
                            <li><span className="text-zinc-300 font-bold">High Intensity:</span> Ridges (High Elevation)</li>
                            <li><span className="text-zinc-300 font-bold">Low Intensity:</span> Valleys (Basins/Minima)</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        {[
                            { t: "Regional Minima", d: "The lowest points (valley bottoms) where water collects." },
                            { t: "Catchment Basin", d: "The set of pixels draining into a single minimum (segments)." },
                            { t: "Watershed Lines", d: "Ridge boundaries separating basins (final edges)." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                                <Activity size={12} className="mt-1 text-blue-400 shrink-0" />
                                <div>
                                    <span className="block text-[10px] font-bold text-zinc-300 uppercase">{item.t}</span>
                                    <span className="text-[10px] text-zinc-500 italic">{item.d}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 2. Process */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-blue-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Droplets size={16} className="text-blue-500" />
                    2) Segmentation Process (Flood Simulation)
                </h4>
                <div className="relative space-y-4">
                    {/* Line connecting steps */}
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />

                    {[
                        {
                            step: "01",
                            title: "Gradient Computation",
                            desc: "Apply to gradient magnitude rather than raw intensity. Boundaries become high-gradient ridges; interiors become low-gradient basins."
                        },
                        {
                            step: "02",
                            title: "Marker Selection",
                            desc: "Crucial to prevent over-segmentation. Define Internal Markers (objects) and External Markers (background)."
                        },
                        {
                            step: "03",
                            title: "Flood-Fill Simulation",
                            desc: "Start 'flooding' from markers. As 'water' rises, catchment basins expand outward."
                        },
                        {
                            step: "04",
                            title: "Dam Construction",
                            desc: "When two basins meet, build a 'dam' (watershed line) to keep them separate. These dams form the final boundaries."
                        }
                    ].map((s, i) => (
                        <div key={i} className="relative pl-12 group">
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-zinc-900 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400 z-10 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                {s.step}
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all">
                                <h5 className="text-[11px] font-bold text-zinc-200 uppercase tracking-wide mb-1">{s.title}</h5>
                                <p className="text-[10px] text-zinc-500 italic leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. Pros/Cons & Suitability */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-blue-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-blue-500" />
                    3) Suitability & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400 mb-2">
                            <Check size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Ideal Use Cases</span>
                        </div>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li>Separating <span className="text-zinc-300 font-bold">touching objects</span> (cells, coins).</li>
                            <li>Handling <span className="text-zinc-300 font-bold">irregular shapes</span> naturally.</li>
                            <li>No need to define object count beforehand.</li>
                        </ul>
                    </div>
                    <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 mb-2">
                            <AlertTriangle size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Major Weakness</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 italic leading-relaxed">
                            <span className="text-zinc-300 font-bold">Over-segmentation</span> due to noise. Noise creates false local minima, leading to extensive fragmentation. Requires smoothing or marker-controlled approaches.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <MapPin size={80} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-blue-400 uppercase tracking-widest text-xs">Flooding Valleys & Dams</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic leading-relaxed">
                    <p>Imagine a rocky landscape where rain fills the valleys. Each valley has a drain hole (minimum).</p>
                    <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 text-center font-medium relative">
                        <p className="text-zinc-600">
                            "As water rises from the holes, separate lakes form. Before two lakes merge, build a <span className="text-blue-400 font-bold">Dam</span>. These dams become the borders."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-blue-500/20 pb-2">
                    <Table size={16} className="text-blue-500" />
                    Watershed Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Element</th>
                                <th className="p-4 font-bold">Image Interpretation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { e: "Elevation", i: "Pixel Intensity / Gradient Magnitude" },
                                { e: "Regional Minima", i: "Valley bottoms (Seed points)" },
                                { e: "Catchment Basin", i: "Segmented region/object" },
                                { e: "Watershed Line", i: "Ridge separating basins (Boundary)" },
                                { e: "Markers", i: "Controlled seeds (prevents over-segmentation)" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-blue-500/5 transition-colors">
                                    <td className="p-4 font-bold text-blue-400 uppercase tracking-tighter">{row.e}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.i}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/walgo.png"
                    alt="Watershed Algorithm Segmentation Process"
                />
            </motion.div>

        </motion.div>
    );
}
