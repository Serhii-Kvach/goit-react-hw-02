import { BsXCircle } from "react-icons/bs";
import css from "./Notification.module.css";

function Notification() {
  return (
    <div className={css.notification}>
      <p>No feedback yet</p>
      <BsXCircle className={css.error} />
    </div>
  );
}

export default Notification;
