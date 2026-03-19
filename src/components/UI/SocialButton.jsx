import React from 'react';

const SocialButton = ({ text, icon, link }) => {
	return (
		<button className="social__button">
			<a href={link} target="_blank" className="sign">
				{icon}
			</a>
			<a
				href={link}
				target="_blank"
				className="text"
				rel="noopener noreferrer"
			>
				{text}
			</a>
		</button>
	);
};

export default SocialButton;
