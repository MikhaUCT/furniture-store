<script lang="ts">
	import Categories from "$lib/Categories.svelte";
	import ProductCard from "$lib/ProductCard.svelte";
	import { products } from "../../stores";
</script>

<svelte:head>
	<title>FFFF | Home</title>
</svelte:head>

<div class="products">
	{#each $products as product (product.id)}
		<ProductCard {product} />
	{/each}
</div>
<Categories />

<style>
	.products {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
