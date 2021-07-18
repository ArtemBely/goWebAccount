import React from 'react';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Registration from '../../components/Registration';
import passport from 'passport';
const express = require('express');
const router = express.Router();

router.get('/', notLoggedIn, (req, res) => {
  const reg = renderToString(
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
                       </head>
                     <body>
                   <div id="app">
                 ${reg}
              </div>
            </body>
        </html>`
    );
});

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
