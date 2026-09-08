import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Check, AlertCircle, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useTheme } from '../context/ThemeContext';

export default function Signup() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [teamSize, setTeamSize] = useState('6-20');
  const [plan, setPlan] = useState('growth');
  const [agreed, setAgreed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && ['starter', 'growth', 'scale'].includes(planParam.toLowerCase())) {
      setPlan(planParam.toLowerCase());
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (!agreed) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setIsLoading(true);
    // Simulate account provisioning
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-pulse-bg dark:bg-pulse-dark-bg text-pulse-primary dark:text-pulse-dark-primary flex flex-col justify-between transition-colors duration-200">
      
      {/* Top Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-pulse-border/70 dark:border-[#252830]">
        <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent rounded-lg" aria-label="PULSE Home">
          <BrandLogo size="md" />
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white hover:bg-pulse-surface dark:hover:bg-[#1A1C23] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className="text-xs text-pulse-secondary">
            Already have an account?{' '}
            <Link to="/login" className="text-pulse-accent font-semibold hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Form Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#13151C] p-6 sm:p-10 rounded-3xl border border-pulse-border dark:border-[#232630] shadow-card">
            <div className="mb-6">
              <Badge variant="eyebrow" className="mb-2">
                START FOR FREE
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-pulse-primary dark:text-white tracking-tight">
                Turn busywork into momentum.
              </h1>
              <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                Free forever for small teams. No credit card required, instant setup.
              </p>
            </div>

            {/* Social signups */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => { setIsLoading(false); setSuccess(true); setTimeout(() => navigate('/'), 1200); }, 700);
                }}
                className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#181A24] hover:bg-pulse-surface dark:hover:bg-[#1F222F] text-xs font-semibold text-pulse-primary dark:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => { setIsLoading(false); setSuccess(true); setTimeout(() => navigate('/'), 1200); }, 700);
                }}
                className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#181A24] hover:bg-pulse-surface dark:hover:bg-[#1F222F] text-xs font-semibold text-pulse-primary dark:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <hr className="w-full border-pulse-border dark:border-[#252830]" />
              <span className="absolute px-3 bg-white dark:bg-[#13151C] text-[11px] font-medium text-pulse-secondary">
                or sign up with work email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs border border-rose-200 dark:border-rose-900/50">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-200 dark:border-emerald-900/50">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Account created! Setting up your workspace...</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-pulse-primary dark:text-white mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Aarav Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-pulse-primary dark:text-white placeholder:text-pulse-secondary/60 focus:outline-none focus:ring-2 focus:ring-pulse-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-pulse-primary dark:text-white mb-1.5">
                    Team Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-pulse-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-pulse-accent"
                  >
                    <option value="1-5">1 - 5 people</option>
                    <option value="6-20">6 - 20 people</option>
                    <option value="21-50">21 - 50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-pulse-primary dark:text-white mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aarav@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-pulse-primary dark:text-white placeholder:text-pulse-secondary/60 focus:outline-none focus:ring-2 focus:ring-pulse-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-pulse-primary dark:text-white mb-1.5">
                  Choose a Password <span className="text-[11px] font-normal text-pulse-secondary">(min. 8 characters)</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 pr-10 rounded-xl text-xs sm:text-sm bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-pulse-primary dark:text-white placeholder:text-pulse-secondary/60 focus:outline-none focus:ring-2 focus:ring-pulse-accent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-pulse-secondary hover:text-pulse-primary"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="rounded border-pulse-border text-pulse-accent focus:ring-pulse-accent mt-0.5"
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <Link to="/terms" className="text-pulse-accent hover:underline font-medium">Terms of Service</Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-pulse-accent hover:underline font-medium">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isLoading || success}
                className="w-full justify-center mt-2"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {isLoading ? 'Creating account...' : 'Create free account'}
              </Button>
            </form>

            <div className="mt-5 text-center text-xs text-pulse-secondary">
              Free 14-day trial of Growth features included. No credit card required.
            </div>
          </div>

          {/* Right Side / Plan Value Panel */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-[#EEEDFC] via-[#F6F5FF] to-[#ECEBFA] dark:from-[#18162E] dark:via-[#1B1934] dark:to-[#141226] border border-[#E0DEF7] dark:border-[#2E2A55] min-h-[500px]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-pulse-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-pulse-accent">
                  WHAT YOU GET
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-snug mb-5">
                Everything your team needs to move faster, from day one.
              </h2>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 text-xs font-medium text-pulse-primary dark:text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0 text-pulse-accent mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Real-time AI priorities that rank high-impact work</span>
                </div>
                <div className="flex items-start gap-3 text-xs font-medium text-pulse-primary dark:text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0 text-pulse-accent mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Autonomous triggers to sync GitHub, Slack, and Linear</span>
                </div>
                <div className="flex items-start gap-3 text-xs font-medium text-pulse-primary dark:text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0 text-pulse-accent mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Unified project dashboard with team velocity analytics</span>
                </div>
                <div className="flex items-start gap-3 text-xs font-medium text-pulse-primary dark:text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-pulse-accent/10 dark:bg-pulse-accent/20 flex items-center justify-center flex-shrink-0 text-pulse-accent mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Collaborate with unlimited team members during trial</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#1A182F] border border-white dark:border-[#2D2A54] shadow-subtle">
              <p className="text-xs italic text-pulse-secondary dark:text-pulse-dark-secondary mb-3">
                "The AI prioritization is a game-changer. It surfaces what actually matters and helps us move faster without the noise."
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                  VM
                </div>
                <div className="text-[11px]">
                  <span className="font-bold text-pulse-primary dark:text-white">Vikram Malhotra</span>
                  <span className="text-pulse-secondary"> — Director of Marketing, VANTA Cloud</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-pulse-border/70 dark:border-[#252830] flex flex-col sm:flex-row items-center justify-between text-xs text-pulse-secondary dark:text-pulse-dark-secondary gap-2">
        <div>© 2024 PULSE Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
        </div>
      </footer>

    </div>
  );
}
