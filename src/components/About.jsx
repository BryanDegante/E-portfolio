import React from 'react';
import TechStack from './TechStack';

const About = () => {
	return (
		<section id="About">
			<div className="container">
				<div className="about__wrapper">
					<div className="About__container">
						<h2 className="text__color--normal">About Me</h2>
						<p className="about__para text__color--muted">
							I'm a self-taught{' '}
							<span className="text__color--purple">
								Frontend Developer
							</span>{' '}
							focused on building clean, responsive, and visually
							engaging web experiences. My journey into
							development started with a curiosity for how great
							interfaces work — and quickly grew into a passion
							for crafting{' '}
							<span className="text__color--purple">
								smooth, intuitive user interactions.
							</span>
						</p>

						<p className="about__para text__color--muted">
							I primarily work with JavaScript, React, and modern
							CSS to create performant applications that{' '}
							<span className="text__color--purple">
								balance design and functionality
							</span>
							. I enjoy bringing ideas to life through thoughtful
							UI decisions and subtle motion that enhances the
							user experience.
						</p>

						<p className="about__para text__color--muted">
							I'm currently open to both freelance opportunities
							and full-time roles where I can contribute to
							meaningful products while continuing to grow as a
							frontend engineer.
						</p>
					</div>
				</div>
				<TechStack />
			</div>
		</section>
	);
};

export default About;
