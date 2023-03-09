<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Categories } from "../Product";
	import { base } from "$app/paths";

	export let highlight: string | null = null;

	const dispatch = createEventDispatcher();
</script>

<div class="categories">
	{#each Object.keys(Categories) as category}
		<a
			href="{base}/category#{category}"
			class="category"
			class:highlight={highlight?.toLowerCase() === category.toLowerCase()}
			on:click={() => dispatch("select", category)}
		>
			{category}
		</a>
	{/each}
	{#if highlight != null}
		<a href="{base}/home" class="category">All <span class="light">(Home Page)</span></a>
	{/if}
</div>

<style lang="scss">
	.categories {
		display: flex;
		flex-direction: column;
		text-transform: capitalize;
	}
	.category {
		padding: 2rem 1rem;
		cursor: pointer;
		color: var(--fg-00);
		text-decoration: none;
		&:not(:last-child) {
			border-bottom: 1px solid var(--fg-03);
		}
		&:hover {
			background-color: var(--fg-03);
		}
	}
	.highlight {
		font-weight: bold;
	}
	.light {
		color: var(--fg-02);
	}
</style>
