import Landing from '../components/Home/Landing';
import About from '../components/Home/About';
import Projects from '../components/Portfolio/Projects';
import Contact from '../components/Contact';

const Home = ({ openContact, isLoaded }) => {
	return (
		<main>
			<Landing openContact={openContact} isLoaded={isLoaded} />
			<About />
			<Projects />
			<Contact />
		</main>
	);
};

export default Home;
