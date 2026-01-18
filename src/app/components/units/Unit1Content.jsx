// app/components/units/Unit1Content.jsx
import Image from "next/image";
import { InlineMath, BlockMath } from 'react-katex';
import { FileAudio, Save, Play, BarChart3, Radio, Activity, Waves, Zap, Eye, Minimize2, Database, Clock, ArrowRightLeft, Edit, HardDrive } from 'lucide-react';

export function Unit1Overview() {
  return (
    <div className="space-y-4 text-body text-zinc-700 dark:text-zinc-300">
      <p>
        <span className="font-semibold">Digital Signal Processing (DSP)</span>{" "}
        is the study and practice of analyzing and improving signals after
        they&apos;ve been converted into digital form (samples). A signal is
        any measurable quantity that varies over time or space—examples include
        audio (music/speech), images, sensor data, and wireless communication
        signals.
      </p>

      <p>
        DSP matters because signals in the real world often get distorted by
        noise and limitations in capturing or transmitting them. DSP uses
        mathematics and computing to understand what&apos;s in a signal and
        modify it intentionally (for example, reduce noise, extract a voice
        from a recording, or detect what frequencies are present).
      </p>

      <p>
        At a basic level, many DSP goals can be achieved using simple
        building-block operations such as:
      </p>

      <ul className="ml-5 list-disc space-y-1">
        <li>Storing samples (saving the signal)</li>
        <li>Delaying a signal (shifting it in time)</li>
        <li>Adding / subtracting signals (mixing or removing components)</li>
        <li>Multiplying by constants (amplifying or reducing)</li>
      </ul>

      <p>
        Even though these are simple operations, combining them leads to
        powerful tools like filtering, compression, and frequency analysis.
      </p>

      <h3 className="text-body font-semibold" style={{ color: "var(--text-primary)" }}>
        What the &quot;Fundamentals&quot; unit is trying to do
      </h3>
      <p>
        The first unit in a DSP course is usually designed to make sure
        students can:
      </p>
      <ul className="ml-5 list-disc space-y-1">
        <li>Understand how digital signals are represented and manipulated</li>
        <li>
          Analyze signals in both the time domain (signal vs. time) and the
          frequency domain (signal vs. frequency content)
        </li>
        <li>
          Work with core tools like Fourier transforms, filtering, and
          correlation
        </li>
        <li>
          Apply prerequisite skills (math + programming) to real signal
          problems
        </li>
      </ul>

      <h3 className="text-body font-semibold" style={{ color: "var(--text-primary)" }}>
        Core concepts in DSP fundamentals
      </h3>

      <p className="font-medium">1) Signal Structure and Representation</p>
      <p>
        This section focuses on what a digital signal is and how we work with
        it.
      </p>
      <p className="font-semibold">Periodic signals</p>
      <p>
        A periodic signal repeats after a fixed time interval called the
        period. For example, a bell tone can have a repeating pattern
        (especially in idealized or steady portions), making it useful for
        studying frequency content and harmonics.
      </p>
      <p className="font-semibold">Signal / wave objects</p>
      <p>
        In practice, a signal is represented as a list/array of numbers
        (samples). Many courses use the term{" "}
        <span className="italic">wave</span> for an audio signal: a sequence of
        sample values plus a sampling rate.
      </p>
      <p className="font-semibold">Reading and writing waves</p>
      <p>
        You learn how to load a stored signal (like a WAV audio file),
        manipulate it, and write it back out. This connects DSP theory to real
        data.
      </p>

      <p className="font-medium">2) Frequency Analysis and Transforms</p>
      <p>
        A major idea in DSP is: signals can be described not only by how they
        change over time, but also by what frequencies they contain.
      </p>
      <p className="font-semibold">Spectral decomposition</p>
      <p>
        The key theory: many signals can be represented as a sum of sinusoids
        (sine/cosine waves) with different frequencies, amplitudes, and phases.
        This is the foundation for understanding pitch in audio, edges in
        images, and channel behavior in communications.
      </p>
      <p className="font-semibold">Spectrum</p>
      <p>
        The spectrum is the collection (or plot) showing how much of each
        frequency is present in the signal. It answers questions like: &quot;Which
        frequencies dominate?&quot; or &quot;Is there a strong tone at 1 kHz?&quot;
      </p>
      <p className="font-semibold">Sampling</p>
      <p>
        Sampling is converting a continuous signal into discrete-time samples
        (like measuring the signal every 1/44100 second for CD-quality audio).
        Sampling choices affect what information can be preserved and what
        distortion (like aliasing) might occur.
      </p>
      <p className="font-semibold">Fourier transforms: DFT and FFT</p>
      <p>
        The Discrete Fourier Transform (DFT) computes the frequency content of
        a finite block of samples. The Fast Fourier Transform (FFT) is an
        efficient algorithm to compute the DFT much faster, enabling real-time
        and large-scale analysis.
      </p>
      <p className="font-semibold">Convolution and filtering</p>
      <p>
        Convolution describes how a system or filter modifies a signal.
        Filtering often has a frequency interpretation:
      </p>
      <ul className="ml-5 list-disc space-y-1">
        <li>
          <span className="font-semibold">Lowpass filtering (smoothing):</span>{" "}
          keeps low frequencies, reduces rapid changes (often removes
          high-frequency noise).
        </li>
        <li>
          <span className="font-semibold">Highpass filtering (sharpening):</span>{" "}
          emphasizes rapid changes (often highlights edges in images or attacks
          in audio).
        </li>
      </ul>

      <p className="font-medium">3) Noise and Correlation</p>
      <p>
        Real signals almost always include unwanted components. This section is
        about modeling and measuring that.
      </p>
      <p className="font-semibold">Noise</p>
      <p>
        Noise means unwanted or unknown changes added to a signal during
        recording, transmission, or processing. Common noise types mentioned:
      </p>
      <ul className="ml-5 list-disc space-y-1">
        <li>
          <span className="font-semibold">Uncorrelated noise:</span>{" "}
          sample-to-sample noise that doesn&apos;t follow a predictable pattern.
        </li>
        <li>
          <span className="font-semibold">Gaussian noise:</span> noise whose
          values follow a normal distribution (common in many physical systems).
        </li>
        <li>
          <span className="font-semibold">Pink noise:</span> more energy at low
          frequencies (often appears in natural systems).
        </li>
        <li>
          <span className="font-semibold">Brownian (red) noise:</span> even
          stronger low-frequency emphasis (random-walk-like behavior).
        </li>
      </ul>

      <p className="font-semibold">Autocorrelation (serial correlation)</p>
      <p>
        Autocorrelation measures how similar a signal is to a delayed version
        of itself. It helps detect repeating patterns, periodicity, and
        structure even when noise is present. Treating correlation as a dot
        product is a useful viewpoint: you&apos;re measuring &quot;overlap&quot; between
        the signal and a shifted copy.
      </p>

      <p className="font-medium">One-sentence takeaway</p>
      <p>
        DSP fundamentals teach you how to represent digital signals, analyze
        their frequency content, filter them using convolution, and handle noise
        using tools like spectra and correlation—using computation plus
        mathematical signal models.
      </p>
      {/* Image at the end, full and with outer stroke */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/dspo.png" // replace with your actual file in /public
            alt="Visualization of a digital signal and its waveform"
            width={800}
            height={400}
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

function PeriodicSignalsContent() {
  return (
    <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
      {/* Definition */}
      <p>
        A <span className="font-semibold">periodic signal</span> is a signal
        that repeats exactly after a fixed amount of time (in continuous time)
        or after a fixed number of samples (in discrete time).
      </p>

      <p>
        Examples of periodic behavior:
        <br />
        • A pendulum swinging back and forth (approximately repeating motion)
        <br />
        • A blinking indicator light that turns ON–OFF–ON–OFF in a regular
        cycle
      </p>

      {/* 1. Continuous-time periodic signals */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Continuous-time periodic signal
        </p>
        <p>
          A continuous-time signal{" "}
          <span className="font-mono">x(t)</span> is{" "}
          <span className="font-semibold">periodic</span> if there exists a
          positive number <span className="font-mono">T₀</span> (the period)
          such that:
        </p>
        <div className="py-2">
          <BlockMath math="x(t) = x(t + T_0) \quad \text{for every real } t" />
        </div>
        <p>
          Meaning: if you shift the signal by{" "}
          <span className="font-mono">T₀</span> seconds, it looks identical.
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-mono">x</span> – name of the signal
          </li>
          <li>
            <span className="font-mono">t</span> – continuous time variable
          </li>
          <li>
            <span className="font-mono">x(t)</span> – value (amplitude) of the
            signal at time <span className="font-mono">t</span>
          </li>
          <li>
            <span className="font-mono">T₀</span> – fixed time interval (one
            period)
          </li>
          <li>
            If <span className="font-mono">x(t) = x(t + T₀)</span> for all{" "}
            <span className="font-mono">t</span>, the signal is periodic with
            period <span className="font-mono">T₀</span>.
          </li>
        </ul>

        <p className="font-semibold text-body-sm">
          Real-world continuous-time example (short & easy)
        </p>
        <p>
          Think of a wall clock&apos;s second hand:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>It completes one full rotation every 60 seconds.</li>
          <li>After 60 seconds, it comes back to the same position.</li>
        </ul>
        <p>
          If we model the angle of the second hand as{" "}
          <span className="font-mono">x(t)</span>, then:
        </p>
        <div className="py-2">
          <BlockMath math="x(t) = x(t + 60)" />
        </div>
        <p>So this is a continuous-time periodic signal with period 60 s.</p>
      </div>

      {/* Discrete-time definition */}
      <div className="card space-y-2">
        <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
          Discrete-time periodic signal
        </p>
        <p>
          A discrete-time signal <span className="font-mono">x[n]</span> is
          periodic if there exists a positive integer{" "}
          <span className="font-mono">P</span> (the period) such that:
        </p>
        <div className="py-2">
          <BlockMath math="x[n] = x[n + P] \quad \text{for every integer } n" />
        </div>
        <p>
          This means that after <span className="font-mono">P</span> samples,
          the signal pattern repeats.
        </p>
      </div>

      {/* Explanation of terms */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Meaning of each symbol
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-mono">x[n]</span> – value of the signal at
            sample index <span className="font-mono">n</span>
          </li>
          <li>
            <span className="font-mono">n</span> – sample number (0, 1, 2, 3,
            …)
          </li>
          <li>
            <span className="font-mono">P</span> – period (number of samples
            after which the pattern repeats)
          </li>
          <li>
            <span className="font-mono">x[n + P]</span> – value of the signal
            P samples later
          </li>
          <li>
            “=” – indicates that the two sample values are exactly the same
          </li>
        </ul>
      </div>

      {/* Easy meaning */}
      <p>
        In very easy words: if the signal value at sample{" "}
        <span className="font-mono">n</span> is the same as the value at sample{" "}
        <span className="font-mono">n + P</span> for all{" "}
        <span className="font-mono">n</span>, then the signal repeats every{" "}
        <span className="font-mono">P</span> samples – it is periodic.
      </p>

      {/* Short example */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Short example
        </p>
        <p>
          Consider the sequence:
        </p>
        <div className="py-2">
          <BlockMath math="x[n] = \{ 1, 2, 1, 2, 1, 2, \dots \}" />
        </div>
        <ul className="ml-5 list-disc space-y-1">
          <li>The pattern “1, 2” repeats over and over.</li>
          <li>Period P = 2 samples.</li>
        </ul>
        <p>
          So this is a periodic discrete-time signal with period 2.
        </p>
      </div>

      {/* Important terms */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Important terms: waveform, cycle, period, frequency
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Waveform:</span> the shape of one
            repetition (one “pattern”) of the signal (e.g., sine wave vs
            square wave).
          </li>
          <li>
            <span className="font-semibold">Cycle:</span> one full repeat of
            the waveform.
          </li>
          <li>
            <span className="font-semibold">Period:</span> how long one cycle
            lasts.
            <br />
            • Continuous time: <span className="font-mono">T₀</span> seconds
            <br />
            • Discrete time: <span className="font-mono">P</span> samples
          </li>
          <li>
            <span className="font-semibold">Frequency:</span> how often cycles
            happen.
            <br />
            • Continuous time:{" "}
            <InlineMath math="f_0 = 1 / T_0" /> (Hz, cycles per
            second)
            <br />
            • Discrete time:{" "}
            <InlineMath math="f_d = 1 / P" /> (cycles per sample)
          </li>
        </ul>
        <p>
          Short idea: short period ⇒ high frequency, long period ⇒ low
          frequency.
        </p>
      </div>

      {/* Sinusoids */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Sinusoids – special periodic signals
        </p>
        <p>
          A sinusoid is a periodic signal shaped like a sine or cosine wave.
          For example:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            Continuous time:{" "}
            <BlockMath math="x(t) = A \cos(\omega t + \phi)" />
          </li>
          <li>
            Discrete time:{" "}
            <BlockMath math="x[n] = A \cos(\Omega n + \phi)" />
          </li>
        </ul>
        <p>
          Sinusoids are extremely important because DSP often represents
          complicated signals as sums of sinusoids.
        </p>
      </div>

      {/* Why periodic signals matter */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Why periodic signals matter (sound + Fourier idea)
        </p>
        <p className="font-semibold">1. Musical timbre</p>
        <p>
          Two sounds can have the same pitch (same fundamental frequency) but
          sound different. The difference comes from the waveform shape and the
          mixture of harmonics.
        </p>
        <p>
          Example: a piano and a violin playing the same note have different
          waveforms → different harmonic content → different timbre.
        </p>

        <p className="font-semibold">2. Fourier series (spectral decomposition)</p>
        <p>
          A key DSP idea:{" "}
          <span className="font-semibold">
            any periodic signal can be represented as a sum of sinusoids
          </span>
          .
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            These sinusoids have frequencies that are integer multiples of the
            fundamental frequency → harmonics.
          </li>
          <li>
            The set of harmonics and their amplitudes is the signal&apos;s{" "}
            <span className="font-semibold">spectrum</span>.
          </li>
        </ul>
        <p>
          The spectrum tells us which frequencies are present in the signal and
          how strong they are.
        </p>
      </div>

      {/* DFT connection */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Periodic signals in digital processing (DFT connection)
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">DFT assumes periodicity:</span> an{" "}
            N-point DFT treats the N input samples as{" "}
            <span className="italic">one period</span> of a repeating signal.
            The math assumes this block repeats indefinitely.
          </li>
          <li>
            <span className="font-semibold">Non-periodic signals:</span> real
            signals are often not perfectly periodic. In practice we take a
            finite chunk and apply DFT, which effectively forces repetition of
            that chunk.
          </li>
          <li>
            For truly non-periodic signals, the continuous-time Fourier
            Transform is the more accurate model.
          </li>
        </ul>
        <p className="font-semibold">Real-world example:</p>
        <p>
          Suppose you record 1 second of a song and take its DFT. The DFT
          assumes this 1-second clip repeats forever, even though the actual
          song continues differently. If the clip doesn&apos;t naturally repeat,
          you may see or hear artificial “jumps” at the boundaries, so we often
          use windowing or other tricks to reduce this effect.
        </p>
      </div>

      {/* Discrete-time periodicity nuance */}
      <div className="card space-y-1">
        <p className="font-semibold text-body-sm" style={{ color: "var(--text-primary)" }}>
          Discrete-time periodicity warning (important nuance)
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Continuous-time sinusoids:</span>{" "}
            always periodic; they repeat perfectly over time.
          </li>
          <li>
            <span className="font-semibold">Discrete-time sinusoids:</span>{" "}
            only periodic if the frequency fits the sampling grid properly.
          </li>
        </ul>
        <p>
          Mathematically, there must be integers{" "}
          <span className="font-mono">P</span> and{" "}
          <span className="font-mono">k</span> such that:
        </p>
        <div className="py-2">
          <BlockMath math="\Omega \cdot P = 2\pi k" />
        </div>
        <p>
          where:
          <br />• <span className="font-mono">Ω</span> – discrete-time
          frequency (radians per sample)
          <br />• <span className="font-mono">P</span> – number of samples in
          one period
          <br />• <span className="font-mono">2π</span> – one full cycle in
          radians
          <br />• <span className="font-mono">k</span> – integer number of
          cycles in P samples
        </p>
        <p>
          Meaning: a discrete sinusoid repeats only if P samples contain an
          exact integer number of full cycles.
        </p>

        <p className="font-semibold">Real-world example:</p>
        <p>
          Suppose you sample a musical note at 44.1 kHz. If the note&apos;s
          frequency aligns perfectly with the grid of sample points, the sampled
          waveform will repeat after P samples. If it does not align (a
          frequency between grid points), the sampled signal will never repeat{" "}
          <span className="italic">exactly</span>, even though the original
          analog signal is a perfect sinusoid.
        </p>
      </div>

      {/* Summary */}
      <p className="font-medium">
        One-line summary: periodic signals matter because they connect waveform
        shape, harmonics, and spectral decomposition (Fourier series), which is
        a core idea in digital signal processing.
      </p>

      {/* Image at the end, full and with outer stroke */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/ps1.png" // replace with your actual file in /public
            alt="Visualization of a digital signal and its waveform"
            width={800}
            height={400}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Image at the end, full and with outer stroke */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/ps2.png" // replace with your actual file in /public
            alt="Visualization of a digital signal and its waveform"
            width={800}
            height={400}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Link to interactive Streamlit demo */}
      {/* Link to interactive Streamlit demo (directly opens periodic demo) */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://asip-lab.streamlit.app/?demo=periodic" // later use your deployed URL
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open Periodic Signal Interactive Demo
        </a>
      </div>
    </div>
  );
}

// 1.2 Spectral decomposition content
export function SpectralDecompositionContent() {
  return (
    <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
      {/* 1) Core idea */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          1) Core idea
        </p>
        <p>
          <span className="font-semibold">Spectral decomposition</span> means we
          represent a signal as a sum of sinusoidal components (sine/cosine
          waves) with different frequencies.
        </p>
        <p>
          This is powerful because it lets us study a signal in the{" "}
          <span className="font-semibold">frequency domain</span> (what
          frequencies are inside the signal), not only in the{" "}
          <span className="font-semibold">time domain</span> (how the signal
          changes over time).
        </p>
      </div>

      {/* 2) DFT and FFT */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          2) How we do it for digital signals (DFT and FFT)
        </p>
        <p>
          For discrete-time (digital) signals, the main tool for spectral
          decomposition is the{" "}
          <span className="font-semibold">Discrete Fourier Transform (DFT)</span>.
        </p>
        <p>Conceptually:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Input:</span> a block of samples{" "}
            <InlineMath math="x[n]" /> (for n = 0,…,N−1)
          </li>
          <li>
            <span className="font-semibold">Output:</span> its spectrum{" "}
            <InlineMath math="X[k]" /> (for k = 0,…,N−1)
          </li>
        </ul>
        <p>
          The spectrum is the collection of sinusoidal components (their
          frequencies, magnitudes, and phases) that add up to recreate the
          original signal.
        </p>
        <p>
          The <span className="font-semibold">FFT (Fast Fourier Transform)</span>{" "}
          is <span className="italic">not</span> a different transform—it is a
          fast algorithm for computing the DFT efficiently.
        </p>
      </div>

      {/* 3) What the spectrum tells you */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          3) What the spectrum tells you
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Frequencies present:</span> which
            frequency components exist in the signal.
          </li>
          <li>
            <span className="font-semibold">Magnitude (strength):</span> how
            strong each frequency component is. Larger magnitude ⇒ that
            frequency contributes more to the signal.
          </li>
          <li>
            <span className="font-semibold">Phase:</span> tells the alignment /
            shift of each sinusoid (where it “starts” in its cycle). Magnitude
            controls “how much,” phase controls “how it lines up.”
          </li>
          <li>
            <span className="font-semibold">Fundamental frequency:</span> the
            lowest main frequency component in a periodic signal. In audio, it
            often corresponds to the perceived pitch.
          </li>
          <li>
            <span className="font-semibold">Harmonics:</span> frequencies at
            integer multiples of the fundamental:
            <BlockMath math="2 f_0,\; 3 f_0,\; 4 f_0,\;\dots" />
            These harmonics and their strengths shape the waveform and the
            sound&apos;s <span className="font-semibold">timbre</span> (tone
            quality).
          </li>
        </ul>
      </div>

      {/* 4) Why spectral decomposition matters */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          4) Why spectral decomposition is important in DSP
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Understanding signals:</span> many
            signals are easier to interpret in frequency form (e.g., tones,
            noise, bandwidth, resonances).
          </li>
          <li>
            <span className="font-semibold">Improving signals:</span> by
            manipulating frequency components, DSP can reduce noise, enhance
            useful parts, and detect patterns.
          </li>
          <li>
            <span className="font-semibold">
              Filtering connection (time vs frequency domain):
            </span>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Time domain: filtering is often implemented by{" "}
                <span className="font-semibold">convolution</span>.
              </li>
              <li>
                Frequency domain: convolution becomes{" "}
                <span className="font-semibold">multiplication</span>, which is
                often simpler and faster for large signals.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          This is why Fourier methods are widely used for:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Smoothing (low-pass filtering)</li>
          <li>Sharpening (high-pass filtering)</li>
        </ul>
      </div>

      {/* Summary table (simple text version) */}
      <div className="card space-y-2">
        <p
          className="text-body-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Summary table
        </p>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1 text-left">Topic</th>
                <th className="border px-2 py-1 text-left">Meaning</th>
                <th className="border px-2 py-1 text-left">Key takeaway</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Spectral decomposition</td>
                <td className="border px-2 py-1">
                  Represent a signal as a sum of sinusoids
                </td>
                <td className="border px-2 py-1">
                  Converts “signal shape” into “frequency ingredients”
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">DFT</td>
                <td className="border px-2 py-1">
                  Transform that computes frequency components for discrete
                  signals
                </td>
                <td className="border px-2 py-1">
                  Takes samples <InlineMath math="x[n]" /> → produces spectrum{" "}
                  <InlineMath math="X[k]" />
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">FFT</td>
                <td className="border px-2 py-1">
                  Fast method to compute the DFT
                </td>
                <td className="border px-2 py-1">
                  Same result as DFT, much faster computation
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Spectrum</td>
                <td className="border px-2 py-1">
                  The set of sinusoidal components of a signal
                </td>
                <td className="border px-2 py-1">
                  Shows frequencies + magnitude + phase
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Magnitude</td>
                <td className="border px-2 py-1">
                  Strength of each frequency component
                </td>
                <td className="border px-2 py-1">
                  Larger magnitude = more contribution
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Phase</td>
                <td className="border px-2 py-1">
                  Where each sinusoid lines up in time
                </td>
                <td className="border px-2 py-1">
                  Affects alignment/shape, not just strength
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Fundamental frequency</td>
                <td className="border px-2 py-1">
                  Lowest main frequency in a periodic signal
                </td>
                <td className="border px-2 py-1">
                  Often corresponds to perceived pitch
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Harmonics</td>
                <td className="border px-2 py-1">
                  Integer multiples of the fundamental
                </td>
                <td className="border px-2 py-1">
                  Shape waveform and timbre (tone quality)
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Filtering link</td>
                <td className="border px-2 py-1">
                  Convolution in time ↔ multiplication in frequency
                </td>
                <td className="border px-2 py-1">
                  Frequency-domain filtering can be efficient
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Image at the end, full and with outer stroke */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/sd.png" // replace with your actual file in /public
            alt="Visualization of a digital signal and its waveform"
            width={800}
            height={400}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Link to interactive Streamlit demo */}
      {/* Link to interactive Streamlit demo (directly opens periodic demo) */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://asip-lab.streamlit.app/?demo=periodic" // later use your deployed URL
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open Periodic Signal Interactive Demo
        </a>
      </div>

    </div>
  );
}

export { PeriodicSignalsContent };

// 1.3 Signals (general concept)
export function SignalsConceptContent() {
  return (
    <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
      {/* 1) What is a signal? */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          1) What is a signal?
        </p>
        <p>
          A <span className="font-semibold">signal</span> is anything that carries information.
          In DSP, a signal is usually described as a physical quantity that changes with an independent variable, such as:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">Time (most common):</span> speech, music, sensor readings
          </li>
          <li>
            <span className="font-semibold">Space:</span> an image (brightness changes across pixels), elevation along a trail
          </li>
          <li>
            <span className="font-semibold">Other variables:</span> temperature, pressure, etc.
          </li>
        </ul>
        <p>
          So, a signal is basically: <span className="font-semibold">information written as a changing value.</span>
        </p>
      </div>

      {/* 2) Why signals matter */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          2) Why signals matter in the digital world
        </p>
        <p>
          Signals are everywhere in modern technology. Many things we use daily are signals or collections of signals, for example:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Music/audio (microphone → samples)</li>
          <li>Pictures/images (2D arrays of pixel values)</li>
          <li>Wireless communication (radio waves carrying data)</li>
          <li>Video (sequence of images over time)</li>
        </ul>
        <p>
          That’s why signals are considered central to digital processing—we constantly record, transmit, store, and modify them.
        </p>
      </div>

      {/* 3) What DSP does with signals */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          3) What DSP does with signals
        </p>
        <p>
          Digital Signal Processing (DSP) uses:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li><span className="font-semibold">Mathematics</span> (to model and analyze signals)</li>
          <li><span className="font-semibold">Computers</span> (to process large amounts of data efficiently)</li>
        </ul>
        <p>
          DSP has two main goals:
        </p>
        <div className="ml-2 space-y-1">
          <p><span className="font-semibold">• Understand / analyze signals</span></p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Find patterns, frequencies, important features</li>
            <li>Measure properties (energy, spectrum, correlation, etc.)</li>
          </ul>
          <p><span className="font-semibold">• Improve / modify signals</span></p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Remove noise</li>
            <li>Enhance important parts</li>
            <li>Compress for storage/transmission</li>
            <li>Filter (smooth or sharpen)</li>
            <li>Detect or extract information (like speech recognition or channel decoding)</li>
          </ul>
        </div>
      </div>

      {/* 4) Dimensionality of signals */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          4) Dimensionality of signals (1D, 2D, 3D…)
        </p>
        <p>
          Signals aren’t only “over time.” They can exist in different dimensions:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <span className="font-semibold">1D signals (vary over time):</span> audio waveform, ECG, temperature vs time
          </li>
          <li>
            <span className="font-semibold">2D signals (vary over space):</span> images (brightness vs x,y), maps, elevation surfaces
          </li>
          <li>
            <span className="font-semibold">3D or more (vary over multiple variables):</span> video (image changes over time = x,y,t), medical imaging volumes (3D scans), multi-sensor systems (space + time + sensor index)
          </li>
        </ul>
        <p>
          <span className="font-semibold">Key point:</span> The “independent variable” could be time, space, or several variables together.
        </p>
      </div>

      {/* 5) Signals in programming */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          5) Signals in programming (Signal objects)
        </p>
        <p>
          In programming (like Python libraries used in DSP courses), signals are often represented by classes/objects.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>A <span className="font-semibold">Signal object</span> is a program representation of a mathematical function.</li>
          <li>Conceptually, many signals are defined for all possible values of the independent variable (especially time).</li>
          <li>Example idea: <span className="font-mono">x(t)</span> exists for <span className="font-mono">t</span> from -∞ to +∞ in theory.</li>
          <li>In code, we usually work with a finite set of samples, but the Signal object represents the rule for generating values.</li>
        </ul>
        <p className="font-semibold text-body-sm">Class relationship example</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><span className="font-mono">Signal</span> (general parent class)</li>
          <li><span className="font-mono">Sinusoid</span> (a specific type of signal with sine/cosine shape)</li>
        </ul>
        <p>This helps organize different signal types under one consistent interface.</p>
      </div>

      {/* Summary table */}
      <div className="card space-y-2">
        <p className="text-body-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          Summary table
        </p>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1 text-left">Topic</th>
                <th className="border px-2 py-1 text-left">Meaning</th>
                <th className="border px-2 py-1 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Signal</td>
                <td className="border px-2 py-1">Anything that carries information; a quantity that varies with an independent variable</td>
                <td className="border px-2 py-1">Audio, images, wireless data</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Independent variable</td>
                <td className="border px-2 py-1">What the signal changes with</td>
                <td className="border px-2 py-1">Time t, space (x,y), temperature, pressure</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">DSP purpose</td>
                <td className="border px-2 py-1">Use math + computers to analyze and improve signals</td>
                <td className="border px-2 py-1">Noise removal, filtering, compression, detection</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Dimensionality</td>
                <td className="border px-2 py-1">How many independent variables the signal depends on</td>
                <td className="border px-2 py-1">1D audio, 2D image, 3D video (x,y,t)</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Signal in programming</td>
                <td className="border px-2 py-1">Object representing a mathematical function that generates signal values</td>
                <td className="border px-2 py-1">Signal base class</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Specific signal types</td>
                <td className="border px-2 py-1">Child classes of Signal</td>
                <td className="border px-2 py-1">Sinusoid, other waveform models</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Image at the end, full and with outer stroke */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl w-full"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/signal.png" // replace with your actual file in /public
            alt="Visualization of a digital signal and its waveform"
            width={1200}
            height={600}
            className="block h-auto w-full"
          />
        </div>
      </div>

    </div>
  );
}

// 1.4 Reading and writing waves
export function ReadingWritingWavesContent() {
  return (
    <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300">

      {/* Intro */}
      <div className="card space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <FileAudio size={18} />
          </div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Reading and Writing WAV Files</h4>
        </div>
        <p>
          <span className="font-semibold">“Reading and writing Waves”</span> means loading audio from a WAV file into your program, working with it as digital samples, and then saving it back to a WAV file (and often playing it).
        </p>
      </div>

      {/* 1) Reading Waves */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          1) Reading Waves (importing audio)
        </h4>
        <div className="card space-y-2">
          <p>
            <span className="font-semibold">Reading a WAV file</span> = taking audio stored on disk (like <span className="font-mono text-xs">input.wav</span>) and converting it into a form your program can work with.
          </p>
          <p className="text-xs uppercase tracking-wide font-semibold text-zinc-500 mt-2">In thinkdsp</p>
          <p>The module provides a function:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-md font-mono text-xs text-zinc-800 dark:text-zinc-200">
            thinkdsp.read_wave(filename)
          </div>
          <ul className="ml-5 list-disc space-y-1">
            <li>Reads a WAV file from disk</li>
            <li>Returns a <span className="font-mono">Wave</span> object</li>
          </ul>
          <p className="text-xs uppercase tracking-wide font-semibold text-zinc-500 mt-2">Example idea</p>
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-md font-mono text-xs text-zinc-800 dark:text-zinc-200">
            thinkdsp.read_wave('input.wav')
          </div>
          <p>Now you have a <span className="font-mono">Wave</span> object representing that audio inside Python.</p>
        </div>
      </div>

      {/* 2) Writing and Playing Waves */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          2) Writing and Playing Waves (exporting + listening)
        </h4>

        {/* A) Writing */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Save size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">A) Writing (saving to disk)</span>
          </div>
          <p>
            After you modify or create a signal, you often want to store it as a new WAV file.
            A <span className="font-mono">Wave</span> object provides a <span className="font-mono">write</span> method:
          </p>
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-md font-mono text-xs text-zinc-800 dark:text-zinc-200">
            wave.write(filename='output.wav')
          </div>
          <p>Saves the wave data into a WAV file on disk.</p>
        </div>

        {/* B) Listening */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Play size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">B) Listening / playback</span>
          </div>
          <p>There are two common ways to listen:</p>
          <ul className="space-y-2 ml-1">
            <li>
              <span className="font-semibold block text-xs">Play with any media player</span>
              Once you save <span className="font-mono text-xs">output.wav</span>, you can open it in any WAV-compatible player.
            </li>
            <li>
              <span className="font-semibold block text-xs">Play from inside Python (programmatic playback)</span>
              <span className="font-mono">thinkdsp</span> provides <span className="font-mono">play_wave</span>, which runs an external media player.
              (By default it uses <span className="font-mono">aplay</span> on Linux, but can be configured).
            </li>
          </ul>
        </div>
      </div>

      {/* 3) What a Wave object actually contains */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          3) What a Wave object actually contains
        </h4>
        <div className="card space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <Radio size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Digital representation</span>
          </div>
          <p>
            A <span className="font-mono">Wave</span> is a digital (sampled) representation of an audio signal. It typically includes:
          </p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-2 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
              <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">ys</span>
              <span className="ml-2 text-zinc-600 dark:text-zinc-400">: a NumPy array of sample values</span>
              <p className="text-xs text-zinc-500 mt-1">These are the audio amplitudes (the actual signal values).</p>
            </div>
            <div className="p-2 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
              <span className="font-mono font-semibold text-purple-600 dark:text-purple-400">ts</span>
              <span className="ml-2 text-zinc-600 dark:text-zinc-400">: a NumPy array of sample times</span>
              <p className="text-xs text-zinc-500 mt-1">These tell you when each sample occurs.</p>
            </div>
            <div className="p-2 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
              <span className="font-mono font-semibold text-orange-600 dark:text-orange-400">framerate</span>
              <span className="ml-2 text-zinc-600 dark:text-zinc-400">: samples per second</span>
              <p className="text-xs text-zinc-500 mt-1">Example: 44100 Hz.</p>
            </div>
          </div>
          <p className="italic text-zinc-500 border-l-2 border-zinc-300 dark:border-zinc-700 pl-3">
            So you can think of a Wave like: <br />
            “Here are the amplitudes (ys), at these times (ts), sampled at this rate (framerate).”
          </p>
        </div>
      </div>

      {/* Summary Table */}
      <div className="card space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 size={16} className="text-zinc-500" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Summary table</span>
        </div>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Task / Item</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">What it means</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">In thinkdsp / Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Read a WAV file</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Load audio from disk into Python</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">thinkdsp.read_wave('input.wav') → Wave obj</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Write a WAV file</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Save audio from Python back to disk</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">wave.write(filename='output.wav')</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Play audio (manual)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Listen using a normal audio player</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">You hear sound</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Play audio (prog.)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Play from Python via external player</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">thinkdsp.play_wave(...)</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-blue-600 dark:text-blue-400">ys</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sample values (amplitude data)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">wave.ys (NumPy array)</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-purple-600 dark:text-purple-400">ts</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sample times</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">wave.ts (NumPy array)</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-orange-600 dark:text-orange-400">framerate</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Samples per second</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-mono text-[10px]">e.g. 44100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Image at the end */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl w-full"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/rwv.png" // replace with your actual file in /public
            alt="Visualization of reading and writing waves"
            width={1200}
            height={600}
            className="block h-auto w-full"
          />
        </div>
      </div>

    </div>
  );
}

// 1.5 Spectrums (frequency spectra)
export function SpectrumsContent() {
  return (
    <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300">

      {/* Intro */}
      <div className="card space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Activity size={18} />
          </div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Spectrum in DSP (organized and easy)</h4>
        </div>
        <p>
          A <span className="font-semibold">spectrum</span> (plural: spectra) is a way to describe a signal by showing what frequencies it contains, instead of showing how it changes over time (audio) or space (images).
        </p>
        <p>So you can view the same signal in two main ways:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><span className="font-semibold">Time/Spatial domain:</span> signal value vs time (audio) or vs position (image)</li>
          <li><span className="font-semibold">Frequency domain (spectrum):</span> signal content vs frequency</li>
        </ul>
      </div>

      {/* 1) What the spectrum represents */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          1) What the spectrum represents
        </h4>
        <div className="card space-y-3">
          <p>The spectrum describes how much of each frequency is present in a signal and how those frequencies line up.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-2 border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 rounded">
              <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-1">Magnitude (amplitude/strength)</span>
              <span className="text-xs">“How strong is this frequency in the signal?”</span>
            </div>
            <div className="p-2 border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/10 rounded">
              <span className="font-semibold text-orange-700 dark:text-orange-300 block mb-1">Phase</span>
              <span className="text-xs">“How is this frequency shifted/aligned?”</span>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            <span className="font-semibold">Note on System&apos;s Spectrum (Frequency Response):</span> It describes how a system changes the magnitude and phase of signals depending on frequency (some amplified, some reduced, etc).
          </p>
        </div>
      </div>

      {/* 2) Core nature and how we calculate it */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          2) Core nature and how we calculate it
        </h4>

        {/* A) Connection to spectral decomposition */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Waves size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">A) Connection to spectral decomposition</span>
          </div>
          <p>
            <span className="font-semibold">Spectral decomposition says:</span> A signal can be expressed as a sum of sinusoids with different frequencies.
          </p>
          <p>
            From that viewpoint: <span className="font-semibold">The spectrum = the set of sinusoidal components that add up to form the original signal.</span>
          </p>
        </div>

        {/* B) DFT and FFT */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">B) DFT and FFT</span>
          </div>
          <p>To compute a spectrum for discrete data, we use:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li><span className="font-semibold">DFT (Discrete Fourier Transform):</span> converts signal samples → spectrum</li>
            <li><span className="font-semibold">FFT (Fast Fourier Transform):</span> a fast algorithm for computing the DFT (same result, faster)</li>
          </ul>
        </div>

        {/* C) What DFT outputs */}
        <div className="card space-y-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">C) What DFT outputs</span>
          <p>
            The DFT produces an array of <span className="font-semibold">complex numbers</span>. Each complex value contains two parts:
          </p>
          <div className="space-y-2 mt-2">
            <div className="flex gap-2 items-center">
              <div className="w-24 shrink-0 font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-center">
                <InlineMath math="|X[k]|" />
              </div>
              <div className="text-xs">
                <span className="font-semibold">Magnitude spectrum</span> (real, nonnegative) → strength of frequency bin <span className="font-mono">k</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-24 shrink-0 font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-center">
                <InlineMath math="\angle X[k]" />
              </div>
              <div className="text-xs">
                <span className="font-semibold">Phase spectrum</span> → phase angle of frequency bin <span className="font-mono">k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3) How to interpret a spectrum plot */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          3) How to interpret a spectrum plot
        </h4>
        <div className="card space-y-2">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Frequency axis (x-axis)</span>
              Shows the frequencies (or frequency “bins”) that make up the signal.
            </li>
            <li>
              <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Amplitude/strength axis (y-axis)</span>
              Shows how much each frequency contributes (often magnitude <InlineMath math="|X[k]|" />).
            </li>
            <li>
              <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Fundamental and harmonics</span>
              <span className="font-semibold text-xs">Fundamental frequency:</span> lowest main frequency component<br />
              <span className="font-semibold text-xs">Harmonics:</span> integer multiples of the fundamental (2×, 3×, 4×, …)
            </li>
            <li>
              <span className="font-semibold block text-zinc-900 dark:text-zinc-100">DC component (zero frequency)</span>
              The DC term is the value at 0 frequency. It corresponds to the <span className="font-semibold">average value</span> of the signal.
              <br /><span className="italic text-xs text-zinc-500">In images: related to average brightness. Often the largest component.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4) Common applications */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          4) Common applications and how spectra are displayed
        </h4>

        {/* A) Filtering */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">A) Filtering in the frequency domain</span>
          </div>
          <p>Modify the spectrum by reducing/removing certain frequency components, then transform back.</p>
          <ul className="ml-5 list-disc space-y-1">
            <li><span className="font-semibold">Low-pass filter:</span> remove high freq → smoothing (removes noise/detail)</li>
            <li><span className="font-semibold">High-pass filter:</span> remove low freq → sharpening (edge emphasis)</li>
            <li><span className="font-semibold">Band-stop filter:</span> remove middle band</li>
          </ul>
        </div>

        {/* B) Compression */}
        <div className="card space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Minimize2 size={16} className="text-zinc-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">B) Compression</span>
          </div>
          <p>Many signals are frequency-sparse: important info is in low frequencies.</p>
          <p>If only a small number of Fourier coefficients are needed, you can store only those → <span className="font-semibold">compression</span>.</p>
        </div>

        {/* C) Visualization tricks */}
        <div className="card space-y-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">C) Visualization tricks</span>
          <p>Spectra often have a huge dynamic range, so displays use:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li><span className="font-semibold">Log magnitude scaling</span> (to make small components visible)</li>
            <li><span className="font-semibold">Shifting the spectrum</span> (Place DC/low-freq in center)</li>
          </ul>
        </div>
      </div>

      {/* 5) Spectrum objects in code */}
      <div className="card space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">5) Spectrum objects in code (thinkdsp-style)</span>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-md font-mono text-xs text-zinc-800 dark:text-zinc-200 mb-2">
          wave.make_spectrum() → returns a Spectrum object
        </div>
        <p className="font-semibold text-xs uppercase tracking-wide text-zinc-500">Common relationship</p>
        <div className="flex items-center justify-center gap-4 py-2 font-mono text-sm">
          <span>Signal</span> <span className="text-zinc-400">→</span> <span>Wave</span> <span className="text-zinc-400">→</span> <span>Spectrum</span>
        </div>
        <ul className="space-y-1 text-xs text-center text-zinc-500">
          <li><span className="font-semibold text-zinc-700 dark:text-zinc-300">Signal:</span> math description</li>
          <li><span className="font-semibold text-zinc-700 dark:text-zinc-300">Wave:</span> sampled data</li>
          <li><span className="font-semibold text-zinc-700 dark:text-zinc-300">Spectrum:</span> freq-domain rep.</li>
        </ul>
      </div>

      {/* Summary Table */}
      <div className="card space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 size={16} className="text-zinc-500" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Summary table</span>
        </div>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Concept</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Meaning</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Spectrum</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Rep. of signal by freq content</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Shows “what frequencies are inside”</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Magnitude spectrum</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="|X[k]|" /></td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Strength of each frequency</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Phase spectrum</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><InlineMath math="\angle X[k]" /></td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Phase alignment/timing</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">DFT / FFT</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Transform samples → spectrum</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Samples → complex spectrum values</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Fundamental freq</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Lowest main frequency</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Often linked to pitch</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">DC component</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Average value (0 Hz)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Avg brightness (images)</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Filtering</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Modify frequency coefficients</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Low-pass smooths, High-pass sharpens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Image at the end */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl w-full"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/spectrum.png" // replace with your actual file in /public
            alt="Visualization of frequency spectrum"
            width={1200}
            height={600}
            className="block h-auto w-full"
          />
        </div>
      </div>

    </div>
  );
}

// 1.6 Wave objects
export function WaveObjectsContent() {
  return (
    <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300">

      {/* Intro */}
      <div className="card space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            <Database size={18} />
          </div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Wave objects in DSP (organized and easy)</h4>
        </div>
        <p>
          A <span className="font-semibold">Wave object</span> is a core data structure used in DSP (especially in Python libraries like <span className="font-mono">thinkdsp</span>) to represent a sampled version of a signal.
        </p>
        <p>
          <span className="font-semibold">In simple terms:</span> it stores audio (or any time-based signal) as numbers.
        </p>
      </div>

      {/* 1) What a Wave object represents */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          1) What a Wave object represents
        </h4>
        <div className="card space-y-2">
          <ul className="ml-5 list-disc space-y-1">
            <li>A real-world signal (like sound) is <span className="font-semibold">continuous</span>.</li>
            <li>A computer works with <span className="font-semibold">samples</span>: measurements taken at specific time points.</li>
          </ul>
          <p className="mt-2">
            A <span className="font-mono">Wave</span> object bundles those samples + their timing information so you can analyze and process the signal.
          </p>
        </div>
      </div>

      {/* 2) The 3 core attributes */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          2) The 3 core attributes of a Wave object
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <div className="p-3 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
            <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 block mb-1">1) ys (values / samples)</span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              A NumPy array containing the signal values. Each element is one measured sample (amplitude).
            </p>
          </div>
          <div className="p-3 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
            <span className="font-mono font-semibold text-purple-600 dark:text-purple-400 block mb-1">2) ts (times)</span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
              A NumPy array containing the time points when each sample was taken.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs font-mono text-center">
              0, <InlineMath math="1/F_s" />, <InlineMath math="2/F_s" />, … seconds
            </div>
          </div>
          <div className="p-3 border border-zinc-200 dark:border-zinc-700/50 rounded bg-white dark:bg-black/20">
            <span className="font-mono font-semibold text-orange-600 dark:text-orange-400 block mb-1">3) framerate (sampling rate)</span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              The number of samples per unit time (usually samples per second, Hz).
              <br />Example: <span className="font-mono">44100</span> means 44,100 samples every second.
            </p>
          </div>
        </div>
      </div>

      {/* 3) Relationship to other DSP objects */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          3) Relationship to other DSP objects (Signal ⇄ Wave ⇄ Spectrum)
        </h4>
        <div className="card space-y-3">
          <div className="flex items-center justify-around text-xs font-medium bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded border border-zinc-200 dark:border-zinc-700">
            <div className="text-center">
              <span className="block text-zinc-500">Ideal</span>
              <span className="text-base text-purple-600 dark:text-purple-400">Signal</span>
            </div>
            <ArrowRightLeft size={16} className="text-zinc-400" />
            <div className="text-center">
              <span className="block text-zinc-500">Samples</span>
              <span className="text-base text-blue-600 dark:text-blue-400">Wave</span>
            </div>
            <ArrowRightLeft size={16} className="text-zinc-400" />
            <div className="text-center">
              <span className="block text-zinc-500">Freqs</span>
              <span className="text-base text-orange-600 dark:text-orange-400">Spectrum</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="font-semibold block text-zinc-800 dark:text-zinc-200">Signal → Wave</span>
              <span className="font-mono text-xs">make_wave</span> samples a mathematical function (Signal) to create a Wave.
            </li>
            <li>
              <span className="font-semibold block text-zinc-800 dark:text-zinc-200">Wave → Spectrum</span>
              <span className="font-mono text-xs">make_spectrum</span> transforms time-domain samples into frequency-domain information.
            </li>
          </ul>
        </div>
      </div>

      {/* 4) Time terminology */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          4) Time terminology: frame vs sample
        </h4>
        <div className="card flex gap-4 items-start">
          <Clock size={20} className="text-zinc-500 shrink-0 mt-1" />
          <div>
            <p className="mb-2">People often use them interchangeably, but the clean distinction is:</p>
            <ul className="list-disc ml-4 space-y-1">
              <li><span className="font-semibold">Frame:</span> a point in time (listed in <span className="font-mono">ts</span>).</li>
              <li><span className="font-semibold">Sample:</span> the measured value at that time (stored in <span className="font-mono">ys</span>).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5) Properties and modification */}
      <div className="space-y-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-1">
          5) Properties and modification
        </h4>

        <div className="grid grid-cols-1 gap-2">
          {/* Read-only */}
          <div className="p-2 card bg-zinc-50 dark:bg-zinc-800/30">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1 text-xs uppercase tracking-wide">Read-only properties (derived from ts)</span>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <span className="bg-white dark:bg-black/40 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">start</span>
              <span className="bg-white dark:bg-black/40 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">end</span>
              <span className="bg-white dark:bg-black/40 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">duration</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">These depend on <span className="font-mono">ts</span>.</p>
          </div>

          {/* Modification */}
          <div className="p-2 card bg-zinc-50 dark:bg-zinc-800/30">
            <div className="flex items-center gap-2 mb-1">
              <Edit size={14} className="text-zinc-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-wide">How to modify</span>
            </div>
            <ul className="space-y-1 ml-1 text-xs">
              <li><span className="font-semibold">Directly:</span> Modify <span className="font-mono">ys</span> (louder) or <span className="font-mono">ts</span> (shift).</li>
              <li><span className="font-semibold">Methods:</span> Use <span className="font-mono">scale()</span> or <span className="font-mono">shift()</span> (safer).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6) Input/Output */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <HardDrive size={16} className="text-zinc-500" />
          <h4 className="font-medium text-zinc-900 dark:text-zinc-200">6) Input/Output (WAV files)</h4>
        </div>
        <div className="card space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold block text-blue-600 dark:text-blue-400 text-xs mb-1">Reading</span>
              <code className="block bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded text-xs font-mono mb-1">read_wave(filename)</code>
              <span className="text-xs text-zinc-500">Reads WAV → returns Wave object</span>
            </div>
            <div>
              <span className="font-semibold block text-green-600 dark:text-green-400 text-xs mb-1">Writing & Playing</span>
              <code className="block bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded text-xs font-mono mb-1">wave.write(filename)</code>
              <code className="block bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded text-xs font-mono mb-1">play_wave(...)</code>
            </div>
          </div>
        </div>
      </div>


      {/* Summary Table */}
      <div className="card space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 size={16} className="text-zinc-500" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">Summary table</span>
        </div>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Part</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">What it is</th>
                <th className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-left font-semibold">Used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono">Wave object</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Sampled signal container</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Time-domain data storage</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-blue-600 dark:text-blue-400">ys</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">NumPy array (samples)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Actual signal measurements</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-purple-600 dark:text-purple-400">ts</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">NumPy array (times)</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">When each sample occurs</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium font-mono text-orange-600 dark:text-orange-400">framerate</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Samples per second</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Time spacing/frequency scale</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Signal → Wave</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><span className="font-mono">make_wave</span></td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Math → Real sample data</td>
              </tr>
              <tr>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1 font-medium">Wave → Spectrum</td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1"><span className="font-mono">make_spectrum</span></td>
                <td className="border border-zinc-200 dark:border-zinc-700 px-2 py-1">Time → Frequency domain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Image at the end */}
      <div className="mt-4 flex justify-center">
        <div
          className="overflow-hidden rounded-xl w-full"
          style={{
            border: "2px solid var(--border-strong)",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/waveobj.png" // replace with your actual file in /public
            alt="Visualization of wave object structure"
            width={1200}
            height={600}
            className="block h-auto w-full"
          />
        </div>
      </div>

    </div>
  );
}

