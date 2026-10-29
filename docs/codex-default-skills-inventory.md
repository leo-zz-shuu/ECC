# ECC Skills Available in Codex CLI

This inventory is the selected ECC Codex plugin set. `[ ]` means enabled and `[x]` means disabled. The plugin manifest is configured to expose only the unchecked entries.

## What “Default Enabled” Means

The plugin manifest at `.codex-plugin/plugin.json` registers `./skills/` as its skill source. Codex can therefore discover all skill directories under `skills/`; this does not mean every `SKILL.md` body is loaded into context at startup. The manifest's `defaultPrompt` specifically recommends only `tdd-workflow`, `security-review`, and `verification-loop`.

The repository currently contains **311 `skills/*/SKILL.md` files**. The manifest description still says 281 skills, so that count is stale. Categories below are editorial, based on each skill's primary purpose; some skills naturally span categories. Every current skill ID is listed once.

## Agent Systems and Workflow Orchestration

- [ ] `agent-architecture-audit`
- [ ] `agent-eval`
- [ ] `agent-harness-construction`
- [ ] `agent-introspection-debugging`
- [x] `agent-payment-x402`
- [ ] `agent-runtime-gateway-smoke-test`
- [ ] `agent-security-hardening`
- [ ] `agent-self-evaluation`
- [ ] `agent-sort`
- [ ] `agentic-engineering`
- [ ] `agentic-os`
- [ ] `autonomous-agent-harness`
- [ ] `autonomous-loops`
- [x] `claude-devfleet`
- [ ] `continuous-agent-loop`
- [x] `continuous-learning`
- [ ] `continuous-learning-v2`
- [x] `council`
- [x] `council-multi-model`
- [x] `deepseek-harness-setup`
- [ ] `dev-team`
- [ ] `dmux-workflows`
- [ ] `dynamic-workflow-mode`
- [x] `enterprise-agent-ops`
- [x] `gan-style-harness`
- [ ] `loop-design-check`
- [x] `nanoclaw-repl`
- [x] `openclaw-persona-forge`
- [ ] `operator-approval-loop`
- [ ] `orch-add-feature`
- [ ] `orch-build-mvp`
- [ ] `orch-change-feature`
- [ ] `orch-fix-defect`
- [ ] `orch-pipeline`
- [ ] `orch-refine-code`
- [ ] `parallel-execution-optimizer`
- [ ] `plan-canvas`
- [ ] `plan-orchestrate`
- [ ] `ralphinho-rfc-pipeline`
- [ ] `recursive-decision-ledger`
- [x] `santa-method`
- [ ] `team-agent-orchestration`
- [ ] `team-builder`
- [x] `token-budget-advisor`
- [x] `context-budget`
- [x] `strategic-compact`
- [x] `unified-memory`

## General Engineering, Architecture, and Documentation

- [ ] `ai-first-engineering`
- [x] `api-design`
- [ ] `architecture-decision-records`
- [x] `backend-patterns`
- [ ] `blueprint`
- [x] `brownfield-retrospective`
- [ ] `change-impact`
- [ ] `code-tour`
- [ ] `codebase-onboarding`
- [ ] `coding-standards`
- [x] `contract-first`
- [x] `context-and-decisions`
- [ ] `docs-governance`
- [ ] `documentation-lookup`
- [ ] `ecc-guide`
- [x] `ecc-recipes`
- [x] `error-handling`
- [x] `hookify-rules`
- [x] `hexagonal-architecture`
- [x] `inherit-legacy-style`
- [x] `intent-driven-development`
- [x] `knowledge-ops`
- [x] `living-docs-governance`
- [x] `repo-scan`
- [x] `rules-distill`
- [x] `skill-comply`
- [x] `skill-host-compat`
- [x] `skill-scout`
- [x] `skill-stocktake`
- [x] `workspace-surface-audit`

## Testing, Evaluation, and Delivery Quality

