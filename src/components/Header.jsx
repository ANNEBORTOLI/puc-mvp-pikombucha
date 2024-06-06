import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ShoppingCart } from "@phosphor-icons/react";
import piKombuchaLogo from "../assets/logo.png";

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <p className={styles.miniHeader}>
          TOME KOMBUCHA E BEBA SAÚDE,<Link to={"/about"}>SAIBA MAIS.</Link>
        </p>

        <div className={styles.bigHeader}>
          <Link to={"/"}>
            <img src={piKombuchaLogo} alt="Logotipo Pi Kombucha Tropical" />
          </Link>

          <nav>
            <Link to={"/about"}>COMO COMPRAR</Link>
            <Link to={"/about"}>CONTATO</Link>
            <Link to={"/cart"}>
              <ShoppingCart size={32} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
