'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
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
          <div className="hidden md:flex items-center space-x-8">
            {/* Add navigation links here as you create more pages
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            */}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button - ready for future implementation */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}