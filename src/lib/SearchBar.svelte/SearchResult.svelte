<script lang="ts">
	import { base } from "$app/paths";
	import type { Product } from "../../utils";

	export let result: Product;
	export let query: string;

	function highlight(text: string, query: string) {
		const index = text.toLowerCase().indexOf(query.toLowerCase());
		if (index === -1) return [text, "", ""];
		return [
			text.slice(0, index),
			text.slice(index, index + query.length),
			text.slice(index + query.length),
		];
	}

	$: sections = highlight(result.name, query);
</script>

<a href="{base}/product#{result.id}" on:click={(e) => e.currentTarget.blur()} on:click>
	<span>{sections[0]}</span><span class="highlight">{sections[1]}</span><span>{sections[2]}</span>
</a>

<style lang="scss">
	a {
		display: block;
		margin-block: 1rem;
		text-decoration: none;
		color: currentcolor;

		box-orient: vertical;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		&:hover {
			color: var(--accent-00);
			text-decoration: underline;
		}
	}
	.highlight {
		font-weight: bold;
	}
</style>
