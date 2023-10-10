/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Inter"', 'system-ui'],
        'display': ['"Splice Sans"', 'system-ui'],
      },
      colors: {
        'background': '#fdfdfd',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require ('flowbite/plugin')
  ],
}

