import { v4 as uuidv4 } from "uuid";
import classes from "./ThemeForTraining.module.css";

export function ThemeForTraining({ theme, handleClick, selectedTheme }) {
  function checkTheme() {
    handleClick(selectedTheme === theme ? null : theme);
  }
  return (
    <div
      className={selectedTheme === theme ? classes.selected : ""}
      key={uuidv4()}
      onClick={checkTheme}
    >
      {theme}
    </div>
  );
}
