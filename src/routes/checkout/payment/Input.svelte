<script context="module" lang="ts">
	import { createEventDispatcher } from "svelte";
	import { UUIDGenerator } from "../../../utils";

	const IDGenerator = new UUIDGenerator("input-");
</script>

<script lang="ts">
	export let value: string;
	export let label: string;
	export let max_length: number = Infinity;
	export let autocomplete: string = "off";
	export let pattern: RegExp = /.*/;
	export let valid: (s: string) => any = () => true;

	const id = IDGenerator.next();
	const dispatch = createEventDispatcher();

	function onInput(e: Event & { currentTarget: HTMLInputElement & EventTarget }) {
		if (pattern.test(e.currentTarget.value.toLowerCase())) {
			value = e.currentTarget.value.slice(0, max_length);
		}
		e.currentTarget.value = value;
	}

	function onFocus() {
		dispatch("focus", label.replaceAll(" ", "-").toLowerCase());
	}

	function onBlur() {
		dispatch("blur", label.replaceAll(" ", "-").toLowerCase());
	}
</script>

<span class:contents={value.length > 0} class:valid={valid(value) || value.length === 0}>
	<input
		type="text"
		{id}
		{value}
		placeholder=" "
		{autocomplete}
		on:focus={onFocus}
		on:blur={onBlur}
		on:input={onInput}
	/>
	<label for={id}>{label}</label>
</span>

<style lang="scss">
	span {
		display: inline-block;
		position: relative;
		height: 5rem;
	}
	input {
		bottom: 0;
		position: absolute;
		background-color: transparent;
		height: 4rem;
		width: 100%;
		padding-inline: 1rem;
		outline: none;
		transition: outline-color var(--trans);
		outline: solid 1px var(--red);
		border: none;
		&:focus {
			outline-color: var(--red);
			outline-width: 2px;
		}
	}
	label {
		color: var(--red);
		position: absolute;
		left: 0.5rem;
		bottom: 1.1rem;
		transition: all 0.15s ease-in-out;
		padding-inline: 0.5rem;
		user-select: none;
		pointer-events: none;
	}
	span:focus-within label {
		color: var(--red);
	}
	// Firefox doesn't support :has yet, so I'm using js to add the class
	// span:has(> input:not(:placeholder-shown)),
	span.contents,
	span:focus-within {
		label {
			background-color: var(--bg-01);
			transform: translateY(-2.2rem);
			font-size: 1.2rem;
		}
	}
	.valid {
		&:focus-within label {
			color: var(--accent-00);
		}
		input:focus {
			outline-color: var(--accent-00);
		}
		label {
			color: var(--fg-01);
		}
		input {
			outline-color: var(--fg-02);
		}
	}
</style>
