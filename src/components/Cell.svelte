<script>
	import { getCellClass } from '$lib';

	let { value, pos, onClick } = $props();
</script>

<button
	class={getCellClass(pos)}
	disabled={value}
	onclick={() => onClick(pos)}
>
	{value}
</button>
