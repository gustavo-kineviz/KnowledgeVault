# What is BAML?
![[CleanShot 2025-08-13 at 20.09.04.png]]

**BAML** is a programming language for building AI applications.  
You only write the **AI-related parts** in BAML — the rest of your app can be in another language.  
Its goal is to give you the **expressiveness of English** with the **structure of code**.
# Why BAML?

AI apps were built like this:

```python
# Mix AI prompt in Python strings
prompt = f"""
You are a helpful assistant.
Answer this question: {user_question}
"""
result = openai.ChatCompletion.create(model="gpt-4", messages=[{"role": "user", "content": prompt}])
````

And now we can do this:

```baml
# In BAML — prompts are just functions
fn AnswerQuestion(question: string) -> string:
    "You are a helpful assistant."
    "Answer this question: {question}"
```

---

**What’s the difference?**

BAML is a new programming language for building AI applications.  
You only write the **AI parts** in BAML — everything else can stay in your favorite language.

---

## BAML’s Design Philosophy

- **1:** Avoid invention when possible
    - Prompts need versioning → use **Git**
    - Prompts need saving → use **filesystems**
- **2:** Works in **any file editor** and **any terminal**
- **3:** Be **fast**
- **4:** A **first-year CS student** should understand it

---

## What BAML Is **NOT** For

BAML is _not_ ideal for:

- Custom AI model training
- High-performance applications
- General-purpose programming
- Heavy data processing

---

