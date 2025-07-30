'use client';

export default function Footer() {
  return (
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
  );
}