import React from 'react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import SpotlightCard from './ui/SpotlightCard';
import { GitPullRequest, MessageSquare, CheckCircle2, ArrowRight, Zap, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      subtitle: 'Bring your existing tools and workflows together.',
      description: 'Plug in GitHub, Slack, Linear, and Figma in under two minutes. No migrations, no complex data mapping, and zero disruption to how your engineers already commit code.',
      visual: (
        <div className="bg-pulse-surface dark:bg-[#161822] rounded-xl p-5 border border-pulse-border dark:border-[#252830] space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-pulse-secondary">
            <span>Active Integrations</span>
            <span className="text-[#22A06B] flex items-center gap-1 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              4 Synced
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] group-hover:border-purple-500/40 transition-colors">
              <GitPullRequest className="w-4 h-4 text-purple-600" />
              <span className="font-medium">GitHub</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] group-hover:border-emerald-500/40 transition-colors">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Slack</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] group-hover:border-rose-500/40 transition-colors">
              <svg className="w-4 h-4 text-rose-500 fill-current" viewBox="0 0 24 24">
                <path d="M5.5 8.5C5.5 6.57 7.07 5 9 5h3v7H9a3.5 3.5 0 0 1-3.5-3.5zm0 7C5.5 13.57 7.07 12 9 12h3v7H9a3.5 3.5 0 0 1-3.5-3.5zm6.5-3.5h3c1.93 0 3.5-1.43 3.5-3.5S16.93 5 15 5h-3v7zm0 0h3c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h-3v-7z" />
              </svg>
              <span className="font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] group-hover:border-blue-500/40 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Linear</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Automate',
      subtitle: 'Let PULSE handle repetitive work.',
      description: 'PULSE analyzes team interactions, auto-assigns tickets, generates weekly digests, and unblocks engineers before sprint reviews without human intervention.',
      visual: (
        <div className="bg-pulse-surface dark:bg-[#161822] rounded-xl p-5 border border-pulse-border dark:border-[#252830] space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-pulse-secondary">Smart Trigger</span>
            <Badge variant="purple" size="sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pulse-accent animate-ping mr-1" />
              Active Flow
            </Badge>
          </div>
          <div className="p-3 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] text-xs space-y-2">
            <div className="flex items-center gap-2 text-pulse-secondary font-medium">
              <span>Code Review &gt; 24h</span>
              <ArrowRight className="w-3 h-3 text-[#635BFF]" />
              <span className="text-pulse-primary dark:text-white font-semibold">Ping Backup Reviewer</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium">
              <Zap className="w-3 h-3" />
              <span>Reduced PR wait time by 48%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Accelerate',
      subtitle: 'Spend your time on decisions that actually matter.',
      description: 'Free your team from hours of status meetings and spreadsheet synchronization. Deliver milestones on schedule with predictable, confident team momentum.',
      visual: (
        <div className="bg-pulse-surface dark:bg-[#161822] rounded-xl p-5 border border-pulse-border dark:border-[#252830] space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-pulse-secondary">
            <span>Sprint Velocity</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              +38% Speed
            </span>
          </div>
          <div className="p-3 bg-white dark:bg-[#101217] rounded-lg border border-pulse-border/60 dark:border-[#252830] space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-pulse-secondary">Time on High-Impact Tasks</span>
              <span className="font-bold text-pulse-primary dark:text-white">82%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pulse-accent to-purple-500 h-full w-[82%] rounded-full transition-all duration-1000" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Badge variant="eyebrow" className="mb-4">
            HOW IT WORKS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-4">
            From fragmented tasks to effortless momentum in 3 steps.
          </h2>
          <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
            Get your entire organization running on a unified operational rhythm without ripping and replacing your current toolchain.
          </p>
        </div>

        {/* 3 Steps Grid with Connecting Signal Circuit Line */}
        <div className="relative">
          {/* Animated Glowing Connection Circuit Line */}
          <div 
            className="hidden md:block absolute top-12 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-transparent via-pulse-accent/40 to-transparent pointer-events-none z-0" 
            aria-hidden="true"
          >
            <div className="absolute top-1/2 -translate-y-1/2 w-20 h-[3px] bg-pulse-accent blur-[2px] rounded-full animate-marquee" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step) => (
              <SpotlightCard
                key={step.number}
                className="p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-pulse-accent tracking-tight group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <Badge variant="neutral" size="sm">Phase {step.number}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-pulse-primary dark:text-white mb-2 group-hover:text-pulse-accent transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-pulse-accent mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Visual preview */}
                <div className="mt-auto">
                  {step.visual}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
