#!/bin/bash

# Exit on error
set -e

echo "Starting Django application..."

# Wait a bit for any external services
sleep 5

# Run migrations synchronously (not in background)
echo "Running database migrations..."
python3 manage.py migrate --noinput

# Load fixtures if needed (optional - only if you want to load initial data)
# echo "Loading fixtures..."
# python3 manage.py loaddata api/fixtures/projects.json

# Start Gunicorn
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
    --bind 0.0.0.0:${PORT:-8080} \
    --workers 2 \
    --threads 4 \
    --timeout 0 \
    --log-level debug