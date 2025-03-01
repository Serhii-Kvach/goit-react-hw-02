import { PiCoffeeBeanFill } from "react-icons/pi";
import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.description}>
      <div className={css.title}>
        <h1>Sip Happens Café</h1>
        <PiCoffeeBeanFill className={css.icon} />
      </div>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
