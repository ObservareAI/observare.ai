"use client";

import { useState } from "react";

export default function Docs() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAIFriendlyDocs = () => {
    const aiDocs = `# Observare SDK Documentation

## Overview
Comprehensive telemetry for LangChain agents. View all your agent activity in the Observare dashboard.

## Before You Begin
- **What you will do:** Add comprehensive telemetry to your LangChain agents with just 3 lines of code.
- **Time required:** Less than 5 minutes
- **What you will get:** Real-time visibility into agent execution, tool usage, LLM calls, and performance metrics.

## Prerequisites
- Observare API key (contact bseager21@gmail.com for API key request)
- Supported frameworks: LangChain with OpenAI as the LLM provider

## Installation
\`\`\`bash
pip install observare-sdk
\`\`\`

## Integration Steps

### Step 1: Initialize the Telemetry Handler
Import the SDK and initialize it with your API key:
\`\`\`python
from observare_sdk import AutoTelemetryHandler

handler = AutoTelemetryHandler(api_key="your_observare_api_key")
\`\`\`

### Step 2: Add Handler to Your LLM
Create your LLM instance and add the telemetry handler to the callbacks parameter. Note that streaming must be enabled:
\`\`\`python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)
\`\`\`

### Step 3: Add Handler to Your Agent
Create your agent and executor, adding the same handler to the executor callbacks:
\`\`\`python
from langchain.agents import AgentExecutor, create_react_agent

agent = create_react_agent(llm, tools, prompt)

executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True
)
\`\`\`

### Step 4: Use Your Agent Normally
Your agent will now automatically send telemetry data to Observare when invoked:
\`\`\`python
result = executor.invoke({"input": "What is the weather in San Francisco?"})
print(result["output"])
\`\`\`

## Complete Example
\`\`\`python
import os
from observare_sdk import AutoTelemetryHandler
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_react_agent, Tool
from langchain.prompts import PromptTemplate
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_community.utilities import WikipediaAPIWrapper

handler = AutoTelemetryHandler(
    api_key=os.getenv("OBSERVARE_API_KEY")
)

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)

search = DuckDuckGoSearchRun()
wikipedia = WikipediaAPIWrapper()

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the web for current information"
    ),
    Tool(
        name="Wikipedia",
        func=wikipedia.run,
        description="Get information from Wikipedia"
    )
]

prompt = PromptTemplate.from_template("""
You are a helpful AI assistant with access to search and Wikipedia.

You have access to the following tools:
{tools}

Use the following format:
Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Question: {input}
{agent_scratchpad}
""")

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True,
    max_iterations=5
)

if __name__ == "__main__":
    result = executor.invoke({
        "input": "What are the latest developments in quantum computing?"
    })
    
    print("\\nFinal Answer:")
    print(result["output"])
\`\`\`

## What Gets Captured
- **Agent Operations:** Start, completion, errors with full timing
- **Tool Executions:** Which tools are called, inputs/outputs, performance
- **LLM Calls:** Model usage, token consumption, costs, response times
- **Performance Metrics:** Success rates, average response times, error rates

All telemetry data automatically appears in your Observare dashboard for analysis and monitoring.`;

    copyToClipboard(aiDocs, "ai-docs");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="px-4 sm:px-6 py-16 sm:py-24 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Observare SDK Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive telemetry for LangChain agents. View all your agent
            activity in the Observare dashboard.
          </p>
        </div>

        {/* Before You Begin */}
        <section className="mb-12">
          <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Before You Begin
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>What you will do:</strong> Add comprehensive telemetry to
                your LangChain agents with just 3 lines of code.
              </p>
              <p>
                <strong>Time required:</strong> Less than 5 minutes
              </p>
              <p>
                <strong>What you will get:</strong> Real-time visibility into
                agent execution, tool usage, LLM calls, and performance metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-white">Quick Start</h2>
            <button
              onClick={copyAIFriendlyDocs}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {copiedId === "ai-docs" ? "Copied for AI!" : "Copy for AI"}
            </button>
          </div>
          <div className="space-y-8">
            {/* Prerequisites */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Prerequisites
              </h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  You&apos;ll need an Observare API key to use this SDK.
                  <button
                    onClick={() => {
                      window.location.href =
                        "mailto:bseager21@gmail.com?subject=API Key Request - Observare SDK&body=Hi,%0D%0A%0D%0AI would like to request an API key for the Observare SDK.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0A%0D%0AThanks!";
                    }}
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    Contact us
                  </button>{" "}
                  to obtain your API key.
                </p>
                <p>
                  <strong className="text-gray-300">
                    Supported frameworks:
                  </strong>{" "}
                  LangChain with OpenAI as the LLM provider.
                </p>
              </div>
            </div>

            {/* Installation */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Installation
              </h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                <button
                  onClick={() =>
                    copyToClipboard("pip install observare-sdk", "install")
                  }
                  className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                >
                  {copiedId === "install" ? "Copied!" : "Copy"}
                </button>
                <pre className="text-sm p-4">
                  <code className="text-green-400">
                    pip install observare-sdk
                  </code>
                </pre>
              </div>
            </div>

            {/* Integration */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Integration
              </h3>
              <p className="text-gray-400 mb-4">
                Follow these steps to integrate Observare into your LangChain
                application:
              </p>

              {/* Step 2a: Initialize Handler */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gray-300">
                  Step 1: Initialize the Telemetry Handler
                </h4>
                <p className="text-gray-400 mb-3 text-sm">
                  Import the SDK and initialize it with your API key:
                </p>
                <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `from observare_sdk import AutoTelemetryHandler

handler = AutoTelemetryHandler(api_key="your_observare_api_key")`,
                        "step1"
                      )
                    }
                    className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                  >
                    {copiedId === "step1" ? "Copied!" : "Copy"}
                  </button>
                  <pre className="text-sm p-4">
                    <code className="text-gray-300">
                      {`from observare_sdk import AutoTelemetryHandler

handler = AutoTelemetryHandler(api_key="your_observare_api_key")`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Step 2b: Configure LLM */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gray-300">
                  Step 2: Add Handler to Your LLM
                </h4>
                <p className="text-gray-400 mb-3 text-sm">
                  Create your LLM instance and add the telemetry handler to the
                  callbacks parameter. Note that streaming must be enabled:
                </p>
                <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)`,
                        "step2"
                      )
                    }
                    className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                  >
                    {copiedId === "step2" ? "Copied!" : "Copy"}
                  </button>
                  <pre className="text-sm p-4">
                    <code className="text-gray-300">
                      {`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Step 2c: Configure Agent */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gray-300">
                  Step 3: Add Handler to Your Agent
                </h4>
                <p className="text-gray-400 mb-3 text-sm">Import the agent modules and create your agent and executor, adding the same handler to the executor callbacks:</p>
                <div className="mb-3 text-xs text-gray-500 font-mono">
                  from langchain.agents import AgentExecutor, create_react_agent
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `agent = create_react_agent(llm, tools, prompt)

executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True
)`,
                        "step3"
                      )
                    }
                    className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                  >
                    {copiedId === "step3" ? "Copied!" : "Copy"}
                  </button>
                  <pre className="text-sm p-4">
                    <code className="text-gray-300">
                      {`agent = create_react_agent(llm, tools, prompt)

executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True
)`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Step 2d: Use Normally */}
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-300">
                  Step 4: Use Your Agent Normally
                </h4>
                <p className="text-gray-400 mb-3 text-sm">
                  Your agent will now automatically send telemetry data to
                  Observare when invoked:
                </p>
                <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `result = executor.invoke({"input": "What is the weather in San Francisco?"})
print(result["output"])`,
                        "step4"
                      )
                    }
                    className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                  >
                    {copiedId === "step4" ? "Copied!" : "Copy"}
                  </button>
                  <pre className="text-sm p-4">
                    <code className="text-gray-300">
                      {`result = executor.invoke({"input": "What is the weather in San Francisco?"})
print(result["output"])`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Complete Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Complete Integration Example
          </h2>
          <p className="text-gray-400 mb-3">
            Below is a complete example showing how to integrate Observare
            telemetry with a LangChain agent that has access to search and
            Wikipedia tools:
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-gray-400 text-sm">This example demonstrates:</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-4">
              <li>
                Initializing the telemetry handler with an API key from
                environment variables
              </li>
              <li>
                Creating an LLM and agent executor with telemetry callbacks
              </li>
              <li>Setting up tools for web search and Wikipedia access</li>
              <li>
                Using a ReAct prompt template for structured agent reasoning
              </li>
              <li>
                Invoking the agent and automatically sending telemetry to
                Observare
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden relative">
            <button
              onClick={() =>
                copyToClipboard(
                  `import os
from observare_sdk import AutoTelemetryHandler
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_react_agent, Tool
from langchain.prompts import PromptTemplate
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_community.utilities import WikipediaAPIWrapper

handler = AutoTelemetryHandler(
    api_key=os.getenv("OBSERVARE_API_KEY")
)

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)

search = DuckDuckGoSearchRun()
wikipedia = WikipediaAPIWrapper()

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the web for current information"
    ),
    Tool(
        name="Wikipedia",
        func=wikipedia.run,
        description="Get information from Wikipedia"
    )
]

prompt = PromptTemplate.from_template("""
You are a helpful AI assistant with access to search and Wikipedia.

You have access to the following tools:
{tools}

Use the following format:
Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Question: {input}
{agent_scratchpad}
""")

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True,
    max_iterations=5
)

if __name__ == "__main__":
    result = executor.invoke({
        "input": "What are the latest developments in quantum computing?"
    })
    
    print("\\nFinal Answer:")
    print(result["output"])`,
                  "complete-example"
                )
              }
              className="absolute top-3 right-3 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
            >
              {copiedId === "complete-example" ? "Copied!" : "Copy"}
            </button>
            <pre className="text-sm p-6">
              <code className="text-gray-300">
                {`import os
from observare_sdk import AutoTelemetryHandler
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_react_agent, Tool
from langchain.prompts import PromptTemplate
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_community.utilities import WikipediaAPIWrapper

handler = AutoTelemetryHandler(
    api_key=os.getenv("OBSERVARE_API_KEY")
)

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0,
    streaming=True,
    callbacks=[handler]
)

search = DuckDuckGoSearchRun()
wikipedia = WikipediaAPIWrapper()

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the web for current information"
    ),
    Tool(
        name="Wikipedia",
        func=wikipedia.run,
        description="Get information from Wikipedia"
    )
]

prompt = PromptTemplate.from_template("""
You are a helpful AI assistant with access to search and Wikipedia.

You have access to the following tools:
{tools}

Use the following format:
Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Question: {input}
{agent_scratchpad}
""")

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[handler],
    verbose=True,
    max_iterations=5
)

if __name__ == "__main__":
    result = executor.invoke({
        "input": "What are the latest developments in quantum computing?"
    })
    
    print("\\nFinal Answer:")
    print(result["output"])`}
              </code>
            </pre>
          </div>
          <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>💡 Pro Tip:</strong> After running this code, visit your
              Observare dashboard to see real-time traces of your agent
              execution, including all tool calls, LLM interactions, and
              performance metrics.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            What Gets Captured
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            All telemetry data automatically appears in your Observare dashboard
            for analysis and monitoring.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-400">
                  Agent Operations
                </h3>
              </div>
              <p className="text-gray-400">
                Start, completion, errors with full timing
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-400">
                  Tool Executions
                </h3>
              </div>
              <p className="text-gray-400">
                Which tools are called, inputs/outputs, performance
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-400">
                  LLM Calls
                </h3>
              </div>
              <p className="text-gray-400">
                Model usage, token consumption, costs, response times
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-400">
                  Performance Metrics
                </h3>
              </div>
              <p className="text-gray-400">
                Success rates, average response times, error rates
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-6">
              Install the SDK and add observability to your AI agents in
              minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => {
                  window.location.href =
                    "mailto:bseager21@gmail.com?subject=Demo Request - Observare SDK&body=Hi Brandon,%0D%0A%0D%0AI would like to schedule a demo of the Observare SDK.%0D%0A%0D%0ACompany:%0D%0AUse Case:%0D%0APreferred Time:%0D%0A%0D%0AThanks!";
                }}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Book a Demo
              </button>
              <button
                onClick={() => {
                  window.open("https://tally.so/r/mKKoaA", "_blank");
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
