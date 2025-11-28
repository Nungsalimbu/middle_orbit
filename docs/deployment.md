# Deployment Blueprint

## Environments

- **Frontend**: Vercel (Next.js SSR) with preview/production deployments.
- **Backend**: AWS ECS Fargate service per environment (dev/stage/prod).
- **Database**: Amazon RDS for PostgreSQL 15 with Multi-AZ + pgAudit.
- **Search**: Amazon OpenSearch (Elasticsearch-compatible) with UltraWarm for analytics.
- **Storage**: S3 buckets for video resumes + contracts (SSE-KMS).

## Checklist

1. **Branching**
   - `main` → production, `develop` → staging, feature branches → PRs with preview.
2. **CI/CD**
   - GitHub Actions matrix runs `npm install`, `npm run lint`, `npm run test`, `npm run build`.
   - Turbo caching for monorepo.
   - Backend pipeline builds Docker image, pushes to ECR, triggers ECS deploy via OIDC role.
   - Frontend pipeline hits Vercel deploy hook with environment alias.
3. **Secrets**
   - Store in AWS Secrets Manager (backend) + Vercel encrypted env vars (frontend).
4. **Scaling**
   - ECS Service AutoScaling on CPU+memory metrics.
   - RDS storage autoscaling + read replica.
   - CloudFront CDN in front of S3 assets and Vercel static files.
5. **Security**
   - AWS WAF + Shield, rate limiting via ThrottlerModule.
   - IAM roles with least privilege for ECS tasks (S3, SQS, OpenSearch).
   - KMS-managed keys for S3 + Postgres column encryption (pgcrypto).
6. **Monitoring**
   - CloudWatch metrics/alarms, Datadog APM traces, Vercel analytics.
   - Structured logging -> OpenSearch.
7. **Analytics**
   - GA4, Mixpanel, Hotjar, Search Console tracking codes loaded via Next.js layout.
8. **Pen Test Prep**
   - OWASP ZAP scans, dependency review, S3 bucket policy audit.

