import React from 'react';
import mongoose from 'mongoose';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.send('hello');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
  };
    res.redirect('/');
}

export default router;
