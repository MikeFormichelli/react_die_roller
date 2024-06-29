import { useState } from "react";

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

function Header() {
  return (
    <div className="header">
      <h1>RPG Die Roller!</h1>
    </div>
  );
}

function RollerBody({ dieType, onSetDie, number, onSetNumber, onSetResult }) {
  return (
    <div className="main-body">
      <div className="grid-container">
        <Die
          number={number}
          onSetNumber={onSetNumber}
          dieType={dieType}
          onSetDieType={onSetDie}
          onSetResult={onSetResult}>
          D4
        </Die>
        <button onClick={onSetResult}>Roll!</button>
      </div>
    </div>
  );
}

function Die({ number, onSetNumber, onSetDieType, dieType }) {
  const dieTypes = ["d4", "d6", "d8", "d10", "d12", "d20"];
  return (
    <div className="die">
      <select
        value={number}
        onChange={(e) => onSetNumber(Number(e.target.value))}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <span>D</span>
      <select value={dieType} onChange={(e) => onSetDieType(e.target.value)}>
        {dieTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

function ResultPane({ result }) {
  return (
    <div className={`main-body ${result === 1 ? 'fail-roll': 'lower-body'}`}>
      <div className="result-field">
        <input
          className="die-display-field"
          disabled
          type="text"
          id="result"
          value={result}></input>
      </div>
    </div>
  );
}
export default App;
