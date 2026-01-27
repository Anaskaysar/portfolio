# Troubleshooting Guide

This document tracks errors encountered during development and their solutions.

## 1. Git Push Failed (RPC failed)
**Error:**
```
error: RPC failed; HTTP 408 curl 22 The requested URL returned error: 408
fatal: the remote end hung up unexpectedly
```
**Cause:** Network timeout or Git buffer size too small for the push.
**Solution:**
- Retry the push (often works if it was just a glitch).
- Increase buffer size: `git config http.postBuffer 524288000`

## 2. Command not found: createdb
**Error:** `zsh: command not found: createdb`
**Cause:** PostgreSQL command-line tools are not in the system PATH (common with Postgres.app or some Homebrew installs).
**Solution:**
- Use `psql postgres` to enter the shell and run `CREATE DATABASE portfolio_db;`.
- Or use the GUI provided by Postgres.app.

## 3. NameError in admin.py
**Error:** `NameError: name 'Project' is not defined`
**Cause:** Forgot to import the model in `admin.py`.
**Solution:**
Add `from .models import Project` to the top of `backend/api/admin.py`.

## 4. Typo: makemigration
**Error:** `Unknown command: 'makemigration'`
**Cause:** Typo in the Django command.
**Solution:** Use `python manage.py makemigrations` (plural).

## 5. Missing Pillow for ImageField
**Error:** `api.Project.image: (fields.E210) Cannot use ImageField because Pillow is not installed.`
**Cause:** Django's `ImageField` requires the `Pillow` image processing library.
**Solution:**
```bash
pip install Pillow
```

## 6. IntegrityError during loaddata
**Error:** `null value in column "created_at" of relation "api_project" violates not-null constraint`
**Cause:** The `projects.json` fixture did not include the `created_at` field. While `auto_now_add=True` works for code creations, loading raw data (fixtures) requires the field to be present or the database rejects it.
**Solution:** Add `"created_at": "2023-01-01T00:00:00Z"` (or current date) to every object in the JSON fixture.

## 7. TypeError: Cannot read properties of undefined (reading 'map')
**Error:** `Uncaught TypeError: Cannot read properties of undefined (reading 'map')` in `ProjectCard.jsx`
**Cause:** Mismatch between frontend component expectations and backend API response. `ProjectCard` expected `project.tech` but the API returns `project.tech_stack`.
**Solution:** Update `ProjectCard.jsx` to use the correct field names from the Django model (`tech_stack`, `github_link`, `live_link`).

## 8. Images Returning 404 Not Found
**Error:** Images were not loading even though `MEDIA_URL` was configured.
**Cause:** Images were uploaded/placed in `backend/projects/` but Django expects them in `backend/media/projects/` (based on `MEDIA_ROOT`).
**Solution:** Moved the `projects` directory into `media/`.
```bash
mkdir media && mv projects media/
```

## 9. OptimizedImage Loading Failure
**Error:** Images failed to load in the frontend component.
**Cause:** `OptimizedImage.jsx` was automatically trying to load a `.webp` version of the image (e.g., `image.webp` for `image.png`). Since user-uploaded images in Django are not auto-converted to WebP, this file didn't exist.
**Solution:** Disabled the automatic WebP conversion logic in `OptimizedImage.jsx` to load the original source URL directly.

## 10. GCP Quota Project Warning
**Warning:** `Your active project does not match the quota project in your local Application Default Credentials file.`
**Cause:** This happens when the project set in `gcloud config` differs from the one used for billing/quota in your local credentials.
**Solution:** It's usually safe to ignore for personal projects, but you can fix it with:
```bash
gcloud auth application-default set-quota-project portfolio-backend-kaysarulanas
```

