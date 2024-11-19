/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { navigationItems } from '@/infra/data/navbar-data';
import { routes } from '@/infra/routes.vars';

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ activeDropdown, setActiveDropdown ] = useState<number | null>(null);
	const [ isScrolled, setIsScrolled ] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`w-full p-4 fixed z-[10000] ${isScrolled
				? ' top-0 left-0 bg-white animate-slide-down'
				: 'bg-transparent text-white'}`}
		>
			<div className="flex flex-col justify-between w-full gap-4 mx-auto containers lg:flex-row lg:items-center">
				<div
					onClick={() => (window.location.href = routes.HOME_ROUTE)}
					className="flex items-center text-2xl cursor-pointer"
				>
					<Image src={images.logos.logo1} width={100} height={100} alt="Logo" className="w-[3em] mr-2" />
					<div className={`flex flex-col font-bold ${!isScrolled ? 'text-white' : 'text-primary'}`}>
						<span className="text-3xl ">Universidade</span>
						<span className="text-sm ">São Martinho de Lima</span>
					</div>
				</div>

				<div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<FontAwesomeIcon icon={faTimes} size="lg" />
					) : (
						<FontAwesomeIcon icon={faBars} size="lg" />
					)}
				</div>
				<div className="">
					<ul
						className={`md:flex md:items-center absolute md:static w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-transform duration-300 ease-in-out ${isOpen
							? 'transform translate-y-0'
							: 'transform -translate-y-full md:translate-y-0'}`}
					>
						{navigationItems.map((item, index) => (
							<li
								key={index}
								className={`md:ml-4 ${Array.isArray(item.children) ? 'relative' : ''} group`}
								onMouseEnter={() => setActiveDropdown(index)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<div
									onClick={() => (window.location.href = item.href)}
									className="flex flex-row items-center justify-start w-full py-2 space-x-2 nav-link hover-anim "
								>
									<span>{item.label}</span>
									{item.children && (
										<motion.span
											animate={{ rotate: activeDropdown === index ? 180 : 0 }}
											transition={{ duration: 0.2 }}
										>
											<FontAwesomeIcon icon={faAngleDown} />
										</motion.span>
									)}
								</div>

								<AnimatePresence>
									{item.children &&
									activeDropdown === index && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.2 }}
											className={`absolute ${Array.isArray(item.children)
												? 'left-0'
												: '-right-5 lg:right-0 xl:-right-[1rem] 2xl:right-[6rem]'} max-w-[80vw] mt-3 bg-nav   shadow-lg py-1 z-50`}
											style={{ width: Array.isArray(item.children) ? '12rem' : '90vw' }}
											onMouseEnter={() => setActiveDropdown(index)}
											onMouseLeave={() => setActiveDropdown(null)}
										>
											{Array.isArray(item.children) ? (
												item.children.map((childItem, childIndex) => (
													<motion.div
														key={childIndex}
														className="z-500"
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: childIndex * 0.05 }}
													>
														<Link
															href={childItem.href}
															className="block px-4 py-2 text-sm text-black hover:bg-white/30 backdrop-blur-lg "
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
