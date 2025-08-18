# What is Terminal?

Terminal is a [[Glossary#Command Line Interface (CLI)|command-line interface]] on Mac that lets you control your computer using text commands.  
It's **powerful**, **fast**, and **essential** for developers and power users.

---

## How to Open Terminal

### **Method 1: Spotlight Search**

1. Press `Cmd + Space` to open Spotlight
2. Type "Terminal" and press Enter

### **Method 2: Finder**

1. Open Finder
2. Go to Applications → Utilities → Terminal

### **Method 3: Launchpad**

1. Open Launchpad (F4 or pinch with thumb and three fingers)
2. Look in the "Other" folder for Terminal

---

## Understanding the Terminal Window

When you open Terminal, you'll see something like:

```bash
MacBook-Pro:~ username$
```

**Breaking this down:**

- `MacBook-Pro` - Your computer name
- `~` - Current location (~ means your home folder)
- `username` - Your Mac username
- `$` - Command prompt (ready for your input)

---

## Key Terminal Concepts

- **Command prompt**  
    The `$` symbol where you type commands.  
    ➡️ Press Enter to execute commands.
    
- **Directory (folder)**  
    A location on your computer containing files and other folders.  
    ➡️ Use `cd` to navigate between directories.
    
- **Path**  
    The full location of a file or folder.  
    ➡️ Example: `/Users/username/Documents/myfile.txt`
    
- **Home directory (~)**  
    Your personal folder containing Desktop, Documents, etc.  
    ➡️ Shortcut: `~` always refers to your home folder.
    
- **Root directory (/)**  
    The top-level folder of your entire system.  
    ➡️ Everything on your Mac lives under `/`
    

---

## Essential Navigation Commands

|Command|Description|Example|
|---|---|---|
|`pwd`|Show current directory path|`/Users/username/Desktop`|
|`ls`|List files/folders in current directory|Shows all items here|
|`ls -la`|List with details (hidden files, permissions)|More detailed view|
|`cd <folder>`|Move into a folder|`cd Documents`|
|`cd ..`|Move up one folder level|Goes to parent folder|
|`cd ~`|Go to home directory|Takes you home|
|`cd /`|Go to root directory|Goes to system root|

---

## File and Folder Commands

|Command|Description|Example|
|---|---|---|
|`mkdir <name>`|Create a new folder|`mkdir my-project`|
|`touch <file>`|Create a new file|`touch readme.txt`|
|`cp <source> <destination>`|Copy a file|`cp file.txt backup.txt`|
|`mv <old> <new>`|Move/rename a file|`mv old.txt new.txt`|
|`rm <file>`|Delete a file|`rm unwanted.txt`|
|`rm -rf <folder>`|Delete a folder and contents|`rm -rf old-folder`|
|`open <file>`|Open file with default app|`open document.pdf`|
|`open .`|Open current folder in Finder|Opens current location|

---

## Useful Shortcuts and Tips

|Shortcut|Description|
|---|---|
|`Tab`|Auto-complete file/folder names|
|`↑` / `↓`|Navigate through command history|
|`Ctrl + C`|Cancel current command|
|`Ctrl + L`|Clear the terminal screen|
|`Cmd + K`|Clear terminal (alternative)|
|`Cmd + T`|Open new terminal tab|
|`Cmd + W`|Close current terminal tab|

---

## File Viewing Commands

|Command|Description|
|---|---|
|`cat <file>`|Display entire file content|
|`less <file>`|View file page by page (press `q` to quit)|
|`head <file>`|Show first 10 lines of file|
|`tail <file>`|Show last 10 lines of file|
|`wc <file>`|Count lines, words, and characters|

---

## Example Terminal Session

1. **Check where you are and what's here**

```bash
pwd
ls
```

2. **Create a project folder and enter it**

```bash
mkdir my-first-project
cd my-first-project
```

3. **Create some files**

```bash
touch readme.txt
touch main.py
ls
```

4. **Go back home**

```bash
cd ~
```

---

## Common Beginner Mistakes

- **Typing file names wrong** → Use `Tab` to auto-complete
- **Forgetting spaces** → Commands need spaces: `cd Documents` not `cdDocuments`
- **Case sensitivity** → `Desktop` ≠ `desktop` on Mac
- **Using `rm` carelessly** → Deleted files don't go to Trash!

---

## Getting Help

|Command|Description|
|---|---|
|`man <command>`|Show manual for a command (press `q` to quit)|
|`<command> --help`|Show quick help for a command|
|`which <command>`|Show where a command is located|

---

💡 _Tip:_ Start by exploring your home directory with `ls` and `cd`. Practice navigating to Desktop, Documents, and Downloads to get comfortable with movement before trying more advanced commands.

⚠️ _Warning:_ Be careful with `rm` and `rm -rf` commands - they permanently delete files!