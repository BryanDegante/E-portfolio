import React, { useEffect, useState } from 'react';
import TierCard from '../UI/TierCard';
import { TierData } from '../../data/TierData';

const Tiers = () => {
	const [activeTier, setActiveTier] = useState(null);

	const tierSelect = (title) => {
		if (title === activeTier) return setActiveTier(null);
		setActiveTier(title);
	};

	return (
		<section id="Tiers">
			<div className="container">
				<div className="tiers__wrapper">
					<div className="tier__text text__color--normal">
						<h2>Choose the right website for your needs.</h2>
						<h3>
							Whether you need a simple online presence or a fully
							customized experience, <br /> there's an option to
							fit your project
						</h3>
					</div>
					<div className="tier__cards">
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
					<p className="text__color--muted">
						<span className="text__color--blue">**</span> A 50%
						deposit is required to begin the project. The remaining
						50% is due upon website completion and delivery.{' '}
						<span className="text__color--purple">**</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Tiers;
