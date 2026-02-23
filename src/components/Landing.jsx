import React from 'react';
import SocialButton from './UI/SocialButton';
import { FaGithub, FaLinkedin,FaRegFilePdf  } from 'react-icons/fa';
const Landing = () => {
	return (
		<section id="Landing">
			<div className="landing__container">
				<div className="landing__container--text">
					<h1 className="text--color">I'm Bryan Degante</h1>
					<h2 className="text--color">
						A Frontend Developer <br /> Focused on clean UI & Smooth
						Animations
					</h2>
					<h3 className="text--color">
						Building responsive interfaces with modern web
						technologies.
					</h3>
				</div>
				<ul className="social__container">
					<li>
						<SocialButton
							text='Github'
                            icon={<FaGithub className="social__icon" />}
						/>
					</li>
					<li>
						<SocialButton
							text='LinkedIn'
                            icon={<FaLinkedin className="social__icon" />}
						/>
					</li>
					<li>
						<SocialButton
							text='Resume'
                            icon={<FaRegFilePdf className="social__icon" />}
						/>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Landing;
