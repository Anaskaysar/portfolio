# Project Card System Documentation

This document explains how the project card system works, including the alternating layout, API integration, and GCS image handling.

## 1. Alternating Layout Logic
The alternating layout (Image Left -> Image Right) is achieved using CSS Flexbox and the project's `index` in the list.

### How it works:
In `ProjectCard.jsx`, we check if the `index` is odd or even:
```javascript
<div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
  index % 2 === 1 ? 'md:flex-row-reverse' : ''
}`}>
```
- **`index % 2 === 1`**: If the index is odd, we add `md:flex-row-reverse` to swap the image and text positions on desktop.

## 2. API Integration
Projects are no longer hardcoded in `src/lib/data.js`. They are fetched dynamically from the Django backend.

### Data Fetching (`src/Pages/Projects.jsx`):
```javascript
const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await getProjects();
    setProjects(data);
  };
  fetchData();
}, []);
```

## 3. GCS Image Handling
Since images are stored in Google Cloud Storage, the `ProjectCard` must handle both relative and absolute URLs.

### Image URL Logic (`ProjectCard.jsx`):
```javascript
const imageUrl = project.image 
  ? (project.image.startsWith('http') ? project.image : `${MEDIA_BASE_URL}${project.image}`)
  : null;
```
- **Absolute URLs**: If the backend returns a full GCS URL (starts with `http`), it is used directly.
- **Relative URLs**: If the image is local (dev mode), it prepends the `MEDIA_BASE_URL`.

## 4. Scroll Animation
The "scroll on hover" effect allows users to see full-length screenshots.

### Implementation:
- **Container**: Fixed height (`h-64` / `h-80`) with `overflow-hidden`.
- **Image**: `object-cover` with `object-top`.
- **Hover**: `group-hover:object-bottom` with a 5-second transition.

## 5. Filtering
The Projects page allows filtering by category (`fullstack`, `frontend`, `backend`). This is handled via React state and filters the `projects` array returned by the API.
