import Header from './Header';
import './App.css';
import ray1 from './assets/ray1.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main>{/* Main content sections */
      
      <img src={ray1} alt="ray1" className="ray1" />
      
      }</main>
      

      <footer className="site-footer">
        <p>&copy; 2024 El Chicano Artist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
