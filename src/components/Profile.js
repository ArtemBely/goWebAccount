import React from "react";
import logo from "../../public/images/logo.svg";
import { Link } from "react-router-dom";
import burger from "../../public/images/burger.png";
import closed from "../../public/images/close_menu.png";
import arrowDown from "../../public/images/arrow_down.png";
import checkBox from "../../public/images/checkbox.png";


import "../../public/styles/style5.css";
// import { Route, NavLink } from 'react-router-dom';
// import search from '../../public/images/Ellipse 40.svg';
// import { getUsers } from './fetchData';

// class Profile extends React.Component{

//   constructor() {

//     super()

//     let info;
//     let genry;
//     if(__isBrowser__) {
//       info = window.__INITIAL_DATA__;
//     }
//     this.state = {
//       info,
//       genry: [],
//       deleted: []
//     }

//     this.inp1 = React.createRef();
//     this.inp = React.createRef();
//     this.subscribes = React.createRef();
//     this.unsubscribes = React.createRef();
//     this.detected = React.createRef();
//   }

// handleClick = (e) => {
//     let candidateDelete = e.target.value;
//     if(!this.state.deleted.includes(candidateDelete)) {
//       this.setState({ deleted: [...this.state.deleted, candidateDelete] });
//       setTimeout(() => {
//         console.log(this.state.deleted);
//         this.detected.current.value == this.state.deleted;
//       }, 250)
//     }
//     else {
//       let ind = this.state.deleted.indexOf(candidateDelete);
//       this.state.deleted.splice(ind, 1);
//       console.log(this.state.deleted);
//       this.detected.current.value == this.state.deleted;
//     }
// }

// userData = () => {

