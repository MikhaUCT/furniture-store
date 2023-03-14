<script lang="ts">
	import { base } from "$app/paths";
	import { error } from "@sveltejs/kit";
	import { formatNumber } from "../../../utils";
	import FlipCard from "./FlipCard.svelte";
	import Input from "./Input.svelte";

	export let errors: string[] = [];

	let name: string = "";
	let card_number: string = "";
	let cvv: string = "";
	let month: string = "";
	let year: string = "";
	let focused_input: string = "";

	function getCardType(card_number: string): string {
		const card_type = card_number.slice(0, 1);
		switch (card_type) {
			case "4":
				return "visa";
			case "2":
			case "5":
				return "mastercard";
			case "6":
				return "discover";
			case "3":
				return "amex";
			default:
				return "";
		}
	}

	$: card_type = getCardType(card_number);

	function onInputFocus(e: CustomEvent) {
		focused_input = e.detail;
	}
	function onInputBlur() {
		focused_input = "";
	}

	function validateName(name: string) {
		return name.trim().length > 0;
	}
	function validateCardNumber(card_number: string) {
		return card_number.trim().length === 16 && !isNaN(+card_number) && +card_number > 0;
	}
	function validateCVV(cvv: string) {
		return cvv.trim().length === 3 && !isNaN(+cvv) && +cvv > 0;
	}
	function validateYear(year: string) {
		if (isNaN(+year) || +year < 0) return "";
		if (year.trim().length === 2) {
			return +year + 2000;
		} else return +year;
	}
	const months = [
		"jan",
		"feb",
		"mar",
		"apr",
		"may",
		"jun",
		"jul",
		"aug",
		"sep",
		"oct",
		"nov",
		"dec",
	];
	function validateMonth(month: string) {
		month = month.trim();
		if (!isNaN(+month)) {
			if (+month > 0 && +month <= 12) {
				return (+month).toString().padStart(2, "0");
			}
		} else if (month.length === 3) {
			const month_index = months.indexOf(month.toLowerCase());
			if (month_index === -1) return "";
			return (month_index + 1).toString().padStart(2, "0");
		}
		return "";
	}
	function validate(name: string, card_number: string, cvv: string, month: string, year: string) {
		const errors = [];
		if (!validateName(name)) {
			errors.push("No name entered");
		}
		if (!validateCardNumber(card_number)) {
			errors.push("invalid card number");
		}
		if (!validateCVV(cvv)) {
			errors.push("invalid cvv");
		}
		const valid_year = validateYear(year);
		if (!valid_year) {
			errors.push("invalid year");
		} else if (valid_year < new Date().getFullYear()) {
			errors.push("card expired");
		}
		const valid_month = validateMonth(month);
		if (!valid_month) {
			errors.push("invalid month");
		} else if (
			valid_year === new Date().getFullYear() &&
			+valid_month < new Date().getMonth() + 1
		) {
			errors.push("card expired");
		}
		return errors;
	}
	$: errors = validate(name, card_number, cvv, month, year);
</script>

