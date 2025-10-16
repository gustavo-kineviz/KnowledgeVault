---
title: Docker
created: 2025-10-15
category: Technology
related:
  - Immich
  - Self-Hosting Photos
  - Development Tools
---
# What is it?
**Docker is a containerization platform** - think of it like shipping containers for software. Docker containers package software with everything it needs to run, making it work consistently across any computer.

# Why is it useful?
- **Isolation**: Each app runs in its own container, can't interfere with your system
- **Portability**: Works the same on any machine 
- **Easy Setup, Updates and Cleanups**
- **Gets compatible versions**
# Real example
Self-hosted photo library (Immich + PostgreSQL + Redis + ML):

**Setup:** `docker compose up -d` → Running in 2 minutes  
**Update:** `docker compose pull && docker compose up -d`  
**Remove:** `docker compose down`

No manual installation, no dependency conflicts, fully isolated. What would take hours to set up manually worked immediately.

---
**tags**
#docker #containerization #devops #self-hosting #infrastructure #tools
#development