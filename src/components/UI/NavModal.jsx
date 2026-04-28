import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NavModal = ({ isOpen, onClose, links, setActive }) => {
	const modalRef = useRef();
	const linksRef = useRef([]);

	useEffect(() => {
		if (!modalRef.current || !isOpen) return;

		gsap.fromTo(
			modalRef.current,
			{ x: '100%', opacity: 0 },
			{ x: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
		);

		gsap.fromTo(
			linksRef.current,
			{ x: 30, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.07,
				delay: 0.15,
				duration: 0.35,
				ease: 'power3.out',
			}
		);
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="navModal-overlay" onClick={onClose}>
			<div
				className="navModal"
				ref={modalRef}
				onClick={(e) => e.stopPropagation()}
			>
				{/* HEADER */}
				<div className="navModal-header">
					<p>Menu</p>
					<button className="close-btn" onClick={onClose}>
						✕
					</button>
				</div>

				{/* LINKS */}
				<ul className="navModal-links">
					{links.map((link, i) => (
						<li
							key={link.id}
							ref={(el) => (linksRef.current[i] = el)}
							className="navModal-item"
						>
							{link.isModal ? (
								<button
									onClick={() => {
										setActive('Contact');
										link.onClick?.();
										onClose();
									}}
								>
									{link.id}
								</button>
							) : (
								<a
									href={link.href}
									onClick={() => {
										setActive(link.id);
										onClose();
									}}
								>
									{link.id}
								</a>
							)}
						</li>
					))}
				</ul>

				{/* FOOTER */}
				<div className="navModal-footer">
					<p>© {new Date().getFullYear()} Portfolio</p>
				</div>
			</div>
		</div>
	);
};

export default NavModal;