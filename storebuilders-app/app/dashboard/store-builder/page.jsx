'use client'

import React, { useState } from 'react';
import { 
  Store, 
  Sparkles, 
  Package, 
  Search, 
  Settings, 
  Shield, 
  Check, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft,
  Edit,
  Clock,
  DollarSign,
  Headphones,
  Lock,
  CheckCircle2,
  Globe,
  CreditCard,
  Zap
} from 'lucide-react';
import { Button, Input, Label, Checkbox, Badge, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

// Feature data
const features = [
  {
    icon: Settings,
    title: 'Automated Store Setup',
    description: 'Complete Shopify store with theme, colours, fonts, and pages'
  },
  {
    icon: Sparkles,
    title: 'AI Branding & Design',
    description: 'Brand name, logo, and conversion-focused layout'
  },
  {
    icon: Package,
    title: 'Curated Product Import',
    description: 'Winning products from TS Scout, AliExpress, Amazon'
  },
  {
    icon: Search,
    title: 'SEO & Copywriting',
    description: 'Automated product titles and descriptions, multilingual'
  },
  {
    icon: CheckCircle2,
    title: 'Complete Configuration',
    description: 'Payments, taxes, shipping zones pre-configured'
  }
];

// Reassurance badges
const reassuranceBadges = [
  { icon: Clock, text: 'Free 30-min Consultation' },
  { icon: DollarSign, text: 'Money-back Guarantee' },
  { icon: Headphones, text: '24/7 Support' }
];

// Niche options
const niches = [
  'Fashion & Apparel',
  'Electronics & Gadgets',
  'Home & Living',
  'Beauty & Cosmetics',
  'Sports & Fitness',
  'Toys & Kids',
  'Pet Supplies',
  'Jewelry & Accessories',
  'Health & Wellness'
];

// Platform options
const platforms = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'The most popular e-commerce platform with powerful features',
    available: true,
    icon: Store
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description: 'WordPress-based e-commerce solution for flexibility',
    available: false,
    icon: Package
  },
  {
    id: 'ebay',
    name: 'eBay',
    description: 'Marketplace integration for broader reach',
    available: false,
    icon: Globe
  }
];

// Progress Step Component
const ProgressStep = ({ number, label, active, completed }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="flex items-center w-full">
        <div className={`flex-1 h-1 ${completed || active ? 'bg-[#38C695]' : 'bg-gray-200'} transition-all duration-300`} />
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
          completed ? 'bg-[#38C695] text-white' : active ? 'bg-[#38C695] text-white ring-4 ring-[#38C695]/30' : 'bg-gray-200 text-gray-400'
        }`}>
          {completed ? <Check className="h-5 w-5" /> : number}
        </div>
        <div className={`flex-1 h-1 ${completed ? 'bg-[#38C695]' : 'bg-gray-200'} transition-all duration-300`} />
      </div>
      <span className={`mt-2 text-sm font-medium ${active ? 'text-[#38C695]' : completed ? 'text-gray-900' : 'text-gray-400'}`}>
        {label}
      </span>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#38C695] flex items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Reassurance Badge Component
const ReassuranceBadge = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#38C695]/10 border border-[#38C695]/30">
      <Icon className="h-5 w-5 text-[#38C695]" />
      <span className="text-sm font-medium text-white">{text}</span>
    </div>
  );
};

// Platform Card Component
const PlatformCard = ({ platform, selected, onSelect, disabled }) => {
  const Icon = platform.icon;
  
  return (
    <button
      onClick={() => !disabled && onSelect(platform.id)}
      disabled={disabled}
      className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left ${
        selected
          ? 'border-[#38C695] bg-[#38C695]/10'
          : disabled
          ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
          : 'border-gray-200 bg-white hover:border-[#38C695]/50'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            selected ? 'bg-[#38C695]' : 'bg-gray-100'
          }`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
            {!platform.available && (
              <Badge className="mt-1 bg-amber-500 text-white">Coming Soon</Badge>
            )}
          </div>
        </div>
        {selected && platform.available && (
          <Check className="h-6 w-6 text-[#38C695]" />
        )}
      </div>
      <p className="text-sm text-gray-600">{platform.description}</p>
    </button>
  );
};

