<script lang="ts">
	let { pages } = $props<{ pages: string[]}>();

	let pagesToLink: string[] = $derived(pages.map((page: string) => `${page}`));
</script>

<nav class="flex gap-4 bg-blue-900">
	{#each pagesToLink as page}
		<a
			class="rounded-lg p-3 hover:bg-indigo-200 hover:text-yellow-800 focus:bg-yellow-50"
			href="/{page === 'Home' ? '' : page.toLowerCase()}">{page}</a
		>
	{/each}
</nav>
