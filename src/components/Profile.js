import React from "react";
import logo from "../../public/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Need_Header from './Need_Header';
import burger from "../../public/images/burger.png";
import closed from "../../public/images/close_menu.png";
import arrowDown from "../../public/images/arrow_down.png";
import checkBox from "../../public/images/checkbox.png";


import "../../public/styles/style5.css";


class Profile extends React.Component {

  constructor() {

    super()

    this.create_open2 = React.createRef();
  }

   clickMenu = () => {
    const menuBurger = document.querySelector(".burger_menu_lk");
    menuBurger.className = "burger_menu_open_lk";
  }

   closeMenu = () => {
    const menuBurger = document.querySelector(".burger_menu_open_lk");
    menuBurger.className = "burger_menu_lk";
  }

   createModel1 = (e) => {
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
   createClick = (e) => {
    const backBtn = document.querySelector(".btn_back_text");
    const addData = document.querySelector(".btn_data_text");
    const hintData = document.querySelector(".hint_data-2");

    e.target.className = "btn_create";
    addData.className = "content_btn";
    backBtn.className = "content_btn";
    hintData.classList.add("orange_hint");
    e.preventDefault();
  }

   addImagesClick = (e) => {
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

   addDataClick = () => {
    const createForm = document.querySelector(".content_item_create");
    const hintItems = document.querySelector(".hint_items");

    createForm.className = "create_open";
    hintItems.classList.add("orange_hint");
  }

   addDataclick2 = () => {
    const createForm = document.querySelector(".content_item_create-2");
    const hintItems = document.querySelector(".hint_items-2");

    createForm.className = "create_open-2";
    hintItems.classList.add("orange_hint");
    if(this.create_open2.current.classList.contains('dispNone')) {
      this.create_open2.current.classList.remove('dispNone');
    }
  }

   backClick2 = () => {
     /*if(!this.create_open2.current.classList.contains('dispNone')) {
       this.create_open2.current.classList.add('dispNone');
     }
     const createForm = document.querySelector(".content_item_create-2");
    */
    const createForm = document.querySelector(".create_open-2");

    if (document.contains(document.querySelector(".create_open-2"))) {
      createForm.className = "content_item_create";
    } else return;
  }

   backClick = () => {
    const createForm = document.querySelector(".create_open");

    if (document.contains(document.querySelector(".create_open"))) {
      createForm.className = "content_item_create";
    } else return;
  }

  render() {
    return (
      <>
      <Need_Header />
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

            <div className='wrap_cont'>
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
                        onClick={this.createModel1}
                      >
                        Create new model
                      </p>
                    </Link>
                    <Link className="content_link" to="/">
                      <p
                        className="btn_images content_btn"
                        id="vova"
                        onClick={this.addImagesClick}
                      >
                        + Add images
                      </p>
                    </Link>
                    <Link className="content_link" to="/profile">
                      <p className="btn_data content_btn" onClick={this.addDataClick}>
                        + Add data
                      </p>
                    </Link>
                    <Link className="content_link" to="/profile">
                      <p className="btn_back content_btn" id='mini_back'>Back</p>
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
                    <p className="line-text lear_r">Learning rate</p>
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
                    <img src={arrowDown} alt="arrow" className="line_arrow arr_tablet" />
                    <p className="line-text accMet">Accuracy metrics</p>
                    <input type="text" value="AUC" className="line-input aud" />
                  </div>
                  <div className="line">
                    <img src={arrowDown} alt="arrow" className="line_arrow arr_tablet" />
                    <p className="line-text mod1">Model</p>
                    <input
                      type="text"
                      value="NASNetLarge"
                      className="line-input NASNetLarge"
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
                      <Link className="content_link" to="/profile">
                        <p
                          className="btn_back_line content_btn"
                          onClick={this.backClick}
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
                    <Link className="content_link" to="/profile">
                      <p className="btn_create content_btn" onClick={this.createClick}>
                        Create new model
                      </p>
                    </Link>
                    <Link className="content_link" to="/profile">
                      <p
                        className="btn_data_text content_btn"
                        onClick={this.addDataclick2}
                        style={{width: '130px'}}
                      >
                        + Add data
                      </p>
                    </Link>
                    <Link className="content_link" to="/profile">
                      <p className="btn_back_text content_btn" id='back2'>Back</p>
                    </Link>
                  </div>
                </div>
                <div className="content_item_create-2 create_open-2" ref={this.create_open2}>
                  <h3 className="content_title">Text processing</h3>
                  <p className="content_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>

                  <p className="content_hint hint_create">
                    <span className="hint_items-2"> Data → Settings</span> → Start
                  </p>
                  <div className="line line_slider">
                    <p className="line-text lear_r">Learning rate</p>
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
                    <img src={arrowDown} alt="arrow" className="line_arrow arr_tablet" />
                    <p className="line-text accMet">Accuracy metrics</p>
                    <input type="text" value="AUC" className="line-input aud" />
                  </div>
                  <div className="line">
                    <img src={arrowDown} alt="arrow" className="line_arrow arr_tablet" />
                    <p className="line-text mod1">Model</p>
                    <input
                      type="text"
                      value="NASNetLarge"
                      className="line-input NASNetLarge"
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
                      <Link className="content_link" to="/profile">
                        <p
                          className="btn_back_line content_btn"
                          onClick={this.backClick2}
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

            </div>
            <div className="data_wrapper">
              <h3 className="data_title">Report about wasted resources</h3>
              <div className="data_wrap">
                <p className="data_item data_item_title">Status</p>
                <p className="data_item data_item_title">Network type</p>
                <p className="data_item data_item_title">Wasted resources</p>
                <p className="data_item data_item_title dur">Duration</p>
                <p className="data_item data_item_title">Price</p>
                <p className="data_item data_item_title data_item_period">
                  Date period
                </p>
                <p className="data_item process">In process</p>
                <p className="data_item">Resnet50</p>
                <p className="data_item">312 321</p>
                <p className="data_item">1d 1h 15m 5s</p>
                <p className="data_item">USD 15</p>
                <p className="data_item certain_time">12 June, 09:55:16 → ..</p>
                <p className="data_item">Compleated</p>
                <p className="data_item">Resnet50</p>
                <p className="data_item">312 321</p>
                <p className="data_item">1d 1h 15m 5s</p>
                <p className="data_item">USD 15</p>
                <p className="data_item certain_time">12 June, 09:55:16  → 13 June, 11:56:14</p>
              </div>
            </div>
        <p className='wrap2_phone1'>
            <div className="data_wrap_phone-1">
              <p className="data_item data_item_title">Network type</p>
              <p className="data_item data_item_title">Price</p>
              <p className="data_item data_item_title">Wasted resources</p>
              <p className="data_item data_item_title">Status</p>
              <p className="data_item item_start">Resnet50</p>
              <p className="data_item">USD 15</p>
              <p className="data_item">312 321</p>
              <p className="data_item process">In process</p>
              <p className="data_item item_start">1d 1h 15m 5s</p>
              <p className="data_item data_period">12 June, 09:55:16  → 13 June, 11:56:14</p>
            </div>
        </p>
            <div className="data-wrap_phone-2">
              <p className="data_item">Resnet50</p>
              <p className="data_item process">In process</p>
              <p className="data_item data_item_title">Date period</p>
              <p className="data_item grey_data">12 June, 09:55:16 → 13 June, 11:56:14</p>
              <p className="data_item data_item_title item_price">Price</p>
              <p className="data_item item_price_tx">USD 15</p>
              <p className="data_item data_item_title item_wasted">
                Wasted resources
              </p>
              <p className="data_item item_wasted_tx">312 321</p>
              <p className="data_item data_item_title item_duration">Duration</p>
              <p className="data_item item_duration_tx">1d 1h 15m 5s</p>
              <p className="data_item data_tx-1">Resnet50</p>
              <p className="data_item data_tx-2">Compleated</p>
              <p className="data_item data_tx-3 grey_data">12/6, 09:55:16 → 13/6, 11:56:14</p>
              <p className="data_item data_tx-4">USD 15</p>
              <p className="data_item data_tx-5">312 321</p>
              <p className="data_item data_tx-6">1d 1h 15m 5s</p>
            </div>
          </div>
        </div>
      </>
    );
  }


}
export default Profile;
