import { Header } from "./components/Header";
import { SliderCarousel } from "./components/SliderCarousel";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";

import styles from "./App.module.css";
import "./global.css";

import Garrafas from "./assets/garrafas.png";
import Socios from "./assets/socios.png";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SliderCarousel />
        <h2>Nossos Produtos</h2>
        <div className={styles.productsContainer}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className={styles.infoCardContainer}>
          <img src={Garrafas} alt="Imagem das garrafas de Kombucha" />
          <div className={styles.infoCardTexts}>
            <p>Produzidas em Cachoeiras de Macacu desde 2016.</p>
            <a href="#">SAIBA MAIS</a>
          </div>
        </div>
        <div className={styles.infoCardContainer}>
          <div className={styles.infoCardTexts}>
            <p>Sócios Fundadores.</p>
            <span>Bruno Kemp e Leo de Mattos</span>
            <a href="#">SAIBA MAIS</a>
          </div>
          <img src={Socios} alt="Imagem das garrafas de Kombucha" />
        </div>
      </div>
      <Footer />
    </>
  );
}
