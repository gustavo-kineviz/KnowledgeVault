# What is Git?
Git is the most widely used [version control system](#version-control-system) in the world.  
It **tracks changes**, **enables collaboration**, and **manages project history**.

---

## How to Install Git

### **macOS**
1. Install [Homebrew](https://brew.sh/) if you don’t have it.
2. Then run:
```bash
brew install git
````

### **Windows**
Download and run the installer from  
[git-scm.com/downloads](https://git-scm.com/downloads/).

### **Linux**
Follow the instructions for your distribution:  
[git-scm.com/downloads/linux](https://git-scm.com/downloads/linux)

---

## Configuring Git (First Time)

Set your identity (required before committing):

```bash
git config --global user.name "your_username_here"
git config --global user.email "your_email@example.com"
```

---

## Key Git Concepts

- **Working directory**  
    Your project’s local files where you make changes.  
    ➡️ Changes here are **untracked** until staged.
    
- **Staging area (index)**  
    A “waiting room” for changes you plan to commit.  
    ➡️ Add files here with `git add`.
    
- **Local repository**  
    The `.git` folder containing your project history.  
    ➡️ Save staged changes permanently with `git commit`.
    
- **Remote repository**  
    A hosted version (e.g., GitHub, GitLab) for team collaboration.  
    ➡️ Use `git push` and `git pull` to sync.
    
- **Merging**  
    Combines changes from different branches.  
    Git auto-merges when possible; otherwise you must resolve conflicts.
    

**Git Flow Diagram:**  
![[Pasted image 20250706200742.png]]

---

## Basic Terminal Commands

|Command|Description|
|---|---|
|`pwd`|Show current directory path|
|`ls`|List files/folders in current directory|
|`cd <folder>`|Move into a folder|
|`cd ..`|Move up one folder level|
|`mkdir <name>`|Create a new folder|
|`touch <file>`|Create a new file|

---

## Essential Git Commands

|Command|Description|
|---|---|
|`git init`|Start a new Git repository|
|`git clone <url>`|Download a remote repository|
|`git status`|Check untracked/staged changes|
|`git add <file>`|Stage a file (use `git add .` for all)|
|`git commit -m "message"`|Save staged changes with a note|
|`git push`|Upload commits to a remote repository|
|`git pull`|Download latest changes from remote|
|`git branch`|List branches (current branch highlighted)|
|`git checkout -b <name>`|Create and switch to a new branch|
|`git merge <branch>`|Merge a branch into current branch|

---

## Example Git Workflow

1. **Create a new project**
```bash
mkdir my-project
cd my-project
git init
```

2. **Make changes and save**
```bash
git add .
git commit -m "Initial commit"
```

3. **Push to GitHub**
```bash
git remote add origin <repository-url>
git push -u origin main
```

---

💡 _Tip:_ If you’re just starting, practice by making a small text file and tracking it with Git.  
This helps you understand the staging → commit → push flow.
