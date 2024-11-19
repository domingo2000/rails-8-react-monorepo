<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col">
	<h1 class="text-xl">Arquitectura de Sistemas de Software Dream Team Project</h1>

	<div class="m-3">
		<ol class="ml-3 list-decimal">
			{#each data.posts as post}
				<li>
					<a href={`posts/${post.id}`}>{post.title}</a>
				</li>
			{/each}
		</ol>
	</div>
</div>
