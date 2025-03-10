/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';
// import { faBars, faTimes, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { navigationItems, searchItems } from '@/infra/data/navbar-data';
import { routes } from '@/infra/routes.vars';
import { useTranslation } from 'react-i18next';
import InputDefault from './input-default/input';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
// import { useLanguage } from '@/contexts/lang-context';

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	// const currentLang = i18n.language || 'pt'; // obter a língua atual

	// const { setLang } = useLanguage();

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

	useEffect(
		() => {
			if (isSearchOpen) {
				document.body.style.overflowY = 'hidden';
			} else {
				document.body.style.overflowY = 'auto';
			}
		},
		[isSearchOpen]
	);

	const changeLanguage = (lng: string) => {
		// setLang(lng);
		i18n.changeLanguage(lng);
		localStorage.setItem('lang', lng); // armazenar a língua selecionada
	};
	// const changeLanguage = (lng: string) => {
	// 	const path = pathname;
	// 	const newPath = path.replace(/^\/(en|pt)/, `/${lng}`);
	// 	router.push(newPath);
	// 	i18n.changeLanguage(lng);
	// 	localStorage.setItem('lang', lng); // armazenar a língua selecionada
	// };

	const navItems = navigationItems(t); // obter itens da navbar com a língua atual
	const searchResults = searchItems(t); // obter itens pesquisáveis com a língua atual

	const filteredSearchResults = searchResults.filter((item) =>
		item.label.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setIsSearchOpen(false);
		}
	};

	return (

		// <nav className = {`w-full px-4 py-1 fixed z-[10000] text-black bg-white shadow-md`}

		// >
		<nav
			className={`w-full px-4 py-1 fixed z-[10000] ${isScrolled
				? ' top-0 left-0 bg-white shadow-md aanimate-slide-down'
				: 'bg-transparent text-white'}`}
		>
			<div
				className={`flex flex-col  justify-between w-full gap-4 sm:px-6 mx-auto lg:flex-row lg:items-center`}
			>
				{/* logo e os items  */}

				<div className="flex w-full my-auto">
					<div className="my-auto md:hidden me-3" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<FaTimes className='text-lg' />
						) : (
							<FaBars className='text-lg' />
						)}
					</div>
					<div
						onClick={() => (window.location.href = `${routes.HOME_ROUTE}`)}
						className="flex items-center my-auto text-2xl cursor-pointer "
					>
						<Image src={isScrolled ? images.logos.logos_ispsml.logo_1_png : images.logos.logos_ispsml.logo_2_png} width={1000} height={1000} alt="Logo" className="h-[2em] hidden lg:flex w-full mr-2" />
						<Image src={images.logos.logo1} width={1000} height={1000} alt="Logo" className="h-[1.5em] lg:hidden w-full" />

					</div>


					<div className="flex items-center my-auto ">
						<ul
							className={`md:flex transform containers  ${isScrolled && "bg-white"}  lg:translate-y-0 right-0 bg-red-4000 md:items-center my-auto absolute md:static w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-transform duration-300 ease-in-out ${isOpen
								? ' -translate-y-5 py-4  shadow-lg fixed top-0 left-0 '
								: '  lg:translate-y-0 translate-y-[-400px]'}`}
						>
							{navItems.map((item, index) => (
								<li
									key={index}
									className={`md:ml-4 -mt-1.5 bg-sky-9000 my-auto ${Array.isArray(item.children)
										? 'relative'
										: ''} group`}
									onMouseEnter={() => setActiveDropdown(index)}
									onMouseLeave={() => setActiveDropdown(null)}
								>
									<div
										onClick={() => (window.location.href = item.href)}
										className="flex flex-row items-center justify-start w-full p-0 m-0 space-x-2 bg-bblack nav-link hover-anim "
									>
										<span className="font-[600] my-auto lg:text-[12px] text-[10px]  uppercase tracking-wider">
											{t(item.label)}
										</span>
										{/* </div>* item.children && (  */}
										{/* // <motion.span
											// 	animate={{ rotate: activeDropdown === index ? 180 : 0 }}
											// 	transition={{ duration: 0.2 }}
											// >
												// <FaAngleDown className='text-sm lg:text-lg' />
											// </motion.span>
										// )} */}
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
														: ' -left-16'}  mt-3 bg-nav   shadow-lg py-1 z-50`}
													style={{
														width: Array.isArray(item.children) ? 'auto' : '80vw',
														minWidth: '20rem'
													}}
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
																	target={childItem?.target}
																	href={`${childItem.href}`} // incluir a língua na rota
																	className="block px-4 py-2 text-sm text-black hover:bg-white/30 backdrop-blur-lg "
																>
																	{t(childItem.label)}
																</Link>
															</motion.div>
														))
													) : (
														<div className="p-4 text-sm">{item.children}</div>
													)}
												</motion.div>
											)}
									</AnimatePresence>
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center space-x-4 ms-auto ">
						<div className="flex my-auto space-x-2">
							<span className="my-auto cursor-pointer" onClick={() => changeLanguage('en')}>
								EN
							</span>
							<span>|</span>
							<span className="my-auto cursor-pointer" onClick={() => changeLanguage('pt')}>
								PT
							</span>
						</div>
						<FaSearch

							className="text-sm cursor-pointer"
							onClick={() => setIsSearchOpen(true)}
						/>
					</div>
				</div>
				{/* Icone de search e EN e PT options  */}

			</div>
			<AnimatePresence>
				{isSearchOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-black bg-opacity-[.8]"
						onClick={handleOverlayClick}
					>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className="fixed top-0 right-0 z-50 w-full h-full max-w-md p-4 shadow-lg bg-primary-footer"
						>
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-xl font-semibold text-white">Pesquisar</h2>
								<FaTimes
									className="text-lg text-white cursor-pointer"
									onClick={() => setIsSearchOpen(false)}
								/>
							</div>
							<InputDefault
								placeholder="Pesquise alguma coisa"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<ul className="mt-4">
								{searchQuery &&
									filteredSearchResults.map((item, index) => (
										<li key={index} className="mb-2">
											<Link href={item.href} className="text-sm text-white lg:text-lg hover:underline">
												{item.label}
											</Link>
										</li>
									))}
							</ul>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav >
	);
};

export default Navbar;
