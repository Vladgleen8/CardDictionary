import { ModalItem } from "./ModalItem/ModalItem";
import { AddCard } from "./ModalComponents/AddCard/AddCard";
import { AddTheme } from "./ModalComponents/AddTheme/AddTheme";
import { DeleteTheme } from "./ModalComponents/DeleteTheme/DeleteTheme";

export function Modals({
  cardModal,
  setCardModal,
  themes,
  setThemes,
  updateThemes,
  themeModal,
  setThemeModal,
  deleteThemeModal,
  setDeleteThemeModal,
  updateCardsInfo,
}) {
  return (
    <>
      <ModalItem visible={cardModal} setVisible={setCardModal}>
        <AddCard
          updateCardsInfo={updateCardsInfo}
          themes={themes}
          setCardModal={setCardModal}
          cardModal={cardModal}
        />
      </ModalItem>
      <ModalItem visible={themeModal} setVisible={setThemeModal}>
        <AddTheme updateThemes={updateThemes} setThemeModal={setThemeModal} />
      </ModalItem>
      <ModalItem visible={deleteThemeModal} setVisible={setDeleteThemeModal}>
        <DeleteTheme
          setThemes={setThemes}
          setThemeModal={setDeleteThemeModal}
          themes={themes}
        ></DeleteTheme>
      </ModalItem>
    </>
  );
}
