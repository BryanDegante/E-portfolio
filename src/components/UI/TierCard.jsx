import React, { useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import gsap from 'gsap';

const TierCard = ({
	title,
	subtitle,
	price,
	list,
	best,
	selectTier,
	isActive,
	examples,
}) => {
	const activeTier = title === isActive;

	const listRef = useRef(null);
	const bestRef = useRef(null);
	const examplesRef = useRef(null);
	const iconRef = useRef(null);

	useEffect(() => {
		const listItems = listRef.current.children;
		const bestText = bestRef.current;
		const examplesContent = examplesRef.current;
		const icon = iconRef.current;

		if (activeTier) {
			gsap.set(listItems, {
				y: 15,
				opacity: 0,
			});

			gsap.set(bestText, {
				y: 10,
				opacity: 0,
			});

			gsap.set(examplesContent, {
				y: 10,
				opacity: 0,
			});

			gsap.to(listItems, {
				y: 0,
				opacity: 1,
				duration: 0.4,
				stagger: 0.08,
				delay: 0.25,
				ease: 'power2.out',
			});

			gsap.to(bestText, {
				y: 0,
				opacity: 1,
				duration: 0.4,
				delay: 0.5,
				ease: 'power2.out',
			});

			gsap.to(examplesContent, {
				y: 0,
				opacity: 1,
				duration: 0.4,
				delay: 0.7,
				ease: 'power2.out',
			});

			gsap.to(icon, {
				rotation: 45,
				duration: 0.3,
				ease: 'power2.out',
			});
		} else {
			gsap.set(listItems, {
				y: 15,
				opacity: 0,
			});

			gsap.set(bestText, {
				y: 10,
				opacity: 0,
			});

			gsap.set(examplesContent, {
				y: 10,
				opacity: 0,
			});

			gsap.to(icon, {
				rotation: 0,
				duration: 0.3,
				ease: 'power2.out',
			});
		}

		return () => {
			gsap.killTweensOf([
				listItems,
				bestText,
				examplesContent,
				icon,
			]);
		};
	}, [activeTier]);

	return (
		<div className={`tier__Card ${activeTier ? 'active' : ''}`}>
			<button
				className="tier__header"
				onClick={() => selectTier(title)}
			>
				<div className="tier__wrapper">
					<div className="tier__title">
						<span className="text__color--purple">
							{title} | ${price}
						</span>
					</div>

					<p className="text__color--normal">{subtitle}</p>
				</div>

				<FaPlus ref={iconRef} className="tier__icon" />
			</button>

			<div className="tier__description">
				<ul
					ref={listRef}
					className="tier__list text__color--muted"
				>
					{list.map((e, index) => (
						<li
							className="text__color--blue"
							key={index}
						>
							{e}
						</li>
					))}
				</ul>

				<p
					ref={bestRef}
					className="text__color--muted"
				>
					{best}
				</p>

				<div
					ref={examplesRef}
					className="tier__examples"
				>
					<p>Example Websites</p>

					<div className="tier__example-links">
						{examples.map((example) => (
							<a
								key={example.name}
								href={example.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{example.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TierCard;
