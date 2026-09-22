import React from 'react';
import TechStack from '../Portfolio/TechStack';

const About = ({ language }) => {
	return (
		<section id="About">
			<div className="container">
				<div className="about__wrapper">
					<div className="About__container">
						<h2 className="text__color--normal">
							{language === 'en' ? 'About Me' : 'Sobre mí'}
						</h2>

						<p className="about__para text__color--muted">
							{language === 'en' ? (
								<>
									I'm a self-taught{' '}
									<span className="text__color--purple">
										Frontend Developer
									</span>{' '}
									focused on building clean, responsive, and
									visually engaging web experiences. My
									journey into development started with a
									curiosity for how great interfaces work —
									and quickly grew into a passion for crafting{' '}
									<span className="text__color--purple">
										smooth, intuitive user interactions.
									</span>
								</>
							) : (
								<>
									Soy un{' '}
									<span className="text__color--purple">
										Desarrollador Frontend
									</span>{' '}
									autodidacta, enfocado en crear experiencias
									web limpias, responsivas y visualmente
									atractivas. Mi camino en el desarrollo
									comenzó con la curiosidad de entender cómo
									funcionan las buenas interfaces, y
									rápidamente se convirtió en una pasión por
									crear{' '}
									<span className="text__color--purple">
										interacciones fluidas e intuitivas.
									</span>
								</>
							)}
						</p>

						<p className="about__para text__color--muted">
							{language === 'en' ? (
								<>
									I primarily work with JavaScript, React, and
									modern CSS to create performant applications
									that{' '}
									<span className="text__color--purple">
										balance design and functionality
									</span>
									. I enjoy bringing ideas to life through
									thoughtful UI decisions and subtle motion
									that enhances the user experience.
								</>
							) : (
								<>
									Principalmente trabajo con JavaScript, React
									y CSS moderno para crear aplicaciones de
									alto rendimiento que{' '}
									<span className="text__color--purple">
										equilibran el diseño y la funcionalidad
									</span>
									. Disfruto convertir ideas en realidad
									mediante decisiones cuidadosas de UI y
									animaciones sutiles que mejoran la
									experiencia del usuario.
								</>
							)}
						</p>

						<p className="about__para text__color--muted">
							{language === 'en'
								? "I'm currently open to both freelance opportunities and full-time roles where I can contribute to meaningful products while continuing to grow as a frontend engineer."
								: 'Actualmente estoy abierto a oportunidades freelance y puestos de tiempo completo donde pueda contribuir a productos significativos mientras sigo creciendo como desarrollador frontend.'}
						</p>
					</div>
				</div>

				<TechStack language={language} />
			</div>
		</section>
	);
};

export default About;
