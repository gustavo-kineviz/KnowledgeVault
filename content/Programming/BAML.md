BAML is a new programming language for building AI applications. You only need to write the AI parts with it, the rest of the code can be written in another language
![[Pasted image 20250221174317.png]]

#### BAML's Design Philosophy

- **1:** Avoid invention when possible
    - Yes, prompts need versioning — we have a great versioning tool: git
    - Yes, you need to save and iterate on prompts — we have a great storage: filesystems
- **2:** Any file editor and any terminal should be enough to use it
- **3:** Be fast
- **4:** A first year university student should be able to understand it


In **BAML**, every **prompt is defined as a function**.

The language is *not ideal* for:
-  Custom AI models
- High performance applications
- General-Purpose Programming
- Heavy Data Processing


