#!/bin/sh
set -e

# Run database migrations in the background
echo "Starting background migrations..."
(
  python3 manage.py migrate --noinput || echo "Background migration failed"
) &

# Start Gunicorn immediately to satisfy Cloud Run health check
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
  --bind 0.0.0.0:${PORT:-8080} \
  --workers 2 \
  --threads 4 \
  --timeout 0
