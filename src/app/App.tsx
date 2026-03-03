import "./App.css";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Game from "../game/Game";
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Game/>
      </main>
    </>
  );
}
