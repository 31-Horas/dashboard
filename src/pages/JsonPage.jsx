import React, { useState, useEffect } from 'react';

const JsonPages = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Obtén los datos de la URL
    const searchParams = new URLSearchParams(window.location.search);
    const dataParam = searchParams.get('data');

    // Convierte los datos de vuelta a un objeto
    const jsonData = JSON.parse(dataParam);

    // Actualiza el estado con los datos
    setData(jsonData);
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {/* Muestra los datos como desees */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JsonPages;