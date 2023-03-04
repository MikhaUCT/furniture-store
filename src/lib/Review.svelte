<script lang="ts">
	import type { Review } from "../Product";
	import Stars from "./Stars.svelte";

	export let review: Review;
</script>

<div class="review">
	<div class="comment-data" class:inline={!review.comment}>
		<div class="stars">
			<Stars rating={review.rating} />
		</div>
		<div class="name">{review.userName}</div>
	</div>
	{#if review.comment}
		{review.comment}
	{/if}
</div>

<style lang="scss">
	.review {
		padding: 1rem;
	}
	.review:not(:last-child) {
		border-bottom: 1px solid var(--fg-02);
	}
	.name {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	.stars {
		margin-left: -0.3rem;
		width: 10rem;
	}
	.inline {
		display: flex;
		align-items: center;
		gap: 1rem;
		.name {
			margin: 0;
		}
	}
</style>
