import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { useLocation } from "react-router-dom";

import styles from "./Product.module.css";

export function Product() {
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <Header />
      <section className={styles.cartBox}>
        <img src={item.image} alt={item.title} />

        <div className={styles.productWrapperInfo}>
          <h2>{item.title}</h2>
          <strong>R$ {item.price}</strong>

          <div className={styles.textDescription}>
            <h3>Descrição</h3>
            <p>{item.description}</p>
          </div>

          <button>Adicionar ao Carrinho</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
