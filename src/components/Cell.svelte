<script>
	import { getCellClass } from '$lib';

	let { value, pos } = $props();
</script>

<button class={getCellClass(pos)} disabled={value}>{value}</button>
