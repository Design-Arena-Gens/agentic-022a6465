import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { niche, contentType, tone, duration } = await request.json()

    // Mock AI generation (in production, this would call OpenAI API)
    const content = generateContent(niche, contentType, tone, duration)

    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}

function generateContent(
  niche: string,
  contentType: string,
  tone: string,
  duration: string
): string {
  const templates: Record<string, (n: string, t: string, d: string) => string> = {
    script: (n, t, d) => `
# Video Script: ${n}
**Tone:** ${t} | **Duration:** ${d} minutes

## Hook (0:00-0:15)
[Attention-grabbing opening]
"Have you ever wondered about ${n}? Stay tuned because what I'm about to reveal will change everything you thought you knew!"

## Introduction (0:15-0:45)
"Welcome back to the channel! Today we're diving deep into ${n}, and I promise this will be worth your time."

## Main Content (0:45-${parseInt(duration.split('-')[1]) - 1}:00)

### Point 1: The Foundation
Let's start with the basics of ${n}. This is crucial because it sets the stage for everything else.

[Add specific details about ${n}]

### Point 2: Key Insights
Now here's where it gets interesting. Most people don't realize that ${n} has these hidden aspects...

[Elaborate on specific insights]

### Point 3: Practical Application
But how do you actually use this information? Let me break it down step by step...

[Provide actionable steps]

## Conclusion (Last 0:30)
"So there you have it - everything you need to know about ${n}. If you found this valuable, don't forget to like and subscribe for more content like this!"

## Call to Action
"Drop a comment below and let me know what aspect of ${n} you want me to cover next!"

---
**Script Notes:**
- Keep energy high throughout
- Use B-roll footage during explanations
- Add text overlays for key points
- Background music: ${t === 'professional' ? 'Corporate/Inspiring' : t === 'entertaining' ? 'Upbeat/Energetic' : 'Ambient/Calm'}
`,

    ideas: (n, t, d) => `
# 10 Video Ideas for ${n}

1. **"The Ultimate Guide to ${n} for Beginners"**
   - Duration: 10-15 minutes
   - Hook: Everything you need to know to get started with ${n}

2. **"5 Mistakes Everyone Makes with ${n}"**
   - Duration: 8-10 minutes
   - Hook: Avoid these costly mistakes that beginners always make

3. **"How I Mastered ${n} in 30 Days"**
   - Duration: 12-15 minutes
   - Hook: My journey and the exact steps I followed

4. **"${n} vs [Alternative]: Which is Better?"**
   - Duration: 10-12 minutes
   - Hook: The honest comparison no one is talking about

5. **"The Secret to ${n} That Nobody Tells You"**
   - Duration: 8-10 minutes
   - Hook: Hidden insights from industry experts

6. **"Top 10 ${n} Tools You Need in 2024"**
   - Duration: 12-15 minutes
   - Hook: The best resources to level up your game

7. **"Is ${n} Worth It? My Honest Review"**
   - Duration: 8-12 minutes
   - Hook: The truth about ${n} after 6 months

8. **"How to Make Money with ${n}"**
   - Duration: 10-15 minutes
   - Hook: Turn your knowledge into income

9. **"${n} Explained in 5 Minutes"**
   - Duration: 5-7 minutes
   - Hook: Quick and easy breakdown for busy people

10. **"The Future of ${n}: What's Coming Next"**
    - Duration: 10-12 minutes
    - Hook: Trends and predictions for the next year

**Bonus Ideas:**
- "${n} Case Study: Real Results"
- "Common ${n} Myths Debunked"
- "My ${n} Setup Tour"
`,

    title: (n, t, d) => `
# 20 Video Titles for ${n}

## High CTR Titles:
1. "I Tried ${n} for 30 Days - Here's What Happened"
2. "The TRUTH About ${n} (No One Talks About This)"
3. "${n} Changed My Life - Here's How"
4. "Why ${n} is Taking Over in 2024"
5. "Stop Doing ${n} Wrong! (Do This Instead)"

## Question-Based Titles:
6. "Is ${n} Actually Worth It in 2024?"
7. "How to Master ${n} (Even as a Complete Beginner)"
8. "What If I Told You ${n} Could..."
9. "Can You Really Make Money with ${n}?"
10. "Why Does Everyone Love ${n}?"

## Listicle Titles:
11. "Top 10 ${n} Secrets Revealed"
12. "5 ${n} Hacks That Actually Work"
13. "7 Things You MUST Know About ${n}"
14. "10 ${n} Mistakes You're Making Right Now"
15. "3 ${n} Tips That Changed Everything"

## Curiosity-Driven Titles:
16. "The Dark Side of ${n} (Shocking)"
17. "${n}: What They Don't Want You to Know"
18. "I Discovered the Secret to ${n}"
19. "This ${n} Trick is Insane!"
20. "Why I Quit ${n} (And What I Do Now)"

**Title Formula Tips:**
✓ Use numbers (Top 10, 5 Ways, etc.)
✓ Include power words (Shocking, Secret, Truth)
✓ Create curiosity gaps
✓ Make specific promises
✓ Use year references (2024)
`,

    description: (n, t, d) => `
# Video Description Template for ${n}

---

🎯 In this video, I'll show you everything you need to know about ${n}! Whether you're a complete beginner or looking to improve your skills, this guide has you covered.

📌 **What You'll Learn:**
→ The fundamentals of ${n}
→ Step-by-step strategies that actually work
→ Common mistakes to avoid
→ Pro tips from my personal experience
→ Resources to continue learning

⏰ **Timestamps:**
0:00 - Introduction
0:30 - What is ${n}?
2:15 - Getting Started
5:30 - Advanced Techniques
8:45 - Common Mistakes
11:20 - Final Tips
12:30 - Conclusion

🔗 **Helpful Resources:**
[Link to resource 1]
[Link to resource 2]
[Link to resource 3]

📱 **Connect With Me:**
→ Instagram: @yourusername
→ Twitter: @yourusername
→ Discord Community: [link]

💡 **Related Videos You'll Love:**
→ [Related video 1 title]
→ [Related video 2 title]
→ [Related video 3 title]

🎵 **Music Credits:**
Track: [Song name]
Artist: [Artist name]
Provided by [Source]

📝 **About This Channel:**
Welcome! This channel is all about [your niche]. I share practical tips, in-depth tutorials, and honest reviews to help you [achieve specific goal]. New videos every [frequency]!

🔔 **Don't Forget to Subscribe!**
Hit that notification bell so you never miss an upload!

👍 **Like this video?** Give it a thumbs up and share it with someone who needs to see this!

💬 **Questions?** Drop them in the comments below - I read every single one!

---

#${niche.replace(/\s+/g, '')} #Tutorial #HowTo #${new Date().getFullYear()}

**Disclaimer:** [Add any necessary disclaimers here]

© ${new Date().getFullYear()} [Your Channel Name]. All rights reserved.
`,

    hook: (n, t, d) => `
# 15 Video Hooks for ${n}

## Pattern Interrupt Hooks:
1. "Stop! Before you scroll away, you need to hear this about ${n}..."

2. "I'm about to reveal something about ${n} that most people don't know..."

3. "If you think you know everything about ${n}, think again..."

## Curiosity Hooks:
4. "What if I told you that ${n} could completely change your [life/business/skills]?"

5. "There's a secret about ${n} that nobody talks about, and I'm about to reveal it..."

6. "You won't believe what happened when I tried ${n} for 30 days straight..."

## Problem/Solution Hooks:
7. "Are you struggling with ${n}? Here's exactly what you need to do..."

8. "Most people fail at ${n} because they make these 3 critical mistakes..."

9. "If ${n} isn't working for you, you're probably doing it wrong. Here's why..."

## Controversial/Bold Hooks:
10. "Everyone is wrong about ${n}, and I can prove it..."

11. "The truth about ${n} that nobody wants you to know..."

12. "I'm going to say something controversial: ${n} is overrated. Here's why..."

## Personal Story Hooks:
13. "Six months ago, I knew nothing about ${n}. Today, everything changed..."

14. "I wasted 2 years doing ${n} the wrong way. Don't make my mistake..."

15. "This one thing about ${n} changed everything for me, and it can for you too..."

---

**Hook Writing Tips:**
✓ Open with a strong statement
✓ Create curiosity immediately
✓ Promise value within first 5 seconds
✓ Use pattern interrupts
✓ Speak directly to viewer's pain points
✓ Keep it under 15 seconds
✓ Match your ${tone} tone throughout
`,
  }

  const generator = templates[contentType] || templates.script
  return generator(niche, tone, duration)
}
