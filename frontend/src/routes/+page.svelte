<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Arquitectura de Sistemas de Software Dream Team Project</h1>

{#each data.posts as post}
    <ul>
        <li>
            <a href={`posts/${post.id}`}>{post.title}</a>
        </li>
    </ul>
{/each}

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
