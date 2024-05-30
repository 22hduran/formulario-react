import React, { useState } from 'react';
import Formulario from './Formulario';

function App() {
  const [tarjetas, setTarjetas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const agregarTarjeta = (nuevaTarjeta) => {
    if (editIndex !== null) {
      const tarjetasActualizadas = tarjetas.map((tarjeta, index) =>
        index === editIndex ? nuevaTarjeta : tarjeta
      );
      setTarjetas(tarjetasActualizadas);
      setEditIndex(null);
    } else {
      setTarjetas([...tarjetas, nuevaTarjeta]);
    }
  };

  const editarTarjeta = (index) => {
    setEditIndex(index);
  };

  const eliminarTarjeta = (index) => {
    const tarjetasFiltradas = tarjetas.filter((_, i) => i !== index);
    setTarjetas(tarjetasFiltradas);
  };

  return (
    <div className="App">
      <h1>Formulario React</h1>
      <Formulario agregarTarjeta={agregarTarjeta} tarjeta={editIndex !== null ? tarjetas[editIndex] : null} />
      <div className="tarjetas">
        {tarjetas.map((tarjeta, index) => (
          <div className="tarjeta" key={index}>
            <h2>{tarjeta.titulo}</h2>
            <p><strong>Precio:</strong> {tarjeta.precio}</p>
            <p><strong>Descripción:</strong> {tarjeta.descripcion}</p>
            <button onClick={() => editarTarjeta(index)}>Editar</button>
            <button onClick={() => eliminarTarjeta(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
