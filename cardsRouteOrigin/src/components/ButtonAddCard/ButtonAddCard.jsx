import styles from "./buttonAddCard.module.scss";

function ButtonAddCard() {
  return (
    <div className={styles.buttonAddCardContainer}>
      <button className={styles.buttonAddCard}>Add card</button>
    </div>
  );
}
export default ButtonAddCard;
