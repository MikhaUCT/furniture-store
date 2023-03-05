<script lang="ts">
	let flipped = false;
	let message = "";
	let textarea: HTMLTextAreaElement;

	function formSubmit(e: Event) {
		e.preventDefault();
		flipped = true;
		setTimeout(() => {
			flipped = false;
			message = "";
		}, 3000);
	}
</script>

<svelte:head>
	<title>FFFF | Contact Us</title>
</svelte:head>

<h3>Contact Us</h3>

<p>
	We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to
	reach out to us. We value your business and are committed to providing excellent customer
	service.
</p>

<p>
	You can contact us by filling out our <a href="#form">contact form</a>
	or by emailing us directly at
	<a href="mailto:customerservice@fuzzyfredsfabulousfurniture.com"
		>customerservice@fuzzyfredsfabulousfurniture.com</a
	>. We aim to respond to all inquiries within 24-256 hours.
</p>
<p>
	If you prefer to speak with someone over the phone, you can reach us at (555) 123-4567 during
	our business hours of Monday-Friday, 9am-5pm GMT+2.
</p>
<p>
	Thank you for shopping at Fuzzy Fred's Fabulous Furniture online store. We appreciate your
	business and look forward to hearing from you!
</p>
<form on:submit={formSubmit}>
	<h4>Send us a message!</h4>
	<div class="flipper" class:flipped>
		<div class="front">
			<textarea id="form" bind:value={message} bind:this={textarea} />
			<input class="btn-primary" type="submit" value="Submit" />
		</div>
		<div class="back">Thank you for your message!</div>
	</div>
</form>

<style lang="scss">
	form {
		width: 80%;
		margin-inline: auto;
	}
	textarea {
		width: 100%;
		flex-grow: 1;
		border-radius: var(--border-radius);
		border: solid 1px var(--fg-00);
		outline: transparent;
		padding: 1rem;
		resize: none;
		&:focus {
			border-color: var(--accent-00);
		}
	}
	input {
		width: 100%;
	}
	.flipper {
		transform-style: preserve-3d;
		perspective: 100rem;
		position: relative;
		height: 25rem;
		> div {
			transform-origin: center;
			backface-visibility: hidden;
			position: absolute;
			inset: 0;
			transition: transform 0.5s ease-in-out;
			box-shadow: var(--shadow);
		}
	}
	.front {
		transform: rotateX(0deg);
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}
	.back {
		border-radius: var(--border-radius);
		transform: rotateX(-180deg);
		color: var(--accent-00);
		font-size: 3rem;
		padding: 3rem;
		font-weight: bold;
		display: grid;
		place-items: center;
		text-align: center;
	}
	.flipped {
		.front {
			transform: rotateX(180deg);
		}
		.back {
			transform: rotateX(0deg);
		}
	}
</style>
