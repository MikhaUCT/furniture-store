<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { query } from "../../stores";
	import { Product } from "../../utils";
	import SearchResult from "./SearchResult.svelte";

	export let value = "";
	let results: Product[] = [];
	$: results = value.length > 2 ? Product.search(value) : [];

	function search() {
		goto(`${base}/search?q=${encodeURI(value)}`);
		query.set(value);
	}

	function onKeydown(e: KeyboardEvent & { currentTarget: HTMLInputElement }) {
		if (e.key === "Enter") search();
		else if (e.key === "Escape") e.currentTarget.blur();
	}
</script>

<div class="search">
	<input type="text" placeholder="search for products" on:keydown={onKeydown} bind:value />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg viewBox="0 0 100 100" class="magnifying-glass" on:click={search}>
		<path
			d="M72.507 63.314C77.223 56.75 80 48.7 80 40 80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40c8.7 0 16.75-2.777 23.314-7.493l25.59 25.59a6.5 6.5 0 1 0 9.192-9.192L72.507 63.314zM40 67c-14.912 0-27-12.088-27-27s12.088-27 27-27 27 12.088 27 27c0 7.459-3.008 14.192-7.908 19.092S47.459 67 40 67z"
		/>
	</svg>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		viewBox="0 0 10 10"
		class="close"
		on:click={(e) => (value = "")}
		class:visible={value.length > 0}
	>
		<path d="M1 1L9 9M1 9L9 1" />
	</svg>
	{#if results.length > 0}
		<div class="options">
			{#each results as result (result.id)}
				<SearchResult query={value} {result} on:click={() => (value = result.name)} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.search {
		--padding-inline: 4rem;
		flex-grow: 1;
		position: relative;
		height: 4rem;
		input {
			position: absolute;
			inset: 0;
			width: 100%;
			padding-block: 1rem;
			padding-inline: var(--padding-inline);
			font-size: 1em;
			background-color: var(--bg-02);
			border: none;
			outline: none;
			border-radius: var(--border-radius);
			box-shadow: 0 0.25rem 0.5rem #0002;
			&:focus {
				box-shadow: 0 0.25rem 1rem #0004;
			}
		}
	}
	.search:focus-within {
		.options {
			visibility: visible;
		}
	}
	svg {
		position: absolute;
		width: 2rem;
		top: 0;
		bottom: 0;
		margin-block: auto;
		cursor: pointer;
	}
	.magnifying-glass {
		fill: currentcolor;
		left: 1rem;
	}
	.close {
		right: 1rem;
		stroke: currentcolor;
		stroke-width: 1.5;
		stroke-linecap: round;
		transition: opacity 0.1s;
		&:not(.visible) {
			pointer-events: none;
			opacity: 0;
		}
	}
	.options {
		visibility: hidden;
		padding-inline: var(--padding-inline);
		background-color: var(--bg-02);
		position: absolute;
		z-index: 1;
		top: 100%;
		width: 100%;
		box-shadow: 0 0.25rem 1rem #0002;
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>
