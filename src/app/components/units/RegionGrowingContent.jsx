'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Target,
    Maximize,
    Zap,
    Layers,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Stethoscope,
    Satellite,
    ScanEye,
    Activity,
    AlertCircle,
    Image as ImageIcon
} from 'lucide-react';
import ZoomableImage from '@/app/components/ZoomableImage';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

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

export function RegionGrowingContent() {
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
                <p className="leading-relaxed border-l-4 border-emerald-500 pl-4 italic bg-emerald-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Region Growing</span>
                    A mid-level image segmentation method that builds regions directly by grouping neighboring pixels with similar properties like intensity, color, or texture. Unlike edge-based methods, it starts inside objects and expands outward.
                </p>
            </motion.div>

            {/* 1. Algorithm Algorithm Steps */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layers size={16} className="text-emerald-500" />
                    1) Region Growing Workflow
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        {
                            title: "Initialization",
                            desc: "Select seed points manually or automatically based on color/texture cues.",
                            icon: Target,
                            tag: "Seed Phase"
                        },
                        {
                            title: "Define Criterion",
                            desc: "Establish similarity rules: comparing candidate pixels to seeds or current region means.",
                            icon: Search,
                            tag: "Logic Phase"
                        },
                        {
                            title: "Iterative Expansion",
                            desc: "Grow regions using 4 or 8-connectivity. Add neighbors that meet the rule.",
                            icon: Maximize,
                            tag: "Growth Phase"
                        },
                        {
                            title: "Termination",
                            desc: "Stop when no surrounding pixels satisfy the criterion. Repeat for next seed.",
                            icon: Activity,
                            tag: "Cycle End"
                        }
                    ].map((s, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                <s.icon size={40} className="text-emerald-400" />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{s.tag}</span>
                            </div>
                            <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter">{s.title}</h5>
                            <p className="text-[10px] text-zinc-500 italic pr-8">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Mathematical Criterion */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Activity size={16} className="text-emerald-500" />
                    2) Common Mathematical Criterion
                </h4>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                    <div className="bg-zinc-900/50 p-4 rounded-2xl border border-emerald-500/30 inline-block">
                        <span className="text-[10px] text-zinc-500 uppercase block mb-2 font-bold tracking-tighter">Intensity-Based Similarity</span>
                        <BlockMath math="|I(x,y) - \mu_R| \le T" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[9px] text-zinc-500 font-mono italic">
                        <div>I(x,y): candidate pixel</div>
                        <div>μR: current region mean</div>
                        <div>T: allowed threshold</div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Strengths & Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-emerald-500" />
                    3) Advantages & Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-emerald-500/20 text-[10px]">Advantages</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Simple:</span> Computationally efficient and intuitive.</li>
                            <li><span className="text-zinc-300 font-bold">Irregular Shapes:</span> Excellent for non-standard object forms.</li>
                            <li><span className="text-zinc-300 font-bold">Adaptive:</span> Handles varying sizes if homogeneous.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 space-y-4">
                        <span className="text-rose-400 font-bold uppercase tracking-widest block underline underline-offset-8 decoration-rose-500/20 text-[10px]">Limitations</span>
                        <ul className="space-y-2 text-[10px] text-zinc-500 list-disc pl-4 italic">
                            <li><span className="text-zinc-300 font-bold">Seed Dependency:</span> Output highly varies with initial choice.</li>
                            <li><span className="text-zinc-300 font-bold">Noise Leakage:</span> Sensitive to shading and artifacts.</li>
                            <li><span className="text-zinc-300 font-bold">Fragmentation:</span> Unsteady illumination can break regions.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* 4. Applications */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-emerald-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <ScanEye size={16} className="text-emerald-500" />
                    4) Real-World Applications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Medical Imaging", icon: Stethoscope, desc: "Segmenting tissues/organs." },
                        { title: "Satellite Data", icon: Satellite, desc: "Land and terrain mapping." },
                        { title: "Object Recognition", icon: ScanEye, desc: "Grouping consistent regions." }
                    ].map((app, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-3 group hover:border-emerald-500/30 transition-all">
                            <app.icon size={20} className="mx-auto text-emerald-400" />
                            <h6 className="text-[10px] font-bold text-zinc-200 uppercase">{app.title}</h6>
                            <p className="text-[9px] text-zinc-500 italic">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <ImageIcon size={80} className="text-emerald-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-emerald-400 uppercase tracking-widest text-xs">Mapping a Garden Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs text-zinc-500 italic">
                    <p>Imagine mapping a garden bed composed of red mulch and green grass.</p>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600">"Pick one red mulch piece <span className="text-emerald-400 font-bold">(seed)</span>. Keep adding neighbors that match the color <span className="text-emerald-400 font-bold">(criterion)</span>. Stop once you hit grass."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-emerald-500/20 pb-2">
                    <Table size={16} className="text-emerald-500" />
                    Region Growing Summary
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Element</th>
                                <th className="p-4 font-bold">Meaning / Context</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { e: "Seed Points", m: "Starting pixels for each region" },
                                { e: "Homogeneity", m: "Similarity rule (Intensity/Color)" },
                                { e: "Connectivity", m: "4-neighbor or 8-neighbor growth" },
                                { e: "Strength", m: "Simple, good for irregular objects" },
                                { e: "Weakness", m: "Sensitive to noise & seed choice" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-emerald-500/5 transition-colors">
                                    <td className="p-4 font-bold text-emerald-400 uppercase tracking-tighter">{row.e}</td>
                                    <td className="p-4 text-zinc-500 italic font-medium">{row.m}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/rg.png"
                    alt="Region Growing Process"
                />
            </motion.div>

        </motion.div>
    );
}
