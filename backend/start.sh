#!/bin/bash

# Exit on error
set -e

echo "Starting Django application..."

# Wait for Cloud SQL proxy to be ready
sleep 5

# Run migrations synchronously
echo "Running database migrations..."
python3 manage.py migrate --noinput

echo "Migrations completed successfully!"

# Start Gunicorn
echo "Starting Gunicorn on port ${PORT:-8080}..."
exec gunicorn backend_core.wsgi:application \
    --bind 0.0.0.0:${PORT:-8080} \
    --workers 2 \
    --threads 4 \
    --timeout 0 \
    --log-level debug