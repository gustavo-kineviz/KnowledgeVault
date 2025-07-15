# What is Git?
The most widely used [[Glossary#Version control system|version control system]] in the world. It tracks changes, enables collaboration, and helps manage project history.

# How to install it?
For **MacOS**
	Install [homebrew](https://brew.sh/) if you don't already have it, then:  
	`$ brew install git`

For **Windows**:
	https://git-scm.com/downloads/

For **Linux**:
	https://git-scm.com/downloads/linux
### Configuring Git
Set your identity (required before committing):

`git config --global user.name "your_username_here"`

`git config --global user.email "your_email@email.com"`

# Concepts
- **Working directory**
	- Your project’s local files where you make changes.
	- Modifications are **untracked** until staged.
- **Staging area (index)**
	- A middle layer where you **prepare changes** before committing.
	- Use `git add` to move changes here.
- **Local repository**
	- The .git folder storing your project's full history
	- Commits (`git commit`) save staged changes here permanently
- **Remote repository**
	- A hosted version (e.g., GitHub, GitLab) for team collaboration
	- Push (`git push`) and pull (`git pull`) sync changes with others
- **Merging**
	- Combines changes from different branches/commits.
	- Git **automatically** merges when possible; conflicts require manual fixes.

**Git Flow:**  
![[Pasted image 20250706200742.png]]

# Basic Terminal & Git Commands

## **Terminal Navigation**

| Command        | Description                             |
| -------------- | --------------------------------------- |
| `pwd`          | Show current directory path             |
| `ls`           | List files/folders in current directory |
| `cd <folder>`  | \|Move into a folder                    |
| `cd ..`        | Move up one folder level                |
| `mkdir <name>` | Create a new folder                     |
| `touch <file>` | Create a new file                       |

## **Essential Git Commands**

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `git init`                | Start a new Git repository                 |
| `git clone <url>`         | Download a remote repository               |
| `git status`              | Check untracked/staged changes             |
| `git add <file>`          | Stage a file (use `git add .` for all)     |
| `git commit -m "message"` | Save staged changes with a note            |
| `git push`                | Upload commits to a remote repository      |
| `git pull`                | Download latest changes from remote        |
| `git branch`              | List branches (current branch highlighted) |
| `git checkout`            | Create and switch to a new branch          |
| `git merge <branch>`      | Merge a branch into current branch         |

### Example Workflow

1. Create a new project:
	`mkdir my-project`
	`cd my-project`
	`git init`

2. Make changes, then save:  
	`git add .`
    `git commit -m "Initial commit"`

3. Push to GitHub:   
	`git remote add origin <repository-url>`
    `git push -u origin main`