import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FilterCards.css";

export function FilterCards({ titleValue, options, setSelectedSort }) {
  const [selectValue, setSelectValue] = useState(titleValue);

  return (
    <select
      className="filterSelect"
      value={selectValue}
      onChange={(e) => {
        setSelectValue(e.target.value);
        setSelectedSort(e.target.value);
      }}
    >
      <option disabled>{titleValue}</option>
      <option value="">Show All</option>

      {options !== undefined &&
        options.map((option) => (
          <option value={option} key={uuidv4()}>
            {option}
          </option>
        ))}
    </select>
  );
}
