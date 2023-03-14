<script lang="ts">
	import CartItem from "./CartItem.svelte";
	import { cart, totalItems } from "../../../stores";
	import { base } from "$app/paths";
	import { formatNumber } from "../../../utils";
	import CheckoutMenu from "$lib/CheckoutMenu.svelte";

	$: items = [...$cart.contents];
</script>

<h3 class="page-label">Shopping Cart</h3>
<div class="hide-at-medium" />
<div class="items">
	{#each items as product (product.id)}
		<CartItem {product} />
	{/each}
</div>
<CheckoutMenu>
	<div>
		<h3>Order Summary</h3>
		<div class="summary-item">
			<span>Items:</span>
			<span>{formatNumber($totalItems)}</span>
		</div>
		<div class="summary-item">
			<span>Total:</span>
			<span>R{formatNumber($cart.total)}</span>
		</div>
		<a href="{base}/checkout/payment" class="btn-primary">Proceed To Checkout</a>
	</div>
</CheckoutMenu>

<style lang="scss">
	.items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.summary-item {
		font-size: 1.8rem;
		display: flex;
		justify-content: space-between;
	}
	.page-label {
		margin: 0;
	}
</style>
