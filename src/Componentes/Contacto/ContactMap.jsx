import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import style from './ContactMap.module.css';
import WhatsApp  from '@mui/icons-material/WhatsApp';
import RepartoChecker from '../BusquedaLocalidad/RepartoChecker';

const ContactMap = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    const whatsappUrl = `https://wa.me/+5491169730249?text=${encodeURIComponent(
     `hola mi Nombre es ${name}\nEmail: ${email}\nMensaje: ${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={style.contactMapContainer}>
      <h1 className={style.title}>Contáctenos</h1>
      <button className={style.sendButton} onClick={handleSendMessage}>
          <WhatsApp className={style.whatsappIcon} /> WhatsApp +5491169730249
        </button>
      <p className={style.address}>Godoy Cruz 1225, La Tablada, Provincia de Buenos Aires</p>
       <RepartoChecker/>
      <div className={style.mapContainer}>
        <iframe
          title="Mapa de Google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.688357742144!2d-58.532275423554964!3d-34.68781407292407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8c7a484104b%3A0x1460aa53454e879e!2sGodoy%20Cruz%201225%2C%20B1766BQY%20La%20Tablada%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718807220596!5m2!1ses-419!2sar"
          className={style.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={style.formContainer}>
        <input
          type="text"
          className={style.inputField}
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className={style.inputField}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={style.textareaField}
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={style.sendButton} onClick={handleSendMessage}>
          <FaWhatsapp className={style.whatsappIcon} /> Enviar a WhatsApp
        </button>
      </div>
     
    </div>
  );
};

export default ContactMap;
