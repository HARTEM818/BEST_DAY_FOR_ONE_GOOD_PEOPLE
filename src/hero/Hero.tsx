import "./Hero.css";
import Container from "../hoc/Container";
import blocksImg from "../img/hero-blocks.webp";
import { HashLink } from 'react-router-hash-link';
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
              <HashLink to="#game">Розпочати Гру</HashLink>
            </button>
          </Container>
          <img className="hero__main-img" src={blocksImg} alt="" />
        </Container>
      </section>
    </>
  );
}
