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
}) => {
	const activeTier = title === isActive;

	const listRef = useRef(null);
	const bestRef = useRef(null);
	const iconRef = useRef(null);

	useEffect(() => {
		const listItems = listRef.current.children;
		const bestText = bestRef.current;
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

			gsap.to(icon, {
				rotation: 0,
				duration: 0.3,
				ease: 'power2.out',
			});
		}

		return () => {
			gsap.killTweensOf([listItems, bestText, icon]);
		};
	}, [activeTier]);

	return (
		<div className={`tier__Card ${activeTier ? 'active' : ''}`}>
			<div className="tier__wrapper">
				<div className="tier__header">
					<div className="tier__title">
						<span className="text__color--purple">
							{title} | ${price}
						</span>
					</div>

					<p className="text__color--normal">{subtitle}</p>
				</div>

				<div className="tier__description">
					<ul ref={listRef} className="tier__list text__color--muted">
						{list.map((e, index) => (
							<li className="text__color--blue" key={index}>
								{e}
							</li>
						))}
					</ul>

					<p ref={bestRef} className="text__color--muted">
						{best}
					</p>
				</div>
			</div>

			<button className="tier__button" onClick={() => selectTier(title)}>
				<FaPlus ref={iconRef} />
			</button>
		</div>
	);
};

export default TierCard;
