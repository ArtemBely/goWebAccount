import React from 'react';

class Registration extends React.Component{

  constructor() {

    super()

    let msg;
    if(__isBrowser__) {
      msg = window.__INITIAL_DATA__;
    }
    this.state = {
      msg
    }
  }

  componentDidMount() {
    setTimeout(() => {
      if(this.state.msg && this.state.msg[0] == "Регистрация завершена успешно, можете войти"){
        window.location.replace('/enter');
      }
      else {
        console.log(this.state.msg);
      }
    }, 1500);
  }

  showSuccess = () => {
    if(this.state.msg) {
      return (
        <p className='wrap_msg'>
          {this.state.msg.map(msg => (
            <p className='txt_msg'>{msg}</p>
          ))}
        </p>
      )
  }
}


  render() {

    return(
      <div className='wrap_reg'>
        <p className='reg'>
         {this.showSuccess()}
         <form
						action="/signup/signin"
						method="POST"
						className="wrap_signup"
					>
						<h2 className="form__title">
              Registration
						</h2>
						<p className="form__paragraph">
              Already Registered?
							<NavLink
								to="/"
								className="form__link"
							>
								Log in
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
						</div>
						<button type="submit" className="form__button"
              disabled={!this.state.value}
              onClick={this.add}
            >
							Register now
						</button>
					</form>
        </p>
      </div>
    )
  }
}

export default Registration;
