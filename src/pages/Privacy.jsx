import React from 'react';

const Privacy = ({ language }) => {
	return (
		<main className="privacy">
			<section className="privacy__section">
				<div className="privacy__container">
					<h1>
						{language === 'en'
							? 'Privacy Policy'
							: 'Política de Privacidad'}
					</h1>

					<p>
						{language === 'en'
							? 'Last updated: September 21, 2026'
							: 'Última actualización: 21 de septiembre de 2026'}
					</p>

					<p>
						{language === 'en'
							? 'This Privacy Policy explains how Bryan Degante ("I," "me," or "my") collects, uses, and protects information submitted through this website.'
							: 'Esta Política de Privacidad explica cómo Bryan Degante ("yo" o "mi") recopila, utiliza y protege la información enviada a través de este sitio web.'}
					</p>

					<h2>
						{language === 'en'
							? 'Information I Collect'
							: 'Información que Recopilo'}
					</h2>

					<p>
						{language === 'en'
							? 'When you use the contact form on this website, you may provide:'
							: 'Cuando utilizas el formulario de contacto de este sitio web, puedes proporcionar:'}
					</p>

					<ul>
						<li>
							{language === 'en'
								? 'Your name'
								: 'Tu nombre'}
						</li>
						<li>
							{language === 'en'
								? 'Your email address'
								: 'Tu dirección de correo electrónico'}
						</li>
						<li>
							{language === 'en'
								? 'The information included in your message'
								: 'La información incluida en tu mensaje'}
						</li>
					</ul>

					<p>
						{language === 'en'
							? 'I only collect information that you voluntarily provide through the contact form.'
							: 'Solo recopilo la información que proporcionas voluntariamente a través del formulario de contacto.'}
					</p>

					<h2>
						{language === 'en'
							? 'How I Use Your Information'
							: 'Cómo Utilizo tu Información'}
					</h2>

					<p>
						{language === 'en'
							? 'Information submitted through the contact form is used solely to:'
							: 'La información enviada a través del formulario de contacto se utiliza únicamente para:'}
					</p>

					<ul>
						<li>
							{language === 'en'
								? 'Respond to your inquiry'
								: 'Responder a tu consulta'}
						</li>
						<li>
							{language === 'en'
								? 'Communicate with you about your request'
								: 'Comunicarnos contigo sobre tu solicitud'}
						</li>
						<li>
							{language === 'en'
								? 'Discuss potential freelance services or projects'
								: 'Hablar sobre posibles servicios o proyectos freelance'}
						</li>
					</ul>

					<p>
						{language === 'en'
							? 'I do not use the information submitted through the contact form for unrelated marketing purposes.'
							: 'No utilizo la información enviada a través del formulario de contacto para fines de marketing no relacionados.'}
					</p>

					<h2>
						{language === 'en'
							? 'How Your Information Is Processed'
							: 'Cómo se Procesa tu Información'}
					</h2>

					<p>
						{language === 'en'
							? 'The contact form uses EmailJS to process and deliver submitted messages to me. Information submitted through the form may therefore be processed by EmailJS as part of providing this service.'
							: 'El formulario de contacto utiliza EmailJS para procesar y entregar los mensajes que envías. Por lo tanto, la información enviada a través del formulario puede ser procesada por EmailJS como parte de la prestación de este servicio.'}
					</p>

					<p>
						{language === 'en'
							? 'For more information about how EmailJS handles data, please review their privacy policy.'
							: 'Para obtener más información sobre cómo EmailJS maneja los datos, consulta su política de privacidad.'}
					</p>

					<h2>
						{language === 'en'
							? 'Information Sharing'
							: 'Compartir Información'}
					</h2>

					<p>
						{language === 'en'
							? 'I do not sell, rent, or trade your personal information.'
							: 'No vendo, alquilo ni intercambio tu información personal.'}
					</p>

					<p>
						{language === 'en'
							? 'Information submitted through the contact form may be processed by third-party services used to operate the website and deliver communications, such as EmailJS.'
							: 'La información enviada a través del formulario de contacto puede ser procesada por servicios de terceros utilizados para operar el sitio web y entregar comunicaciones, como EmailJS.'}
					</p>

					<h2>
						{language === 'en'
							? 'Data Retention'
							: 'Conservación de Datos'}
					</h2>

					<p>
						{language === 'en'
							? 'I retain information submitted through the contact form only for as long as reasonably necessary to respond to your inquiry, communicate with you about a potential project, or maintain appropriate business records.'
							: 'Conservo la información enviada a través del formulario de contacto únicamente durante el tiempo razonablemente necesario para responder a tu consulta, comunicarme contigo sobre un posible proyecto o mantener registros comerciales adecuados.'}
					</p>

					<h2>
						{language === 'en'
							? 'Cookies and Tracking'
							: 'Cookies y Seguimiento'}
					</h2>

					<p>
						{language === 'en'
							? 'This website may use cookies or similar technologies that are necessary for the website to function properly.'
							: 'Este sitio web puede utilizar cookies o tecnologías similares que sean necesarias para que el sitio funcione correctamente.'}
					</p>

					<p>
						{language === 'en'
							? 'If analytics or other tracking services are added to the website in the future, this Privacy Policy will be updated to describe what information those services collect and how it is used.'
							: 'Si en el futuro se agregan servicios de análisis u otras tecnologías de seguimiento al sitio web, esta Política de Privacidad se actualizará para describir qué información recopilan esos servicios y cómo se utiliza.'}
					</p>

					<h2>
						{language === 'en'
							? 'Third-Party Services'
							: 'Servicios de Terceros'}
					</h2>

					<p>
						{language === 'en'
							? 'This website may use third-party services to provide certain functionality, including form submission, website hosting, and other technical services.'
							: 'Este sitio web puede utilizar servicios de terceros para proporcionar ciertas funciones, incluyendo el envío de formularios, el alojamiento del sitio web y otros servicios técnicos.'}
					</p>

					<p>
						{language === 'en'
							? 'These third-party services may process information in accordance with their own privacy policies.'
							: 'Estos servicios de terceros pueden procesar información de acuerdo con sus propias políticas de privacidad.'}
					</p>

					<h2>
						{language === 'en'
							? "Children's Privacy"
							: 'Privacidad de los Menores'}
					</h2>

					<p>
						{language === 'en'
							? 'This website is not intended for children under the age of 13, and I do not knowingly collect personal information from children under 13.'
							: 'Este sitio web no está dirigido a menores de 13 años y no recopilo deliberadamente información personal de menores de 13 años.'}
					</p>

					<h2>
						{language === 'en'
							? 'Changes to This Privacy Policy'
							: 'Cambios a esta Política de Privacidad'}
					</h2>

					<p>
						{language === 'en'
							? 'This Privacy Policy may be updated from time to time to reflect changes to the website, services, or how information is handled.'
							: 'Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar cambios en el sitio web, los servicios o la forma en que se maneja la información.'}
					</p>

					<p>
						{language === 'en'
							? 'Any changes will be posted on this page with an updated "Last updated" date.'
							: 'Cualquier cambio se publicará en esta página con una fecha de "Última actualización" actualizada.'}
					</p>

					<h2>
						{language === 'en'
							? 'Contact'
							: 'Contacto'}
					</h2>

					<p>
						{language === 'en'
							? 'If you have questions about this Privacy Policy or how your information is handled, you can contact me through the contact form on this website.'
							: 'Si tienes preguntas sobre esta Política de Privacidad o sobre cómo se maneja tu información, puedes contactarme a través del formulario de contacto de este sitio web.'}
					</p>
				</div>
			</section>
		</main>
	);
};

export default Privacy;

