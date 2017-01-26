'use strict';

var Mongoose = require('mongoose');

exports.dbConnect = function(){
  Mongoose.connect('mongodb://root:root@ds055535.mlab.com:55535/k010db');
  Mongoose.Promise = global.Promise;
  var db = Mongoose.connection;
  db.on('error', console.error);
  return db;
}

exports.dbClose = function(){
  Mongoose.connection.close()
}
