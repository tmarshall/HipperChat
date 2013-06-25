var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// simple example of creating a room
var room1 = {
	name: 'room one',
	owner_user_id: 987
};
chat.rooms.create(room1, function(err, res, body) {
	if (err) {
		console.log('An error occurred');
		console.log(err);
		return;
	}

	var json;

	try {
		json = JSON.parse(body);
	} catch(err) {
		console.log('An error occurred while parsing json');
		return;
	}

	console.log(json);
});


// using all the options
var room2 = {
	name: 'room two',
	owner_user_id: 987,
	privacy: 'private',
	topic: 'A room to serve as an example',
	guest_access: 1
};
chat.rooms.create(room2, function(err, res, body) {
	if (err) {
		console.log('An error occurred');
		console.log(err);
		return;
	}

	var json;

	try {
		json = JSON.parse(body);
	} catch(err) {
		console.log('An error occurred while parsing json');
		return;
	}

	console.log(json);
});