'use client';
// app/modules/module-1/unit-1/page.jsx
import Image from "next/image";
import { Unit1Overview } from '@/app/components/units/Unit1Content';
import { PeriodicSignalsContent } from '@/app/components/units/Unit1Content';
import { SpectralDecompositionContent } from '@/app/components/units/Unit1Content';
import { SignalsConceptContent } from '@/app/components/units/Unit1Content';
import { ReadingWritingWavesContent } from '@/app/components/units/Unit1Content';
import { SpectrumsContent } from '@/app/components/units/Unit1Content';
import { WaveObjectsContent } from '@/app/components/units/Unit1Content';
import { SignalObjectsContent } from '@/app/components/units/SignalObjectsContent';
import { NoiseContent } from '@/app/components/units/NoiseContent';
import { UncorrelatedNoiseContent } from '@/app/components/units/UncorrelatedNoiseContent';
import { IntegratedSpectrumContent } from '@/app/components/units/IntegratedSpectrumContent';
import { BrownianNoiseContent } from '@/app/components/units/BrownianNoiseContent';
import { PinkNoiseContent } from '@/app/components/units/PinkNoiseContent';
import { GaussianNoiseContent } from '@/app/components/units/GaussianNoiseContent';
import { CorrelationContent } from '@/app/components/units/CorrelationContent';
import { SerialCorrelationContent } from '@/app/components/units/SerialCorrelationContent';
import { AutocorrelationContent } from '@/app/components/units/AutocorrelationContent';
import { PeriodicAutocorrelationContent } from '@/app/components/units/PeriodicAutocorrelationContent';
import { DotProductCorrelationContent } from '@/app/components/units/DotProductCorrelationContent';
import { FrequencyDomainOverviewContent } from '@/app/components/units/FrequencyDomainOverviewContent';
import { ImageAsSignalContent } from '@/app/components/units/ImageAsSignalContent';
import { SamplingFourierContent } from '@/app/components/units/SamplingFourierContent';
import { DFTContent } from '@/app/components/units/DFTContent';
import { ConvolutionFilteringContent } from '@/app/components/units/ConvolutionFilteringContent';
import { LowPassFilteringContent } from '@/app/components/units/LowPassFilteringContent';
import { HighPassFilteringContent } from '@/app/components/units/HighPassFilteringContent';
import { FFTContent } from '@/app/components/units/FFTContent';
import CollapsibleSection from '@/app/components/CollapsibleSection';

export default function Unit1Page() {
    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="text-xs text-zinc-500 dark:text-zinc-500">
                Module I · Unit 1
            </div>

            {/* Header */}
            <header className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Unit 1
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Fundamentals of Digital Signals Processing
                </h1>
                <Unit1Overview />
            </header>

            {/* ========================================================= */}
            {/* 1. PERIODIC SIGNALS & SPECTRAL DECOMPOSITION              */}
            {/* ========================================================= */}

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-indigo-500 pb-2 mb-4 uppercase tracking-tighter">
                    1. Periodic Signals & Spectral Decomposition
                </h2>

                <CollapsibleSection title="1.1. Periodic signals">
                    <PeriodicSignalsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.2. Spectral decomposition">
                    <SpectralDecompositionContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.3. Signals (general concept)">
                    <SignalsConceptContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.4. Reading and writing waves">
                    <ReadingWritingWavesContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.5. Spectrums (frequency spectra)">
                    <SpectrumsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.6. Wave objects">
                    <WaveObjectsContent />
                </CollapsibleSection>

                <CollapsibleSection title="1.7. Signal objects">
                    <SignalObjectsContent />
                </CollapsibleSection>
            </section>

            {/* ================= */}
            {/* 2. NOISE          */}
            {/* ================= */}

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-rose-500 pb-2 mb-4 uppercase tracking-tighter">
                    2. Noise
                </h2>

                <CollapsibleSection title="2.0. Noise Overview">
                    <NoiseContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.1. Uncorrelated noise" defaultOpen={false}>
                    <UncorrelatedNoiseContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.2. Integrated spectrum" defaultOpen={false}>
                    <IntegratedSpectrumContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.3. Brownian noise" defaultOpen={false}>
                    <BrownianNoiseContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.4. Pink noise" defaultOpen={false}>
                    <PinkNoiseContent />
                </CollapsibleSection>

                <CollapsibleSection title="2.5. Gaussian noise" defaultOpen={false}>
                    <GaussianNoiseContent />
                </CollapsibleSection>
            </section>


            {/* ====================== */}
            {/* 3. AUTOCORRELATION     */}
            {/* ====================== */}

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-amber-500 pb-2 mb-4 uppercase tracking-tighter">
                    3. Autocorrelation
                </h2>

                <CollapsibleSection title="3.1. Correlation (basic concept)">
                    <CorrelationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.2. Serial correlation">
                    <SerialCorrelationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.3. Autocorrelation">
                    <AutocorrelationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.4. Autocorrelation of periodic signals">
                    <PeriodicAutocorrelationContent />
                </CollapsibleSection>

                <CollapsibleSection title="3.5. Correlation as a dot product">
                    <DotProductCorrelationContent />
                </CollapsibleSection>
            </section>

            {/* =============================== */}
            {/* 4. FREQUENCY-DOMAIN OPERATIONS  */}
            {/* =============================== */}

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-tighter">
                    4. Frequency-Domain Operations
                </h2>

                <CollapsibleSection title="4.0. Overview">
                    <FrequencyDomainOverviewContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.1. Representing image as signals" defaultOpen={false}>
                    <ImageAsSignalContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.2. Sampling and Fourier transforms" defaultOpen={false}>
                    <SamplingFourierContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.3. Discrete Fourier Transform (DFT)" defaultOpen={false}>
                    <DFTContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.4. Convolution and frequency-domain filtering" defaultOpen={false}>
                    <ConvolutionFilteringContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.5. Smoothing using low-pass filters" defaultOpen={false}>
                    <LowPassFilteringContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.6. Sharpening using high-pass filters" defaultOpen={false}>
                    <HighPassFilteringContent />
                </CollapsibleSection>

                <CollapsibleSection title="4.7. Fast Fourier Transforms (FFT)" defaultOpen={false}>
                    <FFTContent />
                </CollapsibleSection>
            </section>
        </div >
    );
}