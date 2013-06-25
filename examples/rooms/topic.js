var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


var roomTopic = {
	room_id: 123,
	topic: 'New Room Topic'
};
chat.rooms.topic(roomTopic, function(err, res, body) {
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