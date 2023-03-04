<script lang="ts">
	import Empty from "$lib/Empty.svelte";
	import { cart } from "../../stores";
</script>

<svelte:head>
	<title>FFFF | Checkout</title>
</svelte:head>

<h3>Checkout</h3>
{#if $cart.contents.size != 0}
	<form action="">
		<section>
			<h4>Address</h4>
			<div class="form-group">
				<label for="address">Street Address</label>
				<input type="text" name="address" id="address" />
			</div>
			<div class="form-group">
				<label for="suburb">Suburb</label>
				<input type="text" name="suburb" id="suburb" />
			</div>
			<div class="form-group">
				<label for="town">City / Town</label>
				<input type="text" name="town" id="town" />
			</div>
			<div class="form-group">
				<label for="province">Province</label>
				<input type="text" name="province" id="province" />
			</div>
			<div class="form-group">
				<label for="postal-code">Postal Code</label>
				<input type="text" name="postal-code" id="postal-code" />
			</div>
		</section>
		<section>
			<h4>Banking Details</h4>
			<div class="form-group">
				<label for="card-number">Card Number</label>
				<input type="text" name="card-number" id="card-number" />
			</div>
			<div class="form-group">
				<label for="expiry">Expiry Date</label>
				<input type="text" name="expiry" id="expiry" />
			</div>
			<div class="form-group">
				<label for="cvv">CVV</label>
				<input type="text" name="cvv" id="cvv" />
			</div>
		</section>
		<button type="submit" class="btn-primary">Place Order</button>
	</form>
{:else}
	<Empty />
{/if}

<style lang="scss">
	form {
		display: grid;
		gap: 1rem;
	}
	section {
		display: grid;
		gap: 1rem;
		background-color: var(--bg-01);
		padding: 3rem;
		box-shadow: var(--shadow);
	}
	.form-group {
		display: grid;
		gap: 0.5rem;
	}
	input {
		padding: 0.5rem;
		background-color: var(--bg-01);
		border: solid 1px var(--fg-00);
		outline: transparent;
		border-radius: var(--border-radius);
		&:focus {
			border: solid 1px var(--accent-00);
		}
	}
	button {
		margin: auto;
	}
</style>
