'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from 'lucide-react';

export default function ZoomableImage({ src, alt, width = 800, height = 400 }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative group cursor-zoom-in overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 dark:bg-zinc-800/90 p-2 rounded-full shadow-lg">
                        <ZoomIn size={20} className="text-zinc-900 dark:text-zinc-100" />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-950/90 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-12 right-0 p-2 text-white hover:text-zinc-300 transition-colors"
                                aria-label="Close zoom"
                            >
                                <X size={24} />
                            </button>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={1800}
                                    height={1000}
                                    className="w-full h-auto max-h-[85vh] object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-10 left-0 right-0 text-center">
                                <p className="text-zinc-400 text-sm font-medium">{alt}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
