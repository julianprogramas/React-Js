import React, { useState, useEffect } from 'react';

import Encendido from './Encendido';
import Apagado from './Apagado';

const PerillaCicloVida = () => {
  const [encendido, setEncendido] = useState(false);
  const [contador, setContador] = useState(0);

  const buttonClickHandler = () => {
    setEncendido(!encendido);
  };

  const buttonContadorClickHandler = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log('el componente se actualizó');
  });

  useEffect(() => {
    console.log('el estado encendido cambió');
  }, [encendido]);

  useEffect(() => {
    console.log('el estado contador cambió');
  }, [contador]);

  useEffect(() => {
    console.log('el componente se montó');
  }, []);

  return (
    <div>
      <button onClick={buttonClickHandler}>Perilla</button>
      <div>{encendido ? <Encendido /> : <Apagado />}</div>

      <button onClick={buttonContadorClickHandler}>Contar</button>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default PerillaCicloVida;
