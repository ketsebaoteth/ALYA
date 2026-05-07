<script setup lang="tsx">
  useHead({
    title: "Home",
  });
</script>

<template>
  <div
    class="flex min-h-max h-max w-full flex-col items-center justify-center gap-20 overflow-x-clip"
  >
    <HomeHero />
    <HomeQuality />
    <HomeDetail />
    <HomeReviews />
    <HomeOffer />
    <HomeFooter />
  </div>
</template>
