import React from 'react';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import User from '../models/User.js';
import Enter from '../../components/Enter';
import Registration from '../../components/Registration';

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

require('dotenv/config');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/', notLoggedIn, (req, res, next) => {
  const lay = renderToString(
    <StaticRouter>
       <Registration />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Вход</title>
                <link rel="stylesheet" type="text/css" href="main.css">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='bundle.js' defer></script>
                      </head>
                    <body>
                   <div id="app">
                 ${lay}
              </div>
            </body>
        </html>`
  )
});

router.post('/', (req, res, done) => {

  var { email, password } = req.body;

  req.checkBody('email', 'Неправильный Email').isEmail();
  req.checkBody('password', 'Минимально число символов в пароле - 5').isLength({min: 5});

  var errors = req.validationErrors();

  if(errors) {
    console.log(errors);
     var err = errors.map(error => error.msg);
     const lay = renderToString(
      <StaticRouter>
         <Registration />
      </StaticRouter>
    )
  return res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${lay}
              </div>
            </body>
        </html>`
      );
  }

  User.findOne({email: email}, function(err, user) {
  if (err) {
    return done(err);
  }
  if(user) {
    const errors = ['Такой Email уже используется'];
    const cond = req.isAuthenticated();
    const lay = renderToString(
     <StaticRouter>
        <Registration />
     </StaticRouter>
   )
    res.send(
     `<!DOCTYPE html>
         <html>
             <head>
               <title>Проверка кода</title>
                    <link rel="stylesheet" type="text/css" href="main.css">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                        <script src='bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(errors)}</script>
                        </head>
                      <body>
                    <div id="app">
                  ${lay}
               </div>
             </body>
         </html>`
       );
    return done(null, false);
  }

var newUser = new User({
  email: email,
  password: password
});

User.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(user);
   });

   const success = ['Регистрация завершена успешно, можете войти'];
   const lay = renderToString(
    <StaticRouter>
       <Registration />
    </StaticRouter>
  )
res.send(
  `<!DOCTYPE html>
      <html>
          <head>
            <title>Проверка кода</title>
                 <link rel="stylesheet" type="text/css" href="main.css">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
                     <script src='bundle.js' defer></script>
                     <script>window.__INITIAL_DATA__= ${serialize(success)}</script>
                     </head>
                   <body>
                 <div id="app">
               ${lay}
            </div>
          </body>
      </html>`
    );

  });
});

passport.use('local.signin', new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
 function(req, email, password, done) {

  User.findOne({email: email}, function (err, user) {
    if (err) {
      console.log(err);
      return done(err);
    }

      if (!user) {   // --> вызывает get запрос данной url
       req.flash('errors', 'Не найдено пользователей. Ошибка в почте');
       return done(null, false);
     }

    User.comparePassword(password, user.password, function(err, isMatch) {
      if (err) throw err;
      if(isMatch) {
        return done(null, user);
      }
      else {
        req.flash('error', 'Неверный пароль');
        return done(null, false)
      }
    })
  });

}));

router.post('/signin',
    passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/enter',
    passReqToCallback: true
 })
);

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
