import test from 'ava';
import sut from '../src';

test('should throw an error if password argument is not a string', (t) => {
	t.throws(
		() => {
			sut();
		},
		{instanceOf: TypeError}
	);
});

test('should return a hash if password is string', (t) => {
	const hash = sut('some-pass');

	t.is('string', typeof hash);
});
