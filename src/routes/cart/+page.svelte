<script lang="ts">
	import CartItem from "$lib/CartItem.svelte";
	import Empty from "$lib/Empty.svelte";
	import { cart, totalItems } from "../../stores";
	import { base } from "$app/paths";

	$: items = [...$cart.contents];
</script>

<svelte:head>
	<title>FFFF | Cart</title>
</svelte:head>

<h3 class="page-label">Shopping Cart</h3>
<div class="cart">
	{#if items.length > 0}
		<div class="order">
			<div class="items">
				{#each items as product (product.id)}
					<CartItem {product} />
				{/each}
			</div>
			<div class="summary card">
				<h4>Order Summary</h4>
				<div class="summary-item">
					<span>Items:</span>
					<span>{$totalItems}</span>
				</div>
				<div class="summary-item">
					<span>Total:</span>
					<span>R{$cart.total}</span>
				</div>
				<a href="{base}/checkout" class="btn-primary">Proceed To Checkout</a>
			</div>
		</div>
	{:else}
		<Empty />
	{/if}
</div>

<style lang="scss">
	.order {
		display: grid;
		gap: 1rem;
		grid-template-columns: 5fr 2fr;
	}
	.items {
		--trans: 0.1s ease-in-out;
		display: grid;
		gap: 1rem;
	}
	.summary {
		height: fit-content;
		display: grid;
		gap: 1rem;
		position: sticky;
		top: 1rem;
	}
	.summary-item {
		font-size: 1.8rem;
		display: flex;
		justify-content: space-between;
	}
</style>
