<script>
	import { getGameStatus } from '$lib';
	import Cell from './Cell.svelte';

	const initialBoard = Array.from({ length: 9 }).map(() => undefined);

	let turn = $state('X');
	let board = $state([...initialBoard]);
	const result = $derived.by(() => getGameStatus(board));

	function onCellClick(pos) {
		const newArr = [...board];
		newArr[pos] = turn;
		board = [...newArr];
		turn = turn === 'X' ? 'O' : 'X';
	}

	function resetGame() {
		board = [...initialBoard];
		turn = 'X';
	}
</script>

<div>
	<div class="mt-4 grid h-[300px] w-[300px] grid-cols-3 border">
		{#each board as value, i}
			<Cell
				{value}
				pos={i}
				onClick={onCellClick}
				disabled={value || result}
			/>
		{/each}
	</div>
	<div class="mt-2">
		{#if result}
			<div class="text-center text-2xl">{result === 'Draw' ? result : `Winner is: ${result}`}</div>
		{/if}
		<button
			onclick={resetGame}
			class="mt-2 w-full cursor-pointer rounded-sm bg-gray-200 py-1">Reset Game</button
		>
	</div>
</div>
