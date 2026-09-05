import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaRegFilePdf, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialButton from './UI/SocialButton';
import ContactButton from './UI/ContactButton';

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ openContact }) => {
	const footerRef = useRef(null);
	const contactButtonRef = useRef(null);
	useEffect(() => {
		const el = footerRef.current;

		gsap.fromTo(
			el,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
				},
			},
		);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer id="Footer" ref={footerRef}>
			<div className="container">
				<div className="footer__content">
					<div className="footer__left">
						<h2 className="footer__logo">Bryan Degante</h2>
						<p className="footer__tagline">
							Crafting immersive web experiences with clean
							design, fluid motion, and modern architecture.
						</p>

						<div className="footer__socials">
							<SocialButton
								text="Github"
								icon={<FaGithub className="social__icon" />}
								link="https://github.com/BryanDegante"
								newPage={true}
							/>
							<SocialButton
								text="LinkedIn"
								icon={<FaLinkedin className="social__icon" />}
								link="https://www.linkedin.com/in/bryandegante-dev/"
								newPage={true}
							/>
							{/* <SocialButton
								text="Resume"
								icon={<FaRegFilePdf className="social__icon" />}
								link="/Resume.pdf"
								newPage={true}
							/> */}
							<ContactButton
								ref={contactButtonRef}
								text="Contact"
								icon={<FaEnvelope className="social__icon" />}
								onClick={() => openContact(contactButtonRef)}
							/>
						</div>
					</div>

					<div className="footer__right">
						<a
							className="link__hover--effect text__color--muted"
							href="/"
						>
							Home
						</a>
						<a
							className="link__hover--effect text__color--muted"
							href="/services"
						>
							Services
						</a>
						
						<a
							className="link__hover--effect text__color--muted"
							href="#Projects"
						>
							Projects
						</a>
						
					</div>
				</div>

				<div className="footer__bottom">
					<span>© {new Date().getFullYear()} Bryan Degante</span>

					<button onClick={scrollToTop} className="footer__top">
						<FaArrowUp />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
