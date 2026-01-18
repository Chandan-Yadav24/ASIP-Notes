'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Camera,
    Database,
    Settings2,
    Target,
    Search,
    Layout,
    Info,
    ArrowRight,
    Monitor,
    CheckCircle2,
    Table,
    Terminal,
    Brain
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

export function ImagePipelineContent() {
    const stages = [
        {
            title: "1. Acquisition and Storage",
            subtitle: "The Origin",
            description: "Capturing the physical world into digital data. Images from cameras, scanners, or satellites are tucked away for analysis.",
            icon: Camera,
            color: "indigo",
            details: [
                "Capture: Scanning/Photography",
                "Format: JPEG, PNG, TIFF (Quality vs. Size)",
                "Storage: Cloud, Hard Drives, Memory"
            ]
        },
        {
            title: "2. Load into Memory",
            subtitle: "The Bridge",
            description: "Establishing a computational workspace. Files are read into active memory structures (like NumPy ndarrays).",
            icon: Database,
            color: "blue",
            details: [
                "Reading: File I/O operations",
                "Active State: Computational access",
                "Addressing: Addressing pixels by (x, y)"
            ]
        },
        {
            title: "3. Pre-processing",
            subtitle: "The Cleaning",
            description: "Removing imperfections and balancing quality. This stage cleans and polishes raw pixels.",
            icon: Settings2,
            color: "rose",
            details: [
                "Manipulation: Scaling/Rotation",
                "Enhancement: Contrast/Sharpness",
                "Restoration: De-noising/Blur removal"
            ]
        },
        {
            title: "4. Segmentation",
            subtitle: "The Division",
            description: "Separating regions of interest from the background. Turning a sea of pixels into identifiable islands.",
            icon: Target,
            color: "amber",
            details: [
                "Thresholding: Intensity-based",
                "Edge Detection: Gradient-based",
                "Machine Learning: Semantic/Instance"
            ]
        },
        {
            title: "5. Feature Extraction",
            subtitle: "The Vocabulary",
            description: "Translating visuals into data. Representing objects using compact numerical summaries.",
            icon: Search,
            color: "purple",
            details: [
                "Hand-crafted: SIFT, HOG, LBP",
                "Learned: Convolutional Neural Nets",
                "Bridge: Visuals to Readable Data"
            ]
        },
        {
            title: "6. Interpretation",
            subtitle: "The Wisdom",
            description: "Teaching machines to reason. Moving from raw pixels to semantic concepts (e.g., Identifying a face).",
            icon: Brain,
            color: "emerald",
            details: [
                "Classification: Identifying what?",
                "Recognition: Identifying where?",
                "Logic: Autonomous decision making"
            ]
        }
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 text-sm text-zinc-700 dark:text-zinc-300"
        >
            <motion.div variants={itemVariants} className="space-y-4">
                <p className="leading-relaxed border-l-4 border-emerald-500 pl-4 italic bg-emerald-50 dark:bg-emerald-900/10 py-3 rounded-r-xl">
                    An image processing pipeline is a sequence of well-defined steps... gradually transforming it from raw pixel values to meaningful insights.
                </p>
            </motion.div>

            {/* Modern Pipeline Flow */}
            <motion.div variants={containerVariants} className="space-y-10">
                {stages.map((stage, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="group relative flex flex-col md:flex-row gap-6 p-1 items-start"
                    >
                        {/* Number and Line */}
                        <div className="flex flex-col items-center pt-2">
                            <div className={`w-10 h-10 rounded-2xl bg-${stage.color}-500 flex items-center justify-center text-white shadow-lg shadow-${stage.color}-500/30 group-hover:scale-110 transition-transform duration-500 z-10`}>
                                <stage.icon size={20} />
                            </div>
                            {idx !== stages.length - 1 && (
                                <div className="w-0.5 h-full bg-zinc-100 dark:bg-zinc-800 absolute top-10 left-5 -z-0" />
                            )}
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 group-hover:border-${stage.color}-400/50 shadow-sm hover:shadow-xl`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div className="space-y-1">
                                    <span className={`text-[10px] font-bold text-${stage.color}-500 uppercase tracking-widest`}>{stage.subtitle}</span>
                                    <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 italic tracking-tight">{stage.title}</h5>
                                </div>
                            </div>
                            <p className="text-[11px] text-zinc-500 mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                                {stage.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {stage.details.map((detail, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/50 text-[10px] text-zinc-600 dark:text-zinc-400 font-medium">
                                        <CheckCircle2 size={12} className={`text-${stage.color}-500`} />
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-emerald-500" />
                    Pipeline Stages Summary
                </h4>
                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                            <tr>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter w-1/4 border-b border-zinc-200 dark:border-zinc-800">Stage</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">Process Description</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800 w-1/4">Core Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {stages.map((stage, i) => (
                                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group">
                                    <td className="p-4 font-bold text-zinc-900 dark:text-zinc-100 border-r border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full bg-${stage.color}-500`} />
                                        {stage.title.split('. ')[1]}
                                    </td>
                                    <td className="p-4 text-zinc-500 italic group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{stage.description}</td>
                                    <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">{stage.details[0].split(': ')[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* The Big Picture Card */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-br from-emerald-500/10 to-transparent dark:from-emerald-500/5 dark:to-transparent border-none ring-1 ring-emerald-500/20 p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                    <Layout size={200} />
                </div>
                <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                            <Target size={24} />
                        </div>
                        <h5 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 tracking-tight">The Big Picture</h5>
                    </div>
                    <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed italic max-w-2xl">
                        The image processing pipeline converts raw captured data into intelligent information through a logical progression:
                    </p>
                    <div className="flex flex-wrap items-center gap-3 py-4">
                        {[
                            { label: "Capture", icon: Camera },
                            { label: "Clean", icon: Settings2 },
                            { label: "Separate", icon: Target },
                            { label: "Describe", icon: Search },
                            { label: "Understand", icon: Brain }
                        ].map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 ring-1 ring-emerald-500/10">
                                    <step.icon size={14} className="text-emerald-500" />
                                    {step.label}
                                </div>
                                {i !== 4 && <ArrowRight size={16} className="text-zinc-300 dark:text-zinc-700 mx-1" />}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/5 px-4 py-2 rounded-lg inline-block font-mono tracking-tighter border border-emerald-500/10">
                        it's how computers learn to “see” the world with clarity and context.
                    </p>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-emerald-500" />
                    The Journey of a Pixel: From Raw Data to Knowledge
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/ippline.png"
                        alt="A technical breakdown of the image processing pipeline showing acquisition, loading, pre-processing, segmentation, and feature extraction stages."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
