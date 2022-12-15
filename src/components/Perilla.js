import React, { useState } from 'react';

const Perilla = () => {
  const [encendido, setEncendido] = useState(false);

  const buttonClickHandler = () => {
    setEncendido(!encendido);
  };

  return (
    <div>
      <button onClick={buttonClickHandler}>Perilla</button>
      <p>{encendido ? 'Encendido' : 'Apagado'}</p>
    </div>
  );
};

export default Perilla;
