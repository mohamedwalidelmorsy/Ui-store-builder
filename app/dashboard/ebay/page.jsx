'use client'

import React, { useState } from 'react';
import {
  Clock,
  Users,
  Globe,
  DollarSign,
  ShoppingCart,
  Package,
  BarChart,
  Zap,
  Mail,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  Store,
  Check,
  Lock
} from 'lucide-react';
import { Button, Input, Label, Card, CardContent, Badge } from '@/components/ui';

// Statistics data
const stats = [
  {
    icon: Users,
    value: '134M+',
    label: 'Active Buyers',
    description: 'Global customer base'
  },
  {
    icon: Globe,
    value: '190+',
    label: 'Markets Worldwide',
    description: 'International reach'
  },
  {
    icon: DollarSign,
    value: 'GBP 14.7B',
    label: 'GMV Q1 2025',
    description: 'Gross merchandise value'
  }
];

// Features data
const features = [
  {
    icon: Store,
    title: 'Automated eBay Store Setup',
    description: 'Complete store configuration with optimised listings and professional appearance'
  },
  {
    icon: Package,
    title: 'Product Listing Automation',
    description: 'AI-powered product imports with optimised titles, descriptions, and images'
  },
  {
    icon: BarChart,
    title: 'Inventory Synchronization',
    description: 'Real-time stock management across all your sales channels'
  },
  {
    icon: TrendingUp,
    title: 'Pricing Optimization',
    description: 'Dynamic pricing strategies to maximize profits and stay competitive'
  },
  {
    icon: ShoppingCart,
    title: 'Order Management',
    description: 'Streamlined order processing and fulfillment automation'
  },
  {
    icon: Zap,
    title: 'Multi-Channel Integration',
    description: 'Seamless connection between eBay, Shopify, and other platforms'
  }
];

// Benefits data
const benefits = [
  {
    icon: Clock,
    title: 'Early Access',
    description: 'Be the first to use our eBay automation tools'
  },
  {
    icon: DollarSign,
    title: 'Special Launch Pricing',
    description: 'Save 20% on your first 3 months'
  },
  {
    icon: Shield,
    title: 'Exclusive Beta Testing',
    description: 'Help shape the features you need most'
  }
];

// Why eBay reasons
const whyEbay = [
  'Global Reach: Access to millions of buyers across 190+ markets worldwide',
  'Established Marketplace: Leverage eBay\'s trusted brand and buyer confidence',
  'Diverse Categories: Sell virtually anything from fashion to electronics',
  'Buyer Protection: Built-in trust with eBay\'s Money Back Guarantee'
];

// Stat Card Component
const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;
  
  return (
    <Card 
      className="bg-white border-gray-200 hover:border-[#38C695] transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#38C695]/20 flex items-center justify-center">
          <Icon className="h-8 w-8 text-[#38C695]" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
        <p className="text-lg font-semibold text-[#38C695] mb-1">{stat.label}</p>
        <p className="text-sm text-gray-500">{stat.description}</p>
      </CardContent>
    </Card>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <Card 
      className="bg-white border-gray-200 hover:border-[#38C695]/50 transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-[#38C695] flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;
  
  return (
    <Card 
      className="bg-gradient-to-br from-[#38C695]/20 to-[#2a4d7a]/20 border-[#38C695]/30 hover:border-[#38C695] transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#38C695] flex items-center justify-center">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
        <p className="text-sm text-gray-600">{benefit.description}</p>
      </CardContent>
    </Card>
  );
};

// Main Component
function EbayComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate successful submission
    setIsSubmitted(true);
    console.log('Waitlist signup:', email);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#1D3A63] to-[#2a4d7a]">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#38C695] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38C695] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#38C695]/20 border border-[#38C695] animate-pulse">
            <Clock className="h-5 w-5 text-[#38C695]" />
            <span className="text-sm font-semibold text-[#38C695]">COMING SOON</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Coming Soon: eBay Dropshipping<br />
            <span className="text-[#38C695]">Store Integration</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expanding to the world's most established marketplace. Soon you'll be able to launch and automate your eBay dropshipping store with the same powerful AI technology.
          </p>

          {/* eBay Visual Icon */}
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-[#38C695] to-[#2a4d7a] shadow-2xl mb-8">
            <ShoppingCart className="h-16 w-16 text-white" />
          </div>

          {/* Launch Timeline */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#2a4d7a] border border-[#38C695]/30">
            <Clock className="h-5 w-5 text-[#38C695]" />
            <span className="text-white font-medium">Expected Launch: Q2 2026</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of <span className="text-[#38C695]">eBay Marketplace</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Join millions of sellers reaching a massive global audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's <span className="text-[#38C695]">Coming</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful automation features to supercharge your eBay business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Join the <span className="text-[#38C695]">Waitlist</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Be among the first to access our eBay automation platform
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} index={index} />
                ))}
              </div>

              {/* Waitlist Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your-email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                          error ? 'border-red-500' : ''
                        }`}
                      />
                      {error && (
                        <p className="text-sm text-red-400">{error}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#38C695] hover:bg-[#2da97c] text-white py-6 text-lg font-semibold"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Notify Me When Available
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      <Lock className="inline h-3 w-3 mr-1" />
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#38C695] flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thanks for joining the waitlist. We'll notify you as soon as eBay integration is available.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail('');
                    }}
                    variant="outline"
                    className="border-[#38C695] text-[#38C695] hover:bg-[#38C695] hover:text-white"
                  >
                    Add Another Email
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why eBay Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#38C695]">eBay</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              The world's most trusted online marketplace for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyEbay.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-white border border-gray-200 hover:border-[#38C695]/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#38C695] flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Trust Signals */}
      <section className="py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#38C695]" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#38C695]" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#38C695]" />
              <span>Trusted by Thousands</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              (c) 2026 Storebuilders.io - All rights reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EbayComingSoonPage;


