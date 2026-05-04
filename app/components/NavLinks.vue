<script setup lang="tsx">
  import { NAV_ROUTES } from "~~/shared/utils/constants";
  const route = useRoute();
</script>

<template>
  <NuxtLink
    v-for="r in NAV_ROUTES"
    :key="r.name"
    :to="r.path"
    :class="{ 'text-black': route.path.includes(r.path) }"
    class="z-30 px-2 py-2.5 text-xs transition-all hover:text-black md:px-7 md:text-sm"
  >
    {{ r.name }}
  </NuxtLink>
</template>
