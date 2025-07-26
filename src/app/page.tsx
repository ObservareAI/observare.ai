'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, Search, BarChart3, Bug, Zap } from 'lucide-react';

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
            Monitor and Debug AI Agents Like You Would Code
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fade-in animation-delay-300">
            Observability for Agentic AI
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in animation-delay-600">
            <div className="w-16 h-1 bg-blue-400 animate-pulse"></div>
            <div className="w-16 h-1 bg-emerald-400 animate-pulse animation-delay-300"></div>
            <div className="w-16 h-1 bg-purple-400 animate-pulse animation-delay-600"></div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          The Problems We're Solving
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Hard to trace multistep agent actions",
            "Lack of visibility into tool calls",
            "No way to debug when agents fail or behave unexpectedly",
            "Can't monitor agent performance in production"
          ].map((pain, index) => (
            <div 
              key={index}
              className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <AlertTriangle className="text-red-400 mr-3 w-6 h-6 flex-shrink-0 group-hover:animate-bounce" />
                <p className="text-lg text-gray-200">
                  {pain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proposed Solution Section */}
      <section className="relative px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          What We're Building
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Search,
              title: "Real-time Agent Tracing",
              description: "See every step your agents take, from initial prompt to final output, with detailed execution traces."
            },
            {
              icon: BarChart3,
              title: "Tool Call Analytics",
              description: "Monitor which tools your agents use, how often, and with what success rates."
            },
            {
              icon: Bug,
              title: "Error Detection & Debugging",
              description: "Catch failures early with intelligent error detection and root cause analysis."
            },
            {
              icon: Zap,
              title: "Performance Monitoring",
              description: "Track latency, token usage, and cost metrics across all your agents."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <feature.icon className="w-10 h-10 mb-4 text-blue-400 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Be Part of Building the Future of AI Observability
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            We're looking for design partners to help shape the future of agent monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Join Our Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-8 py-4 overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40">
              <span className="relative z-10">Become a Design Partner</span>
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