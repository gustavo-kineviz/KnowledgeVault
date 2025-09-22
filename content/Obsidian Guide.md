<iframe 
    src="assets/obsidian_live_intro_slides.html" 
    width="100%" 
    height="600px" 
    frameborder="0" 
    allowfullscreen>
</iframe>
---








## Introduction (1 minute)

### **Opening Hook**

**Action:** Show your Knowledge Vault with iframe embedded

**Script:** _"Good [morning/afternoon] everyone! What you're seeing here is my Knowledge Vault - a connected network of insights spanning AI, programming, productivity, and creative thinking. The presentation slides you're about to see? Built entirely in Obsidian, just like this vault."_

**Show:** Run through the 5-slide iframe presentation completely

### **Learning Objectives & Expectations**

**Action:** Check off first item on checklist after iframe finishes

**Script:** _"As you just saw, we'll cover 9 key topics today - from basic concepts to advanced features. Here's what I expect from you: focus on understanding concepts rather than memorizing steps, think about how these ideas apply to your specific data workflows, and feel free to ask questions if something isn't clear. After this demo, you'll know exactly how to adapt Obsidian to your specific data needs."_

**Transition:** _"Now let's build something from scratch together."_

---

## Core Demo: Building from Scratch (5.5 minutes)

### **What is Obsidian & What it's Good For** (30 seconds)

**Action:** Create new vault "Kineviz Demo" - Check checklist item

**Script:** _"Obsidian is a knowledge workspace that treats your notes as a network, not a hierarchy. It's perfect for:_

- _Connecting insights across different projects_
- _Building searchable knowledge bases that evolve_
- _Organizing research without predetermined structures_
- _Creating systems where past learnings inform future work_

_For data experts like yourselves, think of it as turning your scattered insights into a queryable graph database."_

---

### **Markdown Basics** (30 seconds)

**Action:** Create first note "Data Analysis Workflow" - Check checklist item

**Type:**

```markdown
# Data Analysis Workflow

## Key Steps
1. **Data Collection** from multiple sources
2. *Data Cleaning* and validation
3. Analysis and modeling
4. Visualization and reporting

> "Good data tells a story, great data changes minds"

`Python`, `R`, and `SQL` are our main tools.
```

**Script:** _"Markdown is just plain text with simple formatting rules. # for headings, ** for bold, * for italic. It's readable as-is and renders beautifully. Since you work with code, you'll appreciate that it's version-controllable and future-proof."_

---

### **Links: Internal & External** (1.5 minutes)

**Action:** Check checklist item

**In the same note, add:**

```markdown
## Related Concepts
- [[Statistical Methods]] for robust analysis
- [[Data Visualization Tools]] like Tableau and Python
- [[Client Communication]] strategies
- External resources: [Kaggle datasets](https://kaggle.com/datasets)

Our team uses [[Python Libraries]] extensively.
```

**Demo sequence:**

1. **Type `[[Statistical Methods]]`** - show autocomplete suggestions
2. **Click the link** - show it creates new note automatically
3. **Add content to Statistical Methods:**
    
    ```markdown
    # Statistical MethodsCore techniques we use:- Regression analysis- A/B testing frameworks- Bayesian inferenceRelated: [[Data Analysis Workflow]]
    ```
    
4. **Show backlinks panel** - demonstrate bidirectional connections
5. **Navigate between notes using links**

**Script:** _"Double brackets create internal links - the foundation of connected thinking. External links use standard markdown syntax. Notice how I didn't plan the structure - I linked to concepts as I thought of them. The backlinks panel shows all incoming connections automatically. This is how insights from different projects start finding each other."_

---

### **Tags** (1 minute)

**Action:** Check checklist item

**Add to both notes:**

```markdown
#methodology #data-analysis #statistics #workflow
```

**Actions:**

