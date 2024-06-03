import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import piKombuchaLogo from "../assets/logo.png";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <a href="#">SOBRE</a>
            </li>
            <li>
              <a href="#">LOJA</a>
            </li>
            <li>
              <a href="#">COMPRAR</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
          </ul>

          <div className={styles.logos}>
            <img src={piKombuchaLogo} alt="" />
            <div className={styles.socialLinks}>
              <a href="#">
                <FacebookLogo size={32} />
              </a>
              <a href="#">
                <InstagramLogo size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.company}>
          <hr />
          <p>
            © PI TROPICAL PRODUÇÃO COMERCIO DE BEBIDAS E ALIMENTOS LTDA -
            29.626.807/0001-16
          </p>
        </div>
      </footer>
    </>
  );
}
