import React from 'react';

const AddOnCard = ({ type, title, price, description,language }) => {
	return (
		<div className="addOn__card">
			<div className="addOn__header">
				<p className="text__color--purple">{title}</p>
				<p className="addOn__price text__color--blue">
					{type === 'Managed'
						? ` $ ${price} / ${language ==='en'? 'Monthly': 'Mensuales'} `
						: ` $ ${price} ${language ==='en' ? 'fee': 'costo'}`}
				</p>
			</div>
			<p className="text__color--muted">{description}</p>
		</div>
	);
};

export default AddOnCard;
