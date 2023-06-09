/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xlg: '1200px',
				pageMaxWidth: '1440px',
			},
			fontSize: {
				xs: '1rem',
				sm: '1.2rem',
				base: '1.4rem',
				xl: '1.6rem',
				'2xl': '1.8rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
				'5xl': '3.0rem',
			},
			aspectRatio: {
				'2/3': '2 / 3',
				'3/2': '3 / 2',
			},
			gridTemplateRows: {
				// Simple 8 row grid
				'7': 'repeat(7, minmax(0, 1fr))',
				'8': 'repeat(8, minmax(0, 1fr))',
			},
			colors: {
				'gris-1': '#404040',
				'gris-2': '#666666',
				'gris-3': '#8C8C8C',
				'gris-4': '#B3B3B3',
				'gris-5': '#D9D9D9',
				'gris-6': '#E6E6E6',
				'gris-7': '#F7F7F7'
			}, //<-- Use the pg_colors for colors
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			}, //<-- Use the pg_fonts for fonts
			spacing: {
				'12': '3rem',
				'14': '3.5rem',
				'16': '4rem',
				'20': '6rem',
			},
			width: {
				'88': '8rem',
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
