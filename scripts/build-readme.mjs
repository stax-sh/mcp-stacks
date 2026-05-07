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

const UTM = "utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks";
const staxServer = (id) => `https://stax.sh/servers/${id}?${UTM}`;
const staxStack = (slug) => `https://stax.sh/stacks/${slug}?${UTM}`;

const fmtStars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n));
const escapePipes = (s) => s.replace(/\|/g, "\\|");

// Programmatically shorten a description ~50% by stripping boilerplate.
function shortDesc(s, name) {
  let text = s.split(/(?<=[.!?])\s/)[0].replace(/[.!?]$/, "");
  const escName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  text = text.replace(new RegExp(`^${escName}( MCP)?( Server)?\\s+`, "i"), "");
  text = text.replace(/^The /, "");
  text = text.replace(/^MCP( Server)?\s+/i, "");
  const agent = "(an? )?(ai\\s+)?(coding\\s+)?agents?";
  const strips = [
    new RegExp(`^connects ${agent} (directly )?to\\s+`, "i"),
    new RegExp(`^gives ${agent}\\s+`, "i"),
    new RegExp(`^lets ${agent}\\s+`, "i"),
    new RegExp(`^helps ${agent}\\s+`, "i"),
    new RegExp(`^bridges ${agent} and\\s+`, "i"),
    new RegExp(`^supports ${agent}\\s+`, "i"),
    new RegExp(`^integrates (its )?/i`, "i"),
    new RegExp(`^for ${agent}\\s+`, "i"),
    /^connects directly\s+/i,
  ];
  for (const re of strips) text = text.replace(re, "");
  text = text.replace(/^the /i, "");
  text = text.charAt(0).toUpperCase() + text.slice(1);
  if (text.length > 90) {
    const cut = text.slice(0, 90).lastIndexOf(" ");
    text = text.slice(0, cut > 60 ? cut : 90) + "…";
  }
  return text;
}

// Compress rationale lines for the bullet under each stack.
function shortRationale(s) {
  let text = s.split(/(?<=[.!?])\s/)[0].replace(/[.!?]$/, "");
  if (text.length > 80) {
    const cut = text.slice(0, 80).lastIndexOf(" ");
    text = text.slice(0, cut > 50 ? cut : 80) + "…";
  }
  return text;
}

const top = [...servers].sort((a, b) => b.stars - a.stars).slice(0, 10);
const lines = [];

// ── Header ────────────────────────────────────────────────────────────────
lines.push(`# mcp-stacks`);
lines.push("");
lines.push(`Wire your AI agent up with the right tools in under a minute. Each **stack** below is a small bundle of MCP servers tested together for one job — copy the install block, paste it into Claude Code, Cursor, or Claude Desktop, ship.`);
lines.push("");
lines.push(`Behind the stacks is a directory of ${servers.length} servers, each reviewed for security and curated to keep the signal up.`);
lines.push("");
lines.push(`**[Browse on stax.sh →](https://stax.sh?${UTM})**`);
lines.push("");
lines.push(`---`);
lines.push("");

// ── Stacks ────────────────────────────────────────────────────────────────
const stackTaglines = {
  "coding-agent": "Ship code with an AI coding agent",
  "web-researcher": "Search, scrape, and digest the web",
  "data-stack": "Wire an agent to your databases",
};

lines.push(`## Stacks`);
lines.push("");
lines.push(`| Stack | For | Servers |`);
lines.push(`| --- | --- | --- |`);
for (const stack of stacks) {
  const anchor = stack.slug;
  const serverNames = stack.server_ids
    .map((id) => serverById.get(id)?.name)
    .filter(Boolean)
    .join(" · ");
  const tagline = stackTaglines[stack.slug] ?? stack.description.split(/(?<=[.!?])\s/)[0];
  const title = stack.name.replace(/^The /, "").replace(/ Stack$/, "");
  lines.push(`| **[${title}](#${anchor})** | ${escapePipes(tagline)} | ${escapePipes(serverNames)} |`);
}
lines.push("");

for (const stack of stacks) {
  const title = stack.name.replace(/^The /, "").replace(/ Stack$/, "");
  lines.push(`### ${title}`);
  lines.push("");
  lines.push(`> ${stack.description}`);
  lines.push("");
  for (const id of stack.server_ids) {
    const s = serverById.get(id);
    if (!s) continue;
    const rationale = shortRationale(stack.rationale_per_server[id] ?? "");
    lines.push(`- **[${s.name}](${staxServer(s.id)})** — ${rationale}`);
  }
  lines.push("");
  lines.push("```bash");
  lines.push(stack.combined_install);
  lines.push("```");
  lines.push("");
  lines.push(`[Why these →](${staxStack(stack.slug)})`);
  lines.push("");
}

