import React, { useState, useEffect } from 'react';

const Nav = () => {
	const [active, setActive] = useState('Home');

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
			{ threshold: 0.6 }, // 50% of section visible
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
		<nav className="glass-nav">
			<div className="nav-content">
				<div className="logo">
					<img src="ClearLogo.png" alt="" />
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
	);
};

export default Nav;
