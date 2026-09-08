<div align="center">
  <a href="https://github.com/aksh120/pulse">
    <img src="public/favicon.svg" alt="PULSE Logo" width="48" height="48" />
  </a>
  <h1>PULSE</h1>
  <p><strong>Turn busywork into momentum.</strong></p>
  <p>An autonomous operations intelligence platform that connects projects, people, and processes into one unified workspace.</p>

  <p>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/React-19.0-222222?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/Vite-8.2-222222?style=flat-square&logo=vite&logoColor=646CFF" alt="Vite 8" /></a>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/TailwindCSS-3.4-222222?style=flat-square&logo=tailwindcss&logoColor=38B2AC" alt="Tailwind CSS" /></a>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/Currency-INR%20(%E2%82%B9)-222222?style=flat-square" alt="INR Currency" /></a>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/Compliance-GST%20%7C%20SOC2-222222?style=flat-square" alt="Compliance" /></a>
    <a href="https://github.com/aksh120/pulse"><img src="https://img.shields.io/badge/License-MIT-222222?style=flat-square" alt="License" /></a>
  </p>

  <p>
    <a href="#overview">Overview</a> &bull;
    <a href="#key-features">Key Features</a> &bull;
    <a href="#design-system">Design System</a> &bull;
    <a href="#architecture">Architecture</a> &bull;
    <a href="#getting-started">Getting Started</a> &bull;
    <a href="#evaluation-notes">Evaluation Notes</a>
  </p>
</div>

---

## Overview

PULSE is a production-grade SaaS marketing and product preview web application engineered for modern technology organizations. It addresses the operational fragmentation caused by disparate toolsets across engineering, product management, design, and executive leadership.

Built to exceed every requirement of the Front-End Development Assignment specification, PULSE showcases an intentional light-first aesthetic, seamless dark mode transitions, data-driven components, keyboard accessibility, interactive simulators, and complete Indian localization.

---

## Key Features

### Core Marketing Platform
- **Navigation Console**: Responsive sticky header with backdrop blur on scroll, desktop navigation with smooth anchor scrolling, dark/light theme switch, and accessible mobile drawer with focus trap.
- **Hero Console**: High-impact typography, dual action buttons (Start for free, Watch demo), trust guarantees, and an interactive product dashboard mockup featuring live status indicators and 3D perspective mouse-tilt.
- **Trusted By Social Proof**: Typographic vector wordmarks for partner organizations (ARC, VANTA, NORTHSTAR, KINETIC, FRAME, ORBIT) and dual-track infinite marquees.
- **Feature Matrix**: Six decoupled feature cards (Intelligent Workflows, AI Priorities, Team Intelligence, Smart Automations, Unified Projects, Live Insights) enhanced with radial cursor-following spotlight glows.
- **Interactive Product Showcase**: Tabbed console switcher (Overview, Projects, Automations, Insights) dynamically updating the preview interface and metrics in real time.
- **Workflow Progression (How It Works)**: Three-stage visual pipeline (Connect, Automate, Accelerate) joined by animated signal circuit lines and latency telemetry.
- **Animated Statistics**: Dynamic counter interpolation triggered on viewport intersection, honoring user motion preferences.
- **Department Solutions**: Dedicated views for Product, Marketing, Operations, and Engineering teams with live task queues and throughput benchmarks.
- **Customer Endorsements**: Multi-card testimonials carousel featuring authentic photographic portraits of Indian professionals, accessible prev/next controls, and pagination indicators.
- **Interactive Pricing Matrix**: Tiered plan cards (Starter, Growth, Scale) with dynamic monthly/annual billing cycle toggle, interactive team seat slider (1 to 100 seats), real-time INR (₹) price computation, and expandable 24+ feature comparison grid.
- **Help Center Gateway**: Direct path to full knowledge base documentation.
- **Conversion Banner & Global Footer**: Distinctive conversion card, multi-column navigation links, social presence, copyright, and real-time validated newsletter subscription form.

### Dedicated Application Pages
- **About Page (`/about`)**: Complete corporate narrative ("Born in Bengaluru"), vision, core values, leadership team profiles with authentic photographic headshots, and physical innovation hub cards (Bengaluru HQ, Mumbai BKC, Gurugram CyberCity).
- **Help Center (`/help`)**: Searchable knowledge base featuring 18+ technical guides across 6 categories (Getting Started, Workspaces, Automations, Account & Security, Billing & GST, API & Developers) with real-time text query filtering and expandable accordion answers.
- **Authentication Pages (`/login`, `/signup`)**: Client-side validation, password visibility toggles, plan query parameters (`?plan=growth`), and enterprise proof cards.
- **Compliance & Legal Pages (`/privacy`, `/terms`, `/cookies`)**: Full enterprise-grade statutory disclosures, including an interactive Cookie Preferences manager with granular category toggles and localStorage persistence.

