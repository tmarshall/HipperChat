var request = require('request');
var qs = require('querystring');
var hipperError = require('./error.js');

function rooms(auth) {
	this.baseUrl = 'https://api.hipchat.com/v1/rooms/';
	this.qsDefaults = {
		auth_token: auth,
		format: 'json'
	};

	this.r = request.defaults({
		qs: this.qsDefaults
	});
}

/**
	Creates a new room
*/
rooms.prototype.create = function(options, callback) {
	if (!options.name) {
		return callback(new hipperError('name required'));
	} else if (!options.owner_user_id) {
		return callback(new hipperError('owner user id required'));
	}

	this.r.post(this.baseUrl + '/create', { form: options }, callback);
};

/**
	Deletes a room and kicks the current participants
*/
rooms.prototype.delete = function(options, callback) {
	if (!options.room_id) {
		return callback(new hipperError('room id required'));
	}

	this.r.post(this.baseUrl + '/delete', { form: options }, callback);
};

/**
	Fetch chat history
*/
rooms.prototype.history = function(options, callback) {
	if (!options.room_id) {
		return callback(new hipperError('room id required'));
	} else if (!options.date) {
		return callback(new hipperError('date required'));
	}

	var key, qs = {};

	for (key in this.qsDefaults) {
		qs[key] = this.qsDefaults[key];
	}
	for (key in options) {
		qs[key] = options[key];
	}

	this.r.get(this.baseUrl + '/history', { qs: qs }, callback);
};

/**
	List rooms
*/
rooms.prototype.list = function(callback) {
	this.r.get(this.baseUrl + '/list', callback);
};

/**
	Send a message to a room
*/
rooms.prototype.message = function(options, callback) {
	if (!options.room_id) {
		return callback(new hipperError('room id required'));
	} else if (!options.from) {
		return callback(new hipperError('from required'));
	} else if (!options.message) {
		return callback(new hipperError('message required'));
	}

	var key, qs = {};

	for (key in this.qsDefaults) {
		qs[key] = this.qsDefaults[key];
	}
	for (key in options) {
		qs[key] = options[key];
	}

	this.r.get(this.baseUrl + '/message', { qs: qs }, callback);
};

/**
	Set a room's topic
*/
rooms.prototype.topic = function(options, callback) {
	if (!options.room_id) {
		return callback(new hipperError('room id required'));
	} else if (!options.topic) {
		return callback(new hipperError('topic required'));
	}

	this.r.post(this.baseUrl + '/topic', { form: options }, callback);
};

/**
	Get room details
*/
rooms.prototype.show = function(options, callback) {
	if (!options.room_id) {
		return callback(new hipperError('room id required'));
	}

	var key, qs = {};

	for (key in this.qsDefaults) {
		qs[key] = this.qsDefaults[key];
	}
	for (key in options) {
		qs[key] = options[key];
	}

	this.r.get(this.baseUrl + '/show', { qs: qs }, callback);
};

module.exports = rooms;