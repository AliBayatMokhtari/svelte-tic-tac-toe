<script>
	import { getCellClass } from '$lib';

	let { value, pos, disabled, onClick } = $props();
</script>

<button
	{disabled}
	class={getCellClass(pos)}
	onclick={() => onClick(pos)}
>
	{value}
</button>
