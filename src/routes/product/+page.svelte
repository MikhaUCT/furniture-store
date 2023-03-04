<script lang="ts">
	import Loading from "$lib/Loading.svelte";
	import ProductData from "$lib/ProductData.svelte";
	import { onMount } from "svelte";
	import { Product } from "../../Product";
	let product: Product | null;
	let name: string | null = null;
	onMount(() => {
		const id = document.location.hash.slice(1);
		product = Product.getProduct(id) || null;
		name = product?.name || null;
	});
</script>

<svelte:head>
	<title>FFFF | {name ?? "Product"}</title>
</svelte:head>

{#if product === undefined}
	<Loading />
{:else if product === null}
	<h3>Product not found</h3>
{:else}
	<ProductData {product} />
{/if}
