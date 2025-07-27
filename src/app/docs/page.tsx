'use client';

export default function Docs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="px-4 sm:px-6 py-16 sm:py-24 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Observare SDK Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive telemetry for LangChain agents. View all your agent activity in the Observare dashboard.
          </p>
          
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Quick Start</h2>
          
          <div className="space-y-8">
            {/* Prerequisites */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Prerequisites</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  You'll need an Observare API key to use this SDK. 
                  <button 
                    onClick={() => {
                      window.location.href = 'mailto:bseager21@gmail.com?subject=API Key Request - Observare SDK&body=Hi,%0D%0A%0D%0AI would like to request an API key for the Observare SDK.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0A%0D%0AThanks!';
                    }}
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    Contact us
                  </button> to obtain your API key.
                </p>
                <p>
                  <strong className="text-gray-300">Supported frameworks:</strong> LangChain with OpenAI as the LLM provider.
                </p>
              </div>
            </div>

            {/* Installation */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">1. Installation</h3>
              <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">pip install observare-sdk</code>
              </div>
            </div>

            {/* Integration */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">2. Integration</h3>
              <p className="text-gray-400 mb-4">Initialize the telemetry handler and add it to both your LLM and AgentExecutor:</p>
              <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-gray-300">
{`from observare_sdk import AutoTelemetryHandler
from langchain.agents import AgentExecutor
from langchain_openai import ChatOpenAI

# Initialize telemetry handler
handler = AutoTelemetryHandler(api_key="your_observare_api_key")

# Add handler to your LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    callbacks=[handler]
)

# Add handler to your AgentExecutor
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler]
)

# Use your agents normally
result = executor.invoke({"input": "What's the weather?"})`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">What Gets Captured</h2>
          <p className="text-gray-400 mb-8 text-center">All telemetry data automatically appears in your Observare dashboard for analysis and monitoring.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">🎯 Agent Operations</h3>
              <p className="text-gray-400">Start, completion, errors with full timing</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">🔧 Tool Executions</h3>
              <p className="text-gray-400">Which tools are called, inputs/outputs, performance</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">💬 LLM Calls</h3>
              <p className="text-gray-400">Model usage, token consumption, costs, response times</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">📊 Performance Metrics</h3>
              <p className="text-gray-400">Success rates, average response times, error rates</p>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="text-center">
          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">
              Install the SDK and add observability to your AI agents in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => {
                  window.location.href = 'mailto:bseager21@gmail.com?subject=Demo Request - Observare SDK&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of the Observare SDK.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!';
                }}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => {
                  window.open('https://tally.so/r/mKKoaA', '_blank');
                }}
                className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}