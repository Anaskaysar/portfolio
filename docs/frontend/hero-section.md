# Hero Section Documentation

The Hero Section is the first thing users see when they visit the portfolio. It introduces the developer, provides quick links to social profiles and the resume, and showcases the core tech stack.

## Component Structure

- **File**: `frontend/src/components/Hero.jsx`
- **Styles**: `frontend/src/index.css`
- **Data Source**: `frontend/src/lib/data.js` (personalInfo)

## Design Variants

The Hero Section supports multiple visual styles for the profile image. This is controlled by the `heroVariant` constant within the component.

### 1. Organic Blob (Current Default)
- **Class**: `.blob-shape`, `.animate-blob`, `.blob-outline`
- **Features**: 
    - Irregular, organic shape created via `border-radius`.
    - Subtle morphing animation (8s duration).
    - Soft outline that adapts to light/dark modes.

### 2. Classic Circle
- **Class**: `rounded-full`
- **Features**: 
    - Traditional circular profile image.
    - Clean, professional look.

## How to Toggle Styles

To switch between styles, modify the `heroVariant` constant in [Hero.jsx](file:///Users/kaysarulanasapurba/Desktop/My Codes/portfolio-project/frontend/src/components/Hero.jsx):

```javascript
// frontend/src/components/Hero.jsx

const heroVariant = 'blob'; // Options: 'blob', 'circle'
```

## Customizing the Blob Shape

The blob shape is defined in [index.css](file:///Users/kaysarulanasapurba/Desktop/My Codes/portfolio-project/frontend/src/index.css) using the `border-radius` property with eight values (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`).

You can use online tools like [Fancy Border Radius Generator](https://9elements.github.io/fancy-border-radius/) to generate new organic shapes.

## Animation

The morphing effect is handled by the `@keyframes blob-animation` in `index.css`. It smoothly transitions between two different `border-radius` states.

```css
@keyframes blob-animation {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}
```
