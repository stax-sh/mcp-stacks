#!/usr/bin/env node
// Regenerates README.md from data/servers.json and data/stacks.json.
// Run after editing the data files: `node scripts/build-readme.mjs`.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const servers = JSON.parse(readFileSync(join(root, "data/servers.json"), "utf8")).servers;
const stacks = JSON.parse(readFileSync(join(root, "data/stacks.json"), "utf8"));

const serverById = new Map(servers.map((s) => [s.id, s]));

const fmtStars = (n) => {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
};

const escapePipes = (s) => s.replace(/\|/g, "\\|");

const top = [...servers].sort((a, b) => b.stars - a.stars).slice(0, 10);

const lines = [];

lines.push(`# mcp-stacks`);
lines.push("");
lines.push(`A curated, security-conscious directory of [Model Context Protocol](https://modelcontextprotocol.io) servers — plus pre-built **stacks** that bundle servers for real workflows.`);
lines.push("");
lines.push(`Browse on the web at **[stax.sh](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)**.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Why this exists`);
lines.push("");
lines.push(`There are bigger lists. [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) has thousands of entries. The [official MCP registry](https://registry.modelcontextprotocol.io) is the canonical source of truth.`);
lines.push("");
lines.push(`What's missing is **opinion**. Most lists are firehoses: every entry treated equally, no signal about which servers are safe to actually wire up to a coding agent that can read your filesystem, your tokens, and your production data.`);
lines.push("");
lines.push(`This list is different on three axes:`);
lines.push("");
lines.push(`- **Curated** — ${servers.length} servers, not ${"10,000"}. Each one earns its place. We remove servers that go stale, abandoned, or get superseded.`);
lines.push(`- **Security-aware** — every server entry is meant to answer "should I trust this with my tokens?" first. We flag official vs community, and link to the source so you can read the code yourself. See [SECURITY.md](./SECURITY.md).`);
lines.push(`- **Composable as stacks** — most useful agents need *several* servers wired together (search + scrape + render, or Postgres + vector store + docs). We ship pre-built **stacks** for the workflows people actually run.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Stacks`);
lines.push("");
lines.push(`A stack is a small, opinionated bundle of MCP servers that solve a workflow together. Copy the install commands, paste them into your client, and you have a working agent.`);
lines.push("");

for (const stack of stacks) {
  lines.push(`### ${stack.name}`);
  lines.push("");
  lines.push(stack.description);
  lines.push("");
  lines.push(`**Use case:** ${stack.use_case}`);
  lines.push("");
  lines.push(`**Servers:**`);
  lines.push("");
  for (const id of stack.server_ids) {
    const s = serverById.get(id);
    if (!s) continue;
    const rationale = stack.rationale_per_server[id] ?? "";
    lines.push(`- **[${s.name}](${s.github_url})** — ${rationale}`);
  }
  lines.push("");
  lines.push(`**Install:**`);
  lines.push("");
  lines.push("```bash");
  lines.push(stack.combined_install);
  lines.push("```");
  lines.push("");
  lines.push(`[Read the full stack on stax.sh →](https://stax.sh/stacks/${stack.slug}?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)`);
  lines.push("");
}

