import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Particles from './components/UI/Particles';

function App() {
	return (
		<div className="App" style={{ position: 'relative' }}>
			{/* Global Background */}
			<Particles particleCount={500} color={0x60a5fa} />

			<Router>
				{/* Content Layer */}
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
