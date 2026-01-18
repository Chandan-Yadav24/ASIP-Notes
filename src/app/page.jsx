// app/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Cpu } from "lucide-react";
import ModuleCard from "./components/ModuleCard";
import SyllabusSection from "./components/SyllabusSection";
import SyllabusSlider from "./components/SyllabusSlider";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-12 shadow-sm dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-sky-950">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light">
          <motion.div
            className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/30"
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/30"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-center">
          {/* Left: text / CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
              <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                PSCS501
              </span>
              Applied Signal and Image Processing · 4 Credits
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
              Applied Signal and Image Processing Lab
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
              Learn digital signals and modern image processing through concise
              theory notes and interactive Python/Streamlit practicals.
              Visualize transforms, filters, edges, features, and segmentation
              with real experiments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/modules/module-1"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <BookOpen className="h-4 w-4" />
                Start with Module I
              </Link>

              <a
                href="https://asip-lab.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-500 hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-400 dark:hover:bg-zinc-800"
              >
                <PlayCircle className="h-4 w-4" />
                Open Streamlit Practicals
              </a>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Theory hosted with Next.js · Practicals powered by Streamlit ·
              Designed for students of the University of Mumbai (and beyond).
            </p>
          </div>

          {/* Right: simple 3D-like animated card */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative h-64 w-full max-w-sm rounded-3xl border border-zinc-200 bg-zinc-50/80 p-4 shadow-lg backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/80"
              initial={{ rotateX: 10, rotateY: -15, opacity: 0, y: 20 }}
              animate={{ rotateX: 10, rotateY: -15, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotateX: 6, rotateY: -10, translateY: -4 }}
            >
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                    <Image
                      src="/asip-logo.png"
                      alt="ASIP"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                      ASIP Lab
                    </p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      Signal & Image Processing
                    </p>
                  </div>
                </div>
                <Cpu className="h-4 w-4 text-sky-600 dark:text-sky-400" />
              </div>

              <div className="relative mt-2 h-[1px] w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700" />

              <div className="mt-4 grid grid-cols-2 gap-3 text-[11px]">
                <div className="rounded-lg bg-white/80 p-2 shadow-sm dark:bg-zinc-950/80">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Time ↔ Frequency
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    Visualize DFT/FFT, low-pass & high-pass filters in 2D
                    spectra.
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 p-2 shadow-sm dark:bg-zinc-950/80">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Spatial Ops
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    Experiment with smoothing, sharpening, and gradients.
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 p-2 shadow-sm dark:bg-zinc-950/80">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Features
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    Harris, HoG, SIFT-style concepts explained with visuals.
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 p-2 shadow-sm dark:bg-zinc-950/80">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Segmentation
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    Thresholding, watershed, and advanced active contours.
                  </p>
                </div>
              </div>

              {/* animated "signal" line */}
              <motion.div
                className="absolute bottom-3 left-3 right-3 h-10 overflow-hidden rounded-md bg-zinc-100/70 dark:bg-zinc-800/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="h-full w-[200%] bg-[radial-gradient(circle_at_1px_1px,_#0ea5e9_1px,_transparent_0)] opacity-80 dark:opacity-60"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300">
            <BookOpen className="h-3 w-3" />
          </span>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Course Overview
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm leading-relaxed text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <p>
            This course covers fundamentals of digital signal processing, image
            processing pipelines, structural and morphological operations, and
            advanced image processing topics like feature extraction and
            segmentation.
          </p>
          <p className="mt-2">
            Each unit is paired with hands-on practicals so you can{" "}
            <span className="font-semibold">
              see the effect of filters, transforms, and algorithms directly on
              images
            </span>{" "}
            using real Python code (NumPy, OpenCV, and more).
          </p>
        </div>
      </section>

      <SyllabusSlider />

      <SyllabusSection />

      {/* MODULES GRID */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
            <Cpu className="h-3 w-3" />
          </span>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Quick Access
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <ModuleCard
            code="Module I"
            title="Fundamentals & Image Processing Basics"
            description="Digital signal fundamentals, noise, autocorrelation, frequency-domain operations, and core image processing concepts such as intensity transforms and filtering."
            href="/modules/module-1"
          />
          <ModuleCard
            code="Module II"
            title="Structural, Morphological & Advanced Operations"
            description="Edge detection, pyramids, morphological processing, feature extraction and descriptors, and various image segmentation techniques."
            href="/modules/module-2"
          />
        </div>
      </section>
    </div>
  );
}