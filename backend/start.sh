#!/bin/sh
# Do NOT use set -e so we can see all errors
#!/bin/sh

# Run migrations in the background after a delay
(
  sleep 10
  python3 manage.py migrate --noinput || echo "Background migration failed"
) &

# Start Gunicorn
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
  --bind 0.0.0.0:${PORT:-8080} \
  --workers 2 \
  --threads 4 \
  --timeout 0
