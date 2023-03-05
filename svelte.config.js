import adapter from '@sveltejs/adapter-static';
import importAssets from 'svelte-preprocess-import-assets';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		importAssets(),
		vitePreprocess(),
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/furniture-store",
			// This allows me to have a base route of /furniture-store
			relative: false,
		},
		prerender: {
			handleMissingId: "ignore",
		}
	}
};

export default config;
