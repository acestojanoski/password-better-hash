import crypto from 'crypto';

const finalize = (salt, hash, encoding) => Buffer.concat([salt, hash]).toString(encoding);

const execute = (options, internalOptions = {}) => {
	const {password, saltSize, iterations, encoding, algorithm} = options;
	let {async, salt} = internalOptions;

	if (!salt) {
		salt = crypto.randomBytes(saltSize);
	}

	if (async) {
		return new Promise((resolve, reject) => {
			crypto.pbkdf2(password, salt, iterations, saltSize, algorithm, (error, hash) => {
				if (error) {
					reject(error);
				} else {
					resolve(finalize(salt, hash, encoding));
				}
			});
		});
	}

	const hash = crypto.pbkdf2Sync(password, salt, iterations, saltSize, algorithm);

	return finalize(salt, hash, encoding);
};

export default execute;
