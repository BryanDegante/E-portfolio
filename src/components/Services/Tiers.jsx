import React from 'react';
import TierCard from '../UI/TierCard';
import { TierData } from '../../data/TierData';

const Tiers = () => {
	return (
		<section id="Tiers">
			<div className="container">
				<h2 className="text__color--normal">TIERS</h2>
				<div className="tier__text text__color--normal">
					<h3>Choose the right website for your needs.</h3>
					<p>
						Whether you need a simple online presence or a fully
						customized experience, <br /> there's an option to fit
						your project
					</p>
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
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tiers;
