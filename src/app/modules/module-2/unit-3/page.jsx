'use client';

import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronRight,
    Layers,
    Binary,
    ScanLine,
    Triangle,
    Boxes,
    Scan,
    Eye,
    Pyramid,
    Spline,
    Grid3X3,
    Activity,
    Shrink,
    Expand,
    Brush,
    Eraser,
    RotateCcw,
    Target,
    Crosshair,
    Scissors,
    Fingerprint,
    Pentagon,
    Trash2,
    Filter,
    Sun,
    Moon,
    Maximize2,
    MinusCircle,
    Contrast,
    TrendingUp,
    TrendingDown
} from 'lucide-react';
import { MorphologyOverviewContent } from '@/app/components/units/MorphologyOverviewContent';
import { EdgeDetectionIntro } from '@/app/components/units/EdgeDetectionIntro';
import { SobelContent, PrewittContent, RobertsContent } from '@/app/components/units/GradientEdgeDetectors';
import { CannyEdgeDetector } from '@/app/components/units/CannyEdgeDetector';
import { LoGContent, DoGContent } from '@/app/components/units/LoGDoGFilters';
import { ImagePyramidsOverview, GaussianPyramidContent } from '@/app/components/units/ImagePyramidsContent';
import { LaplacianPyramidContent } from '@/app/components/units/LaplacianPyramidContent';
import { MorphologicalProcessingOverview } from '@/app/components/units/MorphologicalProcessingOverview';
import { ErosionContent } from '@/app/components/units/ErosionContent';
import { DilationContent } from '@/app/components/units/DilationContent';
import { OpeningContent, ClosingContent } from '@/app/components/units/OpeningClosingContent';
import { HitOrMissContent } from '@/app/components/units/HitOrMissContent';
import { SkeletonizationContent } from '@/app/components/units/SkeletonizationContent';
import { ConvexHullContent } from '@/app/components/units/ConvexHullContent';
import { RemovingSmallObjectsContent } from '@/app/components/units/RemovingSmallObjectsContent';
import { WhiteTopHatContent, BlackTopHatContent } from '@/app/components/units/TopHatTransformsContent';
import { BoundaryExtractionContent } from '@/app/components/units/BoundaryExtractionContent';
import { GrayscaleMorphologyContent } from '@/app/components/units/GrayscaleMorphologyContent';

const CollapsibleSection = ({ title, children, defaultOpen = false, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    {Icon && (
                        <div className={`p-2 rounded-xl ${isOpen ? 'bg-blue-500/10 text-blue-500' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'}`}>
                            <Icon size={20} />
                        </div>
                    )}
                    <h2 className={`text-lg font-bold tracking-tight text-left ${isOpen ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                        {title}
                    </h2>
                </div>
                {isOpen ? (
                    <ChevronDown className="text-zinc-400 transition-transform rotate-0" />
                ) : (
                    <ChevronRight className="text-zinc-400 transition-transform -rotate-90" />
                )}
            </button>

            {isOpen && (
                <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 animate-in slide-in-from-top-4 fade-in duration-300">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function Unit3Page() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* Header */}
            <div className="space-y-6 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                    Module 2
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Unit 3: Structural & Morphological Operations
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Exploring advanced structural analysis techniques, including edge detection operators, multi-resolution processing with image pyramids, and morphological set operations for shape analysis.
                </p>
            </div>

            {/* Content Sections */}
            <section className="space-y-6">

                {/* 3.1 Structural and Morphological Operations (Intro) */}
                <CollapsibleSection title="3.1. Structural and Morphological Operations (Overview)" icon={Layers} defaultOpen={true}>
                    <MorphologyOverviewContent />
                </CollapsibleSection>

                {/* 3.2 EDGE DETECTION TECHNIQUES */}
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-12 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-4">
                    <ScanLine className="text-blue-500" />
                    3.2 Edge Detection Techniques
                </h2>

                <CollapsibleSection title="3.2.0. Edge Detection Overview (Models & Concepts)" icon={Scan}>
                    <EdgeDetectionIntro />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.1 Roberts Operator" icon={Grid3X3}>
                    <RobertsContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.2 Prewitt Operator" icon={Grid3X3}>
                    <PrewittContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.3 Sobel Operator" icon={Grid3X3}>
                    <SobelContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.4 Canny Edge Detector" icon={Activity}>
                    <CannyEdgeDetector />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.5 Laplacian of Gaussian (LoG) Filter">
                    <LoGContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2.6 Difference of Gaussian (DoG) Filter">
                    <DoGContent />
                </CollapsibleSection>

                {/* 3.3 IMAGE PYRAMIDS */}
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-12 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-4">
                    <Pyramid className="text-emerald-500" />
                    3.3 Image Pyramids
                </h2>

                <CollapsibleSection title="3.3.0 Image Pyramids Overview" icon={Pyramid} defaultOpen={true}>
                    <ImagePyramidsOverview />
                </CollapsibleSection>

                <CollapsibleSection title="3.3.1 Gaussian Pyramid" icon={Triangle}>
                    <GaussianPyramidContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.3.2 Laplacian Pyramid" icon={Layers}>
                    <LaplacianPyramidContent />
                </CollapsibleSection>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-12 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-4">
                    <Boxes className="text-rose-500" />
                    3.4 Morphological Image Processing
                </h2>

                <CollapsibleSection title="3.4.0 Morphological Processing Overview" icon={Boxes} defaultOpen={true}>
                    <MorphologicalProcessingOverview />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.1 Erosion" icon={Shrink}>
                    <ErosionContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.2 Dilation" icon={Expand}>
                    <DilationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.3 Opening" icon={Brush}>
                    <OpeningContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.4 Closing" icon={Eraser}>
                    <ClosingContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.5 Hit-or-Miss Transformation" icon={Crosshair}>
                    <HitOrMissContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.6 Skeletonization" icon={Fingerprint}>
                    <SkeletonizationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.7 Convex Hull Computation" icon={Pentagon}>
                    <ConvexHullContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.8 Removing Small Objects" icon={Trash2}>
                    <RemovingSmallObjectsContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.9 White Top-Hat Transformation" icon={Sun}>
                    <WhiteTopHatContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.10 Black Top-Hat Transformation" icon={Moon}>
                    <BlackTopHatContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.11 Boundary Extraction" icon={Maximize2}>
                    <BoundaryExtractionContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4.12 Grayscale Morphological Operations" icon={Contrast}>
                    <GrayscaleMorphologyContent />
                </CollapsibleSection>

            </section>
        </div>
    );
}
