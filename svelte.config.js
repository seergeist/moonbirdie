import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
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
		adapter: vercel(),
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
