<script lang="ts">
	export let animate: "yes" | "no" | "hover" = "yes";
</script>

<svg viewBox="0 0 160 44" class:animate={animate == "yes"} class:hover={animate == "hover"}>
	<defs>
		<path
			id="loading-f"
			d="M45.35 1.55c.933.133 1.567.417 1.9.85.367.433.55 1 .55 1.7 0 2.3-1.233 3.367-3.7 3.2l-1.75-.15-5.9-.4-6.1-.15H28.1l-1.25 13.5 8.6-.15c1.233 0 2.05.217 2.45.65.433.433.65 1.017.65 1.75 0 1.133-.333 2.033-1 2.7-.667.633-1.617.95-2.85.95h-8.55l-.3 2.15c-.7 5.5-2.2 9.417-4.5 11.75-2.267 2.333-5.4 3.5-9.4 3.5-2.267 0-4.35-.483-6.25-1.45-1.9-1-3.3-2.2-4.2-3.6-.367-.567-.55-1.25-.55-2.05s.183-1.5.55-2.1c.4-.6.883-.9 1.45-.9.4 0 .783.133 1.15.4.4.267.9.783 1.5 1.55 1.6 2.1 3.583 3.15 5.95 3.15 1.9 0 3.483-.767 4.75-2.3 1.3-1.567 2.133-4.017 2.5-7.35l.3-2.75h-2.4c-.767 0-1.433-.217-2-.65-.533-.433-.8-1.05-.8-1.85 0-1.033.267-1.817.8-2.35.533-.567 1.317-.85 2.35-.85.933 0 1.85-.017 2.75-.05L21.1 6.9c-3.6.333-6.133.917-7.6 1.75s-2.2 2.067-2.2 3.7c0 1.133.333 2.217 1 3.25.2.3.3.6.3.9 0 .6-.333 1.133-1 1.6-.667.433-1.417.65-2.25.65-.9 0-1.667-.267-2.3-.8-.4-.333-.783-1.017-1.15-2.05s-.55-2.183-.55-3.45c0-4.133 2.117-7.133 6.35-9C15.967 1.583 22.183.65 30.35.65c5.667 0 10.667.3 15 .9z"
		/>
	</defs>
	<use class="f-0" xlink:href="#loading-f" />
	<use class="f-1" xlink:href="#loading-f" x="37" />
	<use class="f-2" xlink:href="#loading-f" x="74" />
	<use class="f-3" xlink:href="#loading-f" x="111" />
</svg>

<style lang="scss">
	svg {
		overflow: visible;
		height: 100%;
		margin: auto;
		fill: currentcolor;
	}
	@media (prefers-reduced-motion: no-preference) {
		.animate use {
			animation: bounce 2.5s infinite;
		}
		.animate {
			.f-1 {
				animation-delay: 0.4s;
			}
			.f-2 {
				animation-delay: 0.8s;
			}
			.f-3 {
				animation-delay: 1.2s;
			}
		}
		.hover:hover use {
			animation: bounce 2.5s infinite;
		}
		.hover:hover {
			.f-1 {
				animation-delay: 0.4s;
			}
			.f-2 {
				animation-delay: 0.8s;
			}
			.f-3 {
				animation-delay: 1.2s;
			}
		}
	}
	@keyframes bounce {
		0%,
		50%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(0, -10px);
		}
	}
</style>
