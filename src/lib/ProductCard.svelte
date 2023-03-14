<script lang="ts">
	import { formatNumber, type Product } from "../utils";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";
	import { base } from "$app/paths";

	export let product: Product;
</script>

<div class="product card">
	<a href="{base}/product#{product.id}"
		><img src={product.image} alt={product.name} loading="lazy" />
		<ul class="details">
			<li class="name ellipse-overflow">{product.name}</li>
			<li class="price">R{formatNumber(product.price)}</li>
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
		height: fit-content;
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
