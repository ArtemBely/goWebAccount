import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.svg";

function Mobile_Menu() {

    return (
      <div className="container-center-horizontal2">
        <div className="menu screen">
          <div className="flex-col">
            <div className="group-131">
              <img className="group-16" src={logo} />
            </div>
            <div className="cloud-computing roboto-normal-star-dust-18px"><NavLink exact to='/profile'>Cloud computing</NavLink></div>
            <div className="iivanov roboto-normal-black-18px-22"><NavLink exact to='/profile/settings'>i.ivanov</NavLink></div>
            <div className="btc-005 valign-text-middle roboto-normal-black-18px-2">BTC 0,05</div>
          </div>
          <img className="frame-731" src="https://anima-uploads.s3.amazonaws.com/projects/61ae30b3d3c454f284fe4148/releases/61afac7a0955d603f8d22a68/img/frame-731@2x.png" />
        </div>
      </div>
    )
}

export default Mobile_Menu;
