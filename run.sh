#!/bin/bash

# Function to handle cleanup on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null
    exit
}

# Trap SIGINT (Ctrl+C) and call cleanup
trap cleanup SIGINT

echo "Starting Portfolio Project..."

# Start Backend
echo "Starting Django Backend..."
cd backend
source venv/bin/activate
python3 manage.py runserver &
BACKEND_PID=$!
cd ..

# Start Frontend
echo "Starting Vite Frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "------------------------------------------------"
echo "Servers are running!"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://127.0.0.1:8000"
echo "Press Ctrl+C to stop both servers."
echo "------------------------------------------------"

# Wait for background processes
wait
