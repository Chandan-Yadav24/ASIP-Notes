// app/modules/module-1/page.jsx
import UnitList from "../../components/UnitList";

export default function Module1Page() {
  const units = [
    {
      label: "Unit 1",
      title: "Fundamentals of Digital Signals Processing",
      brief:
        "Periodic signals, spectral decomposition, noise types, autocorrelation, and frequency-domain operations including DFT and FFT.",
      href: "/modules/module-1/unit-1",
    },
    {
      label: "Unit 2",
      title: "Image Processing Fundamentals and Pixel Transformation",
      brief:
        "Image processing pipeline, tools and libraries, intensity and histogram transformations, smoothing and sharpening, image derivatives.",
      href: "/modules/module-1/unit-2",
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <span className="badge badge-primary">Module I</span>
        <h1 className="text-h1" style={{ color: 'var(--text-primary)' }}>
          Fundamentals & Image Processing Basics
        </h1>
        <p className="text-body-lg max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          Foundational concepts of digital signals and introduction to image
          processing and pixel-level operations.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-h2" style={{ color: 'var(--text-primary)' }}>Units</h2>
        <UnitList units={units} />
      </section>
    </div>
  );
}