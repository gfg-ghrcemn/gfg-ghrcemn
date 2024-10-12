const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js",
	"node_modules/preline/dist/*.js" 
],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				'100': '#f8f9fa',
  				'200': '#e9ecef',
  				'300': '#dee2e6',
  				'400': '#ced4da',
  				'500': '#adb5bd',
  				'600': '#868e96',
  				'700': '#495057',
  				'800': '#343a40',
  				'900': '#212529'
  			},
  			secondary: '#00895f'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		},
		fontFamily: {
			Silkscreen: ['Silkscreen', 'sans-serif'],
		}
  	}
  },
  plugins: [nextui(), require("tailwindcss-animate"),require('preline/plugin')],
}
