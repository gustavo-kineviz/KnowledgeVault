# What is SpannerGraph?

SpannerGraph is **Google's database for connected data**.  
Instead of storing information in separate tables, it shows you **how things are related**.  
Think Facebook's friend connections, or how money flows between bank accounts.

---

## Why SpannerGraph?

Traditional databases were like this:
```
📊 USERS TABLE          📊 RELATIONSHIP TABLE
Alice | 25 | Engineer    Alice ←→ Bob
Bob   | 30 | Designer    Alice ←→ Carol  
Carol | 28 | Writer      Bob   ←→ Carol
```

SpannerGraph shows it like this:
```
    Alice ←→ Bob
      ↓       ↑
    Carol ←→ [other friends]
```

**What's the difference?**

SpannerGraph **visualizes connections**.  
Instead of looking through endless tables, you see **relationships instantly**.

---

## SpannerGraph vs The Competition

| Database         | Best For                                   |
| ---------------- | ------------------------------------------ |
| **SpannerGraph** | Enterprise companies, needs reliability    |
| **Neo4j**        | Most common choice, good for learning      |
| **KuzuDB**       | Super fast, but only for experts           |
| **Regular SQL**  | Simple tasks, everyone knows how to use it |
