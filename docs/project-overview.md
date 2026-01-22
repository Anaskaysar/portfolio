# Portfolio Project Documentation

## 1. Project Overview
This is a modern, responsive personal portfolio website built with React and Tailwind CSS v4. It features a dark/light mode toggle, dynamic project cards, and a clean, professional design.

### Tech Stack
-   **Frontend**: React (Vite)
-   **Styling**: Tailwind CSS v4
-   **Routing**: React Router DOM
-   **Icons**: Custom SVG Components

## 2. Project Structure
```
portfolio-project/
├── docs/               # Documentation files
├── frontend/           # React Frontend Application
│   ├── public/         # Static assets (favicons, images)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── lib/        # Data and utility functions
│   │   ├── Pages/      # Page components (Home, Projects, etc.)
│   │   ├── App.jsx     # Main App component
│   │   └── main.jsx    # Entry point
│   └── index.html      # HTML entry point
└── backend/            # (Future) Backend Application
```

## 3. Key Components

### `ProjectCard.jsx`
A reusable component for displaying project details.
-   **Features**:
    -   **Alternating Layout**: Uses `flex-row-reverse` based on the project index to create a zig-zag pattern.
    -   **Scroll Animation**: Images scroll from top to bottom on hover using CSS transitions on `object-position`.
    -   **Responsive**: Stacks vertically on mobile devices.

### `ThemeContext.jsx`
Manages the dark/light mode state.
-   **Logic**: Checks system preference or local storage on load. Toggles a `dark` class on the `<html>` element.

### `data.js`
Centralized data file for projects, skills, and personal info.
-   **Usage**: Edit this file to add new projects or update your bio without touching the component code.

## 4. Deployment Guide

### Recommended Hosting: Vercel or Netlify
For a React frontend, **Vercel** or **Netlify** are the best options.

**Why?**
1.  **Free**: Generous free tiers for personal projects.
2.  **Fast**: They use global CDNs to serve your site instantly from anywhere.
3.  **Easy Updates**: Connect your GitHub repository. Every time you push code, they automatically rebuild and deploy your site in minutes.
4.  **Custom Domain**: You can easily connect your custom domain (purchased from Namecheap or elsewhere) for free.

### How to Deploy (Vercel Example):
1.  Push your code to GitHub.
2.  Go to [Vercel.com](https://vercel.com) and sign up.
3.  Click "Add New Project" and select your GitHub repo.
4.  **Build Settings**:
    -   **Framework Preset**: Vite
    -   **Root Directory**: `frontend` (Important! Since your package.json is inside the frontend folder).
5.  Click "Deploy".

### Comparison
| Option | Speed | Cost | Ease of Use | Updates |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel/Netlify** | 🚀 **Fastest** | **Free** | **Easiest** | **Instant (Auto)** |
| **Firebase** | ⚡ Fast | Free Tier | Medium | Manual CLI |
| **Namecheap** | 🐢 Slower | Paid | Harder | Manual FTP/Upload |

**Recommendation**: Use **Vercel** or **Netlify**. They are the industry standard for React apps.

## 5. Future Roadmap
-   **Backend**: Build a Django/Node.js backend in the `backend/` folder.
-   **Dashboard**: Create an admin dashboard to manage projects dynamically.
-   **Database**: Connect to PostgreSQL/MongoDB to store project data instead of `data.js`.
Plan:
Phase 1: Set up Django + PostgreSQL. Use Django Admin for manual data entry initially.
Phase 2: Connect your frontend to the Django API.
Phase 3: Build the custom Dashboard UI in React.