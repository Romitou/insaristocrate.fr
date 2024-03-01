import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  plugins: [
    require('tailwindcss-animate')
  ],
  theme: {
    extend: {
      colors: {
        'red-logo': '#660806',
        'purple-logo': '#49307a'
      },
      fontFamily: {
        'della': ['Della Respira', 'sans-serif']
      }
    }
  }
}
