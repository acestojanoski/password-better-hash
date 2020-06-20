import {defaults} from './constants';
import validate from './validate';
import execute from './execute';

const passwordBetterHash = (password, options = {}) => {
	validate.hashInputs(password);
	options = Object.assign({}, defaults, options, {password});

	return execute(options);
};

passwordBetterHash.async = async (password, options = {}) => {
	validate.hashInputs(password);
	options = Object.assign({}, defaults, options, {password});

	return execute(options, {async: true});
};

passwordBetterHash.compare = (password, hash, options = {}) => {
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

passwordBetterHash.compareAsync = async (password, hash, options = {}) => {
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

export default passwordBetterHash;
