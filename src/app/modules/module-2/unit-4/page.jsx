"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Cpu, Fingerprint, ScanSearch, Compass,
    Waves, Boxes, Network, Zap, Focus, Target,
    Layers, Maximize, Share2, Binary, Activity,
    Share, BookOpen, Search, Grid, Eye
} from 'lucide-react';
import { AdvancedImageProcessingOverview } from '@/app/components/units/AdvancedImageProcessingOverview';
import { ExtractingFeaturesContent } from '@/app/components/units/ExtractingFeaturesContent';
import { FeatureDetectorVsDescriptor } from '@/app/components/units/FeatureDetectorVsDescriptor';
import { BoundaryFeatureDescriptionContent } from '@/app/components/units/BoundaryFeatureDescriptionContent';
import { PCAContent } from '@/app/components/units/PCAContent';
import { HarrisCornerContent } from '@/app/components/units/HarrisCornerContent';
import { BlobDetectionContent } from '@/app/components/units/BlobDetectionContent';
import { HOGContent } from '@/app/components/units/HOGContent';
import { SIFTContent } from '@/app/components/units/SIFTContent';
import { HaarLikeContent } from '@/app/components/units/HaarLikeContent';
import { ImageSegmentationContent } from '@/app/components/units/ImageSegmentationContent';
import { HoughLineContent } from '@/app/components/units/HoughLineContent';
import { ThresholdingContent } from '@/app/components/units/ThresholdingContent';
import { OtsuContent } from '@/app/components/units/OtsuContent';
import { EdgeBasedSegmentationContent } from '@/app/components/units/EdgeBasedSegmentationContent';
import { RegionBasedSegmentationContent } from '@/app/components/units/RegionBasedSegmentationContent';
import { RegionSegmentationTechniques } from '@/app/components/units/RegionSegmentationTechniques';
import { RegionGrowingContent } from '@/app/components/units/RegionGrowingContent';
import { RegionSplittingContent } from '@/app/components/units/RegionSplittingContent';
import { RegionMergingContent } from '@/app/components/units/RegionMergingContent';
import { AdvancedSegmentationContent } from '@/app/components/units/AdvancedSegmentationContent';
import { WatershedContent } from '@/app/components/units/WatershedContent';
import { ActiveContoursContent } from '@/app/components/units/ActiveContoursContent';
import { MorphologicalSnakesContent } from '@/app/components/units/MorphologicalSnakesContent';
import { GrabCutContent } from '@/app/components/units/GrabCutContent';
import { HoughCircleContent } from '@/app/components/units/HoughCircleContent';

