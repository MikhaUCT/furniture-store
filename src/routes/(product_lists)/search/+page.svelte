<script lang="ts">
	import { base } from "$app/paths";
	import ProductCard from "$lib/ProductCard.svelte";
	import { query } from "../../../stores";
	import { Product } from "../../../utils";
	// $: query = $page.url.searchParams.get("q") ?? "";
	$: results = Product.search($query);
</script>

<svelte:head>
	<title>FFFF | Search</title>
</svelte:head>

<div>
	<h3 class="page-label">Search results for "{$query}"</h3>
	<div class="products">
		{#if results.length === 0}
			<div class="card">
				<p class="no-match">Nothing matched your search for "{$query}".</p>
				<div class="tips">
					<h3>Search Tips</h3>
					<p>
						The search feature uses a <a href="https://en.wikipedia.org/wiki/Trie"
							>prefix trie</a
						>, which means it will only return results that exactly start with the
						search string.
					</p>
					<p>
						I have customized it to match strings where any of the words match the
						search, but that still means
						<i>
							the search string needs to exactly match the name of the thing you are
							searching for, or any of the words in the name.
						</i>
					</p>
				</div>
				<a href="{base}/home" class="btn-primary">Back To Home Page</a>
			</div>
		{/if}
		{#each results as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		display: grid;
		gap: 2rem;
		place-items: center;
		padding: 3rem;
	}
	.no-match {
		text-align: center;
	}
	.tips {
		width: 70%;
		font-size: 0.8em;
		h3 {
			text-align: center;
		}
	}
</style>
