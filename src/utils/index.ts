import type { Letter } from '../interfaces';

export function checkWord(word: string, letters: Array<Letter>): void {
	const wordDict = new Map();

	word.split('').forEach((l) => {
		if (wordDict.has(l)) {
			wordDict.set(l, wordDict.get(l) + 1);
		} else {
			wordDict.set(l, 1);
		}
	});

	letters.forEach((l, i) => {
		if (word[i] === l.letter && wordDict.get(l.letter) >= 1) {
			wordDict.set(l.letter, wordDict.get(l.letter) - 1);
			l.existsOnWord = true;
			l.onRightPos = true;
		} else if (word.includes(l.letter) && wordDict.get(l.letter) >= 1) {
			wordDict.set(l.letter, wordDict.get(l.letter) - 1);
			l.existsOnWord = true;
		}
	});
}
