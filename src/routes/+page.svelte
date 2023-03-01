<script>
	import WordRow from '../components/WordRow.svelte';
</script>

<div>
	<WordRow />
	<WordRow />
	<WordRow />
	<WordRow />
	<WordRow />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
