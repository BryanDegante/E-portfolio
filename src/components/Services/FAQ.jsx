import React, { useState } from 'react';
import { FAQData } from '../../data/FAQData';

const FAQ = () => {
	const [activeFAQ, setActiveFAQ] = useState(null);

	const toggleFAQ = (index) => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};

	return (
		<section className="faq">
			<div className="faq__text">
				<p className="section__eyebrow">FAQ</p>
				<h2 className="text__color--normal">
					Frequently Asked Questions
				</h2>
				<p >
					Have questions about the process, pricing, or what's
					included? Find some of the most common answers below. 
				</p>
			</div>

			<div className="faq__list">
				{FAQData.map((faq, index) => (
					<div
						className={`faq__item ${
							activeFAQ === index ? 'active' : ''
						}`}
						key={faq.question}
					>
						<button
							className="faq__question"
							onClick={() => toggleFAQ(index)}
						>
							<span>{faq.question}</span>
							<span className="faq__icon">+</span>
						</button>

						<div className="faq__answer">
							<p>{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
