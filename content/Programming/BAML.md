![[Pasted image 20250721121213.png]]
[Documentation](https://github.com/BoundaryML/baml/blob/canary/README.md)

BAML (Basically a Made-up Language) is a new programming language for building AI applications. You only need to write the AI parts with it, the rest of the code can be written in another language
![[Pasted image 20250221174317.png]]

## BAML's Design Philosophy

- **1:** Avoid invention when possible
    - Yes, prompts need versioning — we have a great versioning tool: git
    - Yes, you need to save and iterate on prompts — we have a great storage: filesystems
- **2:** Any file editor and any terminal should be enough to use it
- **3:** Be fast
- **4:** A first year university student should be able to understand it

## Key Features
- **Every prompt is defined as a function**
	- Define prompts as typed, callable functions (not strings);
	- Reuse across languages (Python/TS/etc.).
- **Structured parsing (SAP)**
	- Extracts clean outputs from any LLM response (JSON, markdown, chain-of-thought);
	- Works even without native tool-calling APIs.
- **Integration with Existing Tools**
	- BAML works even when the models don't support native tool-calling APIs. by using SAP algorithm to support the flexible outputs LLMs can provide, like markdown within a JSON blob or chain-of-thought prior to answering
	- ![[Pasted image 20250721121047.png]]
- **Iteration speed**
	- Edit prompts like code—no string juggling or client rebuilds.

The language is *not ideal* for:
-  Custom AI models
- High performance applications
- General-Purpose Programming
- Heavy Data Processing




