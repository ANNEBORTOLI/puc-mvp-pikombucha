import { Header } from "./components/Header";
import { SliderCarousel } from "./components/SliderCarousel";
import { Product } from "./components/Product";

import styles from "./App.module.css";
import "./global.css";

// GUARDAR PRODUTOS DE UM JSON EM UMA VARIÁVEL

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SliderCarousel />
      </div>
    </>
  );
}
