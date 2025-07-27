'use client';


export default function Home() {

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 block sm:inline sm:whitespace-nowrap">
              <span className="sm:hidden">AI Agents Fail Silently.</span>
              <span className="hidden sm:inline">Your AI Agents Are Failing Silently.</span>
            </span>
            <br className="hidden md:block" />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 block sm:inline">
              <span className="sm:hidden">We Make Them Scream.</span>
              <span className="hidden sm:inline">We Make Them Scream.</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Cut debugging time significantly. Ship AI features 3x faster. Sleep at night.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Complete visibility and control over your AI agents in production.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 px-4">
            <button 
              onClick={() => {
                console.log('Book a Demo clicked');
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Book a Demo - Hero'
                  });
                }
                window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg text-center"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => {
                console.log('Get Early Access clicked');
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Get Early Access - Hero'
                  });
                }
                window.open('https://tally.so/r/mKKoaA', '_blank');
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 sm:py-24 bg-gray-800/20">
        <div className="px-4 sm:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Every Hour Your Agents Run Blind Costs You:
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              (And you don&apos;t even know it)
            </p>
          </div>

          <div className="space-y-12 text-lg leading-relaxed">
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

      {/* Compliance & Governance Section */}
      <section className="relative w-full bg-gray-800/20 border-y border-gray-700">
        <div className="px-6 py-16 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
              AI Agent Compliance & Governance
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-200">
              Because your agents need to follow the rules, not just run fast
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 animate-slide-up">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Healthcare & HIPAA</h3>
              <p className="text-gray-400 text-sm">Audit every patient data interaction. Ensure agents follow medical protocols and privacy regulations.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Finance & SOX</h3>
              <p className="text-gray-400 text-sm">Track financial decisions, detect bias in lending, maintain immutable audit trails for compliance.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Government & FedRAMP</h3>
              <p className="text-gray-400 text-sm">Meet federal security standards. Generate automated compliance reports for regulatory bodies.</p>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Built for Compliance from Day One</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm"><span className="text-blue-400 font-medium">Real-time compliance tracking</span> across all agent decisions and interactions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm"><span className="text-blue-400 font-medium">Bias detection</span> and discriminatory pattern alerts</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm"><span className="text-blue-400 font-medium">Automated audit reports</span> ready for regulators and compliance teams</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm"><span className="text-blue-400 font-medium">Immutable audit trails</span> for complete decision accountability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to See What Your AI Agents Are Really Doing?
          </h2>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">
            Join developers who are building more reliable AI systems with complete visibility.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Get early access and be the first to know when we launch.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                console.log('Book a Demo clicked');
                // Track button click for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Book a Demo'
                  });
                }
                // Open email client
                window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
              }}
              aria-label="Book a demo with Observare"
              className="group relative px-8 py-4 overflow-hidden rounded-xl border border-gray-600 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-500 hover:bg-gray-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="relative z-10">Book a Demo</span>
            </button>
            <button 
              onClick={() => {
                console.log('Get Early Access clicked');
                // Track button click for analytics
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Get Early Access'
                  });
                }
                // Open waiting list form
                window.open('https://tally.so/r/mKKoaA', '_blank');
              }}
              aria-label="Get early access to Observare"
              className="group relative px-8 py-4 overflow-hidden rounded-xl bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="relative z-10">Get Early Access</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/30 border-t border-gray-700">
        <div className="px-4 sm:px-6 py-12 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-xl font-semibold text-white">Observare</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI Agent observability and compliance platform for regulated industries.
              </p>
              <div className="text-gray-400 text-sm">
                <p>Nashville, TN</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contact</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => {
                    window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Product</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => {
                    window.open('https://tally.so/r/mKKoaA', '_blank');
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Early Access
                </button>
                <span className="block text-gray-500">Compliance & Governance</span>
                <span className="block text-gray-500">Agent Monitoring</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Observare. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 sm:mt-0">
              Made in Nashville, TN
            </p>
          </div>
        </div>
      </footer>

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