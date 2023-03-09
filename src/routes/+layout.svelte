<script lang="ts">
	import "../style.css";
	import "../mobile.css";
	import SearchBar from "$lib/SearchBar.svelte";
	import { fly } from "svelte/transition";
	import { totalItems } from "../stores";
	import { base } from "$app/paths";
	import MikhaDavidsLogo from "$lib/MikhaDavidsLogo.svelte";
	import { afterNavigate } from "$app/navigation";
	import Logo from "$lib/Logo.svelte";
	import HamburgerMenu from "$lib/HamburgerMenu.svelte";
	let scrolled: HTMLElement;

	afterNavigate(() => {
		// @ts-ignore (TS is complaining about behavior "instant", which is a valid value)
		scrolled.scrollTo({ behavior: "instant", top: 0 });
	});
</script>

<nav>
	<div class="nav-top">
		<span class="show-at-medium">
			<HamburgerMenu />
		</span>
		<a href="{base}/home">
			<Logo />
		</a>
		<div class="details hide-at-medium">
			<a href="{base}/home">Home</a>
			<a href="{base}/about">About</a>
			<a href="{base}/contact">Contact</a>
			<a href="{base}/privacy-policy">Privacy</a>
			<a href="{base}/terms-and-conditions">Ts&nbsp;&&nbsp;Cs</a>
		</div>
	</div>
	<div class="nav-bottom">
		<SearchBar />
		<a href="{base}/cart" class="cart">
			<svg viewBox="0 0 120 120">
				<path
					d="M.6 12h12.27l2.917 5.844L34.74 57.277l-8.181 14.957C22.185 80.231 27.962 90 37.065 90h71.744V78H37.065l6.563-12H91.31a5.99 5.99 0 0 0 5.236-3.086l23.293-42c2.218-3.999-.669-8.914-5.236-8.914h-88.34l-4.058-8.13C21.021 1.498 18.602 0 15.955 0H.6v12zM49 108c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm60 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"
				/>
			</svg>
			{#key $totalItems}
				<span in:fly={{ y: -20, duration: 100 }} class="count">{$totalItems}</span>
			{/key}
		</a>
	</div>
</nav>
<section bind:this={scrolled}>
	<main>
		<slot />
	</main>
	<footer>
		<div>Designed and created by Mikha Davids</div>
		<MikhaDavidsLogo />
	</footer>
</section>

<style lang="scss">
	a {
		text-decoration: none;
		color: var(--fg-00);
	}
	.cart {
		display: flex;
		gap: 1rem;
		margin-block: auto;
		height: fit-content;
		width: fit-content;
		background-color: var(--accent-00);
		border: none;
		border-radius: 50vmax;
		padding: 1rem 1.5rem;
		color: var(--bg-01);
		font-weight: bold;
		font-size: 1em;
		text-decoration: none;
		box-shadow: 0 0.25rem 0.5rem #0004;
		&:hover {
			scale: 1.1;
		}
		svg {
			width: 2rem;
			fill: var(--bg-01);
		}
	}
	nav {
		position: relative;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 1rem #0002;
		background-color: var(--bg-01);
	}
	section {
		max-height: 100%;
		overflow-y: auto;
		scroll-behavior: smooth;
		display: flex;
		flex-direction: column;
	}
	main {
		flex-grow: 1;
		width: 100%;
		max-width: 107rem;
		padding: 1rem 2rem 5rem 2rem;
		margin-inline: auto;
	}
	.nav-top {
		padding-inline: 3rem;
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		align-items: center;
		& > a {
			display: flex;
			flex: 1;
			height: 4rem;
			margin-top: 0.5rem;
		}
	}
	.details {
		display: flex;
		font-size: 1.2rem;
		& > a {
			padding: 0.5rem 1rem;
			display: grid;
			place-content: center;
			height: 80%;
			&:hover {
				color: var(--accent-00);
				text-decoration: underline;
			}
		}
		& > a:not(:first-child) {
			border-left: 1px solid var(--fg-00);
		}
	}
	.nav-bottom {
		display: flex;
		margin-top: 0.75rem;
		max-width: 90%;
		padding-inline: 3rem;
		margin-inline: auto;
		gap: 2rem;
		justify-content: space-between;
		// margin-left: calc((100% - 79rem) / 2);
	}

	footer {
		background-color: var(--fg-00);
		padding: 1rem 3rem;
		color: var(--bg-00);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		gap: 1rem;
		user-select: none;
	}
</style>
