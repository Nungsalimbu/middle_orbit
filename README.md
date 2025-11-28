# MiddleOrbit Platform

Monorepo housing the MiddleOrbit manpower platform. It includes a Next.js + Tailwind SSR frontend and a NestJS API backed by PostgreSQL, Elasticsearch, and AWS services.

## Structure

- `apps/web` – Public web app, dashboards, marketing pages.
- `apps/api` – NestJS service exposing REST/GraphQL for employers, candidates, admin.
- `infra` (coming soon) – IaC definitions for AWS + Vercel.

## Getting Started

```bash
npm install
npm run dev -- --filter=web
```

## Scripts

- `npm run dev` – Run all dev servers via Turbo.
- `npm run build` – Build every app.
- `npm run lint` – Lint all packages.

## Requirements

- Node 20+
- PostgreSQL 14+
- Redis 7+

