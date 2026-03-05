import Container from "../hoc/Container";
import "./Game.css";
import Arrow from "../img/arrow.svg";
import GamePad from "../img/game-pad.svg";
import Trophy from "../img/trophy.svg";
import Cake from "../img/cake.svg";

import { Link } from "react-router-dom";
export default function Game() {
  return (
    <>
      <section id="game" className="game">
        <Container className="game__container">
          <Container>
            <h2 className="game__title">Вибери свою розвагу</h2>
            <p className="game__text">
              Я створив ці ігри спеціально для тебе. В кінці після двог
              ігор-тестів ти отримаєш відкриття того хто ти в цьому році!
            </p>
          </Container>
          <ul className="game__list">
            <li className="game__list-item">
              <Container className="game__list-wrappper-img">
                <img src={GamePad} alt="" />
              </Container>
              <Container className="game__list-wrapper">
                <h3 className="game__list-title">Чи це ти?</h3>
                <p className="game__list-text">Чи точно це ти Юля чи ні?)</p>
                <Link to="/game1" className="game__list-link">
                  Грати зараз
                  <img src={Arrow} alt="" />
                </Link>
              </Container>
            </li>
            <li className="game__list-item">
              <Container className="game__list-wrappper-img">
                <img src={Trophy} alt="" />
              </Container>
              <Container className="game__list-wrapper">
                <h3 className="game__list-title">Перевірка знань?</h3>
                <p className="game__list-text">Квіз питання про сімю</p>
                <Link to="/game2" className="game__list-link">
                  Грати зараз
                  <img src={Arrow} alt="" />
                </Link>
              </Container>
            </li>
            <li className="game__list-item">
              <Container className="game__list-wrappper-img">
                <img src={Cake} alt="" />
              </Container>
              <Container className="game__list-wrapper">
                <h3 className="game__list-title">Отримання</h3>
                <p className="game__list-text">Ти дізнаєшся те що хотіла!</p>
                <Link
                  to=""
                  className={`game__list-link ${localStorage.getItem("first") === "true" && localStorage.getItem("second") === "true" ? "" : "disabled-link"} `}
                >
                  Грати зараз
                  <img src={Arrow} alt="" />
                </Link>
              </Container>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
