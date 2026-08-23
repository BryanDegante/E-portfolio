import React from 'react';
import { AddOnData } from '../../data/AddOnData';
import AddOnCard from '../UI/AddOnCard';

const AddOns = () => {
	const assist = AddOnData.filter((e) => e.type === 'Assistance');
	const manage = AddOnData.filter((e) => e.type === 'Managed');

	return (
		<section id="AddOns">
			<div className="container">
				<div className="addOns__wrapper">
					<h2 className="text__color--normal">ADD-ONS & SERVICES</h2>
					<p className="text__color--muted">
						Optional services to help get your site online
					</p>
					<div className="addOn__wrapper">
						<h3 className="text__color--normal">
							Setup Assistance
						</h3>
						<p className="text__color--muted">One-time services</p>
						<div className="addOn__cards">
							{assist.map((card, index) => (
								<AddOnCard
									key={index}
									type={card.type}
									title={card.title}
									price={card.price}
									description={card.description}
								/>
							))}
						</div>
					</div>
					<div className="addOn__wrapper">
						<h3 className="text__color--normal">
							Managed Services
						</h3>
						<p className="text__color--muted">Monthly Plans</p>
						<div className="addOn__cards">
							{manage.map((card, index) => (
								<AddOnCard
									key={index}
									type={card.type}
									title={card.title}
									price={card.price}
									description={card.description}
								/>
							))}
						</div>
					</div>

					<p className=" disclaimer text__color--muted">
						<span className="text__color--purple">**</span> Managed
						services are{' '}
						<span className="text__color--blue">
							optional monthly services{' '}
						</span>{' '}
						and are billed separately from the website package.{' '}
						<span className="text__color--purple">**</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default AddOns;
