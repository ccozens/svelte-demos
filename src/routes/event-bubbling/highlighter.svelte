<script>
	// shiki
	import { codeToHtml } from 'shiki';

	let { fileName, code } = $props();

	const html = codeToHtml(code, {
		lang: 'svelte',
		theme: 'night-owl'
	});
</script>

	<h3 class="text-center text-xl font-bold">{fileName}</h3>
	{#await html then html}
		{@html html}
	{/await}
