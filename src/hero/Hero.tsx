import "./Hero.css";
import Container from "../hoc/Container";
import blocksImg from "../img/hero-blocks.webp";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <Container className="hero__container">
          <Container className="hero__content">

              <h1 className="hero__title">З Днем народження, Зірко! 🥳</h1>
              <p className="hero__text">
                Я підготував для тебе невеличку інтерактивну пригоду. Відпочинь,
                пограй та відчуй любов та радість!
              </p>


            <button className="hero__start-btn">
              <a href="#game">Розпочати Гру</a>
            </button>
          </Container>
          <img className="hero__main-img" src={blocksImg} alt="" />
        </Container>
      </section>
    </>
  );
}
