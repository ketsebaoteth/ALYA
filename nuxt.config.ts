import Tailwind from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  security: {
    enabled: false,
  },
  compatibilityDate: "2025-07-15",
  modules: [
    "@nuxt/eslint",
    "reka-ui/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-security",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [Tailwind()],
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
  postcss: {
    plugins: {
      cssnano: {
        preset: "default",
      },
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
  app: {
    head: {
      titleTemplate: "%s - ALYA Co.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
    rootAttrs: {
      "data-vaul-drawer-wrapper": "",
    },
  },
  runtimeConfig: {
    public: {
      buildAt: new Date().toLocaleString("nb-US", {
        timeZone: "Europe/Helsinki",
      }),
      environment: "production",
    },
  },
  typescript: {
    strict: true,
  },
  telemetry: false,
});
