import React, { useEffect, useRef } from 'react';
import SocialButton from '../components/UI/SocialButton.jsx';
import { FaSearchDollar, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';

const Services = () => {
	return (
		<main>
			<section id="Landing">
				<div className="row">
					<div className="landing__container">
						<div className="landing__container--text">
							<h1 className="text__color--normal">
								Websites Built
							</h1>
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
									link="#tiers"
								/>
							</li>
							<li>
								<SocialButton
									text="Contact"
									icon={
										<FaEnvelope className="social__icon" />
									}
									link="/Resume.pdf"
								/>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Services;
