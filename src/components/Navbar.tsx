/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { navigationItems } from '@/infra/data/navbar-data';
import { routes } from '@/infra/routes.vars';
import { useTranslation } from 'react-i18next';
// import { useLanguage } from '@/contexts/lang-context';

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const [ isOpen, setIsOpen ] = useState(false);
	const [ activeDropdown, setActiveDropdown ] = useState<number | null>(null);
	const [ isScrolled, setIsScrolled ] = useState(false);

	const currentLang = i18n.language || 'pt'; // obter a língua atual

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

	return (
		<nav
			className={`w-full px-4 py-1 fixed z-[10000] ${isScrolled
				? ' top-0 left-0 bg-white shadow-md animate-slide-down'
				: 'bg-transparent text-white'}`}
		>
			<div className="flex flex-col justify-between w-full gap-4 px-6 mx-auto lg:flex-row lg:items-center">
				{/* logo e os items  */}

				<div className="flex">
					<div
						onClick={() => (window.location.href = `${routes.HOME_ROUTE}`)}
						className="flex items-center text-2xl cursor-pointer me-12"
					>
						<Image src={images.logos.logo1} width={100} height={100} alt="Logo" className="w-[2em] mr-2" />
						<div
							className={`flex my-auto flex-col justify-center font-semibold ${!isScrolled
								? 'text-white'
								: 'text-primary'}`}
						>
							<span className="text-[16px] -mt-[.1rem]">{t('navbar.institutoSuperior')}</span>
							<span className="text-[10px] hidden -mt-[1.3rem] ">{t('navbar.politecnico')}</span>
							<span className="text-[16px] -mt-[.8rem] ">{t('navbar.saoMartinhoDeLima')}</span>
						</div>
					</div>

					<div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<FontAwesomeIcon icon={faTimes} size="lg" />
						) : (
							<FontAwesomeIcon icon={faBars} size="lg" />
						)}
					</div>
					<div className="flex items-center my-auto ">
						<ul
							className={`md:flex bg-red-4000 md:items-center my-auto absolute md:static w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-transform duration-300 ease-in-out ${isOpen
								? 'transform translate-y-0'
								: 'transform -translate-y-full md:translate-y-0'}`}
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
										<span className="font-[600] my-auto text-[12px]  uppercase tracking-wider">
											{t(item.label)}
										</span>
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
																href={`/${currentLang}${childItem.href}`} // incluir a língua na rota
																className="block px-4 py-2 text-sm text-black hover:bg-white/30 backdrop-blur-lg "
															>
																{t(childItem.label)}
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
				{/* Icone de search e EN e PT options  */}
				<div className="flex items-center my-auto ml-4 space-x-4 ">
					<div className="flex my-auto space-x-2">
						<span className="my-auto cursor-pointer" onClick={() => changeLanguage('en')}>
							EN
						</span>
						<span>|</span>
						<span className="my-auto cursor-pointer" onClick={() => changeLanguage('pt')}>
							PT
						</span>
					</div>
					<FontAwesomeIcon icon={faSearch} size="lg" className="cursor-pointer" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
