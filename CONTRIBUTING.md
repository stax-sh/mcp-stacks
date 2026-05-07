# Contributing

Thanks for wanting to contribute. This list is curated, so submissions go through review — not every server makes it in. That's the value: a reader trusts that an entry on this list isn't pure noise.

## Two ways to submit

**1. Use the submission form (fastest)**

[stax.sh/submit](https://stax.sh/submit?utm_source=github&utm_medium=contributing&utm_campaign=mcp-stacks) feeds the same review queue. No git required.

**2. Open a pull request**

Edit `data/servers.json` directly, then run the README generator:

```bash
node scripts/build-readme.mjs
```

Commit both the data change and the regenerated `README.md`.

## What we look for

A server gets in if it:

- **Has a public source repo.** No closed-source binaries.
- **Implements MCP.** Not "uses an LLM," not "is AI-related." We're listing servers that speak the [Model Context Protocol](https://modelcontextprotocol.io).
- **Is alive.** Last commit within ~6 months unless it's stable infrastructure code.
- **Solves something specific.** "Generic AI tool" entries get cut. The description should answer "what does this let an agent do that it couldn't before?"
- **Doesn't ship obvious security smells.** Logging tokens to stdout, no auth scoping, exfiltrating data by default — these are auto-rejects. See [SECURITY.md](./SECURITY.md).

## What we cut

- Spam entries (typoed clones, x402 token-grab projects, AI-generated submissions with no real implementation)
- Aggregators of aggregators
- Servers that haven't been touched in 12+ months and have no users
- Servers superseded by an official one (we keep the official one)

## Field guide for `servers.json` entries

```json
{
  "id": "io.github.author/server-name",
  "name": "Display Name",
  "description": "One paragraph. Lead with what an agent can do with it. Avoid marketing language.",
  "github_url": "https://github.com/author/server-name",
  "homepage": "https://product-homepage.example",
  "install_command": "npx -y server-name",
  "stars": 1234,
  "author": {
    "name": "author",
    "url": "https://github.com/author"
  },
  "icon": "https://avatars.githubusercontent.com/u/12345?v=4"
}
```

- `id` follows reverse-DNS or `org/repo` form. Match the official MCP registry id when one exists.
- `description` is the most-read field. Spend time on it. Plain English, no buzzwords, lead with the verb (what the agent does).
- `install_command` is what a user pastes. Prefer `npx -y` / `uvx` / `mcp-remote`. Avoid multi-step setups in this field — link to the repo's README for those.

## Updating a stack

Stacks live in `data/stacks.json`. They are very curated: each server in a stack needs a clear reason it's there, and the stack as a whole needs to solve a workflow most people would actually run. New stack proposals get more scrutiny than new server submissions — make a strong case in the PR description.

## License

By contributing, you agree your contributions are licensed under MIT (see [LICENSE](./LICENSE)).
