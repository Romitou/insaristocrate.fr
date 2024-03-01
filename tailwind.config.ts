import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'red-logo': '#660806',
        'red-second': '#901716',
        'purple-logo': '#49307a',
        'purple-second': '#533c90'
      },
      fontFamily: {
        'della': ['Della Respira', 'sans-serif']
      }
    }
  }
}
