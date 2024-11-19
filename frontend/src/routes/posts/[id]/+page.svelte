<script lang="ts">
	import type { PageData } from './$types';
	import Counter from '$lib/components/Counter.svelte';

	let { data }: { data: PageData } = $props();
</script>

<h1>{data.post.title}</h1>
<p>{data.post.body}</p>

<Counter count={0} />