//     if(this.state.info && this.state.genry && this.state.genry.length == 0) {
//       return(
//         <div className='wrap_userData'>
//         <Route exact path='/profile'>
//         {this.state.info.map((info, index) => (
//           <div className='userInfo' style={{
//             display: info.cancel == 'yes' ? 'none' : 'grid'
//           }}>
//              <div className='infoBlock1'>
//                 <input type='checkbox' name='check' className='eachCheck' value={info._id} />
//                 <p className='credentials userIndex'>{index + 1}</p>
//                 <p className='credentials usName'>{info.cancel == 'no' ? info.username : null}</p>
//                 <p className='credentials usAdd'>{info.cancel == 'no' ? info.useraddress : null}</p>
//                 <p className='credentials usTime'>{info.cancel == 'no' ? info.timestamp : null}</p>
//                 <p className='credentials usPay'>{info.cancel == 'no' ? info.typeOfPayment : null}</p>
//                 <p className='credentials usPhone'>{info.cancel == 'no' ? info.userphone : null}</p>
//                 <p className='credentials usMail'>{info.cancel == 'no' ? info.email : null}</p>
//              </div>
//              <div className='infoBlock2'>
//                 <form action={'/profile/' + info._id} method='POST'>
//                   <textarea className='areas' name='textData'>{info.adminComment}</textarea>
//                   <button type='submit' className='buttonChange'>Изменить</button>
//                 </form>
//              </div>
//           </div>
//         ))}
//         </Route>
//         <Route exact path='/profile/canceled'>
//         {this.state.info.map((info, index) => (
//           <div className='userInfo' style={{
//             display: info.cancel == 'no' ? 'none' : 'grid'
//           }}>
//              <div className='infoBlock1'>
//                 <input type='checkbox' name='check' className='eachCheck' value={info._id} onChange={this.handleClick}/>
//                 <p className='credentials userIndex'>{index + 1}</p>
//                 <p className='credentials usName'>{info.cancel == 'yes' ? info.username : null}</p>
//                 <p className='credentials usAdd'>{info.cancel == 'yes' ? info.useraddress : null}</p>
//                 <p className='credentials usTime'>{info.cancel == 'yes' ? info.timestamp : null}</p>
//                 <p className='credentials usPay'>{info.cancel == 'yes' ? info.typeOfPayment : null}</p>
//                 <p className='credentials usPhone'>{info.cancel == 'yes' ? info.userphone : null}</p>
//                 <p className='credentials usMail'>{info.cancel == 'yes' ? info.email : null}</p>
//              </div>
//              <div className='infoBlock2'>
//                 <form action={'/profile/' + info._id} method='POST'>
//                   <textarea className='areas' name='textData'>{info.adminComment}</textarea>
//                   <button type='submit' className='buttonChange'>Изменить</button>
//                 </form>
//              </div>
//           </div>
//         ))}
//         </Route>
//         </div>
//       )
//     }
//     else
//       return(
//           <div className='wrap_userData'>
//           <Route exact path='/profile'>
//           {this.state.genry.map((genr, index) => (
//             <div className='userInfo' style={{
//               display: genr.cancel == 'yes' ? 'none' : 'grid'
//             }}>
//                <div className='infoBlock1'>
//                   <input type='checkbox' name='check' className='eachCheck'/>
//                   <p className='credentials userIndex'>{index + 1}</p>
//                   <p className='credentials usName'>{genr.cancel == 'no' ? genr.username : null}</p>
//                   <p className='credentials usAdd'>{genr.cancel == 'no' ? genr.useraddress : null}</p>
//                   <p className='credentials usTime'>{genr.cancel == 'no' ? genr.timestamp : null}</p>
//                   <p className='credentials usPay'>{genr.cancel == 'no' ? genr.typeOfPayment : null}</p>
//                   <p className='credentials usPhone'>{genr.cancel == 'no' ? genr.userphone : null}</p>
//                   <p className='credentials usMail'>{genr.cancel == 'no' ? genr.email : null}</p>
//                </div>
//                <div className='infoBlock2'>
//                   <form action={'/profile/' + genr._id} method='POST'>
//                     <input className='areasDouble' id='ars' name='textData' placeholder={genr.adminComment} />
//                     <button type='submit' className='buttonChange'>Изменить</button>
//                   </form>
//                </div>
//             </div>
//           ))}
//           </Route>
//           <Route exact path='/profile/cancel'>
//           {this.state.genry.map((genr, index) => (
//             <div className='userInfo' style={{
//               display: genr.cancel == 'no' ? 'none' : 'grid'
//             }}>
//                <div className='infoBlock1'>
//                   <input type='checkbox' name='check' className='eachCheck'/>
//                   <p className='credentials userIndex'>{index + 1}</p>
//                   <p className='credentials usName'>{genr.cancel == 'yes' ? genr.username : null}</p>
//                   <p className='credentials usAdd'>{genr.cancel == 'yes' ? genr.useraddress : null}</p>
//                   <p className='credentials usTime'>{genr.cancel == 'yes' ? genr.timestamp : null}</p>
//                   <p className='credentials usPay'>{genr.cancel == 'yes' ? genr.typeOfPayment : null}</p>
//                   <p className='credentials usPhone'>{genr.cancel == 'yes' ? genr.userphone : null}</p>
//                   <p className='credentials usMail'>{genr.cancel == 'yes' ? genr.email : null}</p>
//                </div>
//                <div className='infoBlock2'>
//                   <form action={'/profile/' + genr._id} method='POST'>
//                     <input className='areasDouble' id='ars' name='textData' placeholder={genr.adminComment} />
//                     <button type='submit' className='buttonChange'>Изменить</button>
//                   </form>
//                </div>
//             </div>
//           ))}
//           </Route>
//         </div>
//       )
//     }

// indicate = () => {
//   let searchData0 = this.inp1.current.value;
//   let searchData = searchData0.split('');

//   if(this.state.info) {
//     this.setState({ grey: [] });
//         let names = this.state.info.filter(function(name) {
//            let i;
//            for(i=0; i<3 ; i++) {
//                 return name.username.split('')[i].toLowerCase() == searchData[i].toLowerCase();
//            }
//          });

//          let mails = this.state.info.filter(function(mail) {
//            let b;
//            for(b=0; b<3; b++) {
//                return mail.email.split('')[b] == searchData[b];
//            }
//          });

//         let types = this.state.info.filter(function(typ) {
//           let r;
//           for(r=0; r<3; r++) {
//               return typ.typeOfPayment.split('')[r].toLowerCase() == searchData[r].toLowerCase();
//           }
//         });

