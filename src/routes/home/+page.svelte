<script lang="ts">
	import Categories from "$lib/Categories.svelte";
	import ProductCard from "$lib/ProductCard.svelte";
	import { products } from "../../stores";
</script>

<svelte:head>
	<title>FFFF | Home</title>
</svelte:head>

<section class="aside-section">
	<aside class="card hide-at-medium">
		<Categories />
	</aside>
	<div class="products">
		{#each $products as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</section>

<style>
	.products {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
</style>
