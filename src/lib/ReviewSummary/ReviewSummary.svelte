<script lang="ts">
	import type { Product } from "../../Product";
	import Rating from "../Rating.svelte";
	import Row from "./Row.svelte";

	export let product: Product;

	const rowTotals: { [key: number]: number } = {
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0,
	};
	for (const review of product.reviews) {
		rowTotals[review.rating]++;
	}
</script>

<div class="review-summary">
	<div class="totals">
		<div class="left">
			<div class="rating">{product.getRating()}</div>
			<Rating
				rating={product.getRating()}
				reviewCount={product.reviews.length}
				showNumbers={false}
			/>
		</div>
		<span class="total-reviews">{product.reviews.length}&nbsp;Reviews</span>
	</div>
	<div class="rows">
		{#each [5, 4, 3, 2, 1] as num}
			<Row {num} reviews={rowTotals[num]} total={product.reviews.length} />
		{/each}
	</div>
</div>

<style>
	.totals {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
		gap: 1rem;
	}
	.left {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.rating {
		font-size: 3rem;
		font-weight: bold;
	}
	.total-reviews {
		font-size: 1.4rem;
		color: var(--fg-01);
	}
</style>
