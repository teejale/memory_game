import styles from "./Header.module.css";
import { Lottie } from "lottie-react";
import carAnimation from "../../assets/Car.json";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Memory</h1>
      <Lottie src={carAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default Header;
