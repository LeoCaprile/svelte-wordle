<script lang="ts">
	import { checkWord } from '../utils';
	import LetterInput from './LetterInput.svelte';
	export let rowId: number;
	export let rowActive: number;
	export let changeRowActive: (id: number) => void;
	export let word: string;
	export let gameHasFinish: boolean;
	export let finishGame: () => void;
	export let showConfetti: () => void;
	let rowCompleted = false;

	$: letterOnFocus = rowId === rowActive ? 1 : 0;

	let letters = [
		{ letter: '', id: 1, existsOnWord: false, onRightPos: false },
		{ letter: '', id: 2, existsOnWord: false, onRightPos: false },
		{ letter: '', id: 3, existsOnWord: false, onRightPos: false },
		{ letter: '', id: 4, existsOnWord: false, onRightPos: false },
		{ letter: '', id: 5, existsOnWord: false, onRightPos: false }
	];

	$: isRowActive = rowId === rowActive;

	const changeLetterOnFocus = (id: number) => {
		letterOnFocus = id;
	};

	const addLetterToWord = (id: number, letter: string) => {
		letters.forEach((l) => {
			if (l.id === id) {
				l.letter = letter;
			}
		});
	};

	export const handleCheckWord = (ev: KeyboardEvent) => {
		if (!gameHasFinish) {
			if (letters.every((l) => l.letter !== '') && ev.key === 'Enter') {
				rowCompleted = true;
				checkWord(word, letters);
				if (letters.every((l) => l.onRightPos)) {
					finishGame();
					alert('You win!');
					showConfetti();
				} else {
					changeRowActive(rowId + 1);
				}
			}
		}
	};
</script>

<svelte:window on:keydown|preventDefault={handleCheckWord} />

<div>
	{#each letters as letter}
		<LetterInput
			{rowCompleted}
			{gameHasFinish}
			{letter}
			{isRowActive}
			{addLetterToWord}
			{changeLetterOnFocus}
			{letterOnFocus}
		/>
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 10px;
		&:focus {
			outline: none;
		}
	}
</style>
