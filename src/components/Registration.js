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
          <form action='/signup' method='POST' className='wrap_signup'>
             <input type='text' name='email' placeholder='mail' required/>
             <input type='text' name='password' placeholder='пароль' required/>
             <button type='submit' className='buttonSignup'>Создать учетную запись</button>
          </form>
        </p>
      </div>
    )
  }
}

export default Registration;
