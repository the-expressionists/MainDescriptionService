const axios = require('axios');
// import { Module } from 'webpack';

module.exports.findOne = (callback) => {
    axios.get('http://localhost:3000/api/itemDetails/')
      .then(function ({data}) {
        callback(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };