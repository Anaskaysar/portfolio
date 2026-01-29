#!/bin/bash

# Exit on error
set -e

echo "Starting Django application..."

# Wait for Cloud SQL proxy to be ready
sleep 5

# Run migrations in the background (optional, Cloud Build handles this now)
(
  sleep 10
  python3 manage.py migrate --noinput || echo "Background migration failed"
) &

echo "Startup script continuing..."

# Start Gunicorn
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
    --bind 0.0.0.0:${PORT:-8080} \
    --workers 2 \
    --threads 4 \
    --timeout 0 \
    --log-level debug