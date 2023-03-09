<script lang="ts">
	import type { Product } from "../Product";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";
	import ReviewSummary from "./ReviewSummary";
	import ReviewList from "./ReviewList.svelte";
	import { base } from "$app/paths";

	export let product: Product;

	function commentComparator(a: Review, b: Review) {
		if (a.comment && !b.comment) return -1;
		if (!a.comment && b.comment) return 1;
		return b.rating - a.rating;
	}

	function commentFilter(review: Review) {
		return !!review;
	}
</script>

<section>
	<div>
		<a href="{base}/category#{product.categories[0]}">{product.categories[0]}</a> > {product.name.toLowerCase()}
	</div>
	<div class="hero card">
		<img src={product.image} alt={product.name} />
		<div class="details">
			<h2>{product.name}</h2>
			<Rating rating={product.getRating()} reviewCount={product.reviews.length} />
			<h3>R{product.price}</h3>
			<div class="stock">{product.stock} In Stock</div>
		</div>
		<AddToCart {product} />
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
		<ReviewList
			reviews={product.reviews}
			comparator={commentComparator}
			filter={commentFilter}
		/>
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
	}
	.hero {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		gap: 2rem;
		align-items: end;
	}
	img {
		width: 100%;
		min-width: 30rem;
		height: 100%;
		object-fit: cover;
		grid-row-start: 1;
		grid-row-end: 3;
	}
	.more {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: 2rem;
	}
	.reviews {
		padding-block: 0;
	}
</style>
