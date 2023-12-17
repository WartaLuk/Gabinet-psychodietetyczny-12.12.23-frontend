import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Gabinet Psychodietetyczny Agaty JW</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/services">Usługi</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/admin">Panel Admina</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
