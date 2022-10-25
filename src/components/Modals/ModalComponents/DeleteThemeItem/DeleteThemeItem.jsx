import { v4 as uuidv4 } from "uuid";
import classes from "./DeleteThemeItem.module.css";

export function DeleteThemeItem({ theme, handleClick, selected }) {
  return (
    <div
      className={selected ? classes.selected : ""}
      key={uuidv4()}
      onClick={() => {
        handleClick(theme);
      }}
    >
      {theme}
    </div>
  );
}
