import React, { useState } from 'react';
import { Check, Plus, Search, Bell, FolderKanban, Zap, BarChart2, LayoutGrid, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import BrandLogo from './BrandLogo';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [projectSubFilter, setProjectSubFilter] = useState('All');

  const tabs = ['Overview', 'Projects', 'Automations', 'Insights'];

  const projects = [
    {
      name: 'Website Redesign',
      tasks: '12 tasks',
      progress: 80,
      color: 'bg-blue-500',
      iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
    },
    {
      name: 'Product Launch',
      tasks: '18 tasks',
      progress: 60,
      color: 'bg-amber-500',
      iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
    },
    {
      name: 'Marketing Campaign',
      tasks: '8 tasks',
      progress: 40,
      color: 'bg-rose-500',
      iconBg: 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400',
    },
    {
      name: 'Team Operations',
      tasks: '16 tasks',
      progress: 90,
      color: 'bg-emerald-500',
      iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
    },
  ];

  return (
    <section id="product" className="py-20 sm:py-28 bg-pulse-surface/50 dark:bg-[#0E1017]/40 border-y border-pulse-border/60 dark:border-[#252830]/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Product Preview Window */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white dark:bg-[#13151C] rounded-2xl border border-pulse-border dark:border-[#252830] shadow-dashboard dark:shadow-dashboard-dark overflow-hidden transition-all duration-300">
              
              {/* App Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-pulse-border dark:border-[#252830] bg-[#FAFAF9] dark:bg-[#161820]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22A06B]/70" />
                  </div>
                  <div className="h-3 w-px bg-pulse-border dark:bg-[#252830] mx-1" />
                  <BrandLogo size="sm" />
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-[#101217] border border-pulse-border dark:border-[#252830] rounded-lg px-2.5 py-1 text-xs text-pulse-secondary w-44">
                  <Search className="w-3 h-3 text-pulse-secondary" />
                  <span className="text-[11px] truncate">Search {activeTab.toLowerCase()}...</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-pulse-secondary" />
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center">
                    A
                  </div>
                </div>
              </div>

              {/* App Body */}
              <div className="grid grid-cols-12 min-h-[360px]">
                
                {/* Mini Sidebar */}
                <div className="hidden sm:flex sm:col-span-3 flex-col justify-between p-3 border-r border-pulse-border dark:border-[#252830] bg-[#FCFCFB] dark:bg-[#14161D]">
                  <div className="space-y-1">
                    {tabs.map((tab) => {
                      const icons = {
                        Overview: LayoutGrid,
                        Projects: FolderKanban,
                        Automations: Zap,
                        Insights: BarChart2,
                      };
                      const Icon = icons[tab];
                      const isSelected = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left ${
                            isSelected
                              ? 'bg-[#EEEDFC] text-[#635BFF] dark:bg-[#1E1C38] dark:text-[#9D97FF] font-semibold'
                              : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:bg-pulse-surface dark:hover:bg-[#1A1C23]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-[10px] text-pulse-secondary/70 p-2 border-t border-pulse-border dark:border-[#252830]">
                    PULSE v2.4 Live
                  </div>
                </div>

                {/* Main Dynamic Panel */}
                <div className="col-span-12 sm:col-span-9 p-5 bg-white dark:bg-[#12141A]">
                  
                  {/* TAB 1: OVERVIEW / DEFAULT */}
                  {activeTab === 'Overview' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-pulse-primary dark:text-white">Workspace Health</h4>
                          <p className="text-[11px] text-pulse-secondary">Weekly velocity & blocker summary</p>
                        </div>
                        <Badge variant="green" size="sm">Optimal Velocity</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                          <span className="text-[11px] text-pulse-secondary">Sprint Goal Completion</span>
                          <div className="text-xl font-bold text-pulse-primary dark:text-white mt-1">92%</div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-[#635BFF] h-full w-[92%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                          <span className="text-[11px] text-pulse-secondary">Blocked Items Resolved</span>
                          <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">14 of 15</div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[94%]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                        <span className="text-[11px] font-semibold text-pulse-primary dark:text-white mb-2 block">Active Workstreams</span>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium">Core API & DB Migration</span>
                            <span className="text-xs text-pulse-secondary">8 / 10 done</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium">Design System Refactor</span>
                            <span className="text-xs text-pulse-secondary">15 / 16 done</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PROJECTS */}
                  {activeTab === 'Projects' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-pulse-primary dark:text-white">Projects</h4>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-pulse-accent text-white rounded-lg hover:bg-pulse-accent-hover transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>New project</span>
                        </button>
                      </div>

                      {/* Filter subtabs */}
                      <div className="flex gap-2 text-xs border-b border-pulse-border dark:border-[#252830] pb-2">
                        {['All', 'Active', 'Completed', 'Archived'].map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setProjectSubFilter(f)}
                            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                              projectSubFilter === f
                                ? 'font-semibold text-pulse-primary dark:text-white border-b-2 border-pulse-accent'
                                : 'text-pulse-secondary hover:text-pulse-primary'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>

                      {/* Project items */}
                      <div className="space-y-2.5">
                        {projects.map((p) => (
                          <div
                            key={p.name}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/50 dark:border-[#252830] hover:border-pulse-accent/40 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${p.iconBg}`}>
                                <FolderKanban className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-pulse-primary dark:text-white">{p.name}</div>
                                <div className="text-[10px] text-pulse-secondary">{p.tasks}</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 w-36">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                <div className={`h-full ${p.color}`} style={{ width: `${p.progress}%` }} />
                              </div>
                              <span className="text-[10px] font-bold text-pulse-secondary dark:text-pulse-dark-secondary w-7 text-right">
                                {p.progress}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: AUTOMATIONS */}
                  {activeTab === 'Automations' && (
                    <div className="space-y-3.5 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-pulse-primary dark:text-white">Active Automations</h4>
                          <p className="text-[11px] text-pulse-secondary">3 trigger recipes currently active</p>
                        </div>
                        <Badge variant="purple" size="sm">3 Active</Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-pulse-primary dark:text-white">PR Merged → Auto-close Linear Ticket</span>
                            <span className="text-[10px] text-emerald-500 font-medium">Triggered 42x</span>
                          </div>
                          <p className="text-[10px] text-pulse-secondary">Syncs development progress automatically across repos</p>
                        </div>

                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-pulse-primary dark:text-white">Task Blocked &gt; 48h → Alert Team Lead</span>
                            <span className="text-[10px] text-emerald-500 font-medium">Triggered 5x</span>
                          </div>
                          <p className="text-[10px] text-pulse-secondary">Surfaces bottlenecks before milestones get delayed</p>
                        </div>

                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-pulse-primary dark:text-white">Weekly Summary → Post to #team-sync</span>
                            <span className="text-[10px] text-emerald-500 font-medium">Every Friday 5 PM</span>
                          </div>
                          <p className="text-[10px] text-pulse-secondary">Compiles cross-functional achievements into bullet points</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: INSIGHTS */}
                  {activeTab === 'Insights' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-pulse-primary dark:text-white">Team Operational Insights</h4>
                          <p className="text-[11px] text-pulse-secondary">Measured over the last 30 days</p>
                        </div>
                        <Badge variant="green" size="sm">+28% Efficiency</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                          <span className="text-[10px] text-pulse-secondary">Average Cycle Time</span>
                          <div className="text-lg font-bold text-pulse-primary dark:text-white mt-0.5">1.8 Days</div>
                          <span className="text-[10px] text-emerald-500 font-medium">-1.4 days faster</span>
                        </div>
                        <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                          <span className="text-[10px] text-pulse-secondary">Automated Hours Saved</span>
                          <div className="text-lg font-bold text-pulse-primary dark:text-white mt-0.5">148 Hours</div>
                          <span className="text-[10px] text-indigo-500 font-medium">Across 24 engineers</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#181A22] border border-pulse-border/60 dark:border-[#252830]">
                        <span className="text-[11px] font-semibold text-pulse-primary dark:text-white block mb-1">Focus Time Distribution</span>
                        <div className="flex gap-1 h-3 rounded-md overflow-hidden">
                          <div className="bg-[#635BFF] w-[65%]" title="Deep Work: 65%" />
                          <div className="bg-amber-400 w-[20%]" title="Collaboration: 20%" />
                          <div className="bg-rose-400 w-[15%]" title="Admin / Overhead: 15%" />
                        </div>
                        <div className="flex justify-between text-[10px] text-pulse-secondary mt-1.5">
                          <span>65% Deep Work</span>
                          <span>20% Collab</span>
                          <span>15% Admin</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Interactive Tab Buttons & Bullet Checklist */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Badge variant="eyebrow" className="mb-4">
              PRODUCT
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-3">
              Everything your team needs. <br />
              Nothing it doesn't.
            </h2>

            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary mb-8 leading-relaxed">
              A unified workspace to plan, collaborate, automate, and make progress without context-switching between a dozen disparate apps.
            </p>

            {/* Interactive Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Product feature preview tabs">
              {tabs.map((tab) => {
                const isSelected = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                      isSelected
                        ? 'bg-pulse-accent text-white shadow-sm scale-105'
                        : 'bg-white dark:bg-[#14161E] text-pulse-secondary dark:text-pulse-dark-secondary border border-pulse-border dark:border-[#252830] hover:text-pulse-primary dark:hover:text-white hover:bg-pulse-surface dark:hover:bg-[#1A1D27]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Benefit Checkmarks */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-pulse-accent" />
                </div>
                <span className="text-sm font-medium text-pulse-primary dark:text-white">
                  Get a real-time view of what's happening
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-pulse-accent" />
                </div>
                <span className="text-sm font-medium text-pulse-primary dark:text-white">
                  See key metrics and AI recommendations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-pulse-accent" />
                </div>
                <span className="text-sm font-medium text-pulse-primary dark:text-white">
                  Jump into your most important work
                </span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
