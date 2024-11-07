"use client"

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { navigationItems } from '@/infra/data/navbar-data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav className="bg-slate-200 z-500 w-full p-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row w-full justify-between gap-4 lg:items-center">
        {/* Logo section remains unchanged */}
        <div className="flex text-2xl items-center">
          <Image src={images.logos.logo1} width={100} height={100} alt="Logo" className="w-[3em] mr-2" />
          <div className="font-bold flex flex-col">
            <span className='text-3xl text-primary'>Universidade</span>
            <span className="text-sm font- text-primary-dark">São Martinho de Lima</span>
          </div>
        </div>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
        </div>
        <div className=''>
          <ul className={`md:flex md:items-center absolute md:static w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-[20%]' : 'transform -translate-y-[5000%] md:translate-y-0'}`}>
            {navigationItems.map((item, index) => (
              <li key={index}
                className={`md:ml-4 ${Array.isArray(item.children) ? "relative" : ""} group`}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <div
                  className="nav-link space-x-2 w-full flex-row flex items-center justify-start hover-anim py-2 "
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <motion.span
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </motion.span>
                  )}
                </div>

                <AnimatePresence>
                  {item.children && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${Array.isArray(item.children) ? "left-0" : "-right-5"}  max-w-[90vw] mt-3 bg-nav rounded-md shadow-lg py-1 z-50`}
                      style={{ width: Array.isArray(item.children) ? '12rem' : '100vw' }}
                    >
                      {Array.isArray(item.children) ? (
                        item.children.map((childItem, childIndex) => (
                          <motion.div
                            key={childIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              href={childItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/10 backdrop-blur-sm hover:text-primary"
                            >
                              {childItem.label}
                            </Link>
                          </motion.div>
                        ))
                      ) : (
                        <div className="p-4">{item.children}</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
