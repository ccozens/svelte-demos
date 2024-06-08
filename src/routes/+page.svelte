<script lang="ts">
    let count = $state(0);

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }

    let double = $derived(count *2);
</script>


<p>count: {count}</p>
<p>double: {double}</p>
<button onclick={increment}>+</button>
<button onclick={decrement}>-</button>