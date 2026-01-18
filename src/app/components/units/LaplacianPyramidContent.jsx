'use client';

import React from 'react';
import { motion } from "framer-motion";
import {
    Layers,
    ArrowDown,
    Minus,
    CheckCircle2,
    Zap,
    Triangle,
    Shapes,
    MoveRight,
    Sparkles,
    Target,
    Wand2,
    Package
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
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

export function LaplacianPyramidContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 text-sm text-zinc-700 dark:text-zinc-300"
        >
            {/* 1. Intuition */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    1. Intuition: What Is a Laplacian Pyramid?
                </h4>
                <p className="leading-relaxed">
                    The <strong>Gaussian pyramid</strong> gives you the same image at different "summary" levels (coarse to fine), while the <strong>Laplacian pyramid</strong> keeps track of what details you lost at each summary step. Those "lost details" are exactly what the Laplacian pyramid stores—and that's what makes it powerful.
                </p>
                <div className="space-y-3 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-300">The Story of Pyramids:</p>
                    <ul className="space-y-2 text-xs text-purple-800/80 dark:text-purple-300/80">
                        <li className="flex gap-2">
                            <span className="font-bold text-purple-600 dark:text-purple-400 min-w-fit">Level 0:</span>
                            <span>Original image (full detail)</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-purple-600 dark:text-purple-400 min-w-fit">Level 1:</span>
                            <span>Blurred + smaller</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-purple-600 dark:text-purple-400 min-w-fit">Level 2:</span>
                            <span>Blur again + smaller</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-purple-600 dark:text-purple-400 min-w-fit">…and so on</span>
                            <span>At each step, you throw away fine details through smoothing and shrinking</span>
                        </li>
                    </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800/30">
                    <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 mb-2">Think of It As:</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded border border-blue-100 dark:border-blue-800 text-center">
                            <span className="font-bold text-blue-600 dark:text-blue-400">Gaussian Pyramid</span>
                            <p className="text-zinc-500 text-[10px]">"coarse versions"</p>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded border border-blue-100 dark:border-blue-800 text-center">
                            <span className="font-bold text-blue-600 dark:text-blue-400">Laplacian Pyramid</span>
                            <p className="text-zinc-500 text-[10px]">"what's missing between levels"</p>
                        </div>
                    </div>
                </div>
                <p className="leading-relaxed text-base font-medium text-indigo-700 dark:text-indigo-400">
                    Together, they let you rebuild the original image perfectly.
                </p>
            </div>

            {/* Image */}
            <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <ZoomableImage
                    src="/laplpr.png"
                    alt="Laplacian Pyramid Visualization"
                    caption="Laplacian Pyramid: each level shows the edge-and-detail information lost between Gaussian pyramid levels."
                />
            </div>

            {/* 2. How It's Built */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
                    <Target className="w-5 h-5 text-cyan-500" />
                    2. How It's Built (Step-by-Step)
                </h4>
                <p className="leading-relaxed">
                    Assume you already have a Gaussian pyramid: <InlineMath math="G_0, G_1, G_2, \ldots, G_n" /> (0 = finest, n = coarsest).
                </p>
                
                <div className="p-5 bg-cyan-50 dark:bg-cyan-900/10 rounded-2xl border border-cyan-100 dark:border-cyan-800/30 space-y-4">
                    <h5 className="font-bold text-cyan-900 dark:text-cyan-300 text-base">For each pair of consecutive levels <InlineMath math="G_i" /> and <InlineMath math="G_{i+1}" />:</h5>
                    
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <div className="p-2 rounded-lg bg-cyan-200 dark:bg-cyan-800 font-bold text-cyan-900 dark:text-cyan-100 min-w-fit text-sm">Step 1</div>
                            <div className="space-y-1">
                                <p className="font-semibold text-cyan-900 dark:text-cyan-300">Upsample the coarser image <InlineMath math="G_{i+1}" /></p>
                                <p className="text-xs text-cyan-700/70 dark:text-cyan-300/70">Enlarge <InlineMath math="G_{i+1}" /> back to the size of <InlineMath math="G_i" /> using interpolation + smoothing. This "predicted" image looks like a blurred version of <InlineMath math="G_i" />.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <div className="p-2 rounded-lg bg-cyan-200 dark:bg-cyan-800 font-bold text-cyan-900 dark:text-cyan-100 min-w-fit text-sm">Step 2</div>
                            <div className="space-y-1">
                                <p className="font-semibold text-cyan-900 dark:text-cyan-300">Subtract to get the detail</p>
                                <p className="text-xs text-cyan-700/70 dark:text-cyan-300/70">Compute:</p>
                                <div className="p-2 bg-white dark:bg-zinc-900 rounded border border-cyan-100 dark:border-cyan-800 text-center text-xs mt-1">
                                    <InlineMath math="L_i = G_i - \text{Upsample}(G_{i+1})" />
                                </div>
                                <p className="text-xs text-cyan-700/70 dark:text-cyan-300/70"><InlineMath math="L_i" /> contains only what's different between the original at that level (<InlineMath math="G_i" />) and the coarser approximation.</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <div className="p-2 rounded-lg bg-cyan-200 dark:bg-cyan-800 font-bold text-cyan-900 dark:text-cyan-100 min-w-fit text-sm">Step 3</div>
                            <div className="space-y-1">
                                <p className="font-semibold text-cyan-900 dark:text-cyan-300">Repeat for all levels</p>
                                <p className="text-xs text-cyan-700/70 dark:text-cyan-300/70">Keep the smallest Gaussian level <InlineMath math="G_n" /> as the base.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3 border-t border-cyan-200 dark:border-cyan-800">
                        <p className="font-semibold text-cyan-900 dark:text-cyan-300 text-sm mb-2">The Laplacian Pyramid consists of:</p>
                        <p className="text-xs text-cyan-800/80 dark:text-cyan-300/80">
                            <span className="font-bold">Detail images:</span> <InlineMath math="L_0, L_1, L_2, \ldots, L_{n-1}" /><br/>
                            <span className="font-bold">Plus the topmost:</span> <InlineMath math="G_n" /> (small, blurry core image)
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800/30">
                    <p className="text-xs font-semibold text-amber-900 dark:text-amber-300 mb-2">What Does a Laplacian Level Look Like?</p>
                    <ul className="space-y-2 text-xs text-amber-800/80 dark:text-amber-300/80">
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <span><strong>Mostly mid-gray</strong> in flat, smooth regions (little difference)</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <span><strong>Bright lines</strong> where intensity jumps up (edges)</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <span><strong>Dark lines</strong> where intensity drops (edges)</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <span>It's like an <strong>edge map plus fine texture</strong>, but localized to a particular scale</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 3. Reconstruction */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                    <Wand2 className="w-5 h-5 text-emerald-500" />
                    3. Why Bother? The Magic of Reconstruction
                </h4>
                <p className="leading-relaxed">
                    You can reconstruct the original image <strong>perfectly</strong> using only:
                </p>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-emerald-500">
                    <li>The smallest Gaussian level <InlineMath math="G_n" />, and</li>
                    <li>All the Laplacian levels <InlineMath math="L_i" /></li>
                </ul>

                <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 space-y-3">
                    <p className="font-bold text-emerald-900 dark:text-emerald-300">Reconstruction goes in reverse:</p>
                    <ol className="space-y-3 text-xs">
                        <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-800 px-2 py-1 rounded min-w-fit">1</span>
                            <span><strong>Start at the top:</strong> take <InlineMath math="G_n" /></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-800 px-2 py-1 rounded min-w-fit">2</span>
                            <span><strong>Upsample</strong> it to the size of <InlineMath math="L_{n-1}" /> and <strong>add</strong> <InlineMath math="L_{n-1}" /> back. You get an approximation of <InlineMath math="G_{n-1}" /></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-800 px-2 py-1 rounded min-w-fit">3</span>
                            <span><strong>Upsample</strong> that, add <InlineMath math="L_{n-2}" />, get <InlineMath math="G_{n-2}" /></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-800 px-2 py-1 rounded min-w-fit">4</span>
                            <span><strong>Repeat</strong> until you reach level 0 — you've rebuilt the original image</span>
                        </li>
                    </ol>
                </div>

                <p className="leading-relaxed italic text-base text-emerald-700 dark:text-emerald-400">
                    The Laplacian pyramid is like a recipe for the missing details between scales.
                </p>
            </div>

            {/* 4. Scale Analysis */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
                    <Layers className="w-5 h-5 text-indigo-500" />
                    4. Scale-Specific Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <h5 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-2">Small-Scale Laplacian Levels</h5>
                        <p className="text-xs text-indigo-800/80 dark:text-indigo-300/80">
                            Capture <strong>very fine details</strong>: small edges, fine texture, high-frequency information.
                        </p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <h5 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm mb-2">Larger-Scale Laplacian Levels</h5>
                        <p className="text-xs text-indigo-800/80 dark:text-indigo-300/80">
                            Capture <strong>broader edges</strong> and <strong>larger structures</strong>, lower-frequency information.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5. Applications */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-rose-500 pl-3">
                    <Zap className="w-5 h-5 text-rose-500" />
                    5. Key Applications (Where Laplacian Pyramids Shine)
                </h4>

                {/* 5.1 Compression */}
                <div className="space-y-3 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-200 dark:border-rose-800/30">
                    <h5 className="font-bold text-rose-900 dark:text-rose-300 text-sm flex items-center gap-2">
                        <Package size={16} /> 5.1 Image Compression
                    </h5>
                    <p className="text-xs text-rose-800/80 dark:text-rose-300/80 leading-relaxed">
                        <strong>Why it's great for compression:</strong> Most Laplacian values are close to zero in smooth areas (no detail) and only significantly non-zero around edges and texture. This means energy is concentrated in a relatively small number of coefficients.
                    </p>
                    <ul className="space-y-2 text-xs text-rose-800/70 dark:text-rose-300/70 pl-4">
                        <li className="flex gap-2">
                            <CheckCircle2 size={12} className="text-rose-500 mt-0.5 shrink-0" />
                            <span>You can quantize or encode them efficiently</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={12} className="text-rose-500 mt-0.5 shrink-0" />
                            <span>Store one tiny base image (top Gaussian) + a set of detail images (Laplacian levels)</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={12} className="text-rose-500 mt-0.5 shrink-0" />
                            <span>On decompression, reconstruct the original by reversing the process</span>
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 size={12} className="text-rose-500 mt-0.5 shrink-0" />
                            <span><strong>Result:</strong> good approximation with fewer bits than storing full images</span>
                        </li>
                    </ul>
                </div>

                {/* 5.2 Blending */}
                <div className="space-y-3 p-4 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800/30">
                    <h5 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 text-sm flex items-center gap-2">
                        <Wand2 size={16} /> 5.2 Image Blending and Seamless Compositing
                    </h5>
                    <p className="text-xs text-fuchsia-800/80 dark:text-fuchsia-300/80 leading-relaxed">
                        Laplacian pyramids are famously used for <strong>multi-band blending</strong>:
                    </p>
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded border border-fuchsia-100 dark:border-fuchsia-800 space-y-2 text-xs text-fuchsia-800/80 dark:text-fuchsia-300/80">
                        <p><strong>Example: blending two faces/images smoothly</strong></p>
                        <ul className="space-y-1 pl-4">
                            <li>• Create Laplacian pyramids for both images</li>
                            <li>• Blend their Laplacian levels using a Gaussian pyramid of a mask</li>
                            <li>• Reconstruct: seamless composite where:</li>
                            <li className="pl-4">- Large-scale lighting and shading transitions are smooth</li>
                            <li className="pl-4">- Fine details (edges, texture) are merged without hard seams</li>
                        </ul>
                    </div>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 font-semibold">
                        Used in: panoramic stitching, photo compositing, visual effects
                    </p>
                </div>

                {/* 5.3 Enhancement */}
                <div className="space-y-3 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800/30">
                    <h5 className="font-bold text-orange-900 dark:text-orange-300 text-sm flex items-center gap-2">
                        <Sparkles size={16} /> 5.3 Image Enhancement and Analysis
                    </h5>
                    <p className="text-xs text-orange-800/80 dark:text-orange-300/80 leading-relaxed">
                        Because Laplacian levels isolate high-frequency detail, they are perfect for:
                    </p>
                    <div className="space-y-3 text-xs">
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-orange-100 dark:border-orange-800">
                            <p className="font-bold text-orange-900 dark:text-orange-300 mb-1">Edge Detection</p>
                            <p className="text-orange-800/80 dark:text-orange-300/80">Edge information shows up clearly as bright/dark contours.</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-orange-100 dark:border-orange-800">
                            <p className="font-bold text-orange-900 dark:text-orange-300 mb-1">Image Sharpening</p>
                            <p className="text-orange-800/80 dark:text-orange-300/80">Add a scaled Laplacian back to the image to boost details: sharper edges, crisper textures.</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-orange-100 dark:border-orange-800">
                            <p className="font-bold text-orange-900 dark:text-orange-300 mb-1">Texture Synthesis & Multi-Scale Editing</p>
                            <p className="text-orange-800/80 dark:text-orange-300/80">Manipulate specific scales: enhance or suppress fine or coarse texture. Transfer texture from one image to another at certain scales.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Why It's So Useful Conceptually */}
            <div className="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl border border-violet-200 dark:border-violet-800/30 space-y-3">
                <h4 className="font-bold text-violet-900 dark:text-violet-300 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 6. Why It's So Useful Conceptually
                </h4>
                <p className="text-xs text-violet-800/80 dark:text-violet-300/80 leading-relaxed">
                    The Laplacian pyramid gives you a <strong>compact, multi-scale map of "what changes where" in the image</strong>. It allows you to:
                </p>
                <ul className="space-y-2 text-xs text-violet-800/80 dark:text-violet-300/80">
                    <li className="flex gap-2">
                        <CheckCircle2 size={14} className="text-violet-500 mt-0.5 shrink-0" />
                        <span><strong>Separate structure by scale</strong> — understand what's happening at each resolution</span>
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 size={14} className="text-violet-500 mt-0.5 shrink-0" />
                        <span><strong>Store only what's needed</strong> to reconstruct detail efficiently</span>
                    </li>
                </ul>
                <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-violet-100 dark:border-violet-800 space-y-2 text-xs">
                    <p className="font-semibold text-violet-900 dark:text-violet-300">Think of it as:</p>
                    <p className="text-violet-800/80 dark:text-violet-300/80">
                        <strong className="text-violet-900 dark:text-violet-300">Gaussian Pyramid:</strong> "What the image looks like at each scale."
                    </p>
                    <p className="text-violet-800/80 dark:text-violet-300/80">
                        <strong className="text-violet-900 dark:text-violet-300">Laplacian Pyramid:</strong> "What extra detail you need to go from a coarser scale to a finer one."
                    </p>
                </div>
                <p className="text-xs font-semibold text-violet-700 dark:text-violet-400">
                    That's why it's a core building block in compression, blending & compositing, multi-scale analysis, and advanced image editing tools.
                </p>
            </div>

            {/* 7. Summary */}
            <div className="p-5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">7. Summary (Exam-Style)</h4>
                <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                    The <strong>Laplacian pyramid</strong> is a multi-scale representation that stores the high-frequency details (differences) between successive levels of a Gaussian pyramid. For each level <InlineMath math="i" />, the Laplacian level is obtained by subtracting the upsampled version of the next Gaussian level from the current Gaussian level:
                </p>
                <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-slate-200 dark:border-slate-800 text-center">
                    <InlineMath math="L_i = G_i - \text{Upsample}(G_{i+1})" />
                </div>
                <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                    This effectively isolates the detail lost during smoothing and downsampling. The Laplacian pyramid, together with the smallest Gaussian level, allows <strong>perfect reconstruction</strong> of the original image and provides a <strong>compact representation</strong> of image details. It is widely used for image compression, image blending, edge detection, texture synthesis, and image sharpening.
                </p>
            </div>
        </motion.div>
    );
}
