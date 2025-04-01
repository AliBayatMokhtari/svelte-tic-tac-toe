<script>
	import Cell from './Cell.svelte';

	const arr = Array.from({ length: 9 }).map((_, i) => i);
</script>

<div class="mt-4 grid h-[200px] w-[200px] grid-cols-3 border">
	{#each arr as i}
		<Cell value={i + 1} pos={i} />
	{/each}
</div>
