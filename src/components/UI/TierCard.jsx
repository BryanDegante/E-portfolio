import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

const TierCard = ({title, subtitle,price,list,best}) => {
  return (
		<div className="TierCard">
			<span className="Tier__title text__color--purple">{title}</span>{' '}
			<br />
			<span className="text__color--purple">
				<FaDollarSign className="text__color--normal" />
				{price}
			</span>
			<p className="text__color--normal">{subtitle}</p>
			<ul className="Tier__list text__color--muted">
				{list.map((e, index) => (
					<li key={index}>{e}</li>
				))}
			</ul>
			<p className="text__color--muted">{best}</p>
		</div>
  );
}

export default TierCard