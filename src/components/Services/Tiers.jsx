import React, { useEffect, useState } from 'react';
import TierCard from '../UI/TierCard';
import { TierData } from '../../data/TierData';

const Tiers = () => {
	const [ activeTier, setActiveTier ] = useState(null);

	
	const tierSelect = (title) => {
		if(title === activeTier) return setActiveTier(null)
		setActiveTier(title)
	}
	
	
			
	return (
		<section id="Tiers">
			<div className="container">
				<div className="Tiers__header">
					<h2 className="text__color--normal">TIERS</h2>
					<div className="tier__text text__color--normal">
						<h3>Choose the right website for your needs.</h3>
						<p>
							Whether you need a simple online presence or a fully
							customized experience, <br /> there's an option to
							fit your project
						</p>
					</div>
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
			</div>
		</section>
	);
};

export default Tiers;
