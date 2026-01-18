// components/UnitList.jsx
import Link from "next/link";

export default function UnitList({ units }) {
  return (
    <div className="space-y-4">
      {units.map((unit) => (
        <div key={unit.href} className="card group">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1 space-y-2">
              <span className="text-caption" style={{ color: 'var(--text-muted)' }}>
                {unit.label}
              </span>
              <h3 className="text-h4" style={{ color: 'var(--text-primary)' }}>
                {unit.title}
              </h3>
              <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>
                {unit.brief}
              </p>
            </div>
            <Link
              href={unit.href}
              className="btn btn-primary text-body-sm sm:ml-4 sm:flex-shrink-0"
            >
              View Notes →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}