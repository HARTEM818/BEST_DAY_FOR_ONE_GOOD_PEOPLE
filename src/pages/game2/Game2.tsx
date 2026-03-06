import Container from "../../hoc/Container";
import "./Game2.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Game2() {
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [shuffle, setShuffle] = useState(false);
  const [guessPhase, setGuessPhase] = useState(false);
  const [flipCorrect, setFlipCorrect] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const handleClick = (index: number) => {
    if (selected === null) {
      setSelected(index);
      setShuffle(true);

      setTimeout(() => {
        setGuessPhase(true);
      }, 2000);

      return;
    }

    if (guessPhase) {
      if (index === selected) {
        setFlipCorrect(true);
        alert("Правильно 🎉");
        setStart(false);
        setSelected(null);
        setShuffle(false);
        setGuessPhase(false);
        setFlipCorrect(false);
        setWinCount((prev) => {
          const newCount = prev + 1;

          if (newCount === 3) {
            localStorage.setItem("second", "true");
          }

          return newCount;
        });
      } else {
        alert("Неправильно 😅");
        setStart(false);
        setSelected(null);
        setShuffle(false);
        setGuessPhase(false);
        setFlipCorrect(false);
      }

    }
  };

  return (
    <Container className="game2__container">
      <Container className="game2-wrapper__title">
        <h2 className="game2__title">
          Це вже друга гра перед тим як ти отримаєш передбачення
        </h2>

        <p className="game2__text-description">
          Суть гри — відслідкувати вибрану кнопку і вибрати її 3 рази підряд
          тоді ти зможеш дізнатися дещо цікаве
        </p>
      </Container>

      <button onClick={() => setStart(true)} className="game2__start">
        почати
      </button>

      {start && selected === null && (
        <p className="game2__start-text">Вибери кнопку</p>
      )}
      {start && selected !== null && !guessPhase && (
        <p className="game2__start-text">Слідкуй за кнопкою</p>
      )}
      {guessPhase && (
        <p className="game2__start-text">Тепер знайди свою кнопку</p>
      )}

      <Container className="game2-wrapper__btn">
        <button
          onClick={() => start && handleClick(0)}
          className={`game2__btn
            ${shuffle && start ? "animation-first" : ""}
            ${flipCorrect ? "flip-up" : ""}`}
        >
          Добро
        </button>

        <button
          onClick={() => start && handleClick(1)}
          className={`game2__btn
            ${shuffle && start ? "animation-second" : ""}
            ${flipCorrect ? "flip-up" : ""}`}
        >
          Магія
        </button>

        <button
          onClick={() => start && handleClick(2)}
          className={`game2__btn
            ${shuffle && start ? "animation-third" : ""}
            ${flipCorrect ? "flip-up" : ""}`}
        >
          Свято
        </button>
      </Container>
      <p>Кількість виграшів: {winCount}</p>
      {winCount === 3 && (
        <Link className="game2__final-link" to="/">
          Молодець натискай на мене і переходь на фінал!
        </Link>
      )}
    </Container>
  );
}
