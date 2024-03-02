// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['assets/styles/font.css'],
  site: {
    url: 'https://insaristocrate.fr',
  },
  sitemap: {
    credits: false,
  }
})
