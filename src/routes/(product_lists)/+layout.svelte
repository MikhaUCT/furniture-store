<script lang="ts">
	import CategoriesElement from "$lib/Categories.svelte";
	import { category } from "../../stores";
</script>

<section class="revert-grid-at-medium">
	<aside class="card hide-at-medium">
		<CategoriesElement highlight={$category} on:select={(e) => ($category = e.detail)} />
	</aside>
	<slot />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 24rem 1fr;
		gap: 1rem;
	}
</style>
