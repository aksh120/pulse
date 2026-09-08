import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, ArrowRight, Layers, Sparkles, Zap, Code2, Users, Rocket, ShieldCheck } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import SpotlightCard from './ui/SpotlightCard';
import { solutionsData } from '../data/solutions';

export default function Solutions() {
  const [selectedRole, setSelectedRole] = useState('Product');
  const location = useLocation();

  useEffect(() => {
    const handleHashOrLocation = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('solutions-engineering')) {
        setSelectedRole('Engineering');
      } else if (hash.includes('solutions-marketing')) {
        setSelectedRole('Marketing');
      } else if (hash.includes('solutions-operations')) {
        setSelectedRole('Operations');
      } else if (hash.includes('solutions-product')) {
        setSelectedRole('Product');
      }
    };

    handleHashOrLocation();
    window.addEventListener('hashchange', handleHashOrLocation);
    return () => window.removeEventListener('hashchange', handleHashOrLocation);
  }, [location]);

  const roles = ['Product', 'Marketing', 'Operations', 'Engineering'];
  const currentData = solutionsData[selectedRole];

  const roleIcons = {
    Product: Layers,
    Marketing: Rocket,
    Operations: ShieldCheck,
    Engineering: Code2,
  };

  const IconComponent = roleIcons[selectedRole];

  return (
    <section id="solutions" className="py-20 sm:py-28">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="eyebrow" className="mb-4">
            SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-4">
            Built for the way different teams work.
          </h2>
          <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
            Tailored views, automated signals, and specialized workflows designed for cross-functional synergy.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-pulse-surface dark:bg-[#151720] border border-pulse-border dark:border-[#252830] overflow-x-auto max-w-full">
            {roles.map((role) => {
              const RoleIcon = roleIcons[role];
              const isSelected = selectedRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? 'bg-white dark:bg-[#20232E] text-pulse-primary dark:text-white shadow-sm scale-105'
                      : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary dark:hover:text-white'
                  }`}
                >
                  <RoleIcon className={`w-4 h-4 ${isSelected ? 'text-pulse-accent' : ''}`} />
                  <span>{role}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Box */}
        <SpotlightCard className="p-6 sm:p-10 rounded-3xl shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Department Details & Bullets */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center text-pulse-accent">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-pulse-accent">
                  PULSE for {selectedRole} Teams
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-snug">
                {currentData.tagline}
              </h3>

              <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                {currentData.description}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 py-2 border-y border-pulse-border/70 dark:border-[#252830]">
                {currentData.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-black text-pulse-primary dark:text-white">
                      {m.val}
                    </div>
                    <div className="text-[11px] text-pulse-secondary font-medium mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {currentData.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-xs sm:text-sm text-pulse-primary dark:text-gray-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Workflow Card */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-pulse-surface dark:bg-[#181A24] border border-pulse-border dark:border-[#252830] shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-pulse-border/70 dark:border-[#252830]">
                  <div>
                    <h4 className="text-sm font-bold text-pulse-primary dark:text-white">
                      {currentData.preview.title}
                    </h4>
                    <span className="text-[11px] text-pulse-secondary">Real-time status sync</span>
                  </div>
                  <Badge variant="green" size="sm">{currentData.preview.status}</Badge>
                </div>

                <div className="space-y-3">
                  {currentData.preview.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-white dark:bg-[#11131A] border border-pulse-border/60 dark:border-[#252830] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-pulse-primary dark:text-white">{item.name}</span>
                        <span className="text-[10px] font-medium text-pulse-secondary">Lead: {item.lead}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-pulse-secondary">
                        <span>Status: <strong className="text-pulse-accent">{item.state}</strong></span>
                        <span>{item.progress}%</span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-pulse-accent h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-pulse-border/60 dark:border-[#252830] flex items-center justify-between text-xs text-pulse-secondary">
                  <span>Autonomous trigger: Active</span>
                  <span className="text-pulse-accent font-semibold flex items-center gap-1">
                    Connected to {selectedRole} Hub <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Container>
    </section>
  );
}
