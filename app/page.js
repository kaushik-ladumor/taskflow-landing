"use client";

import { useState } from "react";
import {
  Check,
  Zap,
  Shield,
  Users,
  Menu,
  X,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">TaskFlow</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Pricing
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-600 hover:text-blue-600 font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block text-gray-600 hover:text-blue-600 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block text-gray-600 hover:text-blue-600 font-medium"
              >
                Pricing
              </a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles size={16} />
            Join 10,000+ teams worldwide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Project Management
            <span className="block text-blue-600 mt-2">For Modern Teams</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize tasks, collaborate with your team, and deliver projects
            faster. Everything you need in one simple platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-blue-600">
              View Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Check className="text-green-600" size={16} />
              No credit card required
            </div>
            <div className="flex items-center gap-1">
              <Check className="text-green-600" size={16} />
              Free 14-day trial
            </div>
            <div className="flex items-center gap-1">
              <Check className="text-green-600" size={16} />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Everything Your Team Needs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful features that help your team work better together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Lightning-fast performance with real-time updates and seamless
                collaboration.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security to keep your data safe and protected.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Work together seamlessly with built-in chat and file sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Loved by Teams Everywhere
            </h2>
            <p className="text-gray-600">
              See what our customers say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F59E0B"
                    className="text-amber-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "TaskFlow made our team 3x more productive. The simple interface
                means everyone actually uses it!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sarah Mitchell
                  </h4>
                  <p className="text-gray-500 text-sm">Product Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F59E0B"
                    className="text-amber-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Finally, a tool that's actually easy to use. Our team was up
                and running in just one day."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">James Davis</h4>
                  <p className="text-gray-500 text-sm">Startup Founder</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F59E0B"
                    className="text-amber-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The collaboration features are amazing. Our design and dev
                teams finally work together smoothly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  AL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Anna Lee</h4>
                  <p className="text-gray-500 text-sm">Design Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">Start free and upgrade as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 text-sm mb-4">
                For small teams getting started
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Up to 5 team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Basic task management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">1GB storage</span>
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:border-blue-600">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-lg p-6 bg-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 text-sm mb-4">For growing teams</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Up to 20 team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Advanced features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">50GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For large organizations
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Unlimited team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">All features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">Unlimited storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  <span className="text-gray-600">24/7 support</span>
                </li>
              </ul>
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:border-blue-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400 text-sm">
                Simple project management for modern teams. Work better
                together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 TaskFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
