<script lang="ts">
	import { goto } from "$app/navigation";

	let query = "";

	function onKeydown(e: KeyboardEvent) {
		if (e.key === "Enter") {
			goto(`/search?q=${encodeURI(query)}`);
			query = "";
		}
	}
</script>

<div class="search">
	<input
		type="text"
		placeholder="search for products or categories"
		on:keydown={onKeydown}
		bind:value={query}
	/>
	<svg viewBox="0 0 100 100" fill="black">
		<path
			d="M72.507 63.314C77.223 56.75 80 48.7 80 40 80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40c8.7 0 16.75-2.777 23.314-7.493l25.59 25.59a6.5 6.5 0 1 0 9.192-9.192L72.507 63.314zM40 67c-14.912 0-27-12.088-27-27s12.088-27 27-27 27 12.088 27 27c0 7.459-3.008 14.192-7.908 19.092S47.459 67 40 67z"
		/>
	</svg>
</div>

<style lang="scss">
	.search {
		flex-grow: 1;
		position: relative;
		height: 4rem;
		svg {
			position: absolute;
			width: 2rem;
			pointer-events: none;
			top: 0;
			bottom: 0;
			left: 1rem;
			margin-block: auto;
		}
		input {
			position: absolute;
			inset: 0;
			width: 100%;
			padding: 1rem 2rem 1rem 4rem;
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
</style>
