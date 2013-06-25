var HipperChat = require('../../');

var chat = new HipperChat('your_auth_key_here');


// simple example of creating a user
var user1 = {
	email: 'fake_user_one@yourcompany.domain',
	name: 'fake one'
};
chat.users.create(user1, function(err, res, body) {
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
var user2 = {
	email: 'fake_user_two@yourcompany.domain',
	name: 'fake two',
	mention_name: 'fakey',
	title: 'CEO',
	is_group_admin: 1,
	password: 'p@$$w0rd',
	timezone: 'US/Central'
};
chat.users.create(user2, function(err, res, body) {
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