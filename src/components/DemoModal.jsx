import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './ui/Modal';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { Play, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Layers, Zap, BarChart3 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: 'Unified Workspace Overview',
      subtitle: 'Connect your entire team without the tool chaos.',
      badge: 'Step 1 of 4: Workspace',
      icon: <Layers className="w-5 h-5 text-[#635BFF]" />,
      description: 'PULSE aggregates tasks from Slack, GitHub, Figma, and Jira into one intelligent stream, giving leaders a crystal-clear single pane of glass.',
      preview: (
        <div className="bg-[#F7F7F5] dark:bg-[#1A1C24] rounded-xl p-5 border border-pulse-border dark:border-pulse-dark-border">
          <div className="flex items-center justify-between pb-3 border-b border-pulse-border dark:border-pulse-dark-border">
            <span className="font-semibold text-sm">Sprint 42 Live Stream</span>
            <Badge variant="green" size="sm">Live Connected</Badge>
          </div>
          <div className="space-y-3 mt-3">
            <div className="flex items-center justify-between text-xs bg-white dark:bg-[#12141A] p-2.5 rounded-lg border border-pulse-border/60 dark:border-pulse-dark-border/60">
              <span className="font-medium">GitHub: 14 Pull Requests merged</span>
              <span className="text-[#22A06B]">Synced 2m ago</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-white dark:bg-[#12141A] p-2.5 rounded-lg border border-pulse-border/60 dark:border-pulse-dark-border/60">
              <span className="font-medium">Figma: Design system tokens updated</span>
              <span className="text-[#22A06B]">Synced 6m ago</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'AI Work Prioritization',
      subtitle: 'Know what deserves attention before you open your inbox.',
      badge: 'Step 2 of 4: Intelligence',
      icon: <Sparkles className="w-5 h-5 text-[#635BFF]" />,
      description: 'Our proprietary algorithm evaluates project dependencies, team velocity, and approaching deadlines to dynamically surface the top 3 highest-impact tasks.',
      preview: (
        <div className="bg-[#F7F7F5] dark:bg-[#1A1C24] rounded-xl p-5 border border-pulse-border dark:border-pulse-dark-border space-y-2.5">
          <div className="flex items-center justify-between text-xs p-3 bg-white dark:bg-[#12141A] rounded-lg border-l-4 border-red-500 shadow-subtle">
            <div>
              <div className="font-semibold">Review Q3 campaign performance</div>
              <div className="text-pulse-secondary dark:text-pulse-dark-secondary text-[11px]">Unblocks Marketing & Growth leads</div>
            </div>
            <Badge variant="red" size="sm">Urgent</Badge>
          </div>
          <div className="flex items-center justify-between text-xs p-3 bg-white dark:bg-[#12141A] rounded-lg border-l-4 border-amber-500 shadow-subtle">
            <div>
              <div className="font-semibold">Approve landing page copy</div>
              <div className="text-pulse-secondary dark:text-pulse-dark-secondary text-[11px]">Scheduled for deployment today</div>
            </div>
            <Badge variant="amber" size="sm">Medium</Badge>
          </div>
        </div>
      ),
    },
    {
      title: 'Zero-Code Smart Automations',
      subtitle: 'Eliminate 42% of repetitive operational tasks.',
      badge: 'Step 3 of 4: Automations',
      icon: <Zap className="w-5 h-5 text-[#635BFF]" />,
      description: 'Trigger autonomous actions based on real events: automatically compile status summaries, re-assign blocked tasks, and sync customer updates.',
      preview: (
        <div className="bg-[#F7F7F5] dark:bg-[#1A1C24] rounded-xl p-4 border border-pulse-border dark:border-pulse-dark-border">
          <div className="flex items-center gap-2 text-xs font-semibold text-pulse-secondary mb-3">
            <span>IF: Task status changes to Blocked</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-[#635BFF]">THEN: Ping Engineering Lead & Reschedule</span>
          </div>
          <div className="p-3 bg-white dark:bg-[#12141A] rounded-lg text-xs space-y-1">
            <div className="flex items-center text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              Automated action executed 84 times this week
            </div>
            <p className="text-pulse-secondary dark:text-pulse-dark-secondary text-[11px]">Saved an estimated 6.4 engineering hours</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Live Team Velocity Insights',
      subtitle: 'Actionable data to optimize sprint cycles and prevent burnout.',
      badge: 'Step 4 of 4: Insights',
      icon: <BarChart3 className="w-5 h-5 text-[#635BFF]" />,
      description: 'Track workload balance, cycle times, and throughput without interrupting engineers with status meetings.',
      preview: (
        <div className="bg-[#F7F7F5] dark:bg-[#1A1C24] rounded-xl p-5 border border-pulse-border dark:border-pulse-dark-border">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white dark:bg-[#12141A] p-3 rounded-lg">
              <div className="text-[11px] text-pulse-secondary">Cycle Time</div>
              <div className="text-lg font-bold text-pulse-primary dark:text-white">1.8 days <span className="text-xs font-normal text-emerald-500">-24%</span></div>
            </div>
            <div className="bg-white dark:bg-[#12141A] p-3 rounded-lg">
              <div className="text-[11px] text-pulse-secondary">Team Workload</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Balanced</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className="bg-[#635BFF] h-full w-[84%] rounded-full" />
          </div>
        </div>
      ),
    },
  ];

  const current = demoSteps[activeStep];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="PULSE Interactive Walkthrough" maxWidth="max-w-2xl">
      <div className="space-y-6">
        {/* Step Tabs */}
        <div className="flex gap-2 border-b border-pulse-border dark:border-pulse-dark-border pb-3 overflow-x-auto">
          {demoSteps.map((step, idx) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                activeStep === idx
                  ? 'bg-pulse-accent text-white font-semibold'
                  : 'text-pulse-secondary hover:bg-pulse-surface dark:hover:bg-[#1F222B]'
              }`}
            >
              {step.badge.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Step Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            {current.icon}
            <h4 className="text-xl font-bold text-pulse-primary dark:text-white">
              {current.title}
            </h4>
          </div>
          <p className="text-sm text-pulse-secondary dark:text-pulse-dark-secondary">
            {current.description}
          </p>
        </div>

        {/* Interactive Feature Demo Frame */}
        {current.preview}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-pulse-border dark:border-pulse-dark-border">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            iconLeft={<ArrowLeft className="w-4 h-4" />}
          >
            Previous
          </Button>

          <span className="text-xs text-pulse-secondary">
            {activeStep + 1} of {demoSteps.length}
          </span>

          {activeStep < demoSteps.length - 1 ? (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setActiveStep((prev) => Math.min(demoSteps.length - 1, prev + 1))}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Next Step
            </Button>
          ) : (
            <Button
              variant="accent"
              size="sm"
              onClick={() => {
                onClose();
                navigate('/signup');
              }}
              iconRight={<CheckCircle2 className="w-4 h-4" />}
            >
              Get Started Free
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
