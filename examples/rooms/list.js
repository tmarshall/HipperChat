var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// simply list all rooms
chat.rooms.list(function(err, res, body) {
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