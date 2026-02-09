'use client'

import { useState } from 'react'
import { Video, Sparkles, Calendar, TrendingUp, PlayCircle, FileText } from 'lucide-react'
import ContentGenerator from '@/components/ContentGenerator'
import VideoPlanner from '@/components/VideoPlanner'
import Analytics from '@/components/Analytics'

export default function Home() {
  const [activeTab, setActiveTab] = useState('generate')

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Video className="w-10 h-10 text-red-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Faceless YouTube Agent
            </h1>
          </div>
          <p className="text-gray-400">
            AI-powered automation for your faceless YouTube channel
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex gap-2 mb-8 overflow-x-auto">
          <TabButton
            icon={<Sparkles className="w-4 h-4" />}
            label="Generate Content"
            active={activeTab === 'generate'}
            onClick={() => setActiveTab('generate')}
          />
          <TabButton
            icon={<Calendar className="w-4 h-4" />}
            label="Video Planner"
            active={activeTab === 'planner'}
            onClick={() => setActiveTab('planner')}
          />
          <TabButton
            icon={<TrendingUp className="w-4 h-4" />}
            label="Analytics"
            active={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
        </nav>

        {/* Content Area */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          {activeTab === 'generate' && <ContentGenerator />}
          {activeTab === 'planner' && <VideoPlanner />}
          {activeTab === 'analytics' && <Analytics />}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            icon={<PlayCircle className="w-8 h-8 text-red-500" />}
            title="Automated Scripts"
            description="Generate engaging video scripts tailored to your niche with AI"
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-blue-500" />}
            title="Content Ideas"
            description="Never run out of ideas with AI-powered topic suggestions"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-green-500" />}
            title="Trend Analysis"
            description="Stay ahead with trending topics in your niche"
          />
        </div>
      </div>
    </main>
  )
}

function TabButton({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-red-500 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
