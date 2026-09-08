import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Zap, ShieldCheck, CreditCard, Sparkles, MessageCircle } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function HelpGateway() {
  const popularTopics = [
    {
      icon: Zap,
      title: '5-Minute Setup',
      desc: 'Connect GitHub, Slack & Linear with zero data migration.',
    },
    {
      icon: Sparkles,
      title: 'AI Priority Engine',
      desc: 'How PULSE surfaces your top 3 daily high-impact tasks.',
    },
    {
      icon: CreditCard,
      title: 'GST & INR Billing',
      desc: 'Automated 18% GST tax invoices with UPI & RuPay support.',
    },
    {
      icon: ShieldCheck,
      title: 'Data Sovereignty',
      desc: 'Hosted in India on AWS Mumbai with zero LLM model training.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-pulse-border/70 dark:border-[#252830] bg-pulse-surface/30 dark:bg-[#0E1015]/40">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="eyebrow" className="mb-4">
              HELP & RESOURCES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-4">
              Have questions? We've got answers.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary max-w-xl mx-auto">
              Our comprehensive Help Center covers everything from autonomous workflow recipes to Indian tax compliance.
            </p>
          </div>

          {/* Quick Topic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
            {popularTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.title}
                  to="/help"
                  className="p-5 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] hover:border-pulse-secondary/40 dark:hover:border-pulse-dark-border transition-all duration-150 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-pulse-surface dark:bg-[#1F222A] text-pulse-primary dark:text-white group-hover:bg-pulse-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-pulse-primary transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-pulse-primary dark:text-white group-hover:text-pulse-accent transition-colors mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-pulse-secondary/40 group-hover:text-pulse-primary dark:group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                </Link>
              );
            })}
          </div>

          {/* Banner Action */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-pulse-accent/10 dark:bg-pulse-accent/20 text-pulse-accent flex-shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-pulse-primary dark:text-white">
                  Looking for detailed documentation or support?
                </h4>
                <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-0.5">
                  Browse all 18+ guides across 6 categories or contact our Bengaluru team.
                </p>
              </div>
            </div>
            <Button
              as={Link}
              to="/help"
              size="md"
              variant="primary"
              className="flex-shrink-0 w-full sm:w-auto justify-center"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Explore Help Center
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
