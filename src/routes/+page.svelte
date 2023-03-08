<script lang="ts">
	import WordRow from '../components/WordRow.svelte';
	let rowActive = 1;
	let wordRows = [1, 2, 3, 4, 5];

	const changeRowActive = (id: number) => {
		rowActive = id;
	};
</script>

<div>
	{#each wordRows as rowId}
		<WordRow {rowActive} {changeRowActive} {rowId} />
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
