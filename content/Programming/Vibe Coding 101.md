---
title: Vibe Coding 101
created: 2025-08-13
updated: 2025-11-13
category: Technology
related:
  - AI Development
  - Programming
  - Andrej Karpathy - Software Is Changing (Again)
---
# What is Vibe Coding?

**Imagine building an app without really "coding."**

No cryptic symbols, no walls of text — just **talking, clicking, and copy-pasting**… and it works.

That's **vibe coding** — a term coined by [Andrej Karpathy](https://karpathy.ai/) to describe a new style of development with AI tools. You're not painstakingly typing every line; you're **describing what you want**, and the AI turns it into code.

This was when the term got popular: 

![[Pasted image 20250813191817.png|400]]

---

# Coding vs Programming

People often confuse these terms, but they're not the same:

- **Coding**: Writing instructions to a computer using a programming language. With the rise of large language models (LLMs), this part is **becoming increasingly automated**.
- **Programming**: Involves defining the problem, planning the solution, writing and testing the code, and building a complete, functional system. This still demands **human creativity** and **problem-solving**.

![[Pasted image 20250813171644.png]] [source](https://www.kaashivinfotech.com/blog/difference-between-coding-and-programming/)

If you're just "saying stuff, running stuff, and copy-pasting stuff," you're likely coding.  
If you're planning what needs to be built and making decisions — you're programming.

---

# Breaking Down Problems

**The Secret to Success: Ask for One Thing at a Time**

When working with AI, don't try to build everything at once. Instead, break your big idea into small, simple steps.

> **Instead of:**
> "Build me a web app that manages tasks with user authentication"
> 
> **Try:**
> 1. "Make a box where I can type in a task"
> 2. "Add a button that saves my task"
> 3. "Show me a list of all my saved tasks"
> 4. "Let me delete tasks I don't need anymore"
> 5. "Let me edit tasks if I made a mistake"
> 6. "Add a simple login page"
> 7. "Make sure only logged-in users can see their tasks"

**Why this works:**
- The AI understands exactly what you want
- You can test each piece before moving forward
- If something breaks, you know which part caused it
- You actually learn how things work along the way

---

# Which AIs to Use?

You might wonder: **Should I just use ChatGPT for everything?**

Not really. Different tools are better for different tasks:

|Task|Tool Type|Best Options (as of Nov 2025)|
|---|---|---|
|Writing code|Code Generator|Claude Sonnet 4.5, Cursor, GitHub Copilot|
|Fixing bugs|LLM Assistant|Claude Sonnet 4.5, GPT-4o, Gemini 2.0|
|Planning features & reasoning|Reasoning LLM|Claude Opus 4, o1, Gemini 2.0 Flash Thinking|
|Reviewing code|IDE-integrated AI|Cursor, Windsurf, GitHub Copilot|
|Writing tests|LLM or Plugin|Claude Sonnet 4.5, GPT-4o, Copilot|
|Full app prototyping|Integrated Platform|Replit Agent, Cursor Composer, v0 by Vercel|
|Data analysis & visualization|Specialized LLM|Claude Sonnet 4.5, GPT-4o (with Code Interpreter)|
|Database queries|SQL-focused AI|Claude Sonnet 4.5, ChatGPT, Cursor|

**Table last updated: November 2025**

Use the right tool for the job — you don't hammer nails with a screwdriver.

**Note**: The AI landscape changes rapidly. What's best today might be different in a few months. Always check for the latest model releases and capabilities.

---

# 🛑 Use Git — Always

LLMs are powerful — but they can mess things up.

If you're relying on AI to change or generate code, **use Git** to track versions. That way, if something breaks or vanishes, you can roll back easily.

> Learn more here: [[Git - A Quick Guide]]

---

# ⚠️ Common Pitfalls of Vibe Coding

Vibe coding feels magical — but it has risks:

- **You stop learning**: Letting the AI do everything can make you miss key concepts
- **You miss bugs**: Trusting LLMs blindly is dangerous. Always test what you run
- **You lose control**: Large codebases can spiral into something you barely understand
- **Over-reliance**: When the AI is unavailable or gives poor output, you're stuck
- **Security risks**: AI-generated code might include vulnerabilities or outdated practices

Check out the [[Andrej Karpathy - Software Is Changing (Again)#The Iron Man Analogy|The Iron Man Analogy]]

**Best practice**: Use vibe coding for speed and productivity, but always review, understand, and test everything before deploying or sharing.

---

**tags** #vibe-coding #AI #LLM #coding #programming #development