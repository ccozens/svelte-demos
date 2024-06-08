<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	let { children } = $props<{ children: Snippet }>();

	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
{@render children()}
