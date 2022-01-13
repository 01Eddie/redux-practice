import React from 'react';

export default function ActualizacionesDeEstadoDebenSerInmutables() {
  const [count, setCount] = React.useState(0);
  
  // No asigne estado a nuevas variables (que no usen el hook useState)
  const newCount = count;
  // No mutes directamente el estado
  const countPlusOne = count + 1;

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}