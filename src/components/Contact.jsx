// Contact.jsx — ULTRA PREMIUM + SCROLLTRIGGER
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const sectionRef = useRef();
	const formRef = useRef();
	const btnRef = useRef();

	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);

	// 🔥 ScrollTrigger Animations
	useEffect(() => {
		const ctx = gsap.context(() => {
			// Parallax on left text
			gsap.to('.contact__left', {
				y: -40,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			});

			// Main reveal
			gsap.from('.contact__left', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
				},
				opacity: 0,
				x: -60,
				duration: 1,
				ease: 'power3.out',
			});

			gsap.from('.contact__form', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
				},
				opacity: 0,
				y: 80,
				duration: 1.1,
				ease: 'power3.out',
				delay: 0.2,
			});

			gsap.from('.form__group', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
				opacity: 0,
				y: 30,
				duration: 0.6,
				stagger: 0.12,
				ease: 'power2.out',
				delay: 0.4,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const btn = btnRef.current;
		if (!btn) return;

		const handleMove = (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			gsap.to(btn, {
				x: x * 0.25,
				y: y * 0.25,
				duration: 0.3,
				ease: 'power3.out',
			});
		};

		const reset = () => {
			gsap.to(btn, {
				x: 0,
				y: 0,
				duration: 0.4,
				ease: 'power3.out',
			});
		};

		btn.addEventListener('mousemove', handleMove);
		btn.addEventListener('mouseleave', reset);

		return () => {
			btn.removeEventListener('mousemove', handleMove);
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
				setLoading(false);
				setSent(true);
				formRef.current.reset();

				// 🔥 Form pulse
				gsap.fromTo(
					formRef.current,
					{ scale: 1 },
					{
						scale: 1.03,
						duration: 0.25,
						yoyo: true,
						repeat: 1,
						ease: 'power2.out',
					},
				);

				// Success message animation
				gsap.fromTo(
					'.success__message',
					{ y: 10, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'power3.out',
					},
				);

				setTimeout(() => setSent(false), 4000);
			})
			.catch((error) => {
				setLoading(false);
				console.error('EmailJS error:', error);
				alert('Something went wrong.');
			});
	};

	return (
		<section id="Contact" ref={sectionRef}>
			<div className="container">
				<div className="contact__wrapper">
					<div className="contact__left">
						<h2 className="contact__title">
							Let's Build Something Great
						</h2>
						<p>
							Currently available for{' '}
							<span className="text__color--purple">
								Freelance
							</span>{' '}
							and{' '}
							<span className="text__color--purple">
								Full-time opportunities
							</span>
							. Let's create something that stands out.
						</p>
					</div>

					<form
						ref={formRef}
						onSubmit={sendEmail}
						className={`contact__form ${sent ? 'sent' : ''}`}
					>
						{sent && (
							<div className="success__message">
								<div className="checkmark" />
								Message Sent Successfully
							</div>
						)}

						<div className="form__group">
							<input name="user_name" placeholder=" " required />
							<label>Name</label>
						</div>

						<div className="form__group">
							<input
								name="user_email"
								type="email"
								placeholder=" "
								required
							/>
							<label>Email</label>
						</div>

						<div className="form__group">
							<textarea
								name="message"
								rows="5"
								placeholder=" "
								required
							/>
							<label>Message</label>
						</div>

						<button
							ref={btnRef}
							type="submit"
							className="btn__primary magnetic"
							disabled={loading}
						>
							{loading
								? 'Sending...'
								: sent
									? 'Sent ✓'
									: 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
