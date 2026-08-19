import React from 'react';

const SocialButton = ({ text, icon, link , newPage}) => {
	return (
		<div className="social__button">
			<a
				href={link}
				target={newPage ? '_blank' : undefined}
				className="sign"
				rel={newPage ? 'noopener noreferrer' : undefined}
			>
				{icon}
			</a>
			<a
				href={link}
				target={newPage ? '_blank' : undefined}
				className="text"
				rel={newPage ? 'noopener noreferrer' : undefined}
			>
				{text}
			</a>
		</div>
	);
};

export default SocialButton;
