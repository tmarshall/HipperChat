var rooms = require('./rooms.js');

function hipper(auth) {
	this.rooms = new rooms(auth);
}

module.exports = hipper;