<script lang="ts">
	import { counter } from './counter.svelte';
	import Button from './button.svelte';
	import Count from './count.svelte';

	import Highlighter from './highlighter.svelte';

	import { pageCode, counterCode, buttonCode, countCode } from './code';
</script>

<h1 class="text-4xl text-center font-bold">Event bubbling</h1>
<div class="grid place-content-center my-5">
	<div class="grid place-content-center">
		<div class="bg-blue-900 border border-cyan-100 p-5">
			<Button onclick={counter.increment}>+</Button>
			<Button onclick={counter.decrement}>-</Button>
			<p>Count: <Count /></p>
		</div>
	</div>

	<div class="grid gap-4 mt-5">
		<h2 class="text-2xl font-bold text-center">Code</h2>
		<Highlighter fileName={pageCode.fileName} code={pageCode.code} />

		<Highlighter fileName={counterCode.fileName} code={counterCode.code} />
		<Highlighter fileName={buttonCode.fileName} code={buttonCode.code} />
		<Highlighter fileName={countCode.fileName} code={countCode.code} />
	</div>
</div>
