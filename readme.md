# password-better-hash
[![CircleCI](https://circleci.com/gh/acestojanoski/password-better-hash/tree/master.svg?style=svg)](https://circleci.com/gh/acestojanoski/password-better-hash/tree/master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![install size](https://packagephobia.now.sh/badge?p=password-better-hash)](https://packagephobia.now.sh/result?p=password-better-hash)
[![Downloads](https://img.shields.io/npm/dm/password-better-hash.svg)](https://npmjs.com/password-better-hash)

> A better password hashing utility with zero dependencies

Utility for hashing passwords, and comparison between the password and the hash. It is using [`pbkdf2`](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback) and [`pbkdf2Sync`](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest) functions from the Node.js [`crypto`](https://nodejs.org/api/crypto.html) module.

## Install
```
$ npm install --save password-better-hash
```

## Usage

```js
const hash = require('password-better-hash');

console.log(hash('strong-password'));
// output: ok8VoFbft4q83tqfjvUjebCHDK7/PWbUVI+h6ip2NAOVUZBR0JUquQkChJum7 ...
```

```js
const hash = require('password-better-hash');

hash.async('strong-password').then(console.log);
// output: fhge26w/RmgMUL1OI28/I30ktnLzj9Nl2mWdieOFuuo1hbG0cMqzM8omfQYpv4T2 ...
```

```js
const hash = require('password-better-hash');

console.log(hash.compare('strong-password', 'fhge26w/RmgMUL1OI28/I30ktnLzj9Nl2mWdieO...'));
// output: true

```

```js
const hash = require('password-better-hash');

hash.compareAsync('strong-password', 'invalid hash')
    .then(console.log);
// output: false

```

## API

### passwordBetterHash(password, options?)
Returns a hash.

#### password
Type: `string`

Password you want to hash.

#### options
Type: `object`

##### saltSize
Type: `integer`

Default: `64`

Salt size in bytes.

##### iterations
Type: `integer`

Default: `10000`

Number of iterations for pbkdf2.

##### encoding
Type: `string`

Default: `base64`

Values: All available encodings that Node.js supports

##### algorithm
Type: `string`

Default: `sha512`

Values: Platform dependent, please use [`crypto.getHashes()`](https://nodejs.org/api/crypto.html#crypto_crypto_gethashes) to get the available algorithms.

### passwordBetterHash.async(password, options?)
Returns a hash asynchronously.

### passwordBetterHash.compare(password, hash, options?)
Returns a `boolean`.

#### hash
Type: `string`

Hash you want to compare.

### passwordBetterHash.compareAsync(password, hash, options?)
Returns a `boolean` asynchronously.

## License
[MIT](license)
