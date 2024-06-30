import { useState } from "react";
import { Header } from "./Header";
import { RollerBody } from "./RollerBody";
import { ResultPane } from "./ResultPane";

function App() {
  const [number, setNumber] = useState(1);
  const [dieType, setDieType] = useState("d4");
  const [result, setResult] = useState(0);

  function handleSetNumber(num) {
    setNumber(num);
  }

  function handleSetDieType(die) {
    setDieType(die);
  }

  function handleSetResult() {
    const die = Number(dieType.slice(dieType.indexOf("d") + 1));
    const res = randomize(die, number);
    setResult(res);
  }

  function randomize(num, numD) {
    let dieArray = [];
    for (let i = 1; i <= numD; i++) {
      dieArray.push(Math.floor(Math.random() * Number(num)) + 1);
    }
    // const mathResult = Math.floor(Math.random() * Number(num)) + 1;
    return dieArray.reduce((acc, cur) => acc + cur, 0);
  }

  return (
    <div style={{ margin: "auto" }}>
      <Header />
      <RollerBody
        number={number}
        dieType={dieType}
        onSetDie={handleSetDieType}
        onSetNumber={handleSetNumber}
        onSetResult={handleSetResult}
      />
      <ResultPane result={result} />
    </div>
  );
}

export default App;
