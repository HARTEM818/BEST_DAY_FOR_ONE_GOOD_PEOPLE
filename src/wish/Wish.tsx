import "./Wish.css";
import Container from "../hoc/Container";
export default function Wish() {
  return (
    <>
      <section className="wish" id="wish">
        <Container className="wish__container">
          <Container className="wish__wrapper-title">
            <h2>Найтепліші слова</h2>
            <p>Ти завжда краща з кращих</p>
          </Container>
          <ul className="wish__list">
            <li className="wish__list-item">
              <p>"Неба мирного, здоровя міцного щастя безмежного!"</p>

              <h3>Мама</h3>
            </li>
            <li className="wish__list-item">
              <p>"Хто супер ти супер! А хочеш анекдот НЕ чорний обіцяю!"</p>

              <h3>Артем</h3>
            </li>
            <li className="wish__list-item">
              <p>"Ти найкраща! You the best! Хороший"</p>

              <h3>Саша</h3>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