1. **Add tags to multiple notes**
2. **Click a tag** - show tag pane with all related notes
3. **Show nested tags:** `#data-analysis/descriptive` vs `#data-analysis/inferential`

**Script:** _"Tags provide flexible categorization. Unlike folders, one note can have multiple tags. Think of them as labels you can filter by. Use them for themes, projects, or methodologies. The tag pane becomes a dynamic index of your knowledge."_

---

### **Frontmatter** (1 minute)

**Action:** Check checklist item

**Add to top of Data Analysis Workflow note:**

```yaml
---
project: kineviz-demo
complexity: intermediate
tools: [python, sql, tableau]
last_updated: 2025-09-22
status: active
team_members: [gustavo, sarah, marcus]
---
```

**Script:** _"Frontmatter adds structured metadata - think of it as database fields for your notes. This becomes queryable with plugins like Dataview. You can track project status, assign team members, set dates, or any custom fields you need. For data people, this turns your vault into a queryable knowledge database."_

---

### **Vibe Coding in Obsidian** (1 minute)

**Action:** Check checklist item

**Create a quick note structure:**

```markdown
# Project Alpha Analysis

## Quick Thoughts
- Users want faster dashboards
- Current SQL queries are bottlenecks
- Need to explore [[Caching Strategies]]

## Next Steps
- [ ] Benchmark current performance
- [ ] Research Redis implementation
- [ ] Talk to [[DevOps Team]]

#project-alpha #performance #quick-notes
```

**Script:** _"Vibe coding is about intuitive, flow-based organization. Don't overthink structure - capture thoughts as they come, link to related concepts, use tags liberally. Let the organization emerge from use, not planning. Notice how I mixed todos, thoughts, and links organically. This is how real thinking happens."_

---

### **Best Practices & Common Mistakes** (30 seconds)

**Action:** Check checklist item

**Script:** _"Key practices: Start simple, link liberally, use consistent naming. Common mistakes:_

- _Over-organizing upfront - let structure emerge_
- _Plugin obsession - master basics first_
- _Perfect vault syndrome - progress over perfection_
- _Forcing rigid hierarchies - embrace network thinking_

_Define your specific need first, then adapt Obsidian to solve it."_

---

## Closing: Obsidian's Versatility (30 seconds)

### **The Big Picture**

**Action:** Open graph view, then check final checklist item

**Script:** _"Look at this network we built in minutes. Now imagine this after months of use. Here's something cool - this entire presentation structure? Also built in Obsidian. My Knowledge Vault with Vibe Coding explanations? Built in Obsidian. The slides you saw at the start? Generated from Obsidian notes. It's not just a note-taking app - it's a thinking platform."_

### **Call to Action**

**Script:** _"Your homework: Download Obsidian tonight. Create a vault. Write three notes about recent projects and link them together. Don't plan, just connect ideas. Adapt it to your data workflows, your team's needs, your research methods. If you want to dive deeper into vibe coding concepts, check my Knowledge Vault - link in the description. And yes, that was also built entirely in Obsidian."_

**Final line:** _"Questions?"_

---

## Live Presentation Tips

### **Technical Setup:**

- **Checklist note:** Keep visible in right pane throughout
- **Screen zoom:** 130% for visibility
- **Graph view:** Ready to open for finale
- **Mouse highlighting:** Use for important UI elements

### **Timing Checkpoints:**

- **1 min:** Intro complete
- **2.5 min:** Links demonstrated
- **4 min:** Tags and frontmatter shown
- **6 min:** Vibe coding explained
- **7 min:** Closing delivered

### **Interaction Moments:**

- After showing link creation: _"This is the 'aha' moment for most people"_
- During frontmatter: _"Data people love this part"_
- During vibe coding: _"Stop fighting your tools, work with your thoughts"_

### **Recovery Strategies:**

- **If ahead:** Add more frontmatter examples
- **If behind:** Skip detailed tag hierarchy, focus on concept
- **Technical issues:** Have screenshot backups ready