// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './App.css';
import ray1 from './assets/ray1.png';
import Contact from './Contact';
import Portfolio from './portfolio';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>&copy; 2024 El Chicano Artist. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-content">
      <img src={ray1} alt="ray1" className="ray1" />
      <div className="text-section">
        <h2>Ramon Barrera</h2>
        <p>
          Chicano Artist. Illustration. Animation. Character Design. Portraits
        </p>
      </div>
    </div>
  );
}

export default App;
