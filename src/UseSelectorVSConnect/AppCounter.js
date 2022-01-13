import { CounterConnect } from "./connect/CounterConnect";
import { CounterUseSelector } from "./useSelector/CounterUseSelector";

function AppCounter() {
    return (
      <div>
        <header>
          <Heading title="useSelector hook" />
          <CounterUseSelector />
          <Heading title="connect" />
          <CounterConnect />
        </header>
      </div>
    );
  }
  
  function Heading({ title }) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>{title}</h1>
      </div>
    );
  }
  
  export default AppCounter;