import React, { Component } from "react";
import axios from 'axios';

async function getUsers() {
  return await axios.get('http://localhost:8888/api/profile')
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
