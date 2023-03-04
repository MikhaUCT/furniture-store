<script lang="ts">
	import Stars from "$lib/Stars.svelte";

	export let num: number;
	export let reviews: number;
	export let total: number = 0;

	$: width = (reviews / total) * 100;

	let color = (() => {
		switch (num) {
			case 5:
				return "#00A93B";
			case 4:
				return "#96D900";
			case 3:
				return "#FAE700";
			case 2:
				return "#FFA200";
			case 1:
				return "#FF1800";
		}
	})();
</script>

<div class="row">
	<div class="num">{num}</div>
	<Stars rating={1} />
	<div class="bar" style:--width="{width}%" style:--color={color} />
	<div class="total">{reviews}</div>
</div>

<style lang="scss">
	.row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.num {
		font-size: 1.4rem;
		font-weight: bold;
	}
	.bar {
		background-color: var(--fg-03);
		flex-grow: 1;
		height: 1rem;
		border-radius: 50vmax;
		&::before {
			content: "";
			display: block;
			background-color: var(--color);
			width: var(--width);
			height: 100%;
			border-radius: 50vmax;
		}
	}
	.total {
		font-size: 1.4rem;
		color: var(--fg-01);
	}
</style>
