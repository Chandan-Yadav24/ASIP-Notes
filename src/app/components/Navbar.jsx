'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Cpu,
  BookOpen,
  FlaskConical,
  ArrowRight,
  ChevronDown,
  Layers,
  Hash
} from 'lucide-react';
import { getCompactSyllabus } from "../data/syllabus";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const syllabus = getCompactSyllabus();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 shadow-lg shadow-indigo-500/5'
            : 'bg-transparent border-b border-transparent'
          }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 relative z-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
              <Cpu size={18} />
            </div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              ASIP<span className="text-zinc-500 font-medium">Lab</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-zinc-800/50">

            {/* Home Link */}
            <Link
              href="/"
              className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              {pathname === '/' && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${pathname === '/' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
                Home
              </span>
            </Link>

            {/* Modules Link with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('modules')}
            >
              <Link
                href="/modules"
                className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1"
              >
                {pathname.startsWith('/modules') && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-zinc-800 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${pathname.startsWith('/modules') ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
                  <BookOpen size={14} />
                  Modules
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'modules' ? 'rotate-180' : ''}`} />
                </span>
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'modules' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-[600px] -translate-x-1/4 p-2 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-indigo-900/40 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {syllabus.map((module, idx) => (
                        <div key={module.id} className="p-4 rounded-xl hover:bg-zinc-900/50 transition-colors group/module">
                          <Link href={`/modules/${module.id}`} className="block mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${idx === 0 ? 'bg-indigo-500/10 text-indigo-400' : 'bg-fuchsia-500/10 text-fuchsia-400'}`}>
                                {module.code}
                              </span>
                            </div>
                            <h4 className="font-bold text-zinc-200 leading-tight group-hover/module:text-white transition-colors">
                              {module.title}
                            </h4>
                          </Link>

                          <div className="space-y-1">
                            {module.units.map((unit) => (
                              <Link
                                key={unit.id}
                                href={`/modules/${module.id}/${unit.id}`}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800 text-xs text-zinc-500 hover:text-zinc-300 transition-all"
                              >
                                <Layers size={12} className={idx === 0 ? "text-indigo-500/50" : "text-fuchsia-500/50"} />
                                <span className="truncate flex-1">{unit.number}: {unit.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://asip-lab.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex group items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40"
            >
              <FlaskConical size={14} />
              Practicals
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-10">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-zinc-300 hover:text-indigo-400 transition-colors border-b border-zinc-900 pb-4"
              >
                Home
              </Link>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Modules</span>
                {syllabus.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <Link
                      href={`/modules/${module.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block font-bold text-zinc-200"
                    >
                      {module.code}: {module.title}
                    </Link>
                    <div className="pl-4 border-l border-zinc-800 space-y-2">
                      {module.units.map(unit => (
                        <Link
                          key={unit.id}
                          href={`/modules/${module.id}/${unit.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-zinc-500 hover:text-white"
                        >
                          {unit.number}: {unit.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://asip-lab.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 text-white font-bold uppercase tracking-widest shadow-lg shadow-indigo-900/20"
              >
                <FlaskConical size={18} />
                Launch Practicals
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}