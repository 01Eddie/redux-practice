import React from 'react';

export default function EstadoObsoletoPuedeOcurrirConLosClosures() {
  const [count, setCount] = React.useState(0);

  function delayAddOne() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={delayAddOne}>+ 1</button>
    </>
  );
}