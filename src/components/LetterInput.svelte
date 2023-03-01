<script lang="ts">
	import { onMount } from 'svelte';
	export let letterOnFocus: number;
	export let id: number;

	let letter: string = '';
	let input: HTMLInputElement;

	onMount(() => {
		if (letterOnFocus === id) {
			input.focus();
		}
	});

	const restrictOnlyLetters = (ev: KeyboardEvent) => {
		const regex = /[a-z]/i;

		if (!regex.test(ev.key)) {
			ev.preventDefault();
		} else {
			letter = ev.key;
		}

		if (letterOnFocus < 5) {
			letterOnFocus += 1;
		}
		console.log({ letterOnFocus });
	};

	const onFocus = () => {
		letterOnFocus = id;
		console.log({ letterOnFocus });
	};
</script>

<input
	type="text"
	bind:this={input}
	on:focus={onFocus}
	value={letter}
	on:keydown={restrictOnlyLetters}
	maxlength={1}
/>

<style lang="scss">
	$boxsize: 50px;

	input {
		text-align: center;
		text-transform: uppercase;
		width: $boxsize;
		height: $boxsize;
		font-size: $boxsize;
		color: transparent;
		text-shadow: 0 0 0 black;
		border-radius: 5px;
		border: 2px solid lightgray;
		box-shadow: none;
		&:focus {
			border: 2px solid rgb(168, 227, 227);
			outline: none;
		}
	}
</style>
