import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/ClearLogo.png';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const Nav = () => {
	const [active, setActive] = useState('Home');
	const navContainerRef = useRef(null);

	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const { y: currentScrollY } = useWindowScroll();

	// Floating nav scroll logic
	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove('floating-nav');
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add('floating-nav');
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add('floating-nav');
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	// GSAP animation for nav sliding
	useEffect(() => {
		if (navContainerRef.current) {
			gsap.to(navContainerRef.current, {
				y: isNavVisible ? 0 : -120,
				opacity: isNavVisible ? 1 : 0,
				duration: 0.25,
				ease: 'power2.out',
				pointerEvents: isNavVisible ? 'auto' : 'none',
			});
		}
	}, [isNavVisible]);

	// Active link highlighting
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

	const links = [
		{ id: 'Home', href: '/' },
		{ id: 'About', href: '#About' },
		{ id: 'Projects', href: '#Projects' },
		{ id: 'Contact', href: '#Contact' },
	];

	return (
		<div ref={navContainerRef} className="nav-Container">
			<nav className="glass-nav">
				<div className="nav-content">
					<div className="logo">
						<img src={logo} alt="Logo" />
					</div>
					<ul className="nav-links">
						{links.map((link) => (
							<li key={link.id}>
								<a
									href={link.href}
									className={`link__hover--effect ${
										active === link.id ? 'active-link' : ''
									}`}
								>
									{link.id}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
