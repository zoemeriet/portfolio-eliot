// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: []
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
})
