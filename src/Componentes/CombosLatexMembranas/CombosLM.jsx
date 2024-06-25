import React, { useEffect, useRef, useState } from 'react';
import styles from './CombosLM.module.css';
import img1 from '../../img/comboeconomico1.jpg';
import img2 from '../../img/latexEconomico.jpeg';
import img3 from '../../img/LatexPremium.jpeg';
import img4 from '../../img/latexLavable.jpeg';
import img5 from '../../img/membranaliquida.jpeg';
import img6 from '../../img/Membranaenpasta.jpeg';

const CombosLM = () => {
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
    <div className={styles.divContainerPadreCombos} ref={containerRef}>
      <h2 className={styles.title}>Combos Latex y Membranas</h2>
      <div className={`${styles.divContainerCard} ${isVisible ? 'visible' : ''}`}>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img1} alt="Latex Económico" />
          </div>
          <h3 className={styles.h3Combos}>Combo Latex Económico 1</h3>
          <p className={styles.PCombos}>Latex Económico Interior y Exterior por 20 litros</p>
          <p className={styles.PCombos}>Rodillo y enduido 1 kg</p>
          <p className={styles.PCombos}>Rendimiento: 8 a 10 m² por litro y por mano</p>
        </div>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img2} alt="Latex Económico" />
          </div>
          <h3 className={styles.h3Combos}>Combo Latex Económico 2</h3>
          <p className={styles.PCombos}>Latex Económico Interior y Exterior por 20 litros</p>
          <p className={styles.PCombos}>Rodillo + enduido 1 kg + fijador 1 kg</p>
          <p className={styles.PCombos}>Rendimiento: 8 a 10 m² por litro y por mano</p>
        </div>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img3} alt="Latex Premium" />
          </div>
          <h3 className={styles.h3Combos}>Combo Latex Premium</h3>
          <p className={styles.PCombos}>Latex Premium Interior y Exterior por 20 litros</p>
          <p className={styles.PCombos}>Rodillo + enduido 1 kg</p>
          <p className={styles.PCombos}>Rendimiento: 12 m² por litro y por mano</p>
        </div>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img4} alt="Latex Lavable" />
          </div>
          <h3 className={styles.h3Combos}>Combo Latex Lavable</h3>
          <p className={styles.PCombos}>Latex Interior y Exterior por 20 litros</p>
          <p className={styles.PCombos}>Rodillo + enduido 1 kg</p>
          <p className={styles.PCombos}>Rendimiento: 12 m² por litro y por mano</p>
          <p className={styles.PCombos}>Facilita la limpieza de todo tipo de manchas</p>
        </div>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img5} alt="Membrana Líquida" />
          </div>
          <h3 className={styles.h3Combos}>Combo Membrana Líquida</h3>
          <p className={styles.PCombos}>Membrana por 20 litros + rodillo + venda</p>
          <p className={styles.PCombos}>Rendimiento: 25/30m² por 3 manos</p>
        </div>
        <div className={styles.latexItem}>
          <div className={styles.imgContainer}>
            <img className={styles.imgLatex} src={img6} alt="Membrana en pasta" />
          </div>
          <h3 className={styles.h3Combos}> Combo Membrana en Pasta</h3>
          <p className={styles.PCombos}>Membrana por 20 litros + rodillo + venda</p>
          <p className={styles.PCombos}>Rendimiento: 30m² por 3 manos</p>
        </div>
      </div>
    </div>
  );
};

export default CombosLM;
