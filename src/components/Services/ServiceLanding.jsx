import React, { useRef } from 'react';
import SocialButton from '../UI/SocialButton';
import { FaSearchDollar, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import ContactButton from '../UI/ContactButton';

const ServiceLanding = ({ openContact }) => {
	const contactButtonRef = useRef(null);

	return (
		<section id="Landing">
			<div className="row">
				<div className="landing__container">
					<div className="landing__container--text">
						<h1 className="text__color--normal">Websites Built</h1>
						<h2 className="text__color--normal">
							For Your Business
						</h2>
						<h3 className="text__color--normal">
							From simple landing pages to fully customized
							websites, I create modern, responsive websites
							designed around your goals.
						</h3>
					</div>

					<ul className="social__container">
						<li>
							<SocialButton
								text="Pricing"
								icon={
									<FaSearchDollar className="social__icon" />
								}
								link="#Tiers"
							/>
						</li>
						<li>
							<ContactButton
								ref={contactButtonRef}
								text="Contact"
								icon={<FaEnvelope className="social__icon" />}
								onClick={() => openContact(contactButtonRef)}
							/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ServiceLanding;
