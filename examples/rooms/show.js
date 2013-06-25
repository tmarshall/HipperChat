var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


var room = { room_id: 123 };
chat.rooms.show(room, function(err, res, body) {
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