import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Profile from '../../components/Profile';
import passport from 'passport';
import { getUsers } from '../../components/fetchData';

const router = express.Router();

require('dotenv/config');

var conn1 = mongoose.createConnection(
  process.env.CUSTOMERS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => { console.log('CUSTOMERS DB connected!');}
);

const Customer = conn1.model('User', new mongoose.Schema({
  username:{type: String, required: true},
  userphone:{type: String, required: true},
  email:{type: String, required: true},
  timestamp: {type: String},
  adminComment: {type: String},
  password: {type: String, required: true},
  useraddress: {type: String, required: true},
  typeOfPayment: {type: String, required: true},
  typeOfSkin: {type: String},
  comments: {type: String},
  letter: {type: String}
}));

router.get(['/', '/canceled'], isLoggedIn, async (req, res, next) => {

    let users = await Customer.find();
    let cond = req.isAuthenticated();
    const congrats = renderToString(
      <StaticRouter>
         <Profile />
      </StaticRouter>
    )
    return res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Проверка кода</title>
                     <link rel="stylesheet" type="text/css" href="../main.css">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                         <script src='/bundle.js' defer></script>
                         <script>window.__INITIAL_DATA__ = ${serialize(users)}</script>
                         <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                         </head>
                       <body>
                     <div id="app">
                   ${congrats}
                </div>
              </body>
          </html>`
      );
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/delete', async (req, res) => {
  let users = req.body.del;
  let usersArr = users.split(',');
   let i;
   for (i=0; i<usersArr.length; i++) {
     let needUser = await Customer.findById(usersArr[i]);
     needUser.delete();
   }
   res.redirect('/profile/canceled');
});

router.post('/:id', async (req, res) => {
  let id = req.params.id;
  let user = await Customer.findById(id);
  user.adminComment = req.body.textData;
  user.save();
  console.log(user);
  res.redirect('/profile');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/');
}

export default router;
