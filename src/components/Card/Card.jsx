import "./Card.module.css";
import styles from "./Card.module.css";

const Card = ({ card, cover, handleChoise, flipped }) => {
  const handleClick = () => {
    handleChoise(card);
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.front} src={card.src} alt="card-front" />
        <img
          className={styles.back}
          src={cover}
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
