import { Card } from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import "./Cards.css";

export function Cards({ cardsInfo, deleteCard }) {
  return (
    <div className="cardsContainer">
      <div className="cardsInnerContainer">
        {cardsInfo.map((card) => (
          <Card deleteCard={deleteCard} card={card} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
