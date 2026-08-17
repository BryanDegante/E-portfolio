import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/ClearLogo.png';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import ContactModal from './UI/ContactModal';
import NavModal from './UI/NavModal';

const Nav = () => {
	const [active, setActive] = useState('Home');
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
			{ threshold: 0.3 }
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


	const links = [
		{ id: 'Home', href: '/' },
		{ id: 'About', href: '#About' },
		{ id: 'Projects', href: '#Projects' },
		{
			id: 'Contact',
			isModal: true,
			onClick: () => setIsContactOpen(true),
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

						{/* DESKTOP LINKS */}
						<ul className="nav-links">
							{links.map((link) => (
								<li key={link.id}>
									{link.isModal ? (
										<button
											ref={contactBtnRef}
											onClick={() => {
												setActive('Contact');
												setIsContactOpen(true);
											}}
											className={`link__hover--effect ${
												active === link.id
													? 'active-link'
													: ''
											}`}
										>
											{link.id}
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
											{link.id}
										</a>
									)}
								</li>
							))}
						</ul>

						{/* HAMBURGER */}
						<div
							ref={hamburgerRef}
							className="hamburger"
							onClick={() =>
								setIsMobileMenuOpen((prev) => !prev)
							}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
				</nav>
			</div>

			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
				triggerRef={contactBtnRef}
			/>

			<NavModal
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				links={links}
				setActive={setActive}
			/>
		</>
	);
};

export default Nav;