const CollapsibleSection = ({ title, children, defaultOpen = false, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-4 rounded-xl border border-indigo-500/10 bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-all hover:border-indigo-500/30 group shadow-lg shadow-indigo-500/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-indigo-500/5"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                        {Icon ? <Icon size={16} /> : <Zap size={16} />}
                    </div>
                    <span className="text-sm font-bold text-zinc-200 uppercase tracking-wide group-hover:text-indigo-400 transition-colors">
                        {title}
                    </span>
                </div>
                <div className="text-zinc-500 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown size={18} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-6 border-t border-indigo-500/10 bg-zinc-900/20">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Custom animated icons
const Expand = ({ size }) => (
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
        <Boxes size={size} />
    </motion.div>
);

const CompareIcons = ({ size }) => (
    <div className="relative">
        <Focus size={size} className="absolute -top-1 -left-1 opacity-50" />
        <ScanSearch size={size} className="relative z-10" />
    </div>
);

export default function Unit4Page() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 p-4 md:p-8 lg:p-12 selection:bg-indigo-500/30">
            {/* Mesh Gradient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600 blur-[120px]" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-cyan-600 blur-[100px]" />
            </div>

            <header className="relative mb-16 max-w-4xl mx-auto text-center space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
                >
                    <Cpu size={14} className="animate-pulse" /> Advanced Image Processing
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 tracking-tighter">
                    Unit 4: Advanced Processing
                </h1>
                <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Granular exploration of high-level vision capabilities through advanced feature extraction, complex descriptors, and intelligent segmentation.
                </p>
            </header>

            <main className="max-w-4xl mx-auto space-y-4 pb-32">

                {/* 4.1 */}
                <CollapsibleSection title="4.1 Advanced Image Processing Operations" icon={Activity} defaultOpen={true}>
                    <AdvancedImageProcessingOverview />
                </CollapsibleSection>

                {/* 4.2 Main */}
                <div className="pt-8 mb-4 border-b border-zinc-800 pb-2">
                    <h2 className="text-xl font-black text-zinc-100 uppercase tracking-widest flex items-center gap-3">
                        <Fingerprint className="text-indigo-400" /> 4.2 Extracting Image Features
                    </h2>
                </div>

                <CollapsibleSection title="4.2 Extracting Image Features and Descriptors" icon={Fingerprint}>
                    <ExtractingFeaturesContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.1 Feature Detectors vs. Feature Descriptors" icon={ScanSearch}>
                    <FeatureDetectorVsDescriptor />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.2 Boundary Processing and Feature Descriptors" icon={Compass}>
                    <BoundaryFeatureDescriptionContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.3 Principal Component Analysis (PCA)" icon={Binary}>
                    <PCAContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.4 Harris Corner Detector" icon={Target}>
                    <HarrisCornerContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.5 Blob Detection Techniques" icon={Waves}>
                    <BlobDetectionContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.6 Histogram of Oriented Gradients (HOG)" icon={Layers}>
                    <HOGContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.7 Scale-Invariant Feature Transform (SIFT)" icon={Maximize}>
                    <SIFTContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2.8 Haar-like Features" icon={ScanSearch}>
                    <HaarLikeContent />
                </CollapsibleSection>

                {/* 4.3 Main */}
                <div className="pt-8 mb-4 border-b border-zinc-800 pb-2">
                    <h2 className="text-xl font-black text-zinc-100 uppercase tracking-widest flex items-center gap-3">
                        <Network className="text-violet-400" /> 4.3 Image Segmentation
                    </h2>
                </div>

                <CollapsibleSection title="4.3 Image Segmentation" icon={Network}>
                    <ImageSegmentationContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.1 Hough Transform for Line Detection" icon={Share2}>
                    <HoughLineContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.2 Hough Transform for Circle Detection" icon={Target}>
                    <HoughCircleContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.3 Thresholding Techniques" icon={Binary}>
                    <ThresholdingContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.4 Otsu’s Segmentation Method" icon={Activity}>
                    <OtsuContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.5 Edge-Based Segmentation" icon={ScanSearch}>
                    <EdgeBasedSegmentationContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3.6 Region-Based Segmentation" icon={Boxes}>
                    <RegionBasedSegmentationContent />
                </CollapsibleSection>

                {/* 4.4 Main */}
                <div className="pt-8 mb-4 border-b border-zinc-800 pb-2">
                    <h2 className="text-xl font-black text-zinc-100 uppercase tracking-widest flex items-center gap-3">
                        <Grid className="text-cyan-400" /> 4.4 Region-Based Segmentation Techniques
                    </h2>
                </div>



                <CollapsibleSection title="4.4 Region-Based Segmentation Techniques" icon={Grid} defaultOpen={true}>
                    <RegionSegmentationTechniques />
                </CollapsibleSection>

                <CollapsibleSection title="4.4.1 Region Growing" icon={Target}>
                    <RegionGrowingContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.4.2 Region Splitting" icon={Expand}>
                    <RegionSplittingContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.4.3 Region Merging" icon={Boxes}>
                    <RegionMergingContent />
                </CollapsibleSection>

                {/* 4.5 Main */}
                <div className="pt-8 mb-4 border-b border-zinc-800 pb-2">
                    <h2 className="text-xl font-black text-zinc-100 uppercase tracking-widest flex items-center gap-3">
                        <Activity className="text-rose-400" /> 4.5 Advanced Segmentation Algorithms
                    </h2>
                </div>

                <CollapsibleSection title="4.5 Advanced Segmentation Algorithms" icon={Activity} defaultOpen={true}>
                    <AdvancedSegmentationContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.5.1 Watershed Algorithm" icon={Waves}>
                    <WatershedContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.5.2 Active Contours (Snakes)" icon={Eye}>
                    <ActiveContoursContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.5.3 Morphological Snakes" icon={Activity}>
                    <MorphologicalSnakesContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.5.4 GrabCut Algorithm" icon={Maximize}>
                    <GrabCutContent />
                </CollapsibleSection>

            </main>

            <footer className="max-w-4xl mx-auto py-20 border-t border-indigo-500/10 text-center">
                <p className="text-zinc-600 text-sm tracking-widest uppercase">
                    Advanced Signal & Image Processing Lab • Unit 4
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <Fingerprint className="text-indigo-500/40" size={20} />
                    <Network className="text-violet-500/40" size={20} />
                    <Cpu className="text-cyan-500/40" size={20} />
                </div>
            </footer>
        </div>
    );
}
