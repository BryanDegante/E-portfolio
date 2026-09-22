import Landing from '../components/Home/Landing';
import About from '../components/Home/About';
import Projects from '../components/Portfolio/Projects';
import Contact from '../components/Contact';

const Home = ({ openContact, isLoaded,language }) => {
	return (
		<main>
			<Landing
				openContact={openContact}
				isLoaded={isLoaded}
				language={language}
			/>
			<About language={language} />
			<Projects language={language} />
			<Contact language={language} />
		</main>
	);
};

export default Home;
