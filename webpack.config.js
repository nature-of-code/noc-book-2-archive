// TODO: setup webpack config to build NOC :) 

const webpack = require('webpack');

// Defaults
// -------------------------------------------------

const config = {};

// Production
// -------------------------------------------------

if(process.env.NODE_ENV == 'production') {

  console.log("hello from webpack! - production")

}

module.exports = config;