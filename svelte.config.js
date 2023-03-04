import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { loadEnv } from "vite";

process.env = { ...process.env, ...loadEnv("mode", process.cwd()) };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.VITE_TEST ? "" : "/furniture-store",
		}
	}
};

export default config;
