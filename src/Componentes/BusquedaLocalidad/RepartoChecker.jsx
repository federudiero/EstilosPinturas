import React, { useState } from 'react';
import style from './RepartoChecker.module.css';

const RepartoChecker = () => {
  const [localidad, setLocalidad] = useState('');
  const [resultado, setResultado] = useState('');

  const localidadesConReparto = [
    { name: "La Tablada", precio: 3000 },
    { name: "San Justo", precio: 3000 },
    { name: "Ramos Mejía", precio: 3000 },
    { name: "Lomas del Mirador", precio: 3000 },
    { name: "Ciudadela", precio: 3000 },
    { name: "Aldo Bonzi", precio: 3000 },
    { name: "Isidro Casanova", precio: 3000 },
    { name: "Tapiales", precio: 3000 },
    { name: "Villa Luzuriaga", precio: 3000 },
    { name: "Villa Madero", precio: 3000 },
    { name: "González Catán", precio: 3500 },
    { name: "Gregorio de Laferrere", precio: 3500 },
    { name: "Adrogué", precio: 4000 },
    { name: "Bella Vista", precio: 4000 },
    { name: "Burzaco", precio: 4000 },
    { name: "Campo de Mayo", precio: 4000 },
    { name: "Carlos Spegazzini", precio: 4000 },
    { name: "Caseros", precio: 4000 },
    { name: "Castelar", precio: 4000 },
    { name: "Claypole", precio: 4000 },
    { name: "El Jagüel", precio: 4000 },
    { name: "El Palomar", precio: 4000 },
    { name: "Esteban Echeverría", precio: 4000 },
    { name: "Ezeiza", precio: 4000 },
    { name: "Francisco Álvarez", precio: 4000 },
    { name: "General Rodríguez", precio: 4000 },
    { name: "Haedo", precio: 4000 },
    { name: "Ituzaingó", precio: 4000 },
    { name: "José C. Paz", precio: 4000 },
    { name: "Luis Guillón", precio: 4000 },
    { name: "Marcos Paz", precio: 4000 },
    { name: "Merlo", precio: 4000 },
    { name: "Monte Grande", precio: 4000 },
    { name: "Moreno", precio: 4000 },
    { name: "Morón", precio: 4000 },
    { name: "Muñiz", precio: 4000 },
    { name: "Paso del Rey", precio: 4000 },
    { name: "Rafael Calzada", precio: 4000 },
    { name: "San Antonio de Padua", precio: 4000 },
    { name: "San Miguel", precio: 4000 },
    { name: "Tristán Suárez", precio: 4000 },
    { name: "Glew", precio: 4500 },
    { name: "Ministro Rivadavia", precio: 4500 },
    { name: "Cañuelas", precio: 4500 },
    { name: "Florencio Varela", precio: 4500 },
    { name: "Longchamps", precio: 4500 }
  ];
  const handleSearch = () => {
    const localidadEncontrada = localidadesConReparto.find(l => l.name === localidad);
    if (localidadEncontrada) {
      setResultado(`El envio a ${localidadEncontrada.name} es $${localidadEncontrada.precio}.`);
    } 
  };

  return (
    <div className={style.repartoCheckerContainer}>
      <h1 className={style.title}>Verifica si llegamos a tu zona</h1>

      <select
        className={style.selectField}
        value={localidad}
        onChange={(e) => setLocalidad(e.target.value)}
      >
        <option value="">Seleccione su localidad</option>
        {localidadesConReparto.map((localidad, index) => (
          <option key={index} value={localidad.name}>
            {localidad.name}
          </option>
        ))}
      </select>
      <button className={style.searchButton} onClick={handleSearch}>
        Verificar
      </button>
      {resultado && <p className={style.result}>{resultado}</p>}
    </div>
  );
};

export default RepartoChecker;
