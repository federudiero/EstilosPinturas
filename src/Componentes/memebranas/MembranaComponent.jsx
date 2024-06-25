import React, { useEffect, useRef, useState } from 'react';
import style from './MembranaComponent.module.css';
import img1 from '../../img/memebranaEnPasta2.jpeg';
import img2 from '../../img/MembranaLiquida2.jpeg';

function MembranaComponent() {
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

const textoMembranaLiquida = 'Está formulada para solucionar problemas de filtraciones, goteras y humedad, tanto en techos como en terrazas y superficies porosas, tejas, etc. Rendimiento: 30m² por 3 manos';	
const textoMemebranaPasta ='Membrana por 20 litros. Emulsiones acrílicas de alta calidad (protección UV) recomendada para lograr óptimos resultados en reparaciones de techos y muros. Rendimiento: 25/30m² por 3 manos ,La resistencia al agua se logra 48 horas después de su aplicación'

  return (
    <div className={style.divContainerPadreLatex}>
      <h2 className={style.title}>Membranas</h2>
      <div
        ref={containerRef}
        className={`${style.divContainerLatex} ${isVisible ? style.visible : ''}`}
      >
        <div className={style.latexItem}>
          <div className={style.imgContainer}>
            <img className={style.imgLatex} src={img1} alt="Membrana en pasta" />
          </div>
          <h3>Membrana en pasta</h3>
          <p>{textoMemebranaPasta}</p>
    
        </div>

        <div className={style.latexItem}>
          <div className={style.imgContainer}>
            <img className={style.imgLatex} src={img2} alt="Membrana líquida" />
          </div>
          <h3>Membrana líquida</h3>
          <p>{textoMembranaLiquida}</p>
         
        </div>
      </div>
    </div>
  );
}

export default MembranaComponent;
