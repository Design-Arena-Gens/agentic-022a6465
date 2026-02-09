'use client'

import { TrendingUp, Eye, Users, Clock, ThumbsUp, MessageSquare } from 'lucide-react'

export default function Analytics() {
  const stats = [
    { label: 'Total Views', value: '125.4K', icon: Eye, change: '+12.5%', color: 'text-blue-500' },
    { label: 'Subscribers', value: '8.2K', icon: Users, change: '+8.3%', color: 'text-green-500' },
    { label: 'Watch Time', value: '2.4K hrs', icon: Clock, change: '+15.2%', color: 'text-purple-500' },
    { label: 'Engagement', value: '4.8%', icon: ThumbsUp, change: '+2.1%', color: 'text-yellow-500' },
  ]

  const recentVideos = [
    {
      title: '10 AI Tools That Will Blow Your Mind',
      views: '45.2K',
      likes: '3.2K',
      comments: 487,
      ctr: '8.5%',
    },
    {
      title: 'How I Made $10,000 in One Month',
      views: '32.1K',
      likes: '2.8K',
      comments: 356,
      ctr: '7.2%',
    },
    {
      title: 'The Secret to Passive Income',
      views: '28.3K',
      likes: '2.1K',
      comments: 298,
      ctr: '6.8%',
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-green-500" />
        Channel Analytics
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-gray-500 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Videos Performance */}
      <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
        <h3 className="text-xl font-bold mb-4">Recent Videos Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-600">
                <th className="pb-3 font-semibold text-gray-400">Video Title</th>
                <th className="pb-3 font-semibold text-gray-400">Views</th>
                <th className="pb-3 font-semibold text-gray-400">Likes</th>
                <th className="pb-3 font-semibold text-gray-400">Comments</th>
                <th className="pb-3 font-semibold text-gray-400">CTR</th>
              </tr>
            </thead>
            <tbody>
              {recentVideos.map((video, index) => (
                <tr key={index} className="border-b border-gray-600/50 last:border-0">
                  <td className="py-4 pr-4">{video.title}</td>
                  <td className="py-4">{video.views}</td>
                  <td className="py-4">{video.likes}</td>
                  <td className="py-4">{video.comments}</td>
                  <td className="py-4">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                      {video.ctr}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Top Performing Topics
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>AI & Technology</span>
              <span className="text-green-400 font-medium">42%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Money & Finance</span>
              <span className="text-green-400 font-medium">31%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Personal Growth</span>
              <span className="text-yellow-400 font-medium">27%</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            Audience Insights
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Avg. View Duration</span>
              <span className="font-medium">6:32</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Best Upload Time</span>
              <span className="font-medium">2-4 PM EST</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Top Age Group</span>
              <span className="font-medium">25-34</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
