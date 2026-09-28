// Zero to Claude Code - Learning Platform Data

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  content: string; // Markdown content
  quiz?: QuizQuestion[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: "terminal-basics",
    slug: "terminal-basics",
    title: "Terminal Basics",
    description: "Learn the fundamentals of using the terminal - the foundation for everything that follows.",
    icon: "💻",
    lessons: [
      {
        id: "what-is-terminal",
        moduleId: "terminal-basics",
        slug: "what-is-terminal",
        title: "What is a Terminal?",
        description: "Understand what the terminal is and why it's powerful",
        duration: "3 min",
        content: `
# What is a Terminal?

The **terminal** (also called "command line" or "shell") is a text-based way to control your computer. Instead of clicking buttons and icons, you type commands.

## Why Learn the Terminal?

<tip>
**The terminal is like a superpower.** Once you learn it, you can do things in seconds that would take minutes with a mouse.
</tip>

Here's why developers love it:

1. **Speed** - Type faster than you can click
2. **Power** - Access features hidden from regular users  
3. **Automation** - Chain commands together
4. **AI Tools** - Claude Code runs entirely in the terminal

## What Does It Look Like?

<terminal>
$ echo "Hello, Australia!"
Hello, Australia!
$ 
</terminal>

That \`$\` symbol is called the **prompt** - it's where you type commands. The computer responds with output below.

## Don't Be Scared!

<warning>
Many people find the terminal intimidating at first. That's completely normal! By the end of this module, you'll feel right at home.
</warning>

The terminal can't break your computer with basic commands. We'll start simple and build up.

<aussie>
Think of the terminal like a really efficient text message to your computer. No emojis needed. 🇦🇺
</aussie>

## Key Takeaways

- The terminal is a text-based interface to your computer
- It's faster and more powerful than clicking
- Claude Code runs in the terminal
- It's okay to feel unsure at first - everyone does!
`
      },
      {
        id: "opening-terminal",
        moduleId: "terminal-basics",
        slug: "opening-terminal",
        title: "Opening Your Terminal",
        description: "Find and open the terminal on your operating system",
        duration: "2 min",
        content: `
# Opening Your Terminal

Let's find the terminal on your computer. The steps differ by operating system.

## macOS (Most Common in Aus Dev Community)

<terminal>
Press: ⌘ + Space
Type: Terminal
Press: Enter
</terminal>

Or find it in: **Applications → Utilities → Terminal**

<tip>
**Pro tip:** Once open, right-click the Terminal icon in your Dock and select "Options → Keep in Dock" for easy access.
</tip>

## Windows

You have two options:

### Option 1: PowerShell (Built-in)
- Press \`Win + X\`
- Click "Windows Terminal" or "PowerShell"

### Option 2: Git Bash (Recommended)
1. Download from [git-scm.com](https://git-scm.com)
2. Install with default options
3. Right-click desktop → "Git Bash Here"

<warning>
For Claude Code, we recommend Git Bash on Windows. It uses the same commands as Mac/Linux, making tutorials easier to follow.
</warning>

## Linux

- Press \`Ctrl + Alt + T\` on most distributions
- Or search for "Terminal" in your applications menu

## What You Should See

Once open, you'll see something like:

<terminal>
john@macbook ~ % 
</terminal>

Or on Windows:
<terminal>
PS C:\\Users\\john>
</terminal>

This is your **prompt** - it's ready for commands!

<aussie>
On a Mac, your prompt might show a \`%\` instead of \`$\`. They mean the same thing - "ready for your command, mate!"
</aussie>

## Quick Test

Type this and press Enter:

<terminal>
$ whoami
john
</terminal>

If it shows your username, you're ready to go! 🎉
`
      },
      {
        id: "understanding-paths",
        moduleId: "terminal-basics",
        slug: "understanding-paths",
        title: "Understanding File Paths",
        description: "Learn how files and folders are organized on your computer",
        duration: "4 min",
        content: `
# Understanding File Paths

Before we navigate around, we need to understand how your computer organizes files.

## The Folder Tree

Your computer's files are organized like a tree:

\`\`\`
/
├── Users/
│   └── john/
│       ├── Desktop/
│       ├── Documents/
│       │   └── projects/
│       │       └── my-app/
│       └── Downloads/
├── Applications/
└── System/
\`\`\`

## Absolute vs Relative Paths

### Absolute Paths
Start from the root (\`/\`) and give the complete location:

<terminal>
/Users/john/Documents/projects/my-app
</terminal>

### Relative Paths  
Start from where you currently are:

<terminal>
# If you're in /Users/john/Documents:
projects/my-app

# If you're in /Users/john:
Documents/projects/my-app
</terminal>

## Special Path Shortcuts

| Symbol | Meaning | Example |
|--------|---------|---------|
| \`~\` | Your home folder | \`~/Documents\` = \`/Users/john/Documents\` |
| \`.\` | Current folder | \`./file.txt\` = file in this folder |
| \`..\` | Parent folder | \`../\` = go up one level |

<tip>
The tilde \`~\` is incredibly useful. \`~/Desktop\` always means YOUR desktop, regardless of your username.
</tip>

## Examples

<terminal>
# These are the same if your username is "john":
/Users/john/Desktop
~/Desktop

# Go up one folder then into Downloads:
../Downloads

# Go up two folders:
../../
</terminal>

## Windows Note

<warning>
Windows uses backslashes \`\\\` instead of forward slashes \`/\`. However, Git Bash accepts both!

Windows: \`C:\\Users\\john\\Documents\`
Git Bash: \`/c/Users/john/Documents\`
</warning>

<aussie>
Think of paths like giving directions to a mate's house. Absolute: "123 Main St, Sydney NSW 2000". Relative: "Two doors down from the pub."
</aussie>

## Key Takeaways

- Paths are addresses for files and folders
- Absolute paths start from root (\`/\`)
- Relative paths start from where you are
- \`~\` is shorthand for your home folder
- \`..\` goes up one folder
`
      },
      {
        id: "navigating-cd",
        moduleId: "terminal-basics",
        slug: "navigating-cd",
        title: "Navigating with cd",
        description: "Move around your file system like a pro",
        duration: "4 min",
        content: `
# Navigating with cd

The \`cd\` command means "change directory". It's how you move around.

## Basic Usage

<terminal>
$ cd Documents
$ 
</terminal>

That's it! You're now in your Documents folder.

## See Where You Are: pwd

Lost? The \`pwd\` command ("print working directory") shows your current location:

<terminal>
$ pwd
/Users/john/Documents
</terminal>

## Common cd Patterns

<terminal>
# Go to your home folder
$ cd ~
$ cd    # (just cd by itself also works!)

# Go to Desktop
$ cd ~/Desktop

# Go up one folder
$ cd ..

# Go up two folders
$ cd ../..

# Go to root (top of file system)
$ cd /

# Go to previous folder (like browser back button)
$ cd -
</terminal>

<tip>
**Tab completion is your best friend!** Start typing a folder name and press Tab - the terminal will complete it for you.

\`cd Doc\` + Tab → \`cd Documents/\`
</tip>

## See What's Here: ls

The \`ls\` command lists files and folders:

<terminal>
$ ls
Desktop    Documents    Downloads    Pictures

$ ls -la    # Show hidden files with details
total 0
drwxr-xr-x  12 john  staff  384 Apr 30 10:00 .
drwxr-xr-x   5 john  staff  160 Apr 30 09:00 ..
drwx------   5 john  staff  160 Apr 30 10:00 Desktop
drwx------  10 john  staff  320 Apr 30 10:00 Documents
</terminal>

## Putting It Together

<terminal>
$ cd ~                    # Start at home
$ pwd
/Users/john

$ cd Documents/projects   # Go to projects folder
$ pwd
/Users/john/Documents/projects

$ ls                      # See what's here
my-app    website    scripts

$ cd my-app              # Go into my-app
$ cd ../website          # Go to sibling folder
$ cd ~                   # Back home!
</terminal>

<aussie>
\`cd\` without any arguments always takes you home. Like clicking your heels together! 🏠
</aussie>

<warning>
Folder names with spaces need quotes or escaping:
\`cd "My Folder"\` or \`cd My\\ Folder\`

Tip: Avoid spaces in folder names when possible.
</warning>

## Practice Exercise

Try this sequence:

1. Open your terminal
2. Type \`pwd\` to see where you are
3. Type \`cd Desktop\` to go to Desktop
4. Type \`ls\` to see files there
5. Type \`cd ~\` to go home
6. Type \`pwd\` to confirm

You're navigating! 🎉
`
      },
      {
        id: "creating-files-folders",
        moduleId: "terminal-basics",
        slug: "creating-files-folders",
        title: "Creating Files and Folders",
        description: "Learn to create and organize your project files",
        duration: "4 min",
        content: `
# Creating Files and Folders

Now let's create things! These commands are essential for setting up projects.

## Creating Folders: mkdir

\`mkdir\` means "make directory" (directory = folder):

<terminal>
$ mkdir my-project
$ ls
my-project

$ cd my-project
$ pwd
/Users/john/my-project
</terminal>

### Create Nested Folders

Use \`-p\` to create parent folders automatically:

<terminal>
$ mkdir -p projects/2026/april/my-app
# Creates all folders in the path!
</terminal>

## Creating Files: touch

\`touch\` creates an empty file:

<terminal>
$ touch index.html
$ touch styles.css script.js
$ ls
index.html    script.js    styles.css
</terminal>

<tip>
You can create multiple files at once by listing them with spaces!
</tip>

## A Real Example

Let's create a project structure:

<terminal>
$ cd ~
$ mkdir -p projects/my-website
$ cd projects/my-website
$ mkdir src public
$ touch src/index.js src/styles.css
$ touch public/index.html
$ ls -R    # Show everything recursively

.:
public    src

./public:
index.html

./src:
index.js    styles.css
</terminal>

## Deleting: rm and rmdir

<warning>
⚠️ Terminal deletions are permanent - no Trash/Recycle Bin! Double-check before deleting.
</warning>

<terminal>
# Delete a file
$ rm unwanted-file.txt

# Delete an empty folder
$ rmdir empty-folder

# Delete a folder and everything inside (careful!)
$ rm -r folder-with-stuff

# Delete with confirmation prompts
$ rm -ri folder-with-stuff
</terminal>

## Renaming and Moving: mv

\`mv\` does both moving and renaming:

<terminal>
# Rename a file
$ mv old-name.txt new-name.txt

# Move to another folder
$ mv file.txt Documents/

# Move and rename
$ mv file.txt Documents/new-name.txt
</terminal>

## Copying: cp

<terminal>
# Copy a file
$ cp original.txt copy.txt

# Copy to another folder
$ cp file.txt Documents/

# Copy a folder (need -r for recursive)
$ cp -r my-folder my-folder-backup
</terminal>

<aussie>
Creating a CLAUDE.md file will be important later. For now, just remember: \`touch CLAUDE.md\` creates it! 📝
</aussie>

## Quick Reference

| Command | What it does |
|---------|--------------|
| \`mkdir folder\` | Create a folder |
| \`mkdir -p a/b/c\` | Create nested folders |
| \`touch file.txt\` | Create empty file |
| \`rm file.txt\` | Delete file |
| \`rm -r folder\` | Delete folder and contents |
| \`mv old new\` | Move or rename |
| \`cp src dest\` | Copy file |
| \`cp -r src dest\` | Copy folder |
`
      },
      {
        id: "reading-editing",
        moduleId: "terminal-basics",
        slug: "reading-editing",
        title: "Reading and Editing Files",
        description: "View and modify file contents from the terminal",
        duration: "4 min",
        content: `
# Reading and Editing Files

Let's learn how to peek inside files and make changes.

## Reading Files: cat

\`cat\` displays the entire file contents:

<terminal>
$ cat package.json
{
  "name": "my-app",
  "version": "1.0.0"
}
</terminal>

<tip>
For long files, \`cat\` dumps everything at once. Use \`less\` instead to scroll through pages.
</tip>

## Reading Long Files: less

<terminal>
$ less long-file.txt
# Use arrow keys to scroll
# Press 'q' to quit
# Press '/' to search
</terminal>

## Reading Just Parts

<terminal>
# First 10 lines
$ head file.txt

# Last 10 lines
$ tail file.txt

# First 20 lines
$ head -n 20 file.txt

# Watch a log file update in real-time
$ tail -f app.log
</terminal>

## Quick Edits: echo and Redirection

<terminal>
# Write text to a file (overwrites!)
$ echo "Hello World" > greeting.txt

# Append text to a file (adds to end)
$ echo "More text" >> greeting.txt

$ cat greeting.txt
Hello World
More text
</terminal>

<warning>
\`>\` overwrites the entire file! Use \`>>\` to append without losing existing content.
</warning>

## Terminal Text Editors

### nano (Easiest)

<terminal>
$ nano file.txt
</terminal>

- Edit with arrow keys
- Save: \`Ctrl + O\`, then Enter
- Exit: \`Ctrl + X\`

<aussie>
nano is like texting - simple and gets the job done. Perfect for quick edits! 📱
</aussie>

### vim (Powerful but Tricky)

<terminal>
$ vim file.txt
</terminal>

<warning>
First time in vim? If you're stuck:
1. Press \`Esc\` (maybe a few times)
2. Type \`:q!\` and press Enter to quit without saving
3. Or \`:wq\` to save and quit
</warning>

vim is powerful but has a learning curve. nano is fine for now!

## VS Code from Terminal

If you have VS Code installed:

<terminal>
$ code file.txt          # Open file in VS Code
$ code .                  # Open current folder in VS Code
$ code ~/projects/my-app  # Open a project
</terminal>

<tip>
For most editing, \`code .\` to open VS Code is the easiest option. Terminal editing is great for quick changes on servers.
</tip>

## Searching in Files: grep

<terminal>
# Find lines containing "error"
$ grep "error" app.log

# Search all files in a folder
$ grep -r "TODO" src/

# Show line numbers
$ grep -n "function" script.js
</terminal>

## Quick Reference

| Command | What it does |
|---------|--------------|
| \`cat file\` | Show entire file |
| \`less file\` | Scroll through file |
| \`head file\` | Show first 10 lines |
| \`tail file\` | Show last 10 lines |
| \`nano file\` | Edit in nano |
| \`code file\` | Open in VS Code |
| \`echo "text" > file\` | Write to file |
| \`echo "text" >> file\` | Append to file |
| \`grep "text" file\` | Search in file |
`
      },
      {
        id: "terminal-quiz",
        moduleId: "terminal-basics",
        slug: "terminal-quiz",
        title: "Module 1 Quiz",
        description: "Test your terminal knowledge before moving on",
        duration: "5 min",
        content: `
# Module 1 Quiz: Terminal Basics

Time to test what you've learned! You need 80% to pass.

<tip>
Take your time. You can retry as many times as you need.
</tip>

Complete the quiz below to unlock Module 2: Getting Started with Claude Code.
`,
        quiz: [
          {
            id: "q1",
            question: "What does the `cd` command do?",
            options: [
              "Create directory",
              "Change directory",
              "Copy directory",
              "Clear display"
            ],
            correctIndex: 1,
            explanation: "`cd` stands for 'change directory' - it moves you to a different folder."
          },
          {
            id: "q2",
            question: "What does `~` represent in a file path?",
            options: [
              "The root folder",
              "The current folder",
              "Your home folder",
              "The parent folder"
            ],
            correctIndex: 2,
            explanation: "`~` is a shortcut for your home folder, e.g., `/Users/john`"
          },
          {
            id: "q3",
            question: "Which command creates a new empty file?",
            options: [
              "mkdir",
              "touch",
              "create",
              "new"
            ],
            correctIndex: 1,
            explanation: "`touch filename` creates an empty file. `mkdir` creates folders."
          },
          {
            id: "q4",
            question: "What does `ls -la` show?",
            options: [
              "Only folders",
              "Only hidden files",
              "All files including hidden ones, with details",
              "Files sorted by size"
            ],
            correctIndex: 2,
            explanation: "`-l` shows detailed info, `-a` shows hidden files (starting with .)"
          },
          {
            id: "q5",
            question: "How do you go up one folder level?",
            options: [
              "cd up",
              "cd ..",
              "cd ~",
              "cd /"
            ],
            correctIndex: 1,
            explanation: "`..` means 'parent folder'. `cd ..` moves you up one level."
          }
        ]
      }
    ]
  },
  {
    id: "getting-started",
    slug: "getting-started",
    title: "Getting Started with Claude Code",
    description: "Install Claude Code and run your first AI-powered coding session.",
    icon: "◆",
    lessons: [
      {
        id: "what-is-claude-code",
        moduleId: "getting-started",
        slug: "what-is-claude-code",
        title: "What is Claude Code?",
        description: "Understand what Claude Code is and what makes it special",
        duration: "3 min",
        content: `
# What is Claude Code?

Claude Code is a **terminal-based AI coding assistant** made by Anthropic. Think of it as having an expert developer sitting next to you, but in your terminal.

## How It's Different

You might have used ChatGPT or Claude in a browser. Claude Code is different:

| Browser AI | Claude Code |
|------------|-------------|
| Copy/paste code back and forth | Directly edits your files |
| You describe your project | It sees your actual code |
| Manual file management | Creates files for you |
| Tab switching | Stays in your terminal |

<tip>
Claude Code doesn't just suggest code - it can read, write, and run code on your computer with your permission.
</tip>

## What Can It Do?

<terminal>
$ claude "Add a login page to my app"
</terminal>

Claude Code can:

- ✅ Read your existing code
- ✅ Create new files
- ✅ Edit existing files
- ✅ Run terminal commands
- ✅ Install packages
- ✅ Debug errors
- ✅ Explain code
- ✅ Refactor projects

<warning>
Claude Code asks permission before making changes. You stay in control!
</warning>

## The Workflow

<terminal>
# 1. Navigate to your project
$ cd my-project

# 2. Start Claude Code
$ claude

# 3. Ask for what you want
> Build a todo list with local storage

# 4. Review and approve changes
Claude: I'll create these files:
  - index.html
  - styles.css  
  - app.js
Proceed? (y/n)

# 5. Done! Your code is ready.
</terminal>

<aussie>
It's like pair programming with an AI. You're the driver, Claude's the navigator. No more StackOverflow rabbit holes! 🐰
</aussie>

## Why Learn This?

1. **Speed** - Build in hours, not days
2. **Learning** - Claude explains as it codes
3. **Quality** - Get production-ready code
4. **Australian Context** - Add our skills for local knowledge!

## Prerequisites

Before installing Claude Code, you need:

- ✅ Terminal basics (you just learned these!)
- ✅ Node.js installed (we'll cover this)
- ✅ An Anthropic account (free to start)

## Key Takeaways

- Claude Code runs in your terminal
- It directly reads and edits your files
- You approve all changes before they happen
- It's like having an expert developer on call 24/7
`
      },
      {
        id: "installing-claude-code",
        moduleId: "getting-started",
        slug: "installing-claude-code",
        title: "Installing Claude Code",
        description: "Get Claude Code running on your machine",
        duration: "5 min",
        content: `
# Installing Claude Code

Let's get Claude Code installed. The process takes about 5 minutes.

## Step 1: Install Node.js

Claude Code requires Node.js. Check if you have it:

<terminal>
$ node --version
v20.10.0
</terminal>

If you see a version number (v18 or higher), skip to Step 2!

### Installing Node.js

**macOS (recommended):**
<terminal>
# Install Homebrew first (if not installed)
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
$ brew install node

# Verify
$ node --version
</terminal>

**Windows:**
1. Download from [nodejs.org](https://nodejs.org)
2. Run the installer
3. Restart your terminal

**Linux:**
<terminal>
$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
$ sudo apt-get install -y nodejs
</terminal>

## Step 2: Install Claude Code

<terminal>
$ npm install -g @anthropic-ai/claude-code
</terminal>

<tip>
The \`-g\` flag installs it globally, so you can use it from any folder.
</tip>

If you get permission errors:

<terminal>
# macOS/Linux
$ sudo npm install -g @anthropic-ai/claude-code

# Or fix npm permissions (better long-term)
$ mkdir ~/.npm-global
$ npm config set prefix '~/.npm-global'
# Add to your shell config: export PATH=~/.npm-global/bin:$PATH
</terminal>

## Step 3: Authenticate

<terminal>
$ claude auth
</terminal>

This opens a browser window. Sign in with your Anthropic account (create one if needed).

<warning>
Claude Code uses API credits. New accounts get some free credits. After that, it's pay-per-use (very affordable for learning).
</warning>

## Step 4: Verify Installation

<terminal>
$ claude --version
Claude Code v1.x.x

$ claude --help
Claude Code - AI coding assistant

Commands:
  claude [prompt]    Start session or run prompt
  claude auth        Authenticate with Anthropic
  ...
</terminal>

## Quick Test

<terminal>
$ mkdir test-project
$ cd test-project
$ claude "Create a hello world HTML file"
</terminal>

If Claude creates an HTML file, you're all set! 🎉

<aussie>
Having trouble? The Anthropic Discord is friendly and responsive. Just search "Claude Code install [your issue]". 🦘
</aussie>

## Troubleshooting

**"command not found: claude"**
- Make sure npm global bin is in your PATH
- Try opening a new terminal window

**Authentication fails**
- Clear cookies and try again
- Check your internet connection

**API errors**
- Verify your account at console.anthropic.com
- Check you have API credits

## Key Takeaways

- Claude Code needs Node.js v18+
- Install with \`npm install -g @anthropic-ai/claude-code\`
- Authenticate with \`claude auth\`
- Test with a simple prompt to verify it works
`
      },
      {
        id: "first-session",
        moduleId: "getting-started",
        slug: "first-session",
        title: "Your First Claude Code Session",
        description: "Start your first interactive coding session",
        duration: "5 min",
        content: `
# Your First Claude Code Session

Time to build something! Let's create a simple webpage together.

## Starting a Session

<terminal>
$ mkdir my-first-project
$ cd my-first-project
$ claude
</terminal>

You'll see Claude's interface:

<terminal>
╭─────────────────────────────────────────╮
│ ◆ Claude Code                           │
│   Your AI pair programmer               │
╰─────────────────────────────────────────╯

Tips:
- Describe what you want to build
- Be specific about requirements
- You can ask follow-up questions

> 
</terminal>

## Your First Prompt

Type this at the \`>\` prompt:

<terminal>
> Create a simple landing page for an Australian coffee shop called "Byron Beans". Include a hero section, about section, and contact info.
</terminal>

## What Happens Next

Claude will:

1. **Plan** - Outline what files it will create
2. **Ask permission** - Show you the changes before making them
3. **Create** - Build the files when you approve
4. **Explain** - Tell you what it did and why

<terminal>
Claude: I'll create a landing page for Byron Beans with:

Files to create:
  📄 index.html - Main page structure
  📄 styles.css - Styling with modern CSS
  
The page will include:
  - Hero section with shop name
  - About section with story
  - Contact info with address
  
Proceed? [Y/n]
</terminal>

Type \`y\` and press Enter to approve!

<tip>
You can say \`n\` to cancel, or ask Claude to modify its plan before proceeding.
</tip>

## View Your Creation

Once Claude finishes:

<terminal>
$ ls
index.html    styles.css

# Open in browser (macOS)
$ open index.html

# Windows
$ start index.html

# Linux
$ xdg-open index.html
</terminal>

## Iterating

Still in the session? Ask for changes:

<terminal>
> Add a menu section with coffee prices in AUD
> Make the hero section full-screen height
> Add a Google Maps embed for Byron Bay
</terminal>

<aussie>
Notice how Claude knows Byron Bay is in Australia? It picks up context from your prompts! 🏖️
</aussie>

## The Conversation Flow

Claude Code remembers your conversation:

<terminal>
> Add a newsletter signup form

Claude: I'll add a newsletter form to the contact section...

> Actually, put it in the footer instead

Claude: Got it, I'll move it to the footer...
</terminal>

## Ending Your Session

When you're done:

<terminal>
> /exit
</terminal>

Or press \`Ctrl + C\`.

<warning>
Your session history is saved. Next time you run \`claude\` in this folder, Claude remembers your project context!
</warning>

## What You Built

You just created a website without writing code manually! This is the power of AI-assisted development.

## Key Takeaways

- Start with \`claude\` in your project folder
- Describe what you want in plain English
- Approve changes before they're made
- Iterate with follow-up requests
- Exit with \`/exit\` or Ctrl+C
`
      },
      {
        id: "understanding-permissions",
        moduleId: "getting-started",
        slug: "understanding-permissions",
        title: "Understanding Permissions",
        description: "Learn how Claude Code keeps you in control",
        duration: "4 min",
        content: `
# Understanding Permissions

Claude Code can do a lot - read files, write code, run commands. But YOU are always in control.

## The Permission System

Every action Claude takes requires your approval:

<terminal>
Claude: I need to create these files:
  📄 Create: src/App.js
  📄 Create: src/styles.css
  
Allow? [Y/n/e]
</terminal>

| Option | Meaning |
|--------|---------|
| \`Y\` or \`y\` | Yes, proceed |
| \`n\` | No, cancel |
| \`e\` | Edit - modify before running |

<tip>
Pressing Enter without typing anything usually means "Yes" (the capital Y indicates the default).
</tip>

## Types of Permissions

### File Operations

<terminal>
Claude: I'll make these changes:
  📄 Edit: package.json (add dependencies)
  📄 Create: src/utils/api.js
  🗑️ Delete: src/old-file.js
  
Allow? [Y/n]
</terminal>

### Running Commands

<terminal>
Claude: I need to run:
  $ npm install axios lodash
  
This will install packages. Allow? [Y/n]
</terminal>

### Sensitive Operations

Claude is extra careful with:

<warning>
- Deleting files
- Running shell commands
- Installing packages
- Accessing system files
</warning>

<terminal>
Claude: ⚠️ This command will delete files:
  $ rm -rf node_modules
  
Are you sure? [y/N]
</terminal>

Notice the \`N\` is capitalised - Claude defaults to "No" for risky actions.

## Auto-Accept Mode

For experienced users, you can reduce prompts:

<terminal>
$ claude --auto-accept files
# Automatically accepts file changes, still asks for commands
</terminal>

<warning>
Only use auto-accept when you trust the task and understand what Claude is doing. Not recommended for beginners!
</warning>

## Reviewing Changes

Before accepting, you can ask Claude:

<terminal>
> What changes will this make to my existing code?
> Show me a diff of the changes
> Explain why you're deleting that file
</terminal>

## The Safety Net

Claude Code has guardrails:

1. **Can't access** files outside your project without explicit paths
2. **Won't run** dangerous commands without clear warnings
3. **Asks twice** for destructive operations
4. **Logs everything** so you can review

<aussie>
Think of it like a contractor asking before renovating your house. "Righto mate, gonna knock down this wall - that alright?" 🏗️
</aussie>

## Best Practices

1. ✅ Read what Claude is about to do
2. ✅ Ask questions if unsure
3. ✅ Start with small changes
4. ✅ Use git to track changes
5. ✅ Don't auto-accept until comfortable

## Key Takeaways

- You approve every file change and command
- Risky operations default to "No"
- Review changes before accepting
- Auto-accept is optional and for experienced users
- Claude explains what it's doing if you ask
`
      },
      {
        id: "basic-commands",
        moduleId: "getting-started",
        slug: "basic-commands",
        title: "Basic Commands",
        description: "Learn the essential slash commands for Claude Code",
        duration: "4 min",
        content: `
# Basic Commands

Claude Code has built-in commands that start with \`/\`. These give you control over your session.

## Essential Commands

### /help - Get Help

<terminal>
> /help

Available commands:
  /help     - Show this help message
  /clear    - Clear conversation history
  /exit     - End session
  /compact  - Summarize and clear history
  /cost     - Show current session cost
  ...
</terminal>

### /clear - Start Fresh

<terminal>
> /clear
Conversation cleared. Starting fresh!
</terminal>

<tip>
Use \`/clear\` when you want to start a new task in the same project without old context.
</tip>

### /exit - End Session

<terminal>
> /exit
Session ended. Goodbye!
$
</terminal>

Or just press \`Ctrl + C\`.

### /cost - Check Usage

<terminal>
> /cost
Session cost: $0.12
  - Input tokens: 15,234
  - Output tokens: 8,567
</terminal>

<aussie>
Keep an eye on costs while learning! A typical learning session is under $0.50. 💰
</aussie>

## Productivity Commands

### /compact - Summarize History

When your conversation gets long:

<terminal>
> /compact
Summarizing conversation... 
Conversation compacted. Key context preserved.
</terminal>

This reduces token usage while keeping important context.

### /undo - Revert Last Change

<terminal>
> /undo
Reverted: src/App.js
</terminal>

<warning>
\`/undo\` only works for recent file changes made by Claude. For bigger rollbacks, use git.
</warning>

### /diff - See Changes

<terminal>
> /diff src/App.js
Shows what Claude changed in the file
</terminal>

## Mode Commands

### /plan - Think Before Acting

<terminal>
> /plan
Planning mode enabled. I'll show my plan before making changes.
</terminal>

Great for complex tasks where you want to review the approach first.

### /chat - Just Talk

<terminal>
> /chat
Chat mode. I won't make any file changes.
</terminal>

Use this when you just want to discuss or learn without modifying files.

## Quick Reference

| Command | What it does |
|---------|--------------|
| \`/help\` | List all commands |
| \`/clear\` | Clear conversation |
| \`/exit\` | End session |
| \`/compact\` | Summarize and reduce tokens |
| \`/cost\` | Show session cost |
| \`/undo\` | Revert last change |
| \`/diff [file]\` | Show changes to file |
| \`/plan\` | Enable planning mode |
| \`/chat\` | Talk without file changes |

## Combining Commands

You can chat and use commands in the same session:

<terminal>
> Build a user authentication system
Claude: I'll create the auth system...

> /cost
Session cost: $0.08

> Actually, use JWT tokens instead
Claude: Good point, I'll switch to JWT...

> /diff src/auth.js
[shows the changes]

> Looks good!
</terminal>

## Key Takeaways

- Commands start with \`/\`
- \`/help\` shows all available commands
- \`/clear\` and \`/compact\` manage conversation length
- \`/cost\` helps track API usage
- \`/plan\` mode is great for complex tasks
`
      },
      {
        id: "getting-started-quiz",
        moduleId: "getting-started",
        slug: "getting-started-quiz",
        title: "Module 2 Quiz",
        description: "Test your Claude Code fundamentals",
        duration: "5 min",
        content: `
# Module 2 Quiz: Getting Started

Let's make sure you've got the basics down before we dive into projects.

Complete the quiz to unlock Module 3: Working with Projects.
`,
        quiz: [
          {
            id: "q1",
            question: "How do you start a Claude Code session?",
            options: [
              "claude start",
              "claude",
              "npm run claude",
              "cc start"
            ],
            correctIndex: 1,
            explanation: "Just type `claude` in your terminal to start an interactive session."
          },
          {
            id: "q2",
            question: "What happens when Claude wants to create a file?",
            options: [
              "It creates it automatically",
              "It asks for your permission first",
              "It sends you an email",
              "It opens VS Code"
            ],
            correctIndex: 1,
            explanation: "Claude always asks permission before making any file changes."
          },
          {
            id: "q3",
            question: "Which command shows your session cost?",
            options: [
              "/money",
              "/price",
              "/cost",
              "/usage"
            ],
            correctIndex: 2,
            explanation: "`/cost` shows your current session's API cost and token usage."
          },
          {
            id: "q4",
            question: "What does /compact do?",
            options: [
              "Compresses your files",
              "Summarizes conversation to save tokens",
              "Exits the session",
              "Deletes unused files"
            ],
            correctIndex: 1,
            explanation: "/compact summarizes long conversations to reduce token usage while keeping key context."
          },
          {
            id: "q5",
            question: "How do you exit a Claude Code session?",
            options: [
              "/exit or Ctrl+C",
              "/quit",
              "/stop",
              "Type 'bye'"
            ],
            correctIndex: 0,
            explanation: "Either `/exit` or pressing Ctrl+C will end your session."
          }
        ]
      }
    ]
  },
  {
    id: "working-with-projects",
    slug: "working-with-projects",
    title: "Working with Projects",
    description: "Learn to structure projects and give Claude context about your codebase.",
    icon: "📁",
    lessons: [
      {
        id: "creating-project-folder",
        moduleId: "working-with-projects",
        slug: "creating-project-folder",
        title: "Creating a Project Folder",
        description: "Set up a proper project structure",
        duration: "3 min",
        content: `
# Creating a Project Folder

Good project structure helps both you and Claude. Let's set up a project properly.

## Starting Fresh

<terminal>
$ cd ~/projects    # or wherever you keep projects
$ mkdir my-saas-app
$ cd my-saas-app
</terminal>

## Initialize Git (Important!)

<terminal>
$ git init
Initialized empty Git repository in /Users/john/projects/my-saas-app/.git/
</terminal>

<tip>
Always use git! It's your safety net. If Claude makes a mistake, you can easily revert.
</tip>

## Create Core Files

<terminal>
# Project documentation
$ touch README.md
$ touch CLAUDE.md

# Git ignore file
$ touch .gitignore

# Check structure
$ ls -la
total 0
drwxr-xr-x   6 john  staff  192 Apr 30 10:00 .
drwxr-xr-x   5 john  staff  160 Apr 30 09:00 ..
drwxr-xr-x   9 john  staff  288 Apr 30 10:00 .git
-rw-r--r--   1 john  staff    0 Apr 30 10:00 .gitignore
-rw-r--r--   1 john  staff    0 Apr 30 10:00 CLAUDE.md
-rw-r--r--   1 john  staff    0 Apr 30 10:00 README.md
</terminal>

## Initial .gitignore

<terminal>
$ cat > .gitignore << 'EOF'
node_modules/
.env
.env.local
.DS_Store
*.log
dist/
build/
EOF
</terminal>

<warning>
Never commit \`.env\` files with secrets! The \`.gitignore\` protects you.
</warning>

## Initial Commit

<terminal>
$ git add .
$ git commit -m "Initial project setup"
</terminal>

## Why Structure Matters

Claude reads your project structure:

\`\`\`
Good:                          Bad:
my-project/                    stuff/
├── src/                       ├── code.js
│   ├── components/            ├── other-code.js
│   └── utils/                 ├── test.js
├── tests/                     └── random-file.txt
├── docs/
├── CLAUDE.md
└── README.md
\`\`\`

<aussie>
Think of it like organizing your shed. Claude can find things faster when everything has its place! 🔧
</aussie>

## Common Project Structures

### Web App
\`\`\`
my-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── styles/
├── public/
├── tests/
├── CLAUDE.md
└── package.json
\`\`\`

### API/Backend
\`\`\`
my-api/
├── src/
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── middleware/
├── tests/
├── CLAUDE.md
└── package.json
\`\`\`

## Key Takeaways

- Always initialize git first
- Create CLAUDE.md for AI context
- Use clear folder names
- Add .gitignore immediately
- Make an initial commit before coding
`
      },
      {
        id: "claude-md-file",
        moduleId: "working-with-projects",
        slug: "claude-md-file",
        title: "The CLAUDE.md File",
        description: "Your project's instruction manual for Claude",
        duration: "5 min",
        content: `
# The CLAUDE.md File

CLAUDE.md is **the most important file** for Claude Code. It tells Claude about your project, your preferences, and your rules.

## What Goes in CLAUDE.md?

<terminal>
$ cat CLAUDE.md

# Project: Byron Beans Website

## Overview
E-commerce website for an Australian coffee shop in Byron Bay.

## Tech Stack
- Next.js 14 with App Router
- Tailwind CSS
- Stripe for payments (AUD)
- Supabase for database

## Important Rules
- All prices in AUD with $ symbol
- Use Australian English spelling (colour, centre, organisation)
- Mobile-first responsive design
- Accessibility: WCAG 2.1 AA compliance

## Project Structure
- /app - Next.js app router pages
- /components - Reusable React components
- /lib - Utilities and helpers
- /public - Static assets

## Commands
- npm run dev - Start development server
- npm run build - Build for production
- npm test - Run tests
</terminal>

<tip>
Claude reads CLAUDE.md automatically when you start a session. It's always in context!
</tip>

## Template

Here's a starter template:

\`\`\`markdown
# Project: [Your Project Name]

## Overview
[One paragraph describing what this project does]

## Tech Stack
- [Framework/language]
- [Database]
- [Key libraries]

## Important Rules
- [Your coding standards]
- [Naming conventions]
- [Business rules]

## Commands
- npm run dev - [what this does]
- npm test - [what this does]

## Notes
[Any other context Claude should know]
\`\`\`

## Real Examples

### SaaS App
\`\`\`markdown
# Project: InvoiceFlow

## Overview
Invoice management for Australian small businesses.
Handles GST calculations, BAS preparation, ATO integration.

## Tech Stack
- Next.js 14, TypeScript
- PostgreSQL via Supabase
- Stripe (AUD currency)

## Business Rules
- GST is 10% on most items
- ABN must be 11 digits
- Date format: DD/MM/YYYY
- Currency: AUD with 2 decimal places

## Australian Compliance
- Privacy Act 1988 compliance required
- Data must stay in Australian region
- Super guarantee is 11.5%
\`\`\`

### Python Script
\`\`\`markdown
# Project: Price Scraper

## Overview
Scrapes Woolworths and Coles for grocery prices.
Compares prices and finds best deals.

## Tech Stack
- Python 3.11
- BeautifulSoup4
- SQLite for caching

## Rules
- Respect robots.txt
- Cache results for 24 hours
- Rate limit: 1 request/second
\`\`\`

<aussie>
Add Australian-specific requirements to CLAUDE.md! GST rules, Super percentages, FW compliance - whatever matters to your project. 🇦🇺
</aussie>

## Updating CLAUDE.md

Keep it updated as your project evolves:

<terminal>
> /chat
> Add to CLAUDE.md that we're now using Resend for emails

Claude: I'll update CLAUDE.md:
  + ## Email
  + - Using Resend for transactional emails
  + - From address: hello@byronbeans.com.au
</terminal>

<warning>
If CLAUDE.md gets too long (>100 lines), consider splitting into multiple files like ARCHITECTURE.md, STYLEGUIDE.md, etc.
</warning>

## Key Takeaways

- CLAUDE.md is auto-loaded in every session
- Include tech stack, rules, and project structure
- Add Australian-specific requirements
- Keep it updated as your project grows
- Use clear headings for easy scanning
`
      },
      {
        id: "adding-context",
        moduleId: "working-with-projects",
        slug: "adding-context",
        title: "Adding Context to Your Project",
        description: "Help Claude understand your existing code",
        duration: "4 min",
        content: `
# Adding Context to Your Project

Claude works best when it understands your codebase. Here's how to give it context.

## Automatic Context

Claude automatically reads:

- **CLAUDE.md** - Your project rules
- **package.json** - Dependencies and scripts
- **File structure** - Your folder organization
- **Files you mention** - When you reference specific files

## Referencing Files

<terminal>
> Look at src/components/Header.tsx and update the navigation

Claude: I'll read Header.tsx...
[Reads the file]
I see the current navigation has Home, About, Contact.
What would you like me to add?
</terminal>

<tip>
Be specific about which files you want Claude to look at. It helps focus the context.
</tip>

## @-mentions

Use @ to reference files directly:

<terminal>
> @src/utils/api.ts add error handling to all fetch calls

> @components/Button.tsx make this match @components/Input.tsx styling
</terminal>

## Including Documentation

Add docs Claude should know about:

\`\`\`markdown
# CLAUDE.md

## Documentation
See these files for reference:
- docs/API.md - API endpoint documentation
- docs/STYLE_GUIDE.md - Component styling rules
- docs/DATABASE.md - Schema and relationships
\`\`\`

## Context for Third-Party Libraries

<terminal>
> I'm using the fair-work-compliance skill from Aussie Agent Skills. 
> Check the rules at https://agentskill.com.au/skills/fair-work-compliance

Claude: I'll incorporate the Fair Work compliance rules...
</terminal>

<aussie>
Our Aussie Agent Skills include things like GST calculations, Super rules, and Fair Work compliance. Claude can use these as context! 🦘
</aussie>

## The Context Window

Claude has a "context window" - how much it can remember at once.

<terminal>
> /cost
Context used: 42,000 tokens (of 200,000)
</terminal>

<warning>
If you hit context limits, use \`/compact\` to summarize and continue.
</warning>

## Best Practices

1. **Start with CLAUDE.md** - Always set up this file first
2. **Reference specific files** - Don't say "look at my code", say "look at src/App.tsx"
3. **Share relevant docs** - Include API docs, style guides, etc.
4. **Use clear names** - Good file names = good context
5. **Keep folders organized** - Structure helps Claude navigate

## Key Takeaways

- CLAUDE.md is always in context
- Use @filename to reference specific files
- Include relevant documentation
- Watch your context usage with /cost
- Use /compact when context gets full
`
      },
      {
        id: "using-skills",
        moduleId: "working-with-projects",
        slug: "using-skills",
        title: "Using Skills",
        description: "Extend Claude's knowledge with agent skills",
        duration: "4 min",
        content: `
# Using Skills

Skills are pre-written instructions that give Claude specialized knowledge. Think of them as plugins for Claude's brain.

## What Are Skills?

Skills are Markdown files with:
- Domain expertise (tax law, compliance, industry standards)
- Coding patterns (specific frameworks, architectures)
- Business rules (Australian regulations, pricing)

<terminal>
# A skill is just a .md file with instructions
$ cat skills/fair-work-compliance.md

# Fair Work Compliance Rules

## Minimum Wage
- National minimum wage: $24.10/hour (as of July 2024)
- Casual loading: 25%

## Leave Entitlements
- Annual leave: 4 weeks
- Personal/carer's leave: 10 days
...
</terminal>

## Where to Find Skills

<tip>
**Aussie Agent Skills** has dozens of free skills for Australian business!
Visit [agentskill.com.au](https://agentskill.com.au)
</tip>

Categories include:
- 🧾 Tax & GST
- 👷 Fair Work & Employment
- 🏠 Property & Investment
- 💼 Business Compliance
- 🛠️ Trades & Services

## Adding Skills to Your Project

### Method 1: Copy into CLAUDE.md

<terminal>
$ cat >> CLAUDE.md << 'EOF'

## Australian Tax Rules (from Aussie Agent Skills)

### GST
- Standard rate: 10%
- GST-free: fresh food, medical, education
- Input tax credits: claim GST on business purchases

### BAS Lodgement
- Quarterly for most small businesses
- Monthly if turnover > $20M
EOF
</terminal>

### Method 2: Separate Skills Folder

<terminal>
$ mkdir skills
$ curl -o skills/fair-work.md https://raw.githubusercontent.com/AussieAgentsSkills/skills/main/fair-work-compliance/SKILL.md
</terminal>

Then in CLAUDE.md:
\`\`\`markdown
## Skills
Read these skills for domain knowledge:
- skills/fair-work.md
- skills/gst-basics.md
\`\`\`

## Using Skills in Conversation

<terminal>
$ claude

> Build a payroll calculator following Australian Fair Work rules

Claude: Based on the Fair Work compliance rules:
- I'll include minimum wage validation ($24.10/hr)
- Add 25% casual loading option
- Calculate super at 11.5%
- Include penalty rates for weekends/public holidays
...
</terminal>

<aussie>
Skills are like giving Claude a textbook. It reads them and applies the knowledge to your requests! 📚
</aussie>

## Premium Skills

For complex scenarios, we offer premium skill packs:

- **Enterprise Compliance Pack** - ASIC, privacy, security
- **Property Investment Pack** - CGT, depreciation, negative gearing
- **Restaurant Operations Pack** - Food safety, licensing, rostering

Visit [agentskill.com.au/premium](https://agentskill.com.au/premium)

<warning>
Free skills cover basics. Premium skills include edge cases, detailed calculations, and ongoing updates.
</warning>

## Creating Your Own Skills

You can write skills for your own domain:

\`\`\`markdown
# My Company Standards

## Coding Style
- Use TypeScript strict mode
- Components in PascalCase
- Utilities in camelCase

## Business Rules
- All prices include GST
- Shipping is free over $100 AUD
- Returns within 30 days
\`\`\`

## Key Takeaways

- Skills extend Claude's specialized knowledge
- Find Australian skills at agentskill.com.au
- Add skills to CLAUDE.md or a skills folder
- Reference skills when giving Claude tasks
- Create custom skills for your domain
`
      },
      {
        id: "plan-mode",
        moduleId: "working-with-projects",
        slug: "plan-mode",
        title: "Plan Mode for Complex Tasks",
        description: "Think through big tasks before coding",
        duration: "4 min",
        content: `
# Plan Mode for Complex Tasks

For big tasks, planning first prevents wasted effort. Claude's Plan Mode helps you think before building.

## When to Use Plan Mode

Use Plan Mode when:
- Building a new feature from scratch
- Refactoring existing code
- Making architectural decisions
- Tasks that touch many files
- You're unsure about the approach

<tip>
Plan Mode is like getting a quote before hiring a tradie. Review the plan, then approve the work.
</tip>

## Enabling Plan Mode

<terminal>
> /plan
Plan mode enabled. I'll outline my approach before making changes.

> Build a user authentication system with email/password

Claude: Here's my plan for the auth system:

## 📋 Plan: User Authentication

### Phase 1: Database Schema
- [ ] Create users table (email, password_hash, created_at)
- [ ] Add sessions table for JWT tokens

### Phase 2: API Routes
- [ ] POST /api/auth/register
- [ ] POST /api/auth/login  
- [ ] POST /api/auth/logout
- [ ] GET /api/auth/me

### Phase 3: Frontend Components
- [ ] LoginForm.tsx
- [ ] RegisterForm.tsx
- [ ] AuthProvider context

### Files to Create
- src/lib/auth.ts
- src/app/api/auth/[...route]/route.ts
- src/components/auth/LoginForm.tsx
- src/components/auth/RegisterForm.tsx
- src/contexts/AuthContext.tsx

### Dependencies Needed
- bcrypt (password hashing)
- jose (JWT tokens)

---
Should I proceed with this plan? You can:
- Say "proceed" to start building
- Ask me to modify the plan
- Ask questions about any part
</terminal>

## Reviewing the Plan

Before proceeding, you can:

<terminal>
> Use Supabase Auth instead of custom auth
Claude: Updated plan - I'll use Supabase Auth...

> What's the security consideration for JWT tokens?
Claude: Good question. For JWTs we should...

> Add password reset functionality to the plan
Claude: Added Phase 4 - Password Reset...
</terminal>

## Proceeding with the Plan

<terminal>
> Proceed

Claude: Starting Phase 1: Database Schema...
Creating src/lib/supabase/schema.sql...
[Asks for permission]
</terminal>

<aussie>
Plan Mode is like having a project manager. They organise the work, you give the green light! 📋
</aussie>

## Planning Complex Features

<terminal>
> /plan
> Add a complete e-commerce checkout flow for an Australian store

Claude: ## 📋 Plan: E-commerce Checkout (AU)

### Requirements Identified
- AUD currency formatting
- GST breakdown (10%)
- Australian address validation
- Shipping zones (metro/regional/remote)
- Stripe integration (AU)

### Phase 1: Cart System
...

### Phase 2: Checkout Flow
...

### Phase 3: Payment Integration
...

### Australian Compliance
- [ ] GST-inclusive pricing display
- [ ] Tax invoice generation
- [ ] ACL compliant refund policy
</terminal>

## Disabling Plan Mode

<terminal>
> /plan off
Plan mode disabled. Back to immediate execution.
</terminal>

## Best Practices

1. **Use for 10+ file changes** - Small edits don't need planning
2. **Review the plan** - Don't just say "proceed" immediately
3. **Ask questions** - Clarify anything unclear
4. **Iterate** - Modify the plan until you're happy
5. **Break into phases** - Approve phase by phase for big tasks

<warning>
Plan Mode doesn't execute anything until you say "proceed". You can spend as long as you need refining the plan.
</warning>

## Key Takeaways

- Enable with \`/plan\`
- Claude outlines approach before coding
- Review and modify the plan
- Say "proceed" when ready
- Great for complex, multi-file tasks
`
      },
      {
        id: "projects-quiz",
        moduleId: "working-with-projects",
        slug: "projects-quiz",
        title: "Module 3 Quiz",
        description: "Test your project management knowledge",
        duration: "5 min",
        content: `
# Module 3 Quiz: Working with Projects

Let's test your project management knowledge before building your first app!

Complete the quiz to unlock Module 4: Building Your First App.
`,
        quiz: [
          {
            id: "q1",
            question: "What is the purpose of CLAUDE.md?",
            options: [
              "To store your API keys",
              "To give Claude context about your project",
              "To log Claude's responses",
              "To install Claude Code"
            ],
            correctIndex: 1,
            explanation: "CLAUDE.md tells Claude about your project's tech stack, rules, and structure. It's always loaded in context."
          },
          {
            id: "q2",
            question: "How do you reference a specific file in conversation?",
            options: [
              "file:path/to/file",
              "@path/to/file",
              "#path/to/file",
              "include(path/to/file)"
            ],
            correctIndex: 1,
            explanation: "Use @filename to reference specific files, like @src/App.tsx"
          },
          {
            id: "q3",
            question: "What are 'skills' in the context of Claude Code?",
            options: [
              "Coding certifications",
              "Pre-written instructions that give Claude domain knowledge",
              "Commands Claude can run",
              "Testing frameworks"
            ],
            correctIndex: 1,
            explanation: "Skills are Markdown files with specialized knowledge (like tax rules or compliance standards) that extend Claude's expertise."
          },
          {
            id: "q4",
            question: "When should you use Plan Mode?",
            options: [
              "For every single task",
              "Only for Python projects",
              "For complex tasks that touch many files",
              "When Claude is running slowly"
            ],
            correctIndex: 2,
            explanation: "Plan Mode is best for complex, multi-file tasks where you want to review the approach before building."
          },
          {
            id: "q5",
            question: "What should you always do before starting a new project?",
            options: [
              "Install VS Code",
              "Initialize git",
              "Run npm install",
              "Create a database"
            ],
            correctIndex: 1,
            explanation: "Always `git init` first! Git is your safety net for reverting mistakes."
          }
        ]
      }
    ]
  },
  {
    id: "building-first-app",
    slug: "building-first-app",
    title: "Building Your First App",
    description: "Apply everything you've learned to build a complete project with Claude.",
    icon: "🚀",
    lessons: [
      {
        id: "choosing-project",
        moduleId: "building-first-app",
        slug: "choosing-project",
        title: "Choosing a Project",
        description: "Pick the right first project for learning",
        duration: "3 min",
        content: `
# Choosing a Project

Your first AI-built project should be ambitious enough to learn from, but simple enough to complete.

## Good First Projects

<tip>
Start with something you'd actually use. Personal motivation helps you push through challenges!
</tip>

### 🌟 Recommended: Personal Dashboard

<terminal>
> Build a personal dashboard that shows:
> - Weather for my location (Sydney)
> - Today's tasks from a todo list
> - Motivational quote of the day
</terminal>

**Why it's great:**
- Multiple components to build
- API integrations
- localStorage for persistence
- Useful daily!

### Other Good Options

| Project | Skills Learned |
|---------|---------------|
| Landing page | HTML/CSS, responsive design |
| Todo app | CRUD operations, state management |
| Recipe book | Data modeling, search/filter |
| Budget tracker | Forms, calculations, charts |
| Portfolio site | Multi-page, deployment |

## Projects to Avoid (For Now)

<warning>
These are too complex for a first project:
- Full e-commerce store
- Social media app
- Real-time chat
- Authentication systems
- Payment integrations
</warning>

Save these for your second or third project!

## Defining Your Project

Be specific about what you want:

**❌ Too vague:**
<terminal>
> Build me an app
</terminal>

**✅ Good:**
<terminal>
> Build a budget tracker web app where I can:
> - Add income and expenses in AUD
> - Categorize transactions
> - See a monthly summary chart
> - Data persists in localStorage
</terminal>

<aussie>
Think about a small problem in your life. Something that takes 5 minutes but could be automated. That's your first project! 🎯
</aussie>

## Our Project: Aussie Coffee Finder

For this module, we'll build together:

**Aussie Coffee Finder** - A web app to find and rate local coffee shops.

Features:
- Add coffee shops with name, location, rating
- Filter by suburb
- Save favorites
- Australian address format

<terminal>
$ mkdir aussie-coffee-finder
$ cd aussie-coffee-finder
$ git init
$ touch CLAUDE.md README.md
</terminal>

## Key Takeaways

- Pick something personally useful
- Start simple, expand later
- Be specific in your requirements
- Avoid auth/payments for first project
- Document your idea before building
`
      },
      {
        id: "writing-prompts",
        moduleId: "building-first-app",
        slug: "writing-prompts",
        title: "Writing Good Prompts",
        description: "Learn to communicate effectively with Claude",
        duration: "5 min",
        content: `
# Writing Good Prompts

The quality of Claude's output depends on the quality of your input. Let's learn to write effective prompts.

## The Anatomy of a Good Prompt

A great prompt includes:

1. **What** you want to build
2. **How** it should work (behavior)
3. **Constraints** (tech choices, requirements)
4. **Context** (who it's for, why it matters)

## Examples

### ❌ Bad Prompt
<terminal>
> Make a website
</terminal>

### ✅ Good Prompt
<terminal>
> Create a single-page landing website for "Byron Beans" coffee shop.
> 
> Include:
> - Hero section with shop photo and tagline
> - Menu section with coffee prices in AUD
> - Location section with address: 123 Beach Road, Byron Bay NSW 2481
> - Contact form that validates email
>
> Tech: HTML, CSS (no frameworks), vanilla JavaScript
> Style: Modern, beach vibes, mobile-first
</terminal>

## Prompt Patterns

### The Feature Request

<terminal>
> Add [FEATURE] that [DOES WHAT] so that [WHY/FOR WHOM]

Example:
> Add a dark mode toggle that saves preference to localStorage so users can switch between themes
</terminal>

### The Bug Fix

<terminal>
> The [COMPONENT] is [DOING WRONG THING] when [CONDITION]. It should [CORRECT BEHAVIOR].

Example:
> The price calculator is showing NaN when quantity is empty. It should default to 0 or show validation error.
</terminal>

### The Refactor

<terminal>
> Refactor [FILE/COMPONENT] to [IMPROVEMENT] while maintaining [REQUIREMENTS]

Example:
> Refactor the fetchData function to use async/await instead of .then() while keeping the same error handling behavior
</terminal>

<tip>
Include the "why" when possible. Claude makes better decisions when it understands the purpose.
</tip>

## Being Specific

### Vague vs Specific

| Vague | Specific |
|-------|----------|
| "Make it look better" | "Add 16px padding, round corners to 8px, use the site's blue (#3B82F6) for the button" |
| "Add validation" | "Validate email format and show error message below the input if invalid" |
| "Make it faster" | "Add caching to the API calls with a 5-minute expiry" |

## Iterating on Results

Claude rarely gets it perfect first try. That's okay!

<terminal>
> [Initial prompt - builds the feature]

> The button is too small on mobile. Make it full-width on screens under 640px.

> Also add a loading spinner while the form submits.

> Change the success message from green to our brand color.
</terminal>

<aussie>
Think of prompting like ordering at a coffee shop. "Coffee" gets you something. "Large flat white, extra hot, one sugar" gets you exactly what you want. ☕
</aussie>

## Context Through Conversation

Claude remembers your conversation:

<terminal>
> Build a coffee shop menu component

Claude: [Creates menu component]

> Use those same prices in the checkout flow

Claude: I'll use the prices from the menu component:
- Flat White: $4.50
- Long Black: $4.00
...
</terminal>

<warning>
Long conversations can lose context. Use \`/compact\` or start a new session for unrelated tasks.
</warning>

## Key Takeaways

- Be specific about what you want
- Include how it should work
- Provide constraints and context
- Iterate with follow-up prompts
- Reference previous work in conversation
`
      },
      {
        id: "iterating-claude",
        moduleId: "building-first-app",
        slug: "iterating-claude",
        title: "Iterating with Claude",
        description: "Refine and improve your code through conversation",
        duration: "4 min",
        content: `
# Iterating with Claude

Building software is iterative. You build, test, refine, repeat. Here's how to iterate effectively with Claude.

## The Iteration Loop

\`\`\`
    ┌─────────────┐
    │   Prompt    │
    └──────┬──────┘
           ▼
    ┌─────────────┐
    │   Review    │
    └──────┬──────┘
           ▼
    ┌─────────────┐
    │    Test     │
    └──────┬──────┘
           ▼
    ┌─────────────┐
    │   Refine    │──────┐
    └─────────────┘      │
           ▲             │
           └─────────────┘
\`\`\`

## Example Session

<terminal>
# First pass
> Build a contact form with name, email, and message fields

Claude: [Creates form]

# Test it
$ open index.html
# Form looks basic, no validation

# Iterate
> Add validation: require all fields, check email format

Claude: [Adds validation]

# Test again
# Works but error messages hard to see

# Iterate
> Make error messages red and appear below each field

Claude: [Improves styling]

# Test - looks good!
# Now let's enhance

> Add a character counter for the message field, max 500 characters

Claude: [Adds counter]
</terminal>

<tip>
Test after each change. Small iterations catch problems early!
</tip>

## Feedback Types

### Visual Feedback
<terminal>
> The button is too close to the input. Add more spacing.
> Make the error text smaller, it's overwhelming.
> Center the form on the page with max-width 500px.
</terminal>

### Functional Feedback
<terminal>
> When I submit, nothing happens. Add a success message.
> The email validation accepts "test@test" which isn't valid.
> Add a loading state while the form submits.
</terminal>

### Code Quality Feedback
<terminal>
> Extract the validation logic into a separate function.
> Add error handling for the API call.
> This component is getting large. Split it into smaller components.
</terminal>

## Using /undo

Made a mistake? Roll back:

<terminal>
> Add animations to the buttons

Claude: [Adds complex animations]

# Too flashy!
> /undo

Reverted changes to Button.tsx.

> Add a subtle hover effect instead, just darken the color slightly
</terminal>

<aussie>
Don't be afraid to say "that's not what I wanted." Claude handles feedback well - no hurt feelings! 🤝
</aussie>

## Asking for Alternatives

<terminal>
> I don't love this design. Show me 3 alternative layouts for the hero section.

Claude: Here are three alternatives:

Option 1: Split layout (image left, text right)
Option 2: Full-screen image with overlay text
Option 3: Minimal with large typography

Which would you like me to implement?
</terminal>

## Getting Unstuck

If Claude is going in circles:

<terminal>
> Let's step back. Here's what I actually need:
> 1. Form must be mobile-friendly
> 2. Submit to our API endpoint /api/contact
> 3. Show success/error states
> 
> Please rebuild with these requirements fresh.
</terminal>

<warning>
If you're 10+ iterations deep on the same problem, try \`/clear\` and start fresh with a better initial prompt.
</warning>

## Key Takeaways

- Build → Test → Refine → Repeat
- Test after each change
- Be specific with feedback
- Use /undo to roll back mistakes
- Ask for alternatives when stuck
- Start fresh if iterations aren't working
`
      },
      {
        id: "testing-code",
        moduleId: "building-first-app",
        slug: "testing-code",
        title: "Testing Your Code",
        description: "Verify your app works before shipping",
        duration: "4 min",
        content: `
# Testing Your Code

Testing ensures your app works correctly. Let's cover how to test with Claude's help.

## Manual Testing

Always test manually first:

<terminal>
# Start your dev server
$ npm run dev

# Open in browser
$ open http://localhost:3000

# Test every feature:
# ✅ Forms submit correctly
# ✅ Validation shows errors
# ✅ Data persists after refresh
# ✅ Mobile layout works
# ✅ Links go to right places
</terminal>

<tip>
Test on both desktop AND mobile. Use Chrome DevTools (F12) to simulate mobile devices.
</tip>

## Having Claude Help Test

<terminal>
> Review the form component and tell me what edge cases I should test

Claude: Here are edge cases to test:

1. Empty submission - should show required errors
2. Invalid email format - "test@" should fail
3. Very long message (>1000 chars) - should truncate or warn
4. Special characters in name - "O'Connor" should work
5. Rapid double-submit - should prevent duplicate
6. Network error - should show error message
7. Slow connection - should show loading state
</terminal>

## Writing Automated Tests

Ask Claude to add tests:

<terminal>
> Add unit tests for the validation functions using Jest

Claude: I'll create tests for the validators:

tests/validation.test.js
  ✓ validates correct email format
  ✓ rejects invalid email format
  ✓ requires name field
  ✓ limits message to 500 characters
  ...
</terminal>

## Running Tests

<terminal>
# Run the test suite
$ npm test

PASS tests/validation.test.js
  ✓ validates correct email format (2ms)
  ✓ rejects invalid email format (1ms)
  ✓ requires name field (1ms)
  
Test Suites: 1 passed, 1 total
Tests: 3 passed, 3 total
</terminal>

<aussie>
No time for full test suites? At minimum, test the happy path and one error case for each feature. 🧪
</aussie>

## Bug Fixing Workflow

Found a bug? Here's the workflow:

<terminal>
# 1. Describe the bug clearly
> When I enter "test@example" (no .com), the form submits anyway. 
> It should reject emails without a valid domain.

# 2. Claude fixes it
Claude: I'll update the email regex to require a TLD...

# 3. Test the fix
$ npm test
# Also manual test

# 4. Confirm it works
> The email validation now works. Let's move on.
</terminal>

## Checklist Before Shipping

Run through this checklist:

| Check | Status |
|-------|--------|
| All features work | ☐ |
| Forms validate correctly | ☐ |
| Error states show properly | ☐ |
| Mobile responsive | ☐ |
| No console errors | ☐ |
| Loading states exist | ☐ |
| Data persists correctly | ☐ |
| Edge cases handled | ☐ |

<terminal>
> Before we deploy, review the code for any issues

Claude: I'll do a code review...

Issues found:
1. Missing error boundary in App.tsx
2. API key exposed in frontend code
3. No loading state on async operations

Should I fix these?
</terminal>

<warning>
Never skip testing "because it's a small change." Small bugs create big problems!
</warning>

## Key Takeaways

- Manual test after every feature
- Ask Claude for edge cases to test
- Add automated tests for critical logic
- Follow bug fix workflow: describe → fix → test
- Use the pre-ship checklist
`
      },
      {
        id: "deploying-app",
        moduleId: "building-first-app",
        slug: "deploying-app",
        title: "Deploying Your App",
        description: "Put your app live on the internet",
        duration: "5 min",
        content: `
# Deploying Your App

You've built and tested your app. Time to share it with the world!

## Deployment Options

| Platform | Best For | Pricing |
|----------|----------|---------|
| Vercel | Next.js, React | Free tier |
| Netlify | Static sites | Free tier |
| Railway | Full-stack apps | Free tier |
| GitHub Pages | Simple HTML | Free |

<tip>
For most projects, Vercel is the easiest choice. It's free and deploys in seconds.
</tip>

## Deploying to Vercel

### Step 1: Push to GitHub

<terminal>
# Make sure everything is committed
$ git add .
$ git commit -m "Ready for deployment"

# Create GitHub repo and push
$ gh repo create aussie-coffee-finder --public
$ git push -u origin main
</terminal>

### Step 2: Connect to Vercel

<terminal>
# Install Vercel CLI
$ npm install -g vercel

# Deploy!
$ vercel

Vercel CLI 32.x.x
? Set up and deploy "aussie-coffee-finder"? [Y/n] y
? Which scope? My Account
? Link to existing project? [y/N] n
? What's your project's name? aussie-coffee-finder
? In which directory is your code located? ./

🔗 Linked to john/aussie-coffee-finder
🔍 Inspect: https://vercel.com/john/aussie-coffee-finder
✅ Production: https://aussie-coffee-finder.vercel.app
</terminal>

Your app is now live! 🎉

<aussie>
Vercel's free tier is perfect for side projects. You get HTTPS, a .vercel.app domain, and automatic deploys when you push to GitHub. 🚀
</aussie>

## Deploying to Netlify

<terminal>
# Install Netlify CLI
$ npm install -g netlify-cli

# Build your site
$ npm run build

# Deploy
$ netlify deploy --prod --dir=dist

✅ Deploy is live!
https://aussie-coffee-finder.netlify.app
</terminal>

## Environment Variables

<warning>
Never commit API keys or secrets! Use environment variables.
</warning>

<terminal>
# Local development: create .env.local
$ cat .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgres://...

# On Vercel: add via dashboard or CLI
$ vercel env add DATABASE_URL
</terminal>

## Custom Domain

<terminal>
# Add your own domain
$ vercel domains add coffeefinder.com.au

# Or in Vercel dashboard:
# Settings → Domains → Add
</terminal>

## Having Claude Help Deploy

<terminal>
> Help me deploy this Next.js app to Vercel

Claude: I'll guide you through deployment:

1. First, let's add a vercel.json for configuration...
2. Make sure package.json has a build script...
3. Let's check for environment variables...

[Creates deployment configuration]
</terminal>

## Post-Deployment Checklist

| Check | Status |
|-------|--------|
| Site loads at URL | ☐ |
| All pages work | ☐ |
| Environment vars set | ☐ |
| HTTPS working | ☐ |
| Mobile responsive | ☐ |
| No console errors | ☐ |
| Analytics added (optional) | ☐ |

## Automatic Deploys

Once connected, every push to main deploys automatically:

<terminal>
$ git add .
$ git commit -m "Add new feature"
$ git push

# Vercel sees the push
# Builds automatically
# Deploys to production
</terminal>

## Key Takeaways

- Vercel and Netlify offer free hosting
- Deploy from CLI or connect to GitHub
- Use environment variables for secrets
- Every push can auto-deploy
- Test the live site after deploy
`
      },
      {
        id: "building-quiz",
        moduleId: "building-first-app",
        slug: "building-quiz",
        title: "Module 4 Quiz",
        description: "Test your app-building knowledge",
        duration: "5 min",
        content: `
# Module 4 Quiz: Building Your First App

You've learned to build and deploy! Let's make sure the concepts are solid.

Complete the quiz to unlock Module 5: Advanced Techniques.
`,
        quiz: [
          {
            id: "q1",
            question: "What makes a good first project?",
            options: [
              "As complex as possible to learn more",
              "Something simple but personally useful",
              "An exact copy of a famous app",
              "Whatever is trending on Twitter"
            ],
            correctIndex: 1,
            explanation: "Start with something simple but useful to you. Personal motivation helps you complete it!"
          },
          {
            id: "q2",
            question: "What should a good prompt include?",
            options: [
              "Just the feature name",
              "What, how, constraints, and context",
              "The entire codebase",
              "Step-by-step implementation details"
            ],
            correctIndex: 1,
            explanation: "Good prompts include what you want, how it should work, any constraints, and relevant context."
          },
          {
            id: "q3",
            question: "How should you approach testing?",
            options: [
              "Skip it for small projects",
              "Only write automated tests",
              "Test after each change, both manual and automated",
              "Test only before deployment"
            ],
            correctIndex: 2,
            explanation: "Test after each change! Manual testing catches visual issues, automated tests catch logic bugs."
          },
          {
            id: "q4",
            question: "Where should you store API keys?",
            options: [
              "In the code directly",
              "In a README file",
              "In environment variables",
              "In the HTML file"
            ],
            correctIndex: 2,
            explanation: "Never commit secrets! Use environment variables (.env files locally, platform settings in production)."
          },
          {
            id: "q5",
            question: "What's the best approach when Claude's output isn't right?",
            options: [
              "Start a completely new project",
              "Accept it and move on",
              "Provide specific feedback and iterate",
              "Write the code yourself"
            ],
            correctIndex: 2,
            explanation: "Iterate! Give Claude specific feedback about what's wrong and what you want instead."
          }
        ]
      }
    ]
  },
  {
    id: "advanced-techniques",
    slug: "advanced-techniques",
    title: "Advanced Techniques",
    description: "Level up your Claude Code skills with power-user techniques.",
    icon: "⚡",
    lessons: [
      {
        id: "compact-sessions",
        moduleId: "advanced-techniques",
        slug: "compact-sessions",
        title: "Using /compact for Long Sessions",
        description: "Manage context in lengthy conversations",
        duration: "3 min",
        content: `
# Using /compact for Long Sessions

Long conversations use tokens. /compact helps you work longer without losing context.

## The Problem

Claude has a context window (how much it can remember). As you chat:

<terminal>
> /cost
Context used: 180,000 / 200,000 tokens
⚠️ Approaching context limit!
</terminal>

When you hit the limit, Claude forgets early parts of the conversation.

## The Solution: /compact

<terminal>
> /compact

Compacting conversation...

Summary created:
- Project: Aussie Coffee Finder
- Tech: Next.js, Tailwind, Supabase
- Completed: Homepage, menu, cart
- In progress: Checkout flow
- Current file: src/app/checkout/page.tsx

Context reduced: 180,000 → 45,000 tokens
</terminal>

<tip>
Use /compact when you see token usage above 60-70%. Don't wait until you hit the limit!
</tip>

## When to Compact

Good times to compact:

| Situation | Action |
|-----------|--------|
| Tokens > 70% | /compact |
| Switching features | /compact |
| Claude seems confused | /compact |
| Long debugging session | /compact |
| Starting new phase | /compact |

## What Gets Preserved

After compacting, Claude remembers:

- ✅ Project structure and tech stack
- ✅ Key decisions made
- ✅ Current task context
- ✅ Important file locations
- ✅ Your preferences and rules

What gets summarized:

- 🔄 Step-by-step conversation
- 🔄 Intermediate code attempts
- 🔄 Debugging exploration
- 🔄 Rejected alternatives

<aussie>
Think of /compact like taking meeting notes. You don't remember every word, but you remember the decisions! 📝
</aussie>

## Manual Summaries

Sometimes, add your own context:

<terminal>
> /compact

> To clarify: we're building a checkout that:
> 1. Shows cart items with GST breakdown
> 2. Collects Australian shipping addresses
> 3. Integrates with Stripe (AUD)
> 4. Sends order confirmation email
>
> We've completed steps 1-2, now doing step 3.
</terminal>

## Key Takeaways

- /compact reduces token usage while keeping context
- Use when approaching 70% of context limit
- Claude preserves key decisions and project state
- Add your own summary for important details
`
      },
      {
        id: "multi-file-edits",
        moduleId: "advanced-techniques",
        slug: "multi-file-edits",
        title: "Multi-file Edits",
        description: "Handle changes across multiple files efficiently",
        duration: "4 min",
        content: `
# Multi-file Edits

Real features touch multiple files. Here's how to handle coordinated changes.

## The Challenge

A feature might require changes to:
- Component file
- Styling file
- Type definitions
- Tests
- Documentation

<terminal>
> Add a review system for coffee shops

Claude: This will require changes to:
  📄 Create: src/components/ReviewForm.tsx
  📄 Create: src/components/ReviewList.tsx
  📄 Edit: src/types/index.ts (add Review type)
  📄 Edit: src/app/shop/[id]/page.tsx (add reviews section)
  📄 Create: src/lib/reviews.ts (API functions)
  📄 Edit: supabase/schema.sql (add reviews table)
  
Proceed with all changes? [Y/n]
</terminal>

<tip>
Review the list of files before approving. Make sure it makes sense!
</tip>

## Staged Approach

For complex changes, ask Claude to go step by step:

<terminal>
> Add a review system. Let's do it in stages:
> 1. First, create the database schema
> 2. Then the API functions
> 3. Then the components
> 4. Finally, integrate into the page
>
> Let's start with step 1.

Claude: Starting with the database schema...
  📄 Edit: supabase/schema.sql
  
Proceed? [Y/n]
</terminal>

## Referencing Related Files

<terminal>
> The ReviewForm component should match the styling of @components/ContactForm.tsx

> Use the same validation pattern as @lib/validators.ts

> Follow the type conventions in @types/index.ts
</terminal>

## Coordinating Types

<terminal>
> Add a Review type to types/index.ts and use it in both ReviewForm and ReviewList

Claude: I'll add the type and ensure both components use it:

types/index.ts:
export interface Review {
  id: string;
  shopId: string;
  rating: number;
  comment: string;
  authorName: string;
  createdAt: string;
}

ReviewForm.tsx:
const [review, setReview] = useState<Partial<Review>>({});

ReviewList.tsx:
const reviews: Review[] = await fetchReviews(shopId);
</terminal>

<aussie>
Shared types prevent bugs. Define once, use everywhere! 🔗
</aussie>

## Checking Dependencies

After multi-file edits:

<terminal>
> List all files that import from @lib/reviews.ts

Claude: These files depend on lib/reviews:
- src/app/shop/[id]/page.tsx
- src/components/ReviewForm.tsx
- src/components/ReviewList.tsx

> Make sure all of them handle the new error states
</terminal>

## Review with /diff

<terminal>
> /diff types/index.ts

 export interface Shop {
   id: string;
   name: string;
 }

+export interface Review {
+  id: string;
+  shopId: string;
+  rating: number;
+  comment: string;
+}
</terminal>

<warning>
For changes touching 5+ files, use Plan Mode first. Review the plan before letting Claude make changes.
</warning>

## Key Takeaways

- Multi-file edits are common for real features
- Review the file list before approving
- Use staged approach for complex changes
- Reference related files for consistency
- Check dependencies after changes
`
      },
      {
        id: "git-integration",
        moduleId: "advanced-techniques",
        slug: "git-integration",
        title: "Git Integration",
        description: "Use git effectively with Claude Code",
        duration: "4 min",
        content: `
# Git Integration

Git is your safety net. Use it religiously with Claude Code.

## The Golden Rule

<warning>
Commit before asking Claude to make big changes. You can always revert!
</warning>

<terminal>
# Before any risky operation
$ git add .
$ git commit -m "Checkpoint before refactoring auth"

# Now let Claude work
> Refactor the authentication to use Supabase Auth
</terminal>

## Branching Strategy

<terminal>
# Create a feature branch
$ git checkout -b feature/reviews

# Let Claude build the feature
> Build the review system

# If it works, merge to main
$ git checkout main
$ git merge feature/reviews

# If it's a mess, delete and start over
$ git checkout main
$ git branch -D feature/reviews
</terminal>

<tip>
Feature branches let you experiment without risking your main code.
</tip>

## Reviewing Changes

<terminal>
# See what Claude changed
$ git diff

# See all changed files
$ git status

# Review specific file
$ git diff src/components/Reviews.tsx
</terminal>

## Selective Commits

Claude might make multiple changes. Commit selectively:

<terminal>
# Add specific files
$ git add src/components/ReviewForm.tsx
$ git commit -m "Add review form component"

$ git add src/lib/reviews.ts
$ git commit -m "Add reviews API functions"

# Or interactive staging
$ git add -p  # Review each change
</terminal>

<aussie>
Good commit messages are like leaving notes for future-you. "Fix stuff" is useless. "Fix GST calculation for exempt items" is gold! 💰
</aussie>

## Reverting Claude's Mistakes

<terminal>
# Undo all uncommitted changes
$ git checkout .

# Revert to a specific commit
$ git reset --hard HEAD~1

# Revert a specific file
$ git checkout HEAD -- src/components/BrokenComponent.tsx
</terminal>

## Having Claude Use Git

<terminal>
> Create a new feature branch for the payment integration

Claude: I'll create the branch:
$ git checkout -b feature/payment-integration

Switched to a new branch 'feature/payment-integration'

> After we're done, help me write a good commit message
</terminal>

## PR Workflow

<terminal>
# Finish feature on branch
$ git add .
$ git commit -m "Add payment integration with Stripe"
$ git push -u origin feature/payment-integration

# Create PR
$ gh pr create --title "Add payment integration" --body "..."
</terminal>

<warning>
Don't let Claude push directly to main in shared repos. Use PRs for review!
</warning>

## Git Commands Reference

| Command | What it does |
|---------|--------------|
| \`git status\` | See changed files |
| \`git diff\` | See exact changes |
| \`git add .\` | Stage all changes |
| \`git commit -m "msg"\` | Create commit |
| \`git checkout .\` | Discard changes |
| \`git checkout -b name\` | Create branch |
| \`git merge branch\` | Merge branch |
| \`git log --oneline\` | View history |

## Key Takeaways

- Commit before big changes
- Use feature branches
- Review diffs before committing
- Write descriptive commit messages
- Revert when things go wrong
`
      },
      {
        id: "custom-commands",
        moduleId: "advanced-techniques",
        slug: "custom-commands",
        title: "Custom Slash Commands",
        description: "Create your own shortcuts for common tasks",
        duration: "4 min",
        content: `
# Custom Slash Commands

Create shortcuts for tasks you do repeatedly. Save time and ensure consistency.

## Built-in vs Custom

Built-in commands like /help, /clear, /cost are always available.

Custom commands are defined in your project and can do anything!

## Creating Custom Commands

Add a \`.claude\` folder with command files:

<terminal>
$ mkdir .claude
$ touch .claude/commands.json
</terminal>

<terminal>
$ cat .claude/commands.json
{
  "commands": {
    "test": {
      "description": "Run all tests and show results",
      "action": "Run npm test and summarize the results. If any fail, explain why."
    },
    "review": {
      "description": "Code review the current changes",
      "action": "Review uncommitted changes (git diff). Check for bugs, security issues, and code style. Format as a PR review."
    },
    "doc": {
      "description": "Generate documentation",
      "action": "Add JSDoc comments to all functions in the current file that don't have them."
    },
    "aussie": {
      "description": "Check for Australian compliance",
      "action": "Review the code for Australian business requirements: GST, date formats, currency (AUD), timezone handling for AEST/AEDT."
    }
  }
}
</terminal>

## Using Custom Commands

<terminal>
> /test

Claude: Running tests...
$ npm test

Results: 23 passed, 1 failed

Failed test: src/utils/gst.test.ts
- Expected GST of $4.50, got $4.00
- The calculateGST function isn't rounding correctly
- Suggested fix: Use toFixed(2) for decimal precision
</terminal>

<tip>
Good custom commands encode your team's standards and common tasks.
</tip>

## Example Commands

### /deploy
\`\`\`json
{
  "deploy": {
    "description": "Prepare and deploy to production",
    "action": "1. Run tests 2. Build the project 3. Check for env vars 4. Deploy to Vercel 5. Verify the deployment"
  }
}
\`\`\`

### /newpage
\`\`\`json
{
  "newpage": {
    "description": "Create a new page with standard structure",
    "action": "Create a new Next.js page with: metadata, loading state, error boundary. Use our standard page layout from app/template.tsx."
  }
}
\`\`\`

### /component
\`\`\`json
{
  "component": {
    "description": "Create a component with tests",
    "action": "Create a React component with TypeScript props interface, export it from components/index.ts, and create a basic test file."
  }
}
\`\`\`

<aussie>
Custom commands are like recipes. Write them once, use them forever! 🍳
</aussie>

## Project-Specific Commands

Add commands relevant to your project:

\`\`\`json
{
  "price": {
    "description": "Add a new menu item with pricing",
    "action": "Add a new coffee item to data/menu.ts with name, price in AUD, description, and size options. Update the menu component."
  },
  "shop": {
    "description": "Add a new coffee shop",
    "action": "Add a new coffee shop to data/shops.ts with name, address (Australian format), suburb, rating. Add to the shop listings page."
  }
}
\`\`\`

## Combining with Skills

Commands can reference skills:

\`\`\`json
{
  "comply": {
    "description": "Check Australian compliance",
    "action": "Using the fair-work-compliance and gst-basics skills, review this code for Australian business compliance issues."
  }
}
\`\`\`

<warning>
Keep command actions clear but not too long. If it's complex, write it as a skill file instead.
</warning>

## Key Takeaways

- Custom commands save time on repetitive tasks
- Define in .claude/commands.json
- Include description and action
- Make project-specific commands
- Reference skills for domain expertise
`
      },
      {
        id: "hooks-automation",
        moduleId: "advanced-techniques",
        slug: "hooks-automation",
        title: "Hooks and Automation",
        description: "Automate tasks with Claude Code hooks",
        duration: "4 min",
        content: `
# Hooks and Automation

Hooks let you automate actions based on events. Run tasks automatically!

## What Are Hooks?

Hooks are scripts that run when something happens:

- **pre-commit**: Before you commit code
- **pre-push**: Before pushing to GitHub
- **post-save**: After Claude saves a file
- **on-error**: When something fails

## Setting Up Git Hooks

<terminal>
$ mkdir -p .husky
$ npx husky init
</terminal>

### Pre-commit Hook

<terminal>
$ cat .husky/pre-commit
#!/bin/sh
npm run lint
npm test
</terminal>

Now tests run automatically before every commit!

<tip>
Pre-commit hooks catch bugs before they enter your codebase.
</tip>

## Claude Code Hooks

Configure hooks in .claude/hooks.json:

<terminal>
$ cat .claude/hooks.json
{
  "hooks": {
    "after-edit": {
      "description": "After Claude edits a file",
      "actions": [
        "Run prettier on the edited file",
        "If it's a component, verify it exports correctly"
      ]
    },
    "before-commit": {
      "description": "Before committing changes",
      "actions": [
        "Run npm test",
        "Check for console.log statements",
        "Verify no TODO comments in committed code"
      ]
    }
  }
}
</terminal>

## npm Scripts

Combine scripts in package.json:

\`\`\`json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write .",
    "check": "npm run lint && npm test",
    "deploy": "npm run check && vercel --prod"
  }
}
\`\`\`

<terminal>
# One command to check everything
$ npm run check

# One command to deploy
$ npm run deploy
</terminal>

<aussie>
Automation is like having a robot assistant check your work. Set it up once, benefit forever! 🤖
</aussie>

## CI/CD with GitHub Actions

<terminal>
$ mkdir -p .github/workflows
$ cat .github/workflows/ci.yml

name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm test
</terminal>

Now GitHub runs tests automatically on every push!

## Having Claude Set Up Automation

<terminal>
> Set up GitHub Actions to run tests on every PR

Claude: I'll create a CI workflow:
  📄 Create: .github/workflows/ci.yml
  
The workflow will:
1. Run on push and pull_request
2. Install dependencies
3. Run linting
4. Run tests
5. Report status on the PR

Proceed? [Y/n]
</terminal>

## Common Automation Patterns

| Trigger | Automation |
|---------|------------|
| PR opened | Run tests, check types |
| Push to main | Deploy to staging |
| Tag created | Deploy to production |
| Schedule (cron) | Run security scan |
| Issue created | Label by keywords |

<warning>
Start with simple automation. Add more as you get comfortable!
</warning>

## Key Takeaways

- Hooks automate tasks on events
- Use pre-commit hooks to catch bugs early
- npm scripts combine common commands
- GitHub Actions provide CI/CD
- Start simple, expand over time
`
      },
      {
        id: "advanced-quiz",
        moduleId: "advanced-techniques",
        slug: "advanced-quiz",
        title: "Final Quiz",
        description: "Complete your Zero to Claude Code journey",
        duration: "5 min",
        content: `
# Final Quiz: Advanced Techniques

Congratulations on making it to the end! 🎉

This final quiz covers advanced techniques. Pass this and you've completed Zero to Claude Code!

<tip>
After passing, you'll have the knowledge to build real projects with Claude Code. Keep practicing!
</tip>
`,
        quiz: [
          {
            id: "q1",
            question: "When should you use /compact?",
            options: [
              "Every 5 minutes",
              "When token usage is high (60-70%+)",
              "Only at the start of sessions",
              "Before every commit"
            ],
            correctIndex: 1,
            explanation: "Use /compact when approaching the context limit to preserve important context while freeing up tokens."
          },
          {
            id: "q2",
            question: "What's the best practice before asking Claude to make big changes?",
            options: [
              "Delete all your files",
              "Exit the session",
              "Git commit your current work",
              "Clear your terminal"
            ],
            correctIndex: 2,
            explanation: "Always commit before big changes! Git is your safety net for reverting if something goes wrong."
          },
          {
            id: "q3",
            question: "Where do you define custom slash commands?",
            options: [
              "CLAUDE.md",
              "package.json",
              ".claude/commands.json",
              "In the terminal"
            ],
            correctIndex: 2,
            explanation: "Custom commands are defined in .claude/commands.json in your project."
          },
          {
            id: "q4",
            question: "What do pre-commit hooks do?",
            options: [
              "Format your commit messages",
              "Run automated tasks before each commit",
              "Push code to GitHub",
              "Compact the conversation"
            ],
            correctIndex: 1,
            explanation: "Pre-commit hooks run scripts (like tests or linting) automatically before code is committed."
          },
          {
            id: "q5",
            question: "For complex multi-file changes, what should you do first?",
            options: [
              "Ask Claude to do everything at once",
              "Use Plan Mode to review the approach",
              "Skip straight to deployment",
              "Delete existing files"
            ],
            correctIndex: 1,
            explanation: "Plan Mode lets you review Claude's approach before any changes are made. Great for complex tasks!"
          }
        ]
      }
    ]
  }
];

