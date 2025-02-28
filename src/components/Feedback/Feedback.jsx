function Feedback({ feedbacks, total, positiv }) {
  return (
    <>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiv}%</p>
    </>
  );
}

export default Feedback;
