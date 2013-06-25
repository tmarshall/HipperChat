var rooms = require('./rooms.js');
var users = require('./users.js');

function hipper(auth) {
  this.rooms = new rooms(auth);
  this.users = new users(auth);
}

module.exports = hipper;