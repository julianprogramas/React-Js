import React, { useState } from 'react';

const Sumador = () => {
  const [contador, setContador] = useState(0);

  const buttonClickHandler = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <button onClick={buttonClickHandler}>Contar + 1</button>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default Sumador;
