import React, { useEffect, useRef } from 'react';
import SocialButton from '../UI/SocialButton';
import { FaEnvelope, FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
import ContactButton from '../UI/ContactButton';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Landing = ({ openContact,isLoaded,language }) => {
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
	}, [isLoaded,language]);

	return (
		<section id="Landing" ref={landingRef} key={language}>
			<div className="row">
				<div className="landing__container">
					<div ref={textRef} className="landing__container--text">
						<h1 className="text__color--normal">
							{language === 'en'
								? "I'm Bryan Degante"
								: 'Soy Bryan Degante'}
						</h1>

						<h2 className="text__color--normal">
							{language === 'en'
								? 'A Frontend Developer'
								: 'Desarrollador Frontend'}
							<br />
							{language === 'en'
								? 'Focused on clean UI & Smooth Animations'
								: 'Enfocado en interfaces limpias y animaciones fluidas'}
						</h2>

						<h3 className="text__color--normal">
							{language === 'en'
								? 'Building responsive interfaces with modern web technologies.'
								: 'Creo interfaces responsivas con tecnologías modernas.'}
						</h3>
					</div>

					<ul ref={buttonsRef} className="social__container">
						<li>
							<SocialButton
								text="Github"
								icon={<FaGithub className="social__icon" />}
								link="https://github.com/BryanDegante"
								newPage={true}
							/>
						</li>

						<li>
							<SocialButton
								text="LinkedIn"
								icon={<FaLinkedin className="social__icon" />}
								link="https://www.linkedin.com/in/bryandegante-dev/"
								newPage={true}
							/>
						</li>
						{/* 
						<li>
							<SocialButton
								text="Resume"
								icon={<FaRegFilePdf className="social__icon" />}
								link="/Resume.pdf"
								newPage={true}
							/>
						</li> */}

						<li>
							<ContactButton
								ref={contactButtonRef}
								text="Contact"
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

export default Landing;
