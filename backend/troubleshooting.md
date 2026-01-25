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
