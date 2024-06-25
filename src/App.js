import React from 'react';

import { Helmet } from 'react-helmet';
import Portada from './Componentes/Portada/Portada';
import NavBar from '../src/Componentes/navBar/NavBar';
import ComoTrabajo from './Componentes/comoTrabajo/ComoTrabajo';
import LatexComponent from '../src/Componentes/Latex/LatexComponent';
import MembranaComponent from '../src/Componentes/memebranas/MembranaComponent';
import ContactMap from './Componentes/Contacto/ContactMap';
import WhatsAppButton from './Componentes/whatsapp/WhatsAppButton';
import CombosLM from './Componentes/CombosLatexMembranas/CombosLM';
import Footer from './Componentes/Footer/Footer';
import AboutUs from './Componentes/AboutUs/AboutUs';
import ScrollToTopButton from './Componentes/ScrollToTopButton/ScrollToTopButton';
import ReactGA from 'react-ga';

function App() {
  const pageTitle = "Estilos Pinturas - Venta de Latex y Membranas";
  

  





  return (
    <div className="App">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Tu descripción meta aquí..." />
      </Helmet>
      <NavBar />
      <div id="home">
        <Portada />
      </div>
      <div id="como-trabajo">
        <ComoTrabajo />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="latex">
        <LatexComponent />
      </div>
      <div id="membranas">
        <MembranaComponent />
      </div>
      <div id="combos">
        <CombosLM />
      </div>
      <div id="contact">
        <ContactMap />
      </div>
      <WhatsAppButton />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
