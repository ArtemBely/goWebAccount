import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Account extends React.Component {
  render() {
    return (
      <p className='wrap_account'>
        <div className='wrap_container-center-horizontal'>

              <div className="container-center-horizontal">
                 <div className="settings screen">
                   <div className="flex-row">
                     <div className="flex-col">
                       <h1 className="input valign-text-middle h2" id='acc_set'>Account settings</h1>
                       <div className="component-10">
                         <div className="group-99">
                           <div className="input-1 valign-text-bottom roboto-normal-star-dust-18px">Email</div>
                           <div className="frame-99">
                             <div className="input-2 valign-text-bottom roboto-normal-black-18px-22">i.ivanov@gmail.com</div>
                           </div>
                         </div>
                         <div className="group-100">
                           <div className="input-3 valign-text-bottom roboto-normal-star-dust-18px">Password</div>
                           <div className="frame-99-1">
                             <div className="input-4 valign-text-bottom roboto-normal-black-18px-22">**********</div>
                           </div>
                         </div>
                       </div>
                       <div className="frame-704">
                         <img className="shape" src="https://anima-uploads.s3.amazonaws.com/projects/61afb3b2eba543ba935a2340/releases/61afb47749c0c48d6cb435fd/img/shape@2x.svg" />
                         <div className="input-5 valign-text-middle roboto-normal-black-18px-22">Balance notifications</div>
                       </div>
                       <div className="frame-703">
                         <img className="shape shape2" src="https://anima-uploads.s3.amazonaws.com/projects/61afb3b2eba543ba935a2340/releases/61afb47749c0c48d6cb435fd/img/shape@2x.svg" />
                         <div className="input-6 valign-text-middle roboto-normal-black-18px-22">
                           Service announcements, updates, and feedback and surveys
                         </div>
                       </div>
                       <div className="input-7 valign-text-middle roboto-normal-black-18px-22"><a href='/profile/signout' style={{color: 'black'}}>Sign Out</a></div>
                     </div>
                     <div className="flex-col-1">
                       <div className="group-78">
                         <div className="input valign-text-middle h2" id='acc_bal'>Balance</div>
                         <div className="input-8 roboto-normal-star-dust-18px">
                           To make transactions, you need <br />to connect your wallet with MetaMask
                         </div>
                       </div>
                       <div className="frame-702">
                         <img className="group-59" src="https://anima-uploads.s3.amazonaws.com/projects/61afb3b2eba543ba935a2340/releases/61afb47749c0c48d6cb435fd/img/group-59-1@2x.svg" />
                         <div className="input-9 valign-text-bottom roboto-normal-black-18px-22">Add MetaMask</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
         </div>
      </p>
    )
  }
}

export default Account;
