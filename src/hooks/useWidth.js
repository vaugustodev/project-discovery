import { useState, useEffect } from 'react';

export const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, []);

  return windowWidth;
}