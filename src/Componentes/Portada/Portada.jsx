import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../img/portada2.png';
import img2 from '../../img/imagen2Portada.png';
import img3 from '../../img/imgPortada33.png';
import styles from './Portada.module.css'; // Importa el archivo CSS con módulos

function Portada() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles['carousel-container']}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portada;
