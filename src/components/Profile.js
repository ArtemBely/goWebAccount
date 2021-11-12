import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import search from '../../public/images/Ellipse 40.svg';
import { getUsers } from './fetchData';

class Profile extends React.Component{

  constructor() {

    super()

    let info;
    let genry;
    if(__isBrowser__) {
      info = window.__INITIAL_DATA__;
    }
    this.state = {
      info,
      genry: [],
      deleted: []
    }

    this.inp1 = React.createRef();
    this.inp = React.createRef();
    this.subscribes = React.createRef();
    this.unsubscribes = React.createRef();
    this.detected = React.createRef();
  }

handleClick = (e) => {
    let candidateDelete = e.target.value;
    if(!this.state.deleted.includes(candidateDelete)) {
      this.setState({ deleted: [...this.state.deleted, candidateDelete] });
      setTimeout(() => {
        console.log(this.state.deleted);
        this.detected.current.value == this.state.deleted;
      }, 250)
    }
    else {
      let ind = this.state.deleted.indexOf(candidateDelete);
      this.state.deleted.splice(ind, 1);
      console.log(this.state.deleted);
      this.detected.current.value == this.state.deleted;
    }
}

userData = () => {

    if(this.state.info && this.state.genry && this.state.genry.length == 0) {
      return(
        <div className='wrap_userData'>
        <Route exact path='/profile'>
        {this.state.info.map((info, index) => (
          <div className='userInfo' style={{
            display: info.cancel == 'yes' ? 'none' : 'grid'
          }}>
             <div className='infoBlock1'>
                <input type='checkbox' name='check' className='eachCheck' value={info._id} />
                <p className='credentials userIndex'>{index + 1}</p>
                <p className='credentials usName'>{info.cancel == 'no' ? info.username : null}</p>
                <p className='credentials usAdd'>{info.cancel == 'no' ? info.useraddress : null}</p>
                <p className='credentials usTime'>{info.cancel == 'no' ? info.timestamp : null}</p>
                <p className='credentials usPay'>{info.cancel == 'no' ? info.typeOfPayment : null}</p>
                <p className='credentials usPhone'>{info.cancel == 'no' ? info.userphone : null}</p>
                <p className='credentials usMail'>{info.cancel == 'no' ? info.email : null}</p>
             </div>
             <div className='infoBlock2'>
                <form action={'/profile/' + info._id} method='POST'>
                  <textarea className='areas' name='textData'>{info.adminComment}</textarea>
                  <button type='submit' className='buttonChange'>Изменить</button>
                </form>
             </div>
          </div>
        ))}
        </Route>
        <Route exact path='/profile/canceled'>
        {this.state.info.map((info, index) => (
          <div className='userInfo' style={{
            display: info.cancel == 'no' ? 'none' : 'grid'
          }}>
             <div className='infoBlock1'>
                <input type='checkbox' name='check' className='eachCheck' value={info._id} onChange={this.handleClick}/>
                <p className='credentials userIndex'>{index + 1}</p>
                <p className='credentials usName'>{info.cancel == 'yes' ? info.username : null}</p>
                <p className='credentials usAdd'>{info.cancel == 'yes' ? info.useraddress : null}</p>
                <p className='credentials usTime'>{info.cancel == 'yes' ? info.timestamp : null}</p>
                <p className='credentials usPay'>{info.cancel == 'yes' ? info.typeOfPayment : null}</p>
                <p className='credentials usPhone'>{info.cancel == 'yes' ? info.userphone : null}</p>
                <p className='credentials usMail'>{info.cancel == 'yes' ? info.email : null}</p>
             </div>
             <div className='infoBlock2'>
                <form action={'/profile/' + info._id} method='POST'>
                  <textarea className='areas' name='textData'>{info.adminComment}</textarea>
                  <button type='submit' className='buttonChange'>Изменить</button>
                </form>
             </div>
          </div>
        ))}
        </Route>
        </div>
      )
    }
    else
      return(
          <div className='wrap_userData'>
          <Route exact path='/profile'>
          {this.state.genry.map((genr, index) => (
            <div className='userInfo' style={{
              display: genr.cancel == 'yes' ? 'none' : 'grid'
            }}>
               <div className='infoBlock1'>
                  <input type='checkbox' name='check' className='eachCheck'/>
                  <p className='credentials userIndex'>{index + 1}</p>
                  <p className='credentials usName'>{genr.cancel == 'no' ? genr.username : null}</p>
                  <p className='credentials usAdd'>{genr.cancel == 'no' ? genr.useraddress : null}</p>
                  <p className='credentials usTime'>{genr.cancel == 'no' ? genr.timestamp : null}</p>
                  <p className='credentials usPay'>{genr.cancel == 'no' ? genr.typeOfPayment : null}</p>
                  <p className='credentials usPhone'>{genr.cancel == 'no' ? genr.userphone : null}</p>
                  <p className='credentials usMail'>{genr.cancel == 'no' ? genr.email : null}</p>
               </div>
               <div className='infoBlock2'>
                  <form action={'/profile/' + genr._id} method='POST'>
                    <input className='areasDouble' id='ars' name='textData' placeholder={genr.adminComment} />
                    <button type='submit' className='buttonChange'>Изменить</button>
                  </form>
               </div>
            </div>
          ))}
          </Route>
          <Route exact path='/profile/cancel'>
          {this.state.genry.map((genr, index) => (
            <div className='userInfo' style={{
              display: genr.cancel == 'no' ? 'none' : 'grid'
            }}>
               <div className='infoBlock1'>
                  <input type='checkbox' name='check' className='eachCheck'/>
                  <p className='credentials userIndex'>{index + 1}</p>
                  <p className='credentials usName'>{genr.cancel == 'yes' ? genr.username : null}</p>
                  <p className='credentials usAdd'>{genr.cancel == 'yes' ? genr.useraddress : null}</p>
                  <p className='credentials usTime'>{genr.cancel == 'yes' ? genr.timestamp : null}</p>
                  <p className='credentials usPay'>{genr.cancel == 'yes' ? genr.typeOfPayment : null}</p>
                  <p className='credentials usPhone'>{genr.cancel == 'yes' ? genr.userphone : null}</p>
                  <p className='credentials usMail'>{genr.cancel == 'yes' ? genr.email : null}</p>
               </div>
               <div className='infoBlock2'>
                  <form action={'/profile/' + genr._id} method='POST'>
                    <input className='areasDouble' id='ars' name='textData' placeholder={genr.adminComment} />
                    <button type='submit' className='buttonChange'>Изменить</button>
                  </form>
               </div>
            </div>
          ))}
          </Route>
        </div>
      )
    }

indicate = () => {
  let searchData0 = this.inp1.current.value;
  let searchData = searchData0.split('');

  if(this.state.info) {
    this.setState({ grey: [] });
        let names = this.state.info.filter(function(name) {
           let i;
           for(i=0; i<3 ; i++) {
                return name.username.split('')[i].toLowerCase() == searchData[i].toLowerCase();
           }
         });

         let mails = this.state.info.filter(function(mail) {
           let b;
           for(b=0; b<3; b++) {
               return mail.email.split('')[b] == searchData[b];
           }
         });

        let types = this.state.info.filter(function(typ) {
          let r;
          for(r=0; r<3; r++) {
              return typ.typeOfPayment.split('')[r].toLowerCase() == searchData[r].toLowerCase();
          }
        });

     this.setState({ genry: names.length > 0 ? names : mails.length > 0 ? mails : types.length > 0 ? types : window.__INITIAL_DATA__ });
     setTimeout(() => {console.log(this.state.genry)},100)
  }
}
subDelete = () => {
  if(this.subscribes.current.classList.contains('subAdd')) {
    this.subscribes.current.classList.remove('subAdd');
  }
}
subAdd = () => {
  if(!this.subscribes.current.classList.contains('subAdd')) {
    this.subscribes.current.classList.add('subAdd');
  }
}
  render() {
      return(
        <div className='wrap_profile'>
           <div className='profile'>
              <div className='header'>
                 <NavLink to='/profile' className='subscribe' onClick={this.subDelete} ref={this.subscribes}> Подписки </NavLink>
                   <NavLink to="/profile/canceled" className='unsubscribe' activeClassName='actSub' onClick={this.subAdd} ref={this.unsubscribes}> Отписались </NavLink>
                    <a href='/profile/logout' id='exit'>Выйти</a>
                          <input type='text' name='search' className='searchForm' ref={this.inp1} />
                          <img src={search} id='searchImg' onClick={this.indicate}/>
                          <Route exact path='/profile'>
                              <a href='/postpone' id='postpone'>Отложить</a>
                              <a href='/unsubscribe' id='unsubscribe2'>Отписать</a>
                          </Route>
                          <Route exact path='/profile/canceled'>
                            <form action='/profile/delete'method='POST'>
                                  <input type='hidden' name='del' value={this.state.deleted} ref={this.detected}/>
                                  <button type='submit' id='postpone2'>Удалить</button>
                            </form>
                              <a href='/unsubscribe' id='unsubscribe3'>Отправить ссылку на подписку</a>
                          </Route>
                <a href='/table' id='table'>Экспорт в xslx</a>
            </div>
            {this.userData()}
          </div>
		    </div>
      )
  }
}

export default Profile;
