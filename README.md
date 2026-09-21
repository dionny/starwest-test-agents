# STARWEST 2026: Playwright Test Agents, zero install

Take-home companion to the tutorial **Getting Started with AI-Driven Automation** (STARWEST 2026, Dionny Santiago).
It is the same project the hosted lab at https://browser.dionny.dev runs for you, so you can keep going on your own.

The application under test is the Checkout Lab at https://aut.dionny.dev. It has seven seeded bugs.

## Option 1: GitHub Codespaces (nothing to install)

1. Click **Code → Codespaces → Create codespace on main**. The container already has Node, Playwright 1.63 and Chromium.
2. Pick your agent loop:
   - **Claude Code**: run `claude` in the terminal (sign in once), then use the three agents below.
   - **VS Code + Copilot**: open Copilot Chat in agent mode and pick `playwright-test-planner`, `playwright-test-generator` or `playwright-test-healer`.
3. Run tests with `npm test`, open the report with `npm run report`.

## Option 2: your laptop

```bash
npm init playwright@latest
npx playwright init-agents --loop=claude    # or --loop=vscode
```

Then copy `playwright.config.ts` and `tests/seed.spec.ts` from this repo.

## The three agents

These are the unmodified agent definitions written by `npx playwright init-agents` (Playwright 1.63.0), for both loops:
`.claude/agents/*.md` (Claude Code) and `.github/agents/*.agent.md` (VS Code). Skills used in the tutorial are under `.claude/skills/`.

Prompts that worked in the tutorial:

- **Planner**: `Use the playwright-test-planner agent. Explore the checkout flow and write a test plan for coupons and shipping. Save it as specs/checkout.plan.md. Compute expected totals from the listed prices and the stated rules, not from what the page shows.`
- **Generator**: `Use the playwright-test-generator agent to generate the test "SAVE10 gives 10% off the subtotal" from specs/checkout.plan.md.`
- **Healer**: `Use the playwright-test-healer agent to fix tests/coupons/unknown-coupon.spec.ts. Fix locators and waits only. Never change an expect() value. If the app is wrong, say so instead.`
- **Review**: `Use the e2e-reviewer skill to review tests/coupons/save10-discount.spec.ts.`

## Rules of the game

- A failing assertion on a total is the application's bug, not the test's. Do not let an agent "fix" the expected value.
- Before healing, read the failure and classify it: locator drift, timing, or a real bug.
- Every generated test deserves a review.

## License

Agent definitions and skills: see their headers (Apache-2.0). Everything else in this repo: MIT.
