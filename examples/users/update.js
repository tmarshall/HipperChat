var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// just the name
var user1 = {
	user_id: 987,
	name: 'person one'
};
chat.users.update(user1, function(err, res, body) {
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


// All the choices
var user2 = {
	user_id: 987,
	email: 'persontwo@yourcompany.domain',
	name: 'person two',
	mention_name: 'two',
	title: 'The Janitor',
	is_group_admin: 1,
	password: '123letmein',
	timezone: 'US/Hawaii'
};
chat.users.update(user2, function(err, res, body) {
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