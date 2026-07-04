# mcp-stacks

A **stack** is a small bundle of MCP servers tested together for one job.

Copy the install block, paste it into Claude Code, Cursor, or Claude Desktop, ship.

Behind the stacks: a curated directory of 98 servers, each reviewed for security.

[Browse on stax.sh →](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

---

## Stacks

Three pre-built bundles. Pick one, copy the install block, ship.

| Stack | For | Servers |
| --- | --- | --- |
| [**Coding Agent**](#coding-agent) | Ship code with an AI coding agent | GitHub · Context7 · Chrome DevTools MCP · Getsentry Sentry |
| [**Web Researcher**](#web-researcher) | Search, scrape, and digest the web | Tavily · Firecrawl · Markitdown |
| [**Data**](#data-stack) | Wire an agent to your databases | Neon · Mongodb · Chroma |

### Coding Agent

> What an AI coding agent needs to ship a feature: source control, current docs, a real browser to test in, and visibility when something breaks in production.

- [GitHub](https://stax.sh/servers/io.github.github/github-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Connects the agent to GitHub itself: read code
- [Context7](https://stax.sh/servers/io.github.upstash/context7?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Up-to-date library docs from official sources
- [Chrome DevTools MCP](https://stax.sh/servers/io.github.ChromeDevTools/chrome-devtools-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Drives a real Chrome with full DevTools access
- [Getsentry Sentry](https://stax.sh/servers/io.github.getsentry/sentry-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Pulls real production errors with stack traces

```bash
npx mcp-remote https://api.githubcopilot.com/mcp/
npx -y @upstash/context7-mcp
npx -y chrome-devtools-mcp
npx -y @sentry/mcp-server
```

[Why these four →](https://stax.sh/stacks/coding-agent?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

### Web Researcher

> Three servers an agent needs to actually read the web: a search engine, a scraper that handles JS, and a converter that turns whatever it pulls back into clean Markdown.

- [Tavily](https://stax.sh/servers/io.github.tavily-ai/tavily-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Search built for LLMs, not humans
- [Firecrawl](https://stax.sh/servers/firecrawl/firecrawl-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Renders JS-heavy pages and returns clean Markdown
- [Markitdown](https://stax.sh/servers/microsoft/markitdown?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Converts PDFs, Word docs, slides, and images to Markdown

```bash
npx -y tavily-mcp
npx -y firecrawl-mcp
uvx markitdown-mcp
```

[Why these four →](https://stax.sh/stacks/web-researcher?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

### Data

> An agent that can speak to your data. One Postgres server, one document store, one vector DB. Enough surface to prototype most data workflows without dragging in five admin tools.

- [Neon](https://stax.sh/servers/neondatabase/mcp-server-neon?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Postgres on Neon, including branching and migrations
- [Mongodb](https://stax.sh/servers/io.github.mongodb-js/mongodb-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Run queries and aggregations against MongoDB Atlas or self-hosted
- [Chroma](https://stax.sh/servers/chroma-core/chroma-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — Open-source vector database for retrieval

```bash
npx mcp-remote https://mcp.neon.tech/sse
npx -y mongodb-mcp-server
uvx chroma-mcp
```

[Why these four →](https://stax.sh/stacks/data-stack?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

Need a different stack? [Suggest one](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks).

---

> If a stack here saved you ten minutes, [**★ the repo**](https://github.com/stax-sh/mcp-stacks) — it's how I know which stacks to curate next.

---

## Top 10 servers

Most-starred servers in the directory.

| # | Server | What it does | Stars | Install |
| --- | --- | --- | ---: | --- |
| 1 | [Markitdown](https://stax.sh/servers/microsoft/markitdown?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Converts PDFs, Word docs, Excel sheets, PowerPoint files | 121.1k | `uvx markitdown-mcp` |
| 2 | [Netdata](https://stax.sh/servers/io.github.netdata/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Real-time infrastructure monitoring data: query metrics | 78.7k | `npx mcp-remote https://app.netdata.cloud/api/v1/mcp` |
| 3 | [Context7](https://stax.sh/servers/io.github.upstash/context7?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Fetches up-to-date documentation and code examples from official sources | 54.6k | `npx -y @upstash/context7-mcp` |
| 4 | [Chrome DevTools MCP](https://stax.sh/servers/io.github.ChromeDevTools/chrome-devtools-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Direct access to a live Chrome browser: inspect the DOM | 38.3k | `npx -y chrome-devtools-mcp` |
| 5 | [Playwright](https://stax.sh/servers/microsoft/playwright-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Full browser automation via structured accessibility snapshots | 32.1k | `npx -y @playwright/mcp` |
| 6 | [GitHub](https://stax.sh/servers/io.github.github/github-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | GitHub: read repos and code, manage issues and PRs | 29.6k | `npx mcp-remote https://api.githubcopilot.com/mcp/` |
| 7 | [Serena](https://stax.sh/servers/oraios/serena?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Semantic code retrieval and editing capabilities | 23.9k | `uvx serena` |
| 8 | [Unity](https://stax.sh/servers/coplaydev/unity-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Unity Editor, letting it read and modify scenes | 9.3k | `uv {unity_mcp_server_src} run server.py` |
| 9 | [Firecrawl](https://stax.sh/servers/firecrawl/firecrawl-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Searches the web, scrapes URLs into clean structured data | 6.2k | `npx -y firecrawl-mcp` |
| 10 | [Desktop Commander](https://stax.sh/servers/io.github.wonderwhy-er/desktop-commander?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Full control over a local machine: run terminal commands | 6k | `npx -y @wonderwhy-er/desktop-commander` |

See [the full directory on stax.sh](https://stax.sh/servers?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) for filtering, search, and per-server security notes.

---

## How to use these servers

Most run via `npx` (Node), `uvx` (Python), or as a remote endpoint.

Wire them into your client:

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp"
      ]
    }
  }
}
```

### Claude Code

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

### Cursor

Edit `~/.cursor/mcp.json` with the same shape as the Claude Desktop config above.

---

## Full directory

All 98 servers, sorted by GitHub stars.

<details>
<summary>Show all 98 servers</summary>

| Server | What it does | Stars | Install |
| --- | --- | ---: | --- |
| [Markitdown](https://stax.sh/servers/microsoft/markitdown?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Converts PDFs, Word docs, Excel sheets, PowerPoint files | 121.1k | `uvx markitdown-mcp` |
| [Netdata](https://stax.sh/servers/io.github.netdata/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Real-time infrastructure monitoring data: query metrics | 78.7k | `npx mcp-remote https://app.netdata.cloud/api/v1/mcp` |
| [Context7](https://stax.sh/servers/io.github.upstash/context7?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Fetches up-to-date documentation and code examples from official sources | 54.6k | `npx -y @upstash/context7-mcp` |
| [Chrome DevTools MCP](https://stax.sh/servers/io.github.ChromeDevTools/chrome-devtools-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Direct access to a live Chrome browser: inspect the DOM | 38.3k | `npx -y chrome-devtools-mcp` |
| [Playwright](https://stax.sh/servers/microsoft/playwright-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Full browser automation via structured accessibility snapshots | 32.1k | `npx -y @playwright/mcp` |
| [GitHub](https://stax.sh/servers/io.github.github/github-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | GitHub: read repos and code, manage issues and PRs | 29.6k | `npx mcp-remote https://api.githubcopilot.com/mcp/` |
| [Serena](https://stax.sh/servers/oraios/serena?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Semantic code retrieval and editing capabilities | 23.9k | `uvx serena` |
| [Unity](https://stax.sh/servers/coplaydev/unity-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Unity Editor, letting it read and modify scenes | 9.3k | `uv {unity_mcp_server_src} run server.py` |
| [Firecrawl](https://stax.sh/servers/firecrawl/firecrawl-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Searches the web, scrapes URLs into clean structured data | 6.2k | `npx -y firecrawl-mcp` |
| [Desktop Commander](https://stax.sh/servers/io.github.wonderwhy-er/desktop-commander?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Full control over a local machine: run terminal commands | 6k | `npx -y @wonderwhy-er/desktop-commander` |
| [Notion](https://stax.sh/servers/makenotion/notion-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A Notion workspace: search and read pages | 4.3k | `npx mcp-remote https://mcp.notion.com/sse` |
| [Azure MCP Server](https://stax.sh/servers/com.microsoft/azure?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Azure services including Storage, Cosmos DB | 3.1k | `npx -y @azure/mcp` |
| [Microsoft Fabric MCP Server](https://stax.sh/servers/com.microsoft/microsoft-fabric?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to the full OpenAPI specifications | 3.1k | `npx -y @microsoft/fabric-mcp` |
| [DBHub](https://stax.sh/servers/io.github.bytebase/dbhub?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite through a single | 2.7k | `npx -y @bytebase/dbhub` |
| [Supabase](https://stax.sh/servers/com.supabase/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A Supabase project: query and migrate databases | 2.7k | `npx mcp-remote https://mcp.supabase.com/mcp` |
| [Brightdata](https://stax.sh/servers/io.github.brightdata/brightdata-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to the live web via a managed scraping network | 2.3k | `npx -y @brightdata/mcp` |
| [Tavily](https://stax.sh/servers/io.github.tavily-ai/tavily-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Real-time web search, page extraction, site mapping | 1.9k | `npx -y tavily-mcp` |
| [Azure DevOps](https://stax.sh/servers/microsoft/azure-devops-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Azure DevOps: browse repos, manage work items and iterations | 1.7k | `npx -y @azure-devops/mcp` |
| [Microsoft Learn](https://stax.sh/servers/microsoftdocs/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Direct access to official Microsoft and Azure documentation | 1.6k | `npx mcp-remote https://learn.microsoft.com/api/mcp` |
| [Microsoft Nuget](https://stax.sh/servers/com.microsoft/nuget?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Query NuGet package feeds for real-time package metadata | 1.5k | `dnx NuGet.Mcp.Server` |
| [Stripe](https://stax.sh/servers/com.stripe/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Stripe API: manage customers, products, prices | 1.5k | `npx mcp-remote https://mcp.stripe.com` |
| [Terraform](https://stax.sh/servers/io.github.hashicorp/terraform-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Terraform Registry and HCP Terraform, covering provider and module lookups | 1.4k | `docker run docker.io/hashicorp/terraform-mcp-server:0.5.0` |
| [Figma MCP Server](https://stax.sh/servers/com.figma.mcp/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Figma design files: extract layout data | 1.4k | `npx mcp-remote https://mcp.figma.com/mcp` |
| [Apify](https://stax.sh/servers/com.apify/apify-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Exposes thousands of pre-built web scrapers and automation Actors | 1.2k | `npx mcp-remote https://mcp.apify.com/` |
| [Mongodb](https://stax.sh/servers/io.github.mongodb-js/mongodb-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | MongoDB databases and MongoDB Atlas: query collections | 1k | `npx -y mongodb-mcp-server` |
| [Nuxt](https://stax.sh/servers/antfu/nuxt-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Integrates as a Vite plugin or Nuxt module to expose live app internals to | 907 | `npx mcp-remote https://mcp.nuxt.com/sse` |
| [Vercel Next Dev Tools](https://stax.sh/servers/io.github.vercel/next-devtools-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A running Next.js 16+ dev server, exposing live route structure | 740 | `npx -y next-devtools-mcp` |
| [Getsentry Sentry](https://stax.sh/servers/io.github.getsentry/sentry-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Sentry error monitoring, letting it look up issues | 677 | `npx -y @sentry/mcp-server` |
| [Elasticsearch](https://stax.sh/servers/elastic/mcp-server-elasticsearch?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | An Elasticsearch cluster so it can run search queries | 653 | `docker run docker.elastic.co/mcp/elasticsearch` |
| [Atlassian](https://stax.sh/servers/com.atlassian/atlassian-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Jira, Confluence, and Compass: search and summarize content | 652 | `npx mcp-remote https://mcp.atlassian.com/v1/mcp` |
| [Neon](https://stax.sh/servers/neondatabase/mcp-server-neon?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Neon Postgres: create and manage projects and branches | 594 | `npx mcp-remote https://mcp.neon.tech/sse` |
| [SonarSource Sonarqube](https://stax.sh/servers/io.github.SonarSource/sonarqube-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | SonarQube Server or SonarQube Cloud, letting it query code quality findings | 546 | `docker run docker.io/mcp/sonarqube:latest` |
| [Chroma](https://stax.sh/servers/chroma-core/chroma-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A persistent vector database: create and manage document collections | 542 | `uvx chroma-mcp` |
| [Todoist](https://stax.sh/servers/doist/todoist-ai?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | AI connects an agent to a Todoist account | 476 | `npx mcp-remote https://ai.todoist.net/mcp` |
| [Monday](https://stax.sh/servers/com.monday/monday.com?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A monday.com workspace: read and update boards | 399 | `npx mcp-remote https://mcp.monday.com/mcp` |
| [Mapbox](https://stax.sh/servers/io.github.mapbox/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Mapbox location services: forward and reverse geocoding | 338 | `npx mcp-remote https://mcp.mapbox.com/mcp` |
| [Imagesorcery](https://stax.sh/servers/sunriseapps/imagesorcery-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Processes local images without sending them to external servers: crop | 308 | `imagesorcery-mcp` |
| [Azure AI Foundry](https://stax.sh/servers/azure-ai-foundry/mcp-foundry?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Azure AI Foundry: browse the model catalog | 244 | `uvx run-azure-ai-foundry-mcp` |
| [Svelte MCP](https://stax.sh/servers/dev.svelte/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Is the official server for Svelte development | 242 | `npx mcp-remote https://mcp.svelte.dev/mcp` |
| [Postman](https://stax.sh/servers/com.postman/postman-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Postman workspaces, letting it read and manage API collections | 233 | `npx mcp-remote https://mcp.postman.com/mcp` |
| [Hugging Face](https://stax.sh/servers/huggingface/hf-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Hub: search models, datasets, Spaces, papers | 229 | `npx mcp-remote https://huggingface.co/mcp?login` |
| [Awesome Copilot MCP Server](https://stax.sh/servers/io.github.microsoft/awesome-copilot?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Retrieves GitHub Copilot customization files from the awesome-copilot | 180 | `docker run ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:1.0.2026050605` |
| [Logfire](https://stax.sh/servers/pydantic/logfire-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to OpenTelemetry traces and metrics stored in Logfire | 161 | `uvx logfire-mcp` |
| [Glean Remote MCP Server](https://stax.sh/servers/com.glean/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A company's Glean knowledge base, letting it search across internal | 160 | `npx mcp-remote https://{baseUrl}/mcp/{server-name}` |
| [pgEdge Postgres](https://stax.sh/servers/io.github.pgEdge/postgres-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | PostgreSQL via natural language, with hybrid search combining pgvector | 156 | `docker run ghcr.io/pgedge/postgres-mcp:latest` |
| [SAP Fiori](https://stax.sh/servers/io.github.SAP/fiori-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Create and modify SAP Fiori elements applications: generate list reports | 142 | `npx -y @sap-ux/fiori-mcp-server` |
| [Serpapi](https://stax.sh/servers/io.github.serpapi/serpapi-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Runs real-time searches across Google, Bing | 134 | `npx mcp-remote https://mcp.serpapi.com/mcp` |
| [Azure Kubernetes Service](https://stax.sh/servers/azure/aks-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Bridges AI assistants and Azure Kubernetes Service | 132 | `docker run ghcr.io/azure/aks-mcp` |
| [Webflow](https://stax.sh/servers/com.webflow/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Webflow sites via the Data API: read and write CMS content | 130 | `npx mcp-remote https://mcp.webflow.com/mcp` |
| [Fabric Real-Time Intelligence](https://stax.sh/servers/microsoft/fabric-rti-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Microsoft Fabric RTI: run KQL queries against Eventhouse and Azure Data | 114 | `uvx microsoft-fabric-rti-mcp` |
| [Dynatrace](https://stax.sh/servers/io.github.dynatrace-oss/Dynatrace-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A Dynatrace SaaS environment: query logs | 113 | `npx -y @dynatrace-oss/dynatrace-mcp-server` |
| [Miro](https://stax.sh/servers/io.github.miroapp/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Miro boards, letting it read board content for context | 98 | `npx mcp-remote https://mcp.miro.com/` |
| [Cap JS](https://stax.sh/servers/io.github.cap-js/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to the SAP Cloud Application Programming Model: search CDS model | 95 | `npx -y @cap-js/mcp-server` |
| [Octopus Deploy](https://stax.sh/servers/octopusdeploy/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | An Octopus instance for inspecting projects | 95 | `npx -y @octopusdeploy/mcp-server` |
| [UI5](https://stax.sh/servers/io.github.UI5/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Supports SAPUI5 and OpenUI5 development by giving agents access to API | 82 | `npx -y @ui5/mcp-server` |
| [Clarity](https://stax.sh/servers/microsoft/clarity-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Microsoft Clarity analytics: traffic metrics | 82 | `npx -y @microsoft/clarity-mcp-server` |
| [Arm MCP Server](https://stax.sh/servers/io.github.arm/arm-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Work with Arm architecture: search Arm documentation | 72 | `docker run docker.io/armlimited/arm-mcp:2.0.0` |
| [DeepWiki](https://stax.sh/servers/cognitionai/deepwiki?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to AI-generated documentation for public GitHub repositories | 71 | `npx mcp-remote https://mcp.deepwiki.com/sse` |
| [Sonatype Dependency Management](https://stax.sh/servers/com.sonatype/dependency-management-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Sonatype's open-source intelligence platform: check component versions | 71 | `npx mcp-remote https://mcp.guide.sonatype.com/mcp` |
| [PagerDuty](https://stax.sh/servers/io.github.PagerDuty/pagerduty-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | PagerDuty, letting it manage incidents, query on-call schedules | 67 | `uvx pagerduty-mcp` |
| [ScrapeGraphAI Scrapegraph](https://stax.sh/servers/io.github.ScrapeGraphAI/scrapegraph-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | ScrapeGraph AI connects an agent to the ScrapeGraph API for web scraping | 66 | `uvx scrapegraph-mcp` |
| [Codacy](https://stax.sh/servers/codacy/codacy-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Codacy's code analysis platform: surface quality issues | 58 | `npx -y @codacy/codacy-mcp` |
| [Mapbox MCP Devkit Server](https://stax.sh/servers/io.github.mapbox/mcp-devkit-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Mapbox developer APIs: create and manage map styles | 50 | `npx mcp-remote https://mcp-devkit.mapbox.com/mcp` |
| [Amplitude](https://stax.sh/servers/amplitude/mcp-server-guide?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Amplitude product analytics, letting it query event data | 45 | `npx mcp-remote https://mcp.amplitude.com/mcp` |
| [Zapier](https://stax.sh/servers/zapier/zapier-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Over 9,000 apps and 40,000 actions | 40 | `npx mcp-remote {zapier_mcp_url}` |
| [Microsoft MCP Server for Enterprise](https://stax.sh/servers/io.github.microsoft/EnterpriseMCP?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Translates natural language queries into Microsoft Graph API calls | 38 | `npx mcp-remote https://mcp.svc.cloud.microsoft/enterprise` |
| [Snyk](https://stax.sh/servers/io.snyk/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Integrates Snyk's security scanning into an agent workflow: scan | 37 | `npx -y snyk` |
| [ContextStream MCP Server](https://stax.sh/servers/io.github.contextstreamio/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Adds persistent memory and codebase-aware context to AI coding assistants | 35 | `npx -y @contextstream/mcp-server` |
| [PubNub MCP Server](https://stax.sh/servers/io.github.pubnub/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to SDK documentation for 20+ languages | 31 | `npx -y @pubnub/mcp` |
| [Zscaler Zero Trust Exchange](https://stax.sh/servers/io.github.zscaler/zscaler-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Zscaler Zero Trust Exchange platform, covering ZPA, ZIA, ZDX, ZCC, and EASM | 30 | `uvx zscaler-mcp` |
| [prompts.chat MCP Server](https://stax.sh/servers/io.github.f/prompts.chat-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to the prompts.chat library: search prompts by keyword | 28 | `npx -y @fkadev/prompts.chat-mcp` |
| [JustCall MCP Server](https://stax.sh/servers/host.justcall.mcp/justcall-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Initiate voice calls and send SMS messages through JustCall | 26 | `npx mcp-remote https://mcp.justcall.host/mcp` |
| [The MCP server for GoReleaser](https://stax.sh/servers/io.github.goreleaser/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Validates GoReleaser configuration files for errors and deprecated options | 22 | `npx -y @goreleaser/mcp` |
| [Launchdarkly](https://stax.sh/servers/launchdarkly/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | LaunchDarkly for managing feature flags, AI configs | 21 | `npx -y @launchdarkly/mcp-server` |
| [Dynatrace Managed](https://stax.sh/servers/io.github.dynatrace-oss/dynatrace-managed-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Self-hosted Dynatrace Managed deployments | 20 | `npx -y @dynatrace-oss/dynatrace-managed-mcp-server` |
| [Rigour](https://stax.sh/servers/io.github.rigour-labs/rigour?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Runs quality gates for AI-generated code: lint | 20 | `npx -y @rigour-labs/mcp` |
| [Venomseven Nslookup](https://stax.sh/servers/io.github.venomseven/nslookup?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | DNS lookup and domain intelligence tools: query any record type | 19 | `npx mcp-remote https://mcp.nslookup.io/mcp` |
| [UI5 Webcomponents](https://stax.sh/servers/io.github.UI5/webcomponents-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to UI5 Web Components documentation: component APIs | 17 | `npx -y @ui5/webcomponents-mcp-server` |
| [Stack Overflow MCP Server](https://stax.sh/servers/com.stackoverflow.mcp/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Stack Overflow's technical knowledge base: search questions and | 16 | `npx mcp-remote https://mcp.stackoverflow.com` |
| [Port](https://stax.sh/servers/io.port/Port?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Port.io, a developer portal platform, letting it query and manage software | 15 | `npx mcp-remote https://mcp.port.io/v1` |
| [Sourcegraph MCP Server](https://stax.sh/servers/io.github.sourcegraph/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A Sourcegraph instance for code search, semantic search | 14 | `npx mcp-remote https://{sourcegraph_hostname}/.api/mcp` |
| [Wix](https://stax.sh/servers/com.wix/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Wix development tools: search the Wix SDK | 13 | `npx mcp-remote https://mcp.wix.com/sse` |
| [Axiom](https://stax.sh/servers/co.axiom/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | An Axiom account: list datasets and schemas | 12 | `npx mcp-remote https://mcp.axiom.co/sse` |
| [Dev Box](https://stax.sh/servers/microsoft/devbox-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Manage Microsoft Dev Box resources: create | 12 | `npx -y @microsoft/devbox-mcp` |
| [JFrog Remote MCP Server](https://stax.sh/servers/io.github.jfrog/jfrog-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | JFrog platform: search artifacts with AQL | 8 | `npx mcp-remote https://myPlatform.jfrog.github.io/mcp` |
| [Vercel](https://stax.sh/servers/com.vercel/vercel-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Vercel projects: inspect deployments | 7 | `npx mcp-remote https://mcp.vercel.com` |
| [Stackhawk](https://stax.sh/servers/com.stackhawk/stackhawk?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Integrates StackHawk's dynamic application security testing into an agent | 6 | `uvx stackhawk-mcp` |
| [Intercom](https://stax.sh/servers/intercom/intercom-mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Access to Intercom customer data: conversations | 5 | `npx mcp-remote https://mcp.intercom.com/mcp` |
| [Anima MCP Server](https://stax.sh/servers/io.github.AnimaApp/anima?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Bridges design and code: an agent can pull projects from Anima Playground | 5 | `npx mcp-remote https://public-api.animaapp.com/v1/mcp` |
| [Holomodular Servicebricks](https://stax.sh/servers/io.github.holomodular/servicebricks?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Generates C# .NET microservices from natural language descriptions | 4 | `npx mcp-remote https://servicebricks.com/api/mcp` |
| [LiveCheck AI](https://stax.sh/servers/com.qualityclouds/mcp-server-qualityclouds?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Validates code against enterprise governance rules for Salesforce | 3 | `npx mcp-remote https://mcp.qualityclouds.com/mcp` |
| [Microsoft Sentinel Data Exploration](https://stax.sh/servers/com.microsoft/sentinel-data-exploration?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Query the Sentinel data lake to find relevant security logs and telemetry | 2 | `npx mcp-remote https://sentinel.microsoft.com/mcp/data-exploration` |
| [Wopee](https://stax.sh/servers/io.github.Wopee-io/wopee-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Wopee.io autonomous testing platform: dispatch crawl-and-test runs | 2 | `npx -y wopee-mcp` |
| [Box](https://stax.sh/servers/box/mcp-server-box-remote?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Enterprise content stored in Box: read and search files and folders | 1 | `npx mcp-remote https://mcp.box.com` |
| [Guru Remote MCP Server](https://stax.sh/servers/com.getguru/mcp-server?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | A Guru knowledge base: search and retrieve verified answers from cards | 1 | `npx mcp-remote https://mcp.api.getguru.com/mcp` |
| [Shipbook](https://stax.sh/servers/io.shipbook/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Shipbook's mobile app logging platform, letting it search production logs | 1 | `npx mcp-remote https://api.shipbook.io/mcp` |
| [openDAW MCP](https://stax.sh/servers/io.github.AMEOBIUS/opendaw-mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Control a browser-based digital audio workstation from an agent: create | 1 | `uvx opendaw-mcp` |
| [ShipStatic](https://stax.sh/servers/com.shipstatic/mcp?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) | Deploys static sites instantly from an agent with no account required | 0 | `npx -y @shipstatic/mcp` |

</details>

---

## Data

The directory is structured data, not just markdown. Pull it directly:

```bash
curl -s https://raw.githubusercontent.com/stax-sh/mcp-stacks/main/data/servers.json | jq '.servers[0]'
```

- [`data/servers.json`](./data/servers.json) — every server with id, install command, GitHub URL, stars, author
- [`data/stacks.json`](./data/stacks.json) — every stack with rationale for each included server

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Fastest path is the [submission form on stax.sh](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks).

---

## Security

MCP servers run with whatever permissions you give them. Read [SECURITY.md](./SECURITY.md) before pointing one at a real account.

Found a security issue with a listed server? Open an issue. We'll flag, contact the author, and remove the entry if it isn't fixed.

---

## License

Directory content [MIT](./LICENSE). Each listed server is licensed by its respective owner — check the linked repos.

---

<sub>Maintained by [stax.sh](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) · [★ on GitHub](https://github.com/stax-sh/mcp-stacks) · Last generated 2026-07-04</sub>
