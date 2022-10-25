import { FilterCards } from "./FilterCards/FilterCards";
import { MyButton } from "../UI/button/MyButton";

export function CardsViewSettings({
  existingThemes,
  deleteTheme,
  setSelectedSort,
  mode,
  setMode,
}) {
  return (
    <div className="chooseButtonContainer">
      <div className="filterButton">
        <FilterCards
          titleValue="Sort Cards"
          options={existingThemes}
          setSelectedSort={setSelectedSort}
          deleteTheme={deleteTheme}
        />
      </div>
      <MyButton
        disabled={mode === "allCards"}
        onClick={() => setMode("allCards")}
      >
        All Cards
      </MyButton>
      <MyButton
        disabled={mode === "training"}
        onClick={() => setMode("training")}
      >
        Training
      </MyButton>
    </div>
  );
}
