// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nConfig from './locales/i18n.config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      Poppins: ['500', '600', '700']
    }
  },
  i18n: i18nConfig,
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
