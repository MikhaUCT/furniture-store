<script lang="ts">
	import ProductCard from "$lib/ProductCard.svelte";
	import { products } from "../../../data";
</script>

<svelte:head>
	<title>FFFF | Home</title>
</svelte:head>

<div class="products">
	{#each products as product (product.id)}
		<ProductCard {product} />
	{/each}
</div>
