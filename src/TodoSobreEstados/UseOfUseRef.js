import {useRef} from "react";

export default function App() {
  const countRef = useRef(0);

  function handleAddOne() {
    countRef.current += 1;
  }
  console.log(countRef);

  return (
    <>
      <h1>Count: {countRef.current}</h1>

      {/* clicking this will not change display count */}
      <button onClick={handleAddOne}>+ 1</button>
    </>
  );
}