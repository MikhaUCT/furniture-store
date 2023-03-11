<script lang="ts">
	import { fly } from "svelte/transition";
	import type { Product } from "../utils";
	import { cart } from "../stores";

	export let product: Product;
</script>

<div class="product">
	<img src={product.image} alt={product.name} />
	<div class="details">
		<div class="name">{product.name}</div>
		<div class="stock">In Stock: {product.stock}</div>
	</div>
	<div class="money">
		<div class="price">
			R{product.price * product.selected}
		</div>
		<div class="quantity">
			<button
				on:click={() => {
					if (product.selected > 1) {
						$cart.removeProduct(product, 1);
						product = product;
						$cart = $cart;
					}
				}}>-</button
			>
			{#key product.selected}
				<span in:fly={{ y: -20, duration: 100 }}>{product.selected}</span>
			{/key}
			<button
				on:click={() => {
					$cart.addProduct(product, 1);
					product = product;
					$cart = $cart;
				}}>+</button
			>
		</div>
	</div>
	<button
		class="remove"
		on:click={() => {
			$cart.removeProduct(product);
			$cart = $cart;
		}}
	>
		<svg viewBox="0 0 256 256" fill="#000">
			<path
				d="M213.644 49.945H42.356l13.517 192.686c.528 7.53 6.79 13.369 14.339 13.369h115.576c7.547 0 13.81-5.839 14.338-13.369l13.518-192.686zM71.634 86.781c-.203-4.533 3.306-8.372 7.838-8.574l4.053-.182c4.532-.203 8.37 3.307 8.573 7.839l6.197 138.326c.203 4.533-3.306 8.372-7.838 8.575l-4.054.182c-4.531.202-8.37-3.307-8.573-7.839L71.634 86.781zm46.124-.55c0-4.537 3.677-8.215 8.213-8.215h4.058c4.536 0 8.213 3.678 8.213 8.215v138.464c0 4.537-3.677 8.215-8.213 8.215h-4.058c-4.536 0-8.213-3.678-8.213-8.215V86.231zm58.77-8.025c4.532.203 8.04 4.041 7.837 8.574l-6.196 138.326a8.22 8.22 0 0 1-8.573 7.839l-4.054-.182c-4.531-.203-8.041-4.042-7.837-8.575l6.197-138.326c.203-4.532 4.041-8.042 8.573-7.839l4.053.182z"
			/>
			<path
				class="lid"
				d="M102.474 0c-3.402 0-6.16 2.759-6.16 6.161v7.676l-47.94.001C40.435 13.838 34 20.274 34 28.214v13.131h188V28.214c0-7.94-6.435-14.376-14.374-14.376l-47.94-.001V6.161c0-3.403-2.758-6.161-6.16-6.161h-51.052z"
			/>
		</svg>
	</button>
</div>

<style lang="scss">
	.product {
		display: grid;
		grid-template-columns: 15rem 4fr 1fr 5rem;
		gap: 1rem;
		background-color: var(--bg-01);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		overflow: hidden;
	}
	.money {
		padding-block: 3rem;
		display: grid;
		place-content: center;
	}
	.price {
		font-weight: bold;
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.quantity {
		display: grid;
		place-content: center;
		grid-auto-flow: column;
		gap: 0.5rem;
		button {
			background-color: var(--bg-01);
			border-radius: var(--border-radius);
			border: solid 2px var(--accent-00);
			cursor: pointer;
			font-weight: bold;
			width: 2.5rem;
			transition: color var(--trans), background-color var(--trans);
			&:hover {
				background-color: var(--accent-00);
				color: var(--bg-01);
			}
		}
	}
	.remove {
		display: grid;
		place-items: center;
		transition: background-color var(--trans);
		background-color: var(--bg-01);
		border: none;
		cursor: pointer;
		svg {
			transition: fill var(--trans);
			fill: var(--fg-00);
			width: 3rem;
			overflow: visible;
		}
		&:hover {
			background-color: var(--red);
			svg {
				fill: var(--bg-01);
			}
			.lid {
				transform: rotate(45deg) translate(-6rem, 5rem);
			}
		}
		.lid {
			transform-origin: right;
			transition: transform var(--trans);
		}
	}
	.details {
		padding-block: 3rem;
	}
	.name {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	.stock {
		font-size: 1.2rem;
		font-weight: bold;
	}
	img {
		height: 18rem;
		padding: 3rem;
		object-fit: cover;
	}
</style>
