import React from 'react';
import search from '../../public/images/Ellipse 40.svg';
import { getUsers } from './fetchData';


class Header extends React.Component{

  constructor() {

    super()

    this.state = {
      info
    }
  }

  componentDidMount() {
    if(!this.state.info) {
      getUsers().then(info => this.setState({ info: info }))
      console.log(this.state.info);
    }
  }

  render() {

    return (
      <div className='header'>
         <p className='subscribe'> Подписки </p>
           <p className='unsubscribe'> Отписались </p>
            <a href='/profile/logout' id='exit'>Выйти</a>
             <form action='#' method='POST'>
              <input type='text' name='search' className='searchForm'/>
              <button type='submit' style={{border: 'none'}}><img src={search} id='searchImg'/></button>
             </form>
           <a href='/postpone' id='postpone'>Отложить</a>
          <a href='/unsubscribe' id='unsubscribe2'>Отписать</a>
        <a href='/table' id='table'>Экспорт в xslx</a>

      </div>
    )
  }

}

export default Header;