//      this.setState({ genry: names.length > 0 ? names : mails.length > 0 ? mails : types.length > 0 ? types : window.__INITIAL_DATA__ });
//      setTimeout(() => {console.log(this.state.genry)},100)
//   }
// }
// subDelete = () => {
//   if(this.subscribes.current.classList.contains('subAdd')) {
//     this.subscribes.current.classList.remove('subAdd');
//   }
// }
// subAdd = () => {
//   if(!this.subscribes.current.classList.contains('subAdd')) {
//     this.subscribes.current.classList.add('subAdd');
//   }
// }
//   render() {
//       return(
//         <div className='wrap_profile'>
//            <div className='profile'>
//               <div className='header'>
//                  {/* <NavLink to='/profile' className='subscribe' onClick={this.subDelete} ref={this.subscribes}> Подписки </NavLink> */}
//                    <NavLink to="/profile/canceled" className='unsubscribe' activeClassName='actSub' onClick={this.subAdd} ref={this.unsubscribes}> Отписались </NavLink>
//                     <a href='/profile/logout' id='exit'>Выйти</a>
//                           <input type='text' name='search' className='searchForm' ref={this.inp1} />
//                           <img src={search} id='searchImg' onClick={this.indicate}/>
//                           <Route exact path='/profile'>
//                               <a href='/postpone' id='postpone'>Отложить</a>
//                               <a href='/unsubscribe' id='unsubscribe2'>Отписать</a>
//                           </Route>
//                           <Route exact path='/profile/canceled'>
//                             <form action='/profile/delete'method='POST'>
//                                   <input type='hidden' name='del' value={this.state.deleted} ref={this.detected}/>
//                                   <button type='submit' id='postpone2'>Удалить</button>
//                             </form>
//                               <a href='/unsubscribe' id='unsubscribe3'>Отправить ссылку на подписку</a>
//                           </Route>
//                 <a href='/table' id='table'>Экспорт в xslx</a>
//             </div>
//             {this.userData()}
//           </div>
// 		    </div>
//       )}
// }

// export default Profile;


