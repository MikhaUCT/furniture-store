<script lang="ts">
	import type { Product } from "../Product";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";

	export let product: Product;
</script>

<div class="product">
	<a href="./product/#{product.id}"
		><img src={product.image} alt={product.name} loading="lazy" /></a
	>
	<ul class="details">
		<li class="name">{product.name}</li>
		<li class="price">R{product.price}</li>
		<li class="rating">
			<Rating rating={product.getRating()} reviewCount={product.reviews.length} />
		</li>
	</ul>
	<AddToCart {product} />
</div>

<style lang="scss">
	.product {
		width: 25rem;
		background-color: var(--bg-01);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		img {
			cursor: pointer;
			width: 100%;
			height: 20rem;
			object-fit: contain;
			border-radius: 0.5rem;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin-top: 1rem;
	}
	.name {
		font-size: 1.5rem;
	}
	.price {
		font-size: 2rem;
		font-weight: bold;
	}
</style>
