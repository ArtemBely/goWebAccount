import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header1";
import Footer from "./Footer";
import eyePass from "../../public/images/eye_pass.png";
import eyePassBlack from "../../public/images/eye_pass_black.png";

class Enter extends React.Component {
  constructor(props) {
    super(props);

    let messages;
    let messages2;
    let cond;

    if (__isBrowser__) {
      messages = window.__INITIAL_DATA__;
      messages2 = window.__INITIAL_INFO__;
      cond = window.__INITIAL_STATE__;
    }

    this.state = {
      messages,
      messages2,
      cond,
      value: "",
    };

    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
  }


  add() {
    this.props.onButtonClick(this.state.value);
    this.setState({ value: "" });
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  showMsg1 = () => {
    if (this.state.messages) {
      return <p className='wrap_msg2'>{this.state.messages[0]}</p>;
    } else {
      console.log(this.state.messages);
    }
  };

  showMsg2 = () => {
    if (this.state.messages2) {
      return <p className='wrap_msg2'>{this.state.messages2[0]}</p>;
    } else {
      console.log(this.state.messages2);
    }
  };

  onInput(e) {
	const eye = document.querySelector('.eye_pass');
	const eyeBlack = document.querySelector('.eye_pass_black');
	const checkbox = document.querySelector('.form__checkbox');

	console.log(e.target.value.length)

    if (e.target.value.length > 0) {
      e.target.style.border = "2px solid black";
      eyeBlack.className = "open_eye";
      checkbox.checked = true;
    }
    if (e.target.value.length === 0) {
      e.target.style.border = "2px solid #808080";
	  checkbox.checked = false;
	  }

  };

  render() {
    return (
      <>
        <Header />
        <div className="wrap_enter">
          <form
            action="/signup/signin"
            method="POST"
            className="wrap_formEnter"
          >
          {this.showMsg1()}
          {this.showMsg2()}
            <h2 className="form__title">Login to your account</h2>
            <p className="form__paragraph">
              Don't have an account?{" "}
              <NavLink to="/registration" className="form__link">
                Register
              </NavLink>
            </p>
            <img src={eyePass} alt="eye" className="eye_pass" />
			<img src={eyePassBlack} alt="eye" className="eye_pass_black" />
            <label htmlFor="email" className="form__label">
              Your email
            </label>
            <input
              onInput={this.onInput}
              type="mail"
              name="email"
              id="email"
              placeholder="email@site.com"
              className="form__input"
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              onInput={this.onInput}
              type="password"
              name="password"
              placeholder="●●●●●●●●●●●●●●"
              className="form__input"
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
              <NavLink to="/registration" className="form__password">
                Forgot password?
              </NavLink>
            </div>
            <button
              type="submit"
              className="form__button"
              disabled={!this.state.value}
              onClick={this.add}
            >
              Login now
            </button>
          </form>
          {/* <form
						action="/signup/signin"
						method="POST"
						className="wrap_formEnter"
					>
						<h2 className="form__title">
              Password recovery
						</h2>
						<p className="form__paragraph">
              Enter your email, we will send you a link to reset your password
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
						/>
						<button type="submit" className="form__button"
              disabled={!this.state.value}
              onClick={this.add}
            >
							Send link
						</button>
					</form>           */}
        </div>
        <Footer />
      </>
    );
  }
}

export default Enter;
