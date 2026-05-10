<script setup lang="tsx">
  useHead({
    title: "Home",
  });
</script>

<template>
  <div
    class="flex h-max min-h-max w-full flex-col items-center justify-center overflow-x-clip"
  >
    <HomeHero />
    <HomeQuality />
    <HomeDetail />
    <HomeReviews />
    <HomeOffer />
    <HomePreFooter />
    <HomeFooter />
  </div>
</template>
