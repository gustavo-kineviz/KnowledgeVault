![[Pasted image 20250715190758.png]]
[Link to the video](https://www.youtube.com/watch?v=LCEmiRjPEtQ)

# Part 1 - Summary
- Software 1.0: Human programmers writing explicit, line-by-line code. Everything is written and crafted manually;
- Software 2.0: Machine learning models, in which the "code" is the learned parameters (weights) of the neural network;
- Software 3.0: Your prompts are now programs written in Large Language Models (LLMs). "The hottest new programming language is English"

![[Screenshot 2025-06-23 at 8.35.08 PM.png]]

![[Pasted image 20250623204237.png]]

## How to think about LLMs
**"AI is the new electricity"** 

- **CAPEX (Capital Expenditure) to train an LLM**: high investment required, such as powerful GPUs and large amounts of data 
- **OPEX (Operational Expenditure) to serve intelligence:** Ongoing costs for running and maintaining LLMs, often via homogeneous APIs for various inputs (prompts, images, tools).
- **Metered access:** Usage-based pricing for LLMs, typically measured in tokens (e.g., $/1M tokens).
- **Demand for service quality:** User expectations for low latency, high uptime, and consistent output quality from LLMs.
- **OpenRouter:** A system acting as a "transfer switch" to route requests across different LLMs, optimizing for cost or performance.
- **Intelligence "brownouts":** Degraded performance or partial unavailability of AI services, similar to electrical brownouts.

LLMs are not simple commodities like electricity, they are increasingly complex software ecosystems - a new kind of computer



![[Pasted image 20250623212911.png]]
In this comparison:
- LLMs are equivalent to CPUs;
- Context windows are equivalent to memory
Just like you can run VS Code in different operational systems, you can run an LLM app (like Cursor) on multiple LLMs (GPT, Claude, Gemini, etc.)

## The new LLM OS and historical computing analogies

Just like when computers were too expensive, we're all using LLMs that are running in the cloud and streamed back and forth over the network.

![[Pasted image 20250623213814.png]]

- Does chat GPT need a [[Glossary#GUI|GUI]] ?

![[Pasted image 20250623222351.png]]
Consumers are the first users, different than early computers and cryptography.

# Part 2 - LLM Psychology 
LLMs can remember lots of things, much more than a human. But they hallucinate a lot; have some jagged intelligence - getting some stuff wrong that humans wouldn't do (like 9.11 > 9.9); and [[Glossary#Anterograde Amnesia|anterograde amnesia]] - which hasn't been solved yet. They are also gullible, they might leak your data for example. In short, they have super human powers, but also cognitive issues

# Part 3 - Opportunities

GUI allows humans to audit the work of these fallible systems and to go faster.

**Cursor**, for example, has an "autonomy slider", which makes it possible to select which part of the code you want to change, and depending on the complexity of the task you're doing, you can choose how much autonomy you want the LLM to have.

**AI does the generation, humans do the verification**
![[Pasted image 20250623224452.png]]

We need to "keep AI on the leash" to increase success of verification. But how to do that?
Example: Make an app for a teacher that creates courses, and other one for students that serves courses. That way it can follow a progression of projects.

- The Iron Man Suit is both an augmentation, that Tony Stark can drive, and it's also an agent that is autonomous. We need more Iron Man suits, and less Iron Man robots.

"Vibe coding": Everyone is now a programmer. The code is actually the easy part!

Just like humans with GUIs, and computers with APIs, now we have a new thing: agents are computers, but they are humanlike. You can add [[Glossary#Markdown|markdowns]] to communicate directly with the LLM, since it's easy for it to understand.

If we can make docs legible to LLMs it's gonna unlock a huge amount of use. But it's not just make it a markdown, you have to adapt things like "click" to an equivalent that an LLM could take on your behalf.
