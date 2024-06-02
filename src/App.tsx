import Header from './Header';
import './App.css';
import ray1 from './assets/ray1.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <img src={ray1} alt="ray1" className="ray1" />
        <div className="text-section">
          <h2>Ramon Barrera</h2>
          <p>
          Chicano Artist. Illustration. Animation. Character Design. Portraits
          </p>
        </div>
      </main>
      <footer className="site-footer">
        <p>&copy; 2024 El Chino Artist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