<section class="{card_type} f-{focused_input}">
	<FlipCard flipped={focused_input == "cvv"}>
		<svelte:fragment slot="front">
			<div class="front">
				<img class="img-1" src="{base}/img/{card_type}.svg" alt={card_type} />
				<div class="card-number">
					{formatNumber(card_number, 4, 16, "•")}
				</div>
				<div class="bottom">
					<div class="left">
						<span class="expiry">
							<span class="valid-thru">
								<div>valid</div>
								<div class="thru">thru</div>
							</span>
							<span class="date">
								<span class="month"
									>{formatNumber(validateMonth(month), Infinity, 2, "•")}</span
								>/<span class="year"
									>{formatNumber(
										year.slice(-2, year.length),
										Infinity,
										2,
										"•"
									)}</span
								>
							</span>
						</span>
						<span class="name">{name.trim().length > 0 ? name : "Full Name"}</span>
					</div>
					<div class="right">
						{#if card_type != ""}
							<img class="img-2" src="{base}/img/{card_type}.svg" alt={card_type} />
						{/if}
					</div>
				</div>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="back">
			<div class="back">
				<div class="m-strip" />
				<div class="signature-strip">
					{formatNumber(cvv, Infinity, 3, "•")}
				</div>
			</div></svelte:fragment
		>
	</FlipCard>
	<form class="card">
		<div class="accepted">
			<span>We accept:</span>
			<img src="{base}/img/visa.svg" alt="visa" />
			<img src="{base}/img/mastercard.svg" alt="mastercard" />
			<img src="{base}/img/discover.svg" alt="discover" />
			<img src="{base}/img/amex.svg" alt="amex" />
		</div>
		<Input
			bind:value={name}
			label="Full Name"
			max_length={25}
			autocomplete="cc-name"
			on:focus={onInputFocus}
			on:blur={onInputBlur}
		/>
		<Input
			bind:value={card_number}
			label="Card Number"
			max_length={16}
			autocomplete="cc-number"
			on:focus={onInputFocus}
			on:blur={onInputBlur}
			pattern={/^\d*$/}
			valid={validateCardNumber}
		/>
		<span class="bottom-inputs">
			<Input
				bind:value={cvv}
				label="CVV"
				max_length={3}
				autocomplete="cc-csc"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^\d*$/}
				valid={validateCVV}
			/>
			<Input
				bind:value={month}
				label="Month"
				max_length={3}
				autocomplete="cc-exp-month"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^[\djfmasond]?[\daepuco]?[nbrylgptyc]?$/}
				valid={validateMonth}
			/>
			<Input
				bind:value={year}
				label="Year"
				max_length={4}
				autocomplete="cc-exp-year"
				on:focus={onInputFocus}
				on:blur={onInputBlur}
				pattern={/^\d*$/}
				valid={validateYear}
			/>
		</span>
	</form>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		grid-template-rows: 1fr 1fr;
	}
	form {
		display: grid;
		gap: 1rem;
		width: 35rem;
		grid-template-columns: 1fr;
	}
	.accepted {
		display: flex;
		align-items: center;
		gap: 2rem;
		img {
			height: 35px;
		}
	}
	.bottom-inputs {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.card-number {
		text-align: center;
		font-size: 2.6rem;
		letter-spacing: 0.2rem;
	}
	.back,
	.front {
		font-family: Consolas, "Courier New", Courier, monospace;
		height: 100%;
		border-radius: 1rem;
		transition: all 0.2s ease-in-out;
	}
	// Front
	.front {
		padding: 2rem;
		text-transform: uppercase;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.img-1 {
		position: absolute;
		z-index: -1;
		visibility: hidden;
	}
	.card-number {
		margin-top: 5rem;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			flex-direction: column;
			font-size: 1.8rem;
			align-items: end;
		}
		.right {
			width: 6rem;
			height: 6rem;
			display: grid;
			place-items: center;
		}
		img {
			height: 100%;
		}
	}
	.expiry {
		display: flex;
		gap: 1rem;
	}
	.valid-thru {
		font-size: 0.9rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		.thru {
			margin-top: -0.3rem;
			letter-spacing: 0.15rem;
		}
	}
	// Back
	.back {
		background-color: #cccccc;
		padding-top: 2rem;
	}
	.m-strip {
		height: 4rem;
		background: #000;
		width: 100%;
	}

	.signature-strip {
		margin-top: 2rem;
		margin-left: 1rem;
		height: 3rem;
		background: white;
		width: 65%;
		display: flex;
		justify-content: end;
		align-items: center;
		padding-right: 1rem;
	}
	// Card type specific styles
	.visa {
		.front {
			color: white;
			background-image: linear-gradient(30deg, #044086, #35afe0, #044086);
		}
		.back {
			background-image: linear-gradient(-30deg, #044086, #35afe0, #044086);
		}
	}
	.mastercard {
		.front {
			background-image: linear-gradient(60deg, #cc0001, #eb001b, gold);
			color: white;
		}
		.back {
			background-image: linear-gradient(-60deg, #cc0001, #eb001b, gold);
		}
	}
	.amex {
		.front {
			background-image: linear-gradient(0deg, #11161a, transparent, #11161a),
				linear-gradient(90deg, #11161a, transparent, #11161a);
			color: white;
		}
		.back {
			background-image: linear-gradient(0deg, #11161a, #11161a40, #11161a),
				linear-gradient(90deg, #11161a, #11161a40, #11161a);
		}
		.img-1 {
			visibility: visible;
			inset: 0;
			height: 15rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.right {
			display: none;
		}
		.left {
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
		}
		.expiry {
			order: 1;
		}
		.valid-thru {
			display: none;
		}
	}
	.discover {
		.front {
			background-image: linear-gradient(90deg, #1e7a7a, #9abac5);
			color: white;
		}
		.back {
			background-image: linear-gradient(-90deg, #1e7a7a, #9abac5);
		}
		.img-1 {
			visibility: visible;
			z-index: 0;
			width: 16rem;
			top: -4.5rem;
			left: 1.5rem;
		}
		.bottom {
			align-items: end;
		}
		.right {
			display: flex;
			align-items: end;
		}
		.img-2 {
			height: 60%;
			width: 100%;
			object-fit: cover;
			background-color: #fff;
		}
	}
	.f-full-name .name {
		font-weight: bold;
	}
	.f-card-number .card-number {
		font-weight: bold;
	}
	.f-month .month {
		font-weight: bold;
	}
	.f-year .year {
		font-weight: bold;
	}
	.f-cvv .signature-strip {
		font-weight: bold;
	}
	// highlight field corresponding to active input;
</style>
