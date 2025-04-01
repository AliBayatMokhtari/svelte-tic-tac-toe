<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<h1 class="text-3xl">Tic Tac Toe</h1>
	{@render children()}
</div>
