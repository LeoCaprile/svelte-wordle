import { it, expect, describe } from 'vitest';
import { checkWord } from '../utils';

describe('checkWord', () => {
	it('should check to true if the word match exactly with letters', () => {
		const letters = [
			{ letter: 'a', id: 1, existsOnWord: false, onRightPos: false },
			{ letter: 'b', id: 2, existsOnWord: false, onRightPos: false },
			{ letter: 'c', id: 3, existsOnWord: false, onRightPos: false }
		];
		const word = 'abc';

		checkWord(word, letters);

		expect(letters).toEqual([
			{ letter: 'a', id: 1, existsOnWord: true, onRightPos: true },
			{ letter: 'b', id: 2, existsOnWord: true, onRightPos: true },
			{ letter: 'c', id: 3, existsOnWord: true, onRightPos: true }
		]);
	});

	it('should check to true if the word match partially with letters', () => {
		const letters = [
			{ letter: 'c', id: 1, existsOnWord: false, onRightPos: false },
			{ letter: 'b', id: 2, existsOnWord: false, onRightPos: false },
			{ letter: 'a', id: 3, existsOnWord: false, onRightPos: false }
		];
		const word = 'abc';

		checkWord(word, letters);

		expect(letters).toEqual([
			{ letter: 'c', id: 1, existsOnWord: true, onRightPos: false },
			{ letter: 'b', id: 2, existsOnWord: true, onRightPos: true },
			{ letter: 'a', id: 3, existsOnWord: true, onRightPos: false }
		]);
	});

	it('should check if a letter in the word is not already checked and repeated', () => {
		const letters = [
			{ letter: 'a', id: 1, existsOnWord: false, onRightPos: false },
			{ letter: 'b', id: 2, existsOnWord: false, onRightPos: false },
			{ letter: 'a', id: 3, existsOnWord: false, onRightPos: false }
		];

		const word = 'abc';

		checkWord(word, letters);

		expect(letters).toEqual([
			{ letter: 'a', id: 1, existsOnWord: true, onRightPos: true },
			{ letter: 'b', id: 2, existsOnWord: true, onRightPos: true },
			{ letter: 'a', id: 3, existsOnWord: false, onRightPos: false }
		]);
	});
});