lines.push(`> Have a stack you'd like to see? [Submit it](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) or open an issue.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Top 10 servers`);
lines.push("");
lines.push(`The most-starred servers in the directory. Star count is from the canonical GitHub repo for each server.`);
lines.push("");
lines.push(`| # | Server | What it does | Stars | Install |`);
lines.push(`| --- | --- | --- | ---: | --- |`);
top.forEach((s, i) => {
  const desc = s.description.split(/(?<=[.!?])\s/)[0];
  const install = s.install_command ? `\`${s.install_command}\`` : "—";
  lines.push(`| ${i + 1} | **[${s.name}](${s.github_url})** | ${escapePipes(desc)} | ${fmtStars(s.stars)} | ${escapePipes(install)} |`);
});
lines.push("");
lines.push(`See **[the full directory on stax.sh](https://stax.sh/servers?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)** for filtering, search, and per-server security notes.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## How to use these servers`);
lines.push("");
lines.push(`Most servers in this list run via \`npx\` (Node), \`uvx\` (Python), or as a remote endpoint. Add them to your client of choice:`);
lines.push("");
lines.push(`### Claude Desktop`);
lines.push("");
lines.push("Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:");
lines.push("");
lines.push("```json");
lines.push(JSON.stringify({
  mcpServers: {
    context7: {
      command: "npx",
      args: ["-y", "@upstash/context7-mcp"],
    },
  },
}, null, 2));
lines.push("```");
lines.push("");
lines.push(`### Claude Code`);
lines.push("");
lines.push("```bash");
lines.push(`claude mcp add context7 -- npx -y @upstash/context7-mcp`);
lines.push("```");
lines.push("");
lines.push(`### Cursor`);
lines.push("");
lines.push("Edit `~/.cursor/mcp.json` with the same shape as the Claude Desktop config above.");
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Full directory`);
lines.push("");
lines.push(`All ${servers.length} servers, sorted by GitHub stars.`);
lines.push("");
lines.push(`<details>`);
lines.push(`<summary><strong>Show all ${servers.length} servers</strong></summary>`);
lines.push("");
lines.push(`| Server | Description | Stars | Install |`);
lines.push(`| --- | --- | ---: | --- |`);
const sorted = [...servers].sort((a, b) => b.stars - a.stars);
for (const s of sorted) {
  const desc = s.description.split(/(?<=[.!?])\s/)[0];
  const install = s.install_command ? `\`${s.install_command}\`` : "—";
  lines.push(`| **[${s.name}](${s.github_url})** | ${escapePipes(desc)} | ${fmtStars(s.stars)} | ${escapePipes(install)} |`);
}
lines.push("");
lines.push(`</details>`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Data`);
lines.push("");
lines.push(`The directory is structured data, not just markdown. Pull it directly:`);
lines.push("");
lines.push("```bash");
lines.push(`curl -s https://raw.githubusercontent.com/stax-sh/mcp-stacks/main/data/servers.json | jq '.servers[0]'`);
lines.push("```");
lines.push("");
lines.push(`- [\`data/servers.json\`](./data/servers.json) — every server with id, install command, GitHub URL, stars, author`);
lines.push(`- [\`data/stacks.json\`](./data/stacks.json) — every stack with rationale for each included server`);
lines.push("");
lines.push(`Build something on top? Drop a link in [Discussions](https://github.com/stax-sh/mcp-stacks/discussions).`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Contributing`);
lines.push("");
lines.push(`See [CONTRIBUTING.md](./CONTRIBUTING.md). The fastest path is the [submission form on stax.sh](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — it goes to the same review queue as PRs here.`);
lines.push("");
lines.push(`We curate. Submissions don't auto-merge. We check that the server:`);
lines.push("");
lines.push(`- Has a public source repo`);
lines.push(`- Implements MCP (not just "uses an LLM")`);
lines.push(`- Is alive — last commit within ~6 months unless it's stable infra`);
lines.push(`- Doesn't ship obvious security smells (token logging, no scoping, exfil-by-default)`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## Security`);
lines.push("");
lines.push(`MCP servers run with whatever permissions you give them. A misbehaving server with your GitHub token can do a lot of damage. Read [SECURITY.md](./SECURITY.md) before wiring anything up to a real account.`);
lines.push("");
lines.push(`Found a security issue with a listed server? Open an issue. We'll flag, contact the author, and consider removal if it isn't fixed.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## License`);
lines.push("");
lines.push(`The directory content (this repo) is [MIT](./LICENSE). Each listed server is licensed by its respective owner — check the linked repos.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`<sub>Maintained by [stax.sh](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks-footer). Last generated: ${new Date().toISOString().slice(0, 10)}</sub>`);
lines.push("");

writeFileSync(join(root, "README.md"), lines.join("\n"));
console.log(`Wrote README.md (${lines.length} lines, ${servers.length} servers, ${stacks.length} stacks)`);
