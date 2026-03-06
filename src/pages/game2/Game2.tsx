import Container from "../../hoc/Container";
import "./Game2.css";
import { useState } from "react";

export default function Game2() {
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [shuffle, setShuffle] = useState(false);
  const [guessPhase, setGuessPhase] = useState(false);
  const [flipCorrect, setFlipCorrect] = useState(false); // новий стан

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
      } else {
        location.reload();
        alert("Неправильно 😅");
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
          Суть гри — відслідкувати вибрану кнопку
        </p>
      </Container>

      <button onClick={() => setStart(true)} className="game2__start">
        почати
      </button>

      {start && selected === null && <p className="game2__start-text">Вибери кнопку</p>}
      {start && selected !== null && !guessPhase && <p className="game2__start-text">Слідкуй за кнопкою</p>}
      {guessPhase && <p className="game2__start-text">Тепер знайди свою кнопку</p>}

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
    </Container>
  );
}