function Profile() {


// const inputList = document.querySelectorAll('.form__input');
// console.log(inputList);
// alert('Hello');


  function clickMenu() {
    const menuBurger = document.querySelector(".burger_menu_lk");
    menuBurger.className = "burger_menu_open_lk";
  }

  function closeMenu() {
    const menuBurger = document.querySelector(".burger_menu_open_lk");
    menuBurger.className = "burger_menu_lk";
  }

  function createModel1(e) {
    const createBtn = document.querySelector(".btn_create");
    const addImages = document.querySelector(".btn_images");
    const backBtn = document.querySelector(".btn_back");
    const hintImg = document.querySelector(".hint_images");
    console.log(hintImg);

    createBtn.className = "btn_create";
    addImages.className = "content_btn";
    backBtn.className = "content_btn";
    hintImg.classList.add("orange_hint");
    e.preventDefault();
  }

  function addImagesClick(e) {
    const createBtn = document.querySelector(".btn_create");
    const addData = document.querySelector(".btn_data");
    const addImages = document.querySelector("#vova");
    const backBtn = document.querySelector(".btn_back");
    const hintData = document.querySelector(".hint_data");

    addImages.className = "btn_images";
    addData.className = "content_btn";
    hintData.classList.add("orange_hint");
    e.preventDefault();
  }

  function addDataClick(e) {
    const createForm = document.querySelector(".content_item_create");
    const hintItems = document.querySelector(".hint_items");

    createForm.className = "create_open";
    hintItems.classList.add("orange_hint");
    e.preventDefault();
  }

  function createClick(e) {
    const backBtn = document.querySelector(".btn_back_text");
    const addData = document.querySelector(".btn_data_text");
    const hintData = document.querySelector(".hint_data-2");

    e.target.className = "btn_create";
    addData.className = "content_btn";
    backBtn.className = "content_btn";
    hintData.classList.add("orange_hint");
    e.preventDefault();
  }

  function addDataclick2(e) {
    const createForm = document.querySelector(".content_item_create-2");
    const hintItems = document.querySelector(".hint_items-2");

    createForm.className = "create_open-2";
    hintItems.classList.add("orange_hint");
    e.preventDefault();
  }

  function backClick(e) {
    const createForm = document.querySelector(".create_open");

    if (document.contains(document.querySelector(".create_open"))) {
      createForm.className = "content_item_create";
    } else return;

    e.preventDefault();
  }

  function backClick2(e) {
    const createForm = document.querySelector(".create_open-2");

    if (document.contains(document.querySelector(".create_open-2"))) {
      createForm.className = "content_item_create";
    } else return;

    e.preventDefault();
  }

  return (
    <>
      <header className="header_acc">
        <div className="header_wrap">
          <Link className="header_link" to="/">
            <img src={logo} alt="logo" className="header_logo" />
          </Link>
          <div className="header_nav">
            <p className="header_nav_item item_computing">Cloud computing</p>
            <p className="header_nav_item">i.ivanov</p>
            <p className="header_nav_item">BTC 0,05</p>
          </div>
          <Link className="burger_menu_link" to="#">
            <img
              src={burger}
              alt="menu"
              className="menu_img_acc"
              onClick={clickMenu}
            />
          </Link>
          <div className="burger_menu_lk burger_menu_open_lk">
            <div className="burger_menu_header">
              <img src={logo} alt="logo" className="header_logo" />
              <img
                src={closed}
                alt="logo"
                className="burger_menu_close"
                onClick={closeMenu}
              />
            </div>
            <div className="menu_burger_item">
              <p className="header_nav_item item_computing">Cloud computing</p>
              <p className="header_nav_item">i.ivanov</p>
              <p className="header_nav_item">BTC 0,05</p>
            </div>
          </div>
        </div>
      </header>
      <div className="acc_content_wrap">
        <div className="main_wrap_acc">
          <div className="acc_wrap">
            <div className="acc_text">
              <h3 className="acc_heading item_computing">Cloud computing</h3>
              <p className="acc_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <div className="acc_content">
              <div className="content_item content-1">
                <h3 className="content_title">Computer vision</h3>
                <p className="content_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="content_hint">
                  <span className="hint_images">Images </span>
                  <span className="hint_data">→ Data </span>
                  <span className="hint_setting">→ Settings</span>→ Start
                </p>
                <div className="content_btns">
                  <Link className="content_link" to="/">
                    <p
                      className="content_btn btn_create"
                      onClick={createModel1}
                    >
                      Create new model
                    </p>
                  </Link>
                  <Link className="content_link" to="/">
                    <p
                      className="btn_images content_btn"
                      id="vova"
                      onClick={addImagesClick}
                    >
                      + Add images
                    </p>
                  </Link>
                  <Link className="content_link" to="/">
                    <p className="btn_data content_btn" onClick={addDataClick}>
                      + Add data
                    </p>
                  </Link>
                  <Link className="content_link" to="/">
                    <p className="btn_back content_btn">Back</p>
                  </Link>
                </div>
              </div>
              <div className="content_item_create create_open">
                <h3 className="content_title">Computer vision</h3>
                <p className="content_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>

                <p className="content_hint hint_create">
                  <span className="hint_items">Images → Data → Settings</span>→
                  Start
                </p>
                <div className="line line_slider">
                  <p className="line-text">Learning rate</p>
                  <label className="label_range">1e-9</label>
                  <input
                    type="range"
                    min="1"
                    max="9"
                    value="1"
                    className="slider_range"
                  />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Optimizers</p>
                  <input type="text" value="SGD" className="line-input" />
                </div>
                <div className="line">
                  <p className="line-text">Batch size</p>
                  <input type="text" value="1" className="line-input" />
                </div>
                <div className="line-2">
                  <p className="line-text">Train</p>
                  <img src={checkBox} alt="check" className="check_mark" />
                  <input type="checkbox" className="line_checkbox" />
                  <p className="line-text test_split">Test split</p>
                  <input type="text" value="0,5" className="line-input" />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Accuracy metrics</p>
                  <input type="text" value="AUC" className="line-input" />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Model</p>
                  <input
                    type="text"
                    value="NASNetLarge"
                    className="line-input"
                  />
                </div>
                <div className="line-info">
                  <p className="line-text line-text-info">
                    Size<span className="data_size">0 Mb</span>
                  </p>
                  <p className="line-text line-text-info">
                    Number of datapoints
                    <span className="data_datapoints">378 445</span>
                  </p>
                </div>
                <div className="line_bottom">
                  <div className="line_btn">
                    <Link className="content_link" to="/">
                      <p className="btn_start content_btn">Start</p>
                    </Link>
                    <Link className="content_link" to="/">
                      <p
                        className="btn_back_line content_btn"
                        onClick={backClick}
                      >
                        Back
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content_item content-2">
                <h3 className="content_title">Text processing</h3>
                <p className="content_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="content_hint">
                  <span className="hint_data-2">Data </span>
                  <span className="hint_setting-2">→ Settings</span>→ Start
                </p>
                <div className="content_btns">
                  <Link className="content_link" to="/">
                    <p className="btn_create content_btn" onClick={createClick}>
                      Create new model
                    </p>
                  </Link>
                  <Link className="content_link" to="/">
                    <p
                      className="btn_data_text content_btn"
                      onClick={addDataclick2}
                    >
                      + Add data
                    </p>
                  </Link>
                  <Link className="content_link" to="/">
                    <p className="btn_back_text content_btn">Back</p>
                  </Link>
                </div>
              </div>
              <div className="content_item_create-2 create_open-2">
                <h3 className="content_title">Text processing</h3>
                <p className="content_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>

                <p className="content_hint hint_create">
                  <span className="hint_items-2"> Data → Settings</span> → Start
                </p>
                <div className="line line_slider">
                  <p className="line-text">Learning rate</p>
                  <label className="label_range">1e-9</label>
                  <input
                    type="range"
                    min="1"
                    max="9"
                    value="1"
                    className="slider_range"
                  />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Optimizers</p>
                  <input type="text" value="SGD" className="line-input" />
                </div>
                <div className="line">
                  <p className="line-text">Batch size</p>
                  <input type="text" value="1" className="line-input" />
                </div>
                <div className="line-2">
                  <p className="line-text">Train</p>
                  <img src={checkBox} alt="check" className="check_mark" />
                  <input type="checkbox" className="line_checkbox" />
                  <p className="line-text test_split">Test split</p>
                  <input type="text" value="0,5" className="line-input" />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Accuracy metrics</p>
                  <input type="text" value="AUC" className="line-input" />
                </div>
                <div className="line">
                  <img src={arrowDown} alt="arrow" className="line_arrow" />
                  <p className="line-text">Model</p>
                  <input
                    type="text"
                    value="NASNetLarge"
                    className="line-input"
                  />
                </div>
                <div className="line-info">
                  <p className="line-text line-text-info">
                    Size<span className="data_size">0 Mb</span>
                  </p>
                  <p className="line-text line-text-info">
                    Number of datapoints
                    <span className="data_datapoints">378 445</span>
                  </p>
                </div>
                <div className="line_bottom">
                  <div className="line_btn">
                    <Link className="content_link" to="/">
                      <p className="btn_start content_btn">Start</p>
                    </Link>
                    <Link className="content_link" to="/">
                      <p
                        className="btn_back_line content_btn"
                        onClick={backClick2}
                      >
                        Back
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content_item item_mining">
                <h3 className="content_title mining_title">Mining</h3>
                <p className="content_text mining_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="content_hint mining_hint">Settings → Start</p>
                <Link className="content_link" to="/">
                  <p className="content_btn mining_btn ">Soon</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="data_wrapper">
            <h3 className="data_title">Report about wasted resources</h3>
            <div className="data_wrap">
              <p className="data_item data_item_title">Status</p>
              <p className="data_item data_item_title">Network type</p>
              <p className="data_item data_item_title">Wasted resources</p>
              <p className="data_item data_item_title">Duration</p>
              <p className="data_item data_item_title">Price</p>
              <p className="data_item data_item_title data_item_period">
                Date period
              </p>
              <p className="data_item process">In process</p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item">Compleated</p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
              <p className="data_item"></p>
            </div>
          </div>
          <div className="data_wrap_phone-1">
            <p className="data_item data_item_title">Network type</p>
            <p className="data_item data_item_title">Price</p>
            <p className="data_item data_item_title">Wasted resources</p>
            <p className="data_item data_item_title">Status</p>
            <p className="data_item item_start"></p>
            <p className="data_item"></p>
            <p className="data_item"></p>
            <p className="data_item process">In process</p>
            <p className="data_item item_start"></p>
            <p className="data_item data_period"></p>
          </div>
          <div className="data-wrap_phone-2">
            <p className="data_item"></p>
            <p className="data_item process">In process</p>
            <p className="data_item data_item_title">Date period</p>
            <p className="data_item"></p>
            <p className="data_item data_item_title item_price">Price</p>
            <p className="data_item item_price_tx"></p>
            <p className="data_item data_item_title item_wasted">
              Wasted resources
            </p>
            <p className="data_item item_wasted_tx"></p>
            <p className="data_item data_item_title item_duration">Duration</p>
            <p className="data_item item_duration_tx"></p>
            <p className="data_item data_tx-1"></p>
            <p className="data_item data_tx-2"></p>
            <p className="data_item data_tx-3"></p>
            <p className="data_item data_tx-4"></p>
            <p className="data_item data_tx-5"></p>
            <p className="data_item data_tx-6"></p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
