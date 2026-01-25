# Django Backend Setup Guide

## Step 1: Initialize the Backend
```bash
mkdir backend
cd backend
python3 -m venv venv
source venv/bin/activate
```

## Step 2: Install Dependencies
```bash
pip install django djangorestframework django-cors-headers Pillow
```

## Step 3: Create Project and App
```bash
django-admin startproject backend_core .
python manage.py startapp api
```

## Step 4: Configure Settings (`backend_core/settings.py`)
- Added `rest_framework`, `corsheaders`, and `api` to `INSTALLED_APPS`.
- Added `corsheaders.middleware.CorsMiddleware` to `MIDDLEWARE` (above `CommonMiddleware`).
- Configured `CORS_ALLOWED_ORIGINS`:
  ```python
  CORS_ALLOWED_ORIGINS = [
      "http://localhost:5173",
  ]
  ```

## Step 5: Configure PostgreSQL
1.  **Start PostgreSQL (if using Homebrew):**
    ```bash
    brew services start postgresql@14
    ```

2.  **Create the Database:**
    ```bash
    createdb portfolio_db
    ```

3.  **Install the PostgreSQL adapter:**
    ```bash
    pip install psycopg2-binary
    ```

4.  **Update `DATABASES` in `backend_core/settings.py`:**
    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'portfolio_db',
            'USER': 'kaysarulanasapurba', # Your system username (default for Homebrew)
            'PASSWORD': '',          # Leave empty for default Homebrew setup
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```
    *Note: If you installed via Homebrew, the default user is usually your system username and there is no password.*

## Step 6: Verify Connection & Run Migrations
Run the initial migrations to set up the database schema:
```bash
python manage.py migrate
```

> [!NOTE]
> **Where is the database file?**
> Unlike SQLite, **PostgreSQL does not create a file** (like `db.sqlite3`) in your project folder. It runs as a background server and manages the data internally on your system. You won't see a file in your project, but the data is there!

## Step 7: Create Superuser
Create an admin user to access the Django Admin panel:
```bash
python manage.py createsuperuser
```

## Step 8: Define Models (`backend/api/models.py`)
Defined the `Project` model with fields for title, description, tech stack, image, links, **category**, and **featured** status.

## Step 9: Register in Admin & Migrate
1.  **Register in `backend/api/admin.py`:**
    ```python
    from django.contrib import admin
    from .models import Project

    admin.site.register(Project)
    ```

2.  **Run Migrations:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

## Step 10: Create Serializer (`backend/api/serializers.py`)
Created `ProjectSerializer` to convert the `Project` model to JSON.

## Step 11: Create View (`backend/api/views.py`)
Created `ProjectList` view to list all projects using the serializer.

## Step 12: Configure URLs
1.  **Created `backend/api/urls.py`:** Defined the `/projects/` endpoint.
2.  **Updated `backend/backend_core/urls.py`:** Included the `api` app URLs.

**Result:** API is live at `http://127.0.0.1:8000/api/projects/`.

## Step 13: Configure Media Files
1.  **Settings (`backend/backend_core/settings.py`):**
    ```python
    MEDIA_URL = '/media/'
    MEDIA_ROOT = BASE_DIR / 'media'
    ```
2.  **URLs (`backend/backend_core/urls.py`):**
    ```python
    from django.conf import settings
    from django.conf.urls.static import static

    if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    ```

## Step 14: Import Data
1.  **Create Fixture:** Created `backend/api/fixtures/projects.json` with project data.
2.  **Load Data:**
    ```bash
    python manage.py loaddata api/fixtures/projects.json
    ```
3.  **Upload Images:** Manually uploaded images via the Django Admin panel (or moved them to `backend/media/projects/`).

## Step 15: Frontend Configuration
1.  **Environment Variables (`frontend/.env.local`):**
    ```env
    VITE_API_URL=http://127.0.0.1:8000/api
    VITE_MEDIA_URL=http://127.0.0.1:8000
    ```
2.  **Update API Service (`frontend/src/lib/api.js`):**
    Updated to use `import.meta.env.VITE_API_URL`.