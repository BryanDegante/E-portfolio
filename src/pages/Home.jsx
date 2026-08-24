import React from 'react';
import Landing from '../components/Home/Landing';
import About from '../components/Home/About';
import Projects from '../components/Portfolio/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ openContact }) => {
	return (
		<main>
			<Landing openContact={openContact} />
			<About />
			<Projects />
			<Contact />
		</main>
	);
};

export default Home;