// Summary Section Component
const SummarySection = ({ title, content, onEdit }) => {
  return (
    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={onEdit}
          className="text-[#38C695] hover:text-white hover:bg-[#38C695]"
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

// Main Configuration Page Component
function StoreBuilderConfigPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    storeName: '',
    niche: '',
    platform: 'shopify',
    email: '',
    password: '',
    agreedToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.storeName.trim()) {
      newErrors.storeName = 'Store name is required';
    }
    if (!formData.niche) {
      newErrors.niche = 'Please select a niche';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const handleNext = () => {
    let isValid = true;
    
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 3) {
      isValid = validateStep3();
    }
    
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setErrors({});
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep4()) {
      console.log('Form submitted:', formData);
      // Handle form submission
      alert('Store build initiated! We will contact you shortly.');
    }
  };

  // Update form data
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section — full width navy gradient */}
      <div className="w-full py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#38C695]/20 border border-[#38C695]/30">
            <Zap className="h-5 w-5 text-[#38C695]" />
            <span className="text-sm font-medium text-[#38C695]">AI-Powered Automation</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Shopify Store Builder
          </h1>

          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Launch your profitable online store in days, not months. Our AI technology handles everything from design to product import.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>

          {/* Reassurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {reassuranceBadges.map((badge, index) => (
              <ReassuranceBadge key={index} {...badge} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Progress Indicator */}
        <Card className="bg-white border-gray-200 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <ProgressStep 
                number={1} 
                label="Shop Info" 
                active={currentStep === 1} 
                completed={currentStep > 1} 
              />
              <ProgressStep 
                number={2} 
                label="Platform" 
                active={currentStep === 2} 
                completed={currentStep > 2} 
              />
              <ProgressStep 
                number={3} 
                label="Connect" 
                active={currentStep === 3} 
                completed={currentStep > 3} 
              />
              <ProgressStep 
                number={4} 
                label="Review" 
                active={currentStep === 4} 
                completed={false} 
              />
            </div>
            
            {/* Save Progress Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Shield className="h-4 w-4 text-[#38C695]" />
              <span>Your progress is automatically saved</span>
            </div>
          </CardContent>
        </Card>

        {/* Multi-Step Form */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shop Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop Information</h2>
                    <p className="text-gray-500">Let's start with the basics about your store</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeName" className="text-gray-700">
                      Preferred Store Name *
                    </Label>
                    <Input
                      id="storeName"
                      placeholder="e.g., TechTrends, FashionHub, HomeEssentials"
                      value={formData.storeName}
                      onChange={(e) => updateFormData('storeName', e.target.value)}
                      className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                        errors.storeName ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.storeName && (
                      <p className="text-sm text-red-400">{errors.storeName}</p>
                    )}
                    <p className="text-sm text-gray-400">
                      Choose a memorable name that reflects your brand. You can always change it later.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="niche" className="text-gray-700">
                      Select Your Niche *
                    </Label>
                    <select
                      id="niche"
                      value={formData.niche}
                      onChange={(e) => updateFormData('niche', e.target.value)}
                      className={`w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38C695] ${
                        errors.niche ? 'border-red-500' : ''
                      }`}
                    >
                      <option value="">Choose a niche...</option>
                      {niches.map((niche) => (
                        <option key={niche} value={niche}>{niche}</option>
                      ))}
                    </select>
                    {errors.niche && (
                      <p className="text-sm text-red-400">{errors.niche}</p>
                    )}
                    <p className="text-sm text-gray-400">
                      Select the category that best matches your target products. This helps us curate the perfect product selection.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#38C695]/10 border border-[#38C695]/30">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Pro Tip</h4>
                        <p className="text-sm text-gray-600">
                          Popular niches include Fashion & Apparel, Electronics & Gadgets, and Beauty & Cosmetics. Choose something you're passionate about!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Platform Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Platform</h2>
                    <p className="text-gray-500">Select the e-commerce platform for your store</p>
                  </div>

                  <div className="space-y-4">
                    {platforms.map((platform) => (
                      <PlatformCard
                        key={platform.id}
                        platform={platform}
                        selected={formData.platform === platform.id}
                        onSelect={(id) => updateFormData('platform', id)}
                        disabled={!platform.available}
                      />
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-[#38C695]/10 border border-[#38C695]/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Why Shopify?</h4>
                        <p className="text-sm text-gray-600">
                          Shopify is the industry-leading e-commerce platform with built-in payment processing, 24/7 support, and powerful apps to scale your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Connect Shopify */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Shopify Account</h2>
                    <p className="text-gray-500">Securely link your Shopify store for automated setup</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Shopify Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your-email@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">
                      Shopify Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => updateFormData('password', e.target.value)}
                        className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 pr-12 ${
                          errors.password ? 'border-red-500' : ''
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-400">{errors.password}</p>
                    )}
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Lock className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Secure Connection</h4>
                        <p className="text-sm text-gray-600">
                          Your credentials are encrypted using industry-standard SSL/TLS protocols and are never stored in plain text.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-[#38C695]" />
                        <span className="text-xs text-gray-400">SSL Secured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-[#38C695]" />
                        <span className="text-xs text-gray-400">256-bit Encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-[#38C695]" />
                        <span className="text-xs text-gray-400">API Integration</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#38C695]/10 border border-[#38C695]/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">What We'll Do</h4>
                        <p className="text-sm text-gray-600">
                          We'll use secure API access to configure your store theme, import products, set up payments, and optimize for conversions. You maintain full control.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Configuration</h2>
                    <p className="text-gray-500">Confirm your selections before we build your store</p>
                  </div>

                  <div className="space-y-4">
                    <SummarySection
                      title="Shop Information"
                      content={`Store Name: ${formData.storeName} | Niche: ${formData.niche}`}
                      onEdit={() => setCurrentStep(1)}
                    />
                    
                    <SummarySection
                      title="Platform"
                      content={`Shopify - Industry-leading e-commerce platform`}
                      onEdit={() => setCurrentStep(2)}
                    />
                    
                    <SummarySection
                      title="Shopify Connection"
                      content={`Email: ${formData.email} | Password: ${'•'.repeat(formData.password.length)}`}
                      onEdit={() => setCurrentStep(3)}
                    />
                  </div>

                  <div className="p-6 rounded-lg bg-[#38C695]/10 border border-[#38C695]/20">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                        <span>Our AI will analyze your niche and curate winning products</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                        <span>We'll design a conversion-optimized theme matching your brand</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                        <span>All payment gateways, shipping, and taxes will be pre-configured</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-[#38C695] flex-shrink-0 mt-0.5" />
                        <span>You'll receive a comprehensive onboarding guide and free consultation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <Checkbox
                        id="terms"
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => updateFormData('agreedToTerms', checked)}
                        className="mt-1"
                      />
                      <div>
                        <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                          I agree to the{' '}
                          <a href="#" className="text-[#38C695] hover:underline">Terms and Conditions</a>
                          {' '}and{' '}
                          <a href="#" className="text-[#38C695] hover:underline">Privacy Policy</a>.
                          I authorize Storebuilders.io to configure my Shopify store using the credentials provided.
                        </label>
                      </div>
                    </div>
                    {errors.terms && (
                      <p className="text-sm text-red-400">{errors.terms}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#38C695] hover:bg-[#2da97c] text-white"
                  >
                    Next Step
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#38C695] to-[#2a4d7a] hover:from-[#2da97c] hover:to-[#2a4d7a] text-white px-8"
                  >
                    <Store className="h-5 w-5 mr-2" />
                    Build My Store Now
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Trust Signals */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#38C695]" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-[#38C695]" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#38C695]" />
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreBuilderConfigPage;