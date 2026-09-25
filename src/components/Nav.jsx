import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import NavModal from './UI/NavModal';
import { useLocation } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

const Nav = ({ openContact, language, setLanguage }) => {
	const [active, setActive] = useState('Home');

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const navContainerRef = useRef(null);
	const contactBtnRef = useRef(null);
	const hamburgerRef = useRef(null);

	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (!navContainerRef.current) return;

		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove('floating-nav');
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add('floating-nav');
		} else {
			setIsNavVisible(true);
			navContainerRef.current.classList.add('floating-nav');
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY]);

	useEffect(() => {
		if (!navContainerRef.current) return;

		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -120,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.25,
			ease: 'power2.out',
			pointerEvents: isNavVisible ? 'auto' : 'none',
		});
	}, [isNavVisible]);

	useEffect(() => {
		const sections = document.querySelectorAll('section[id]');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!hamburgerRef.current) return;

		const lines = hamburgerRef.current.querySelectorAll('span');

		gsap.to(lines[0], {
			rotate: isMobileMenuOpen ? 45 : 0,
			y: isMobileMenuOpen ? 6 : 0,
			duration: 0.25,
		});

		gsap.to(lines[1], {
			opacity: isMobileMenuOpen ? 0 : 1,
			duration: 0.2,
		});

		gsap.to(lines[2], {
			rotate: isMobileMenuOpen ? -45 : 0,
			y: isMobileMenuOpen ? -6 : 0,
			duration: 0.25,
		});
	}, [isMobileMenuOpen]);

	const links =
		location.pathname === '/services'
			? [
					{
						id: 'Home',
						label: {
							en: 'Home',
							es: 'Inicio',
						},
						href: '/',
					},
					{
						id: 'Tiers',
						label: {
							en: 'Tiers',
							es: 'Precios',
						},
						href: '#Tiers',
					},
					{
						id: 'Contact',
						label: {
							en: 'Contact',
							es: 'Contacto',
						},
						isModal: true,
						onClick: () => openContact(contactBtnRef),
					},
				]
			: location.pathname === '/privacy'
				? [
						{
							id: 'Home',
							label: {
								en: 'Home',
								es: 'Inicio',
							},
							href: '/',
						},
						{
							id: 'Services',
							label: {
								en: 'Services',
								es: 'Servicios',
							},
							href: '/services',
						},
						{
							id: 'Contact',
							label: {
								en: 'Contact',
								es: 'Contacto',
							},
							isModal: true,
							onClick: () => openContact(contactBtnRef),
						},
					]
				: [
						{
							id: 'Services',
							label: {
								en: 'Services',
								es: 'Servicios',
							},
							href: '/services',
						},
						{
							id: 'About',
							label: {
								en: 'About',
								es: 'Sobre mí',
							},
							href: '#About',
						},
						{
							id: 'Projects',
							label: {
								en: 'Projects',
								es: 'Proyectos',
							},
							href: '#Projects',
						},
						{
							id: 'Contact',
							label: {
								en: 'Contact',
								es: 'Contacto',
							},
							isModal: true,
							onClick: () => openContact(contactBtnRef),
						},
					];

	return (
		<>
			<div ref={navContainerRef} className="nav-Container">
				<nav className="glass-nav">
					<div className="nav-content">
						<div className="logo">
							<img src={logo} alt="Logo" />
						</div>

						<ul className="nav-links">
							{links.map((link) => (
								<li key={link.id}>
									{link.isModal ? (
										<button
											ref={contactBtnRef}
											onClick={() => {
												setActive('Contact');
												openContact(contactBtnRef);
											}}
											className={`link__hover--effect ${
												active === link.id
													? 'active-link'
													: ''
											}`}
										>
											{link.label[language]}
										</button>
									) : (
										<a
											href={link.href}
											className={`link__hover--effect ${
												active === link.id
													? 'active-link'
													: ''
											}`}
										>
											{link.label[language]}
										</a>
									)}
								</li>
							))}
						</ul>
						<div className="language-switcher nav-switcher">
							<button
								className={language === 'en' ? 'active' : ''}
								onClick={() => setLanguage('en')}
							>
								<ReactCountryFlag
									countryCode="US"
									svg
									className="language__flag"
								/>
								EN
							</button>

							<span>/</span>

							<button
								className={language === 'es' ? 'active' : ''}
								onClick={() => setLanguage('es')}
							>
								<ReactCountryFlag
									countryCode="MX"
									svg
									className="language__flag"
								/>
								ES
							</button>
						</div>

						<div
							ref={hamburgerRef}
							className="hamburger"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
				</nav>
			</div>

			<NavModal
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				links={links}
				setActive={setActive}
				language={language}
				setLanguage={setLanguage}
			/>
		</>
	);
};

export default Nav;
