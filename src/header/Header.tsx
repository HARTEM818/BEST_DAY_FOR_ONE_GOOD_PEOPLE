import Container from "../hoc/Container";
import giftIcon from "../img/lucide-Gift-Outlined.svg";
import { Link } from "react-router";
import "./Header.css"
export default function Header() {
  return (
    <>
      <header>
        <Container className="header__wrapper-title">
          <Container className="header__wrapper-img">
            <img src={giftIcon} alt="" />
          </Container>
          <p className="header__title">HR Birthday</p>
        </Container>
        <nav>
          <ul>
            <li>
              <Link to="./game">Квести</Link>
            </li>
            <li>
              <Link to="./wish">Побажання від рідних</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
