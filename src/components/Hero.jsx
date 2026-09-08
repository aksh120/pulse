import React, { useState } from 'react';
import { ArrowRight, Play, Check, Search, Bell, CheckCircle2, AlertCircle, Clock, Users, ChevronRight, LayoutGrid, FolderKanban, ListTodo, Zap, BarChart2, Briefcase, Settings } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import Badge from './ui/Badge';
import DemoModal from './DemoModal';
import BrandLogo from './BrandLogo';

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Overview');

  const navItems = [
    { name: 'Overview', icon: LayoutGrid },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Tasks', icon: ListTodo },
    { name: 'Automations', icon: Zap },
    { name: 'Insights', icon: BarChart2 },
  ];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle background glow effect (refined, non-obtrusive) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-tr from-purple-100/50 via-indigo-50/30 to-transparent dark:from-[#1D1B36]/20 dark:via-transparent dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <Badge variant="eyebrow" className="mb-4">
              YOUR TEAM, IN SYNC
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-pulse-primary dark:text-white leading-[1.08] mb-5">
              Turn busywork <br className="hidden sm:inline" />
              into momentum.
            </h1>

            <p className="text-base sm:text-lg text-pulse-secondary dark:text-pulse-dark-secondary max-w-lg mb-8 leading-relaxed">
              PULSE connects your projects, people, and processes into one intelligent workspace.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <Button
                href="#pricing"
                size="lg"
                variant="primary"
                iconRight={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="group"
              >
                Start for free
              </Button>
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={() => setDemoOpen(true)}
                iconLeft={
                  <span className="w-5 h-5 rounded-full bg-pulse-surface dark:bg-[#252834] flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                }
              >
                Watch demo
              </Button>
            </div>

            {/* Trust checklist */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-pulse-secondary dark:text-pulse-dark-secondary font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-pulse-accent" />
                Free forever
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-pulse-accent" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-pulse-accent" />
                Set up in minutes
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Product UI Mockup */}
          <div className="lg:col-span-7 w-full">
            <div className="relative mx-auto bg-white dark:bg-[#13151B] rounded-2xl border border-pulse-border dark:border-[#252830] shadow-dashboard dark:shadow-dashboard-dark transition-all duration-300 overflow-hidden">
              
              {/* App Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-pulse-border dark:border-[#252830] bg-[#FAFAF9] dark:bg-[#161820]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22A06B]/70" />
                  </div>
                  <div className="h-3 w-px bg-pulse-border dark:bg-[#252830] mx-1" />
                  <BrandLogo size="sm" />
                </div>

                {/* Search mockup */}
                <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-[#101217] border border-pulse-border dark:border-[#252830] rounded-lg px-2.5 py-1 text-xs text-pulse-secondary dark:text-pulse-dark-secondary w-56">
                  <Search className="w-3 h-3 text-pulse-secondary" />
                  <span className="flex-1 text-[11px]">Search anything...</span>
                  <kbd className="px-1 bg-pulse-surface dark:bg-[#1E2028] border border-pulse-border dark:border-[#252830] rounded text-[10px]">⌘K</kbd>
                </div>

                {/* Top right profile / actions */}
                <div className="flex items-center gap-2">
                  <button type="button" className="p-1 rounded-md text-pulse-secondary hover:text-pulse-primary" aria-label="Notifications">
                    <Bell className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-1.5 pl-1.5 border-l border-pulse-border dark:border-[#252830]">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                      A
                    </div>
                    <span className="text-xs font-semibold text-pulse-primary dark:text-white hidden sm:inline">Alex</span>
                  </div>
                </div>
              </div>

              {/* App Body Grid */}
              <div className="grid grid-cols-12 min-h-[380px]">
                
                {/* Left Mini Sidebar */}
                <div className="hidden md:flex md:col-span-3 flex-col justify-between p-3 border-r border-pulse-border dark:border-[#252830] bg-[#FCFCFB] dark:bg-[#14161D]">
                  <div className="space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeNav === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setActiveNav(item.name)}
                          className={`flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left ${
                            isActive
                              ? 'bg-[#EEEDFC] text-[#635BFF] dark:bg-[#1E1C38] dark:text-[#9D97FF] font-semibold'
                              : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:bg-pulse-surface dark:hover:bg-[#1A1C23]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-pulse-border dark:border-[#252830] space-y-1">
                    <button type="button" className="flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-pulse-secondary dark:text-pulse-dark-secondary hover:bg-pulse-surface dark:hover:bg-[#1A1C23]">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Workspace</span>
                    </button>
                    <button type="button" className="flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-pulse-secondary dark:text-pulse-dark-secondary hover:bg-pulse-surface dark:hover:bg-[#1A1C23]">
                      <Settings className="w-3.5 h-3.5" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-12 md:col-span-9 p-4 sm:p-5 bg-white dark:bg-[#12141A]">
                  {/* Greeting */}
                  <div className="mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white leading-tight">
                      Good morning, Alex
                    </h2>
                    <p className="text-[11px] sm:text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                      Here's what needs your attention today.
                    </p>
                  </div>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                    {/* Metric 1 */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white">84%</span>
                        <span className="text-[10px] font-semibold text-[#22A06B] bg-[#EBF9F1] dark:bg-[#142B1F] px-1.5 py-0.5 rounded-full">+12%</span>
                      </div>
                      <div className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary mb-1.5 truncate">Project progress</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#22A06B] h-full w-[84%] rounded-full" />
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                      <div className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white mb-1">18</div>
                      <div className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary mb-1.5 truncate">Tasks completed</div>
                      <div className="flex items-end gap-0.5 h-2">
                        <div className="w-1.5 bg-[#635BFF] h-1.5 rounded-sm" />
                        <div className="w-1.5 bg-[#635BFF] h-2 rounded-sm" />
                        <div className="w-1.5 bg-[#635BFF] h-1 rounded-sm" />
                        <div className="w-1.5 bg-[#635BFF] h-2 rounded-sm" />
                      </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                      <div className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white mb-1">4</div>
                      <div className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary mb-1.5 truncate">Tasks in progress</div>
                      <div className="flex items-end gap-0.5 h-2">
                        <div className="w-1.5 bg-indigo-400 h-1 rounded-sm" />
                        <div className="w-1.5 bg-indigo-400 h-1.5 rounded-sm" />
                        <div className="w-1.5 bg-indigo-400 h-2 rounded-sm" />
                      </div>
                    </div>

                    {/* Metric 4 */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                      <div className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white mb-1">2</div>
                      <div className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary mb-1.5 truncate">Blocked</div>
                      <div className="flex items-end gap-0.5 h-2">
                        <div className="w-1.5 bg-[#E5484D] h-2 rounded-sm" />
                        <div className="w-1.5 bg-[#E5484D] h-1.5 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Two-Column Bottom Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    {/* Left: AI Priorities */}
                    <div className="sm:col-span-7 p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-pulse-primary dark:text-white">AI priorities</span>
                          <span className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary">(3 items)</span>
                        </div>
                        <span className="text-[10px] font-medium text-pulse-accent cursor-pointer hover:underline">View all</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#13151C] border border-pulse-border/50 dark:border-[#252830]/70 text-[11px]">
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] flex-shrink-0" />
                            <span className="font-medium text-pulse-primary dark:text-white truncate">Review Q3 campaign performance</span>
                          </div>
                          <Badge variant="red" size="sm" className="text-[9px] py-0 px-1.5">High</Badge>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#13151C] border border-pulse-border/50 dark:border-[#252830]/70 text-[11px]">
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] flex-shrink-0" />
                            <span className="font-medium text-pulse-primary dark:text-white truncate">Approve landing page changes</span>
                          </div>
                          <Badge variant="amber" size="sm" className="text-[9px] py-0 px-1.5">Medium</Badge>
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#13151C] border border-pulse-border/50 dark:border-[#252830]/70 text-[11px]">
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] flex-shrink-0" />
                            <span className="font-medium text-pulse-primary dark:text-white truncate">Follow up with Design</span>
                          </div>
                          <Badge variant="amber" size="sm" className="text-[9px] py-0 px-1.5">Medium</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Right: Team Activity & Upcoming */}
                    <div className="sm:col-span-5 flex flex-col gap-2.5">
                      {/* Team Activity */}
                      <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-pulse-primary dark:text-white">Team activity</span>
                          <span className="text-[9px] font-semibold text-[#22A06B] bg-[#EBF9F1] dark:bg-[#142B1F] px-1.5 py-0.5 rounded-full">● ALL IN SYNC</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center">SC</div>
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">MR</div>
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white text-[9px] font-bold flex items-center justify-center">EP</div>
                          <div className="w-5 h-5 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center">DK</div>
                          <span className="text-[10px] text-pulse-secondary dark:text-pulse-dark-secondary pl-1">+3 active</span>
                        </div>
                      </div>

                      {/* Upcoming Schedule */}
                      <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/70 dark:border-[#252830]">
                        <span className="text-[11px] font-bold text-pulse-primary dark:text-white block mb-1.5">Upcoming</span>
                        <div className="space-y-1.5 text-[10px]">
                          <div className="flex items-center justify-between text-pulse-secondary dark:text-pulse-dark-secondary">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-pulse-accent" />
                              <span className="font-medium text-pulse-primary dark:text-white">Team sync</span>
                            </span>
                            <span>10:00 AM</span>
                          </div>
                          <div className="flex items-center justify-between text-pulse-secondary dark:text-pulse-dark-secondary">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-pulse-accent" />
                              <span className="font-medium text-pulse-primary dark:text-white">Product review</span>
                            </span>
                            <span>2:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Demo Walkthrough Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
