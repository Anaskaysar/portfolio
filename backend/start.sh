#!/bin/sh
# Do NOT use set -e so we can see all errors
# set -e


# Run migrations in the background after a delay to ensure the server starts first
(
  sleep 10
  python3 manage.py migrate --noinput || echo "Background migration failed"
) &

# Start Gunicorn immediately
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
  --bind 0.0.0.0:${PORT:-8080} \
  --workers 1 \
  --threads 8 \
  --timeout 0
