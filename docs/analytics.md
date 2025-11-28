# Analytics & KPIs

- **Platforms**
  - GA4: traffic + engagement.
  - Mixpanel: hiring funnel (signup → job post → shortlist → interview → contract → placement).
  - Search Console: keyword performance for “MiddleOrbit manpower”.
  - Hotjar: heatmaps on hero, marketplace, dashboards.
- **Core Metrics**
  - Time to fill, cost per hire, retention @ 12 months.
  - Candidate NPS, video resume completion rate, micro-training badge issuance.
  - Referral invitations sent vs payouts.
  - Contract automation duration, transparency timeline SLA adherence.
- **Implementation**
  - Next.js layout loads analytics scripts with consent mode.
  - Backend emits domain events (`job.created`, `application.status_changed`, `placement.created`) to analytics queue.
  - Mixpanel distinct IDs shared across web + backend via JWT claims.

