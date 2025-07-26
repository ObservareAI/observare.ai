'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl">
        <div className={`text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-gradient">
            Your AI Agents Are Failing Silently.
            <br className="hidden md:block" />
            <span className="text-4xl md:text-6xl">We Make Them Scream.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in animation-delay-300">
            Cut debugging time by 87%. Ship AI features 3x faster. Sleep at night.
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-fade-in animation-delay-500">
            The same observability you have for code, now for your AI agents.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in animation-delay-600">
            <div className="w-16 h-1 bg-blue-400 animate-pulse"></div>
            <div className="w-16 h-1 bg-emerald-400 animate-pulse animation-delay-300"></div>
            <div className="w-16 h-1 bg-purple-400 animate-pulse animation-delay-600"></div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative w-full bg-gray-900/50 border-y border-gray-800">
        <div className="px-6 py-16 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Every Hour Your Agents Run Blind Costs You:
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-200">
              (And you don&apos;t even know it)
            </p>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="animate-slide-up">
              <p className="text-gray-200 mb-4">
                While you ship that new agent feature, <span className="text-red-400 font-semibold">$12,000 disappears into retry loops</span> you&apos;ll never see. 
                Your infrastructure burns through 30% of compute on failed executions that die silently in the dark.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <p className="text-gray-200 mb-4">
                Your best engineers waste <span className="text-orange-400 font-semibold">40+ hours debugging &quot;it worked yesterday&quot;</span> with zero visibility. 
                Three senior developers who should be shipping become full-time detectives, hunting ghosts in black boxes.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
              <p className="text-gray-200 mb-4">
                Enterprise customers demand <span className="text-purple-400 font-semibold">99.9% reliability you can&apos;t guarantee</span>. 
                Your team ships 70% slower than competitors who can actually see what their agents are doing.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "600ms" }}>
              <p className="text-gray-300 text-xl font-medium border-l-4 border-blue-400 pl-6 mt-8">
                Every hour this continues, the gap widens. The bills pile up. The technical debt compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative px-6 py-16 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Turn Your AI Black Box Into Glass
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in animation-delay-200">
            Every problem above has a direct solution
          </p>
        </div>

        <div className="space-y-16">
          {/* Problem-Solution Pair 1: API Costs */}
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-slide-up">
            <div>
              <h3 className="text-lg font-semibold text-red-300 mb-2">The Problem</h3>
              <p className="text-gray-200 mb-2">$12,000/month wasted on API calls from retry loops you can&apos;t see</p>
              <p className="text-gray-400 text-sm">Teams waste 30% of compute on failed executions they never detect</p>
            </div>
            <div className="border-l-4 border-emerald-400 pl-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Observare Solution</h3>
              <p className="text-gray-200 mb-2">Cut API costs by 60% with automatic loop detection and usage analytics</p>
              <p className="text-gray-400 text-sm">Real-time alerts when costs spike. See exactly where every token goes.</p>
            </div>
          </div>

          {/* Problem-Solution Pair 2: Debugging Time */}
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="text-lg font-semibold text-red-300 mb-2">The Problem</h3>
              <p className="text-gray-200 mb-2">40+ hours debugging &quot;it worked yesterday&quot; with zero visibility</p>
              <p className="text-gray-400 text-sm">3 senior engineers stuck playing detective instead of shipping</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Observare Solution</h3>
              <p className="text-gray-200 mb-2">Debug 87% faster with execution replay and live inspection</p>
              <p className="text-gray-400 text-sm">See every decision, tool call, and state change. Fix bugs in minutes.</p>
            </div>
          </div>

          {/* Problem-Solution Pair 3: Customer Reliability */}
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div>
              <h3 className="text-lg font-semibold text-red-300 mb-2">The Problem</h3>
              <p className="text-gray-200 mb-2">Enterprise customers demand 99.9% reliability you can&apos;t guarantee</p>
              <p className="text-gray-400 text-sm">Ship 70% slower than teams with proper observability</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Observare Solution</h3>
              <p className="text-gray-200 mb-2">Prevent failures before production with smart alerts and monitoring</p>
              <p className="text-gray-400 text-sm">Ship 3x more features. Get alerts before your customers do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            We&apos;re Onboarding 10 Design Partners This Month
          </h2>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">
            Get 6 months free. White-glove onboarding. Direct access to our team.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            7 spots left. First call gets priority.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => {
                console.log('Claim Your Spot clicked');
                // Track button click for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Claim Your Spot'
                  });
                }
                // Open waiting list form
                window.open('https://tally.so/r/mKKoaA', '_blank');
              }}
              aria-label="Join the waiting list for Observare design partners"
              className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="relative z-10">Claim Your Spot (7 Left)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}