"use client"

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, label }) => {
  
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 1000);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          start = end;
        }
        // setCount(Math.floor(start));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div ref={counterRef} className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl font-semibold">
        <CountUp duration={4} className="counter" end={end} />
      </h2>
      <p>{label}</p>
    </motion.div>
  );
};

export default Counter;
