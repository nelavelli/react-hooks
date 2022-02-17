import React, { useEffect, useRef, useState } from 'react';

export default function ImageToggleOnScroll({ primaryImg, secondaryImg }) {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(true);

  const isInview = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInview());
  };

  useEffect(() => {
    setLoading(false);
    setInView(isInview());
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <img
      src={loading ? '/static/loading.gif' : inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
      width="300"
      height="300"
    />
  );
}
