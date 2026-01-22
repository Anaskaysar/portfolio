# Project Card System Documentation

This document explains how the project card system works in the portfolio, including the alternating layout, featured projects selection, and animations.

## 1. Alternating Layout Logic

The alternating layout (Image Left -> Image Right -> Image Left) is achieved using CSS Flexbox and the project's `index` in the list.

### How it works:
In `ProjectCard.jsx`, we check if the `index` is odd or even:

```javascript
<div 
  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
    index % 2 === 1 ? 'md:flex-row-reverse' : ''
  }`}
>
```

-   **`flex-col`**: On mobile, the layout is always a vertical column (Image on top, text below).
-   **`md:flex-row`**: On desktop (medium screens and up), it becomes a row (Image Left, Text Right).
-   **`index % 2 === 1`**: If the index is odd (1, 3, 5...), we add `md:flex-row-reverse`.
    -   **`md:flex-row-reverse`**: This swaps the order on desktop, putting the Text on the Left and Image on the Right.

## 2. Featured Projects Selection

The "Featured Projects" section on the Home page only shows specific projects. This is controlled by the `featured` boolean flag in your data file.

### Data Structure (`src/lib/data.js`):
```javascript
export const projects = [
  {
    id: 1,
    title: 'Velox Analytics',
    // ...
    featured: true, // This project will show on Home page
  },
  {
    id: 3,
    title: 'CodeReview AI',
    // ...
    featured: false, // This project will ONLY show on Projects page
  }
];
```

### Filtering Logic (`src/components/FeaturedProjects.jsx`):
```javascript
const featuredProjects = projects.filter(project => project.featured);
```
This line creates a new list containing *only* the projects where `featured` is `true`.

## 3. Scroll Animation

The "scroll on hover" effect allows users to see the full length of a long screenshot without taking up too much vertical space.

### CSS Implementation (`ProjectCard.jsx`):

1.  **Container**: The image container has a fixed height.
    ```javascript
    className="relative h-64 md:h-80 rounded-xl overflow-hidden ..."
    ```
    -   `h-64` / `h-80`: Sets the visible window height.
    -   `overflow-hidden`: Hides the parts of the image that stick out.

2.  **Image**: The image is positioned and animated.
    ```javascript
    className="... object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out"
    ```
    -   **`object-cover`**: Ensures the image covers the width without stretching.
    -   **`object-top`**: Initially aligns the image to the top (Hero section).
    -   **`group-hover:object-bottom`**: When hovering over the card (`group`), align the image to the bottom.
    -   **`transition-all duration-[5000ms]`**: Smoothly transitions between Top and Bottom positions over 5 seconds.

## 4. Categories and Filtering

The main Projects page allows filtering by category.

### Data:
Each project has a `category` field:
```javascript
category: 'fullstack', // 'fullstack', 'frontend', or 'backend'
```

### Filtering Logic (`src/Pages/Projects.jsx`):
```javascript
const [activeFilter, setActiveFilter] = useState("all");

const filteredProjects = activeFilter === "all" 
  ? projects 
  : projects.filter(project => project.category === activeFilter);
```
-   **State**: `activeFilter` keeps track of the currently selected button.
-   **Logic**: If "all" is selected, show everything. Otherwise, show only projects matching the selected category.
