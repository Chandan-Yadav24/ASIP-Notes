// app/modules/page.jsx
import ModuleCard from "../components/ModuleCard";

export default function ModulesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-h1" style={{ color: 'var(--text-primary)' }}>Modules</h1>
        <p className="text-body-lg" style={{ color: 'var(--text-secondary)' }}>
          Browse all modules and access unit-wise notes.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <ModuleCard
          code="Module I"
          title="Fundamentals & Image Processing Basics"
          description="Digital signals, noise, frequency-domain operations, basic image processing and pixel transformations."
          href="/modules/module-1"
        />
        <ModuleCard
          code="Module II"
          title="Structural, Morphological & Advanced Operations"
          description="Structural and morphological image processing, feature extraction, and segmentation algorithms."
          href="/modules/module-2"
        />
      </div>
    </div>
  );
}