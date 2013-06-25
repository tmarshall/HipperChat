var request = require('request');
var hipperError = require('./error.js');

function users(auth) {
  this.baseUrl = 'https://api.hipchat.com/v1/users/';
  this.qsDefaults = {
    auth_token: auth,
    format: 'json'
  };

  this.r = request.defaults({
    qs: this.qsDefaults
  });
}

/**
  Creates a new user
*/
users.prototype.create = function(options, callback) {
  if (!options.email) {
    return callback(new hipperError('email required'));
  } else if (!options.name) {
    return callback(new hipperError('name required'));
  }

  this.r.post(this.baseUrl + 'create', { form: options }, callback);
};

/**
  Deletes a user
*/
users.prototype.delete = function(options, callback) {
  if (!options.user_id) {
    return callback(new hipperError('user id required'));
  }

  this.r.post(this.baseUrl + 'delete', { form: options }, callback);
};

/**
  List all users
*/
users.prototype.list = function(options, callback) {
  // allowing user to just send a callback, since there are no required params
  if (arguments.length === 1 && typeof options === 'function') {
    callback = options;
    options = {};
  }

  var key, qs = {};

  for (key in this.qsDefaults) {
    qs[key] = this.qsDefaults[key];
  }
  for (key in options) {
    qs[key] = options[key];
  }

  this.r.get(this.baseUrl + 'list', { qs: qs }, callback);
};

/**
  Get a user's details
*/
users.prototype.show = function(options, callback) {
  if (!options.user_id) {
    return callback(new hipperError('user id required'));
  }

  var key, qs = {};

  for (key in this.qsDefaults) {
    qs[key] = this.qsDefaults[key];
  }
  for (key in options) {
    qs[key] = options[key];
  }

  this.r.get(this.baseUrl + 'show', { qs: qs }, callback);
};

/**
  Undelete a user
*/
users.prototype.undelete = function(options, callback) {
  if (!options.user_id) {
    return callback(new hipperError('user id required'));
  }

  this.r.post(this.baseUrl + 'undelete', { form: options }, callback);
};

/**
  Updates a user
*/
users.prototype.update = function(options, callback) {
  if (!options.user_id) {
    return callback(new hipperError('user id required'));
  }

  this.r.post(this.baseUrl + 'update', { form: options }, callback);
};


module.exports = users;