export const helpCategories = [
  'All',
  'Getting Started',
  'Automations',
  'AI Engine',
  'Integrations',
  'Billing & GST',
  'Security & Privacy',
];

export const helpArticles = [
  // 1. Getting Started
  {
    id: 'get-started-1',
    category: 'Getting Started',
    question: 'What is PULSE and how does it work?',
    answer: 'PULSE is an intelligent operations workspace that unifies projects, people, and processes. Instead of manually syncing status across GitHub, Jira, Figma, and Slack, PULSE listens to active event streams and provides real-time visibility, automated blocker escalation, and daily AI priorities.',
  },
  {
    id: 'get-started-2',
    category: 'Getting Started',
    question: 'How quickly can our team get set up?',
    answer: 'Most teams get up and running in under 5 minutes. You sign up, invite your colleagues, connect your GitHub repositories or Slack workspace via 1-click OAuth, and PULSE immediately generates your first operational stream without complex data migrations.',
  },
  {
    id: 'get-started-3',
    category: 'Getting Started',
    question: 'Can I use PULSE with distributed or remote teams?',
    answer: 'Yes! PULSE was designed specifically for distributed, asynchronous engineering squads. Teams across Bengaluru, Mumbai, Gurugram, and international hubs use PULSE to stay aligned across time zones without recurring status meetings.',
  },

  // 2. Automations
  {
    id: 'auto-1',
    category: 'Automations',
    question: 'How do autonomous workflow recipes work?',
    answer: 'PULSE workflows operate on event-driven triggers. For example: When a Pull Request is merged on GitHub, automatically close the associated Linear/Jira ticket and notify the squad channel on Slack. You can create custom trigger-action pairs without writing code.',
  },
  {
    id: 'auto-2',
    category: 'Automations',
    question: 'What happens when a task gets blocked for more than 48 hours?',
    answer: 'Our autonomous unblocking protocol triggers an automatic alert to the team lead with context on dependent tasks and recommends alternative reviewers to keep sprint milestones on track.',
  },
  {
    id: 'auto-3',
    category: 'Automations',
    question: 'Can we build custom automations via webhooks and APIs?',
    answer: 'Yes. Growth and Scale tier plans include full access to the PULSE REST API and outbound webhooks. You can trigger internal microservices, CI/CD runners, or custom ERP systems upon workspace events.',
  },

  // 3. AI Engine
  {
    id: 'ai-1',
    category: 'AI Engine',
    question: 'How does the AI prioritize tasks every morning?',
    answer: 'Our context engine evaluates multi-dimensional signals: approaching sprint milestones, dependent pull requests, team velocity, and overdue approvals. Rather than drowning in a backlog of 200 items, you receive the top 3 highest-leverage tasks requiring immediate attention.',
  },
  {
    id: 'ai-2',
    category: 'AI Engine',
    question: 'Does PULSE train public AI models on our proprietary code?',
    answer: 'Strictly NO. PULSE enforces zero public model training on customer data. Your source code, commits, design assets, and internal messages are processed in ephemeral, isolated environments and are never used to train third-party foundation models.',
  },
  {
    id: 'ai-3',
    category: 'AI Engine',
    question: 'Can we adjust the AI ranking criteria for our organization?',
    answer: 'Yes. Team administrators can weight priority vectors—such as giving higher urgency to customer-facing bug fixes or production deployment blockers over exploratory backlog items.',
  },

  // 4. Integrations
  {
    id: 'int-1',
    category: 'Integrations',
    question: 'Which developer and productivity tools are supported?',
    answer: 'PULSE natively integrates with GitHub, GitLab, Slack, Linear, Jira, Asana, Figma, Notion, and Google Workspace. We also support custom webhook endpoints for internal developer platforms.',
  },
  {
    id: 'int-2',
    category: 'Integrations',
    question: 'Do all team members need paid seats in connected tools?',
    answer: 'No. PULSE aggregates activity so that executive leaders, product managers, and operations personnel can review progress without purchasing unnecessary full-seat licenses in every individual engineering tool.',
  },
  {
    id: 'int-3',
    category: 'Integrations',
    question: 'Does PULSE support self-hosted GitHub Enterprise or GitLab?',
    answer: 'Yes. Our Scale tier offers support for self-hosted VCS instances deployed within your private VPC or on-premise infrastructure.',
  },

  // 5. Billing & GST
  {
    id: 'bill-1',
    category: 'Billing & GST',
    question: 'What payment methods are supported in India?',
    answer: 'We support all major Indian payment methods through Razorpay and Stripe: UPI (Google Pay, PhonePe, Paytm), RuPay debit/credit cards, NetBanking across 50+ Indian banks, Visa, and Mastercard.',
  },
  {
    id: 'bill-2',
    category: 'Billing & GST',
    question: 'Can I receive a GST-compliant tax invoice for my company?',
    answer: 'Yes. During checkout or in your workspace billing settings, you can enter your 15-digit GSTIN, registered company name, and address. Automated GST tax invoices (B2B) are generated instantly on every billing cycle.',
  },
  {
    id: 'bill-3',
    category: 'Billing & GST',
    question: 'Can I cancel or change my plan anytime?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time with a single click. When canceling, you retain full platform access until the end of your prepaid billing period without any penalties.',
  },

  // 6. Security & Privacy
  {
    id: 'sec-1',
    category: 'Security & Privacy',
    question: 'Where is customer data stored?',
    answer: 'Customer data for Indian organizations is primarily hosted in the AWS Asia Pacific (Mumbai, ap-south-1) cloud region. Enterprise customers can also select dedicated EU or US data residency upon request.',
  },
  {
    id: 'sec-2',
    category: 'Security & Privacy',
    question: 'What security certifications does PULSE hold?',
    answer: 'PULSE is SOC2 Type II certified and complies with ISO 27001 guidelines and India’s Digital Personal Data Protection (DPDP) Act. All data is encrypted with AES-256 at rest and TLS 1.3 in transit.',
  },
  {
    id: 'sec-3',
    category: 'Security & Privacy',
    question: 'Does PULSE support Single Sign-On (SSO)?',
    answer: 'Yes. The Scale plan includes SAML 2.0, Okta, Google Workspace SSO, and Azure AD integration with role-based access control (RBAC) and automated SCIM user provisioning.',
  },
];
