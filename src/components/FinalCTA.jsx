import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#EEEDFC] via-[#F3F2FF] to-[#ECEBFA] dark:from-[#1A1833] dark:via-[#1D1A3B] dark:to-[#16142C] p-8 sm:p-12 md:p-16 border border-[#E0DEF7] dark:border-[#2E2A55] shadow-sm overflow-hidden">
          
          {/* Subtle background wave graphic matching the reference image */}
          <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 flex items-center justify-center -z-0" aria-hidden="true">
            <svg viewBox="0 0 1200 240" fill="none" className="w-full h-full object-cover">
              <path
                d="M0 120C200 180 400 60 600 120C800 180 1000 60 1200 120"
                stroke="#635BFF"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <Badge variant="eyebrow" className="mb-3 bg-white/70 dark:bg-[#25224A] text-pulse-accent">
                GET STARTED
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight mb-2">
                Your team's next move starts here.
              </h2>
              <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
                Build momentum with PULSE. Free for small teams, effortless to scale.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button
                as={Link}
                to="/signup"
                size="lg"
                variant="primary"
                iconRight={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="group shadow-md"
              >
                Start for free
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
