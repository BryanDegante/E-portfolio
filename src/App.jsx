import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Particles from './components/UI/Particles';
import Services from './pages/Services';
import ContactModal from './components/UI/ContactModal';
import Footer from './components/Footer';
import { useState } from 'react';
import Privacy from './pages/Privacy';
import LoadingScreen from './components/LoadingScreen';
function App() {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [contactTrigger, setContactTrigger] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [language, setLanguage] = useState('en');
	const openContact = (triggerRef) => {
		setContactTrigger(triggerRef);
		setIsContactOpen(true);
	};
	return (
		<div className="App" style={{ position: 'relative' }}>
			<div className="scroll__progress" />
			<LoadingScreen onComplete={() => setIsLoaded(true)} />
			<Particles particleCount={700} color={0x60a5fa} />
			<Router>
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Nav
						openContact={openContact}
						language={language}
						setLanguage={setLanguage}
					/>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									openContact={openContact}
									isLoaded={isLoaded}
									language={language}
								/>
							}
						/>
						<Route
							path="/services"
							element={
								<Services
									openContact={openContact}
									language={language}
								/>
							}
						/>
						<Route
							path="/privacy"
							element={
								<Privacy
									openContact={openContact}
									language={language}
								/>
							}
						/>
					</Routes>
					<Footer openContact={openContact} language={language} />
				</div>
				<ContactModal
					isOpen={isContactOpen}
					onClose={() => setIsContactOpen(false)}
					triggerRef={contactTrigger}
					language={language}
				/>
			</Router>
		</div>
	);
}
export default App;
