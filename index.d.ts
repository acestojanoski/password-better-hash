interface Options {
	/**
	 * Salt size in bytes
	 * @default 64
	 */
	saltSize?: number;

	/**
	 * Number of iterations for pbkdf2
	 * @default 10000
	 */
	iterations?: number;

	/**
	 * Encoding of the hash
	 * @default 'base64'
	 */
	encoding?: string;

	/**
	 * Algorithm for hashing. Use crypto.getHashes() to see the available algorithms
	 * @default 'sha512'
	 */
	algorithm?: string;
}

declare const passwordBetterHash: {
	/**
	 * Password hashing using the pbkdf2Sync function from the Node.js crypto module
	 * @param {string} password - The password you want to hash
	 * @param {Options} options - Options
	 * @returns string
	 */
	(password: string, options?: Options): string;

	/**
	 * Async password hashing using the pbkdf2 function from the Node.js crypto module
	 * @param {string} password - The password you want to hash
	 * @param {Options} options - Options
	 * @returns string
	 */
	async(password: string, options?: Options): Promise<string>;

	/**
	 * Compare the password and the hash
	 * @param {string} password - The password that you want to compare
	 * @param {string} hash - The hash that you want to compare
	 * @param {Options} options - Options
	 * @returns string
	 */
	compare(password: string, hash: string, options?: Options): boolean;

	/**
	 * Compare the password and the hash asynchronous
	 * @param {string} password - The password that you want to compare
	 * @param {string} hash - The hash that you want to compare
	 * @param {Options} options - Options
	 * @returns string
	 */
	compareAsync(password: string, hash: string, options?: Options): Promise<boolean>;
};

export = passwordBetterHash;
