# Django Backend Architecture Plan

## 1. Overview
This document outlines the architecture for the Django backend that will power the portfolio. The goal is to transition from static `data.js` files to a dynamic database-driven system managed via a dashboard.

## 2. Tech Stack
-   **Backend**: Django (Python)
-   **API**: Django REST Framework (DRF)
-   **Database**: PostgreSQL (Production) / SQLite (Dev)
-   **Containerization**: Docker
-   **Hosting**: Google Cloud Run (as per your experience) or Render/Railway.

## 3. Database Design (Models)
We will mirror the structure of your current frontend data.

### Core Apps
We will organize the code into logical "apps".

#### App: `portfolio`
Handles the core content.

**1. Profile** (Singleton Model)
-   `name` (Char)
-   `title` (Char)
-   `tagline` (Text)
-   `email` (Email)
-   `resume` (File)
-   `availability` (Char)
-   `github_link` (URL)
-   `linkedin_link` (URL)

**2. Project**
-   `title` (Char)
-   `slug` (Slug, unique)
-   `description` (Text)
-   `content` (Rich Text / Markdown)
-   `tech_stack` (JSON or ManyToMany with a `Tag` model)
-   `category` (Choice: Fullstack, Frontend, Backend)
-   `live_link` (URL)
-   `github_link` (URL)
-   `image` (ImageField)
-   `featured` (Boolean)
-   `order` (Int)

**3. Experience**
-   `role` (Char)
-   `company` (Char)
-   `location` (Char)
-   `start_date` (Date)
-   `end_date` (Date, null=True)
-   `is_current` (Boolean)
-   `description` (Text)
-   `details` (JSON / Array of strings for bullet points)

**4. Education**
-   `degree` (Char)
-   `institution` (Char)
-   `start_date` (Date)
-   `end_date` (Date)
-   `cgpa` (Char)
-   `awards` (Text)
-   `focus_areas` (JSON / Array)

**5. Update** (For "Recent Updates" on About page)
-   `date` (Date)
-   `title` (Char)
-   `type` (Choice: Graduation, Award, Presentation, etc.)
-   `description` (Text)
-   `link` (URL)

**6. Skill**
-   `category` (Char: "Languages", "Backend", etc.)
-   `items` (JSON / Array)

## 4. API Structure (Endpoints)
All endpoints will be read-only for public, read-write for admin.

-   `GET /api/profile/` -> Returns personal info
-   `GET /api/projects/` -> List all projects (filter by featured/category)
-   `GET /api/experience/` -> List work experience
-   `GET /api/education/` -> List education
-   `GET /api/updates/` -> List recent updates
-   `GET /api/skills/` -> List skills

## 5. Dashboard Strategy
**Recommendation: Dashboard Component in Current Project**

Instead of a separate repo, we will build the dashboard inside your current React frontend.

**Why?**
1.  **Single Codebase**: Easier to manage.
2.  **Shared Components**: Reuse your UI kit (buttons, inputs) for the admin panel.
3.  **Seamless**: You can log in and edit content without leaving your site.

**Implementation:**
1.  Create `frontend/src/components/Dashboard/`.
2.  Add a **Protected Route** (e.g., `/admin/login`).
3.  Use **JWT Authentication** to talk to the Django backend.
4.  Create forms to Add/Edit/Delete the models defined above.

## 6. Implementation Plan

### Phase 1: Backend Setup
1.  Initialize Django project in `backend/` folder.
2.  Setup Docker for PostgreSQL and Django.
3.  Create `portfolio` app and define Models.
4.  Setup DRF and Serializers.
5.  Create API Views and URLs.
6.  **Manual Data Entry**: You will use the Django Admin panel (`/admin`) to input your initial data from `data.js`.

### Phase 2: Frontend Integration
1.  Create an `api.js` service in frontend to fetch data.
2.  Replace `data.js` imports with `useEffect` hooks to fetch from API.
3.  Add loading states (skeletons) while data fetches.

### Phase 3: Dashboard (Future)
1.  Implement JWT Auth in Django.
2.  Build the Dashboard UI in React.
3.  Connect forms to API POST/PUT/DELETE endpoints.

## 7. Immediate Next Steps
1.  **Deploy Frontend**: Deploy the current static version to Vercel/Netlify.
2.  **Start Backend**: Begin Phase 1 in the `backend/` directory.
