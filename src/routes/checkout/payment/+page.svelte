<script lang="ts">
	import { base } from "$app/paths";
	import CheckoutMenu from "$lib/CheckoutMenu.svelte";
	import { cart, totalItems } from "../../../stores";
	import { formatNumber } from "../../../utils";
	import CardDetails from "./CardDetails.svelte";
	import Error from "./Error.svelte";

	let errors: string[];
</script>

<CardDetails bind:errors />
<CheckoutMenu>
	<div>
		<h3>Order Summary</h3>
		<div class="row">
			<span>Items:</span>
			<span>{formatNumber($totalItems)}</span>
		</div>
		<div class="row">
			<span>Total:</span>
			<span>R{formatNumber($cart.total)}</span>
		</div>
		<a
			href="{base}/checkout/confirm"
			class:disabled={errors == null || errors.length != 0}
			class="btn-primary">Continue</a
		>
		{#if errors}
			<div class="errors">
				{#each errors as error (error)}
					<Error>{error}</Error>
				{/each}
			</div>
		{/if}
	</div>
</CheckoutMenu>

<style lang="scss">
	.row {
		display: flex;
		justify-content: space-between;
	}
	.disabled {
		pointer-events: none;
		color: gray;
		border-color: gray;
	}
</style>
