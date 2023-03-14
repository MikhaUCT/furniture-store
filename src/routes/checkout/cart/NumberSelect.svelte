<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";

	export let value: number;
	export let min = 1;
	export let max = Infinity;

	const dispatch = createEventDispatcher();
</script>

<div>
	<button
		on:click={() => {
			if (value < max) {
				value += 1;
				dispatch("increment");
			}
		}}
	>
		<svg viewBox="0 0 6 4">
			<path d="M3 0L6 4L0 4z" />
		</svg>
	</button>
	{#key value}
		<span class="value" in:fly={{ y: -20, duration: 100 }}>{value}</span>
	{/key}
	<button
		on:click={() => {
			if (value > min) {
				value -= 1;
				dispatch("decrement");
			}
		}}
	>
		<svg viewBox="0 0 6 4">
			<path d="M0 0L3 4L6 0z" />
		</svg>
	</button>
</div>

<style lang="scss">
	@import "../../../variables.scss";
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		&:hover {
			svg {
				fill: var(--accent-00);
			}
		}
	}
	.value {
		pointer-events: none;
		user-select: none;
	}
	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 0.5rem;
		&:hover {
			svg {
				scale: 1.4;
			}
		}
	}
	svg {
		transition: fill var(--trans), scale var(--trans);
		height: 1.2rem;
		fill: currentcolor;
	}
	@media (max-width: $medium) {
		div {
			flex-direction: row-reverse;
		}
		svg {
			transform: rotate(90deg);
		}
	}
</style>
