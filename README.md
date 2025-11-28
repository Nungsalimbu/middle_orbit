# Middle Orbit Overseas

This repository contains two implementations of the Middle Orbit Overseas platform.

## 1. Django Implementation (Current Active Version)
A complete recruitment website built with Django and Tailwind CSS.

### Features
- **Job Board**: Browse and search jobs by country, category, and salary.
- **Online Application**: Apply for jobs with CV and Passport upload.
- **Employer Services**: Manpower request form for employers.
- **Admin Panel**: Manage jobs, applications, employers, and documents.
- **Responsive Design**: Mobile-first UI using Tailwind CSS.

### Setup Instructions (Django)

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run Migrations**
   ```bash
   python manage.py migrate
   ```

3. **Create Superuser (Admin)**
   ```bash
   python manage.py createsuperuser
   ```

4. **Run Server**
   ```bash
   python manage.py runserver
   ```

5. **Access the Website**
   - Public Site: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

### Project Structure (Django)
- `core/`: Main pages (Home, Documents, Contact) and User model.
- `jobs/`: Job listings and search logic.
- `applications/`: Job application handling.
- `employers/`: Employer manpower requests.
- `templates/`: HTML templates with Tailwind CSS.
- `static/`: Static assets.
- `media/`: User uploaded files (CVs, Passports).

---

## 2. Next.js/NestJS Implementation (From Remote)
Monorepo housing the MiddleOrbit manpower platform. It includes a Next.js + Tailwind SSR frontend and a NestJS API backed by PostgreSQL, Elasticsearch, and AWS services.

### Structure
- `apps/web` – Public web app, dashboards, marketing pages.
- `apps/api` – NestJS service exposing REST/GraphQL for employers, candidates, admin.
- `infra` (coming soon) – IaC definitions for AWS + Vercel.

### Getting Started (Node.js)
```bash
npm install
npm run dev -- --filter=web
```

### Requirements
- Node 20+
- PostgreSQL 14+
- Redis 7+