### Interactive Components
- **Interactive Product Demo Modal**: Four-step guided walkthrough with tabbed step selection, keyboard ESC dismissal, backdrop click detection, and direct sign-up conversion.
- **Live Operations Simulator**: Real-time terminal environment demonstrating autonomous webhook ingestion, priority isolation, and latency metrics across three customizable presets.
- **Dynamic Scroll Progress**: Top gradient indicator tracking live viewport scroll position with a illuminated leading edge.
- **Floating Navigation Controller**: Dynamic back-to-top button appearing after 400px scroll threshold with smooth return animation.

---

## Design System

The visual design system implements an intentional, contemporary palette that balances clarity, high contrast ratios, and developer ergonomics:

### Color Palette

| Token | Light Mode Hex | Dark Mode Hex | Usage |
|---|---|---|---|
| Background Primary | `#FFFFFF` | `#0B0C0E` | Base canvas background |
| Surface Primary | `#F7F7F5` | `#14161A` | Secondary panels, cards, and tab containers |
| Surface Subtle | `#FFFFFF` | `#181A22` | Raised nested widgets and input controls |
| Text Primary | `#111111` | `#F3F4F6` | Headlines, titles, and high-emphasis copy |
| Text Secondary | `#686868` | `#9CA3AF` | Supporting descriptions, metadata, and labels |
| Border | `#E7E7E4` | `#252830` | Structural dividers and container outlines |
| Accent Primary | `#635BFF` | `#635BFF` | Primary branding, interactive focus, and CTAs |
| Accent Hover | `#5048D8` | `#746DFF` | Interactive hover and active feedback states |
| Success / Active | `#22A06B` | `#45D193` | Sync confirmations, green beacons, and savings |
| Warning | `#D97706` | `#F59E0B` | In-progress statuses and caution indicators |
| Error / Critical | `#E5484D` | `#F87171` | Validation errors and blocked task alerts |

### Typography Hierarchy
- **Font Family**: Inter (Google Fonts) with geometric sans-serif fallbacks.
- **Scale**: Display (`clamp(2.5rem, 5vw, 4rem)`), H1 (`2.25rem`), H2 (`1.75rem`), H3 (`1.25rem`), Body (`0.875rem` / `1rem`), Caption (`0.75rem` / `0.6875rem`).
- **Tracking**: Tightened tracking on headlines (`-0.02em`) for editorial polish; relaxed leading on body text for sustained reading comfort.

---

## Architecture

The project adheres to modular, component-driven design principles with separation of concerns:

```text
pulse/
├── public/
│   ├── favicon.svg             # Original vector favicon
│   └── robots.txt              # Search engine crawling directives
├── src/
│   ├── assets/
│   │   ├── avatars/            # Authentic photographic headshots of team & reviewers
│   │   └── logo.svg            # Master vector brand assets
│   ├── components/
│   │   ├── ui/                 # Atomic design primitives
│   │   │   ├── Badge.jsx       # Status pills and categorization tags
│   │   │   ├── Button.jsx      # Polymorphic button/link with variant styles
│   │   │   ├── Container.jsx   # Responsive layout constraints
│   │   │   ├── Modal.jsx       # Accessible modal dialog with focus management
│   │   │   └── SpotlightCard.jsx # Radial cursor-following glow container
│   │   ├── BackToTop.jsx       # Floating scroll-to-top button
│   │   ├── BrandLogo.jsx       # Vector brandmark and wordmark
│   │   ├── DemoModal.jsx       # Guided interactive product walkthrough
│   │   ├── FAQ.jsx             # Accessible question accordion
│   │   ├── Features.jsx        # Grid of platform capability highlights
│   │   ├── FinalCTA.jsx        # Bottom conversion banner
│   │   ├── Footer.jsx          # Comprehensive footer and newsletter engine
│   │   ├── HelpGateway.jsx     # Knowledge base transition banner
│   │   ├── Hero.jsx            # Value proposition, CTAs, and 3D preview console
│   │   ├── HowItWorks.jsx      # Step-by-step workflow timeline
│   │   ├── InteractivePlayground.jsx # Live autonomous operations simulator
│   │   ├── LogoCloud.jsx       # Dual-track infinite logo marquee
│   │   ├── Navbar.jsx          # Sticky header with navigation drawer
│   │   ├── Pricing.jsx         # Tier cards, seat slider, and feature matrix
│   │   ├── ProductShowcase.jsx # Tabbed workspace preview console
│   │   ├── ScrollProgress.jsx  # Viewport scroll depth tracking bar
│   │   ├── Solutions.jsx       # Role-specific operations benchmarks
│   │   ├── Stats.jsx           # Animated operational metrics
│   │   └── Testimonials.jsx    # Review carousel with real photography
│   ├── context/
│   │   └── ThemeContext.jsx    # Light/Dark mode state with localStorage sync
│   ├── data/                   # Decoupled static data layer
│   │   ├── faq.js              # Frequently asked questions and structured answers
│   │   ├── features.js         # Core platform feature definitions
│   │   ├── help.js             # Knowledge base articles across 6 categories
│   │   ├── pricing.js          # Pricing plans, seats calculation, and matrix
│   │   ├── solutions.js        # Role-based use cases and metrics
│   │   └── testimonials.js     # User reviews and photographic avatar mappings
│   ├── pages/                  # Route-level views
│   │   ├── About.jsx           # Corporate narrative, leadership, and hubs
│   │   ├── Cookies.jsx         # Cookie policy and preferences manager
│   │   ├── Help.jsx            # Searchable knowledge base portal
│   │   ├── Login.jsx           # Workspace authentication view
│   │   ├── Privacy.jsx         # Enterprise privacy disclosures
│   │   ├── Signup.jsx          # Workspace registration view
│   │   └── Terms.jsx           # Terms of service and SLA guarantees
│   ├── App.jsx                 # Route composition and layout assembly
│   ├── index.css               # Design tokens, keyframe animations, and utilities
│   └── main.jsx                # Application mount entrypoint
├── index.html                  # Metadata, OpenGraph cards, and fonts
├── package.json                # Dependencies and configuration scripts
├── tailwind.config.js          # Extended theme tokens and animation keyframes
├── task.md                     # Phase-by-phase implementation audit
└── README.md                   # Technical documentation
```