// Helper functions

export function getModule(slug: string): Module | undefined {
  return modules.find(m => m.slug === slug);
}

export function getLesson(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  const module = getModule(moduleSlug);
  return module?.lessons.find(l => l.slug === lessonSlug);
}

export function getNextLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const moduleIndex = modules.findIndex(m => m.slug === moduleSlug);
  if (moduleIndex === -1) return undefined;

  const module = modules[moduleIndex];
  const lessonIndex = module.lessons.findIndex(l => l.slug === lessonSlug);
  
  if (lessonIndex === -1) return undefined;

  // Next lesson in same module
  if (lessonIndex < module.lessons.length - 1) {
    return { module, lesson: module.lessons[lessonIndex + 1] };
  }

  // First lesson of next module
  if (moduleIndex < modules.length - 1) {
    const nextModule = modules[moduleIndex + 1];
    return { module: nextModule, lesson: nextModule.lessons[0] };
  }

  return undefined;
}

export function getPrevLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const moduleIndex = modules.findIndex(m => m.slug === moduleSlug);
  if (moduleIndex === -1) return undefined;

  const module = modules[moduleIndex];
  const lessonIndex = module.lessons.findIndex(l => l.slug === lessonSlug);
  
  if (lessonIndex === -1) return undefined;

  // Previous lesson in same module
  if (lessonIndex > 0) {
    return { module, lesson: module.lessons[lessonIndex - 1] };
  }

  // Last lesson of previous module
  if (moduleIndex > 0) {
    const prevModule = modules[moduleIndex - 1];
    return { module: prevModule, lesson: prevModule.lessons[prevModule.lessons.length - 1] };
  }

  return undefined;
}

export function getLessonId(moduleSlug: string, lessonSlug: string): string {
  return `${moduleSlug}/${lessonSlug}`;
}

export function getTotalLessons(): number {
  return modules.reduce((total, module) => total + module.lessons.length, 0);
}

export function getModuleLessons(moduleSlug: string): Lesson[] {
  return getModule(moduleSlug)?.lessons || [];
}
