export function ResultPane({ result }) {
  return (
    <div className={`main-body ${result === 1 ? "fail-roll" : "lower-body"}`}>
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
