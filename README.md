# Middle Orbit Overseas - Recruitment Website

A complete recruitment website for a Nepali overseas manpower agency.

## Features
- **Job Board**: Browse and search jobs by country, category, and salary.
- **Online Application**: Apply for jobs with CV and Passport upload.
- **Employer Services**: Manpower request form for employers.
- **Admin Panel**: Manage jobs, applications, employers, and documents.
- **Responsive Design**: Mobile-first UI using Tailwind CSS.

## Setup Instructions

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

## Project Structure
- `core/`: Main pages (Home, Documents, Contact) and User model.
- `jobs/`: Job listings and search logic.
- `applications/`: Job application handling.
- `employers/`: Employer manpower requests.
- `templates/`: HTML templates with Tailwind CSS.
- `static/`: Static assets.
- `media/`: User uploaded files (CVs, Passports).

## Credentials
- **Admin Username**: admin
- **Admin Password**: admin123 (if created via script, otherwise whatever you set)
