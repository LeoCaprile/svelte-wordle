<script lang="ts">
	import WordRow from './WordRow.svelte';
	import randomWords from 'random-words';
	import conffeti from 'canvas-confetti';
	let gameHasFinish: boolean = false;
	let playerHasLose: boolean = false;
	let rowActive = 1;
	let wordRows = [1, 2, 3, 4, 5];
	let word = checkIfWordHasCorrectLength();

	function finishGame() {
		gameHasFinish = true;
	}

	function lose() {
		playerHasLose = true;
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
	{#if gameHasFinish && !playerHasLose}
		<h1>Haz Ganado!!!</h1>
		<button
			on:click={() => {
				gameHasFinish = false;
				word = checkIfWordHasCorrectLength();
			}}>Reintentar</button
		>
	{:else if playerHasLose}
		<h1>Has Perdido!!!</h1>
		<button
			on:click={() => {
				gameHasFinish = false;
				playerHasLose = false;
				word = checkIfWordHasCorrectLength();
			}}>Reintentar</button
		>
	{/if}

	{#if !gameHasFinish && !playerHasLose}
		<div>
			{#each wordRows as rowId}
				<WordRow
					{lose}
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
	:global(body) {
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
