import { Die } from "./Die";

export function RollerBody({
  dieType,
  onSetDie,
  number,
  onSetNumber,
  onSetResult,
}) {
  return (
    <div className="main-body">
      <div className="grid-container">
        <Die
          number={number}
          onSetNumber={onSetNumber}
          dieType={dieType}
          onSetDieType={onSetDie}
          onSetResult={onSetResult} />
        <button onClick={onSetResult}>Roll!</button>
      </div>
    </div>
  );
}
