import React, { Component } from "react";
import axios from 'axios';

async function getUsers() {
  return await axios.get('https://mysterious-atoll-84321.herokuapp.com/api/profile')
  .then(res => {
      let info = res.data;
      return info;
  })
  .catch(err => console.log(err))
}

getUsers()
.then(info => info)
.catch(err => console.log(err))

export { getUsers };
