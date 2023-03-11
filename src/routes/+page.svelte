<script lang="ts">
	import { goto } from "$app/navigation";
	import Loading from "$lib/FFFF.svelte";
	import { onMount } from "svelte";
	import { base } from "$app/paths";

	onMount(() => {
		goto(`${base}/home`);
	});
</script>

<div class="loading-container">
	<Loading />
</div>
