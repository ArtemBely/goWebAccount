import React from 'react';
import { NavLink } from 'react-router-dom';

class Enter extends React.Component{

  constructor(props) {
    super(props)

    let messages;
    let messages2;
    let cond;

    if(__isBrowser__) {
      messages = window.__INITIAL_DATA__;
      messages2 = window.__INITIAL_INFO__;
      cond = window.__INITIAL_STATE__;
    }

    this.state = {
      messages,
      messages2,
      cond
    }
  }

showMsg1 = () => {
    if(this.state.messages) {
      return (
        <p>{this.state.messages[0]}</p>
      )
    }
    else {
      console.log(this.state.messages);
    }
}

showMsg2 = () => {
    if(this.state.messages2) {
      return (
        <p>{this.state.messages2[0]}</p>
      )
    }
    else {
      console.log(this.state.messages2);
    }
}


  render() {

    return(
      <div className='wrap_enter'>
        <NavLink to='/registration' className='reg_link'>Регистрация</NavLink>
         {this.showMsg1()}
         {this.showMsg2()}
          <form action='/signup/signin' method='POST' className='wrap_formEnter'>
             <input type='text' name='email' placeholder='mail' />
             <input type='text' name='password' placeholder='пароль' />
             <button type='submit' className='buttonEnter'>Войти</button>
          </form>
      </div>
    )
  }
}

export default Enter;
