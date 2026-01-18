// components/Container.jsx
export default function Container({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-10 sm:py-10">
        {children}
      </div>
    </div>
  );
}