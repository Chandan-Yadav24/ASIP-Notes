'use client';

import React from 'react';
import CollapsibleSection from '@/app/components/CollapsibleSection';
import { ImageFundamentalsContent } from '@/app/components/units/ImageFundamentalsContent';
import { IntensityTransformationsContent } from '@/app/components/units/IntensityTransformationsContent';
import { ImageApplicationsContent } from '@/app/components/units/ImageApplicationsContent';
import { ImagePipelineContent } from '@/app/components/units/ImagePipelineContent';
import { ImageToolsContent } from '@/app/components/units/ImageToolsContent';
import { ImageTypesContent } from '@/app/components/units/ImageTypesContent';
import { LogTransformContent } from '@/app/components/units/LogTransformContent';
import { PowerLawTransformContent } from '@/app/components/units/PowerLawTransformContent';
import { ContrastStretchingContent } from '@/app/components/units/ContrastStretchingContent';
import { ThresholdingContent } from '@/app/components/units/ThresholdingContent';
import { HistogramProcessingContent } from '@/app/components/units/HistogramProcessingContent';
import { HistogramEqualizationContent } from '@/app/components/units/HistogramEqualizationContent';
import { HistogramMatchingContent } from '@/app/components/units/HistogramMatchingContent';
import { LinearNonLinearSmoothingContent } from '@/app/components/units/LinearNonLinearSmoothingContent';
import { ImageSharpeningContent } from '@/app/components/units/ImageSharpeningContent';
import { GradientContent } from '@/app/components/units/GradientContent';
import { ImageDerivativesContent } from '@/app/components/units/ImageDerivativesContent';
import { LaplacianContent } from '@/app/components/units/LaplacianContent';
import { EffectOfNoiseContent } from '@/app/components/units/EffectOfNoiseContent';

export default function Unit2Page() {
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="text-xs text-zinc-500 dark:text-zinc-500">
                Module I · Unit 2
            </div>

            {/* Header */}
            <header className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Unit 2
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Image Processing Fundamentals and Pixel Transformation
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl italic leading-relaxed">
                    Exploring the core principles of digital image manipulation, from pixel-wise transformations and histogram processing to spatial filtering and derivative-based sharpening.
                </p>
            </header>

            {/* ========================================== */}
            {/* 1. IMAGE PROCESSING FUNDAMENTALS           */}
            {/* ========================================== */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-indigo-500 pb-2 mb-4 uppercase tracking-tighter">
                    1. Image Processing Fundamentals
                </h2>

                <CollapsibleSection title="1.1. Image Processing Overview & Pipeline">
                    <ImageFundamentalsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.2. Applications of Image Processing" defaultOpen={false}>
                    <ImageApplicationsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.3. Image Processing Pipeline" defaultOpen={false}>
                    <ImagePipelineContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.4. Tools and Libraries" defaultOpen={false}>
                    <ImageToolsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.5. Image Types and File Formats" defaultOpen={false}>
                    <ImageTypesContent />
                </CollapsibleSection>
            </section>

            {/* ========================================== */}
            {/* 2. INTENSITY TRANSFORMATIONS               */}
            {/* ========================================== */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-rose-500 pb-2 mb-4 uppercase tracking-tighter">
                    2. Intensity Transformations
                </h2>

                <CollapsibleSection title="2.0. Pixel Transformation Overview">
                    <IntensityTransformationsContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.1. Log Transform" defaultOpen={false}>
                    <LogTransformContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.2. Power-law (Gamma) Transform" defaultOpen={false}>
                    <PowerLawTransformContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.3. Contrast Stretching" defaultOpen={false}>
                    <ContrastStretchingContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.4. Thresholding" defaultOpen={false}>
                    <ThresholdingContent />
                </CollapsibleSection>
            </section>

            {/* ========================================== */}
            {/* 3. HISTOGRAM PROCESSING                   */}
            {/* ========================================== */}
            <section id="section-3" className="space-y-6 pt-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-sm">3</span>
                    Section 3: Histogram Processing & Equalization
                </h3>

                <CollapsibleSection title="3.0. Histogram Processing (Overview)" defaultOpen={false}>
                    <HistogramProcessingContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.1. Histogram Equalization (HE)" defaultOpen={false}>
                    <HistogramEqualizationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2. Histogram Matching (Specification)" defaultOpen={false}>
                    <HistogramMatchingContent />
                </CollapsibleSection>
            </section>

            {/* ========================================== */}
            {/* 4. SMOOTHING AND SHARPENING               */}
            {/* ========================================== */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-tighter">
                    4. Smoothing and Sharpening
                </h2>

                <CollapsibleSection title="4.1. Linear and Non-linear Smoothing" defaultOpen={false}>
                    <LinearNonLinearSmoothingContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2. Sharpening of Images" defaultOpen={false}>
                    <ImageSharpeningContent />
                </CollapsibleSection>
            </section>

            {/* ========================================== */}
            {/* 5. IMAGE DERIVATIVES AND NOISE            */}
            {/* ========================================== */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-emerald-500 pb-2 mb-4 uppercase tracking-tighter">
                    5. Image Derivatives & Noise
                </h2>

                <CollapsibleSection title="5.0. Derivatives and Differences (Overview)" defaultOpen={false}>
                    <ImageDerivativesContent />
                </CollapsibleSection>

                <CollapsibleSection title="5.1. Image Gradients (Detailed)" defaultOpen={false}>
                    <GradientContent />
                </CollapsibleSection>

                <CollapsibleSection title="5.2. Laplacian Operator" defaultOpen={false}>
                    <LaplacianContent />
                </CollapsibleSection>

                <CollapsibleSection title="5.3. Effect of Noise on Gradients" defaultOpen={false}>
                    <EffectOfNoiseContent />
                </CollapsibleSection>
            </section>
        </div>
    );
}
