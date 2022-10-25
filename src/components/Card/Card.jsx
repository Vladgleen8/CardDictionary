import { useState } from "react";
import "./Card.css";

export function Card({ card, deleteCard }) {
  const [word, setWord] = useState(card.eng);

  function handleClick() {
    setWord((prev) => (prev === card.eng ? card.rus : card.eng));
  }

  return (
    <div className="cardContainer" onClick={handleClick}>
      <button className="deleteButton" onClick={() => deleteCard(card.id)}>
        X
      </button>
      <div className="cardInnerContainer">
        <div className="cardInfo">{word}</div>
      </div>
    </div>
  );
}
