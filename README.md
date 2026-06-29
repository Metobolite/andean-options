# AndeanOptions Regional Farms Dashboard

A focused React + TypeScript dashboard for a regional director overseeing 8 farms across two provinces. The interface is designed around the three questions they need to answer every morning in under 30 seconds:

1. Is anything on fire?
2. What needs my attention today?
3. How are we trending overall?

## Design Deliverable

Figma mockup: https://www.figma.com/design/wWASysjebb2wdxNuaNh3ON/Andean-Options-Dashboard?node-id=77-432&t=jQohjiKD6HbxvDYa-1

The implemented dashboard follows the same hierarchy as the design: critical issues first, today's attention second, trends third, and the full farm status grid after the urgent summary.

## Running Locally

```bash
npm install
npm run dev
```

Then open the app and go to `/dashboard`.

Useful scripts:

```bash
npm run build
npm run lint
npm run preview
```

## What Was Built

The app uses mock data only, with no backend dependency. The main dashboard includes:

- Critical Issues: immediate risks such as irrigation failure and disease risk.
- Today's Attention: lower urgency but time-sensitive tasks such as feed inventory, maintenance, and below-target production.
- Trending: farm health, production, revenue, and water usage compared with recent performance and targets.
- Farm Status Overview: 8 farm cards grouped across two provinces with health, production, water status, and last update information.
- Farm Detail Panel: clicking a farm opens a side panel with deeper metrics and active alerts for that specific farm.

The core data model lives in `src/data/dashboard.ts`, while reusable TypeScript types live in `src/types/dashboard.ts`.

## Cognitive Load And Interaction Design Principles

I used a triage-first hierarchy. The dashboard starts with the most urgent operational risks, then moves into same-day work, then into broader trend context. This matches the director's morning decision flow instead of forcing them to scan every farm equally.

I used progressive disclosure to keep the main view clean. Farm cards show only the information needed for fast comparison, while clicking a card opens the detail panel for the selected farm. This keeps deeper information available without crowding the overview.

I used pre-attentive visual cues such as color, badges, status dots, icons, and count pills. Critical items use red, attention items use amber, and healthy states use green so the user can recognize severity before reading every line.

I used chunking to separate the page into predictable regions: urgent issues, today's work, trends, and farm-by-farm status. This reduces the number of decisions the user has to make while scanning.

I also leaned on recognition over recall. Labels, icons, repeated card structures, and consistent metric placement help the user compare farms without remembering where each piece of information lives.

## The Three Things The User Should See First

1. Critical Issues. This answers "Is anything on fire?" immediately and gives the farm, problem, impact, and time of detection.
2. Today's Attention. This answers "What needs my attention today?" and separates urgent action from lower-priority operational follow-up.
3. Trending. This answers "How are we trending overall?" with health, production, revenue, and water usage against targets.

These three areas are intentionally placed above the farm grid because they summarize the whole region before asking the user to inspect individual farms.

## What I Left Out And Why

I left out a backend, authentication, role management, real notifications, editable workflows, and long historical reporting because the task is about evaluating the first-glance dashboard experience.

I also avoided complex charts and maps. They can be useful later, but for this scenario they would add visual weight before proving that the director can answer the three core questions quickly.

I did not build full alert resolution flows. The current version shows where the user should focus; a production version would add ownership, assignment, comments, escalation, and audit history after validating the workflow with real users.

## Questions I Would Ask Actual Users

- Which farm events truly count as critical, and what thresholds define them?
- Which metrics are trusted enough for a morning decision, and which need explanation or source context?
- How fresh does the data need to be for the dashboard to be useful?
- Do users compare farms mostly by province, crop type, production target, risk level, or manager ownership?
- What is the most important piece of data for the added farm?
- What actions should happen directly from an alert: call, assign, acknowledge, resolve, or escalate?

## Most Challenging Coding Part

The hardest part was keeping the overview dense enough to cover all 8 farms while still making the urgent information feel obvious. I solved this by separating the data into typed models for priorities, trends, and farms, then building small reusable components around each model: `PriorityPanel`, `TrendCard`, `FarmCard`, and `FarmDetailPanel`.

The side panel also helped keep the architecture simple. The dashboard only stores `selectedFarm` state, then derives the active alerts for that farm from the same mock priority data. That avoids duplicated state while still giving the user an interactive drill-down.

## Balancing Value And Complexity

I focused on the minimum product that gives the director real morning value: see urgent issues, see today's tasks, understand trends, and inspect a farm when needed. The implementation stays lightweight with local mock data, typed interfaces, and component-level state instead of adding global state management, charting libraries, or backend abstractions too early.

This keeps the app easy to reason about while leaving clear paths for future growth, such as real data APIs, alert ownership, historical charts, role-based permissions, and notification workflows.
