---
title: Welcome
description: My Knowledge Vault
created: 2025-07-31
---

##  Welcome to the Knowledge Vault
This is a growing collection of what I find interesting, including:
-  Programming insights  
- Storytelling techniques  
- Side hustles and creativity  
...and whatever else catches my curiosity.

It’s still early days, and there’s a lot more to come. But everything has to start somewhere — and this is mine. Thanks for stopping by!

> ✨ Feel free to explore the sidebar and follow along as things evolve.

```ts title="quartz/cfg.ts"
export interface FullPageLayout {
  head: QuartzComponent // single component
  header: QuartzComponent[] // laid out horizontally
  beforeBody: QuartzComponent[] // laid out vertically
  pageBody: QuartzComponent // single component
  afterBody: QuartzComponent[] // laid out vertically
  left: QuartzComponent[] // vertical on desktop and tablet, horizontal on mobile
  right: QuartzComponent[] // vertical on desktop, horizontal on tablet and mobile
  footer: QuartzComponent // single component
}