import Container from "../../hoc/Container";
import "./Game2.css"

export default function Game2() {
  return (
    <>
      <Container className="game2__container">
        <Container className="game2-wrapper__title">
            <h2 className="game2__title">Це вже друга гра перед тим як ти отримаєш передбачення</h2>
            <p className="game2__text-description">Суть цієї гри відслідкувати за вибраним тобою блоком і клікнути по ньому тоді коли всі блоки перемішаються</p>
        </Container>
        <button className="game2__start ">почати</button>
        <Container className="game2-wrapper__btn"> 
            <button className="game2__btn">Добро</button>
            <button className="game2__btn">Магія</button>
            <button className="game2__btn">Свято</button>
        </Container>
      </Container>
    </>
  );
}