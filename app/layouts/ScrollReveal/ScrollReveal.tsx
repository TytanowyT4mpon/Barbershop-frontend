'use client'

import React, { useEffect, useRef, useState } from 'react'
import style from './ScrollReveal.module.css'

interface ScrollRevealProps{
    children: React.ReactNode;
}

const ScrollReveal:  React.FC<ScrollRevealProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setIsVisible(true);
                if (domRef.current) observer.unobserve(domRef.current);
                }
            });
            }, {
            threshold: 0.30,
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [])

  return (
    <div
      ref={domRef}
      className={`${style.revealContainer} ${isVisible ? style.isVisible : ""}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
