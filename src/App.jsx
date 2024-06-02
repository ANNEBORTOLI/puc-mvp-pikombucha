import { Header } from "./components/Header";
import { SliderCarousel } from "./components/SliderCarousel";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <SliderCarousel />
        </main>
      </div>
    </>
  );
}
