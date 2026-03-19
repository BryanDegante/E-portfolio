import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const ContactModalContent = () => {
	const formRef = useRef();
	const containerRef = useRef();
	const btnRef = useRef();

	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);

	const handleMouseMove = (e) => {
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		containerRef.current.style.setProperty('--x', `${x}px`);
		containerRef.current.style.setProperty('--y', `${y}px`);
	};

	useEffect(() => {
		const btn = btnRef.current;
		if (!btn) return;

		const move = (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			gsap.to(btn, { x: x * 0.25, y: y * 0.25 });
		};

		const reset = () => {
			gsap.to(btn, { x: 0, y: 0 });
		};

		btn.addEventListener('mousemove', move);
		btn.addEventListener('mouseleave', reset);

		return () => {
			btn.removeEventListener('mousemove', move);
			btn.removeEventListener('mouseleave', reset);
		};
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				setSent(true);
				setLoading(false);
				formRef.current.reset();

				gsap.fromTo(
					formRef.current,
					{ scale: 1 },
					{ scale: 1.05, yoyo: true, repeat: 1 },
				);

				setTimeout(() => setSent(false), 4000);
			})
			.catch(() => {
				setLoading(false);
				alert('Something went wrong.');
			});
	};

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			className="modal__content"
		>
			<h2 className="contact__title">Let’s Work Together</h2>

			<form ref={formRef} onSubmit={sendEmail} className="contact__form">
				{sent && <div className="success__message">Sent ✓</div>}

				<div className="form__group">
					<input name="user_name" placeholder=" " required />
					<label>Name</label>
				</div>

				<div className="form__group">
					<input name="user_email" placeholder=" " required />
					<label>Email</label>
				</div>

				<div className="form__group">
					<textarea name="message" placeholder=" " required />
					<label>Message</label>
				</div>

				<button ref={btnRef} className="btn__primary">
					{loading ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</div>
	);
};

export default ContactModalContent;
