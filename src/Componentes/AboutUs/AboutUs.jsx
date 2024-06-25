import React from 'react';
import styles from './AboutUs.module.css';
import companyImage from '../../img/AboutUs.png'; // Asegúrate de tener una imagen en esta ruta

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={companyImage} alt="Estilos Pinturas" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <p className={styles.description}>
          Bienvenidos a <strong>Estilos Pinturas</strong>, una empresa dedicada a la fabricación de productos de alta calidad como látex blancos, membranas líquidas ,membranas en pasta , fijadores y enduidos. 
          Con más de 4 años en el mercado, nos enorgullece ofrecer productos de excelente calidad a precios competitivos, asegurando la mejor relación calidad-precio para nuestros clientes.
        </p>
        <p className={styles.mission}>
          Nuestra misión es proporcionar a nuestros clientes soluciones de pintura de alta calidad, duraderas y accesibles. Nos comprometemos a la innovación constante y a la satisfacción del cliente, garantizando productos que cumplen con los más altos estándares de calidad.
        </p>
        <p className={styles.vision}>
          Nuestra visión es ser líderes en el mercado de pinturas, reconocidos por nuestra calidad, innovación y compromiso con el medio ambiente. Aspiramos a expandir nuestro alcance y continuar desarrollando productos que superen las expectativas de nuestros clientes.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
