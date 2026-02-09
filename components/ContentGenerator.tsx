'use client'

import { useState } from 'react'
import { Sparkles, Copy, Download, RefreshCw } from 'lucide-react'

export default function ContentGenerator() {
  const [niche, setNiche] = useState('')
  const [contentType, setContentType] = useState('script')
  const [tone, setTone] = useState('professional')
  const [duration, setDuration] = useState('5-10')
  const [loading, setLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')

  const handleGenerate = async () => {
    if (!niche.trim()) {
      alert('Please enter a niche or topic')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, contentType, tone, duration }),
      })

      const data = await response.json()
      setGeneratedContent(data.content || 'Error generating content')
    } catch (error) {
      setGeneratedContent('Error: Could not generate content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
    alert('Copied to clipboard!')
  }

  const downloadAsText = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${contentType}-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        Generate Content
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Niche / Topic</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., Personal Finance, Tech Reviews, Mystery Stories"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content Type</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            >
              <option value="script">Full Video Script</option>
              <option value="ideas">Video Ideas (10)</option>
              <option value="title">Video Titles</option>
              <option value="description">Video Description</option>
              <option value="hook">Hook / Intro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="entertaining">Entertaining</option>
              <option value="educational">Educational</option>
              <option value="mysterious">Mysterious</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Video Duration (minutes)</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            >
              <option value="1-3">1-3 minutes (Shorts)</option>
              <option value="5-10">5-10 minutes</option>
              <option value="10-15">10-15 minutes</option>
              <option value="15-20">15-20 minutes</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Content
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">Generated Content</label>
            {generatedContent && (
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
                  title="Copy to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={downloadAsText}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
                  title="Download as text"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <textarea
            value={generatedContent}
            readOnly
            placeholder="Your generated content will appear here..."
            className="w-full h-96 px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none resize-none font-mono text-sm"
          />
        </div>
      </div>
    </div>
  )
}
