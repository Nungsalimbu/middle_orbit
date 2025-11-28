# MiddleOrbit Data Models

## PostgreSQL Schema

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(160) NOT NULL,
  last_name VARCHAR(160) NOT NULL,
  email CITEXT UNIQUE NOT NULL,
  phone VARCHAR,
  auth_provider VARCHAR NOT NULL DEFAULT 'password',
  oauth_id VARCHAR,
  role VARCHAR NOT NULL DEFAULT 'candidate',
  two_factor_enabled BOOLEAN NOT NULL DEFAULT FALSE,
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE candidate_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  experience JSONB NOT NULL DEFAULT '[]',
  skills JSONB NOT NULL DEFAULT '[]',
  location JSONB,
  badges JSONB NOT NULL DEFAULT '[]',
  video_resume_url TEXT,
  training_status VARCHAR NOT NULL DEFAULT 'draft',
  geo_point geometry(Point, 4326),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employer_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR NOT NULL,
  description TEXT NOT NULL,
  requirements JSONB NOT NULL DEFAULT '[]',
  location JSONB,
  compensation VARCHAR,
  status VARCHAR NOT NULL DEFAULT 'draft',
  seo_slug VARCHAR UNIQUE NOT NULL,
  meta JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  candidate_profile_id UUID NOT NULL REFERENCES candidate_profiles(id),
  status VARCHAR NOT NULL DEFAULT 'applied',
  ai_fit_score NUMERIC(5,2),
  explainability JSONB NOT NULL DEFAULT '[]',
  timeline JSONB NOT NULL DEFAULT '[]',
  interview_feedback JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE placements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID UNIQUE NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  contract_url TEXT,
  transparency_timeline JSONB NOT NULL DEFAULT '[]',
  roi_metrics JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE talent_pools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employer_id UUID NOT NULL REFERENCES users(id),
  name VARCHAR NOT NULL,
  config JSONB NOT NULL DEFAULT '{}',
  segments JSONB NOT NULL DEFAULT '[]',
  subscriptions JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID NOT NULL REFERENCES users(id),
  candidate_id UUID NOT NULL REFERENCES users(id),
  payout_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  status VARCHAR NOT NULL DEFAULT 'pending',
  milestones JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

## ER Diagram (text description)

- **User** 1—1 **CandidateProfile** (for candidates) and 1—* **Job** (for employers).
- **Job** 1—* **Application** which links to **CandidateProfile** and optionally 1—1 **Placement**.
- **Placement** stores transparency timeline + ROI metrics.
- **TalentPool** belongs to an employer `User` and stores JSONB segments/subscriptions.
- **Referral** links referrer user to candidate user with payout milestones.
- **TrainingModule** issues badges consumed by `CandidateProfile.badges`.
- **AuditLog** references `User` to track admin and recruiter actions.

## Search + Analytics

- Elasticsearch index mirrors `jobs` and `candidate_profiles` with denormalized explainability chips.
- Mixpanel + GA4 track the funnel: signup → job post → shortlist → interviews → contract → placement.

