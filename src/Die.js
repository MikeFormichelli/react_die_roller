export function Die({ number, onSetNumber, onSetDieType, dieType }) {
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
