// app/modules/module-2/page.jsx
import UnitList from "../../components/UnitList";

export default function Module2Page() {
  const units = [
    {
      label: "Unit 3",
      title: "Structural and Morphological Operations",
      brief:
        "Edge detection methods, image pyramids, and binary/gray-scale morphological operations.",
      href: "/modules/module-2/unit-3",
    },
    {
      label: "Unit 4",
      title: "Advanced Image Processing Operations",
      brief:
        "Feature extraction and descriptors, principal components, and a range of image segmentation approaches.",
      href: "/modules/module-2/unit-4",
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <span className="badge badge-primary">Module II</span>
        <h1 className="text-h1" style={{ color: 'var(--text-primary)' }}>
          Structural, Morphological & Advanced Operations
        </h1>
        <p className="text-body-lg max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          Structural analysis of images, morphological transformations, and
          advanced methods for feature extraction and segmentation.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-h2" style={{ color: 'var(--text-primary)' }}>Units</h2>
        <UnitList units={units} />
      </section>
    </div>
  );
}