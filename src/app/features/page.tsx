'use client';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Real-time AI Safety & Compliance
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While competitors offer post-mortem analysis, Observare prevents failures before they happen. 
            Protect your agents, your users, and your business—in real-time.
          </p>
        </div>
      </section>

      {/* Core Differentiators Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="px-4 sm:px-6 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Observare is Different
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-red-400 mb-6">Traditional Observability</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-300">Analyzes failures after they happen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-300">PII exposure logged for post-analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-300">Compliance violations discovered in audits</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <p className="text-gray-300">Separate evaluation service adds latency</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Observare Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Prevents failures during execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">PII redacted before reaching LLMs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Compliance enforced in real-time</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Inline SDK with minimal overhead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16">
        <div className="px-4 sm:px-6 mx-auto max-w-6xl">
          
          {/* Real-time Safety Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-time Safety & Protection</h2>
              <p className="text-xl text-gray-400">Stop problems before they happen</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant PII Redaction</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Automatically detect and redact SSNs, credit cards, medical records, and other sensitive data before it reaches any LLM.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>GDPR & HIPAA compliant by default</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Custom pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Zero-latency inline processing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Safety Filtering</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Block harmful, biased, or inappropriate content in real-time with customizable safety policies.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Toxicity & bias detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Industry-specific guardrails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Custom safety policies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prompt Injection Defense</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Detect and block malicious prompt injections, jailbreak attempts, and security exploits.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Real-time threat detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Automatic response blocking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Security incident logging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance & Governance Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance & Governance</h2>
              <p className="text-xl text-gray-400">Built for regulated industries</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Audit Trail Generation</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Immutable logs of every agent decision, interaction, and data access for compliance audits.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>Tamper-proof logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>Automated report generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>Regulatory compliance exports</span>
                  </li>
                </ul>
              </div>


              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bias & Fairness Monitoring</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Detect and alert on discriminatory patterns in agent decisions across protected categories.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>Demographic parity checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>Decision pattern analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>Compliance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Observability Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Deep Observability</h2>
              <p className="text-xl text-gray-400">See everything, understand everything</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Analytics</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Track API costs per agent, customer, and feature with automatic anomaly detection.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>Token usage tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>Cost spike alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>Budget enforcement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Real-time metrics on latency, success rates, and resource usage with intelligent alerting.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5">•</span>
                    <span>P95/P99 latency tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5">•</span>
                    <span>Error rate monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5">•</span>
                    <span>SLA compliance alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple Integration</h2>
              <p className="text-xl text-gray-400">Embedded wrapper that protects your LLM calls</p>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-4 sm:p-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">4 Simple Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-semibold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">Install the SDK</p>
                        <pre className="bg-gray-900 rounded-lg p-3 mt-2 text-xs sm:text-sm overflow-x-auto">
                          <code className="text-gray-300">pip install observare-sdk</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-semibold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">
                          Get your API key from{' '}
                          <a 
                            href="mailto:bseager21@gmail.com?subject=Observare%20API%20Key%20Request&body=Hi%20Brandon%2C%0A%0AI%20would%20like%20to%20request%20an%20API%20key%20for%20Observare.%0A%0ACompany%3A%0AUse%20Case%3A%0A%0AThanks!"
                            className="text-blue-400 hover:text-blue-300 underline transition-colors"
                          >
                            Observare
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-semibold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">Wrap your LLM calls</p>
                        <pre className="bg-gray-900 rounded-lg p-3 mt-2 text-xs sm:text-sm overflow-x-auto">
                          <code className="text-gray-300 whitespace-pre-wrap break-words">{`# Before
chat = ChatOpenAI()

# After
from observare import ObservareChat
chat = ObservareChat(
    ChatOpenAI(), 
    api_key="your-api-key"
)`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 font-semibold">✓</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">Done! ✨ Your agents are now protected</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Currently Supported</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-green-700/50">
                        <p className="text-green-400 font-medium">OpenAI</p>
                        <p className="text-sm text-gray-400 mt-1">Full support for chat completions</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-green-700/50">
                        <p className="text-green-400 font-medium">LangChain</p>
                        <p className="text-sm text-gray-400 mt-1">OpenAI provider integration</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-400">Coming Soon</h3>
                    <div className="space-y-3 opacity-60">
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-300 font-medium">Anthropic</p>
                        <p className="text-sm text-gray-500 mt-1">Claude integration</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-300 font-medium">Azure OpenAI</p>
                        <p className="text-sm text-gray-500 mt-1">Enterprise support</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <span className="font-medium">How it works:</span> Observare acts as an inline wrapper that intercepts your LLM calls, 
                    applies safety filters and compliance checks in real-time, then forwards the protected request to your provider.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl text-center bg-gray-800/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Protect Your AI Agents?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join forward-thinking teams who ship faster with real-time AI safety and compliance.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => {
              window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of Observare.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
            }}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Book a Demo
          </button>
          <button 
            onClick={() => {
              window.open('https://tally.so/r/mKKoaA', '_blank');
            }}
            className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </section>

    </div>
  );
}