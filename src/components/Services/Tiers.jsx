import React, { useEffect, useState, useRef } from 'react';
import TierCard from '../UI/TierCard';
import { TierData } from '../../data/TierData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tiers = () => {
	const [activeTier, setActiveTier] = useState(null);

	const sectionRef = useRef(null);
	const textRef = useRef(null);
	const cardsRef = useRef(null);
	const disclaimerRef = useRef(null);

	const tierSelect = (title) => {
		if (title === activeTier) {
			setActiveTier(null);
			return;
		}

		setActiveTier(title);
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			const cards = cardsRef.current.children;

			gsap.set(cards, {
				yPercent: 5,
				opacity: 0,
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
					once: true,
				},
			});

			tl.from(textRef.current.querySelector('h2'), {
				y: 30,
				opacity: 0,
				duration: 0.7,
				ease: 'power2.out',
			})

				.from(
					textRef.current.querySelector('h3'),
					{
						y: 20,
						opacity: 0,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.35',
				)

				.to(
					cards,
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.9,
						stagger: 0.15,
						ease: 'power2.out',
					},
					'-=0.25',
				)

				.from(
					disclaimerRef.current,
					{
						y: 15,
						opacity: 0,
						duration: 0.5,
						ease: 'power2.out',
					},
					'-=0.3',
				);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="Tiers" ref={sectionRef}>
			<div className="container">
				<div className="tiers__wrapper">
					<div
						ref={textRef}
						className="tier__text text__color--normal"
					>
						<h2>Choose the right website for your needs.</h2>

						<h3>
							Whether you need a simple online presence or a fully
							customized experience, <br />
							there's an option to fit your project.
						</h3>
					</div>

					<div ref={cardsRef} className="tier__cards">
						{TierData.map((tier, index) => (
							<TierCard
								key={index}
								title={tier.title}
								subtitle={tier.subtitle}
								price={tier.price}
								list={tier.list}
								best={tier.best}
								selectTier={tierSelect}
								isActive={activeTier}
							/>
						))}
					</div>

					<p
						ref={disclaimerRef}
						className="disclaimer text__color--muted"
					>
						<span className="text__color--purple">**</span> A{' '}
						<span className="text__color--blue">50%</span> deposit
						is required to begin the project. The remaining{' '}
						<span className="text__color--blue">50%</span> is due
						upon website completion and delivery.{' '}
						<span className="text__color--purple">**</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Tiers;
