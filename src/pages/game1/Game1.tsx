import "./game1.css";
import Container from "../../hoc/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Game1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    grandmaName: "",
    buttonName: "",
  });
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <form
        className="game1-form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/", { replace: true });
        }}
      >
        <Container className="game1-form__field">
          <label className="game1-form__label">
            <p className="game1-form__text">Введи повне ім'я</p>
            <input
              value={form.fullname}
              onChange={(e) => {
                setForm({
                  ...form,
                  fullname: e.target.value,
                });
              }}
              className="game1-form__input"
              type="text"
              name="fullname"
              placeholder="Наприклад: Марія Іванівна"
              required
            />
          </label>
        </Container>

        <Container className="game1-form__field">
          <label className="game1-form__label">
            <p className="game1-form__text">
              А тепер ім'я знайомої бабусі, ім'я якої ми завжди кажемо коли
              хтось тупанув (підказка: "ЛІ")
            </p>
            <input
              value={form.grandmaName}
              onChange={(e) => {
                setForm({
                  ...form,
                  grandmaName: e.target.value,
                });
              }}
              className="game1-form__input"
              type="text"
              name="grandmaName"
              placeholder="Введи ім'я"
              required
            />
          </label>
        </Container>

        <Container className="game1-form__field">
          <p className="game1-form__text">
            Вибери слово яке найбільше подобається:
          </p>
          <Container className="game1-form__wrapper-button">
            <button
              style={{
                backgroundColor: isClicked ? "grey" : "",
              }}
              onClick={() => {
                setClicked(true);
                setForm({
                  ...form,
                  buttonName: "Королева",
                });
              }}
              type="button"
              className="game1-form__button"
            >
              Королева
            </button>

            <button
              onClick={() => {
                navigate("/", { replace: true });
              }}
              type="button"
              className="game1-form__button"
            >
              какаха
            </button>

            <button
              style={{
                backgroundColor: isClicked ? "grey" : "",
              }}
              onClick={() => {
                setClicked(true);
                setForm({
                  ...form,
                  buttonName: "Гарнюня",
                });
              }}
              type="button"
              className="game1-form__button"
            >
              Гарнюня
            </button>
          </Container>
        </Container>
        <button type="submit" className="game1-form__submit">
          Натисни якщо все
        </button>
      </form>
    </>
  );
}
