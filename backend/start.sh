#!/bin/sh
# Do NOT use set -e so we can see all errors
# set -e

echo "--- Environment Check ---"
echo "PORT: ${PORT}"
echo "DATABASE_URL: ${DATABASE_URL:0:15}..." # Only show start of URL for security
echo "DEBUG: ${DEBUG}"

echo "--- Running Django Checks ---"
python3 manage.py check || echo "Django check failed"

echo "--- Starting background migrations ---"
(
  python3 manage.py migrate --noinput || echo "Background migration failed"
) &

echo "--- Starting Gunicorn on port ${PORT:-8080} ---"
exec gunicorn backend_core.wsgi:application \
  --bind 0.0.0.0:${PORT:-8080} \
  --workers 2 \
  --threads 4 \
  --timeout 0 \
  --log-level debug
