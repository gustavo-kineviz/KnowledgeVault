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

# Breaking Down Problems: The Key to Effective Vibe Coding

One of the most important skills in vibe coding isn't about the AI at all — it's about **how you approach the problem**.

**Instead of asking the AI to build your entire application in one go, break your project into smaller, manageable pieces.** This approach has several advantages:

- **Better Results**: AI models perform much better when given focused, specific tasks rather than vague, broad requests
- **Easier Debugging**: When something goes wrong, you know exactly which piece caused the issue
- **Iterative Development**: You can test each component before moving to the next, ensuring everything works as you build
- **Learning Opportunity**: Breaking down problems helps you understand the system architecture better
- **Less Context Confusion**: AI models have token limits and can get confused with too much information at once

**Example of breaking down a project:**

Instead of: "Build me a web app that manages tasks with user authentication"

Break it into:

1. "Create a simple HTML form for adding tasks"
2. "Add JavaScript to store tasks in browser localStorage"
3. "Create a function to display stored tasks as a list"
4. "Add delete and edit functionality for each task"
5. "Set up a basic user login page"
6. "Connect the login to the task manager"

This step-by-step approach is how experienced developers work — and it's exactly what makes vibe coding effective. The AI becomes a powerful assistant rather than a confused oracle trying to read your mind.

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