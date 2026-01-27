# CI/CD Pipeline Documentation

This document explains how the automated deployment pipelines are structured and how they handle updates for both the backend and frontend.

## Overview
The project uses **GitHub Actions** to automate deployments. The workflows are designed to be "smart" by only triggering when changes are made to their respective directories.

## 1. Backend CI/CD (Google Cloud Run)
**File:** `.github/workflows/backend.yml`

### Process:
1.  **Trigger**: Push to `main` branch with changes in `backend/**`.
2.  **Authentication**: Uses `google-github-actions/auth` with a Service Account key.
3.  **Docker Build**: Builds a Docker image from the `./backend` directory.
4.  **Artifact Registry**: Pushes the image to Google Artifact Registry (`us-central1-docker.pkg.dev`).
5.  **Deployment**: Deploys the new image to Google Cloud Run.

### Key Configuration:
- **Registry**: Artifact Registry is used instead of the deprecated Container Registry.
- **Environment**: Uses `PROJECT_ID`, `SERVICE_NAME`, `REGION`, and `REPOSITORY` env vars.

---

## 2. Frontend CI/CD (Vercel)
**File:** `.github/workflows/frontend.yml`

### Process:
1.  **Trigger**: Push to `main` branch with changes in `frontend/**`.
2.  **Environment**: Sets up Node.js 20.
3.  **Vercel CLI**: Installs the latest Vercel CLI globally.
4.  **Deployment**: Runs `vercel --prod` to trigger a remote build and deployment on Vercel's infrastructure.

### Why Direct Deployment?
We switched from a manual build flow to a direct `vercel --prod` command to avoid environment-specific errors (like `spawn sh ENOENT`) on the GitHub runner. This allows Vercel to handle the build using its own optimized servers.

---

## 3. Path Filtering
To save build time and costs, each workflow uses `paths` filtering:
```yaml
on:
  push:
    paths:
      - 'backend/**' # Only runs for backend changes
```

---

## 4. Challenges & Solutions

### Challenge 1: Artifact Registry Permissions
- **Issue**: `denied: Permission 'artifactregistry.repositories.uploadArtifacts' denied`.
- **Solution**: Granted the `Artifact Registry Writer` role to the Service Account in IAM.

### Challenge 2: Vercel Project Identification
- **Issue**: `Error! Project not found`.
- **Solution**: Corrected the `VERCEL_ORG_ID` to use the **Team ID** (starts with `team_`) instead of the Team Name.

### Challenge 3: Vercel Directory Nesting
- **Issue**: Vercel was looking for `frontend/frontend` because the command was run inside the `frontend` folder while the Vercel project settings also had `frontend` as the root.
- **Solution**: Moved the command execution to the project root.
