export const pageCode = {
    fileName: `+page.svelte`,
    code: `<script lang="ts">
	import { counter } from "./counter.svelte";
	import Button from "./button.svelte";
	import Count from "./count.svelte";

	import Highlighter from "./highlighter.svelte";

</script>

<h1 class="text-2xl text-center">Event bubbling</h1>
<div>
	<Button onclick={counter.increment}>+</Button>
	<Button onclick={counter.decrement}>-</Button>
	<p>count: <Count /></p>
</div>`
};

export const counterCode = {
    fileName: `+counter.svelte`,
    code: `export function createCounter() {
	let count = $state(0);

	return {
		get count() {
			return count;
		},
		increment: () => {
			count += 1;
		},
        decrement: () => {
            count -= 1;
        }
	};
}

export const counter = createCounter();`
};

export const buttonCode = {
    fileName: `+button.svelte`,
    code: `<script>
	const { children, ...button_props } = $props();
</script>

<button class="bg-gradient-to-b from-cyan-700 to-cyan-400 h-8 w-8" {...button_props}>
	{@render children()}
</button>`
};

export const countCode = {
    fileName: `+count.svelte`,
    code: `<script>
    import { counter} from './counter.svelte';
</script>

{counter.count}`};
