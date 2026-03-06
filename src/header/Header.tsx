import Container from "../hoc/Container";
import giftIcon from "../img/lucide-Gift-Outlined.svg";
import giftMenu from "../img/lucide-Menu-Outlined.svg";
import "./Header.css";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
export default function Header() {
  const [isMenu, setMenu] = useState(false);

  return (
    <header className="header">
      <Container className="header__wrapper-title">
        <Container className="header__wrapper-img">
          <Link to="/">
            <img src={giftIcon} alt="" />
          </Link>
          
        </Container>
        <p className="header__title">HR Birthday</p>
      </Container>

     
        <img
          onClick={() => setMenu((prev) => !prev)}
          src={giftMenu}
          alt="Меню"
          className="header__menu-icon"
        />
      

      <nav className={`header__nav ${isMenu ? "active" : ""}`}>
        <ul className="header__list">
          <li>
            <HashLink to="/#game">Обовязвокі Квести</HashLink>
          </li>
          <li>
            <HashLink to="/#wish">Побажання від рідних</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
