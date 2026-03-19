import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ContactModalContent from './ContactModelContent';
const ContactModal = ({ isOpen, onClose, triggerRef }) => {
	const overlayRef = useRef();
	const modalRef = useRef();

	useEffect(() => {
		if (!isOpen) return;

		const rect = triggerRef?.current?.getBoundingClientRect();

		const originX = rect
			? rect.left + rect.width / 2
			: window.innerWidth / 2;

		const originY = rect
			? rect.top + rect.height / 2
			: window.innerHeight / 2;

		const tl = gsap.timeline();

		tl.fromTo(
			overlayRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3 },
		);

		tl.fromTo(
			modalRef.current,
			{
				opacity: 0,
				scale: 0.6,
				x: originX - window.innerWidth / 2,
				y: originY - window.innerHeight / 2,
			},
			{
				opacity: 1,
				scale: 1,
				x: 0,
				y: 0,
				duration: 0.6,
				ease: 'power4.out',
			},
			'-=0.2',
		);

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleEsc);
		return () => window.removeEventListener('keydown', handleEsc);
	}, [onClose]);

	if (!isOpen) return null;

	return (
		<div ref={overlayRef} className="modal__overlay" onClick={onClose}>
			<div
				ref={modalRef}
				className="modal__container"
				onClick={(e) => e.stopPropagation()}
			>
				<button className="modal__close" onClick={onClose}>
					✕
				</button>

				<ContactModalContent />
			</div>
		</div>
	);
};

export default ContactModal;
