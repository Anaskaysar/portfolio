# Use Python 3.12
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project
COPY . /app/

# Make start.sh executable
RUN chmod +x /app/start.sh

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port
EXPOSE 8080

# Run startup script (DO NOT override this in gcloud deploy)
CMD ["/app/start.sh"]