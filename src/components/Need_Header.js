import React from 'react';
import { Link, NavLink } from "react-router-dom";
import burger from "../../public/images/burger.png";
import closed from "../../public/images/close_menu.png";
import arrowDown from "../../public/images/arrow_down.png";
import checkBox from "../../public/images/checkbox.png";
import logo from "../../public/images/logo.svg";
import close from '../../public/images/Frame 731.svg';

class Need_Header extends React.Component{

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_STATE__;
    }

    this.wrap_brg = React.createRef();
    this.opa1 = React.createRef();

    this.state = {
      user
    }
  }

   clickMenu = () => {
      this.wrap_brg.current.classList.add('show_burger');
      this.opa1.current.classList.add('opa');
  }

    closeFunc = () => {
        this.wrap_brg.current.classList.remove('show_burger');
        this.opa1.current.classList.remove('opa');
    }

    getPost = () => {
      if(this.state.user) {
        let nickCandidate = this.state.user.email;
          nickCandidate.split("");
          let i;
          let nick = [];
          for(i=0; i<nickCandidate.length; i++) {
                  if(nickCandidate[i]=="@") {
                  break;
                }
            nick.push(nickCandidate[i]);
          }
        return (
          <p className="header_nav_item">{nick}</p>
        )
      }
    }
    getPost2 = () => {
      if(this.state.user) {
        let nickCandidate = this.state.user.email;
          nickCandidate.split("");
          let i;
          let nick = [];
          for(i=0; i<nickCandidate.length; i++) {
                  if(nickCandidate[i]=="@") {
                  break;
                }
            nick.push(nickCandidate[i]);
      }
        return(
          <div className="iivanov roboto-normal-black-18px-22"><NavLink exact to='/profile/settings'
           activeClassName='grey_link' style={{color: 'black'}}>{nick}</NavLink></div>
        )
      }
    }

  getPostMain = () => {
      if(this.state.user) {
        let nickCandidate = this.state.user.email;
          nickCandidate.split("");
          let i;
          let nick = [];
          for(i=0; i<nickCandidate.length; i++) {
                  if(nickCandidate[i]=="@") {
                  break;
                }
            nick.push(nickCandidate[i]);
          }
        return (
          <NavLink to='/profile/settings' className="check_item header_nav_item"
           activeClassName='grey_link'>{nick}</NavLink>
        )
      }
    }

  render() {

    return (
      <header className="header_acc">

          <div className="container-center-horizontal2" ref={this.wrap_brg}>
            <div className="menu screen">
              <div className="flex-col">
                <div className="group-131">
                  <img className="group-16" src={logo} />
                </div>
                <div className="cloud-computing roboto-normal-star-dust-18px"><NavLink exact to='/profile' activeClassName='grey_link' style={{color: 'black'}}>Cloud computing</NavLink></div>
                {this.getPost2()}
                <div className="btc-005 valign-text-middle roboto-normal-black-18px-2">BTC 0,05</div>
              </div>
              <img className="frame-731" src={close} ref={this.close} onClick={this.closeFunc}/>
            </div>
          </div>

        <div className="header_wrap">
          <Link className="header_link" to="/">
            <img src={logo} alt="logo" className="header_logo" />
          </Link>
          <div className="header_nav">
            <NavLink to='/profile' exact='true' className="check_item header_nav_item item_computing" activeClassName='grey_link'>Cloud computing</NavLink>
            {this.getPostMain()}
            <p className="header_nav_item">BTC 0,05</p>
          </div>
          <Link className="burger_menu_link" to="#">
            <img
              src={burger}
              alt="menu"
              className="menu_img_acc"
              onClick={this.clickMenu}
              ref={this.opa1}
            />
          </Link>
          <div className="burger_menu_lk burger_menu_open_lk">
            <div className="burger_menu_header">
              <img src={logo} alt="logo" className="header_logo" />
              <img
                src={closed}
                alt="logo"
                className="burger_menu_close"
              />
            </div>
            <div className="menu_burger_item">
              <p className="header_nav_item item_computing">Cloud computing</p>
              {this.getPost()}
              <p className="header_nav_item">BTC 0,05</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Need_Header;
