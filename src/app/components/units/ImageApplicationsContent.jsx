'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    HeartPulse,
    History,
    Cpu,
    Car,
    Satellite,
    Factory,
    Fingerprint,
    ShieldCheck,
    Info,
    CheckCircle2,
    Table
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

export function ImageApplicationsContent() {
    const applications = [
        {
            title: "1. Medical Technology",
            description: "Diagnostics heavily rely on DIP for accurate detection and visualization. Computer becomes the radiologist’s assistant.",
            details: [
                "Tumor detection: CT/MRI scan isolation.",
                "MRI/CT segmentation: Distinguishing tissue types.",
                "Restoration: Improving visibility of subtle features."
            ],
            icon: HeartPulse,
            color: "blue"
        },
        {
            title: "2. Image Reconstruction",
            description: "Restoring damaged or incomplete images using modern algorithms.",
            details: [
                "Repairing old photographs.",
                "Rebuilding missing MRI data slices.",
                "Deep learning powered resolution enhancement."
            ],
            icon: History,
            color: "amber"
        },
        {
            title: "3. Machine Vision",
            description: "Giving computers the ability to see, interpret, and act based on visual input.",
            details: [
                "Self-driving vehicles: Lane/pedestrian detection.",
                "Drones: Environment mapping.",
                "Robotics: Parts recognition/inspection."
            ],
            icon: Cpu,
            color: "purple"
        },
        {
            title: "4. Traffic Sensing",
            description: "Video Image Processing Systems (VIPS) for smart city management.",
            details: [
                "Vehicle counting and speed tracking.",
                "Congestion and lane usage patterns.",
                "Intelligent traffic light control."
            ],
            icon: Car,
            color: "rose"
        },
        {
            title: "5. Remote Sensing",
            description: "Analyzing satellite data for space and environmental sciences.",
            details: [
                "Land use and vegetation mapping.",
                "Change detection (deforestation/expansion).",
                "Disaster management (floods/fires)."
            ],
            icon: Satellite,
            color: "indigo"
        },
        {
            title: "6. Industrial Inspection",
            description: "Ensuring quality control on production lines with consistency surpassing human checks.",
            details: [
                "Checking bottle fill levels.",
                "Inspecting PCBs for component accuracy.",
                "Verifying uniformity in shapes/textures."
            ],
            icon: Factory,
            color: "emerald"
        },
        {
            title: "7. Biometrics",
            description: "Personal identification systems using physiological patterns.",
            details: [
                "Face and Iris recognition.",
                "Fingerprint matching.",
                "Hand geometry identification."
            ],
            icon: Fingerprint,
            color: "orange"
        },
        {
            title: "8. Security & Surveillance",
            description: "Real-time intelligence and automated video analytics for defense.",
            details: [
                "Motion detection and object tracking.",
                "Intrusion and incident detection.",
                "Crowd analysis and behavior recognition."
            ],
            icon: ShieldCheck,
            color: "red"
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
                <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-zinc-800/50 py-3 rounded-r-xl">
                    Digital image processing is not only about enhancing or restoring images—it’s about translating visual data into actionable insight.
                </p>
            </motion.div>

            {/* Grid of Applications */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {applications.map((app, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`group relative p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-${app.color}-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-${app.color}-500/5`}
                    >
                        <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-${app.color}-500/10 flex items-center justify-center text-${app.color}-500 group-hover:bg-${app.color}-500 group-hover:text-white transition-all duration-500 shadow-sm ring-4 ring-white dark:ring-zinc-900`}>
                            <app.icon size={24} />
                        </div>

                        <div className="space-y-3">
                            <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                {app.title}
                            </h5>
                            <p className="text-xs text-zinc-500 leading-relaxed italic">
                                {app.description}
                            </p>
                            <ul className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                                {app.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2 items-start text-[11px]">
                                        <CheckCircle2 size={12} className={`shrink-0 mt-0.5 text-${app.color}-500`} />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Summary Table */}
            <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Table size={16} className="text-indigo-500" />
                    Quick Summary Table
                </h4>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                            <tr>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter w-1/3 border-b border-zinc-200 dark:border-zinc-800">Application Area</th>
                                <th className="p-4 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">Purpose / Impact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {[
                                { area: "Medical Tech", impact: "Early diagnosis (tumor, disease analysis)" },
                                { area: "Image Reconstruction", impact: "Recover missing or corrupted regions" },
                                { area: "Machine Vision", impact: "Enable autonomous decision-making" },
                                { area: "Traffic Sensing", impact: "Monitor and manage traffic zones" },
                                { area: "Remote Sensing", impact: "Terrain analysis, environmental detection" },
                                { area: "Industrial Inspection", impact: "Automated quality control" },
                                { area: "Biometrics", impact: "Personal identification (face, fingerprint)" },
                                { area: "Security", impact: "Detect motions, objects, or intrusions" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group">
                                    <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400 border-r border-zinc-100 dark:border-zinc-800">{row.area}</td>
                                    <td className="p-4 text-zinc-500 italic group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{row.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Final Summary Card */}
            <motion.div variants={itemVariants} className="p-6 bg-zinc-950 text-white rounded-3xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                    <Cpu size={120} />
                </div>
                <div className="relative z-10 space-y-4">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] border-l-2 border-indigo-500 pl-3">In Summary</span>
                    <p className="text-sm leading-relaxed text-zinc-400 italic">
                        Image processing turns raw visuals into <span className="text-white font-bold">knowledge</span>—from diagnosing diseases to steering vehicles, from watching over cities to reviving old photographs.
                    </p>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
                        <CheckCircle2 size={16} />
                        <span>The silent engine of modern visual technology.</span>
                    </div>
                </div>
            </motion.div>

            {/* Zoomable Image at the end */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-indigo-500" />
                    Applications of Digital Image Processing Across Domains
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/app_ip.png"
                        alt="A broad overview of digital image processing applications in medicine, space, industry, and security."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
