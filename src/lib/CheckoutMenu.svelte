<aside class="card">
	<slot />
</aside>

<style lang="scss">
	@import "../variables.scss";
	aside {
		position: sticky;
		height: 100%;
		top: 1rem;
		:global(h3) {
			margin-top: 0;
		}
		:global(a) {
			width: 100%;
		}
		&:global(> div) {
			position: sticky;
			top: 1rem;
		}
	}
	@media (max-width: $medium) {
		aside {
			position: absolute;
			inset: auto 0 0 0;
			height: fit-content;
			min-height: fit-content;
			padding: 1.5rem;
		}
	}
</style>
