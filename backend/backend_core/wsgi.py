"""
WSGI config for backend_core project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys
import logging

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_core.settings')

try:
    application = get_wsgi_application()
except Exception as e:
    logging.error(f"Failed to initialize WSGI application: {e}")
    # Print to stderr so it shows up in Cloud Run logs immediately
    print(f"CRITICAL ERROR: {e}", file=sys.stderr)
    raise e