- [ ] `ai-regression-testing`
- [ ] `benchmark`
- [ ] `benchmark-methodology`
- [ ] `benchmark-optimization-loop`
- [x] `browser-qa`
- [x] `canary-watch`
- [ ] `conventional-commit-review`
- [ ] `cpp-testing`
- [x] `csharp-testing`
- [x] `delivery-gate`
- [x] `django-tdd`
- [x] `django-verification`
- [ ] `e2e-testing`
- [x] `eval-harness`
- [x] `fsharp-testing`
- [x] `gateguard`
- [x] `golang-testing`
- [x] `healthcare-eval-harness`
- [x] `kotlin-testing`
- [x] `laravel-tdd`
- [x] `laravel-verification`
- [x] `module-regression`
- [x] `perl-testing`
- [ ] `python-testing`
- [x] `production-audit`
- [x] `quality-nonconformance`
- [x] `quarkus-tdd`
- [x] `quarkus-verification`
- [x] `react-testing`
- [x] `rust-testing`
- [x] `springboot-tdd`
- [x] `springboot-verification`
- [ ] `tdd-workflow`
- [ ] `test-collaboration`
- [ ] `verification-loop`
- [x] `windows-desktop-e2e`

## Security, Privacy, and Compliance

- [x] `defi-amm-security`
- [x] `django-security`
- [x] `healthcare-phi-compliance`
- [x] `hipaa-compliance`
- [x] `laravel-security`
- [x] `llm-trading-agent-security`
- [x] `perl-security`
- [x] `quarkus-security`
- [x] `safety-guard`
- [x] `security-bounty-hunter`
- [x] `security-review`
- [x] `security-scan`
- [x] `springboot-security`

## Languages, Frameworks, and Runtime Patterns

- [x] `android-clean-architecture`
- [x] `bun-runtime`
- [ ] `cpp-coding-standards`
- [x] `dart-flutter-patterns`
- [x] `django-celery`
- [x] `django-patterns`
- [x] `dotnet-patterns`
- [x] `fastapi-patterns`
- [x] `flox-environments`
- [x] `golang-patterns`
- [x] `java-coding-standards`
- [x] `jpa-patterns`
- [x] `kotlin-coroutines-flows`
- [x] `kotlin-exposed-patterns`
- [x] `kotlin-ktor-patterns`
- [x] `kotlin-patterns`
- [x] `laravel-patterns`
- [x] `mybatis-patterns`
- [x] `nestjs-patterns`
- [x] `perl-patterns`
- [ ] `python-patterns`
- [x] `quarkus-patterns`
- [x] `rails-patterns`
- [x] `rust-patterns`
- [x] `springboot-patterns`
- [x] `swift-actor-persistence`
- [x] `swift-concurrency-6-2`
- [x] `swift-protocol-di-testing`
- [x] `tinystruct-patterns`

## Frontend, Product Design, and Accessibility

- [x] `accessibility`
- [x] `angular-developer`
- [x] `compose-multiplatform-patterns`
- [x] `design-system`
- [x] `flutter-dart-code-review`
- [x] `frontend-a11y`
- [x] `frontend-design-direction`
- [x] `frontend-patterns`
- [x] `frontend-slides`
- [x] `i18n-sync`
- [x] `ios-icon-gen`
- [x] `liquid-glass-design`
- [x] `make-interfaces-feel-better`
- [x] `motion-advanced`
- [x] `motion-foundations`
- [x] `motion-patterns`
- [x] `nextjs-turbopack`
- [x] `nuxt4-patterns`
- [x] `react-native-patterns`
- [x] `react-patterns`
- [x] `react-performance`
- [x] `swiftui-patterns`
- [x] `taste`
- [x] `taste-application`
- [x] `taste-distillation`
- [x] `ui-demo`
- [x] `ui-to-vue`
- [x] `vite-patterns`
- [x] `vue-patterns`

## Infrastructure, Databases, Networking, and Developer Tools