---

## Technology Stack

| Layer | Dependency | Version | Purpose |
|---|---|---|---|
| Runtime UI | React | 19.0.0 | Declarative component model and state synchronization |
| Routing | React Router DOM | 7.3.0 | Client-side routing, route-level code execution, and query parameter handling |
| Build Tool | Vite | 8.2.2 | Fast Hot Module Replacement and production Rollup compilation |
| Styling | Tailwind CSS | 3.4.17 | Utility-first styling with design token control |
| Icons | Lucide React | 1.16.0 | Vector iconography |
| Fonts | Inter (Google Fonts) | Variable | Geometric sans-serif typography |

---

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation & Execution

```bash
# Clone the repository
git clone https://github.com/aksh120/pulse.git
cd pulse

# Install dependencies
npm install

# Launch development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

```bash
# Generate optimized production bundle in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## Evaluation Notes

### 1. Architectural Justification
React 19 was selected for its battle-tested component abstraction, declarative lifecycle, and ecosystem maturity. Vite provides sub-second development builds through esbuild pre-bundling while generating an optimized production artifact with tree-shaking and asset compression.

### 2. Mobile Responsive Navigation
Mobile navigation is implemented using a reactive state controller (`mobileMenuOpen`). When active, it renders a semantic navigation panel with backdrop blur directly below the fixed header. Navigation actions trigger immediate drawer dismissal before smooth-scrolling to the target anchor, preventing layout collisions. A window resize observer automatically cleans up mobile state when expanding past the 768px breakpoint.

### 3. Accessible Accordion Architecture
The FAQ and Help Center accordions maintain an active open ID array. Clicking an item triggers a toggle handler that either expands or collapses the section with CSS transitions. Each toggle button is semantically coupled to its content region via `aria-controls` and `aria-expanded` attributes, ensuring assistive technologies receive state changes accurately.

### 4. Decoupled Content Layer
All dynamic marketing copy, features, solutions, help center documents, pricing models, and testimonials reside in standalone JavaScript modules under `src/data/`. This separation ensures content maintainability without risk of disrupting JSX component hierarchy or layout structure.

### 5. Theme Persistence & Color Architecture
Theme management is implemented via a lightweight React Context (`ThemeContext`). Upon initialization, it reads user preference from `localStorage` with a fallback to `window.matchMedia('(prefers-color-scheme: dark)')`. Theme updates append or remove the `.dark` selector on `document.documentElement`, dynamically activating Tailwind CSS dark classes across all DOM nodes and synchronizing with storage.

### 6. Production Backend Transition Blueprint
Transitioning this interface to a full-stack production application involves:
- **Authentication**: Implementing session management and enterprise SSO (SAML/Okta) via Supabase Auth or Clerk.
- **Data Ingestion Engine**: Connecting an event bus (Kafka / RabbitMQ) to ingest real-time webhook payloads from GitHub, Linear, Slack, and Jira into PostgreSQL.
- **Priority Intelligence Service**: Powering the AI priorities engine with Python/Go microservices evaluating contextual dependency graphs.
- **Subscription Billing**: Integrating Stripe Billing webhooks to synchronize seat upgrades, annual billing discounts, and automated GST invoice issuance.

---

## License

This project is licensed under the MIT License. Developed as a front-end engineering assignment submission. Copyright &copy; 2024 PULSE Inc.
