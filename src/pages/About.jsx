import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Building2,
  Sparkles,
  MapPin,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

import aaravImg from '../assets/avatars/aarav.jpg';
import priyaImg from '../assets/avatars/priya.jpg';
import rohanImg from '../assets/avatars/rohan.jpg';
import nehaImg from '../assets/avatars/neha.jpg';
import vikramImg from '../assets/avatars/vikram.jpg';
import ananyaImg from '../assets/avatars/ananya.jpg';

export default function About() {
  const { theme, toggleTheme } = useTheme();

  const leadershipTeam = [
    {
      name: 'Aarav Patel',
      role: 'Co-Founder & Chief Executive Officer',
      background: 'Ex-Razorpay • IIT Bombay',
      bio: 'Pioneered scalable developer infrastructure and fintech automation pipelines. Passionate about eliminating operational friction for growing engineering squads.',
      image: aaravImg,
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & Chief Product Officer',
      background: 'Ex-Swiggy • IIM Bangalore',
      bio: 'Product strategist dedicated to building delightful, zero-friction workflows that bridge engineering, design, and executive leadership.',
      image: priyaImg,
    },
    {
      name: 'Rohan Verma',
      role: 'VP of Engineering',
      background: 'Ex-Zerodha • IIT Delhi',
      bio: 'Distributed systems architect leading PULSE’s real-time event ingestion engine, processing millions of continuous webhook signals per minute.',
      image: rohanImg,
    },
    {
      name: 'Neha Singhal',
      role: 'Head of Customer Operations',
      background: 'Ex-Freshworks • BITS Pilani',
      bio: 'Customer success leader focused on high-touch enterprise onboarding, compliance assurance, and proactive workflow optimization across India and APAC.',
      image: nehaImg,
    },
    {
      name: 'Vikram Malhotra',
      role: 'Head of AI & Machine Intelligence',
      background: 'IISc Bengaluru • AI Research Fellow',
      bio: 'Specialist in contextual graph reasoning and natural language task triage, architecting PULSE’s proprietary daily priority engine.',
      image: vikramImg,
    },
    {
      name: 'Ananya Tiwari',
      role: 'Head of Product Design',
      background: 'Ex-CRED • NID Ahmedabad',
      bio: 'Design craftsperson obsessed with keyboard ergonomics, typography hierarchy, micro-interactions, and high-performance dark mode interfaces.',
      image: ananyaImg,
    },
  ];

  const coreValues = [
    {
      icon: Zap,
      title: 'Velocity with Precision',
      desc: 'Speed without direction is noise. We build intelligent systems that eliminate ambiguity so teams sprint with unwavering confidence.',
    },
    {
      icon: Target,
      title: 'Radical Open Alignment',
      desc: 'Information silos kill momentum. PULSE synthesizes code, designs, and tasks into shared live streams where alignment happens automatically.',
    },
    {
      icon: Sparkles,
      title: 'Builder-First Craftsmanship',
      desc: 'We obsess over every detail—from sub-50ms interaction response times to intuitive keyboard shortcuts and respectful information density.',
    },
    {
      icon: ShieldCheck,
      title: 'Absolute Data Sovereignty',
      desc: 'Your team’s source code and conversations belong strictly to you. Encrypted at rest, hosted in India (AWS Mumbai), with zero third-party training.',
    },
  ];

  const officeLocations = [
    {
      city: 'Bengaluru (Global HQ)',
      label: 'Engineering & Innovation Campus',
      address: 'Level 4, Prestige Tech Park, Sarjapur-Marathahalli Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103',
      badge: 'Headquarters',
    },
    {
      city: 'Mumbai',
      label: 'Enterprise & Financial Operations',
      address: 'BKC Innovation Centre, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
      badge: 'Enterprise Hub',
    },
    {
      city: 'Gurugram',
      label: 'Growth & Solutions Center',
      address: 'Building 10, DLF Cyber City, Phase III, Gurugram, Haryana 122002',
      badge: 'Regional Hub',
    },
  ];

  return (
    <div className="min-h-screen bg-pulse-bg dark:bg-pulse-dark-bg text-pulse-primary dark:text-pulse-dark-primary flex flex-col transition-colors duration-200">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-pulse-border/80 dark:border-pulse-dark-border/80 py-3.5">
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" aria-label="PULSE Home">
              <BrandLogo size="md" />
            </Link>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-28 border-b border-pulse-border/60 dark:border-[#252830] bg-gradient-to-b from-pulse-surface/40 to-transparent dark:from-[#111216]/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="eyebrow" className="mb-4">
              ABOUT PULSE
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.12] mb-6">
              We build systems so your team can build the future.
            </h1>
            <p className="text-base sm:text-lg text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed mb-10">
              Born in Bengaluru, India’s premier technology hub, PULSE was founded on a simple conviction: modern squads shouldn’t lose 40% of their work week to status check-ins, scattered threads, and siloed tools. We exist to turn busywork into momentum.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] shadow-sm">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-pulse-primary dark:text-white">₹180Cr+</div>
                <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">Bandwidth Saved</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-pulse-primary dark:text-white">18,000+</div>
                <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">Teams In Sync</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-pulse-primary dark:text-white">4 Hubs</div>
                <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">Across India</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">99.98%</div>
                <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">SLA Uptime</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 sm:py-28 border-b border-pulse-border/60 dark:border-[#252830]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <Badge variant="eyebrow" className="mb-4">
                OUR ORIGIN
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-6">
                Why we founded PULSE.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                <p>
                  In late 2022, our founding team in Bengaluru noticed a glaring paradox: software tools were proliferating faster than ever, yet high-growth product teams felt more fragmented, overwhelmed, and sluggish than before.
                </p>
                <p>
                  Engineers were spending hours manually updating Jira or Linear after merging pull requests on GitHub. Product managers were pinging squad leads on Slack for status digests. Executives lacked real-time visibility into whether quarterly goals were on track.
                </p>
                <p>
                  We built PULSE to be the autonomous neural layer that ties this ecosystem together. By passively synthesizing event streams from GitHub, Jira, Figma, and Slack, PULSE surfaces top priorities and auto-resolves cross-functional handoffs.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-pulse-primary dark:bg-white" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-pulse-surface dark:bg-[#1F222A]">
                    <Target className="w-5 h-5 text-pulse-primary dark:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-pulse-primary dark:text-white">Our Mission</h3>
                </div>
                <p className="text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                  To eliminate coordination friction so ambitious engineering and operational teams can dedicate their energy to high-leverage innovation.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-pulse-accent" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-pulse-accent/10 dark:bg-pulse-accent/20">
                    <Sparkles className="w-5 h-5 text-pulse-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-pulse-primary dark:text-white">Our Vision</h3>
                </div>
                <p className="text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                  The autonomous operating system for modern business—where software builds, client deliverables, and team handoffs orchestrate themselves seamlessly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 sm:py-28 border-b border-pulse-border/60 dark:border-[#252830] bg-pulse-surface/30 dark:bg-[#0E1015]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="eyebrow" className="mb-4">
              LEADERSHIP
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-4">
              Meet the builders behind PULSE.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
              A seasoned squad of engineers, product pioneers, and researchers from India's most iconic technology organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] hover:border-pulse-secondary/30 dark:hover:border-pulse-dark-border transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white dark:border-[#252830] ring-1 ring-pulse-border dark:ring-[#333742] shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div>
                      <h3 className="text-base font-bold text-pulse-primary dark:text-white group-hover:text-pulse-accent transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-medium text-pulse-accent">
                        {leader.role}
                      </p>
                      <p className="text-[11px] text-pulse-secondary dark:text-pulse-dark-secondary">
                        {leader.background}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 border-b border-pulse-border/60 dark:border-[#252830]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="eyebrow" className="mb-4">
              OUR PRINCIPLES
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-4">
              Values that guide everything we build.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
              Not buzzwords on a wall, but operational principles baked into our code and team culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] flex gap-5"
                >
                  <div className="p-3 rounded-xl bg-pulse-surface dark:bg-[#1E2028] text-pulse-primary dark:text-white flex-shrink-0 h-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-pulse-primary dark:text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Office Locations */}
      <section className="py-20 sm:py-28 border-b border-pulse-border/60 dark:border-[#252830] bg-pulse-surface/20 dark:bg-[#0E1015]/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="eyebrow" className="mb-4">
              PRESENCE IN INDIA
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-4">
              Our Innovation Hubs.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
              Headquartered in Bengaluru with regional enterprise teams across Mumbai and Gurugram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {officeLocations.map((office) => (
              <div
                key={office.city}
                className="p-6 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-pulse-primary dark:text-white font-bold text-base">
                      <MapPin className="w-4 h-4 text-pulse-accent" />
                      <span>{office.city}</span>
                    </div>
                    <Badge variant="neutral" className="text-[10px]">
                      {office.badge}
                    </Badge>
                  </div>
                  <p className="text-xs font-semibold text-pulse-accent mb-2">
                    {office.label}
                  </p>
                  <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-pulse-border/60 dark:border-[#252830] flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Open for visitor briefings</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#0B0C0E]">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-pulse-surface to-white dark:from-[#15171C] dark:to-[#111216] border border-pulse-border dark:border-[#252830] text-center shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-4">
              Ready to see PULSE in action?
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary max-w-xl mx-auto mb-8">
              Join forward-thinking teams across India and worldwide who turn busywork into real velocity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                as={Link}
                to="/signup"
                size="lg"
                variant="primary"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Start for free
              </Button>
              <Button
                as={Link}
                to="/help"
                size="lg"
                variant="secondary"
              >
                Explore Help Center
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
