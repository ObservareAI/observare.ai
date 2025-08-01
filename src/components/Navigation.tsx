'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/images/logo/ObservareLogo.png" 
              alt="Observare Logo" 
              width={40} 
              height={40}
              className="transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
              Observare
            </span>
          </Link>

          {/* Navigation Links - Ready for future pages */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            {/* Add more navigation links here as you create more pages
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            */}
            <button 
              onClick={() => {
                console.log('Book a Demo (nav) clicked');
                // Track button click for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Book a Demo - Navigation'
                  });
                }
                // Open email client
                window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
              }}
              aria-label="Book a demo with Observare"
              className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => {
                console.log('Get Early Access (nav) clicked');
                // Track button click for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Get Early Access - Navigation'
                  });
                }
                // Open waiting list form
                window.open('https://tally.so/r/mKKoaA', '_blank');
              }}
              aria-label="Get early access to Observare"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <Link 
                href="/features" 
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/docs" 
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <div className="pt-4 space-y-3 border-t border-gray-700">
                <button 
                  onClick={() => {
                    console.log('Book a Demo (mobile nav) clicked');
                    if (typeof window !== 'undefined' && 'gtag' in window) {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (window as any).gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'Book a Demo - Mobile Navigation'
                      });
                    }
                    window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-colors text-center"
                >
                  Book a Demo
                </button>
                <button 
                  onClick={() => {
                    console.log('Get Early Access (mobile nav) clicked');
                    if (typeof window !== 'undefined' && 'gtag' in window) {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (window as any).gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'Get Early Access - Mobile Navigation'
                      });
                    }
                    window.open('https://tally.so/r/mKKoaA', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}