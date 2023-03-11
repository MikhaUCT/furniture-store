<script lang="ts">
	import Loading from "$lib/FFFF.svelte";
	import ProductData from "$lib/ProductData.svelte";
	import { onMount, onDestroy } from "svelte";
	import { Product } from "../../utils";
	let product: Product | null;
	let name: string | null = null;

	function getProductFromHash() {
		const id = document.location.hash.slice(1);
		product = Product.getProduct(id) || null;
		name = product?.name || null;
	}
	onMount(getProductFromHash);
</script>

<svelte:window on:hashchange={getProductFromHash} />
<svelte:head>
	<title>FFFF | {name ?? "Product"}</title>
</svelte:head>

{#if product === undefined}
	<div class="loading-container">
		<Loading />
	</div>
{:else if product === null}
	<h3>Product not found</h3>
{:else}
	<ProductData {product} />
{/if}
