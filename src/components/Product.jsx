import styles from "./Product.module.css";
import kombucha from "../assets/prod-pitanga.png";

export function Product() {
  return (
    <div className={styles.cardWrapper}>
      <img src={kombucha} alt="" />
      <div className={styles.cardTitle}>
        <p>Kombucha Pitanga</p>
        <p>350ml</p>
      </div>

      <div className={styles.botton}>
        <p>R$18,OO</p>
        <a href="#">Adicionar</a>
      </div>
    </div>
  );
}
