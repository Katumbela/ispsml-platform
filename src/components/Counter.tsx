"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 1000);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        start = end;
      }
      setCount(Math.floor(start));
    }, 1000);
    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl font-bold">{count}</h2>
      <p>{label}</p>
    </motion.div>
  );
};

export default Counter;
