import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        {/* Header & Toggle Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Badge variant="eyebrow" className="mb-4">
              PRICING
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight mb-2">
              Simple, transparent pricing.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary">
              Start free and scale as you grow. No hidden fees or surprises.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-pulse-surface dark:bg-[#151720] border border-pulse-border dark:border-[#252830] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                billingCycle === 'annual'
                  ? 'bg-pulse-accent text-white shadow-subtle'
                  : 'text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary'
              }`}
            >
              <span>Annual</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                billingCycle === 'annual' ? 'bg-white/20 text-white' : 'bg-[#EBF9F1] text-[#22A06B] dark:bg-[#142B1F]'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#13151C] transition-all duration-200 ${
                  plan.popular
                    ? 'border-2 border-pulse-accent shadow-card-hover dark:border-pulse-accent ring-4 ring-pulse-accent/10'
                    : 'border border-pulse-border dark:border-[#232630] shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="purple" size="sm" className="font-bold uppercase tracking-wider text-[10px] shadow-sm">
                      Most popular
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-pulse-primary dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-pulse-border/70 dark:border-[#252830]">
                    {plan.isCustom ? (
                      <div>
                        <div className="text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight">
                          Custom
                        </div>
                        <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                          {plan.period}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight">
                            ${price}
                          </span>
                          {price > 0 && (
                            <span className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                              / user / mo
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                          {price === 0 ? 'Free forever' : billingCycle === 'annual' ? 'Billed annually (Save 20%)' : 'Billed monthly'}
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
                    href="#pricing"
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
      </Container>
    </section>
  );
}
