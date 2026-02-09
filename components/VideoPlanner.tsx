'use client'

import { useState } from 'react'
import { Calendar, Plus, Trash2, Clock } from 'lucide-react'
import { format } from 'date-fns'

interface VideoTask {
  id: string
  title: string
  date: string
  status: 'planned' | 'in-progress' | 'completed'
  script: boolean
  voiceover: boolean
  editing: boolean
}

export default function VideoPlanner() {
  const [tasks, setTasks] = useState<VideoTask[]>([
    {
      id: '1',
      title: 'Top 10 AI Tools for 2024',
      date: '2024-02-15',
      status: 'in-progress',
      script: true,
      voiceover: true,
      editing: false,
    },
    {
      id: '2',
      title: 'How to Make Money Online',
      date: '2024-02-20',
      status: 'planned',
      script: false,
      voiceover: false,
      editing: false,
    },
  ])
  const [newTitle, setNewTitle] = useState('')
  const [newDate, setNewDate] = useState('')

  const addTask = () => {
    if (!newTitle.trim() || !newDate) {
      alert('Please enter a title and date')
      return
    }

    const newTask: VideoTask = {
      id: Date.now().toString(),
      title: newTitle,
      date: newDate,
      status: 'planned',
      script: false,
      voiceover: false,
      editing: false,
    }

    setTasks([...tasks, newTask])
    setNewTitle('')
    setNewDate('')
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleCheckbox = (id: string, field: 'script' | 'voiceover' | 'editing') => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, [field]: !task[field] } : task
      )
    )
  }

  const updateStatus = (id: string, status: VideoTask['status']) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Calendar className="w-6 h-6 text-blue-500" />
        Video Content Planner
      </h2>

      {/* Add New Task */}
      <div className="bg-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Schedule New Video</h3>
        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Video title..."
            className="flex-1 min-w-[200px] px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="px-4 py-2 bg-gray-600 rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No videos scheduled yet. Add your first video above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(task.date), 'MMM dd, yyyy')}</span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 mb-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={task.script}
                        onChange={() => toggleCheckbox(task.id, 'script')}
                        className="w-4 h-4 rounded accent-green-500"
                      />
                      <span className="text-sm">Script Written</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={task.voiceover}
                        onChange={() => toggleCheckbox(task.id, 'voiceover')}
                        className="w-4 h-4 rounded accent-green-500"
                      />
                      <span className="text-sm">Voiceover Recorded</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={task.editing}
                        onChange={() => toggleCheckbox(task.id, 'editing')}
                        className="w-4 h-4 rounded accent-green-500"
                      />
                      <span className="text-sm">Video Edited</span>
                    </label>
                  </div>

                  {/* Status */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(task.id, 'planned')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                        task.status === 'planned'
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-600 text-gray-400 hover:bg-gray-500'
                      }`}
                    >
                      Planned
                    </button>
                    <button
                      onClick={() => updateStatus(task.id, 'in-progress')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                        task.status === 'in-progress'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-600 text-gray-400 hover:bg-gray-500'
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => updateStatus(task.id, 'completed')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                        task.status === 'completed'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-600 text-gray-400 hover:bg-gray-500'
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-all"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
