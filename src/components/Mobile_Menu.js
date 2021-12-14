import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.svg";

class Mobile_Menu extends React.Component {

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_STATE__;
    }

    this.state = {
      user
    }
  }

  getPost3 = () => {
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
        <div className="iivanov roboto-normal-black-18px-22">
            <NavLink exact to='/profile/settings'>{nick}</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container-center-horizontal2">
        <div className="menu screen">
          <div className="flex-col">
            <div className="group-131">
              <img className="group-16" src={logo} />
            </div>
            <div className="cloud-computing roboto-normal-star-dust-18px"><NavLink exact to='/profile'>Cloud computing</NavLink></div>
            {this.getPost3()}
            <div className="btc-005 valign-text-middle roboto-normal-black-18px-2">BTC 0,05</div>
          </div>
          <img className="frame-731" src="https://anima-uploads.s3.amazonaws.com/projects/61ae30b3d3c454f284fe4148/releases/61afac7a0955d603f8d22a68/img/frame-731@2x.png" />
        </div>
      </div>
    )
  }
}

export default Mobile_Menu;
