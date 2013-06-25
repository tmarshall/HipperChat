var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// simple message
var roomMessage = {
	room_id: 123,
	from: 'helperbot',
	message: 'crush puny humans'
};
chat.rooms.message(roomMessage, function(err, res, body) {
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


// fancy message
var roomMessage = {
	room_id: 123,
	from: 'helperbot',
	message: '<strong>crush puny <i>humans</i></strong>',
	notify: 1,
	color: 'green'
};
chat.rooms.message(roomMessage, function(err, res, body) {
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