import React, { useState } from "react";
import { MyButton } from "../../../UI/button/MyButton";
import { DeleteThemeItem } from "../DeleteThemeItem/DeleteThemeItem";
import { v4 as uuidv4 } from "uuid";
import "./DeleteTheme.css";

export function DeleteTheme({ themes, setThemes, setThemeModal }) {
  const [themesToDelete, setThemesToDelete] = useState([]);
  // const [selected, setSelected] = useState(false);

  function handleClick(theme) {
    if (themesToDelete.includes(theme)) {
      setThemesToDelete((prev) => prev.filter((el) => el !== theme));
      return;
    }
    setThemesToDelete((prev) => [...prev, theme]);
  }

  function handleDelete(e) {
    setThemes((prev) => {
      return prev.filter((el) => !themesToDelete.includes(el));
    });
    setThemesToDelete([]);
    setThemeModal(false);
  }

  return (
    <div className="deleteFormContainer">
      {themes.map((theme) => (
        <DeleteThemeItem
          key={uuidv4()}
          theme={theme}
          handleClick={handleClick}
          selected={themesToDelete.includes(theme)}
        />
      ))}
      <MyButton
        disabled={!themes.length || !themesToDelete.length}
        onClick={handleDelete}
      >
        Delete
      </MyButton>
    </div>
  );
}
