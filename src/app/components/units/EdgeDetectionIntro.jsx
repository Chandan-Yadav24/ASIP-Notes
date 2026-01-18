'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    ScanLine,
    Activity,
    Compass,
    MapPin,
    AlertTriangle,
    TrendingUp,
    Zap
} from 'lucide-react';
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
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    }
};

export function EdgeDetectionIntro() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Definition */}
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-blue-500 pl-4 italic bg-blue-50 dark:bg-blue-900/10 py-3 rounded-r-xl font-medium">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">Edge Detection</span> is aimed at identifying pixels where there are <span className="font-bold text-blue-600 dark:text-blue-400">sharp changes in brightness</span>. These changes usually correspond to physical features like depth, material changes, or shadows.
                </p>
            </motion.div>

            {/* 2. Key Characteristics Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                        <Activity size={16} className="text-rose-500" /> Strength
                    </div>
                    <p className="text-xs text-zinc-500">Measures the <span className="italic">intensity</span> of the change.</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                        <Compass size={16} className="text-emerald-500" /> Orientation
                    </div>
                    <p className="text-xs text-zinc-500">Direction of the edge (0-180).</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                        <MapPin size={16} className="text-blue-500" /> Location
                    </div>
                    <p className="text-xs text-zinc-500">Spatial coordinates (x,y).</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                        <Zap size={16} className="text-amber-500" /> Type
                    </div>
                    <p className="text-xs text-zinc-500">Step vs Ramp models.</p>
                </div>
            </motion.div>

            {/* 3. Edge Models & Visualization */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider text-xs flex items-center gap-2">
                        <TrendingUp size={14} /> Edge Models
                    </h4>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">Step Edge Model</h5>
                            <p className="text-xs text-zinc-500">Ideal, sudden transition between two constant regions. Rare in real photos.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 border border-zinc-200 dark:border-zinc-700 border-l-4 border-l-purple-500">
                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">Ramp Edge Model</h5>
                            <p className="text-xs text-zinc-500">Gradual transition over several pixels. More realistic due to blur/sampling.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl text-amber-800 dark:text-amber-200 text-xs border border-amber-100 dark:border-amber-800/30">
                        <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                        <p>Real-world edges are messy: often fragmented, missing segments, or contain "false edges" from noise.</p>
                    </div>
                </div>

                {/* Visualization Image */}
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <div className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full border border-white/10">
                        Edge Detection Visualization
                    </div>
                    <ZoomableImage
                        src="/edgedt.png"
                        alt="Edge Detection Example"
                        caption="Identifying sharp changes in brightness to form an Edge Map."
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
