import Header from "../header/Header";
import Hero from "../hero/Hero";
import Game from "../game/Game";
import Wish from "../wish/Wish";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Game />
        <Wish />
      </main>
    </>
  );
}
