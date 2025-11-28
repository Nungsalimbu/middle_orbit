# Key User Flows

## Employer Flow
1. Signup via OAuth → 2FA verification.
2. Complete company profile + compliance docs upload.
3. Post job (requirements JSONB, location, compensation).
4. AI shortlist triggers `applications.create` events and surfaces explainability chips.
5. Interview scheduling + simulator feedback ingestion.
6. Hire decision triggers placement timeline + contract automation (S3, DocuSign integration placeholder).
7. Timeline shared with candidate + employer stakeholders; ROI dashboard updates.

## Candidate Flow
1. Signup (OTP + passwordless option) → profile builder.
2. Record video resume via story builder prompts; auto upload to S3.
3. Micro-training modules unlock badges stored in JSONB.
4. AI matches appear with explainable fit score; candidate applies with one tap.
5. Interview simulator offers scripts + readiness score.
6. Placement timeline mirrors employer view; candidate tracks contract + onboarding tasks.

## Admin Flow
1. Recruiter logs in via RBAC role.
2. Manages talent pools, pipeline health, referral payouts.
3. Reviews audit log events, compliance alerts, AI fairness dashboards.
4. Oversees search sync + S3 data governance.

