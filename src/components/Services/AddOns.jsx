import React from 'react'
import { AddOnData } from '../../data/AddOnData';
import AddOnCard from '../UI/AddOnCard';

const AddOns = () => {
  return (
		<section id="AddOns">
			<div className="container">
				<div className="addOn__wrapper">
					<h2 className="text__color--normal">ADD-ONS & SERVICES</h2>
					<div className="assistance__wrapper">
						<h3 className="text__color--normal">
							Setup Assistance
						</h3>
						<p className="text__color--muted">One-time services</p>
                      <div className="addOn__cards">
                          {AddOnData.map((card, index) => (
                              card.type
                          ))}
                        </div>
					</div>
					<div className="managed__wrapper">
						<h3 className="text__color--normal">
							Managed Services
						</h3>
						<p className="text__color--muted">Monthly Plans</p>
						<div className="addOn__cards"></div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default AddOns