import css from "./Feedback.module.css";

function Feedback({ feedbacks, total, positiv }) {
  if (total) {
    return (
      <div className={css.feedbacks}>
        <p>
          <b className={css.feedbackGood}>Good</b> : {feedbacks.good}
        </p>
        <p>
          <b className={css.feedbackNeutral}>Neutral</b> : {feedbacks.neutral}
        </p>
        <p>
          <b className={css.feedbackBed}>Bad</b> : {feedbacks.bad}
        </p>
        <p>
          <b className={css.feedbackTotal}>Total</b> : {total}
        </p>
        <p>
          <b className={css.feedbackPositive}>Positive</b> : {positiv}%
        </p>
      </div>
    );
  }
}

export default Feedback;
