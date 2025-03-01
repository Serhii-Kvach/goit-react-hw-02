import css from "./Options.module.css";

function Options({
  value: { good, neutral, bad },
  onUpdate,
  total,
  setFeedbacks,
}) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdate("good")}>Good: {good}</button>
      <button onClick={() => onUpdate("neutral")}>Neutral: {neutral}</button>
      <button onClick={() => onUpdate("bad")}>Bad: {bad}</button>
      {total > 0 && (
        <button
          onClick={() => {
            return setFeedbacks({ good: 0, neutral: 0, bad: 0 });
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
