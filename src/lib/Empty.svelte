<div class="empty">
	<svg viewBox="0 0 120 120">
		<path
			d="M.6 12h12.27l2.917 5.844L34.74 57.277l-8.181 14.957C22.185 80.231 27.962 90 37.065 90h71.744V78H37.065l6.563-12H91.31a5.99 5.99 0 0 0 5.236-3.086l23.293-42c2.218-3.999-.669-8.914-5.236-8.914h-88.34l-4.058-8.13C21.021 1.498 18.602 0 15.955 0H.6v12zM49 108c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm60 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"
		/>
	</svg>
	<span>Your shopping cart is empty</span>
	<a href="/home" class="btn-primary">Back To Home Page</a>
</div>

<style lang="scss">
	.empty {
		display: grid;
		gap: 3rem;
		place-items: center;
		box-shadow: var(--shadow);
		padding: 3rem;
		background-color: var(--bg-01);
		border-radius: var(--border-radius);
		span {
			text-align: center;
		}
	}
	svg {
		fill: var(--fg-00);
		width: 10rem;
	}
</style>
