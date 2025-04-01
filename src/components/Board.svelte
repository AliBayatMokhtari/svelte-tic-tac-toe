<script>
	import { getGameStatus } from '$lib';
	import Cell from './Cell.svelte';

	let turn = $state('X');
	let arr = $state(Array.from({ length: 9 }).map(() => undefined));
	const result = $derived.by(() => getGameStatus(arr));

	function onCellClick(pos) {
		const newArr = [...arr];
		newArr[pos] = turn;
		arr = [...newArr];
		turn = turn === 'X' ? 'O' : 'X';
	}
</script>

<div class="mt-4 grid h-[300px] w-[300px] grid-cols-3 border">
	{#each arr as value, i}
		<Cell
			{value}
			pos={i}
			onClick={onCellClick}
		/>
	{/each}
	<span>{result}</span>
</div>
