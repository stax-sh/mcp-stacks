# mcp-stacks

A curated, security-conscious directory of [Model Context Protocol](https://modelcontextprotocol.io) servers — plus pre-built **stacks** that bundle servers for real workflows.

Browse on the web at **[stax.sh](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)**.

---

## Why this exists

There are bigger lists. [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) has thousands of entries. The [official MCP registry](https://registry.modelcontextprotocol.io) is the canonical source of truth.

What's missing is **opinion**. Most lists are firehoses: every entry treated equally, no signal about which servers are safe to actually wire up to a coding agent that can read your filesystem, your tokens, and your production data.

This list is different on three axes:

- **Curated** — 97 servers, not 10,000. Each one earns its place. We remove servers that go stale, abandoned, or get superseded.
- **Security-aware** — every server entry is meant to answer "should I trust this with my tokens?" first. We flag official vs community, and link to the source so you can read the code yourself. See [SECURITY.md](./SECURITY.md).
- **Composable as stacks** — most useful agents need *several* servers wired together (search + scrape + render, or Postgres + vector store + docs). We ship pre-built **stacks** for the workflows people actually run.

---

## Stacks

A stack is a small, opinionated bundle of MCP servers that solve a workflow together. Copy the install commands, paste them into your client, and you have a working agent.

### The Coding Agent Stack

What an AI coding agent needs to ship a feature: source control, current docs, a real browser to test in, and visibility when something breaks in production.

**Use case:** Pair an agent with the tools a working developer touches every hour. Read repos, look up library docs, drive a real browser, and see runtime errors.

**Servers:**

- **[GitHub](https://github.com/github/github-mcp-server)** — Connects the agent to GitHub itself: read code, manage issues and PRs, query workflow runs. The single highest-leverage server for any code task.
- **[Context7](https://github.com/upstash/context7)** — Up-to-date library docs from official sources. Catches the 'this API changed two versions ago' class of agent failures.
- **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — Drives a real Chrome with full DevTools access. Use when the agent needs to actually verify a UI, not just hope the diff looks right.
- **[Getsentry Sentry](https://github.com/getsentry/sentry-mcp)** — Pulls real production errors with stack traces. Closes the loop between 'shipped' and 'still working'.

**Install:**

```bash
npx mcp-remote https://api.githubcopilot.com/mcp/
npx -y @upstash/context7-mcp
npx -y chrome-devtools-mcp
npx -y @sentry/mcp-server
```

[Read the full stack on stax.sh →](https://stax.sh/stacks/coding-agent?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

### The Web Researcher Stack

Three servers an agent needs to actually read the web: a search engine, a scraper that handles JS, and a converter that turns whatever it pulls back into clean Markdown.

**Use case:** Build a research agent that searches, scrapes, and digests. Useful for competitive intel, lead research, or feeding fresh sources into a long writeup.

**Servers:**

- **[Tavily](https://github.com/tavily-ai/tavily-mcp)** — Search built for LLMs, not humans. Returns clean results without ad cruft.
- **[Firecrawl](https://github.com/firecrawl/firecrawl-mcp-server)** — Renders JS-heavy pages and returns clean Markdown. The thing you want when basic curl scraping returns an empty shell.
- **[Markitdown](https://github.com/microsoft/markitdown)** — Converts PDFs, Word docs, slides, and images to Markdown. The bridge between 'I found a source' and 'I can quote it'.

**Install:**

```bash
npx -y tavily-mcp
npx -y firecrawl-mcp
uvx markitdown-mcp
```

[Read the full stack on stax.sh →](https://stax.sh/stacks/web-researcher?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

### The Data Stack

An agent that can speak to your data. One Postgres server, one document store, one vector DB. Enough surface to prototype most data workflows without dragging in five admin tools.

**Use case:** Wire an agent to the storage layer of a typical app. Run analytics queries, look up records, or seed a vector store from documents.

**Servers:**

- **[Neon](https://github.com/neondatabase/mcp-server-neon)** — Postgres on Neon, including branching and migrations. The serverless-Postgres half of most modern stacks.
- **[Mongodb](https://github.com/mongodb-js/mongodb-mcp-server)** — Run queries and aggregations against MongoDB Atlas or self-hosted. The document store half.
- **[Chroma](https://github.com/chroma-core/chroma-mcp)** — Open-source vector database for retrieval. Use it when the agent needs to remember things across sessions.

**Install:**

```bash
npx mcp-remote https://mcp.neon.tech/sse
npx -y mongodb-mcp-server
uvx chroma-mcp
```

[Read the full stack on stax.sh →](https://stax.sh/stacks/data-stack?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)

> Have a stack you'd like to see? [Submit it](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) or open an issue.

---

## Top 10 servers

The most-starred servers in the directory. Star count is from the canonical GitHub repo for each server.

| # | Server | What it does | Stars | Install |
| --- | --- | --- | ---: | --- |
| 1 | **[Markitdown](https://github.com/microsoft/markitdown)** | Markitdown converts PDFs, Word docs, Excel sheets, PowerPoint files, images, audio, HTML, and more into Markdown. | 121.1k | `uvx markitdown-mcp` |
| 2 | **[Netdata](https://github.com/netdata/netdata)** | Netdata connects an agent to real-time infrastructure monitoring data: query metrics, investigate active alerts, run root cause analysis using anomaly detection, explore logs, and execute functions against any connected node. | 78.7k | `npx mcp-remote https://app.netdata.cloud/api/v1/mcp` |
| 3 | **[Context7](https://github.com/upstash/context7)** | Context7 fetches up-to-date documentation and code examples from official sources for over 4,000 libraries, so generated code matches the version actually installed. | 54.6k | `npx -y @upstash/context7-mcp` |
| 4 | **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** | Chrome DevTools MCP gives AI coding agents direct access to a live Chrome browser: inspect the DOM, capture console logs, run JavaScript, monitor network requests, and debug runtime errors without leaving the agent workflow. | 38.3k | `npx -y chrome-devtools-mcp` |
| 5 | **[Playwright](https://github.com/microsoft/playwright-mcp)** | Playwright MCP gives an agent full browser automation via structured accessibility snapshots, so it can navigate pages, click, fill forms, and extract data without needing vision models. | 32.1k | `npx -y @playwright/mcp` |
| 6 | **[GitHub](https://github.com/github/github-mcp-server)** | GitHub MCP Server connects an agent to GitHub: read repos and code, manage issues and PRs, query workflow runs, review Dependabot and security findings, and interact with discussions and notifications. | 29.6k | `npx mcp-remote https://api.githubcopilot.com/mcp/` |
| 7 | **[Serena](https://github.com/oraios/serena)** | Serena gives coding agents semantic code retrieval and editing capabilities, letting them navigate and modify codebases at the symbol level rather than raw text. | 23.9k | `uvx serena` |
| 8 | **[Unity](https://github.com/CoplayDev/unity-mcp)** | Unity MCP connects an AI agent to the Unity Editor, letting it read and modify scenes, manage assets, run scripts, and automate editor workflows through a local bridge server. | 9.3k | `uv {unity_mcp_server_src} run server.py` |
| 9 | **[Firecrawl](https://github.com/firecrawl/firecrawl-mcp-server)** | Firecrawl searches the web, scrapes URLs into clean structured data, crawls multi-page sites, and can run autonomous deep-research sessions with a browser agent. | 6.2k | `npx -y firecrawl-mcp` |
| 10 | **[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP)** | Desktop Commander gives an agent full control over a local machine: run terminal commands, manage processes, read and write files (including Excel, PDF, and Word), and search code across directories. | 6k | `npx -y @wonderwhy-er/desktop-commander` |

See **[the full directory on stax.sh](https://stax.sh/servers?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks)** for filtering, search, and per-server security notes.

---

## How to use these servers

Most servers in this list run via `npx` (Node), `uvx` (Python), or as a remote endpoint. Add them to your client of choice:

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

All 97 servers, sorted by GitHub stars.

<details>
<summary><strong>Show all 97 servers</strong></summary>

| Server | Description | Stars | Install |
| --- | --- | ---: | --- |
| **[Markitdown](https://github.com/microsoft/markitdown)** | Markitdown converts PDFs, Word docs, Excel sheets, PowerPoint files, images, audio, HTML, and more into Markdown. | 121.1k | `uvx markitdown-mcp` |
| **[Netdata](https://github.com/netdata/netdata)** | Netdata connects an agent to real-time infrastructure monitoring data: query metrics, investigate active alerts, run root cause analysis using anomaly detection, explore logs, and execute functions against any connected node. | 78.7k | `npx mcp-remote https://app.netdata.cloud/api/v1/mcp` |
| **[Context7](https://github.com/upstash/context7)** | Context7 fetches up-to-date documentation and code examples from official sources for over 4,000 libraries, so generated code matches the version actually installed. | 54.6k | `npx -y @upstash/context7-mcp` |
| **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** | Chrome DevTools MCP gives AI coding agents direct access to a live Chrome browser: inspect the DOM, capture console logs, run JavaScript, monitor network requests, and debug runtime errors without leaving the agent workflow. | 38.3k | `npx -y chrome-devtools-mcp` |
| **[Playwright](https://github.com/microsoft/playwright-mcp)** | Playwright MCP gives an agent full browser automation via structured accessibility snapshots, so it can navigate pages, click, fill forms, and extract data without needing vision models. | 32.1k | `npx -y @playwright/mcp` |
| **[GitHub](https://github.com/github/github-mcp-server)** | GitHub MCP Server connects an agent to GitHub: read repos and code, manage issues and PRs, query workflow runs, review Dependabot and security findings, and interact with discussions and notifications. | 29.6k | `npx mcp-remote https://api.githubcopilot.com/mcp/` |
| **[Serena](https://github.com/oraios/serena)** | Serena gives coding agents semantic code retrieval and editing capabilities, letting them navigate and modify codebases at the symbol level rather than raw text. | 23.9k | `uvx serena` |
| **[Unity](https://github.com/CoplayDev/unity-mcp)** | Unity MCP connects an AI agent to the Unity Editor, letting it read and modify scenes, manage assets, run scripts, and automate editor workflows through a local bridge server. | 9.3k | `uv {unity_mcp_server_src} run server.py` |
| **[Firecrawl](https://github.com/firecrawl/firecrawl-mcp-server)** | Firecrawl searches the web, scrapes URLs into clean structured data, crawls multi-page sites, and can run autonomous deep-research sessions with a browser agent. | 6.2k | `npx -y firecrawl-mcp` |
| **[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP)** | Desktop Commander gives an agent full control over a local machine: run terminal commands, manage processes, read and write files (including Excel, PDF, and Word), and search code across directories. | 6k | `npx -y @wonderwhy-er/desktop-commander` |
| **[Notion](https://github.com/makenotion/notion-mcp-server)** | Notion MCP Server connects an agent to a Notion workspace: search and read pages, create and update content, manage databases, and move pages between locations. | 4.3k | `npx mcp-remote https://mcp.notion.com/sse` |
| **[Azure MCP Server](https://github.com/microsoft/mcp)** | Azure MCP Server connects an AI agent to Azure services including Storage, Cosmos DB, SQL, Key Vault, Monitor, and more, so agents can query, manage, and operate Azure resources directly. | 3.1k | `npx -y @azure/mcp` |
| **[Microsoft Fabric MCP Server](https://github.com/microsoft/mcp)** | Microsoft Fabric MCP Server gives an agent access to the full OpenAPI specifications, item schemas, and best-practice guidance for all Microsoft Fabric workloads, without connecting to a live environment. | 3.1k | `npx -y @microsoft/fabric-mcp` |
| **[DBHub](https://github.com/bytebase/dbhub)** | DBHub connects an agent to PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite through a single interface, supporting SQL queries, schema exploration, and simultaneous connections to multiple databases. | 2.7k | `npx -y @bytebase/dbhub` |
| **[Supabase](https://github.com/supabase-community/supabase-mcp)** | Supabase MCP connects an agent directly to a Supabase project: query and migrate databases, manage tables and extensions, deploy edge functions, inspect logs, and administer storage and branching. | 2.7k | `npx mcp-remote https://mcp.supabase.com/mcp` |
| **[Brightdata](https://github.com/brightdata/brightdata-mcp)** | Bright Data MCP gives agents access to the live web via a managed scraping network. | 2.3k | `npx -y @brightdata/mcp` |
| **[Tavily](https://github.com/tavily-ai/tavily-mcp)** | Tavily connects an agent to real-time web search, page extraction, site mapping, and systematic crawling through the Tavily API. | 1.9k | `npx -y tavily-mcp` |
| **[Azure DevOps](https://github.com/microsoft/azure-devops-mcp)** | Azure DevOps MCP Server connects an agent to Azure DevOps: browse repos, manage work items and iterations, query builds and pipelines, run test plans, and read and write wiki pages. | 1.7k | `npx -y @azure-devops/mcp` |
| **[Microsoft Learn](https://github.com/microsoftdocs/mcp)** | Microsoft Learn MCP gives an agent direct access to official Microsoft and Azure documentation, including semantic search across docs, page retrieval, and code sample lookup. | 1.6k | `npx mcp-remote https://learn.microsoft.com/api/mcp` |
| **[Microsoft Nuget](https://github.com/NuGet/Home)** | NuGet MCP Server lets an AI agent query NuGet package feeds for real-time package metadata, version history, and dependency information to inform .NET development decisions. | 1.5k | `dnx NuGet.Mcp.Server` |
| **[Stripe](https://github.com/stripe/agent-toolkit)** | Stripe MCP connects an agent to the Stripe API: manage customers, products, prices, payment intents, subscriptions, and other core billing objects. | 1.5k | `npx mcp-remote https://mcp.stripe.com` |
| **[Terraform](https://github.com/hashicorp/terraform-mcp-server)** | Terraform MCP Server connects an agent to the Terraform Registry and HCP Terraform, covering provider and module lookups, workspace management, variable configuration, and run operations for Infrastructure as Code workflows. | 1.4k | `docker run docker.io/hashicorp/terraform-mcp-server:0.5.0` |
| **[Figma MCP Server](https://github.com/figma/mcp-server-guide)** | Figma MCP Server gives an agent access to Figma design files: extract layout data, variables, and component context from frames, and write native Figma content directly to the canvas. | 1.4k | `npx mcp-remote https://mcp.figma.com/mcp` |
| **[Apify](https://github.com/apify/apify-mcp-server)** | Apify MCP Server exposes thousands of pre-built web scrapers and automation Actors, letting an agent extract structured data from websites, social platforms, e-commerce stores, and search engines. | 1.2k | `npx mcp-remote https://mcp.apify.com/` |
| **[Mongodb](https://github.com/mongodb-js/mongodb-mcp-server)** | MongoDB MCP Server connects an agent to MongoDB databases and MongoDB Atlas: query collections, inspect schemas, and manage Atlas clusters and resources. | 1k | `npx -y mongodb-mcp-server` |
| **[Nuxt](https://github.com/antfu/nuxt-mcp)** | Nuxt MCP integrates as a Vite plugin or Nuxt module to expose live app internals to an AI agent during local development, giving it visibility into routes, components, and module state. | 907 | `npx mcp-remote https://mcp.nuxt.com/sse` |
| **[Vercel Next Dev Tools](https://github.com/vercel/next-devtools-mcp)** | Next.js DevTools MCP connects an agent to a running Next.js 16+ dev server, exposing live route structure, runtime errors, server logs, and version-accurate documentation for migrations and new APIs. | 740 | `npx -y next-devtools-mcp` |
| **[Getsentry Sentry](https://github.com/getsentry/sentry-mcp)** | Sentry MCP connects an agent to Sentry error monitoring, letting it look up issues, read stack traces, inspect release details, and work through debugging workflows without leaving the coding environment. | 677 | `npx -y @sentry/mcp-server` |
| **[Elasticsearch](https://github.com/elastic/mcp-server-elasticsearch)** | Elasticsearch MCP Server connects an agent to an Elasticsearch cluster so it can run search queries, inspect index mappings, execute ES\|QL statements, and explore shard information using natural language. | 653 | `docker run docker.elastic.co/mcp/elasticsearch` |
| **[Atlassian](https://github.com/atlassian/atlassian-mcp-server)** | Atlassian Rovo MCP Server connects an agent to Jira, Confluence, and Compass: search and summarize content, create and update issues and pages, automate ticket generation, and navigate project dependencies. | 652 | `npx mcp-remote https://mcp.atlassian.com/v1/mcp` |
| **[Neon](https://github.com/neondatabase/mcp-server-neon)** | Neon MCP Server connects an agent to Neon Postgres: create and manage projects and branches, run SQL queries, apply schema migrations, and administer databases through natural language. | 594 | `npx mcp-remote https://mcp.neon.tech/sse` |
| **[SonarSource Sonarqube](https://github.com/SonarSource/sonarqube-mcp-server)** | SonarQube MCP Server connects an agent to SonarQube Server or SonarQube Cloud, letting it query code quality findings, security hotspots, and analysis results for a project. | 546 | `docker run docker.io/mcp/sonarqube:latest` |
| **[Chroma](https://github.com/chroma-core/chroma-mcp)** | Chroma MCP gives an agent a persistent vector database: create and manage document collections, add content, and retrieve results via semantic search, full-text search, or metadata filters. | 542 | `uvx chroma-mcp` |
| **[Todoist](https://github.com/Doist/todoist-ai)** | Todoist AI connects an agent to a Todoist account, covering task lookup, creation, and management. | 476 | `npx mcp-remote https://ai.todoist.net/mcp` |
| **[Monday](https://github.com/mondaycom/mcp)** | Monday.com MCP connects an agent to a monday.com workspace: read and update boards, create and track items, manage workflows, and query project data across the work OS. | 399 | `npx mcp-remote https://mcp.monday.com/mcp` |
| **[Mapbox](https://github.com/mapbox/mcp-server)** | Mapbox MCP Server gives an agent access to Mapbox location services: forward and reverse geocoding, point-of-interest search, turn-by-turn directions, isochrones, and map tile data. | 338 | `npx mcp-remote https://mcp.mapbox.com/mcp` |
| **[Imagesorcery](https://github.com/sunriseapps/imagesorcery-mcp)** | ImageSorcery processes local images without sending them to external servers: crop, resize, rotate, blur, draw shapes and text, remove backgrounds, detect objects, and extract text via OCR. | 308 | `imagesorcery-mcp` |
| **[Azure AI Foundry](https://github.com/azure-ai-foundry/mcp-foundry)** | Azure AI Foundry MCP Server connects an agent to Azure AI Foundry: browse the model catalog, manage deployments, query and index AI Search knowledge bases, run evaluations, and interact with Azure AI agents. | 244 | `uvx run-azure-ai-foundry-mcp` |
| **[Svelte MCP](https://github.com/sveltejs/ai-tools)** | Svelte MCP is the official server for Svelte development, giving agents access to Svelte documentation and autofix tooling to catch and correct Svelte-specific code issues. | 242 | `npx mcp-remote https://mcp.svelte.dev/mcp` |
| **[Postman](https://github.com/postmanlabs/postman-mcp-server)** | Postman MCP Server connects an agent to Postman workspaces, letting it read and manage API collections, environments, and test results, and trigger workflow automation through the Postman API. | 233 | `npx mcp-remote https://mcp.postman.com/mcp` |
| **[Hugging Face](https://github.com/huggingface/hf-mcp-server)** | Hugging Face MCP Server connects an agent to the Hub: search models, datasets, Spaces, papers, and collections, and interact with thousands of Gradio AI applications. | 229 | `npx mcp-remote https://huggingface.co/mcp?login` |
| **[Awesome Copilot MCP Server](https://github.com/microsoft/mcp-dotnet-samples)** | Awesome Copilot MCP Server retrieves GitHub Copilot customization files from the awesome-copilot repository, making community-contributed instructions and prompt templates available to an agent at query time. | 180 | `docker run ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:1.0.2026050605` |
| **[Logfire](https://github.com/pydantic/logfire-mcp)** | Logfire MCP gives an agent access to OpenTelemetry traces and metrics stored in Logfire, useful for querying observability data during debugging and monitoring workflows. | 161 | `uvx logfire-mcp` |
| **[Glean Remote MCP Server](https://github.com/gleanwork/remote-mcp-server)** | Glean Remote MCP Server connects an agent to a company's Glean knowledge base, letting it search across internal documents, wikis, and enterprise content indexed by Glean. | 160 | `npx mcp-remote https://{baseUrl}/mcp/{server-name}` |
| **[pgEdge Postgres](https://github.com/pgEdge/pgedge-postgres-mcp)** | pgEdge Postgres MCP connects an agent to PostgreSQL via natural language, with hybrid search combining pgvector similarity and BM25 full-text matching, plus a built-in documentation knowledgebase for pgEdge-specific patterns. | 156 | `docker run ghcr.io/pgedge/postgres-mcp:latest` |
| **[SAP Fiori](https://github.com/SAP/open-ux-tools)** | SAP Fiori MCP Server helps an agent create and modify SAP Fiori elements applications: generate list reports and object pages from OData services or CAP projects, add pages and controller extensions, and search Fiori and UI5 documentation. | 142 | `npx -y @sap-ux/fiori-mcp-server` |
| **[Serpapi](https://github.com/serpapi/serpapi-mcp)** | SerpApi MCP runs real-time searches across Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay, and other engines, returning structured results including web pages, news, images, shopping, and market data. | 134 | `npx mcp-remote https://mcp.serpapi.com/mcp` |
| **[Azure Kubernetes Service](https://github.com/Azure/aks-mcp)** | AKS MCP Server bridges AI assistants and Azure Kubernetes Service, letting an agent inspect clusters, manage workloads, diagnose issues, and perform AKS operations through natural language. | 132 | `docker run ghcr.io/azure/aks-mcp` |
| **[Webflow](https://github.com/webflow/mcp-server)** | Webflow MCP connects an agent to Webflow sites via the Data API: read and write CMS content, manage pages and collections, and make design changes through the Designer when paired with the companion bridge app. | 130 | `npx mcp-remote https://mcp.webflow.com/mcp` |
| **[Fabric Real-Time Intelligence](https://github.com/microsoft/fabric-rti-mcp)** | Fabric Real-Time Intelligence MCP Server connects an agent to Microsoft Fabric RTI: run KQL queries against Eventhouse and Azure Data Explorer, manage Eventstreams, set up Activator alerts, and create geospatial Map visualizations. | 114 | `uvx microsoft-fabric-rti-mcp` |
| **[Dynatrace](https://github.com/dynatrace-oss/Dynatrace-mcp)** | Dynatrace MCP connects an agent to a Dynatrace SaaS environment: query logs, metrics, traces, and problems using DQL or natural language, investigate incidents, analyze vulnerabilities, and interact with Davis AI. | 113 | `npx -y @dynatrace-oss/dynatrace-mcp-server` |
| **[Miro](https://github.com/miroapp/miro-ai)** | Miro MCP Server connects an agent to Miro boards, letting it read board content for context, create diagrams and tables, and generate code or documentation from design artifacts. | 98 | `npx mcp-remote https://mcp.miro.com/` |
| **[Cap JS](https://github.com/cap-js/mcp-server)** | The CAP MCP Server gives an agent access to the SAP Cloud Application Programming Model: search CDS model definitions across a project and query the embedded CAP documentation using semantic search. | 95 | `npx -y @cap-js/mcp-server` |
| **[Octopus Deploy](https://github.com/OctopusDeploy/mcp-server)** | Octopus Deploy MCP Server connects an agent to an Octopus instance for inspecting projects, releases, deployments, tenants, tasks, and Kubernetes targets. | 95 | `npx -y @octopusdeploy/mcp-server` |
| **[UI5](https://github.com/UI5/mcp-server)** | UI5 MCP Server supports SAPUI5 and OpenUI5 development by giving agents access to API documentation, coding guidelines, linting, manifest validation, and project scaffolding for UI5 apps and Integration Cards. | 82 | `npx -y @ui5/mcp-server` |
| **[Clarity](https://github.com/microsoft/clarity-mcp-server)** | Clarity MCP Server gives an agent access to Microsoft Clarity analytics: traffic metrics, user behavior data, session recordings, and heatmap insights for a web property. | 82 | `npx -y @microsoft/clarity-mcp-server` |
| **[Arm MCP Server](https://github.com/arm/mcp)** | Arm MCP Server helps an agent work with Arm architecture: search Arm documentation, scan codebases for x86-to-Arm compatibility issues, inspect container image architecture, and analyze assembly performance. | 72 | `docker run docker.io/armlimited/arm-mcp:2.0.0` |
| **[DeepWiki](https://github.com/CognitionAI/deepwiki)** | DeepWiki gives an agent access to AI-generated documentation for public GitHub repositories, covering wiki structure, page contents, and natural language questions answered from the indexed codebase. | 71 | `npx mcp-remote https://mcp.deepwiki.com/sse` |
| **[Sonatype Dependency Management](https://github.com/sonatype/dependency-management-mcp-server)** | Sonatype Dependency Management MCP connects an agent to Sonatype's open-source intelligence platform: check component versions, scan for known vulnerabilities, verify license compliance, and get remediation guidance before adding or updating dependencies. | 71 | `npx mcp-remote https://mcp.guide.sonatype.com/mcp` |
| **[PagerDuty](https://github.com/PagerDuty/pagerduty-mcp-server)** | PagerDuty MCP Server connects an agent to PagerDuty, letting it manage incidents, query on-call schedules, inspect services, and interact with event orchestrations. | 67 | `uvx pagerduty-mcp` |
| **[ScrapeGraphAI Scrapegraph](https://github.com/ScrapeGraphAI/scrapegraph-mcp)** | ScrapeGraph AI connects an agent to the ScrapeGraph API for web scraping, content extraction, search, and multi-page crawling, with support for scheduled monitoring jobs and structured JSON output. | 66 | `uvx scrapegraph-mcp` |
| **[Codacy](https://github.com/codacy/codacy-mcp-server)** | Codacy MCP Server connects an agent to Codacy's code analysis platform: surface quality issues, coverage gaps, duplication, and security findings across repositories, files, and pull requests. | 58 | `npx -y @codacy/codacy-mcp` |
| **[Mapbox MCP Devkit Server](https://github.com/mapbox/mcp-devkit-server)** | Mapbox MCP Devkit Server connects an agent to Mapbox developer APIs: create and manage map styles, handle access tokens, convert coordinates, and reference layer specifications and Streets v8 field definitions. | 50 | `npx mcp-remote https://mcp-devkit.mapbox.com/mcp` |
| **[Amplitude](https://github.com/amplitude/mcp-server-guide)** | Amplitude MCP Server connects an agent to Amplitude product analytics, letting it query event data, explore user behavior, and pull experiment and funnel results through conversation. | 45 | `npx mcp-remote https://mcp.amplitude.com/mcp` |
| **[Zapier](https://github.com/zapier/zapier-mcp)** | Zapier MCP connects an agent to over 9,000 apps and 40,000 actions. | 40 | `npx mcp-remote {zapier_mcp_url}` |
| **[Microsoft MCP Server for Enterprise](https://github.com/microsoft/EnterpriseMCP)** | Microsoft MCP Server for Enterprise translates natural language queries into Microsoft Graph API calls, giving an agent read access to Microsoft Entra data: users, groups, apps, devices, roles, Conditional Access, and sign-in telemetry. | 38 | `npx mcp-remote https://mcp.svc.cloud.microsoft/enterprise` |
| **[Snyk](https://github.com/snyk/studio-mcp)** | Snyk MCP integrates Snyk's security scanning into an agent workflow: scan open-source dependencies, application code, infrastructure-as-code, containers, and secrets for vulnerabilities and get findings back in context. | 37 | `npx -y snyk` |
| **[ContextStream MCP Server](https://github.com/contextstream/mcp-server)** | ContextStream MCP Server adds persistent memory and codebase-aware context to AI coding assistants, indexing project files so agents can search, recall, and reason about code across sessions. | 35 | `npx -y @contextstream/mcp-server` |
| **[PubNub MCP Server](https://github.com/pubnub/pubnub-mcp-server)** | PubNub MCP Server gives an agent access to SDK documentation for 20+ languages, plus live platform operations: send and receive messages, track presence, manage user and channel metadata, and configure keysets. | 31 | `npx -y @pubnub/mcp` |
| **[Zscaler Zero Trust Exchange](https://github.com/zscaler/zscaler-mcp-server)** | Zscaler MCP Server connects an agent to the Zscaler Zero Trust Exchange platform, covering ZPA, ZIA, ZDX, ZCC, and EASM. | 30 | `uvx zscaler-mcp` |
| **[prompts.chat MCP Server](https://github.com/f/prompts.chat-mcp)** | prompts.chat MCP Server gives an agent access to the prompts.chat library: search prompts by keyword, category, or tag, retrieve prompt details with variable substitution, and save new prompts to an account. | 28 | `npx -y @fkadev/prompts.chat-mcp` |
| **[JustCall MCP Server](https://github.com/saaslabsco/justcall-mcp-server)** | JustCall MCP Server lets AI agents initiate voice calls and send SMS messages through JustCall, and access call transcripts and contact records from the JustCall platform. | 26 | `npx mcp-remote https://mcp.justcall.host/mcp` |
| **[The MCP server for GoReleaser](https://github.com/goreleaser/mcp)** | GoReleaser MCP validates GoReleaser configuration files for errors and deprecated options, and surfaces embedded documentation to help an agent write and modernize GoReleaser configs. | 22 | `npx -y @goreleaser/mcp` |
| **[Launchdarkly](https://github.com/launchdarkly/mcp-server)** | LaunchDarkly MCP Server connects an agent to LaunchDarkly for managing feature flags, AI configs, targeting rules, experiments, and gradual rollouts across environments. | 21 | `npx -y @launchdarkly/mcp-server` |
| **[Dynatrace Managed](https://github.com/dynatrace-oss/dynatrace-managed-mcp)** | Dynatrace Managed MCP connects an agent to self-hosted Dynatrace Managed deployments, supporting multi-environment access to logs, events, metrics, entities, and problems via the V2 REST API. | 20 | `npx -y @dynatrace-oss/dynatrace-managed-mcp-server` |
| **[Rigour](https://github.com/rigour-labs/rigour)** | Rigour runs quality gates for AI-generated code: lint, test, and build checks with memory of past results, so an agent knows when its output actually passes project standards. | 20 | `npx -y @rigour-labs/mcp` |
| **[Venomseven Nslookup](https://github.com/NsLookup-io/nslookup-mcp)** | NSLookup.io MCP connects an agent to DNS lookup and domain intelligence tools: query any record type, check propagation across global resolvers, audit DNS health, inspect SSL certificates, scan for security misconfigurations, and check uptime. | 19 | `npx mcp-remote https://mcp.nslookup.io/mcp` |
| **[UI5 Webcomponents](https://github.com/UI5/webcomponents-mcp-server)** | UI5 Web Components MCP Server gives an agent access to UI5 Web Components documentation: component APIs, integration guides for React, Angular, and JavaScript, and the full documentation library. | 17 | `npx -y @ui5/webcomponents-mcp-server` |
| **[Stack Overflow MCP Server](https://github.com/StackExchange/Stack-MCP)** | Stack Overflow MCP gives an agent access to Stack Overflow's technical knowledge base: search questions and answers, retrieve full conversation threads, and ground responses in community-verified solutions. | 16 | `npx mcp-remote https://mcp.stackoverflow.com` |
| **[Port](https://github.com/port-labs/remote-mcp-server)** | Port MCP Server connects an AI agent to Port.io, a developer portal platform, letting it query and manage software catalog entities, scorecards, and self-service actions. | 15 | `npx mcp-remote https://mcp.port.io/v1` |
| **[Sourcegraph MCP Server](https://github.com/sourcegraph-community/mcpregistry)** | Sourcegraph MCP Server connects an agent to a Sourcegraph instance for code search, semantic search, go-to-definition, find-references, and diff search across all indexed repositories. | 14 | `npx mcp-remote https://{sourcegraph_hostname}/.api/mcp` |
| **[Wix](https://github.com/wix/wix-mcp)** | Wix MCP Server connects an agent to Wix development tools: search the Wix SDK, REST, Design System, and headless documentation, and make live API calls against Wix sites on behalf of an authenticated account. | 13 | `npx mcp-remote https://mcp.wix.com/sse` |
| **[Axiom](https://github.com/axiomhq/mcp)** | Axiom MCP connects an agent to an Axiom account: list datasets and schemas, run APL queries against log and event data, and explore telemetry for anomalies and monitoring. | 12 | `npx mcp-remote https://mcp.axiom.co/sse` |
| **[Dev Box](https://github.com/microsoft/devbox-mcp-server)** | Dev Box MCP Server lets an agent manage Microsoft Dev Box resources: create, start, stop, and configure cloud developer workstations and their associated pools and projects. | 12 | `npx -y @microsoft/devbox-mcp` |
| **[JFrog Remote MCP Server](https://github.com/jfrog/jfrog-mcp-server)** | JFrog MCP Server connects an agent to the JFrog platform: search artifacts with AQL, look up package versions and vulnerabilities via the Catalog, check curation status, and generate security reports on CVEs. | 8 | `npx mcp-remote https://myPlatform.jfrog.github.io/mcp` |
| **[Vercel](https://github.com/vercel/vercel-mcp-overview)** | Vercel MCP Server gives an agent access to Vercel projects: inspect deployments, manage domains, view build and runtime logs, and interact with project configuration. | 7 | `npx mcp-remote https://mcp.vercel.com` |
| **[Stackhawk](https://github.com/stackhawk/stackhawk-mcp)** | StackHawk MCP integrates StackHawk's dynamic application security testing into an agent workflow: configure scans, run them against a target application, triage findings, and validate StackHawk YAML configurations. | 6 | `uvx stackhawk-mcp` |
| **[Intercom](https://github.com/intercom/intercom-mcp-server)** | Intercom MCP Server gives an agent access to Intercom customer data: conversations, contacts, tickets, and help center content, so it can assist with support workflows and customer research. | 5 | `npx mcp-remote https://mcp.intercom.com/mcp` |
| **[Anima MCP Server](https://github.com/AnimaApp/mcp-server-guide)** | Anima MCP Server bridges design and code: an agent can pull projects from Anima Playground, convert Figma design URLs directly to production-ready code, and reference a team's design system when building features. | 5 | `npx mcp-remote https://public-api.animaapp.com/v1/mcp` |
| **[Holomodular Servicebricks](https://github.com/holomodular/ServiceBricks)** | ServiceBricks MCP Server generates C# .NET microservices from natural language descriptions, producing a downloadable ZIP with REST APIs, storage configuration, and the full ServiceBricks foundation scaffolded. | 4 | `npx mcp-remote https://servicebricks.com/api/mcp` |
| **[LiveCheck AI](https://github.com/qualityclouds/qualityclouds)** | LiveCheck AI validates code against enterprise governance rules for Salesforce, ServiceNow, Microsoft Dynamics 365, and JavaScript, catching security and performance issues before generated code is delivered. | 3 | `npx mcp-remote https://mcp.qualityclouds.com/mcp` |
| **[Microsoft Sentinel Data Exploration](https://github.com/microsoft/sentinel-data-exploration-mcp)** | Microsoft Sentinel Data Exploration MCP lets an agent query the Sentinel data lake to find relevant security logs and telemetry, useful for building detection and investigation agents. | 2 | `npx mcp-remote https://sentinel.microsoft.com/mcp/data-exploration` |
| **[Wopee](https://github.com/Wopee-io/wopee-mcp)** | Wopee connects an agent to the Wopee.io autonomous testing platform: dispatch crawl-and-test runs, generate user stories and test cases from crawled app state, and retrieve test artifacts and run status. | 2 | `npx -y wopee-mcp` |
| **[Box](https://github.com/box/mcp-server-box-remote)** | Box MCP Server connects an agent to enterprise content stored in Box: read and search files and folders, query Box AI for answers across documents, and extract metadata, all within Box's authorization model. | 1 | `npx mcp-remote https://mcp.box.com` |
| **[Guru Remote MCP Server](https://github.com/guruhq/remote-mcp-server)** | Guru MCP Server connects an agent to a Guru knowledge base: search and retrieve verified answers from cards, create drafts, update existing content, and access AI-powered answer generation, all respecting existing permissions. | 1 | `npx mcp-remote https://mcp.api.getguru.com/mcp` |
| **[Shipbook](https://github.com/ShipBook/shipbook-mcp)** | Shipbook MCP connects an agent to Shipbook's mobile app logging platform, letting it search production logs and read Loglytics error classifications to diagnose runtime issues. | 1 | `npx mcp-remote https://api.shipbook.io/mcp` |
| **[ShipStatic](https://github.com/shipstatic/mcp)** | ShipStatic deploys static sites instantly from an agent with no account required. | 0 | `npx -y @shipstatic/mcp` |

</details>

---

## Data

The directory is structured data, not just markdown. Pull it directly:

```bash
curl -s https://raw.githubusercontent.com/stax-sh/mcp-stacks/main/data/servers.json | jq '.servers[0]'
```

- [`data/servers.json`](./data/servers.json) — every server with id, install command, GitHub URL, stars, author
- [`data/stacks.json`](./data/stacks.json) — every stack with rationale for each included server

Build something on top? Drop a link in [Discussions](https://github.com/stax-sh/mcp-stacks/discussions).

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). The fastest path is the [submission form on stax.sh](https://stax.sh/submit?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks) — it goes to the same review queue as PRs here.

We curate. Submissions don't auto-merge. We check that the server:

- Has a public source repo
- Implements MCP (not just "uses an LLM")
- Is alive — last commit within ~6 months unless it's stable infra
- Doesn't ship obvious security smells (token logging, no scoping, exfil-by-default)

---

## Security

MCP servers run with whatever permissions you give them. A misbehaving server with your GitHub token can do a lot of damage. Read [SECURITY.md](./SECURITY.md) before wiring anything up to a real account.

Found a security issue with a listed server? Open an issue. We'll flag, contact the author, and consider removal if it isn't fixed.

---

## License

The directory content (this repo) is [MIT](./LICENSE). Each listed server is licensed by its respective owner — check the linked repos.

---

<sub>Maintained by [stax.sh](https://stax.sh?utm_source=github&utm_medium=readme&utm_campaign=mcp-stacks-footer). Last generated: 2026-05-07</sub>
