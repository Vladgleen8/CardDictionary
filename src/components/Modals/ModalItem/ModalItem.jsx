import classes from "./ModalItem.module.css";

export function ModalItem({ children, visible, setVisible }) {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {visible && children}
      </div>
    </div>
  );
}
