import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const TierCard = ({ title, subtitle, price, list, best }) => {
	return (
		<div className="tierCard">
			<div className="tier__header">
				<div className="tier__title">
					<span className=" text__color--purple">
						{title} | ${price}
					</span>
				</div>
				<p className="text__color--normal">{subtitle}</p>
			</div>
			<div className="tier__description">
				<ul className="text__color--muted">
					{list.map((e, index) => (
						<li className="text__color--blue" key={index}>
							{e}
						</li>
					))}
				</ul>
				<p className="text__color--muted">{best}</p>
			</div>
		</div>
	);
};

export default TierCard;
