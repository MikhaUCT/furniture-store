<script lang="ts">
	import type { Product } from "../Product";
	import Review from "$lib/Review.svelte";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";
	import ReviewSummary from "./ReviewSummary";

	export let product: Product;
</script>

<div class="hero card">
	<img src={product.image} alt={product.name} />
	<div class="details">
		<h2>{product.name}</h2>
		<Rating rating={product.getRating()} reviewCount={product.reviews.length} />
		<h3>R{product.price}</h3>
		<div class="stock">{product.stock} In Stock</div>
		<AddToCart {product} />
	</div>
</div>
<div class="more card">
	<ReviewSummary {product} />
	<div class="description">
		{#each product.description as line}
			<p>{line}</p>
		{/each}
	</div>
</div>
<div class="reviews card">
	{#each product.reviews.sort((a, b) => b.rating - a.rating - (b.comment ? 0 : 5)) as review}
		<Review {review} />
	{/each}
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 2rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.more {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: 2rem;
	}
	.card {
		background-color: var(--bg-01);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		padding: 2rem;
		margin-bottom: 1rem;
	}
	.reviews {
		padding-block: 0;
	}
</style>
