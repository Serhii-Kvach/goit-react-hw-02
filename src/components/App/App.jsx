import { useState, useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const getFeedback = localStorage.getItem("feedback");
    if (getFeedback !== null) {
      return JSON.parse(getFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bed: 0,
    };
  });

  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  let positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        value={feedback}
        onUpdate={updateFeedback}
        total={totalFeedback}
        setFeedbacks={setFeedback}
      />

      <Feedback
        feedbacks={feedback}
        total={totalFeedback}
        positiv={positiveFeedback}
      />

      {!totalFeedback && <Notification />}
    </>
  );
}

export default App;
