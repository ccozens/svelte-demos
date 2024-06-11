<script>
	const { children, ...button_props } = $props();
</script>

<button class="bg-gradient-to-b from-cyan-700 to-cyan-400 h-8 w-8" {...button_props}>
	{@render children()}
</button>
