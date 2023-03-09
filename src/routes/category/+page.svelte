<script lang="ts">
	import ProductCard from "$lib/ProductCard.svelte";
	import CategoriesElement from "$lib/Categories.svelte";
	import { onMount, onDestroy } from "svelte";
	import { Product, Categories } from "../../Product";
	import Loading from "$lib/Loading.svelte";

	let products: Set<Product> | null;
	let category: keyof typeof Categories;

	$: products = Categories[category] ?? null;

	onMount(() => {
		category = document.location.hash.slice(1) as keyof typeof Categories;
	});
</script>

<svelte:head>
	<title>FFFF | {category ?? "Category"}</title>
</svelte:head>

<section class="aside-section">
	<aside class="card hide-at-medium">
		<CategoriesElement highlight={category} on:select={(e) => (category = e.detail)} />
	</aside>
	{#if products != null}
		<div class="products">
			{#each [...products] as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	{:else}
		<Loading />
	{/if}
</section>

<style>
	.products {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
