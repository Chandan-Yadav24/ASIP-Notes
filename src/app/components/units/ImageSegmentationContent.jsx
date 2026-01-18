'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Network,
    Zap,
    Activity,
    Maximize,
    Layout,
    Target,
    ArrowRight,
    Table,
    Info,
    Check,
    Search,
    Focus,
    Cpu,
    Shield,
    Eye,
    Grid,
    Binary,
    Waves,
    Scissors,
    MousePointer2,
    Compass,
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

export function ImageSegmentationContent() {
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
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-500/5 py-4 rounded-r-xl font-medium text-zinc-400">
                    <span className="text-zinc-200 font-bold uppercase block mb-1">Image Segmentation</span>
                    The process of partitioning a digital image into meaningful parts or objects.
                    It simplifies the scene so that a computer can <span className="text-indigo-400 font-bold underline decoration-indigo-500/30">locate and identify</span> distinct regions.
                </p>
            </motion.div>

            {/* 1. Principal Types */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Layout size={16} className="text-indigo-500" />
                    1) Principal Types of Segmentation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Semantic Segmentation",
                            desc: "Assigns a class label to every pixel (e.g., road, car, tree).",
                            label: "Class-Level Map",
                            icon: Grid,
                            color: "text-indigo-400"
                        },
                        {
                            title: "Instance Segmentation",
                            desc: "Separates individual objects of the same class (Car 1 vs Car 2).",
                            label: "Object-Level Masks",
                            icon: Target,
                            color: "text-violet-400"
                        },
                        {
                            title: "Boundary Detection",
                            desc: "Focuses on finding transitions between regions rather than full maps.",
                            label: "Edge-Based Flow",
                            icon: Activity,
                            color: "text-cyan-400"
                        }
                    ].map((type, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden group">
                            <type.icon className={`absolute -right-2 -top-2 opacity-5 scale-150 group-hover:rotate-12 transition-transform ${type.color}`} size={60} />
                            <div className={`text-[10px] font-black uppercase tracking-tighter ${type.color}`}>{type.label}</div>
                            <h5 className="text-sm font-bold text-white uppercase">{type.title}</h5>
                            <p className="text-[11px] text-zinc-500 italic leading-relaxed">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Key Techniques */}
            <motion.div variants={itemVariants} className="space-y-8">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Zap size={16} className="text-indigo-500" />
                    2) Key Segmentation Techniques
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* A. Hough Transform */}
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                <Search size={18} />
                            </div>
                            <h5 className="text-sm font-bold text-white uppercase">Hough Transform</h5>
                        </div>
                        <p className="text-xs text-zinc-400">Detects geometric shapes like lines and circles using a parameter-space voting scheme.</p>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-600 italic">
                            <Check size={12} className="text-emerald-500" /> Best for architectural lines & pipe detection
                        </div>
                    </div>

                    {/* B. Thresholding & Otsu */}
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                                <Maximize size={18} />
                            </div>
                            <h5 className="text-sm font-bold text-white uppercase">Thresholding & Otsu</h5>
                        </div>
                        <p className="text-xs text-zinc-400">Converts image to binary. Otsu's method automatically calculates the optimal global threshold.</p>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-600 italic">
                            <Check size={12} className="text-emerald-500" /> Best for bimodal histograms
                        </div>
                    </div>

                    {/* C. Watershed */}
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                <Waves size={18} />
                            </div>
                            <h5 className="text-sm font-bold text-white uppercase">Watershed Algorithm</h5>
                        </div>
                        <p className="text-xs text-zinc-400">Treats image like a topographic surface; boundaries form along "watershed lines" as sources flood basins.</p>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-600 italic text-rose-400">
                            <Info size={12} className="text-rose-400" /> Risk of over-segmentation
                        </div>
                    </div>

                    {/* D. Snakes & GrabCut */}
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                <Scissors size={18} />
                            </div>
                            <h5 className="text-sm font-bold text-white uppercase">Active Contours & GrabCut</h5>
                        </div>
                        <p className="text-xs text-zinc-400">Snakes minimize energy to wrap around boundaries. GrabCut uses graph-cuts for interactive extraction.</p>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-600 italic">
                            <Check size={12} className="text-emerald-500" /> Best for precise foreground isolation
                        </div>
                    </div>
                </div>

                {/* Region Based Methods */}
                <div className="p-6 rounded-3xl bg-zinc-900 border border-indigo-500/10 space-y-6">
                    <h5 className="text-xs font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <Compass size={16} /> Region-Based Methods
                    </h5>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <div className="text-[11px] font-bold text-white uppercase">1) Region Growing</div>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">
                                Starts from <span className="text-indigo-400 underline italic">seed points</span> and adds neighbors that satisfy a homogeneity rule (similar color/texture).
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[11px] font-bold text-white uppercase">2) Split and Merge</div>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">
                                Uses <span className="text-indigo-400 underline italic">quadtrees</span> to split the image into smaller regions, then merges similar neighbors together.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. Challenges & Applications */}
            <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="font-bold text-zinc-100 border-b border-indigo-500/20 pb-2 flex items-center gap-2 uppercase tracking-tight text-xs">
                    <Target size={16} className="text-indigo-500" />
                    3) Challenges and Applications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Common Challenges</div>
                        <div className="grid grid-cols-2 gap-2">
                            {['Noise Interference', 'Uneven Lighting', 'Object Occlusion', 'Complex Shapes'].map((c, i) => (
                                <div key={i} className="px-3 py-2 rounded-lg bg-zinc-950 border border-rose-500/10 text-[10px] text-zinc-600 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-900" /> {c}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Key Applications</div>
                        <div className="space-y-2">
                            {[
                                { t: "Medical", d: "Tumor/organ segmentation", i: Shield },
                                { t: "Autonomous", d: "Lane & obstacle detection", i: Cpu },
                                { t: "Remote Sensing", d: "Satellite land extraction", i: Compass }
                            ].map((app, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                                    <app.i size={14} className="text-indigo-400" />
                                    <div className="text-[10px]">
                                        <span className="text-white font-bold">{app.t}:</span> <span className="text-zinc-500 italic">{app.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Analogy */}
            <motion.div variants={itemVariants} className="bg-zinc-900 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500 rounded-lg">
                        <Info size={16} className="text-white" />
                    </div>
                    <h5 className="font-black text-indigo-400 uppercase tracking-widest text-xs">City Map Analogy</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center text-xs">
                    <div className="space-y-4 text-zinc-500 italic">
                        <p>Imagine a cluttered city map. <span className="text-white font-bold underline decoration-indigo-500/50">Segmentation</span> is like using highlighters to color:</p>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-emerald-500" /> Parks</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-indigo-500" /> Roads</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-rose-500" /> Buildings</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-amber-500" /> Water</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-medium leading-relaxed">
                        <p className="text-zinc-600">"Without segmentation, the computer sees only pixels; with highlighters, it understands <strong>structure</strong>."</p>
                    </div>
                </div>
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4 pt-8">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-indigo-500/20 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Segmentation vs Techniques
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-xl overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                        <thead className="bg-zinc-950">
                            <tr className="text-zinc-500 uppercase tracking-tighter border-b border-zinc-800">
                                <th className="p-4 font-bold">Category / Method</th>
                                <th className="p-4 font-bold">Main Idea</th>
                                <th className="p-4 font-bold">Best For</th>
                                <th className="p-4 font-bold">Limitation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-400">
                            {[
                                { cat: "Semantic", idea: "Label every pixel by class", best: "Scene Understanding", lim: "No individual instances" },
                                { cat: "Instance", idea: "Label + separate each object", best: "Counting / Tracking", lim: "Higher compute" },
                                { cat: "Hough Trans.", idea: "Vote in parameter space", best: "Lines / Circles", lim: "Geometric Shapes only" },
                                { cat: "Otsu's Meth.", idea: "Maximize between-class variance", best: "Bimodal Images", lim: "Uneven lighting" },
                                { cat: "Watershed", idea: "Flooding on intensity surface", best: "Touching Objects", lim: "Over-segmentation" },
                                { cat: "Snakes", idea: "Energy-minimizing contour", best: "Smooth Boundaries", lim: "Sensitive to init" },
                                { cat: "GrabCut", idea: "Interactive Graph-Cut + GMM", best: "Foreground Extraction", lim: "Needs user input" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                                    <td className="p-4 font-bold text-indigo-400 capitalize">{row.cat}</td>
                                    <td className="p-4 italic text-zinc-300">{row.idea}</td>
                                    <td className="p-4 text-zinc-500">{row.best}</td>
                                    <td className="p-4 text-rose-900/60 font-medium">{row.lim}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Image at last */}
            <motion.div variants={itemVariants} className="pt-8">
                <ZoomableImage
                    src="/imgseg.png"
                    alt="Image Segmentation Framework"
                />
            </motion.div>

        </motion.div>
    );
}
