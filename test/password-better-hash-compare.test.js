import test from 'ava';
import sut from '../src';

test('should throw an error if `password` argument is not a string', (t) => {
	t.throws(
		() => {
			sut.compare(null, 'some-hash');
		},
		{instanceOf: TypeError}
	);
});

test('should throw an error if `hash` argument is not a string', (t) => {
	t.throws(
		() => {
			sut.compare('some-pass', null);
		},
		{instanceOf: TypeError}
	);
});

test('should return false if password and hash are not matching', (t) => {
	const result = sut.compare(
		'pass1',
		'q5licKgwgj46Ofy7XsmAgDFDnUgioeFGvzhqM9gLjjFViOygm+ISS9ILmg0INt6Usrl2gFaz2buvBgPdUFQtRwrZQ5KijF1r3rasI5Z5iyiyKNnwIqWJ+ba5qm8HhdC2Eqydx+/b+HK7u9s9W89RWzVSB9qqSZFEBiRzTU8b3rs='
	);

	t.false(result);
});

test('should return true if password and hash are matching', (t) => {
	const result = sut.compare(
		'pass',
		'q5licKgwgj46Ofy7XsmAgDFDnUgioeFGvzhqM9gLjjFViOygm+ISS9ILmg0INt6Usrl2gFaz2buvBgPdUFQtRwrZQ5KijF1r3rasI5Z5iyiyKNnwIqWJ+ba5qm8HhdC2Eqydx+/b+HK7u9s9W89RWzVSB9qqSZFEBiRzTU8b3rs='
	);

	t.true(result);
});
