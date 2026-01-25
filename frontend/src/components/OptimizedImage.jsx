import { useState } from "react";

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Direct use of src without WebP conversion for stability with backend images
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`transition-opacity duration-500 ease-in-out opacity-100 ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
