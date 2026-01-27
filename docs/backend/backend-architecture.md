# Django Backend Architecture

## 1. Overview
This document outlines the architecture for the Django backend. The project has transitioned from static `data.js` files to a dynamic database-driven system managed via the Django Admin panel, with a future goal of a custom React dashboard.

## 2. Tech Stack (Implemented)
-   **Backend**: Django 5.1 (Python)
-   **API**: Django REST Framework (DRF)
-   **Database**: PostgreSQL (Google Cloud SQL)
-   **Storage**: Google Cloud Storage (GCS) for media
-   **Containerization**: Docker (deployed to Google Cloud Run)
-   **CI/CD**: GitHub Actions

## 3. Database Design (Models)
The backend mirrors the structure of the frontend data for seamless integration.

### Core App: `api`
Handles the project content and API endpoints.

**1. Project**
-   `title` (Char)
-   `description` (Text)
-   `tech_stack` (JSONField)
-   `category` (Choice: Fullstack, Frontend, Backend)
-   `live_link` (URL)
-   `github_link` (URL)
-   `image` (ImageField)
-   `featured` (Boolean)
-   `created_at` (DateTime)

## 4. API Structure (Endpoints)
-   `GET /api/projects/` -> Returns a list of all projects.
-   `GET /api/projects/?featured=true` -> (Planned) Filter for featured projects.

## 5. Storage Strategy (GCS)
Since Cloud Run is ephemeral, we use **Google Cloud Storage** for all media files.
- **Custom Storage**: `backend_core/storage_backends.py` defines `MediaStorage` to handle GCS uploads.
- **URL Handling**: The API returns full GCS URLs for images, which the frontend displays directly.

## 6. Implementation Status

### ✅ Phase 1: Backend Setup (Completed)
- Initialized Django project in `backend/`.
- Configured Docker and deployed to Google Cloud Run.
- Created `api` app and defined the `Project` model.
- Setup DRF and Serializers.

### ✅ Phase 2: Frontend Integration (Completed)
- Created `api.js` service in frontend to fetch data.
- Replaced hardcoded project data with API fetches in `Projects.jsx`.
- Implemented `OptimizedImage` to handle GCS URLs.

### 🔄 Phase 3: Dashboard & Auth (In Progress)
- Currently using the **Enhanced Django Admin** for data management.
- Future: Build a custom React dashboard with JWT Authentication.

## 7. Maintenance
- **Updates**: Use the [Cloud Django Admin](https://portfolio-backend-oixpsfgnsq-uc.a.run.app/admin) to add or edit projects.
- **Logs**: Monitor deployments via GitHub Actions and Cloud Run logs.
