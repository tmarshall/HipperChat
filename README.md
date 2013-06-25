What is HipperChat?
===================

It's a node wrapper for the HipChat API, to (hopefully) make it easier to hack away


How do you use it?
==================

You first must get an API from HipChat. You can then create an instance of this module.

	var HipperChat = require('HipperChat');

	var chat = new HipperChat('your_auth_key_here');

You can then do anything possible in [HipChat's API docs](https://www.hipchat.com/docs/api).