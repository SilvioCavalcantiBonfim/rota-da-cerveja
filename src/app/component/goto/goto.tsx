'use client';

import React, { useCallback, useEffect, useState } from "react";

export const Goto: React.FunctionComponent = () => {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);
  }, []);

  useEffect(() => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <a href="#" className={`goto ${scrollY > 175? 'opacity-100': 'opacity-0'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="" width={32} height={32}>
    <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
    </svg>
  </a>
}