import styles from "./Header.module.css";
import { ShoppingCart } from "@phosphor-icons/react";
import piKombuchaLogo from "../assets/logo.png";

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <p className={styles.miniHeader}>
          TOME KOMBUCHA E BEBA SAÚDE,<a href="#">SAIBA MAIS.</a>
        </p>

        <div className={styles.bigHeader}>
          <a href="#">
            <img src={piKombuchaLogo} alt="Logotipo Pi Kombucha Tropical" />
          </a>

          <nav>
            <a href="#">COMO COMPRAR</a>
            <a href="#">CONTATO</a>
            <a href="#">
              <ShoppingCart size={32} />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
