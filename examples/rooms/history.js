var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// recent history
var room = {
	room_id: 123,
	date: 'recent'
}
chat.rooms.history(room, function(err, res, body) {
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


// history since Jun 23, 2013
var room = {
	room_id: 123,
	date: '2013-06-23'
}
chat.rooms.history(room, function(err, res, body) {
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