import styles from "./ProductCard.module.css";
import { ShoppingCart } from "@phosphor-icons/react";

export function ProductCard({ item }) {
  return (
    <div className={styles.cardWrapper}>
      <img src={item.image} alt="" />
      <div className={styles.cardTitle}>
        <p>{item.title}</p>
      </div>

      <div className={styles.cardBotton}>
        <span className={styles.price}>R$ {item.price}</span>
        <a className={styles.btnAdd} href="#">
          ADICIONAR <ShoppingCart size={18} />
        </a>
      </div>
    </div>
  );
}
