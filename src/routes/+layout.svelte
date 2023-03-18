<script>
	import Page from './+page.svelte';
</script>

<div class="app">
	<header>
		<h1>Sverdle</h1>
	</header>
	<Page />
	<footer>Build by Matias Fuentes (LeoCaprile)</footer>
	<small>open the console to know the word</small>
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

	small {
		font-size: 3px;
	}
	header {
		font-size: 30px;
		font-family: 'Rubik Iso', cursive;
	}
</style>
