import React, { useEffect } from 'react';

const Apagado = () => {
  useEffect(() => {
    console.log('Apagado se montó');

    return () => {
      console.log('Apagado se desmontó');
    };
  }, []);

  return <div>⚫</div>;
};

export default Apagado;
