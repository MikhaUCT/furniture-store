<script lang="ts">
	import { base } from "$app/paths";
</script>

<section>
	<div class="card">
		<h3>Delivery ()</h3>
		<a href="{base}/checkout/acquisition/delivery" class="btn-primary">Pay</a>
	</div>

	<div class="card">
		<h3>Collect</h3>
		<a href="{base}/checkout/acquisition/collection" class="btn-primary">Pay</a>
	</div>
</section>
<aside style="card" />

<style lang="scss">
	section {
		display: flex;
		gap: 1rem;
	}
	div {
		flex: 1;
	}
	a {
		width: 100%;
	}
</style>
