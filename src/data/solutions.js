export const solutionsData = {
  Product: {
    tagline: 'Connect product roadmaps directly to live engineering execution.',
    description: 'Stop chasing status across Notion, Jira, and Slack. PULSE provides real-time visibility into feature readiness, blocker dependencies, and user impact without endless status syncs.',
    metrics: [
      { label: 'Feature Cycle Speed', val: '+45%' },
      { label: 'Spec Alignment', val: '99%' },
      { label: 'Weekly Syncs Cut', val: '4 hrs' },
    ],
    features: [
      'Automatic PRD-to-ticket breakdown with AI dependency mapping',
      'Instant release readiness score calculated from code commits and QA passes',
      'Unified feedback aggregator connecting customer quotes to backlog items',
    ],
    preview: {
      title: 'Q4 Product Roadmap Sync',
      status: 'On Track',
      items: [
        { name: 'Self-serve onboarding redesign', lead: 'Sarah C.', state: 'In Review', progress: 85 },
        { name: 'Multi-tenant authorization API', lead: 'David K.', state: 'Testing', progress: 95 },
        { name: 'Custom reports export engine', lead: 'Elena P.', state: 'In Dev', progress: 60 },
      ],
    },
  },
  Marketing: {
    tagline: 'Orchestrate campaigns, content, and cross-channel launches.',
    description: 'Ensure creative assets, copy reviews, legal approvals, and distribution go live in lockstep. Never miss a campaign launch date due to an overlooked asset approval.',
    metrics: [
      { label: 'Asset Approval Turnaround', val: '3x faster' },
      { label: 'Campaign On-time Rate', val: '96%' },
      { label: 'Review Latency', val: '-60%' },
    ],
    features: [
      'Multi-stakeholder automated approval pipelines for marketing collateral',
      'Asset versioning with inline annotation and Slack push notifications',
      'Channel launch checklist with live go/no-go blocker alerts',
    ],
    preview: {
      title: 'Global Rebrand Campaign Launch',
      status: 'Live Review',
      items: [
        { name: 'Keynote deck & video assets', lead: 'Marcus R.', state: 'Approved', progress: 100 },
        { name: 'Paid acquisition landing pages', lead: 'Jessica T.', state: 'In Review', progress: 80 },
        { name: 'Partner announcement email blast', lead: 'Tom W.', state: 'Drafting', progress: 50 },
      ],
    },
  },
  Operations: {
    tagline: 'Automate recurring processes and streamline cross-functional handoffs.',
    description: 'From employee onboarding to vendor procurement and quarterly audits, eliminate manual checklist nagging and standardize recurring workflows.',
    metrics: [
      { label: 'Manual Admin Work', val: '-52%' },
      { label: 'SLA Adherence', val: '99.4%' },
      { label: 'Audit Prep Hours', val: '0 hrs' },
    ],
    features: [
      'Self-healing automated workflows that escalate overdue approvals',
      'Real-time vendor and tooling spend tracking dashboard',
      'Continuous compliance verification logs with 1-click audit export',
    ],
    preview: {
      title: 'Weekly Operational Health & Compliance',
      status: 'All Cleared',
      items: [
        { name: 'SOC2 Access Control Verification', lead: 'Security Bot', state: 'Verified', progress: 100 },
        { name: 'New Hire IT & SaaS Provisioning (4 hires)', lead: 'Ops Auto', state: 'Completed', progress: 100 },
        { name: 'Monthly AWS & Cloud Budget Reconcile', lead: 'Finance Team', state: 'Pending', progress: 75 },
      ],
    },
  },
  Engineering: {
    tagline: 'Protect deep work focus time and eliminate context switching.',
    description: 'Engineers spend more time in their IDE and less time filling out status forms. PULSE parses pull requests and commit comments to update ticket states automatically.',
    metrics: [
      { label: 'PR Review Latency', val: '-40%' },
      { label: 'Uninterrupted Focus Time', val: '+3.5 hrs/day' },
      { label: 'Deploy Frequency', val: '2.8x' },
    ],
    features: [
      'Zero-click ticket status progression tied to Git branch and PR events',
      'Automated PR review load balancing across squad members',
      'Flaky test alerts and CI bottleneck notifications routed to Slack',
    ],
    preview: {
      title: 'Sprint 43 Engineering Throughput',
      status: 'Active Sprint',
      items: [
        { name: 'Distributed Caching Layer (Redis)', lead: 'Alex M.', state: 'Merged', progress: 100 },
        { name: 'Webhooks Webhook Delivery Retry Queue', lead: 'Priya N.', state: 'Reviewing', progress: 70 },
        { name: 'E2E Cypress Test Suite Optimization', lead: 'Chris L.', state: 'Coding', progress: 45 },
      ],
    },
  },
};
