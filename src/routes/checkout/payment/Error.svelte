<script lang="ts">
	import { scale, draw } from "svelte/transition";
</script>

<div transition:scale>
	<svg viewBox="0 0 20 20" fill="none" stroke="var(--red)">
		<path transition:draw d="M10 1L19 19L1 19z" stroke-width="2" stroke-linejoin="round" />
		<circle cx="10" cy="16" r="1" fill="var(--red)" stroke="none" />
		<path d="M10 8v5" stroke-width="2" stroke-linecap="round" />
	</svg>
	<slot />
</div>

<style lang="scss">
	div {
		border-radius: var(--border-radius);
		border: solid var(--red) 4px;
		display: flex;
		align-items: center;
		margin-top: 1rem;
		gap: 0.5rem;
	}
	svg {
		width: 3.5rem;
		padding: 0.5rem;
	}
</style>
