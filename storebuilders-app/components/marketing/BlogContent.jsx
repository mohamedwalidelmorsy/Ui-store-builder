'use client'

import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  Search, 
  TrendingUp, 
  Zap, 
  Target, 
  Mail, 
  ArrowRight,
  Sparkles,
  Package,
  Brain
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Button,
  Input,
  Badge
} from '@/components/ui';

const StorebuildersBookOpen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI', 'Dropshipping', 'Strategy', 'Tools'];
  
  const popularTags = [
    'Machine Learning',
    'Automation',
    'E-commerce',
    'Product Research',
    'Analytics',
    'Marketing',
    'Inventory',
    'Customer Service'
  ];

  const articles = [
    {
      id: 1,
      title: 'AI Product Research for Dropshipping',
      excerpt: 'Discover how artificial intelligence is revolutionizing product research, helping dropshippers identify winning products faster and more accurately than ever before.',
      category: 'AI',
      date: 'Jan 8, 2026',
      readTime: '5 min read',
      author: 'Sarah Chen',
      image: 'https://placehold.co/800x500/38C695/ffffff?text=AI+Product+Research'
    },
    {
      id: 2,
      title: 'Automated Inventory Management with AI',
      excerpt: 'Learn how AI-powered inventory systems can predict demand, optimize stock levels, and reduce costs while improving customer satisfaction.',
      category: 'Tools',
      date: 'Jan 6, 2026',
      readTime: '7 min read',
      author: 'Michael Torres',
      image: 'https://placehold.co/800x500/1D3A63/ffffff?text=Inventory+Management'
    },
    {
      id: 3,
      title: 'Dynamic Pricing Strategies Using Machine Learning',
      excerpt: 'Explore how machine learning algorithms analyze market trends and competitor pricing to automatically adjust your prices for maximum profitability.',
      category: 'Strategy',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      author: 'Emily Rodriguez',
      image: 'https://placehold.co/800x500/38C695/ffffff?text=Dynamic+Pricing'
    },
    {
      id: 4,
      title: 'AI-Powered Customer Service for E-commerce',
      excerpt: 'Transform your customer support with AI chatbots and automated responses that provide instant, accurate assistance 24/7.',
      category: 'AI',
      date: 'Jan 3, 2026',
      readTime: '5 min read',
      author: 'David Kim',
      image: 'https://placehold.co/800x500/1D3A63/ffffff?text=Customer+Service'
    },
    {
      id: 5,
      title: 'Predictive Analytics in Dropshipping',
      excerpt: 'Harness the power of predictive analytics to forecast trends, anticipate customer needs, and stay ahead of market changes.',
      category: 'Strategy',
      date: 'Dec 30, 2025',
      readTime: '8 min read',
      author: 'Lisa Anderson',
      image: 'https://placehold.co/800x500/38C695/ffffff?text=Predictive+Analytics'
    },
    {
      id: 6,
      title: 'Content Generation with AI for Product Descriptions',
      excerpt: 'Save hours of work by using AI to create compelling, SEO-optimized product descriptions that convert browsers into buyers.',
      category: 'Tools',
      date: 'Dec 28, 2025',
      readTime: '4 min read',
      author: 'James Wilson',
      image: 'https://placehold.co/800x500/1D3A63/ffffff?text=Content+Generation'
    },
    {
      id: 7,
      title: 'AI-Driven Marketing Automation',
      excerpt: 'Automate your marketing campaigns with AI that personalizes messaging, optimizes send times, and maximizes engagement rates.',
      category: 'AI',
      date: 'Dec 26, 2025',
      readTime: '6 min read',
      author: 'Rachel Martinez',
      image: 'https://placehold.co/800x500/38C695/ffffff?text=Marketing+Automation'
    },
    {
      id: 8,
      title: 'Supplier Selection Using AI Analytics',
      excerpt: 'Make data-driven decisions when choosing suppliers by leveraging AI to analyze reliability, pricing, and quality metrics.',
      category: 'Dropshipping',
      date: 'Dec 24, 2025',
      readTime: '5 min read',
      author: 'Alex Thompson',
      image: 'https://placehold.co/800x500/1D3A63/ffffff?text=Supplier+Selection'
    },
    {
      id: 9,
      title: 'Fraud Detection in Dropshipping Stores',
      excerpt: 'Protect your business from fraudulent orders and chargebacks using AI-powered fraud detection systems that learn and adapt.',
      category: 'Tools',
      date: 'Dec 22, 2025',
      readTime: '7 min read',
      author: 'Sophie Brown',
      image: 'https://placehold.co/800x500/38C695/ffffff?text=Fraud+Detection'
    },
    {
      id: 10,
      title: 'Future Trends: AI and E-commerce in 2026',
      excerpt: 'Get ahead of the curve by understanding the emerging AI technologies that will shape the future of e-commerce and dropshipping.',
      category: 'Strategy',
      date: 'Dec 20, 2025',
      readTime: '9 min read',
      author: 'Mark Johnson',
      image: 'https://placehold.co/800x500/1D3A63/ffffff?text=Future+Trends'
    }
  ];

  const recentArticles = articles.slice(0, 4);

  const featuredArticle = articles[0];

  const getCategoryColor = (category) => {
    const colors = {
      AI: 'bg-[#38C695] text-white',
      Dropshipping: 'bg-blue-500 text-white',
      Strategy: 'bg-purple-500 text-white',
      Tools: 'bg-orange-500 text-white'
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1D3A63] to-[#2a4d7a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-10 h-10" />
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-4">AI & Dropshipping Insights</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Stay ahead of the curve with expert advice on AI-powered e-commerce strategies
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 rounded-lg text-gray-900 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D3A63] mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-[#38C695]" />
                Featured Article
              </h2>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(featuredArticle.category)}`}>
                    {featuredArticle.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#1D3A63] mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button className="bg-[#38C695] hover:bg-[#2da97c] text-white">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div>
              <h2 className="text-3xl font-bold text-[#1D3A63] mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card 
                    key={article.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1D3A63] mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <button className="text-[#38C695] hover:text-[#2da97c] font-semibold text-sm flex items-center gap-1">
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Categories Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#38C695]" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-[#38C695] hover:bg-[#2da97c]" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#38C695]" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="cursor-pointer hover:bg-[#38C695] hover:text-white hover:border-[#38C695] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-[#38C695] to-[#2da97c] text-white">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Newsletter
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Get weekly insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white text-gray-900"
                    />
                    <Button className="w-full bg-[#1D3A63] hover:bg-[#1D3A63]/90 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#38C695]" />
                    Recent Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentArticles.map((article) => (
                      <div 
                        key={article.id}
                        className="pb-4 border-b border-gray-200 last:border-0 last:pb-0 cursor-pointer hover:opacity-75 transition-opacity"
                      >
                        <h4 className="font-semibold text-[#1D3A63] text-sm mb-2 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Newsletter CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#1D3A63] to-[#38C695] text-white overflow-hidden">
            <div className="relative p-12">
              <div className="max-w-3xl mx-auto text-center">
                <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-4xl font-bold mb-4">
                  Never Miss an Update
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Subscribe to our newsletter and get the latest AI and dropshipping insights delivered weekly
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white text-gray-900 h-12 text-lg"
                  />
                  <Button className="bg-[#38C695] hover:bg-[#2da97c] text-white h-12 px-8 text-lg font-semibold">
                    Subscribe Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-white/80 mt-4">
                  Join 10,000+ entrepreneurs growing their stores with AI
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1D3A63] text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-6 h-6 text-[#38C695]" />
            <span className="text-2xl font-bold">Storebuilders.io</span>
          </div>
          <p className="text-white/80">
            Empowering entrepreneurs with AI-driven dropshipping solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StorebuildersBookOpen;