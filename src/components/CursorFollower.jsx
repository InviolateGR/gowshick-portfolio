import React, { useEffect, useState } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const follow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      requestAnimationFrame(follow);
    };
    follow();
  }, [position]);

  return (
    <div
      className="cursor-follower"
      style={{
        transform: `translate3d(${smoothPos.x}px, ${smoothPos.y}px, 0)`,
      }}
    />
  );
};

export default CursorFollower;
