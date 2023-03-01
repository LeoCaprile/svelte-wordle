<script>
	import LetterInput from './LetterInput.svelte';
	let letterOnFocus = 1;
	let letters = [1, 2, 3, 4, 5];
	console.log(letterOnFocus);
</script>

<div>
	{#each letters as id}
		<LetterInput {letterOnFocus} {id} />
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 10px;
	}
</style>
