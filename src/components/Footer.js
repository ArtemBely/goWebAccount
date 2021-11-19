import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.svg";
import FooterLink from "./FooterLink";
import footerItem from "../footerItem.json";
import inst from "../../public/images/inst.svg";
import faceebook from "../../public/images/faceebook.svg";
import telegram from "../../public/images/telegram.svg";
import twitter from "../../public/images/twitter.svg";
import discord from "../../public/images/discord.svg";
import market from "../../public/images/coin market.svg";
import github from "../../public/images/githab.svg";
import bitcoin from "../../public/images/bitkoin.svg";

import "../../public/styles/style4.css";

function Footer() {
  return (
    <footer className="cps_wrap_footer">
      <div className="cps_footer">
        <div className="footer_nav">
          <Link className="cmp_footer_link" to="/">
            <img src={logo} alt="logo" className="cmp_footer_logo" />
          </Link>
          <FooterLink items={footerItem} />
        </div>
        <div className="footer_social">
          <div className="cps_company_year">© GoWeb,2021</div>
          <div className="footer_icons">
            <Link
              className="icons_link"
              to="https://www.linkedin.com/company/gowebnw/about/"
            >
              <img src={inst} alt="logo" className="icons_logo" />
            </Link>
            <Link className="icons_link" to="https://www.facebook.com/GWSTO">
              <img src={faceebook} alt="logo" className="icons_logo" />
            </Link>
            <Link className="icons_link" to="https://t.me/GoWebAI">
              <img src={telegram} alt="logo" className="icons_logo" />
            </Link>
            <Link className="icons_link" to="https://twitter.com/GoWebSTO">
              <img src={twitter} alt="logo" className="icons_logo" />
            </Link>
            <Link className="icons_link" to="https://discord.com/">
              <img src={discord} alt="logo" className="icons_logo" />
            </Link>
            <Link
              className="icons_link"
              to="https://bitcointalk.org/index.php?topic=5103868.msg49489767#msg49489767"
            >
              <img src={market} alt="logo" className="icons_logo" />
            </Link>
            <Link
              className="icons_link"
              to="https://github.com/AljonaYudina/GoWeb.git"
            >
              <img src={github} alt="logo" className="icons_logo" />
            </Link>
            <Link className="icons_link" to="#">
              <img src={bitcoin} alt="logo" className="icons_logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="cps_footer_phone">
        <Link className="cmp_footer_link" to="/">
          <img src={logo} alt="logo" className="cmp_footer_logo" />
        </Link>
        <FooterLink items={footerItem} />
        <div className="footer_icons">
          <Link
            className="icons_link"
            to="https://www.linkedin.com/company/gowebnw/about/"
          >
            <img src={inst} alt="logo" className="icons_logo" />
          </Link>
          <Link className="icons_link" to="https://www.facebook.com/GWSTO">
            <img src={faceebook} alt="logo" className="icons_logo" />
          </Link>
          <Link className="icons_link" to="https://t.me/GoWebAI">
            <img src={telegram} alt="logo" className="icons_logo" />
          </Link>
          <Link className="icons_link" to="https://twitter.com/GoWebSTO">
            <img src={twitter} alt="logo" className="icons_logo" />
          </Link>
          <Link className="icons_link" to="https://discord.com/">
            <img src={discord} alt="logo" className="icons_logo" />
          </Link>
          <Link
            className="icons_link"
            to="https://bitcointalk.org/index.php?topic=5103868.msg49489767#msg49489767"
          >
            <img src={market} alt="logo" className="icons_logo" />
          </Link>
          <Link
            className="icons_link"
            to="https://github.com/AljonaYudina/GoWeb.git"
          >
            <img src={github} alt="logo" className="icons_logo" />
          </Link>
          <Link className="icons_link" to="#">
            <img src={bitcoin} alt="logo" className="icons_logo" />
          </Link>
        </div>
        <div className="cps_company_year">© GoWeb, 2015-2021</div>
      </div>
    </footer>
  );
}

export default Footer;
