<script lang="ts">
	let { count } = $props();

	function addOne() {
		count += 1;
	}
</script>

<h1>Count: {count}</h1>
<button onclick={addOne}>Add 1</button>
