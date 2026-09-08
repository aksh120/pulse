import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section 
      className="py-20 sm:py-28 bg-pulse-surface/40 dark:bg-[#0E1015]/40 border-y border-pulse-border/60 dark:border-pulse-dark-border/60"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-label="Customer testimonials"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Badge variant="eyebrow" className="mb-4">
              TESTIMONIALS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight">
              Teams love working with PULSE.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#14161F] flex items-center justify-center text-pulse-primary dark:text-white hover:bg-pulse-surface dark:hover:bg-[#1C1F2B] hover:border-pulse-accent transition-colors shadow-subtle"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#14161F] flex items-center justify-center text-pulse-primary dark:text-white hover:bg-pulse-surface dark:hover:bg-[#1C1F2B] hover:border-pulse-accent transition-colors shadow-subtle"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (startIndex + offset) % testimonials.length;
            const item = testimonials[index];
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#13151C] border border-pulse-border dark:border-[#232630] shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              >
                <div>
                  <p className="text-sm sm:text-base text-pulse-primary dark:text-gray-200 font-normal leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-pulse-border/60 dark:border-[#252830]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white dark:border-[#252830] ring-1 ring-pulse-border dark:ring-[#333742] shadow-sm flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm font-bold text-pulse-primary dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                      {item.role}, <span className="font-semibold text-pulse-primary dark:text-white">{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                startIndex === idx ? 'w-6 bg-pulse-accent' : 'w-2 bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
