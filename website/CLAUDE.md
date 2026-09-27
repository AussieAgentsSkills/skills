# CLAUDE.md

<!--
How to use this file:
1. Save it as CLAUDE.md in your project root.
2. Fill in the Commands and Project sections. Delete any line you leave empty.
3. Run /context in Claude Code to confirm it loaded.

Keep it under 200 lines. Longer files get followed less — every rule you add makes
every other rule slightly less likely to be followed.

Don't put here: code style (use a linter), things Claude can read from the code
itself (folder structure, dependencies), or hard bans (use permissions.deny).

These comments are stripped before Claude reads the file, so they cost nothing.
-->

## Commands

- Install:
- Dev:
- Test:
- Typecheck:
- Lint:

## Project

<!-- Only what Claude can't figure out by reading the repo. A few lines, no more. -->

- What this is:
- Non-obvious constraint:
- Something we do differently from the default, and why:

---

## Workflow

### 1. Plan first

- Plan mode for any task of 3+ steps or any architectural decision. Skip it for one-liners.
- Keep refining the plan until it's complete, not until it's good enough to start.
- If things go sideways mid-execution, stop and re-plan before writing more code.
- Plan the verification too, not just the build.

### 2. Use subagents

- The point is keeping the main context window clean, not parallelism for its own sake.
- Send research, codebase exploration and parallel analysis to subagents. One task each.
- Subagents come back with conclusions, not transcripts.
- Hard problems get more subagents, not one longer attempt.

### 3. Verify before calling it done

- **IMPORTANT: never report a task as complete without evidence it works.** Tests run,
  logs checked, behavior compared against `main`.
- Verification runs in a fresh subagent — not the one that wrote the code.
- Give that subagent the requirement, the diff and the run commands. Not the conversation.
  It should judge the output, not the intent.
- The bar: would a staff engineer approve this diff as-is?

### 4. Ask for the simpler version

- Before a non-trivial change, pause once: is there a simpler design?
- If a fix feels hacky: "knowing what I know now, what's the clean solution?"
- Skip this for obvious fixes. Deleting lines beats adding lines.

### 5. Fix bugs autonomously

- Bug report, failing test or red CI: reproduce it, find the root cause, fix it, confirm.
- Ask only when blocked on access, a decision, or a genuinely ambiguous requirement.

### 6. Write down corrections

- When I correct you, write the rule down so the mistake doesn't repeat.
- Add it here only once the same correction has come up twice and applies every session.

---

## Ask me first

- Destructive SQL or schema changes — show a rollback plan before running anything.
- Deleting files, `rm -rf`, overwriting uncommitted work.
- `git push --force`, `reset --hard`, amending published commits.
- New dependencies or major version upgrades.
- Anything that stages or commits secrets.
- API calls that cost money or burn rate limits.

---

## Principles

- Simplicity first — the smallest change that solves the problem.
- No laziness — root causes only. No temporary patches, no leftover TODOs.
- Minimal impact — touch only what the task requires.

---

## House rules

<!-- Add a line here whenever a review catches something Claude should have known. -->
<!-- Example: prefer `type` over `interface`; never `enum`, use string literal unions. -->
