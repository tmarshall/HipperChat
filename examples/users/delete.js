var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// simple example of creating a user
var user = { user_id: 987 };
chat.users.delete(user, function(err, res, body) {
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