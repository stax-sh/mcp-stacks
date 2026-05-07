# Contributing

This list is curated. Submissions go through review.

## Two ways to submit

**1. Use the form (fastest):** [stax.sh/submit](https://stax.sh/submit?utm_source=github&utm_medium=contributing&utm_campaign=mcp-stacks). No git required, same review queue.

**2. Open a PR:** edit `data/servers.json`, run `node scripts/build-readme.mjs`, commit both the data change and the regenerated README.

---

## What we check

### 1. Security — the bar that matters most

A listed server runs with whatever permissions a user grants it. We say no to anything that would put that user at obvious risk. Specifically, we look for:

- **Public source code.** No closed-source binaries on this list. We need to be able to read it, and so does the user before they install it.
- **Honest scoping.** Read-only modes available where it makes sense (DBs, filesystems). Tools don't quietly request more access than they need.
- **Tokens stay where they belong.** Credentials read from env vars or the client's own auth flow. No proxying through a third-party server by default.
- **No surprise network calls.** A "filesystem" server shouldn't phone home. A "docs" server shouldn't read your repos.
- **Pinnable versions.** Users can pin to a specific release rather than `@latest`.

If we can't tell from a 10-minute read of the source, we ask the author. If the answer is hand-wavy, we don't list it.

See [SECURITY.md](./SECURITY.md) for the full guidance we apply (and that users should apply when installing).

### 2. Specific value

The description should answer: **what can an agent do with this that it couldn't before?** Servers that don't pass this test get cut — generic "AI helper" entries waste a reader's time.

### 3. Useful install path

Users should be able to copy one command and have a working server. `npx -y …`, `uvx …`, `mcp-remote https://…`. Multi-step setups belong in the linked README, not the install field.

---

## Field guide for `servers.json`

```json
{
  "id": "io.github.author/server-name",
  "name": "Display Name",
  "description": "One paragraph. Lead with the verb — what an agent can do with it. No marketing language.",
  "github_url": "https://github.com/author/server-name",
  "homepage": "https://product-homepage.example",
  "install_command": "npx -y server-name",
  "stars": 1234,
  "author": { "name": "author", "url": "https://github.com/author" },
  "icon": "https://avatars.githubusercontent.com/u/12345?v=4"
}
```

- `id` — reverse-DNS or `org/repo` form. Match the official MCP registry id when one exists.
- `description` — the most-read field. Plain English, lead with the verb.
- `install_command` — the exact string a user pastes. Prefer `npx -y` / `uvx` / `mcp-remote`.

---

## Updating a stack

Stacks (`data/stacks.json`) are highly curated: each included server needs a clear reason it's there, and the stack as a whole has to solve a workflow most people would actually run. New stack proposals get more scrutiny than new server submissions — make a strong case in the PR description.

---

## License

By contributing, you agree your contributions are MIT-licensed (see [LICENSE](./LICENSE)).
