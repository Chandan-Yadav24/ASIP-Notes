"use client";
import { useState, useEffect } from "react";
import { getAllSections } from "../data/syllabus";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SyllabusSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sections = getAllSections();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, sections.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const currentSection = sections[currentIndex];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Course Topics
        </h2>
        <span className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
          {currentIndex + 1} of {sections.length}
        </span>
      </div>

      <div className="card relative overflow-hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="btn btn-secondary p-2"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex-1 px-6 text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="badge badge-primary text-xs">
                {currentSection.moduleCode}
              </span>
              <span className="text-caption" style={{ color: 'var(--text-muted)' }}>
                {currentSection.unitNumber}
              </span>
            </div>
            
            <h3 className="text-h4" style={{ color: 'var(--text-primary)' }}>
              {currentSection.number}. {currentSection.title}
            </h3>
            
            <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>
              {currentSection.topicCount} topics • {currentSection.unitTitle}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="btn btn-secondary p-2"
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-4000 ease-linear"
             style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }} />
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-500 w-6' 
                : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}