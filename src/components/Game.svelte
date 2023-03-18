<script lang="ts">
	import WordRow from './WordRow.svelte';
	import randomWords from 'random-words';
	import conffeti from 'canvas-confetti';
	let gameHasFinish: boolean = false;
	let rowActive = 1;
	let wordRows = [1, 2, 3, 4, 5];
	let word = checkIfWordHasCorrectLength();

	function finishGame() {
		gameHasFinish = true;
	}

	function changeRowActive(id: number) {
		rowActive = id;
	}

	function showConfetti() {
		conffeti({
			particleCount: 100,
			spread: 100,
			origin: { y: 0.5, x: 0.5 }
		});
	}

	function checkIfWordHasCorrectLength() {
		let word: string;
		do {
			word = randomWords({ exactly: 1, join: '' });
		} while (word.replace(' ', '').length !== 5);
		console.log(word);
		return word;
	}
</script>

<div>
	{#if gameHasFinish}
		<button
			on:click={() => {
				gameHasFinish = false;
				word = checkIfWordHasCorrectLength();
			}}>Reintentar</button
		>
	{/if}

	{#if !gameHasFinish}
		<div>
			{#each wordRows as rowId}
				<WordRow
					{showConfetti}
					{finishGame}
					{gameHasFinish}
					{word}
					{rowActive}
					{changeRowActive}
					{rowId}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
