import React from 'react';

const ContactButton = React.forwardRef(({ text, icon, onClick }, ref) => {
	return (
		<button ref={ref} onClick={onClick} className="social__button">
			<span className="sign">
				{icon}
			</span>

			<span className="text">
				{text}
			</span>
		</button>
	);
});

export default ContactButton;