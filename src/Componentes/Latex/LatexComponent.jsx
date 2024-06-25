import React, { useEffect, useRef, useState } from 'react';
import style from './LatexComponent.module.css';
import img1 from '../../img/LatexEconomico2.jpeg';
import img2 from '../../img/LatexPrmieum2.jpeg';
import img3 from '../../img/LatexLavable2.jpeg';

function LatexComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.divContainerPadreLatex}>
      <h1 className={style.title}>Latex Blancos</h1>
      <div
        ref={containerRef}
        className={`${style.divContainerLatex} ${isVisible ? style.visible : ''}`}
      >
        <div className={style.latexItem}>
          <div className={style.imgContainer}>
            <img className={style.imgLatex} src={img1} alt="Latex Económico" />
          </div>
          <h3>Latex Económico</h3>
          <p>Interior y Exterior por 20litros</p>
          <p>Tiene su mayor poder curativo al secado</p>
          <p>Rendimiento: 8 a 10 m² por litro y por mano</p>
        </div>

        <div className={style.latexItem}>
          <div className={style.imgContainer}>
            <img className={style.imgLatex} src={img2} alt="Latex Premium" />
          </div>
          <h3>Latex Premium</h3>
          <p>Interior y Exterior por 20litros</p>
          <p>Emulsiones acrílicas de alta calidad (protección UV)</p>
          <p>Rendimiento: 12 m² por litro y por mano</p>
          <p>La resistencia al agua se logra 48 horas después de su aplicación</p>
        </div>

        <div className={style.latexItem}>
          <div className={style.imgContainer}>
            <img className={style.imgLatex} src={img3} alt="Latex Lavable" />
          </div>
          <h3>Latex Lavable</h3>
          <p>Interior y Exterior por 20litros</p>
          <p>Pintura lavable con un nivel de brillo mate</p>
          <p>Rendimiento: 12 m² por litro y por mano</p>
          <p>Facilita la limpieza de todo tipo de manchas</p>
        </div>
      </div>
    </div>
  );
}

export default LatexComponent;
