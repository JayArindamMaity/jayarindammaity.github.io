import React, { useEffect, useRef } from 'react';
import './gameoflife.css'

// the code that you see below is to immitate Conway's Game of Life XD

const GameOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let grid: number[][] = [];
    let cols = 0;
    let rows = 0;
    const resolution = 10;

    // --- Grid Logic ---
    const make2DArray = (c: number, r: number) => {
      const arr = new Array(c);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(r).fill(0);
      }
      return arr;
    };

    const initGrid = (c: number, r: number) => {
      const arr = make2DArray(c, r);
      for (let i = 0; i < c; i++) {
        for (let j = 0; j < r; j++) {
          arr[i][j] = Math.random() > 0.6 ? 1 : 0;
        }
      }
      return arr;
    };

    const handleResize = () => {
      if (container && canvas) {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        cols = Math.ceil(canvas.width / resolution);
        rows = Math.ceil(canvas.height / resolution);
        grid = initGrid(cols, rows);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const col = Math.floor(x / resolution);
      const row = Math.floor(y / resolution);

      const extent = 2;
      for (let i = -extent; i <= extent; i++) {
        for (let j = -extent; j <= extent; j++) {
          const c = col + i;
          const r = row + j;
          if (c >= 0 && c < cols && r >= 0 && r < rows) {
            if (Math.random() > 0.5) grid[c][r] = 1;
          }
        }
      }
    };

    const computeNextGen = (currentGrid: number[][]) => {
      const next = make2DArray(cols, rows);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const state = currentGrid[i][j];
          let neighbors = 0;
          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              const col = (i + x + cols) % cols;
              const row = (j + y + rows) % rows;
              neighbors += currentGrid[col][row];
            }
          }
          neighbors -= state;

          if (state === 0 && neighbors === 3) next[i][j] = 1;
          else if (state === 1 && (neighbors < 2 || neighbors > 3)) next[i][j] = 0;
          else next[i][j] = state;
        }
      }
      return next;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      ctx.fillStyle = getComputedStyle(container).color;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] === 1) {
            ctx.fillRect(i * resolution, j * resolution, resolution - 1, resolution - 1);
          }
        }
      }
    };

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      if (frameCount % 4 !== 0) {
        draw(); 
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      grid = computeNextGen(grid);
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    const handleTouch = (e: TouchEvent) => {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        handleMouseMove(mouseEvent);
    }
    canvas.addEventListener('touchmove', handleTouch);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('touchmove', handleTouch);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full relative overflow-hidden transition-colors duration-300 gameoflife"
      style={{ 
        backgroundColor: 'var(--background-color)',
        color: 'var(--primary-color)' 
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="block"
      />
    </div>
  );
};

export default GameOfLife;