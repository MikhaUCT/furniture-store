<script lang="ts">
	import { goto } from "$app/navigation";
	import Loading from "$lib/Loading.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		goto("/home");
	});
</script>

<Loading />
