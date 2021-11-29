import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header1";

class Registration extends React.Component {
  constructor() {
    super();

    let msg;
    if (__isBrowser__) {
      msg = window.__INITIAL_DATA__;
    }
    this.state = {
      msg,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (
        this.state.msg &&
        this.state.msg[0] == "Регистрация завершена успешно, можете войти"
      ) {
        window.location.replace("/enter");
      } else {
        console.log(this.state.msg);
      }
    }, 1500);
  }

  showSuccess = () => {
    if (this.state.msg) {
      return (
        <p className="wrap_msg">
          {this.state.msg.map((msg) => (
            <p className="txt_msg">{msg}</p>
          ))}
        </p>
      );
    }
  };


  render() {
    return (
      <>
        <Header />
        <div className="wrap_reg">
          <p className="reg">
            {this.showSuccess()}
            <form action="/signup" method="POST" className="wrap_signup">
              <h2 className="form__title form__title-reg">Registration</h2>
              <p className="form__paragraph">
                Already Registered?
                <NavLink to="/" className="form__link">
                  Log in
                </NavLink>
              </p>
              <label htmlFor="email" className="form__label">
                Your email
              </label>
              <input
                type="mail"
                name="email"
                id="email"
                placeholder="email@site.com"
                className="form__input"
                required
              />
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="●●●●●●●●●●●●●●"
                className="form__input"
                required
                value={this.state.value}
                onChange={this.onChange}
              />
              <div className="form__container">
                <div className="input-control-wrapper">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="form__checkbox"
                  />
                  <label className="form__label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="form__button">
                Login now
              </button>
            </form>
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Registration;
