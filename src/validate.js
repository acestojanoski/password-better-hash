'use strict';

const {isString} = require('./utils');

const hashInputs = (password) => {
	if (!password || !isString(password)) {
		throw new TypeError('Argument `password` is not a string');
	}
};

const compareInputs = (password, hash) => {
	if (!password || !isString(password)) {
		throw new TypeError('Argument `password` is not a string');
	}

	if (!hash || !isString(hash)) {
		throw new TypeError('Argument `hash` is not a string');
	}
};

module.exports = {
	hashInputs,
	compareInputs,
};
