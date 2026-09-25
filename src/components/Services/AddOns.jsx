import React, { useEffect, useRef } from 'react';
import { AddOnData } from '../../data/AddOnData';
import AddOnCard from '../UI/AddOnCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AddOns = ({ language }) => {
	const sectionRef = useRef(null);
	const wrapperRef = useRef(null);
	const setupRef = useRef(null);
	const managedRef = useRef(null);
	const disclaimerRef = useRef(null);

	const assist = AddOnData.filter((e) => e.type === 'Assistance');
	const manage = AddOnData.filter((e) => e.type === 'Managed');

	useEffect(() => {
		const ctx = gsap.context(() => {
			const setupCards =
				setupRef.current.querySelectorAll('.addOn__cards > *');

			const managedCards =
				managedRef.current.querySelectorAll('.addOn__cards > *');

			gsap.set(wrapperRef.current.querySelector('h2'), {
				y: 30,
				opacity: 0,
			});

			gsap.set(wrapperRef.current.querySelector(':scope > p'), {
				y: 20,
				opacity: 0,
			});

			gsap.set(
				[
					setupRef.current.querySelector('h3'),
					managedRef.current.querySelector('h3'),
				],
				{
					y: 25,
					opacity: 0,
				},
			);

			gsap.set(
				[
					setupRef.current.querySelector(':scope > p'),
					managedRef.current.querySelector(':scope > p'),
				],
				{
					y: 15,
					opacity: 0,
				},
			);

			gsap.set([setupCards, managedCards], {
				y: 40,
				opacity: 0,
			});

			gsap.set(disclaimerRef.current, {
				y: 20,
				opacity: 0,
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
					once: true,
				},
			});

			tl.to(wrapperRef.current.querySelector('h2'), {
				y: 0,
				opacity: 1,
				duration: 0.7,
				ease: 'power2.out',
			})
				.to(
					wrapperRef.current.querySelector(':scope > p'),
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.35',
				)
				.to(
					setupRef.current.querySelector('h3'),
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.2',
				)
				.to(
					setupRef.current.querySelector(':scope > p'),
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'power2.out',
					},
					'-=0.35',
				)
				.to(
					setupCards,
					{
						y: 0,
						opacity: 1,
						duration: 0.7,
						stagger: 0.12,
						ease: 'power2.out',
					},
					'-=0.2',
				)
				.to(
					managedRef.current.querySelector('h3'),
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.15',
				)
				.to(
					managedRef.current.querySelector(':scope > p'),
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'power2.out',
					},
					'-=0.35',
				)
				.to(
					managedCards,
					{
						y: 0,
						opacity: 1,
						duration: 0.7,
						stagger: 0.12,
						ease: 'power2.out',
					},
					'-=0.2',
				)
				.to(
					disclaimerRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'power2.out',
					},
					'-=0.15',
				);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="AddOns" ref={sectionRef}>
			<div className="container">
				<div ref={wrapperRef} className="addOns__wrapper">
					<h2 className="text__color--normal">
						{language === 'en'
							? 'ADD-ONS & SERVICES'
							: 'SERVICIOS ADICIONALES'}
					</h2>

					<p className="text__color--muted">
						{language === 'en'
							? 'Optional services to help get your site online'
							: 'Servicios opcionales para ayudarte a poner tu sitio en línea'}
					</p>

					<div ref={setupRef} className="addOn__wrapper">
						<h3 className="text__color--normal">
							{language === 'en'
								? 'Setup Assistance'
								: 'Asistencia de Configuración'}
						</h3>

						<p className="text__color--muted">
							{language === 'en'
								? 'One-time services'
								: 'Servicios de un solo pago'}
						</p>

						<div className="addOn__cards">
							{assist.map((card, index) => (
								<AddOnCard
									key={index}
									language={language}
									type={card.type}
									title={
										typeof card.title === 'object'
											? card.title[language]
											: card.title
									}
									price={card.price}
									description={
										typeof card.description === 'object'
											? card.description[language]
											: card.description
									}
								/>
							))}
						</div>
					</div>

					<div ref={managedRef} className="addOn__wrapper">
						<h3 className="text__color--normal">
							{language === 'en'
								? 'Managed Services'
								: 'Servicios Administrados'}
						</h3>

						<p className="text__color--muted">
							{language === 'en'
								? 'Monthly Plans'
								: 'Planes Mensuales'}
						</p>

						<div className="addOn__cards">
							{manage.map((card, index) => (
								<AddOnCard
									key={index}
									type={card.type}
									language={language}
									title={
										typeof card.title === 'object'
											? card.title[language]
											: card.title
									}
									price={card.price}
									description={
										typeof card.description === 'object'
											? card.description[language]
											: card.description
									}
								/>
							))}
						</div>
					</div>

					<p
						ref={disclaimerRef}
						className="disclaimer text__color--muted"
					>
						<span className="text__color--purple">**</span>{' '}
						{language === 'en' ? (
							<>
								Managed services are{' '}
								<span className="text__color--blue">
									optional monthly services
								</span>{' '}
								and are billed separately from the website
								package.
							</>
						) : (
							<>
								Los servicios administrados son{' '}
								<span className="text__color--blue">
									servicios mensuales opcionales
								</span>{' '}
								y se cobran por separado del paquete del sitio
								web.
							</>
						)}{' '}
						<span className="text__color--purple">**</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default AddOns;
