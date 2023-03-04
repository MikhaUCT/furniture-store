<script lang="ts">
	export let rating: number;
</script>

<div class="rating">
	{#each new Array(rating) as _}
		<svg viewBox="0 0 99 100">
			<path
				d="M49.553 5l11.226 34.549h36.327l-29.39 21.353 11.226 34.549-29.389-21.353-29.389 21.353L31.39 60.902 2 39.549h36.327L49.553 5z"
			/>
		</svg>
	{/each}
</div>

<style>
	svg {
		fill: var(--gold);
		width: 2rem;
	}
</style>
