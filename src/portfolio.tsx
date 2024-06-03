
import image1 from './assets/ray2.jpg';
import image2 from './assets/ray3.jpg';
import image3 from './assets/ray4.jpg';
import image4 from './assets/ray5.jpg';
import image5 from './assets/ray6.jpg';
import image6 from './assets/ray7.jpg';
import image7 from './assets/ray8.jpg';
import image8 from './assets/ray9.jpg';
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <p></p>
      <div className="portfolio-images">
        <img src={image1} alt="Portfolio item 1" />
        <img src={image2} alt="Portfolio item 2" />
        <img src={image3} alt="Portfolio item 3" />
        <img src={image4} alt="Portfolio item 4" />
        <img src={image5} alt="Portfolio item 5" />
        <img src={image6} alt="Portfolio item 6" />
        <img src={image7} alt="Portfolio item 7" />
        <img src={image8} alt="Portfolio item 8" />
      </div>
    </div>
  );
}

export default Portfolio;