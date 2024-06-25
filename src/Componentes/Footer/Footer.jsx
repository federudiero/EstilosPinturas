import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


import styles from './Footer.module.css'; // Importar estilos CSS Modules
import logo from '../../img/logo.jpeg'; // Ruta de tu logo



const Footer = () => {


  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.socialIcons}>
          <a className={styles.socialIcon} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className={styles.iconFIW}/>
          </a>
          <a className={styles.socialIcon} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={styles.iconFIW}/>
          </a>
          <a className={styles.socialIcon} href="https://wa.me/+5491169730249" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.iconFIW}/>
          </a>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.PFooter}>Godoy Cruz 1225, La Tablada, Provincia de Buenos Aires</p>
          <p className={styles.PFooter}>+5491169730249</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.PFooter}>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
