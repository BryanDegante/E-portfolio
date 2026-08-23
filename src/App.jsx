import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Particles from './components/UI/Particles';
import Services from './pages/Services';
import ContactModal from './components/UI/ContactModal';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [contactTrigger, setContactTrigger] = useState(null);

	const openContact = (triggerRef) => {
		setContactTrigger(triggerRef);
		setIsContactOpen(true);
	};

	return (
		<div className="App" style={{ position: 'relative' }}>
			<div className="scroll__progress" />
			<Particles particleCount={500} color={0x60a5fa} />

			<Router>
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Nav openContact={openContact} />

					<Routes>
						<Route
							path="/"
							element={<Home openContact={openContact} />}
						/>
						<Route
							path="/services"
							element={<Services openContact={openContact} />}
						/>
					</Routes>
					<Footer openContact={openContact} />
				</div>
				<ContactModal
					isOpen={isContactOpen}
					onClose={() => setIsContactOpen(false)}
					triggerRef={contactTrigger}
				/>
			</Router>
		</div>
	);
}

export default App;
