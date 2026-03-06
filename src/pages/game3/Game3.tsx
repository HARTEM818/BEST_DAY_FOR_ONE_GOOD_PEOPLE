import { useState } from "react";
import Container from "../../hoc/Container";
import "./Game3.css";

export default function Game3() {
  const [start, setStart] = useState(false);

  const text = "В цьому році ТИ Королева";
  const letters = text.split("");

  return (
    <Container className="game3">
      {!start && (
        <button
          className="game3__start"
          onClick={() => setStart(true)}
        >
          Дізнатись передбачення
        </button>
      )}

      {start && (
        <div
          className="queen"
          style={{ "--length": letters.length } as React.CSSProperties}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`queen__letter ${letter === " " ? "space" : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </Container>
  );
}