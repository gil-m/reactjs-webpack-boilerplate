"use strict";

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
}).listen(3000, (err)=>{
  if (err){
    console.log(err);
  }
  console.log('Listening on http://localhost:3000');
});
