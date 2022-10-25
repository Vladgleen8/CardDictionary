import { MyButton } from "../UI/button/MyButton";

export function Header({ setCardModal, setThemeModal, setDeleteThemeModal }) {
  return (
    <div className="appHeader">
      <h1>Card Dictionary</h1>
      <MyButton
        onClick={() => {
          setCardModal(true);
        }}
      >
        Add Card
      </MyButton>
      <MyButton onClick={() => setThemeModal(true)}>Add Theme</MyButton>
      <MyButton onClick={() => setDeleteThemeModal(true)}>
        Delete Theme
      </MyButton>
    </div>
  );
}
