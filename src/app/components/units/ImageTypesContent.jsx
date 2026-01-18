'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Square,
    Layers,
    Palette,
    Globe,
    Info,
    CheckCircle2,
    Binary,
    Sun,
    Monitor,
    Table,
    Eye,
    Zap,
    FileImage,
    Image as ImageIcon,
    Wind,
    Trash2,
    Lock,
    FileCode,
    Printer,
    Sparkles
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

export function ImageTypesContent() {
    const types = [
        {
            title: "(i) Binary Images",
            subtitle: "Black & White (1-bit)",
            description: "The simplest form of digital images. Each pixel requires only 1 bit — 0 or 1.",
            icon: Square,
            color: "zinc",
            example: "Document scanners, barcodes, signatures.",
            details: [
                "0 \u2192 Black, 1 \u2192 White",
                "Thresholding: Converting Gray \u2192 Binary",
                "No shades in between — purely discrete."
            ]
        },
        {
            title: "(ii) Grayscale Images",
            subtitle: "8-bit Intensity",
            description: "Represents brightness levels. Every pixel tells how bright or how dark.",
            icon: Layers,
            color: "blue",
            example: "Medical X-rays, CCTV night vision.",
            details: [
                "Range: 0 (Black) to 255 (White)",
                "8 bits (1 byte) per pixel",
                "Classic 'Black & White' photography."
            ]
        },
        {
            title: "(iii) Color Images",
            subtitle: "24-bit RGB",
            description: "Combines three primary color channels: Red, Green, and Blue.",
            icon: Palette,
            color: "rose",
            example: "Smartphone cameras, digital art.",
            details: [
                "Vector per pixel: (R, G, B)",
                "8 bits \u00D7 3 channels = 24 bits total",
                "Other models: CMYK, HSI."
            ]
        },
        {
            title: "(iv) Multispectral Images",
            subtitle: "Beyond Human Vision",
            description: "Captures information in multiple bands of the electromagnetic spectrum.",
            icon: Globe,
            color: "emerald",
            example: "Satellite imagery, NASA data.",
            details: [
                "Includes: Infrared, UV, Thermal",
                "Monitors plant health, soil, water",
                "Reveals what the human eye cannot see."
            ]
        }
    ];

    const formats = [
        {
            title: "1. GIF",
            ext: "Graphics Interchange Format",
            desc: "Developed by CompuServe in 1987. Limited to 256 colors but supports simple animations.",
            icon: Wind,
            color: "amber",
            pros: ["Lossless compression", "Transparency support", "Simple animation (memes)"],
            cons: ["Only 256 colors", "Not for real-life photos"],
            best: "Cartoons, icons, logos, or animated memes."
        },
        {
            title: "2. JPEG",
            ext: "Joint Photographic Experts Group",
            desc: "Most widely used for photographs. Reduces size by removing redundant visual data.",
            icon: ImageIcon,
            color: "blue",
            pros: ["High compression ratio", "Rich 24-bit color", "Platform independent"],
            cons: ["Lossy (quality drops on resave)", "No transparency or layers"],
            best: "Photographs, web photos, social media uploads."
        },
        {
            title: "3. PNG",
            ext: "Portable Network Graphics",
            desc: "Open-source replacement for GIF. Preserves full quality with transparency.",
            icon: FileCode,
            color: "rose",
            pros: ["Lossless (no quality loss)", "Full Alpha-channel transparency", "True color (16M+ colors)"],
            cons: ["Larger file size than JPEG", "Not ideal for massive photos"],
            best: "Logos, UI elements, digital art, screenshots."
        },
        {
            title: "4. TIFF",
            ext: "Tagged Image File Format",
            desc: "Professional standard for high-quality printing, scanning, and archives.",
            icon: Printer,
            color: "purple",
            pros: ["Extremely high quality", "Supports any depth/resolution", "Multipage & archival support"],
            cons: ["Very large file sizes", "Not suitable for web use"],
            best: "Printing, medical scans, professional editing."
        }
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* --- IMAGE TYPES SECTION --- */}
            <div className="space-y-8">
                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                        <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500"><Monitor size={20} /></span>
                        Types of Digital Images
                    </h3>
                    <p className="leading-relaxed border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-zinc-800/50 py-3 rounded-r-xl">
                        Every digital image is just a collection of pixels, representing light and color through numbers.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {types.map((type, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`relative p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-${type.color === 'zinc' ? 'indigo' : type.color}-500/50 transition-all duration-300 group shadow-sm hover:shadow-xl`}
                        >
                            <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-${type.color === 'zinc' ? 'zinc' : type.color}-500/10 flex items-center justify-center text-${type.color === 'zinc' ? 'zinc' : type.color}-500 group-hover:bg-${type.color === 'zinc' ? 'zinc' : type.color}-500 group-hover:text-white transition-all duration-500 shadow-sm ring-4 ring-white dark:ring-zinc-900`}>
                                <type.icon size={24} />
                            </div>

                            <div className="space-y-3">
                                <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    {type.title}
                                </h5>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                                    {type.subtitle}
                                </p>
                                <p className="text-xs text-zinc-500 leading-relaxed italic border-l-2 border-zinc-100 dark:border-zinc-800 pl-3">
                                    {type.description}
                                </p>
                                <ul className="space-y-2 pt-2">
                                    {type.details.map((detail, i) => (
                                        <li key={i} className="flex gap-2 items-start text-[11px]">
                                            <CheckCircle2 size={12} className={`shrink-0 mt-0.5 text-${type.color === 'zinc' ? 'zinc' : type.color}-500`} />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-3 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <Zap size={10} className="text-amber-500" />
                                    <span className="text-[10px] font-bold text-zinc-400">Example: {type.example}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-zinc-50 dark:bg-zinc-800/30 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-700 flex flex-col md:flex-row items-center gap-6">
                    <div className="shrink-0 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <Binary size={32} className="text-zinc-400" />
                    </div>
                    <div className="space-y-2">
                        <h6 className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100 tracking-widest">Conversion Insight: Thresholding</h6>
                        <p className="text-xs text-zinc-500 leading-relaxed italic">
                            A grayscale image can be converted to binary using a threshold. If pixel intensity \u003E threshold \u2192 White (1), else \u2192 Black (0).
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                        <Table size={16} className="text-indigo-500" />
                        Image Types Comparison
                    </h4>
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl text-[11px]">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                                <tr>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter w-1/4 border-b border-zinc-200 dark:border-zinc-800">Image Type</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">Bits per Pixel</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">Value Range</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter border-b border-zinc-200 dark:border-zinc-800">Example</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {[
                                    { type: "Binary (B/W)", bits: "1 bit", range: "0 or 1", example: "Barcode" },
                                    { type: "Grayscale", bits: "8 bits", range: "0\u2013255", example: "X-ray" },
                                    { type: "Color (RGB)", bits: "24 bits", range: "(0-255) \u00D7 3", example: "Photos" },
                                    { type: "Multispectral", bits: "Many", range: "Spectral Bands", example: "Satellite" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group">
                                        <td className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-r border-zinc-100 dark:border-zinc-800">{row.type}</td>
                                        <td className="p-3 text-zinc-500 italic">{row.bits}</td>
                                        <td className="p-3 text-zinc-500 italic font-mono">{row.range}</td>
                                        <td className="p-3 text-indigo-500 font-medium">{row.example}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
{/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2 pt-8">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Representation of Visual Information across Digital Image Types
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/imgt.png"
                        alt="A visual comparison of binary, grayscale, and color image representations, showing pixel grids and color channel separation."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
            {/* --- IMAGE FILE FORMATS SECTION --- */}
            <div className="space-y-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                        <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500"><FileImage size={20} /></span>
                        Image File Formats
                    </h3>
                    <p className="leading-relaxed border-l-4 border-amber-500 pl-4 italic bg-amber-50 dark:bg-zinc-800/50 py-3 rounded-r-xl">
                        Format choice balances image quality against storage efficiency — designed for specific workflows like web, print, or animation.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formats.map((format, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/30 transition-all group overflow-hidden"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="space-y-1">
                                    <h5 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 tracking-tighter">{format.title}</h5>
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{format.ext}</p>
                                </div>
                                <div className={`p-3 rounded-xl bg-${format.color}-500/10 text-${format.color}-500 group-hover:scale-110 transition-transform`}>
                                    <format.icon size={22} />
                                </div>
                            </div>

                            <p className="text-xs text-zinc-500 mb-6 leading-relaxed italic">{format.desc}</p>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <p className="text-[9px] font-bold uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full w-fit">Advantages</p>
                                        <ul className="space-y-1">
                                            {format.pros.map((p, i) => (
                                                <li key={i} className="text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[9px] font-bold uppercase text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full w-fit">Limitations</p>
                                        <ul className="space-y-1">
                                            {format.cons.map((c, i) => (
                                                <li key={i} className="text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 leading-tight">
                                                    <Trash2 size={10} className="text-rose-500" />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700/50">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Sparkles size={12} className="text-amber-500" />
                                        <p className="text-[9px] font-bold uppercase text-zinc-400 tracking-widest">Best Use Case</p>
                                    </div>
                                    <p className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 leading-tight">
                                        {format.best}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-zinc-800 pb-2">
                        <Table size={16} className="text-amber-500" />
                        Format Specification Table
                    </h4>
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl text-[11px]">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                                <tr>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 w-1/5 border-b border-zinc-200 dark:border-zinc-800">Format</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Compression</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">Color Support</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 text-center">Alpha</th>
                                    <th className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 text-center">Anim</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {[
                                    { f: "GIF", c: "Lossless (LZW)", s: "256 Colors", a: "✅", an: "✅" },
                                    { f: "JPEG", c: "Lossy", s: "16 Million", a: "❌", an: "❌" },
                                    { f: "PNG", c: "Lossless", s: "16 Million+", a: "✅", an: "❌" },
                                    { f: "TIFF", c: "Lossless/None", s: "Any Range", a: "✅", an: "❌" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                                        <td className="p-3 font-bold text-zinc-900 dark:text-zinc-100 border-r border-zinc-100 dark:border-zinc-800">{row.f}</td>
                                        <td className="p-3 text-zinc-500">{row.c}</td>
                                        <td className="p-3 text-zinc-500 font-medium">{row.s}</td>
                                        <td className="p-3 text-center">{row.a}</td>
                                        <td className="p-3 text-center">{row.an}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Recap Card */}
                <motion.div variants={itemVariants} className="bg-zinc-950 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent" />
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                        <FileCode size={120} className="text-white" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em]">Recap Like a Pro</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                            {[
                                { label: "GIF", highlight: "Meme Engine", sub: "Simple / Animated", icon: "🎞\uFE0F" },
                                { label: "JPEG", highlight: "Photo Master", sub: "Web / Compressed", icon: "📸" },
                                { label: "PNG", highlight: "Web Standard", sub: "Transparent / High Quality", icon: "🎨" },
                                { label: "TIFF", highlight: "Pro Archive", sub: "Printing / Multispectral", icon: "📠" }
                            ].map((item, i) => (
                                <div key={i} className="space-y-1 group/item">
                                    <span className="text-xl mb-1 block group-hover/item:scale-110 group-hover/item:-rotate-6 transition-transform">{item.icon}</span>
                                    <p className="text-xs font-bold text-white tracking-widest">{item.label}</p>
                                    <p className="text-[10px] font-bold text-amber-500/80">{item.highlight}</p>
                                    <p className="text-[9px] text-zinc-500 italic mt-0.5">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <p className="text-[11px] text-zinc-400 leading-relaxed italic max-w-2xl">
                                Remember: Digital storage is a trade-off. Computers store imagery in binary, and formats are simply protocols that decide which bits of visual data are essential and which can be sacrificed for speed.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Final Visualization */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-2 pt-8">
                <span className="text-[10px] text-zinc-400 flex items-center gap-2 font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                    <Info size={12} className="text-zinc-500" />
                    Representation of Visual Information across Digital Image Types
                </span>
                <div className="w-full max-w-2xl mx-auto shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-3xl overflow-hidden border-2 border-white dark:border-zinc-800 bg-white">
                    <ZoomableImage
                        src="/imgf.png"
                        alt="A visual comparison of binary, grayscale, and color image representations, showing pixel grids and color channel separation."
                        width={800}
                        height={400}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
