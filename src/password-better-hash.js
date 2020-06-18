'use strict';

const {defaults} = require('./constants');
const validate = require('./validate');
const execute = require('./execute');

const passwordHash = (password, options = {}) => {
	validate.hashInputs(password);
	options = Object.assign({}, defaults, options, {password});

	return execute(options);
};

passwordHash.async = async (password, options = {}) => {
	validate.hashInputs(password);
	options = Object.assign({}, defaults, options, {password});

	return execute(options, {async: true});
};

passwordHash.compare = (password, hash, options = {}) => {
	validate.compareInputs(password, hash);
	options = Object.assign({}, defaults, options, {password});

	let newHash;

	try {
		const {encoding, saltSize} = options;

		const salt = Buffer.from(hash, encoding).slice(0, saltSize);
		newHash = execute(options, {salt});
	} catch {
		return false;
	}

	if (hash === newHash) {
		return true;
	}

	return false;
};

passwordHash.compareAsync = async (password, hash, options = {}) => {
	validate.compareInputs(password, hash);
	options = Object.assign({}, defaults, options, {password});

	let newHash;

	try {
		const {encoding, saltSize} = options;

		const salt = Buffer.from(hash, encoding).slice(0, saltSize);
		newHash = await execute(options, {salt, async: true});
	} catch {
		return false;
	}

	if (hash === newHash) {
		return true;
	}

	return false;
};

module.exports = passwordHash;