## 11. Cloud Build PERMISSION_DENIED
**Error:** `ERROR: (gcloud.builds.submit) PERMISSION_DENIED: The caller does not have permission`
**Cause:** This often happens immediately after enabling the Cloud Build API. The permissions take a minute or two to propagate across Google's servers.
**Solution:** Wait 60 seconds and retry the command. If it still fails, ensure your account has the "Cloud Build Editor" role in the GCP Console.

## 13. Cloud SQL Connection Refused (TCP vs Socket)
**Error:** `psycopg2.OperationalError: connection to server at "localhost" (127.0.0.1), port 5432 failed: Connection refused`
**Cause:** Django defaults to TCP (localhost) if the `DATABASE_URL` doesn't explicitly set the `HOST` to the Unix socket path.
**Solution:** Update `settings.py` to manually move the `host` from `OPTIONS` to `HOST`:
```python
if os.environ.get('DATABASE_URL'):
    DATABASES['default'] = dj_database_url.config()
    if DATABASES['default'].get('OPTIONS', {}).get('host'):
        DATABASES['default']['HOST'] = DATABASES['default']['OPTIONS']['host']
```

## 14. InvalidStorageError: No module named 'storages'
**Error:** `django.core.files.storage.handler.InvalidStorageError: Could not find backend 'backend_core.storage_backends.MediaStorage': No module named 'storages'`
**Cause:** Running the server with the system Python instead of the virtual environment where `django-storages` is installed.
**Solution:** Always run the server using the virtual environment's Python:
```bash
./venv/bin/python3 manage.py runserver
```

## 15. Artifact Registry Permission Denied
**Error:** `denied: Permission 'artifactregistry.repositories.uploadArtifacts' denied on resource`
**Cause:** The Service Account used in GitHub Actions lacks the `Artifact Registry Writer` role.
**Solution:** 
1. Go to **IAM & Admin > IAM** in GCP Console.
2. Find the Service Account and add the role: **Artifact Registry Writer**.
3. Ensure the repository exists in **Artifact Registry > Repositories**.

## 16. GCR.io vs Artifact Registry
**Error:** `denied: gcr.io repo does not exist. Creating on push requires the artifactregistry.repositories.createOnPush permission`
**Cause:** Google is deprecating Container Registry (`gcr.io`) in favor of Artifact Registry (`pkg.dev`).
**Solution:** Update the workflow to use the Artifact Registry format:
- Registry: `REGION-docker.pkg.dev/PROJECT_ID/REPOSITORY/IMAGE`
- Auth: `gcloud auth configure-docker REGION-docker.pkg.dev`

## 17. Vercel: Project not found
**Error:** `Error! Project not found ({"VERCEL_PROJECT_ID":"***","VERCEL_ORG_ID":"***"})`
**Cause:** Incorrect `VERCEL_PROJECT_ID` or `VERCEL_ORG_ID` (Team ID) in GitHub Secrets.
**Solution:** 
- Get `VERCEL_PROJECT_ID` from Project Settings.
- Get `VERCEL_ORG_ID` (Team ID) from Team Settings (starts with `team_`).
- Run `npx vercel link` locally to verify the IDs in `.vercel/project.json`.

## 18. Vercel: Unexpected error (CLI Version)
**Error:** `Error! Unexpected error. Please try again later. ()`
**Cause:** Using an outdated Vercel GitHub Action or CLI version that is incompatible with the project (e.g., Tailwind v4).
**Solution:** Update the workflow to use the latest Vercel CLI directly:
```yaml
- name: Install Vercel CLI
  run: npm install --global vercel@latest
- name: Deploy to Vercel
  run: vercel --prod --yes --token=${{ secrets.VERCEL_TOKEN }}
```

## 19. Vercel: Directory Nesting Error
**Error:** `Error: The provided path "~/work/portfolio/portfolio/frontend/frontend" does not exist.`
**Cause:** Setting `working-directory: ./frontend` in GitHub Actions when Vercel's "Root Directory" setting is already set to `frontend`.
**Solution:** Run the `vercel` command from the project root and let Vercel handle the directory mapping via its internal settings.
