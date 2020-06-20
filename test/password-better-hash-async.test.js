import test from 'ava';
import sut from '../src';

test('should throw an error if password argument is not a string', async (t) => {
	await t.throwsAsync(
		async () => {
			await sut.async();
		},
		{instanceOf: TypeError}
	);
});

test('should return a hash if password is string', async (t) => {
	const hash = await sut('some-pass');

	t.is('string', typeof hash);
});