- [x] `api-connector-builder`
- [x] `cisco-ios-patterns`
- [x] `clickhouse-io`
- [ ] `config-gc`
- [ ] `configure-ecc`
- [x] `connections-optimizer`
- [ ] `codehealth-mcp`
- [x] `content-hash-cache-pattern`
- [ ] `click-path-audit`
- [x] `database-migrations`
- [x] `deployment-patterns`
- [ ] `docker-patterns`
- [x] `ecc-tools-cost-audit`
- [x] `git-workflow`
- [ ] `github-ops`
- [x] `homelab-network-readiness`
- [x] `homelab-network-setup`
- [x] `homelab-pihole-dns`
- [x] `homelab-vlan-segmentation`
- [x] `homelab-wireguard-vpn`
- [x] `kubernetes-patterns`
- [ ] `mcp-dependency-review`
- [ ] `mcp-server-patterns`
- [x] `mysql-patterns`
- [x] `nasiko-control-plane`
- [x] `netmiko-ssh-automation`
- [x] `network-bgp-diagnostics`
- [x] `network-config-validation`
- [x] `network-interface-health`
- [x] `latency-critical-systems`
- [x] `nodejs-keccak256`
- [x] `postgres-patterns`
- [x] `prisma-patterns`
- [x] `redis-patterns`
- [ ] `terminal-opener`
- [ ] `terminal-ops`
- [x] `uncloud`

## AI, Machine Learning, Data, and Science

- [x] `bengali-nlp`
- [x] `cost-aware-llm-pipeline`
- [x] `data-scraper-agent`
- [x] `data-throughput-accelerator`
- [x] `foundation-models-on-device`
- [x] `ito-baskets`
- [x] `ito-compute`
- [x] `ito-inference`
- [x] `ito-training`
- [x] `ml-adoption-playbook`
- [x] `mle-workflow`
- [ ] `prompt-caching-strategy`
- [ ] `prompt-optimizer`
- [x] `pytorch-patterns`
- [x] `recsys-pipeline-architect`
- [x] `regex-vs-llm-structured-text`
- [x] `scientific-db-pubmed-database`
- [x] `scientific-db-uspto-database`
- [x] `scientific-pkg-gget`
- [x] `scientific-thinking-literature-review`
- [x] `scientific-thinking-scholar-evaluation`
- [x] `search-first`

## Business, Industry, and Operations

- [x] `automation-audit-ops`
- [x] `carrier-relationship-management`
- [x] `counterparty-channel-discipline`
- [x] `customer-billing-ops`
- [x] `customs-trade-compliance`
- [ ] `dashboard-builder`
- [x] `energy-procurement`
- [x] `esign-field-placement`
- [x] `evm-token-decimals`
- [x] `finance-billing-ops`
- [x] `healthcare-cdss-patterns`
- [x] `healthcare-emr-patterns`
- [x] `inventory-demand-planning`
- [ ] `jira-integration`
- [ ] `logistics-exception-management`
- [x] `master-agreement-generator`
- [x] `prediction-market-oracle-research`
- [x] `prediction-market-risk-review`
- [x] `product-capability`
- [x] `product-lens`
- [x] `production-scheduling`
- [ ] `project-flow-ops`
- [x] `returns-reverse-logistics`
- [ ] `unified-notifications-ops`

## Research, Content, Marketing, and Media

- [ ] `article-writing`
- [x] `brand-discovery`
- [x] `brand-voice`
- [x] `competitive-platform-analysis`
- [x] `competitive-report-structure`
- [x] `content-engine`
- [x] `crosspost`
- [ ] `deep-research`
- [x] `email-ops`
- [x] `exa-search`
- [x] `fal-ai-media`
- [ ] `generating-python-installer`
- [x] `google-workspace-ops`
- [x] `growth-log`
- [x] `investor-materials`
- [x] `investor-outreach`
- [x] `iterative-retrieval`
- [x] `lead-intelligence`
- [x] `mailtrap-email-integration`
- [x] `manim-video`
- [x] `market-research`
- [x] `marketing-campaign`
- [x] `messages-ops`
- [x] `nutrient-document-processing`
- [ ] `opensource-pipeline`
- [x] `osint-investigation`
- [ ] `research-ops`
- [x] `seo`
- [x] `social-graph-ranker`
- [x] `social-publisher`
- [x] `story-lifecycle`
- [x] `video-editing`
- [x] `videodb`
- [x] `visa-doc-translate`
- [x] `x-api`

## Creative and Specialized Tools

- [x] `blender-motion-state-inspection`
- [x] `ck`
- [x] `cost-tracking`
- [x] `hermes-imports`
- [x] `plankton-code-quality`
- [x] `remotion-video-creation`
- [x] `tasteforge-video`
- [x] `token-card`

