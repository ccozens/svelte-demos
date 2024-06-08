<script lang="ts">
    let pages: string[] = ["Home", "About", "Contact"];
</script>

<nav class="flex gap-4 bg-blue-900">
    {#each pages as page}
        <a class="rounded-lg p-3 hover:bg-indigo-200 hover:text-yellow-800 focus:bg-yellow-50" href="/{page.toLowerCase()}">{page}</a>
    {/each}
</nav>