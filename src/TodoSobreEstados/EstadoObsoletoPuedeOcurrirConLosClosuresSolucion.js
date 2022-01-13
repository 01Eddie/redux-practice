import React from 'react';

export default function EstadoObsoletoPuedeOcurrirConLosClosuresSolucion() {
  const [count, setCount] = React.useState(0);

  function delayAddOne() {
    setTimeout(() => {
      // El problema del estado obsoleto desaparece usando una función interna
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={delayAddOne}>+ 1</button>
    </div>
  );
}