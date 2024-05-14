import React, { useRef, useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ src }) => {
  const canvasRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawCanvas = (context) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 45;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circular image
      const img = new Image();
      img.src = src;
      img.onload = () => {
        context.save();
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.closePath();
        context.clip();
        context.drawImage(img, centerX - radius, centerY - radius, radius * 2, radius * 2);
        context.restore();
      };
    };

    if (isIntersecting) {
      drawCanvas(context);
    }

    // Clean up function
    return () => {
      setIsIntersecting(false); // Reset intersection state
    };
  }, [src, isIntersecting]); // Re-run the drawing whenever the source image or intersection state changes

  // Callback function for IntersectionObserver
  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    // Clean up function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="circular-progress-container">
      <canvas ref={canvasRef} className="circular-progress" width={100} height={100}></canvas>
    </div>
  );
};

export default CircularProgressBar;
