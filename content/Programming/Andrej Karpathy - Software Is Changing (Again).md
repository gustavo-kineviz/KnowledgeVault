---
title: Software Is Changing (Again) - Andrej Karpathy
created: 2025-06-23
category: Technology
related:
  - LLMs
  - Software Development
  - AI Programming
  - Vibe Coding 101
---

[Click here to watch the full video](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
# Part 1 – Summary

- **Software 1.0** – Human programmers write explicit, line-by-line code. Everything is handcrafted.  
- **Software 2.0** – Machine learning models, where the “code” is the learned parameters (weights) of neural networks.  
- **Software 3.0** – Your prompts are now the programs, written for Large Language Models ([[Glossary#LLM|LLMs]]).  
  *“The hottest new programming language is English.”*

![[Screenshot 2025-06-23 at 8.35.08 PM.png]]

![[Pasted image 20250623204237.png]]

---

## How to Think About LLMs

**“AI is the new electricity.”**

- **CAPEX (Capital Expenditure) to train an LLM** – High upfront costs: powerful GPUs, vast datasets.  
- **OPEX (Operational Expenditure) to serve intelligence** – Ongoing costs to run and maintain models, often via standardized APIs for prompts, images, or tools.  
- **Metered access** – Usage-based pricing, usually measured in tokens (e.g., $/1M tokens).  
- **Service quality expectations** – Low latency, high uptime, consistent outputs.  
- **OpenRouter** – A “transfer switch” that routes requests to different LLMs, optimizing for cost or performance.  
- **Intelligence brownouts** – Temporary degraded performance or reduced availability, similar to electrical brownouts.

LLMs are not simple commodities like electricity — they are complex software ecosystems.  
They represent a **new kind of computer**.

![[Pasted image 20250623212911.png]]

---

### LLMs as Computers

- LLMs ≈ CPUs  
- Context windows ≈ Memory  
- Just like VS Code runs on multiple OSs, an LLM app (e.g., Cursor) can run on GPT, Claude, Gemini, etc.

---

## The New LLM “OS” – Historical Computing Analogies

In the early days of computing, machines were expensive, so processing happened remotely.  
Today, LLMs are run in the **cloud** and streamed back and forth over the network.

![[Pasted image 20250623213814.png]]

- Does ChatGPT need a [[Glossary#GUI|GUI]]?

![[Pasted image 20250623222351.png]]

Unlike early computing and cryptography, **consumers** are the first large-scale users.

---

# Part 2 – LLM Psychology

LLMs have **superhuman abilities** in some areas, but also **cognitive flaws**:

- **High capacity** – Can “remember” far more than a human within their context window.  
- **Hallucinations** – Confidently produce incorrect information.  
- **Jagged intelligence** – Make odd mistakes (e.g., thinking 9.11 > 9.9).  
- **[[Glossary#Anterograde Amnesia|Anterograde amnesia]]** – Forget earlier parts of a conversation once they exceed the context limit.  
- **Gullibility** – Can be tricked into leaking information.

In short: **superpowers + blind spots**.

---

# Part 3 – Opportunities

**GUIs** let humans **audit** and **speed-up** LLM work.

Example: **Cursor** has an *autonomy slider* — you choose how much control the LLM has, depending on task complexity.

> **AI does the generation, humans do the verification.**

![[Pasted image 20250623224452.png]]

We need to “**keep AI on the leash**” to improve verification.  
One approach: Break big systems into clear roles — e.g., a teacher app that creates courses, and a student app that consumes them.  
This creates a natural project progression.

---

### The Iron Man Analogy

- The suit can be **driven** by Tony Stark (augmentation) or operate **autonomously** (agent).  

We need **more Iron Man suits**, **fewer Iron Man robots**.

---
### Vibe Coding

Everyone’s now a programmer.  
The **code** is the easy part!

- Humans use GUIs  
- Computers use APIs  
- Now, **agents** are computers with human-like interaction.  
- You can use [[Glossary#Markdown|markdown]] to communicate directly with an LLM.

---
### Making Docs LLM-Friendly

If documentation is structured for LLMs, huge new capabilities open up.  
It’s not just about formatting in markdown — you must **adapt instructions** so an LLM can act on them.  
For example: replace “click” with an actionable equivalent for an LLM agent.

---
**tags** #AI #LLM #software-development #programming #machine-learning #future-of-coding #andrej-karpathy