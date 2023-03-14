<script lang="ts">
	export let flipped: boolean = false;
</script>

<div class="flip-card" class:flipped>
	<div class="front">
		<slot name="front" />
	</div>
	<div class="back">
		<slot name="back" />
	</div>
</div>

<style lang="scss">
	.flip-card {
		transform-style: preserve-3d;
		perspective: 100rem;
		position: relative;
		height: 20rem;
		width: 35rem;
		> div {
			border-radius: 1rem;
			transform-origin: center;
			backface-visibility: hidden;
			position: absolute;
			background-color: #fff;
			inset: 0;
			transition: transform 0.5s ease-in-out;
			box-shadow: var(--shadow);
		}
		&.flipped {
			.front {
				transform: rotateY(180deg);
			}
			.back {
				transform: rotateY(0deg);
			}
		}
	}
	.front {
		transform: rotateY(0deg);
	}
	.back {
		transform: rotateY(-180deg);
	}
</style>
