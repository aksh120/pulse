import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Sparkles, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { pricingPlans, featureComparison } from '../data/pricing';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [teamSeats, setTeamSeats] = useState(10);
  const [showComparison, setShowComparison] = useState(false);

  // Growth plan seat calculation
  const growthPlan = pricingPlans.find((p) => p.id === 'growth');
  const growthRate = billingCycle === 'annual' ? growthPlan.priceAnnual : growthPlan.priceMonthly;
  const growthTotal = growthRate * teamSeats;
  const growthMonthlyRate = growthPlan.priceMonthly * teamSeats;
  const annualSavings = (growthPlan.priceMonthly - growthPlan.priceAnnual) * teamSeats * 12;

  const seatPresets = [3, 10, 25, 50, 100];

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <Badge variant="eyebrow" className="mb-4">
              PRICING PLANS
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight mb-3">
              Simple, transparent pricing.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary max-w-xl">
              Start free and scale as your engineering velocity grows. All prices in INR with full GST compliance.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-pulse-surface dark:bg-[#151720] border border-pulse-border dark:border-[#252830]">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-[#20232E] text-pulse-primary dark:text-white shadow-subtle'
                    : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                  billingCycle === 'annual'
                    ? 'bg-pulse-accent text-white shadow-subtle'
                    : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary'
                }`}
              >
                <span>Annual</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  billingCycle === 'annual' ? 'bg-white/20 text-white' : 'bg-[#EBF9F1] text-[#22A06B] dark:bg-[#142B1F]'
                }`}>
                  Save 20% + 2 Mo Free
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Team Seats Calculator */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#13151C] border border-pulse-border dark:border-[#232630] shadow-card mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-pulse-accent" />
                  <span className="text-sm font-bold text-pulse-primary dark:text-white">
                    Team Size Calculator:
                  </span>
                  <span className="text-sm font-black text-pulse-accent bg-[#EEEDFC] dark:bg-[#1E1C38] px-2.5 py-0.5 rounded-full">
                    {teamSeats} {teamSeats === 1 ? 'member' : 'members'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {seatPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setTeamSeats(preset)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                        teamSeats === preset
                          ? 'bg-pulse-accent text-white'
                          : 'bg-pulse-surface dark:bg-[#1A1D27] text-pulse-secondary hover:text-pulse-primary'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="1"
                max="100"
                value={teamSeats}
                onChange={(e) => setTeamSeats(parseInt(e.target.value))}
                className="w-full h-2 bg-pulse-surface dark:bg-[#252830] rounded-lg appearance-none cursor-pointer accent-pulse-accent"
                aria-label="Number of team seats"
              />
              
              <div className="flex justify-between text-[11px] text-pulse-secondary mt-2">
                <span>1 member (Free)</span>
                <span>25 members</span>
                <span>50 members</span>
                <span>100+ members (Enterprise)</span>
              </div>
            </div>

            {/* Estimated Total Display */}
            <div className="lg:pl-8 lg:border-l border-pulse-border dark:border-[#252830] flex flex-col justify-center min-w-[240px]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-pulse-secondary">
                Growth Plan Estimate
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-pulse-primary dark:text-white tracking-tight">
                  ₹{growthTotal.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-pulse-secondary">/ month</span>
              </div>
              {billingCycle === 'annual' && (
                <span className="text-[11px] font-semibold text-[#22A06B] dark:text-[#45D193] mt-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Saves ₹{annualSavings.toLocaleString('en-IN')} every year
                </span>
              )}
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {pricingPlans.map((plan) => {
            const isGrowth = plan.id === 'growth';
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#13151C] transition-all duration-300 ${
                  isGrowth
                    ? 'border-2 border-pulse-accent shadow-card-hover dark:border-pulse-accent ring-4 ring-pulse-accent/15 scale-100 md:-translate-y-2'
                    : 'border border-pulse-border dark:border-[#232630] shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="purple" size="sm" className="font-bold uppercase tracking-wider text-[10px] shadow-sm bg-pulse-accent text-white dark:bg-pulse-accent dark:text-white">
                      ★ Most Popular
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-pulse-primary dark:text-white">
                        {plan.name}
                      </h3>
                      <span className="text-[10px] font-semibold text-pulse-secondary bg-pulse-surface dark:bg-[#1C1F2B] px-2 py-0.5 rounded-full">
                        {plan.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-pulse-border/70 dark:border-[#252830]">
                    {plan.isCustom ? (
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight">
                          Custom
                        </div>
                        <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                          {plan.period}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight">
                            ₹{price.toLocaleString('en-IN')}
                          </span>
                          {price > 0 && (
                            <span className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                              / user / mo
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                          {price === 0
                            ? 'Free forever for small teams'
                            : billingCycle === 'annual'
                            ? 'Billed annually (Save 20% + 2 mo free)'
                            : 'Billed monthly (No lock-in)'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-pulse-primary dark:text-gray-200">
                        <Check className="w-4 h-4 text-pulse-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div>
                  <Button
                    as={Link}
                    to={`/signup?plan=${plan.id}`}
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full justify-center text-sm font-semibold"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GST & Invoicing Note */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-pulse-secondary mb-8">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-pulse-accent" />
            100% GST-compliant invoices with GSTIN input
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#22A06B]" />
            Pay via UPI, NetBanking, RuPay, Visa, Mastercard
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#22A06B]" />
            14-day free trial on Growth tier
          </span>
        </div>

        {/* Expandable Feature Comparison Matrix Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#14161F] text-xs sm:text-sm font-bold text-pulse-primary dark:text-white hover:bg-pulse-surface dark:hover:bg-[#1A1D27] transition-all shadow-subtle"
          >
            <span>{showComparison ? 'Hide Feature Comparison' : 'Compare All 24+ Features & Limits'}</span>
            {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Feature Comparison Table */}
        {showComparison && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#13151C] border border-pulse-border dark:border-[#232630] shadow-card overflow-x-auto animate-slide-up">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-12 pb-4 mb-4 border-b border-pulse-border dark:border-[#252830] font-bold text-xs uppercase tracking-wider text-pulse-secondary">
                <div className="col-span-6">Feature & Capability</div>
                <div className="col-span-2 text-center">Starter</div>
                <div className="col-span-2 text-center text-pulse-accent">Growth</div>
                <div className="col-span-2 text-center">Scale</div>
              </div>

              {featureComparison.map((cat) => (
                <div key={cat.category} className="mb-6">
                  <div className="text-xs font-bold text-pulse-primary dark:text-white bg-pulse-surface dark:bg-[#181A24] p-2.5 rounded-lg mb-2">
                    {cat.category}
                  </div>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div key={item.name} className="grid grid-cols-12 text-xs py-1.5 border-b border-pulse-border/50 dark:border-[#252830]/50 items-center">
                        <div className="col-span-6 font-medium text-pulse-primary dark:text-gray-200">
                          {item.name}
                        </div>
                        <div className="col-span-2 text-center text-pulse-secondary">
                          {item.starter}
                        </div>
                        <div className="col-span-2 text-center font-bold text-pulse-accent">
                          {item.growth}
                        </div>
                        <div className="col-span-2 text-center text-pulse-secondary">
                          {item.scale}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}
