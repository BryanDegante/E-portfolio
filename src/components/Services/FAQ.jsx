import React, { useState } from 'react';
import { FAQData } from '../../data/FAQData';

const FAQ = ({ language }) => {
	const [activeFAQ, setActiveFAQ] = useState(null);

	const toggleFAQ = (index) => {
		setActiveFAQ(activeFAQ === index ? null : index);
	};

	return (
		<section className="faq">
			<div className="faq__text">
				<p className="section__eyebrow">FAQ</p>

				<h2 className="text__color--normal">
					{language === 'en'
						? 'Frequently Asked Questions'
						: 'Preguntas Frecuentes'}
				</h2>

				<p>
					{language === 'en'
						? "Have questions about the process, pricing, or what's included? Find some of the most common answers below."
						: '¿Tienes preguntas sobre el proceso, los precios o lo que incluye cada paquete? Encuentra algunas de las respuestas más comunes a continuación.'}
				</p>
			</div>

			<div className="faq__list">
				{FAQData.map((faq, index) => (
					<div
						className={`faq__item ${
							activeFAQ === index ? 'active' : ''
						}`}
						key={index}
					>
						<button
							className="faq__question"
							onClick={() => toggleFAQ(index)}
						>
							<span>{faq.question[language]}</span>

							<span className="faq__icon">+</span>
						</button>

						<div className="faq__answer">
							<p>{faq.answer[language]}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
