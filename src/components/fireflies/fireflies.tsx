import React, { useEffect, useRef } from "react";
import "./fireflies.css";

interface FirefliesProps {
  spawnRate?: number;
  dispflies?: boolean;
}

const Fireflies: React.FC<FirefliesProps> = ({ spawnRate = 2 , dispflies = true }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const firefly = document.createElement("div");
      firefly.className = "firefly";

      // Random horizontal position
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.bottom = `0`;

      // Random animation duration & delay
      const duration = 5 + Math.random() * 5;
      firefly.style.animationDuration = `${duration}s`;

      container.appendChild(firefly);

      // Remove firefly after animation ends
      setTimeout(() => {
        firefly.remove();
      }, duration * 1000);
    }, 1000 / spawnRate);

    return () => clearInterval(interval);
  }, [spawnRate]);

  if (dispflies) {
    return <div className="fireflies-container" ref={containerRef}></div>;
  }
  
};

export default Fireflies;