lines.push(`> Need a different stack? [Suggest one](https://stax.sh/submit?${UTM}).`);
lines.push("");
lines.push(`---`);
lines.push("");

// ── Top 10 ────────────────────────────────────────────────────────────────
lines.push(`## Top 10 servers`);
lines.push("");
lines.push(`Most-starred servers in the directory.`);
lines.push("");
lines.push(`| # | Server | What it does | Stars | Install |`);
lines.push(`| --- | --- | --- | ---: | --- |`);
top.forEach((s, i) => {
  const desc = shortDesc(s.description, s.name);
  const install = s.install_command ? `\`${s.install_command}\`` : "—";
  lines.push(`| ${i + 1} | **[${s.name}](${staxServer(s.id)})** | ${escapePipes(desc)} | ${fmtStars(s.stars)} | ${escapePipes(install)} |`);
});
lines.push("");
lines.push(`See **[the full directory on stax.sh](https://stax.sh/servers?${UTM})** for filtering, search, and per-server security notes.`);
lines.push("");
lines.push(`---`);
lines.push("");

// ── How to use ────────────────────────────────────────────────────────────
lines.push(`## How to use these servers`);
lines.push("");
lines.push(`Most run via \`npx\` (Node), \`uvx\` (Python), or as a remote endpoint. Wire them into your client:`);
lines.push("");
lines.push(`### Claude Desktop`);
lines.push("");
lines.push("Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:");
lines.push("");
lines.push("```json");
lines.push(JSON.stringify({ mcpServers: { context7: { command: "npx", args: ["-y", "@upstash/context7-mcp"] } } }, null, 2));
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

// ── Full directory ────────────────────────────────────────────────────────
lines.push(`## Full directory`);
lines.push("");
lines.push(`All ${servers.length} servers, sorted by GitHub stars.`);
lines.push("");
lines.push(`<details>`);
lines.push(`<summary><strong>Show all ${servers.length} servers</strong></summary>`);
lines.push("");
lines.push(`| Server | What it does | Stars | Install |`);
lines.push(`| --- | --- | ---: | --- |`);
const sorted = [...servers].sort((a, b) => b.stars - a.stars);
for (const s of sorted) {
  const desc = shortDesc(s.description, s.name);
  const install = s.install_command ? `\`${s.install_command}\`` : "—";
  lines.push(`| **[${s.name}](${staxServer(s.id)})** | ${escapePipes(desc)} | ${fmtStars(s.stars)} | ${escapePipes(install)} |`);
}
lines.push("");
lines.push(`</details>`);
lines.push("");
lines.push(`---`);
lines.push("");

// ── Data ──────────────────────────────────────────────────────────────────
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
lines.push(`---`);
lines.push("");

// ── Contributing ──────────────────────────────────────────────────────────
lines.push(`## Contributing`);
lines.push("");
lines.push(`See [CONTRIBUTING.md](./CONTRIBUTING.md). Fastest path is the [submission form on stax.sh](https://stax.sh/submit?${UTM}).`);
lines.push("");
lines.push(`---`);
lines.push("");

// ── Security ──────────────────────────────────────────────────────────────
lines.push(`## Security`);
lines.push("");
lines.push(`MCP servers run with whatever permissions you give them. Read [SECURITY.md](./SECURITY.md) before pointing one at a real account.`);
lines.push("");
lines.push(`Found a security issue with a listed server? Open an issue. We'll flag, contact the author, and remove the entry if it isn't fixed.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`## License`);
lines.push("");
lines.push(`Directory content [MIT](./LICENSE). Each listed server is licensed by its respective owner — check the linked repos.`);
lines.push("");
lines.push(`---`);
lines.push("");
lines.push(`<sub>Maintained by [stax.sh](https://stax.sh?${UTM}). Last generated: ${new Date().toISOString().slice(0, 10)}</sub>`);
lines.push("");

writeFileSync(join(root, "README.md"), lines.join("\n"));
console.log(`Wrote README.md (${lines.length} lines, ${servers.length} servers, ${stacks.length} stacks)`);
