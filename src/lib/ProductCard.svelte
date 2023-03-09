<script lang="ts">
	import type { Product } from "../Product";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";
	import { base } from "$app/paths";

	export let product: Product;
</script>

<div class="product card">
	<a href="{base}/product#{product.id}"
		><img src={product.image} alt={product.name} loading="lazy" />
		<ul class="details">
			<li class="name">{product.name}</li>
			<li class="price">R{product.price}</li>
			<li class="rating">
				<Rating rating={product.getRating()} reviewCount={product.reviews.length} />
			</li>
		</ul>
	</a>
	<AddToCart {product} />
</div>

<style lang="scss">
	.product {
		flex-basis: 20rem;
		flex-grow: 1;
		max-width: 25rem;
		transition: scale 0.1s ease-in-out;
		&:hover {
			scale: 1.02;
		}
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
		box-orient: vertical;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.price {
		font-size: 2rem;
		font-weight: bold;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
