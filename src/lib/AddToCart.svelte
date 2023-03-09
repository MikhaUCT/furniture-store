<script lang="ts">
	import type { Product } from "../Product";
	import { cart } from "../stores";

	export let product: Product;

	function addToCart() {
		$cart.addProduct(product, 1);
	}
</script>

<button class="btn-primary" on:click={addToCart}>
	<svg viewBox="0 0 120 120">
		<path
			d="M.6 12h12.27l2.917 5.844L34.74 57.277l-8.181 14.957C22.185 80.231 27.962 90 37.065 90h71.744V78H37.065l6.563-12H91.31a5.99 5.99 0 0 0 5.236-3.086l23.293-42c2.218-3.999-.669-8.914-5.236-8.914h-88.34l-4.058-8.13C21.021 1.498 18.602 0 15.955 0H.6v12zM49 108c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm60 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"
		/>
	</svg>
	Add to Cart
</button>

<style lang="scss">
	button {
		width: 100%;
		height: fit-content;
	}
	button:hover svg {
		fill: var(--bg-01);
	}
	svg {
		width: 1.5rem;
		margin-right: 1rem;
		transition: fill var(--trans);
		fill: var(--accent-00);
	}
</style>
