import React from "react";
import { NavLink } from "react-router-dom";

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
			return <p>{this.state.messages[0]}</p>;
		} else {
			console.log(this.state.messages);
		}
	};

	showMsg2 = () => {
		if (this.state.messages2) {
			return <p>{this.state.messages2[0]}</p>;
		} else {
			console.log(this.state.messages2);
		}
	};

	render() {
		return (
			<>
				<div className="wrap_enter">
					{this.showMsg1()}
					{this.showMsg2()}
					<form
						action="/signup/signin"
						method="POST"
						className="wrap_formEnter"
					>
						<h2 className="form__title">
							Login to your account
						</h2>
						<p className="form__paragraph">
							Don't have an account?{" "}
							<NavLink
								to="/registration"
								className="form__link"
							>
								Register
							</NavLink>
						</p>
						<label for="email" className="form__label">
							Your email
						</label>
						<input
							type="mail"
							name="email"
							id="email"
							placeholder="email@site.com"
							className="form__input"
						/>
						<label for="password" className="form__label">
							Password
						</label>
						<input
							type="password"
							name="password"
							placeholder="●●●●●●●●●●●●●●"
							className="form__input"
							value={this.state.value}
							onChange={this.onChange}
						/>
						<div className="form__container">
							<div class="input-control-wrapper">
								<input
									type="checkbox"
									name="remember"
									id="remember"
									className="form__checkbox"
								/>
								<label
									className="form__label"
									for="remember"
								>
									Remember me
								</label>
							</div>
							<NavLink
								to="/registration"
								className="form__password"
							>
								Forgot password?
							</NavLink>
						</div>
						<button type="submit" className="form__button"
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
						<label for="email" className="form__label">
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
			</>
		);
	}
}

export default Enter;
