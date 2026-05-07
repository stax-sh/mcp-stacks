# Security

MCP servers run with whatever permissions you give them. A server with your GitHub token can read your private repos. A server with shell access can `rm -rf` your machine. A server pointed at your prod database can drop tables.

This is fine when you trust the code. It is not fine when you don't.

This document is what we ask before listing a server, and what you should ask before installing one.

## What we check before listing

For every server on this list, we look at:

1. **Who maintains it.** Official vendor, well-known maintainer, anonymous account. Anonymous isn't a no, but it raises the bar on the rest.
2. **Source availability.** No public source = no listing.
3. **What scopes it asks for.** A "read my repos" server that requests `repo` (full read/write) instead of `read:user` is a smell.
4. **How it handles secrets.** Are tokens read from env vars, or piped through some third-party proxy?
5. **What it sends where.** A server that ships your input to a remote API by default needs to make that obvious.
6. **Update cadence.** Servers that haven't been touched in 12+ months drop off the list.

We are not auditors. A green light on this list means we did not find smoke at submission time. It does not mean the code is safe. **Read the source before you install.**

## What you should check before installing

A 30-second checklist:

- [ ] Click through to the GitHub repo. Is it the org you expected? Typo-squatting is real.
- [ ] Skim the last 5 commits. Anything that looks like obfuscated code, post-install scripts, or "telemetry" being added late?
- [ ] Look at the install command. Does it match the official package? `@upstash/context7-mcp` and `@upstash-ai/context7` are not the same.
- [ ] Pin to a version. `npx -y package@1.2.3` beats `npx -y package@latest` for production agents.
- [ ] Scope your tokens. Give the agent a fine-grained PAT with the minimum scopes — never your personal `repo`-scoped token.
- [ ] Run it locally first with no real credentials, and watch what it does.

## Red flags in MCP servers

- **Excessive permissions.** A "weather" server asking for filesystem access. A "docs" server asking for write access to your DB.
- **No scoping.** Every tool exposed at full power, no read-only mode, no allowlist for which paths/tables/repos.
- **Network calls in unexpected places.** A "filesystem" server that phones home.
- **Auth via a third-party proxy.** Your tokens flowing through someone else's server should be opt-in, not the default.
- **No `--read-only` or equivalent.** For DB and filesystem servers, this is table stakes.
- **Update cadence theater.** 50 commits in a week to bump dependencies, but no real changes — sometimes a sign of a project being prepared for a supply chain attack.

## Reporting a security issue

**Issue with this repo (the directory itself, not a listed server):** email security@stax.sh.

**Issue with a listed server:** open an issue here, and ideally also report it to the server's own maintainer. We'll flag the entry and give the maintainer a chance to fix. If it isn't fixed, the entry is removed.

## Further reading

- [MCP security guide](https://modelcontextprotocol.io/docs/concepts/security) — official guidance
- [Puliczek/awesome-mcp-security](https://github.com/Puliczek/awesome-mcp-security) — community-maintained list of MCP security tools and write-ups
