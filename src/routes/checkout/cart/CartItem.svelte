<script lang="ts">
	import { formatNumber, type Product } from "../../../utils";
	import { cart } from "../../../stores";
	import Bin from "./Bin.svelte";
	import NumberSelect from "./NumberSelect.svelte";
	import { base } from "$app/paths";

	export let product: Product;
</script>

<div class="product">
	<a href="{base}/product#{product.id}">
		<img src={product.image} alt={product.name} class="item-section" />
	</a>
	<div class="details item-section">
		<a href="{base}/product#{product.id}">
			<div class="name">{product.name}</div>
		</a>
		<div class="stock">In Stock: {formatNumber(product.stock)}</div>
		<div class="price">
			R{formatNumber(product.price * product.selected)}
		</div>
	</div>
	<div class="controls">
		<div class="money">
			<NumberSelect
				value={product.selected}
				max={product.stock}
				on:increment={() => {
					$cart.addProduct(product, 1);
					product = product;
					$cart = $cart;
				}}
				on:decrement={() => {
					$cart.removeProduct(product, 1);
					product = product;
					$cart = $cart;
				}}
			/>
		</div>
		<Bin
			on:click={() => {
				$cart.removeProduct(product);
				$cart = $cart;
			}}
		/>
	</div>
</div>

<style lang="scss">
	@import "../../../variables.scss";
	.product {
		--padding: 3rem;
		display: grid;
		grid-template-columns: 15rem 4fr auto;
		gap: 1rem;
		background-color: var(--bg-01);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		overflow: hidden;
		height: fit-content;
	}
	.controls {
		display: grid;
		grid-template-columns: 1fr 5rem;
		gap: 2rem;
	}
	.money {
		display: grid;
		place-content: center;
	}
	.price {
		font-weight: bold;
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.item-section {
		padding-block: var(--padding);
	}
	.details div {
		margin-bottom: 1rem;
	}
	.name {
		font-size: 2rem;
	}
	.stock {
		font-size: 1.2rem;
		font-weight: bold;
	}
	img {
		height: 18rem;
		object-fit: cover;
		margin-left: var(--padding);
	}
	a {
		text-decoration: none;
		color: var(--fg-00);
		&:hover {
			text-decoration: underline;
		}
	}
	@media (max-width: $medium) {
		.product {
			grid-template-columns: auto 1fr;
			grid-template-rows: 1fr 5rem;
			.details {
				margin-right: var(--padding);
			}
		}
		img {
			height: 12rem;
		}
		.item-section {
			padding-bottom: 1rem;
		}
		.controls {
			grid-template-columns: 1fr 1fr;
			grid-column-start: 1;
			grid-column-end: 3;
			gap: 0;
			.money {
				border-right: 1px solid var(--fg-02);
			}
		}
	}
</style>
