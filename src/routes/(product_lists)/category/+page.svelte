<script lang="ts">
	import ProductCard from "$lib/ProductCard.svelte";
	import { onMount } from "svelte";
	import { Product, Categories } from "../../../utils";
	import Loading from "$lib/FFFF.svelte";
	import { beforeNavigate } from "$app/navigation";
	import { category } from "../../../stores";

	let products: Set<Product> | null;

	// @ts-ignore (ts complaining about indexing Categories with null, but I'm already null coalescing it, so it can be ignored)
	$: products = Categories[$category] ?? null;

	onMount(() => {
		$category = document.location.hash.slice(1) as keyof typeof Categories;
	});
	beforeNavigate((url) => {
		$category = null;
	});
</script>

<svelte:head>
	<title>FFFF | {category ?? "Category"}</title>
</svelte:head>

{#if $category != null}
	<h3 class="show-at-medium page-label">{$category}</h3>
{/if}
{#if products != null}
	<div class="products">
		{#each [...products] as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
{:else}
	<div class="loading-container">
		<Loading />
	</div>
{/if}
