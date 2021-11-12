import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import menuItems from "../menu.json";
import logo from "../../public/images/logo.svg";
import arrow from "../../public/images/ArrowHeader.png";
import burger from '../../public/images/burger.png'

import "../../public/styles/style3.css";

function Header() {
  return (
    <header className="cmp_wrap_header">
      <div className="cmp_navigation">
        <Link className="cmp_header_link" to="/">
          <img src={logo} alt="logo" className="cmp_header_logo" />
        </Link>

        <Menu items={menuItems} />
        <Link className="cmp_header_link" to="/">
          <img src={arrow} alt="arrow" className="cmp_header_arrow" />
        </Link>
        <Link className="burger_menu" to="/">
          <img src={burger} alt="menu" className="menu_img" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
