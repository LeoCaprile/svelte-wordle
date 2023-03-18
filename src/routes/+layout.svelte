<script>
	import Page from './+page.svelte';
</script>

<div class="app">
	<header>Sverdle</header>
	<Page />
	<footer>Build by Matias Fuentes (LeoCaprile)</footer>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap');
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		footer {
			margin-top: 40px;
			margin-bottom: 40px;
		}
	}

	header {
		font-size: 100px;
		font-family: 'Rubik Iso', cursive;
	}
</style>
