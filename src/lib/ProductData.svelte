<script lang="ts">
	import { formatNumber, type Product } from "../utils";
	import AddToCart from "./AddToCart.svelte";
	import Rating from "./Rating.svelte";
	import ReviewSummary from "./ReviewSummary.svelte";
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
	<div class="hero card revert-grid-at-small">
		<img src={product.image} alt={product.name} />
		<div class="details">
			<h2 class="hide-at-medium">{product.name}</h2>
			<h3 class="show-at-medium">{product.name}</h3>
			<Rating rating={product.getRating()} reviewCount={product.reviews.length} />
			<h3 class="hide-at-medium">R{formatNumber(product.price)}</h3>
			<h4 class="show-at-medium">R{formatNumber(product.price)}</h4>
			<div class="stock">{formatNumber(product.stock)} In Stock</div>
		</div>
		<AddToCart {product} />
	</div>
	<div class="more card revert-grid-at-small">
		<div class="description">
			{#each product.description as line}
				<p>{line}</p>
			{/each}
		</div>
		<ReviewSummary {product} />
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
		grid-template-rows: 1fr auto;
		gap: 2rem;
		align-items: start;
	}
	img {
		width: 100%;
		min-width: 24rem;
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
	.description {
		order: 1;
	}
	@media (max-width: 600px) {
		.more {
			grid-template-columns: 1fr;
		}
		.description {
			order: 0;
		}
	}
</style>
