<script lang="ts">
	import { cart } from "../../stores";
	import Empty from "$lib/Empty.svelte";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>FFFF | {$page.url.pathname.split("/").at(-1)}</title>
</svelte:head>

{#if $cart.contents.size > 0}
	<section>
		<slot />
	</section>
{:else}
	<Empty />
{/if}

<style lang="scss">
	@import "../../variables.scss";
	section {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 24rem;
	}
	@media (max-width: $medium) {
		section {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			padding-bottom: 4.5rem;
		}
		:global(.checkout-menu) {
			position: absolute;
			inset: auto 0 0 0;
			height: fit-content;
			min-height: fit-content;
			padding: 1.5rem;
		}
	}
</style>
