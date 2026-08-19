import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Particles from './components/UI/Particles';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <div className='scroll__progress' />
      <Particles particleCount={500} color={0x60a5fa} />

      <Router>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
