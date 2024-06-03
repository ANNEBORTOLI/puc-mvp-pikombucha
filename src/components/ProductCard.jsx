import styles from "./ProductCard.module.css";
import productItem from "../assets/prod-pitanga.png";
import { ShoppingCart } from "@phosphor-icons/react";

export function ProductCard() {
  return (
    <div className={styles.cardWrapper}>
      <img src={productItem} alt="" />
      <div className={styles.cardTitle}>
        <p>Kombucha Pitanga 350ml</p>
      </div>

      <div className={styles.cardBotton}>
        <span className={styles.price}>R$18,OO</span>
        <button className={styles.btnAdd} href="#">
          ADICIONAR <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
