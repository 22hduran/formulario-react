import React, { useState, useEffect } from 'react';

const Formulario = ({ agregarTarjeta, tarjeta }) => {
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (tarjeta) {
      setTitulo(tarjeta.titulo);
      setPrecio(tarjeta.precio);
      setDescripcion(tarjeta.descripcion);
    } else {
      setTitulo('');
      setPrecio('');
      setDescripcion('');
    }
  }, [tarjeta]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarjeta = {
      titulo,
      precio,
      descripcion
    };
    agregarTarjeta(nuevaTarjeta);
    setTitulo('');
    setPrecio('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <button type="submit">{tarjeta ? 'Actualizar' : 'Enviar'}</button>
    </form>
  );
};

export default Formulario;
