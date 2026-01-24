import { useState } from "react";

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Generate WebP source if the original is jpg/png
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const isOptimizable = webpSrc !== src;

  // Initialize with WebP if optimizable, otherwise original
  const [currentSrc, setCurrentSrc] = useState(isOptimizable ? webpSrc : src);

  const handleError = () => {
    // If failed to load WebP, fallback to original
    if (currentSrc === webpSrc && isOptimizable) {
      setCurrentSrc(src);
    } else {
      setError(true); // Both failed
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
