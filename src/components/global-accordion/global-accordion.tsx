import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlobalAccordionProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

const GlobalAccordion: React.FC<GlobalAccordionProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full mb-4 ${isOpen ? 'col-span-full' : ''}`}>
      {/* Header Section */}
      <div 
        onClick={toggleAccordion} 
        className="flex items-center justify-between p-4 bg-gray-200 rounded-lg cursor-pointer"
      >
        {header}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          ⌄
        </motion.div>
      </div>

      {/* Content Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full p-4 mt-2 overflow-hidden text-white bg-blue-600"
          >
            {content} 
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalAccordion;
