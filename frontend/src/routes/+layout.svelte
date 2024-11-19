<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="m-3">
	<main>
		{@render children()}
	</main>
</div>
