import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, Terminal, Sparkles, Zap, ArrowRight, RefreshCw, Cpu, Layers, GitBranch, MessageSquare, ShieldCheck } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function InteractivePlayground() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(3); // 0 to 3
  const [customInput, setCustomInput] = useState('');

  const workflows = [
    {
      id: 'blocker-sweep',
      title: 'Autonomous Blocker Sweep',
      command: 'pulse run --triage-sprint-milestones --auto-unblock',
      trigger: 'GitHub PR #402 merged by Rohan Verma',
      steps: [
        { title: 'Webhook Ingested', detail: 'GitHub event: commit 8f2a1b merged into main branch (4ms)' },
        { title: 'Graph Dependency Scan', detail: 'Identified 3 blocked frontend tasks in Linear sprint board (18ms)' },
        { title: 'Auto-Reassignment & Unblock', detail: 'Elevated priority, reassigned code review to Priya S., marked unblocked (42ms)' },
        { title: 'Synchronized Broadcast', detail: 'Dispatched automated digest to #sprint-velocity on Slack (78ms)' },
      ],
      metrics: { latency: '82ms', tasksResolved: '3', timeSaved: '4.5 hrs' },
    },
    {
      id: 'deploy-sync',
      title: 'Release & Cross-Team Sync',
      command: 'pulse deploy --env=production --region=ap-south-1 --notify-all',
      trigger: 'Production release tag v2.4.0 published on AWS Mumbai',
      steps: [
        { title: 'VCS Tag Verified', detail: 'Confirmed SOC2 signed release artifact in ap-south-1 registry (12ms)' },
        { title: 'Release Notes Synthesized', detail: 'AI generated changelog from 18 merged pull requests (34ms)' },
        { title: 'Customer Success Alerted', detail: 'Pushed release summary to Neha Singhal & enterprise ops dashboard (58ms)' },
        { title: 'Milestones Closed', detail: 'Auto-closed Q3 roadmap epic across Jira & Linear boards (89ms)' },
      ],
      metrics: { latency: '89ms', tasksResolved: '18', timeSaved: '6.0 hrs' },
    },
    {
      id: 'standup-digest',
      title: 'Daily AI Team Digest',
      command: 'pulse digest --team=engineering --generate-briefing',
      trigger: 'Scheduled 9:00 AM IST daily cross-functional standup cycle',
      steps: [
        { title: 'Activity Streams Synthesized', detail: 'Aggregated 142 commits, 28 comments, and 12 Figma revisions (22ms)' },
        { title: 'Top 3 Priorities Isolated', detail: 'Extracted highest-leverage focus items for Aarav, Priya, and squad (46ms)' },
        { title: 'Friction Points Flagged', detail: 'Detected bottleneck in payment gateway test sandbox (67ms)' },
        { title: 'Delivered to Workspace', detail: 'Broadcast interactive briefing with 1-click action buttons (95ms)' },
      ],
      metrics: { latency: '95ms', tasksResolved: '28', timeSaved: '3.5 hrs' },
    },
  ];

  const currentWorkflow = workflows[activePresetIndex];

  const triggerExecution = (index = activePresetIndex) => {
    setActivePresetIndex(index);
    setIsRunning(true);
    setExecutionStep(0);

    const stepInterval = setInterval(() => {
      setExecutionStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-[#0B0C0E] border-t border-pulse-border/60 dark:border-[#252830]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pulse-accent/10 dark:bg-pulse-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="eyebrow" className="mb-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              LIVE OPERATIONS SIMULATOR
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-4">
            See momentum happen in milliseconds.
          </h2>
          <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
            Select an operational trigger below to simulate how PULSE synthesizes events, resolves blockers, and coordinates teams in real time.
          </p>
        </div>

        {/* Preset Workflow Selectors */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
          {workflows.map((wf, idx) => {
            const isSelected = activePresetIndex === idx;
            return (
              <button
                key={wf.id}
                type="button"
                onClick={() => triggerExecution(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-pulse-primary text-white dark:bg-white dark:text-pulse-primary shadow-md scale-105 ring-2 ring-pulse-accent/30'
                    : 'bg-pulse-surface dark:bg-[#15171C] text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary dark:hover:text-white border border-pulse-border dark:border-[#252830]'
                }`}
              >
                <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-pulse-accent'}`} />
                <span>{wf.title}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal / Live Console Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0F1117] text-gray-200 border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#161822] border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs text-gray-400 font-medium">pulse-autonomous-engine — node-bengaluru-01</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {isRunning ? 'EXECUTING' : 'ONLINE'}
              </span>
              <button
                type="button"
                onClick={() => triggerExecution(activePresetIndex)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                title="Rerun simulation"
                aria-label="Rerun simulation"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 space-y-5">
            {/* Command Trigger line */}
            <div className="space-y-1.5 pb-4 border-b border-gray-800/80">
              <div className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold text-gray-300">$ {currentWorkflow.command}</span>
              </div>
              <div className="text-gray-400 pl-6 text-[11px] sm:text-xs">
                Trigger: <span className="text-indigo-300">{currentWorkflow.trigger}</span>
              </div>
            </div>

            {/* Execution Steps */}
            <div className="space-y-3 pt-1">
              {currentWorkflow.steps.map((step, sIdx) => {
                const isPassed = executionStep >= sIdx;
                const isCurrent = executionStep === sIdx && isRunning;
                return (
                  <div
                    key={step.title}
                    className={`flex items-start gap-3 transition-all duration-300 ${
                      isPassed ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isCurrent ? (
                        <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
                      ) : isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-gray-700" />
                      )}
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="font-semibold text-gray-200 flex items-center justify-between">
                        <span>{sIdx + 1}. {step.title}</span>
                        {isPassed && <span className="text-[10px] text-emerald-400">SUCCESS</span>}
                      </div>
                      <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Telemetry Metrics Bar */}
            <div className="mt-6 pt-4 border-t border-gray-800/80 grid grid-cols-3 gap-3 bg-[#141722] p-3 rounded-xl">
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-wider text-gray-400">Total Latency</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">{currentWorkflow.metrics.latency}</div>
              </div>
              <div className="text-center border-x border-gray-800">
                <div className="text-[10px] uppercase tracking-wider text-gray-400">Tasks Auto-Updated</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">{currentWorkflow.metrics.tasksResolved}</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-wider text-gray-400">Bandwidth Saved</div>
                <div className="text-sm sm:text-base font-bold text-pulse-accent mt-0.5">{currentWorkflow.metrics.timeSaved}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
