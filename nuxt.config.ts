// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Poppins: ['500', '600', '700']
    }
  },
  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'sass:math';
          @import "@/assets/scss/config.scss";`
        }
      }
    }
  }
})
