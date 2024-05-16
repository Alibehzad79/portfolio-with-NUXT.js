// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/style.css'],
  components: [
    {
      path
        : '~/components',
      pathPrefix
        : false,
    },
  ],
})
