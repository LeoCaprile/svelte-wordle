<script lang="ts">
	import WordRow from './WordRow.svelte';
	import { confetti } from 'tsparticles-confetti';

	let gameHasFinish = false;
	let rowActive = 1;
	let wordRows = [1, 2, 3, 4, 5];

	const changeRowActive = (id: number) => {
		rowActive = id;
	};

	async function showConfetti() {
		await confetti({
			angle: 90,
			count: 100,
			position: {
				x: 50,
				y: 0
			},
			spread: 500,
			startVelocity: 45,
			decay: 0.85,
			gravity: 1,
			drift: 0,
			ticks: 500,
			shapes: ['square', 'circle'],
			scalar: 1.5,
			zIndex: 100,
			disableForReducedMotion: true
		});
	}

	async function getRandomWord() {
		const response = await fetch(
			'https://api.generadordni.es/v2/text/characters?results=1&characters=5&language=es'
		);
		const data = await response.json();
		console.log(data[0].toLowerCase());
		return data[0].toLowerCase();
	}

	async function checkIfWordHasCorrectLength() {
		let word: string;
		do {
			word = await getRandomWord();
		} while (word.replace(' ', '').length !== 5);
		return word;
	}
</script>

{#await checkIfWordHasCorrectLength()}
	<div>loading...</div>
{:then word}
	<div>
		{#each wordRows as rowId}
			<WordRow {showConfetti} {gameHasFinish} {word} {rowActive} {changeRowActive} {rowId} />
		{/each}
	</div>
{/await}

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
