import { useState, useRef } from "react";
import { MyButton } from "../../../UI/button/MyButton";
import "./AddTheme.css";

export function AddTheme({ updateThemes, setThemeModal }) {
  const [themeInput, setThemeInput] = useState("");
  const themeRef = useRef(null);

  function handleThemeSubmit(e) {
    e.preventDefault();
    updateThemes(themeInput);
    e.target.reset();
    setThemeModal(false);
  }

  function handleThemeChange(e) {
    const inputTheme = e.target.value;
    setThemeInput(inputTheme);
  }

  return (
    <div className="modalContent">
      <form className="formSubmit" onSubmit={handleThemeSubmit}>
        <input
          className="themeInput"
          type="text"
          name="inputThemeName"
          ref={themeRef}
          onChange={handleThemeChange}
          required
        ></input>
        <MyButton type="submit">Add</MyButton>
      </form>
    </div>
  );
}
