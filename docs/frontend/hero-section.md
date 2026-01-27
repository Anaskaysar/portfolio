# Hero Section Documentation

The Hero Section is the first thing users see. It introduces the developer and provides quick links to social profiles and the tech stack.

## Component Structure
- **File**: `frontend/src/components/Hero.jsx`
- **Data Source**: `frontend/src/lib/data.js` (Currently manages `personalInfo` and `skills`)

## Design Variants
The Hero Section supports multiple profile image styles via the `heroVariant` constant.

### 1. Organic Blob (Default)
- **Features**: Morphing animation (8s duration) using CSS `border-radius`.
- **Customization**: Defined in `index.css` via `@keyframes blob-animation`.

### 2. Classic Circle
- **Features**: Traditional circular profile image using `rounded-full`.

## Data Management
While **Projects** are fetched from the Django API, the **Hero Section** content (name, tagline, bio) is still managed via `src/lib/data.js`. This allows for quick edits to static text while keeping the project portfolio dynamic.
