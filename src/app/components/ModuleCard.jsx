// components/ModuleCard.jsx
import Link from "next/link";

export default function ModuleCard({ code, title, description, href }) {
  return (
    <div className="card group">
      <div className="flex flex-col gap-3">
        <div>
          {code && (
            <span className="badge badge-primary mb-2">{code}</span>
          )}
          <h3 className="text-h4" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </div>
        <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        {href && (
          <Link href={href} className="link text-body-sm group-hover:underline">
            Open module →
          </Link>
        )}
      </div>
    </div>
  );
}