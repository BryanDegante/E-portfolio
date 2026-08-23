import React from 'react';

const SocialButton = ({ text, icon, link , newPage}) => {
	return (
		<a
			href={link}
			target={newPage ? '_blank' : undefined}
			className="social__button"
			rel={newPage ? 'noopener noreferrer' : undefined}
		>
			<span
				className="sign"
				rel={newPage ? 'noopener noreferrer' : undefined}
			>
				{icon}
			</span>
			<span
				href={link}
				className="text"
			>
				{text}
			</span>
		</a>
	);
};

export default SocialButton;
