# Security & Compliance

- **RBAC**: Roles (Admin, Recruiter, Employer, Candidate). Enforced via Nest guards + JWT claims.
- **Auth**: OAuth providers (Google/Microsoft), JWT access tokens, refresh tokens, optional WebAuthn step-up, mandatory 2FA for admins.
- **Encryption**: PII columns encrypted via pgcrypto, S3 objects with SSE-KMS, HTTPS enforced end-to-end.
- **Audit Logs**: Every create/update/delete stored with actor, action, metadata, IP. Exportable for SOC 2/GDPR.
- **GDPR**: Consent tracking, right-to-forget automation (soft delete + erasure queue), data residency options.
- **Pen Test Checklist**: OWASP Top 10, dependency review, S3 bucket policy validation, SSRF protections, rate limiting (Throttler), CSP headers (helmet).
- **Monitoring**: CloudWatch logs + Datadog APM, alerting on auth anomalies and data exfil signs.

