import React, { useEffect } from 'react';

const Encendido = () => {
  useEffect(() => {
    console.log('Encendido se montó');

    return () => {
      console.log('Encendido se desmontó');
    };
  }, []);

  return <div>🟡</div>;
};

export default Encendido;
