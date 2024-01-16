import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			exception: '0px',
			sm: '600px',
			lg: '1280px',
			lg2: '1400px',
			xl: '1601px',
		},
		extend: {
			colors: {
				primary: '#090e17',
				secondary: '#858AB5',
				secondary_slider: '#2E3C55',
				accent: '#805140',
				accent_light: '#aa6d57',
				accent_slider: '#c76b4f',
				accent_input: '#151E2D',
				font_light: '#E6E6E6',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				mirra: [`Mirra Auriolic`, 'sans-serif'],
				poiret: [`Poiret One`, 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
