// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ['@nuxt/eslint'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'sass:math';
          @import "@/assets/scss/main.scss";`
        }
      }
    }
  }
})
