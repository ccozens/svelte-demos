<script lang="ts">
	import Counter4 from './Counter-4.svelte';
	import Counter5 from './Counter-5.svelte';
</script>

<h1 class="text-2xl text-center">Counter refactoring</h1>
<div class="flex justify-center">
	<div class="flex flex-col">
		<h2 class="text-center">Svelte 4 Counter</h2>
		<Counter4 />
	</div>
	<div class="flex flex-col">
		<h2 class="text-center">Svelte 5 Counter</h2>
		<Counter5 />
	</div>
</div>
