/* eslint-disable node/prefer-global/process */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@vueuse/nuxt', '@pinia/nuxt'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  imports: {
    dirs: [
      'store/**',
      'components/**',
    ],
  },
  runtimeConfig: {
    public: {
      ENVIRONMENT: process.env.ENVIRONMENT,
    },
  },
})
