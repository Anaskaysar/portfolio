# Portfolio Project Documentation

## 1. Project Overview
This is a modern, full-stack personal portfolio website. It features a React frontend with a clean, responsive design and a Django backend that provides a dynamic API for managing projects and content. The project is fully integrated with Google Cloud for storage and database, and uses automated CI/CD pipelines for seamless deployments.

### Tech Stack
-   **Frontend**: React 19 (Vite)
-   **Backend**: Django 5.1 (Google Cloud Run)
-   **Database**: PostgreSQL (Google Cloud SQL)
-   **Storage**: Google Cloud Storage (GCS) for media files
-   **Styling**: Tailwind CSS v4
-   **CI/CD**: GitHub Actions (GCP & Vercel)
-   **Routing**: React Router DOM v7

## 2. Project Structure
```
portfolio-project/
├── .github/workflows/  # CI/CD Pipeline configurations
├── backend/            # Django Backend Application
│   ├── api/            # API logic, models, and views
│   ├── backend_core/   # Project settings and configuration
│   └── manage.py       # Django management script
├── frontend/           # React Frontend Application
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── lib/        # API helpers and icons
│   │   ├── Pages/      # Page components
│   │   └── App.jsx     # Main App component
│   └── index.html      # HTML entry point
└── docs/               # Project documentation & screenshots
```

## 3. Key Features & Architecture

### Dynamic Project Management
Projects are no longer hardcoded in the frontend. They are fetched from the Django API, allowing for easy updates via the Django Admin panel.

### Cloud Storage (GCS)
Project thumbnails and other media are stored permanently in Google Cloud Storage. This ensures that images persist even though the backend runs on ephemeral Cloud Run instances.

### Automated CI/CD
- **Backend**: Automatically builds a Docker image, pushes to Artifact Registry, and deploys to Cloud Run on every push to `main` (if `backend/` changes).
- **Frontend**: Automatically deploys to Vercel on every push to `main` (if `frontend/` changes).

### Modern UI/UX
- **Dark/Light Mode**: Auto-detects system preference with a manual toggle.
- **Optimized Images**: Uses a custom `OptimizedImage` component for better performance.
- **Responsive Design**: Fully optimized for all screen sizes using Tailwind CSS v4.

## 4. Documentation Links

For more detailed information, refer to the following guides:

- [**Backend Setup Guide**](file:///Users/kaysarulanasapurba/Desktop/My%20Codes/portfolio-project/backend/setup_guide.md)
- [**CI/CD Documentation**](file:///Users/kaysarulanasapurba/Desktop/My%20Codes/portfolio-project/docs/CI_CD.md)
- [**Troubleshooting Guide**](file:///Users/kaysarulanasapurba/Desktop/My%20Codes/portfolio-project/backend/troubleshooting.md)

## 5. Progress & Roadmap
- [x] **Phase 1**: Initial React Frontend with Tailwind CSS v4.
- [x] **Phase 2**: Django Backend + PostgreSQL (Cloud SQL) integration.
- [x] **Phase 3**: Google Cloud Storage (GCS) for media files.
- [x] **Phase 4**: Automated CI/CD pipelines for Frontend and Backend.
- [ ] **Phase 5**: Custom React-based Admin Dashboard (Currently using enhanced Django Admin).
- [ ] **Phase 6**: SEO Optimization and Performance Tuning.