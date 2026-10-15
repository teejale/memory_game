import styles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <div className={styles.btnWrapper}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
