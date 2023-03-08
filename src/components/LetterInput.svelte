<script lang="ts">
	interface Letter {
		letter: string;
		id: number;
		existsOnWord: boolean;
		onRightPos: boolean;
	}

	export let letterOnFocus: number;
	export let isRowActive: boolean;
	export let letter: Letter;
	export let changeLetterOnFocus: (id: number) => void;
	export let addLetterToWord: (id: number, letter: string) => void;
	export let rowCompleted: boolean;
	export let gameHasFinish: boolean;

	$: isFocused = letterOnFocus === letter.id && isRowActive;
	$: isInRightPos =
		letter.existsOnWord && letter.onRightPos && rowCompleted ? 'right-position ' : '';
	$: isOnWord = !letter.onRightPos && letter.existsOnWord && rowCompleted ? 'exists-on-word ' : '';
	$: handleClass = isInRightPos + isOnWord + (isFocused ? 'focus ' : '');

	function handleKeydown(ev: KeyboardEvent) {
		const regex = /[a-z]/i;
		if (!gameHasFinish) {
			if (ev.key === 'Backspace') {
				if (letterOnFocus > 1) {
					if (isFocused) {
						letter.letter = '';
						addLetterToWord(letter.id, '');
					}
					letterOnFocus -= 1;
					return;
				} else if (isFocused && letter.letter !== '') {
					addLetterToWord(letter.id, '');
					letter.letter = '';
				}
				return;
			}
			if (ev.key.length !== 1 || ev.key === ' ') return;

			if (regex.test(ev.key) && isFocused) {
				addLetterToWord(letter.id, ev.key);
				letter.letter = ev.key;
			} else {
				ev.preventDefault();
			}

			if (letterOnFocus < 5) {
				letterOnFocus += 1;
			}
		}
	}

	const changeFocusToClicked = () => {
		changeLetterOnFocus(letter.id);
	};
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<div on:click={changeFocusToClicked} class={handleClass}>
	{letter.letter}
</div>

<style lang="scss">
	$boxsize: 50px;

	div {
		text-align: center;
		text-transform: uppercase;
		width: $boxsize;
		height: $boxsize;
		font-size: $boxsize - 20;
		font-family: sans-serif;
		text-align: center;
		display: grid;
		place-content: center;
		color: transparent;
		text-shadow: 0 0 0 black;
		border-radius: 5px;
		border: 2px solid lightgray;
		box-shadow: none;
	}

	.focus {
		border: 2px solid rgb(168, 227, 227);
		outline: none;
	}

	.exists-on-word {
		background-color: rgb(242, 255, 121);
	}

	.right-position {
		background-color: rgb(124, 255, 144);
	}
</style>
