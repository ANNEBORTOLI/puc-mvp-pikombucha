import { Header } from "../components/Header";
import { SliderCarousel } from "../components/SliderCarousel";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "../components/Footer";

import styles from "../App.module.css";
import "../global.css";

import products from "../products.json";

import Garrafas from "../assets/garrafas.png";
import Socios from "../assets/socios.png";

export function Home() {
  const productList = products.products;

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <SliderCarousel />
        <h2>Nossos Produtos</h2>
        <div className={styles.productsContainer}>
          {productList.map((item, i) => {
            return <ProductCard key={i} item={item} />;
          })}
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
      </main>

      <Footer />
    </>
  );
}
