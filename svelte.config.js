import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-node';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import { svelteSVG } from "rollup-plugin-svelte-svg";


const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [ preprocess(),
	],

	kit: {
		adapter: node(),
		appDir: 'app',
		vite: {
			plugins: [
				svelteSVG({
					svgo: {},
					enforce: "pre",
				}),
				Unocss({
					presets: [
						presetAttributify({}),
						presetUno(),
						presetIcons()
					]

				})
			]
		}
	}
};

export default config;
