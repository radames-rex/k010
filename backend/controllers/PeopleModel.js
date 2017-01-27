'use strict';

var Mongoose = require('mongoose');

var peopleSchema = new Mongoose.Schema({
  name: 'string',
  email: 'string',
  friend: 'string'
});
module.exports = Mongoose.model('People',peopleSchema);
