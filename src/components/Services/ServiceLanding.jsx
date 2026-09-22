import React, { useEffect, useRef } from 'react';
import SocialButton from '../UI/SocialButton';
import { FaSearchDollar, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ContactButton from '../UI/ContactButton';

gsap.registerPlugin(SplitText);

const ServiceLanding = ({ openContact, isLoaded, language }) => {
	const landingRef = useRef(null);
	const textRef = useRef(null);
	const buttonsRef = useRef(null);
	const contactButtonRef = useRef(null);

	useEffect(() => {
		if (!isLoaded) return;

		const ctx = gsap.context(() => {
			const heading = textRef.current.querySelector('h1');
			const subheading = textRef.current.querySelector('h2');
			const description = textRef.current.querySelector('h3');
			const buttons = buttonsRef.current.querySelectorAll('li');

			const headingSplit = new SplitText(heading, {
				type: 'words',
			});

			const subheadingSplit = new SplitText(subheading, {
				type: 'words',
			});

			const descriptionSplit = new SplitText(description, {
				type: 'words',
			});

			gsap.set([headingSplit.words, subheadingSplit.words], {
				y: 35,
				opacity: 0,
			});

			gsap.set(descriptionSplit.words, {
				y: 20,
				opacity: 0,
			});

			gsap.set(buttons, {
				y: 20,
				opacity: 0,
			});

			const tl = gsap.timeline({
				defaults: {
					ease: 'power3.out',
				},
			});

			tl.to(headingSplit.words, {
				y: 0,
				opacity: 1,
				duration: 0.7,
				stagger: 0.08,
			})
				.to(
					subheadingSplit.words,
					{
						y: 0,
						opacity: 1,
						duration: 0.65,
						stagger: 0.05,
					},
					'-=0.35',
				)
				.to(
					descriptionSplit.words,
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						stagger: 0.03,
					},
					'-=0.2',
				)
				.to(
					buttons,
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						stagger: 0.12,
					},
					'-=0.15',
				);

			return () => {
				headingSplit.revert();
				subheadingSplit.revert();
				descriptionSplit.revert();
			};
		}, landingRef);

		return () => ctx.revert();
	}, [isLoaded, language]);

	return (
		<section id="Landing" ref={landingRef} key={language}>
			<div className="row">
				<div className="landing__container">
					<div ref={textRef} className="landing__container--text">
						<h1 className="text__color--normal">
							{language === 'en'
								? 'Websites Built'
								: 'Sitios Web Hechos'}
						</h1>

						<h2 className="text__color--normal">
							{language === 'en'
								? 'For Your Business'
								: 'Para Tu Negocio'}
						</h2>

						<h3 className="text__color--normal">
							{language === 'en'
								? 'From simple landing pages to fully customized websites, I create modern, responsive websites designed around your goals.'
								: 'Desde páginas de aterrizaje sencillas hasta sitios web totalmente personalizados, creo sitios web modernos y responsivos diseñados para alcanzar tus objetivos.'}
						</h3>
					</div>

					<ul ref={buttonsRef} className="social__container">
						<li>
							<SocialButton
								text={language === 'en' ? 'Pricing' : 'Precios'}
								icon={
									<FaSearchDollar className="social__icon" />
								}
								link="#Tiers"
							/>
						</li>

						<li>
							<ContactButton
								ref={contactButtonRef}
								text={
									language === 'en' ? 'Contact' : 'Contacto'
								}
								icon={<FaEnvelope className="social__icon" />}
								onClick={() => openContact(contactButtonRef)}
							/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ServiceLanding;
