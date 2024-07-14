import React, { useEffect, useRef, useState } from "react";

interface LazyLoadImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  src,
  alt,
  className,
  placeholderSrc,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc || "");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if the image is already cached in local storage
    const cachedImage = localStorage.getItem(src);

    if (cachedImage) {
      // If cached to use the cached image
      setImageSrc(cachedImage);
    } else {
      // Create a new IntersectionObserver to observe when the image enters the viewport
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Create a new image object and set its source to the provided src
            const img = new Image();
            img.src = src;
            img.onload = () => {
              // Once the image is loaded, cache it in local storage and update the state
              localStorage.setItem(src, src);
              setImageSrc(src);
            };
            // Disconnect the observer once the image has been loaded
            observer.disconnect();
          }
        },
        // The threshold at which the observer callback should be executed
        { threshold: 0.1 }
      );

      const currentImgRef = imgRef.current;
      if (currentImgRef) {
        // Start observing the image element
        observer.observe(currentImgRef);
      }

      return () => {
        // Clean up the observer when the component unmounts or the src changes
        if (currentImgRef) {
          observer.unobserve(currentImgRef);
        }
      };
    }
  }, [src]);

  return <img ref={imgRef} src={imageSrc} alt={alt} className={className} />;
};

export default LazyLoadImage;
