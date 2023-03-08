<script lang="ts">
	import LetterInput from './LetterInput.svelte';
	export let rowId: number;
	export let rowActive: number;
	export let changeRowActive: (id: number) => void;
	let gameHasFinish = false;
	let rowCompleted = false;
	let word = 'hello';

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

	const handleCheckWord = (ev: KeyboardEvent) => {
		if (!gameHasFinish) {
			if (letters.every((l) => l.letter !== '') && ev.key === 'Enter') {
				rowCompleted = true;
				letters.forEach((l, i) => {
					if (word[i] === l.letter) {
						l.existsOnWord = true;
						l.onRightPos = true;
					} else if (word.includes(l.letter)) {
						l.existsOnWord = true;
					}
				});
				if (letters.every((l) => l.onRightPos)) {
					gameHasFinish = true;
					alert('You win!');
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
