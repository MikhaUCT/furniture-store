<script lang="ts">
	import ReviewElement from "./Review.svelte";

	export let filter: (review: Review) => boolean;
	export let comparator: (a: Review, b: Review) => number;
	export let reviews: Review[];
</script>

{#each reviews.filter(filter).sort(comparator) as review}
	<ReviewElement {review} />
{/each}
