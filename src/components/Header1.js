import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import menuItems from "../menu.json";
import logo from "../../public/images/logo.svg";
import arrow from "../../public/images/ArrowHeader.png";
import burger from '../../public/images/burger.png';
import vector from '../../public/images/Vector (1).svg';
import close from '../../public/images/Frame 731.svg';

import "../../public/styles/style3.css";

class Header extends React.Component {

  constructor() {

    super()

    this.burger = React.createRef();
    this.open = React.createRef();
    this.close = React.createRef();
  }

  showMenu = () => {
    this.burger.current.classList.add('showMenu');
    this.open.current.classList.add('dispNone');
    this.close.current.classList.add('appearDisp');
  }
  closeMenu = () => {
    this.burger.current.classList.remove('showMenu');
    this.open.current.classList.remove('dispNone');
    this.close.current.classList.remove('appearDisp');
  }

  render() {
    return (
      <header className="cmp_wrap_header">
        <div className="cmp_navigation">

          <ul class="au_header_list" ref={this.burger}>
              <li class="au_header_item">
                  <a href="./Hardware Infrastructure.html" class="au_header_link">Edge computing hardware</a>
              </li>
              <li class="au_header_item">
                  <a href="./Computing power solution for AI.html" class="au_header_link">Computing power for AI</a>
              </li>
              <li class="au_header_item">
                  <a href="./g_token.html" class="au_header_link">G token</a>
              </li>
              <li class="au_header_item">
                  <a href="./about us.html" class="au_header_link">About us </a>
              </li>
              <li class="au_header_item">
                  <a href="#" class="au_header_link"><img src={vector} class='enter_logo'/></a>
              </li>
          </ul>

          <a className="cmp_header_link" href="https://goweb.com/index.html">
            <img src={logo} alt="logo" className="cmp_header_logo" />
          </a>

          <Menu items={menuItems} />
          <a className="cmp_header_link" href="https://goweb.com/index.html">
            <img src={arrow} alt="arrow" className="cmp_header_arrow" />
          </a>
          <Link className="burger_menu" to="/" >
            <img src={burger} alt="menu" className="menu_img" ref={this.open} onClick={this.showMenu}/>
            <img src={close} alt="menu" className="menu_img" id='close2' ref={this.close} onClick={this.closeMenu}/>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header;
