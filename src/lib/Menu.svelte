<script lang="ts">
	import { fade } from "svelte/transition";
	import FFFF from "./FFFF.svelte";
	import HamburgerMenuButton from "./HamburgerMenuButton.svelte";

	export let open = false;

	function onkeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={onkeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if open}
	<div
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200, delay: 400 }}
		class="overlay show-at-medium"
		on:click={() => (open = false)}
	/>
{/if}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<aside class="card show-at-medium" class:open on:click={() => (open = false)}>
	<div class="header card">
		<FFFF animate="hover" />
		<HamburgerMenuButton bind:open />
	</div>
	<div class="content">
		<slot />
	</div>
</aside>

<style lang="scss">
	.overlay {
		position: fixed;
		inset: 0;
		background-color: #0008;
		z-index: 100;
	}
	aside {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		max-width: 100%;
		width: 35rem;
		overflow-y: auto;

		z-index: 100;
		transform: translateX(-100%);
		background-color: var(--bg-00);
		padding: 0;
	}
	aside.open {
		transform: translateX(0);
		transition-delay: 0.4s;
	}
	.header {
		box-sizing: content-box;
		height: 2.5rem;
		display: flex;
		border-radius: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-block: 1rem;
		&:global(.card) {
			border-radius: 0;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		aside {
			transition: transform 0.4s;
		}
		.overlay {
			transition: opacity 0.4s;
		}
	}
</style>
