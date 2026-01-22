# Kaysarul Anas | Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**. It features a dark/light mode toggle, dynamic project cards, and a clean, professional design.

## 🚀 Tech Stack

-   **Frontend**: React 19 (Vite)
-   **Styling**: Tailwind CSS v4
-   **Routing**: React Router DOM v7
-   **Icons**: Custom SVG Components
-   **Deployment**: Vercel / Netlify

## 📂 Project Structure

```bash
portfolio-project/
├── frontend/           # React Frontend Application
│   ├── public/         # Static assets (favicons, images)
│   ├── src/
│   │   ├── components/ # Reusable UI components (Hero, Projects, etc.)
│   │   ├── lib/        # Data (data.js) and utility functions
│   │   ├── Pages/      # Page components (Home, Projects, About, etc.)
│   │   ├── App.jsx     # Main App component with Routing
│   │   └── main.jsx    # Entry point
│   └── index.html      # HTML entry point
├── backend/            # (Future) Django Backend
└── docs/               # Project Documentation
```

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Anaskaysar/portfolio.git
    cd portfolio
    ```

2.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Features

-   **Dark/Light Mode**: Automatically detects system preference, with a manual toggle.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Dynamic Project Cards**: Alternating layout with hover scroll animations.
-   **Centralized Data**: Easy to update content via `src/lib/data.js`.

## 🔜 Future Roadmap

-   [ ] **Backend Integration**: Django + PostgreSQL for dynamic content management.
-   [ ] **Admin Dashboard**: A protected route to add/edit projects and experiences.
-   [ ] **Blog Section**: Technical articles and tutorials.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
